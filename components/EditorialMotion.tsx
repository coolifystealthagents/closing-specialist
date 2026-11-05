"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function EditorialMotion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.utils
        .toArray<HTMLElement>("[data-motion-image]")
        .forEach((element) => {
          gsap.fromTo(
            element,
            { scale: 0.88, opacity: 0.72 },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                end: "center 48%",
                scrub: 0.65,
              },
            },
          );
        });
      gsap.utils
        .toArray<HTMLElement>("[data-scrub-copy]")
        .forEach((element) => {
          const words = Array.from(
            element.querySelectorAll<HTMLElement>("span"),
          );
          gsap.fromTo(
            words,
            { opacity: 0.16 },
            {
              opacity: 1,
              stagger: 0.025,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                end: "bottom 58%",
                scrub: 0.8,
              },
            },
          );
        });
    },
    { scope },
  );

  return (
    <main ref={scope} id="main-content" className={className} tabIndex={-1}>
      {children}
    </main>
  );
}

export function ScrubCopy({ children }: { children: string }) {
  return (
    <p data-scrub-copy>
      {children.split(" ").map((word, index) => (
        <span key={`${word}-${index}`}>{word} </span>
      ))}
    </p>
  );
}
