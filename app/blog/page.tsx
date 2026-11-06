import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/content";
import { blogThumbnail } from "@/lib/editorialThumbnailFallback";
import { EditorialMotion, ScrubCopy } from "@/components/EditorialMotion";
import { EditorialThumbnail } from "@/components/EditorialThumbnail";
export const metadata: Metadata = {
  title: "Closing field notes",
  description:
    "Practical guides for source-linked closing coordination, review ownership, and controlled handoffs.",
  alternates: { canonical: "/blog" },
};
export default function BlogIndex() {
  return (
    <EditorialMotion className="motion-page">
      <header className="page-hero editorial-page-hero">
        <div>
          <p className="kicker">Closing field notes</p>
          <h1>Practical guidance, built from real handoffs.</h1>
          <p>
            Use these field notes to make source custody, checklist status,
            communication, and review ownership easier to inspect.
          </p>
        </div>
        <figure data-motion-image>
          <Image
            src="/images/editorial/blog-closing-workflow.jpg"
            alt="Operations specialist develops a closing handoff guide from organized source folders"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 780px) 100vw, 46vw"
          />
        </figure>
      </header>
      <section className="editorial-index-intro">
        <p className="kicker">Use the library</p>
        <h2>Move from a recurring problem to a controlled working method.</h2>
        <ScrubCopy>
          Choose a guide closest to the queue in front of you. Adapt its source
          fields, owner checkpoint, exception route, and close condition to your
          own approved systems.
        </ScrubCopy>
      </section>
      <section className="content-wrap">
        <div className="article-grid">
          {blogPosts.map((p, index) => (
            <Link
              className="article-card"
              href={`/blog/${p.slug}`}
              key={p.slug}
            >
              <EditorialThumbnail
                src={blogThumbnail(p.thumbnail, p.slug)}
                alt={`Editorial visual for ${p.title}`}
                featured={index === 0}
                priority={index === 0}
              />
              <span className="pill">{p.category}</span>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <span className="meta">Published {p.publishedAt}</span>
            </Link>
          ))}
        </div>
      </section>
    </EditorialMotion>
  );
}
