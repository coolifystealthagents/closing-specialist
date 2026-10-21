'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';

const primaryNav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' },
];

function isCurrent(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusables = () => Array.from(panelRef.current?.querySelectorAll<HTMLElement>('a,button') || []);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); buttonRef.current?.focus(); return; }
      if (event.key !== 'Tab') return;
      const nodes = focusables();
      if (!nodes.length) return;
      const first = nodes[0], last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    focusables()[0]?.focus();
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKey); };
  }, [open]);

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`} data-site-header>
      <Link className="brand" href="/" aria-label={`${site.name} home`}><Image src="/logo.svg" alt="" width={40} height={40} priority /><span>{site.name}</span></Link>
      <span className="powered-header">Powered by StealthAgents</span>
      <nav className="desktop-nav" aria-label="Primary navigation">{primaryNav.map(item => <Link key={item.href} href={item.href} aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}>{item.label}</Link>)}</nav>
      <button ref={buttonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}><span>{open ? 'Close' : 'Menu'}</span><i aria-hidden="true" /></button>
    </header>
    {open && <div className="menu-scrim" onMouseDown={event => event.target === event.currentTarget && setOpen(false)}><nav ref={panelRef} id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{primaryNav.map(item => <Link key={item.href} href={item.href} aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}>{item.label}</Link>)}<p>Powered by StealthAgents</p></nav></div>}
  </>;
}

export function Footer() {
  return <footer className="site-footer" data-site-footer>
    <div className="footer-brand"><Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={44} height={44} /><span>{site.name}</span></Link><p>Closing coordination support for title teams, transaction leaders, and accountable operations owners.</p></div>
    <div><p className="footer-label">Explore</p><div className="footer-links"><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/research">Research</Link><Link href="/contact-us">Contact Us</Link></div></div>
    <div className="footer-powered"><Image src="/brand/stealth-agents-logo-black.png" alt="StealthAgents" width={149} height={50} /><strong>Powered by StealthAgents</strong><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
    <p className="copyright">© {new Date().getFullYear()} {site.name}</p>
  </footer>;
}
