#!/usr/bin/env python3
import json, re, sys
from pathlib import Path

REPO = Path("/Users/bohoseventy/fleet/repos/closingspecialist")
OUT = REPO / "public/article-thumbnails/october-27"
OUT.mkdir(parents=True, exist_ok=True)

def load_items(path):
    text = Path(path).read_text()
    start = re.search(r"\[\s*\{", text).start()
    chunk = text[start:text.rindex("]") + 1]
    chunk = re.sub(r",(\s*[}\]])", r"\1", chunk)
    return json.loads(chunk)

items = []
for f, kind in [("lib/october27BlogBatchOne.ts", "blog"),
                ("lib/october27BlogBatchTwo.ts", "blog"),
                ("lib/october27ResearchBatch.ts", "research")]:
    for it in load_items(REPO / f):
        items.append((it, kind))

def wrap(text, width=32):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        if len(cur) + len(w) + 1 <= width:
            cur = (cur + " " + w).strip()
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    if len(lines) > 2:
        lines = [lines[0], " ".join(lines[1:])]
    return lines

for item, kind in items:
    slug = item["slug"]
    title = item["title"]
    lines = wrap(title)
    label = "BLOG" if kind == "blog" else "RESEARCH"
    accent = "#D86B45" if kind == "blog" else "#2E8B9A"
    tspans = "".join(
        f'<text x="76" y="{220 + i*62}" font-family="Arial, sans-serif" font-size="48" font-weight="700" fill="#16324A">{l}</text>'
        for i, l in enumerate(lines))
    aria = title.replace("&", "&amp;").replace('"', "&quot;").replace("<", "&lt;")
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="{aria}">'
        f'<rect width="1200" height="630" fill="#EEF8FA"/>'
        f'<circle cx="1060" cy="80" r="230" fill="{accent}" opacity=".16"/>'
        f'<path d="M0 520 Q300 430 620 520 T1200 455V630H0Z" fill="#D7EFF3"/>'
        f'<rect x="76" y="58" width="380" height="48" rx="24" fill="{accent}"/>'
        f'<text x="266" y="90" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#fff">{label}</text>'
        f'{tspans}'
        f'<text x="76" y="586" font-family="Arial, sans-serif" font-size="21" font-weight="700" fill="#16324A">CLOSING SPECIALIST \u00b7 OCTOBER 27, 2026</text>'
        f'</svg>\n'
    )
    (OUT / f"closingspecialist-{slug}.svg").write_text(svg)

print(f"wrote {len(items)} thumbnails to {OUT}")
