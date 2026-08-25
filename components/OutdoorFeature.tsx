import Image from "next/image";
import Reveal from "./Reveal";

export default function OutdoorFeature() {
  return (
    <section className="relative bg-charcoal pb-12 md:pb-0">
      <div className="grid md:grid-cols-2">
        <div className="relative order-2 flex flex-col justify-center px-6 py-20 md:order-1 md:px-14 lg:px-20">
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest2 text-gold">
              Editoryal
            </p>
            <h2 className="max-w-md font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl">
              Işığın peşinden.
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-8 max-w-md text-balance text-base leading-relaxed text-stone">
              Karamürsel sahili, doğal alanlar ve çevre bölgelerin kendine
              özgü atmosferi; dış çekimler için sayısız sahne sunar.
              Çiftlerin tarzına, günün ışığına, mevsime ve seçilen konsepte
              göre doğal ama güçlü kareler planlıyoruz.
            </p>
          </Reveal>

          <Reveal delay={250} className="mt-8 border-l border-gold/40 pl-5">
            <p className="max-w-sm font-serif text-lg italic leading-snug text-stone">
              En sevdiğimiz saat: gün batımına yakın, yumuşak ışığın her
              şeyi değiştirdiği o an.
            </p>
          </Reveal>

          <Reveal delay={350} className="mt-10">
            <a
              href="#portfolyo"
              className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-ivory transition-colors hover:text-gold"
            >
              Dış Çekim Hikâyelerini Gör
              <span className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-12" />
            </a>
          </Reveal>
        </div>

        <div className="relative order-1 h-[60vh] md:order-2 md:h-auto md:min-h-[640px]">
          <div className="absolute inset-0">
            <Image
              src="/images/outdoor-03.jpg"
              alt="Karamürsel'de dış çekim, geniş kare manzara"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-10 left-8 h-2/3 w-2/5 border-4 border-charcoal shadow-2xl md:left-10 md:h-3/5 md:w-[45%]">
            <Image
              src="/images/outdoor-04.jpg"
              alt="Dış çekimden portre kare"
              fill
              sizes="30vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
