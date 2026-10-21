import { NextRequest, NextResponse } from 'next/server';

const canonicalHost = 'closingspecialist.com';
export function proxy(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0].trim();
  const host = (forwardedHost || request.headers.get('host') || '').split(':')[0].toLowerCase();
  const protocol = request.headers.get('x-forwarded-proto')?.split(',')[0].trim() || request.nextUrl.protocol.replace(':','');
  if (host === `www.${canonicalHost}` || (host === canonicalHost && protocol === 'http')) {
    const destination = request.nextUrl.clone();
    destination.protocol = 'https:';
    destination.host = canonicalHost;
    destination.port = '';
    return NextResponse.redirect(destination, 308);
  }
  return NextResponse.next();
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
