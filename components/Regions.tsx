import { regions, site } from "@/lib/data";
import Reveal from "./Reveal";

const offsets = [
  "md:translate-y-0",
  "md:translate-y-8",
  "md:-translate-y-4",
  "md:translate-y-10",
  "md:-translate-y-2",
  "md:translate-y-4",
];

const sizes = [
  "text-4xl md:text-6xl",
  "text-3xl md:text-4xl",
  "text-4xl md:text-5xl",
  "text-2xl md:text-3xl",
  "text-3xl md:text-4xl",
  "text-2xl md:text-3xl",
];

export default function Regions() {
  return (
    <section id="bolgeler" className="relative bg-charcoal px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-8xl">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-gold">
            Bölgeler
          </p>
          <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-6xl">
            Karamürsel&rsquo;den başlayan hikâyeler.
          </h2>
        </Reveal>

        <Reveal
          delay={150}
          className="mt-16 flex flex-wrap items-baseline gap-x-10 gap-y-6 border-y border-ivory/10 py-14 md:mt-20 md:gap-x-16 md:py-20"
        >
          {regions.map((r, i) => (
            <span
              key={r}
              className={`font-serif italic text-stone/90 transition-colors hover:text-gold ${sizes[i % sizes.length]} ${offsets[i % offsets.length]}`}
            >
              {r}
            </span>
          ))}
          <span className="font-serif text-2xl italic text-stone/40 md:text-3xl">
            ve çevre bölgeler
          </span>
        </Reveal>

        <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal delay={100} className="max-w-lg">
            <p className="text-balance text-sm leading-relaxed text-stone md:text-base">
              Studio Kerim Işık, Karamürsel merkezli olarak planlamaya bağlı
              şekilde Kocaeli ve çevresindeki düğün ve özel gün
              organizasyonlarında fotoğraf ve video çekimi hizmeti sunar.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-ivory transition-colors hover:text-gold"
            >
              Haritada Gör
              <span className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-12" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
