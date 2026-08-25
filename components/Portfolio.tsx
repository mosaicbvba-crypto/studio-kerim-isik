"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, useCallback } from "react";
import { galleryImages, type GalleryCategory } from "@/lib/data";
import Reveal from "./Reveal";

const filters: Array<GalleryCategory | "Tümü"> = [
  "Tümü",
  "Dış Çekim",
  "Düğün Hikâyesi",
  "Sinematik",
  "Drone",
  "Hazırlık",
];

const spanFor = (o: string) =>
  o === "portrait" ? "row-span-2" : o === "wide" ? "row-span-1" : "row-span-1";

export default function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("Tümü");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      active === "Tümü"
        ? galleryImages
        : galleryImages.filter((img) => img.category === active),
    [active]
  );

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i + 1) % filtered.length
      ),
    [filtered.length]
  );
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + filtered.length) % filtered.length
      ),
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [lightboxIndex, close, next, prev]);

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section id="portfolyo" className="relative bg-ink px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-8xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-gold">
              Portfolyo
            </p>
            <h2 className="max-w-xl font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-6xl">
              Seçili Hikâyeler
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-balance text-sm text-stone md:text-base">
              Her çiftin ritmi, her günün ışığı farklıdır.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="mb-10 flex flex-wrap gap-x-6 gap-y-3 md:mb-14">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`text-sm tracking-wide transition-colors ${
                active === f
                  ? "text-gold"
                  : "text-stone/70 hover:text-ivory"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="grid auto-rows-[14rem] grid-cols-2 gap-3 sm:auto-rows-[16rem] md:grid-cols-4 md:gap-4 lg:auto-rows-[18rem]">
          {filtered.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className={`group relative block w-full overflow-hidden bg-charcoal text-left ${spanFor(
                img.orientation
              )} ${img.orientation === "wide" ? "col-span-2" : "col-span-1"}`}
              aria-label={`${img.label ?? img.alt} — büyüt`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {img.label && (
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-serif text-lg italic text-ivory">
                    {img.label}
                  </p>
                  {img.sublabel && (
                    <p className="text-xs uppercase tracking-widest2 text-gold">
                      {img.sublabel}
                    </p>
                  )}
                </div>
              )}
              <span className="absolute right-3 top-3 text-[0.6rem] uppercase tracking-widest2 text-ivory/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Fotoğraf görüntüleyici"
          className="fixed inset-0 z-[100] flex flex-col bg-ink/98 backdrop-blur-md"
        >
          <div className="flex items-center justify-between px-6 py-5 md:px-10">
            <span className="font-mono text-xs tracking-widest text-stone">
              {String(lightboxIndex! + 1).padStart(2, "0")} /{" "}
              {String(filtered.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Kapat"
              className="text-2xl leading-none text-stone transition-colors hover:text-gold"
            >
              ✕
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-6 md:px-16">
            <button
              type="button"
              onClick={prev}
              aria-label="Önceki fotoğraf"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 p-3 text-3xl text-stone transition-colors hover:text-gold md:left-6"
            >
              ‹
            </button>

            <div className="relative h-full max-h-[75vh] w-full max-w-4xl">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Sonraki fotoğraf"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 p-3 text-3xl text-stone transition-colors hover:text-gold md:right-6"
            >
              ›
            </button>
          </div>

          <div className="px-6 pb-8 text-center md:px-10">
            {current.label && (
              <p className="font-serif text-xl italic text-ivory">
                {current.label}
              </p>
            )}
            <p className="text-xs uppercase tracking-widest2 text-gold">
              {current.sublabel ?? current.category}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
