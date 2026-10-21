import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/content';
export const metadata:Metadata={title:'Closing field notes',description:'Practical guides for source-linked closing coordination, review ownership, and controlled handoffs.',alternates:{canonical:'/blog'}};
export default function BlogIndex(){return <main id="main-content" tabIndex={-1}><header className="page-hero"><div><p className="kicker">Closing field notes</p><h1>Visible requirements. Calm handoffs.</h1><p>Practical guidance for making source custody, checklist status, communication, and review ownership easier to inspect.</p></div></header><section className="content-wrap"><div className="article-grid">{blogPosts.map(p=><Link className="article-card" href={`/blog/${p.slug}`} key={p.slug}>{p.thumbnail&&<Image src={p.thumbnail} alt="" width={1200} height={630}/>}<span className="pill">{p.category}</span><h2>{p.title}</h2><p>{p.description}</p><span className="meta">Published {p.publishedAt}</span></Link>)}</div></section></main>}
