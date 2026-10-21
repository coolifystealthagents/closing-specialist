const canonicalHost = 'closingspecialist.com';

type Scheme = 'http' | 'https';

export type CanonicalRequest = {
  host: string | null;
  forwardedHost: string | null;
  cfVisitor: string | null;
  forwardedProto: string | null;
  urlProtocol: string;
  pathname: string;
  search: string;
};

function validScheme(value: unknown): Scheme | undefined {
  if (typeof value !== 'string') return undefined;
  const normalized = value.toLowerCase();
  return normalized === 'http' || normalized === 'https' ? normalized : undefined;
}

function normalizedHost(value: string | null): string {
  const first = value?.split(',')[0]?.trim().toLowerCase() || '';
  if (first.startsWith('[')) return first.slice(1, first.indexOf(']'));
  return first.split(':')[0];
}

function publicHost(host: string, forwardedHost: string): string {
  const accepted = new Set([canonicalHost, `www.${canonicalHost}`]);
  if (accepted.has(host)) return host;
  if (accepted.has(forwardedHost)) return forwardedHost;
  return host || forwardedHost;
}

function clientScheme(input: CanonicalRequest): Scheme {
  if (input.cfVisitor) {
    try {
      const parsed = JSON.parse(input.cfVisitor) as { scheme?: unknown } | null;
      const scheme = validScheme(parsed?.scheme);
      if (scheme) return scheme;
    } catch {
      // Malformed edge metadata is absent, not fatal.
    }
  }

  const forwarded = validScheme(input.forwardedProto?.split(',')[0]?.trim());
  return forwarded || validScheme(input.urlProtocol.replace(':', '')) || 'https';
}

export function canonicalRedirect(input: CanonicalRequest): string | null {
  const host = publicHost(normalizedHost(input.host), normalizedHost(input.forwardedHost));
  const scheme = clientScheme(input);
  if (host !== `www.${canonicalHost}` && !(host === canonicalHost && scheme === 'http')) return null;

  const destination = new URL(`https://${canonicalHost}`);
  destination.pathname = input.pathname;
  destination.search = input.search;
  return destination.toString();
}
