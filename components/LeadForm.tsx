'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const personalDomains = new Set(['gmail.com','yahoo.com','hotmail.com','outlook.com','icloud.com','aol.com','proton.me','protonmail.com']);

export function LeadForm({ source = 'contact-page-consultation' }: { source?: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (busy) return;
    const form = event.currentTarget; const data = new FormData(form);
    const domain = String(data.get('email') || '').trim().toLowerCase().split('@')[1];
    if (!domain || personalDomains.has(domain)) { setError('Please use your business email address.'); return; }
    setBusy(true); setError(''); data.set('source', source); data.set('_page_url', location.href);
    try {
      const response = await fetch('/api/submit-lead', { method: 'POST', body: data });
      const result = await response.json();
      if (!response.ok || !result.ok || result.ignored) { setError(result.message || 'Please check your details and try again.'); setBusy(false); return; }
      const payload = Object.fromEntries(data.entries()); delete payload.website_url;
      window.acrTracker?.trackLead({ ...payload, source });
      router.push('/thank-you');
    } catch { setError('We could not send your request. Please try again.'); setBusy(false); }
  }
  return <form className="lead-form" onSubmit={submit}>
    <div className="field-row"><label>First name <span aria-hidden="true">*</span><input name="first_name" autoComplete="given-name" required maxLength={80} /></label><label>Last name <span aria-hidden="true">*</span><input name="last_name" autoComplete="family-name" required maxLength={80} /></label></div>
    <label>Business email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required maxLength={160} /></label>
    <div className="field-row phone-row"><label className="country-field">Code<select name="phone_country" defaultValue="+1"><option value="+1">US/CA +1</option><option value="+44">UK +44</option><option value="+61">AU +61</option><option value="+63">PH +63</option><option value="other">Other</option></select></label><label>Phone number<input name="phone" type="tel" autoComplete="tel-national" inputMode="tel" maxLength={40} /></label></div>
    <label>Company <span aria-hidden="true">*</span><input name="company" autoComplete="organization" required maxLength={120} /></label>
    <label>Website / URL<input name="company_website" type="url" autoComplete="url" placeholder="https://" maxLength={500} /></label>
    <div className="field-row"><label>Company size <span aria-hidden="true">*</span><select name="company_size" required defaultValue=""><option value="" disabled>Select</option><option>1 to 10</option><option>11 to 50</option><option>51 to 200</option><option>201 to 500</option><option>501+</option></select></label><label>Roles to fill <span aria-hidden="true">*</span><select name="positions_to_fill" required defaultValue=""><option value="" disabled>Select</option><option>1</option><option>2 to 3</option><option>4 to 10</option><option>11+</option><option>Not sure yet</option></select></label></div>
    <label>How did you hear about us? <span aria-hidden="true">*</span><select name="referral_source" required defaultValue=""><option value="" disabled>Select</option><option>Search engine</option><option>Referral</option><option>Business network</option><option>Social media</option><option>Stealth Agents</option><option>Other</option></select></label>
    <label>What closing workflow needs support?<textarea name="message" rows={3} maxLength={1200} placeholder="Share the queue, systems, review owner, and timing. Do not include client or financial data." /></label>
    <label className="honeypot" aria-hidden="true">Website<input name="website_url" tabIndex={-1} autoComplete="off" /></label>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button primary submit-button" type="submit" disabled={busy}>{busy ? 'Sending securely...' : 'Plan my closing support role'}</button>
    <p className="form-note">Submitting this form starts a staffing conversation. Scheduling follows on the next page.</p>
  </form>;
}
