import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArticleCompanion, MobileToc } from '@/components/ArticleLayout';
import { blogPosts, blogBySlug } from '@/lib/content';
import TocSync from '@/components/TocSync';
const displayPublishedDate = (value: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));

const idFor=(value:string,index:number)=>`section-${index+1}-${value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'').slice(0,56)}`;
export function generateStaticParams(){return blogPosts.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const p=blogBySlug(slug);return p?{title:p.title,description:p.description,alternates:{canonical:`/blog/${slug}`},openGraph:{type:'article',publishedTime:p.publishedAt,images:p.thumbnail?[p.thumbnail]:undefined}}:{};}
export default async function BlogArticle({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const p=blogBySlug(slug);if(!p)notFound();const related=blogPosts.filter(x=>x.slug!==p.slug).slice(0,3);const items=[...p.sections.map((s,i)=>({id:idFor(s.heading,i),label:s.heading})),{id:'questions',label:'Questions'}];return <main id="main-content" tabIndex={-1}><TocSync />
<header className="article-hero"><div><p className="kicker">Closing field notes / {p.category}</p><h1>{p.title}</h1><p>{p.description}</p><span className="meta">Published <time dateTime={p.publishedAt}>{displayPublishedDate(p.publishedAt)}</time></span></div></header>
<MobileToc items={items}/><section className="article-shell"><article className="prose">{p.thumbnail&&<Image className="article-image" src={p.thumbnail} alt="" width={1200} height={630} priority/>}{p.sections.map((s,i)=><section key={s.heading} id={idFor(s.heading,i)}><h2>{s.heading}</h2>{s.paragraphs.map((x,j)=><p key={`${i}-${j}`}>{x}</p>)}</section>)}<section id="questions"><h2>Questions</h2>{p.faq.map(x=><details key={x.q}><summary>{x.q}</summary><p>{x.a}</p></details>)}</section></article><ArticleCompanion kind="Article" items={items} related={related.map(x=>({href:`/blog/${x.slug}`,label:x.title}))}/></section>
</main>;}
