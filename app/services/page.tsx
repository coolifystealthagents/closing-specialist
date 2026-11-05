import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { EditorialMotion, ScrubCopy } from "@/components/EditorialMotion";

export const metadata: Metadata = {
  title: "Closing support services",
  description:
    "Explore six bounded closing coordination support lanes with clear inputs, outputs, review points, and authority boundaries.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <EditorialMotion className="motion-page">
      <header className="page-hero editorial-page-hero">
        <div>
          <p className="kicker">Closing support services</p>
          <h1>
            Make closing work{" "}
            <span className="inline-work-image" aria-hidden="true" /> visible
            before it moves.
          </h1>
          <p>
            Choose a bounded support lane, keep authority with qualified owners,
            and make every handoff visible through sources, status, evidence,
            and escalation.
          </p>
          <Link className="button primary" href="/contact-us">
            Map the first support lane
          </Link>
        </div>
        <figure data-motion-image>
          <Image
            src="/images/editorial/services-closing-workflow.jpg"
            alt="Closing operations professionals organize blank source folders and a review checklist at a shared desk"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 780px) 100vw, 46vw"
          />
        </figure>
      </header>
      <div className="service-marquee" aria-label="Closing support lanes">
        <div>
          {[...site.services, ...site.services].map((service, index) => (
            <span key={`${service.slug}-${index}`}>{service.name}</span>
          ))}
        </div>
      </div>
      <section className="section service-system-intro">
        <p className="kicker">One preparation system</p>
        <h2>Source in. Review-ready record out.</h2>
        <ScrubCopy>
          Each lane begins with an approved source, produces a named output,
          stops at an explicit decision boundary, and closes only when the
          accountable owner accepts the handoff.
        </ScrubCopy>
      </section>
      <section className="section service-directory">
        <div className="section-heading">
          <p className="kicker">The complete service system</p>
          <h2>Six distinct queues. One accountability model.</h2>
        </div>
        {site.services.map((service, index) => (
          <article key={service.slug} className="directory-row">
            <div>
              <span className="functional-index">
                Service {index + 1} of {site.services.length}
              </span>
              <h2>{service.name}</h2>
              <p>{service.short}</p>
            </div>
            <ul>
              {service.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
            <Link
              className="button secondary"
              href={`/services/${service.slug}`}
            >
              Review scope and boundaries
            </Link>
          </article>
        ))}
      </section>
      <section className="authority-band">
        <div>
          <p className="kicker">How to choose</p>
          <h2>Start where uncertainty is expensive.</h2>
        </div>
        <div className="authority-grid">
          <article>
            <h3>Choose a frequent queue</h3>
            <p>
              Prioritize work that repeats enough to document and review. An
              occasional ambiguous task is a poor first delegation lane.
            </p>
          </article>
          <article>
            <h3>Choose a visible output</h3>
            <p>
              The owner should be able to confirm what was checked, which source
              was used, and what remains unresolved.
            </p>
          </article>
          <article>
            <h3>Choose an available reviewer</h3>
            <p>
              A specialist can prepare and coordinate, but a qualified owner
              must remain available for exceptions and final acceptance.
            </p>
          </article>
        </div>
      </section>
      <section className="section faq-block">
        <p className="kicker">Service planning questions</p>
        <h2>Before you define the role</h2>
        <details>
          <summary>Can one specialist cover several service lanes?</summary>
          <p>
            Yes, when the workflows share systems, source rules, and review
            ownership. Begin with one lane, prove the handoff, then expand
            intentionally.
          </p>
        </details>
        <details>
          <summary>
            What must stay with licensed or authorized personnel?
          </summary>
          <p>
            Legal interpretation, title and escrow decisions, settlement
            approval, notarization, identity verification, funding, wires,
            disbursement, signatures, and final close authority remain with
            qualified owners.
          </p>
        </details>
        <details>
          <summary>What should we bring to a consultation?</summary>
          <p>
            Bring one representative workflow, its source systems, current
            owner, completion standard, common exceptions, and the review
            evidence your team needs.
          </p>
        </details>
      </section>
      <section className="closing-cta">
        <h2>Not sure which lane comes first?</h2>
        <p>
          Bring the queue that creates the most search, follow-up, or status
          reconstruction.
        </p>
        <Link className="button light" href="/contact-us">
          Map the first support lane
        </Link>
      </section>
    </EditorialMotion>
  );
}
