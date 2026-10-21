import { NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '../../../lib/lead-fallback-mattermost';

const MAX_BODY_BYTES = 64 * 1024;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 8;
const personalDomains = new Set(['gmail.com','yahoo.com','hotmail.com','outlook.com','icloud.com','aol.com','proton.me','protonmail.com']);
const attempts = new Map<string, number[]>();

function json(body: object, status = 200, headers: HeadersInit = {}) {
  return NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store', ...headers } });
}
function value(form: FormData, name: string, max: number) {
  const item = form.get(name);
  return typeof item === 'string' ? item.trim().slice(0, max) : '';
}
function isAllowedOrigin(request: Request) {
  const source = request.headers.get('origin') || request.headers.get('referer');
  if (!source) return process.env.NODE_ENV !== 'production';
  try {
    const hostname = new URL(source).hostname.toLowerCase();
    return hostname === 'closingspecialist.com' || hostname === 'www.closingspecialist.com' || (process.env.NODE_ENV !== 'production' && ['localhost','127.0.0.1'].includes(hostname));
  } catch { return false; }
}
function clientKey(request: Request) {
  return (request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown').trim().slice(0, 80);
}
function rateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter(time => now - time < RATE_WINDOW_MS);
  recent.push(now); attempts.set(key, recent);
  if (attempts.size > 1000) for (const [entry, times] of attempts) if (!times.some(time => now - time < RATE_WINDOW_MS)) attempts.delete(entry);
  return recent.length > RATE_LIMIT;
}
async function boundedFormData(request: Request) {
  const declared = Number(request.headers.get('content-length') || 0);
  if (declared > MAX_BODY_BYTES) throw new Error('too_large');
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.startsWith('multipart/form-data') && !contentType.startsWith('application/x-www-form-urlencoded')) throw new Error('unsupported');
  if (!request.body) throw new Error('invalid');
  const reader = request.body.getReader(); const chunks: Uint8Array[] = []; let total = 0;
  while (true) { const { value: chunk, done } = await reader.read(); if (done) break; total += chunk.byteLength; if (total > MAX_BODY_BYTES) { await reader.cancel(); throw new Error('too_large'); } chunks.push(chunk); }
  const body = new Uint8Array(total); let offset = 0; for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
  return new Response(body, { headers: { 'content-type': contentType } }).formData();
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) return json({ ok: false, message: 'This request was not accepted.' }, 403);
  if (rateLimited(clientKey(request))) return json({ ok: false, message: 'Too many attempts. Please wait and try again.' }, 429, { 'Retry-After': '600' });
  let form: FormData;
  try { form = await boundedFormData(request); }
  catch (error) { const reason = error instanceof Error ? error.message : 'invalid'; return json({ ok: false, message: reason === 'too_large' ? 'The submitted request is too large.' : 'The form request is not valid.' }, reason === 'too_large' ? 413 : 415); }
  if (value(form, 'website_url', 200)) return json({ ok: true });

  const source = value(form, 'source', 80);
  const full = source.startsWith('contact-page');
  const firstName = value(form, 'first_name', 80);
  const lastName = value(form, 'last_name', 80);
  const legacyName = value(form, 'name', 160);
  const email = value(form, 'email', 160).toLowerCase();
  const company = value(form, 'company', 120);
  const companyWebsite = value(form, 'company_website', 500);
  const companySize = value(form, 'company_size', 40);
  const positions = value(form, 'positions_to_fill', 40);
  const referral = value(form, 'referral_source', 80);
  const phone = value(form, 'phone', 40);
  const phoneCountry = value(form, 'phone_country', 20);
  const message = value(form, 'message', 1200);
  const pageUrl = value(form, '_page_url', 500) || (request.headers.get('referer') || '').slice(0, 500);
  if (!/^\S+@\S+\.\S+$/.test(email) || (full ? (!firstName || !lastName || !company || !companySize || !positions || !referral) : !legacyName)) return json({ ok: false, message: 'Please complete every required field.' }, 400);
  if (full && personalDomains.has(email.split('@')[1])) return json({ ok: false, message: 'Please use your business email address.' }, 400);

  const payload = { source, first_name:firstName, last_name:lastName, name:legacyName, email, company, company_website:companyWebsite, company_size:companySize, positions_to_fill:positions, referral_source:referral, phone, phone_country:phoneCountry, message, _page_url:pageUrl };
  const endpoint = process.env.ACR_LEAD_ENDPOINT;
  if (endpoint) {
    const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 8000);
    try { const forwarded = await fetch(endpoint, { method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify(payload), signal:controller.signal, cache:'no-store' }); if (!forwarded.ok) return json({ ok:false, message:'We could not send your request.' }, 502); }
    catch { return json({ ok:false, message:'We could not send your request.' }, 502); }
    finally { clearTimeout(timeout); }
  }
  void sendLeadFallbackToMattermost({ name:[firstName,lastName].filter(Boolean).join(' ')||legacyName, email, phone:[phoneCountry,phone].filter(Boolean).join(' '), business:company, message, companySize, positions, referral, pageUrl, userAgent:(request.headers.get('user-agent')||'').slice(0,500) });
  return json({ ok: true });
}
