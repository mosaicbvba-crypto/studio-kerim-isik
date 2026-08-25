import Image from "next/image";
import { site } from "@/lib/data";
import FrameCorners from "./FrameCorners";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-wedding.jpg"
          alt="Studio Kerim Işık — Karamürsel'de düğün günü, gün batımı ışığında bir kare"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-reveal-crop"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-transparent" />
        <div className="grain pointer-events-none absolute inset-0" />
      </div>

      <FrameCorners className="hidden sm:block" />

      <div className="relative z-10 w-full px-6 pb-16 pt-40 md:px-10 md:pb-24">
        <div className="mx-auto max-w-8xl">
          <p
            className="mb-6 animate-fade-up text-xs font-semibold uppercase tracking-widest2 text-gold opacity-0 [animation-delay:200ms]"
          >
            {site.city} • {site.region}
          </p>

          <h1 className="max-w-4xl animate-fade-up font-serif text-[13vw] font-medium leading-[0.98] tracking-tight text-ivory opacity-0 [animation-delay:400ms] sm:text-[9vw] md:text-7xl lg:text-8xl">
            Bir gün değil.
            <br />
            <span className="italic text-stone">
              Ömür boyu anlatılacak
            </span>
            <br />
            bir hikâye.
          </h1>

          <div className="mt-10 flex animate-fade-up flex-col gap-8 opacity-0 [animation-delay:700ms] md:flex-row md:items-end md:justify-between">
            <p className="max-w-sm text-balance text-base leading-relaxed text-stone md:text-lg">
              En özel anlarınızı doğal, estetik ve sinematik bir anlatımla
              kayıt altına alıyoruz.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolyo"
                className="border border-ivory/70 px-7 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-300 hover:border-gold hover:bg-gold hover:tracking-wider hover:text-ink active:scale-[0.97]"
              >
                Portfolyoyu Keşfet
              </a>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold bg-gold/90 px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-all duration-300 hover:bg-transparent hover:tracking-wider hover:text-gold active:scale-[0.97]"
              >
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#marka"
        className="group absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.65rem] uppercase tracking-widest2 text-stone/80 transition-colors hover:text-gold"
      >
        <span>Aşağı Kaydır</span>
        <span className="relative h-10 w-px overflow-hidden bg-stone/30">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-drop bg-gold" />
        </span>
      </a>
    </section>
  );
}
