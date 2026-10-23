import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArticleCompanion, MobileToc } from '@/components/ArticleLayout';
import { researchPosts, researchBySlug } from '@/lib/content';
import TocSync from '@/components/TocSync';
const displayPublishedDate = (value: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));

const idFor=(value:string,index:number)=>`finding-${index+1}-${value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'').slice(0,56)}`;
export function generateStaticParams(){return researchPosts.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const p=researchBySlug(slug);return p?{title:p.title,description:p.summary,alternates:{canonical:`/research/${slug}`},openGraph:{type:'article',publishedTime:p.publishedAt,images:p.thumbnail?[p.thumbnail]:undefined}}:{};}
export default async function ResearchArticle({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const p=researchBySlug(slug);if(!p)notFound();const sections=p.sections||[];const related=researchPosts.filter(x=>x.slug!==p.slug).slice(0,3);const items=[{id:'key-finding',label:'Key finding'},...sections.map((s,i)=>({id:idFor(s.heading,i),label:s.heading})),{id:'sources',label:'Sources'}];return <main id="main-content" tabIndex={-1}><TocSync />
<header className="article-hero research-hero"><div><p className="kicker">Research / {p.cluster}</p><h1>{p.title}</h1><p>{p.summary}</p><span className="meta">Published <time dateTime={p.publishedAt}>{displayPublishedDate(p.publishedAt)}</time></span></div></header>
<MobileToc items={items}/><section className="article-shell"><article className="prose">{p.thumbnail&&<Image className="article-image" src={p.thumbnail} alt="" width={1200} height={630} priority/>}<section id="key-finding" className="key-finding"><p className="kicker">Key finding</p><h2>{p.finding}</h2></section>{sections.map((s,i)=><section key={s.heading} id={idFor(s.heading,i)}><h2>{s.heading}</h2>{s.paragraphs.map((x,j)=><p key={`${i}-${j}`}>{x}</p>)}</section>)}<section id="sources"><h2>Sources</h2><ol className="source-list">{p.sources.map(x=><li key={x.url}><a href={x.url} target="_blank" rel="noreferrer">{x.label}<span className="sr-only">, opens in a new tab</span></a></li>)}</ol></section></article><ArticleCompanion kind="Research" items={items} related={related.map(x=>({href:`/research/${x.slug}`,label:x.title}))}/></section>
</main>;}
