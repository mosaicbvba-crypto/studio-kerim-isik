"use client";

import Image from "next/image";
import { useRef } from "react";
import { storyScenes } from "@/lib/data";
import Reveal from "./Reveal";

export default function StoryTimeline() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    railRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section id="hikaye" className="relative bg-charcoal py-28 md:py-36">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-gold">
              Anlatı
            </p>
            <h2 className="max-w-xl text-balance font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-6xl">
              Hikâye, &ldquo;evet&rdquo;ten çok önce başlar.
            </h2>
          </Reveal>

          <Reveal delay={120} className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Önceki sahne"
              className="h-11 w-11 border border-stone/30 text-lg text-stone transition-colors hover:border-gold hover:text-gold"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Sonraki sahne"
              className="h-11 w-11 border border-stone/30 text-lg text-stone transition-colors hover:border-gold hover:text-gold"
            >
              ›
            </button>
          </Reveal>
        </div>
      </div>

      <div
        ref={railRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 [scrollbar-width:none] md:gap-8 md:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {storyScenes.map((scene, i) => (
          <Reveal
            key={scene.number}
            delay={i * 80}
            className="relative w-[78vw] flex-none snap-start sm:w-[52vw] md:w-[30vw] lg:w-[24vw]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink">
              <Image
                src={scene.image}
                alt={scene.alt}
                fill
                sizes="(max-width: 768px) 80vw, 25vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <span className="absolute left-4 top-4 font-serif text-3xl text-gold/90">
                {scene.number}
              </span>
            </div>
            <div className="mt-5 max-w-xs">
              <h3 className="font-serif text-2xl text-ivory">{scene.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                {scene.text}
              </p>
            </div>
          </Reveal>
        ))}
        <div className="w-2 flex-none md:w-6" aria-hidden />
      </div>
    </section>
  );
}
