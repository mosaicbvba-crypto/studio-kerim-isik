import { services } from "@/lib/data";
import { site } from "@/lib/data";
import Reveal from "./Reveal";

export default function Services() {
  const mid = Math.ceil(services.length / 2);
  const columns = [services.slice(0, mid), services.slice(mid)];

  return (
    <section id="hizmetler" className="relative bg-ink px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-8xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-gold">
              Hizmetler
            </p>
            <h2 className="max-w-xl font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-6xl">
              Her anın kendi ışığı var.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold/60 px-6 py-3 text-sm tracking-wide text-gold transition-all hover:bg-gold hover:text-ink"
            >
              Size özel çekim planı için iletişime geçin
            </a>
          </Reveal>
        </div>

        <div className="grid gap-x-16 md:grid-cols-2">
          {columns.map((col, ci) => (
            <div key={ci}>
              {col.map((s, i) => (
                <Reveal key={s.number} delay={i * 60} className="group border-t border-ivory/10 py-7 last:border-b md:py-8">
                  <div className="flex items-baseline gap-5 transition-transform duration-500 group-hover:translate-x-2 md:gap-8">
                    <span className="font-serif text-2xl text-stone/40 transition-colors duration-500 group-hover:text-gold md:text-3xl">
                      {s.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-ivory md:text-[1.7rem]">
                        {s.title}
                      </h3>
                      {s.description && (
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-stone">
                          {s.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
