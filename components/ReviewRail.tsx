'use client';

import { useEffect, useRef } from 'react';
import reviewData from '@/app/review-provenance.json';

export function ReviewRail() {
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const track = trackRef.current;
    if (!track || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let offset = 0, frame = 0, last = performance.now(), paused = false;
    const tick = (now: number) => {
      const elapsed = Math.min(now - last, 40); last = now;
      if (!paused && track.firstElementChild) {
        offset += elapsed * .028;
        const first = track.firstElementChild as HTMLElement;
        const gap = parseFloat(getComputedStyle(track).columnGap || '0');
        if (offset >= first.offsetWidth + gap) { offset -= first.offsetWidth + gap; track.append(first); }
        track.style.transform = `translate3d(${-offset}px,0,0)`;
      }
      frame = requestAnimationFrame(tick);
    };
    const pause = () => { paused = true; };
    const resume = () => { paused = false; last = performance.now(); };
    track.addEventListener('mouseenter', pause); track.addEventListener('mouseleave', resume);
    track.addEventListener('focusin', pause); track.addEventListener('focusout', resume);
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); track.removeEventListener('mouseenter', pause); track.removeEventListener('mouseleave', resume); track.removeEventListener('focusin', pause); track.removeEventListener('focusout', resume); };
  }, []);
  return <section className="reviews" aria-labelledby="reviews-heading"><div className="review-heading"><p className="kicker" id="reviews-heading">StealthAgents reviews</p><a href={reviewData.source} target="_blank" rel="noreferrer">Verified first-party source</a></div><div className="review-viewport"><div className="review-track" ref={trackRef}>{reviewData.records.map(review => <figure className="review-card" key={review.id} tabIndex={0}><div className="stars" aria-label={`${reviewData.ratingShownBySource} out of 5 stars`}>★★★★★</div><blockquote><strong>{review.headline}</strong><p>{review.body}</p></blockquote><figcaption>{review.name}<span>{review.detail}</span></figcaption></figure>)}</div></div></section>;
}
