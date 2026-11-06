const blogFallbacks: Record<string, string> = {
  "post-closing-record-check":
    "/thumbnails/october-12/post-closing-record-gap-log.svg",
  "closing-status-update-rhythm":
    "/thumbnails/october-12/stakeholder-handoff-acknowledgment-study.svg",
  "real-estate-milestone-map":
    "/thumbnails/october-12/milestone-timestamp-agreement-study.svg",
  "closing-document-index":
    "/thumbnails/october-12/closing-document-receipt-log.svg",
  "closing-manager-vs-closing-va":
    "/thumbnails/november-01/closingspecialist-map-the-closing-checklist-decision-to-one-accountable-owner-2026-11-01.webp",
};

const researchFallbacks = [
  {
    match: "closing-checklist",
    src: "/thumbnails/october-12/closing-checklist-completeness-study.svg",
  },
  {
    match: "document-coordination",
    src: "/thumbnails/october-12/document-version-lineage-study.svg",
  },
  {
    match: "date-milestone",
    src: "/thumbnails/october-12/milestone-timestamp-agreement-study.svg",
  },
  {
    match: "stakeholder-updates",
    src: "/thumbnails/october-12/stakeholder-handoff-acknowledgment-study.svg",
  },
  {
    match: "post-closing-records",
    src: "/thumbnails/october-12/post-closing-record-gap-log.svg",
  },
  {
    match: "closing-file-preparation",
    src: "/thumbnails/october-13/closing-package-completeness-agreement.svg",
  },
] as const;

export function blogThumbnail(src: string | undefined, slug: string) {
  return src ?? blogFallbacks[slug] ?? "/images/editorial/blog-closing-workflow.jpg";
}

export function researchThumbnail(src: string | undefined, slug: string) {
  return (
    src ??
    researchFallbacks.find(({ match }) => slug.includes(match))?.src ??
    "/images/editorial/research-closing-analysis.jpg"
  );
}
