import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Footer, Header } from '@/components/SiteChrome';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: { default: `${site.name} | Closing coordination support`, template: `%s | ${site.name}` },
  description: site.heroBody,
  openGraph: { type: 'website', siteName: site.name, images: ['/hero.webp'] },
  icons: { icon: '/logo.svg', shortcut: '/logo.svg', apple: '/logo.svg' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#173f34' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-design="closing-desk"><body><Header />{children}<Footer /><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'${site.siteId}',endpoint:'/ingest/track',debug:false};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive" /></body></html>;
}
