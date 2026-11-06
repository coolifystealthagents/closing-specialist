import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { researchPosts } from "@/lib/content";
import { researchThumbnail } from "@/lib/editorialThumbnailFallback";
import { EditorialMotion, ScrubCopy } from "@/components/EditorialMotion";
import { EditorialThumbnail } from "@/components/EditorialThumbnail";
export const metadata: Metadata = {
  title: "Closing operations research",
  description:
    "Evidence and control design for closing operations, source quality, handoffs, and review agreement.",
  alternates: { canonical: "/research" },
};
export default function ResearchIndex() {
  return (
    <EditorialMotion className="motion-page">
      <header className="page-hero editorial-page-hero research-index-hero">
        <div>
          <p className="kicker">Research library</p>
          <h1>Study the evidence behind stronger closing controls.</h1>
          <p>
            Focused research notes on requirement control, review agreement,
            source evidence, timing, and exception handoffs.
          </p>
        </div>
        <figure data-motion-image>
          <Image
            src="/images/editorial/research-closing-analysis.jpg"
            alt="Closing operations analyst compares abstract source records with exception and timing patterns"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 780px) 100vw, 46vw"
          />
        </figure>
      </header>
      <section className="editorial-index-intro">
        <p className="kicker">Read the method first</p>
        <h2>Use findings as operating questions, not universal claims.</h2>
        <ScrubCopy>
          Check the population, evidence standard, limitations, and review
          ownership before applying a research note to your own workflow. Local
          policy and qualified judgment still control.
        </ScrubCopy>
      </section>
      <section className="content-wrap">
        <div className="content-grid">
          {researchPosts.map((p, index) => (
            <Link
              className="content-card"
              href={`/research/${p.slug}`}
              key={p.slug}
            >
              <EditorialThumbnail
                src={researchThumbnail(p.thumbnail, p.slug)}
                alt={`Research visual for ${p.title}`}
                featured={index === 0}
                priority={index === 0}
              />
              <span className="pill">{p.cluster}</span>
              <h2>{p.title}</h2>
              <p>{p.summary}</p>
              <span className="meta">Published {p.publishedAt}</span>
            </Link>
          ))}
        </div>
      </section>
    </EditorialMotion>
  );
}
