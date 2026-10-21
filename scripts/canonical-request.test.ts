import assert from 'node:assert/strict';
import test from 'node:test';
import { canonicalRedirect } from '../lib/canonical-request.ts';

const base = {
  host: 'closingspecialist.com',
  forwardedHost: null,
  cfVisitor: '{"scheme":"https"}',
  forwardedProto: 'https',
  urlProtocol: 'http:',
  pathname: '/blog/earnest-money-receipt-custody',
  search: '?utm_source=qa&blank=',
};

test('redirects the public apex when Cloudflare reports an HTTP visitor despite an internal forwarded host', () => {
  assert.equal(canonicalRedirect({ ...base, forwardedHost: 'hp3qub1yj1hvplvlumbyjj82.50.188.207.174.sslip.io', cfVisitor: '{"scheme":"http"}' }), 'https://closingspecialist.com/blog/earnest-money-receipt-custody?utm_source=qa&blank=');
});

test('redirects www to the fixed HTTPS apex while preserving path and query', () => {
  assert.equal(canonicalRedirect({ ...base, host: 'www.closingspecialist.com' }), 'https://closingspecialist.com/blog/earnest-money-receipt-custody?utm_source=qa&blank=');
});

test('does not redirect the canonical HTTPS apex', () => {
  assert.equal(canonicalRedirect(base), null);
});

test('uses a canonical forwarded host only when the direct host is not public', () => {
  assert.equal(canonicalRedirect({ ...base, host: '127.0.0.1:43170', forwardedHost: 'www.closingspecialist.com' }), 'https://closingspecialist.com/blog/earnest-money-receipt-custody?utm_source=qa&blank=');
});

test('never redirects a hostile host', () => {
  assert.equal(canonicalRedirect({ ...base, host: 'closingspecialist.com.evil.example', forwardedHost: 'internal.example', cfVisitor: '{"scheme":"http"}' }), null);
});

test('falls through malformed Cloudflare metadata to a validated forwarded scheme', () => {
  assert.equal(canonicalRedirect({ ...base, cfVisitor: '{bad', forwardedProto: 'http, https' }), 'https://closingspecialist.com/blog/earnest-money-receipt-custody?utm_source=qa&blank=');
});

test('ignores unsupported forwarded schemes', () => {
  assert.equal(canonicalRedirect({ ...base, cfVisitor: null, forwardedProto: 'ftp', urlProtocol: 'https:' }), null);
});

test('keeps a protocol-looking path on the fixed canonical authority', () => {
  assert.equal(canonicalRedirect({ ...base, host: 'www.closingspecialist.com', pathname: '//evil.example/path', search: '?x=1' }), 'https://closingspecialist.com//evil.example/path?x=1');
});
