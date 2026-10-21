import { NextRequest, NextResponse } from 'next/server';
import { canonicalRedirect } from './lib/canonical-request';

export function proxy(request: NextRequest) {
  const destination = canonicalRedirect({
    host: request.headers.get('host'),
    forwardedHost: request.headers.get('x-forwarded-host'),
    cfVisitor: request.headers.get('cf-visitor'),
    forwardedProto: request.headers.get('x-forwarded-proto'),
    urlProtocol: request.nextUrl.protocol,
    pathname: request.nextUrl.pathname,
    search: request.nextUrl.search,
  });
  if (destination) return NextResponse.redirect(destination, 308);
  return NextResponse.next();
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
