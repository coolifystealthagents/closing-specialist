import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';
export const metadata:Metadata={title:'Closing operations research',description:'Evidence and control design for closing operations, source quality, handoffs, and review agreement.',alternates:{canonical:'/research'}};
export default function ResearchIndex(){return <main id="main-content" tabIndex={-1}><header className="page-hero"><div><p className="kicker">Research library</p><h1>Evidence for closing operations.</h1><p>Focused research notes on requirement control, review agreement, source evidence, timing, and exception handoffs.</p></div></header><section className="content-wrap"><div className="content-grid">{researchPosts.map(p=><Link className="content-card" href={`/research/${p.slug}`} key={p.slug}>{p.thumbnail&&<Image src={p.thumbnail} alt="" width={1200} height={630}/>}<span className="pill">{p.cluster}</span><h2>{p.title}</h2><p>{p.summary}</p><span className="meta">Published {p.publishedAt}</span></Link>)}</div></section></main>}
