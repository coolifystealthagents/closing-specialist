'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type TocItem = { id: string; label: string };

export function ArticleCompanion({ items, kind, related }: { items: TocItem[]; kind: string; related: { href: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id || '');
  useEffect(() => {
    const nodes = items.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-110px 0px -60% 0px', threshold: [0, .2, 1] });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);
  return <aside className="article-sidebar" aria-label={`${kind} companion`}><div className="sidebar-scroll"><p className="kicker">On this page</p><nav className="toc" aria-label="Table of contents">{items.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setActive(item.id)} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}</nav><div className="sidebar-module"><h3>Related reading</h3>{related.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div><div className="sidebar-cta"><p>Need a reviewable closing support lane?</p><Link href="/contact-us">Plan the role</Link></div></div></aside>;
}

export function MobileToc({ items }: { items: TocItem[] }) {
  return <details className="mobile-toc"><summary>Table of contents</summary><nav>{items.map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav></details>;
}
