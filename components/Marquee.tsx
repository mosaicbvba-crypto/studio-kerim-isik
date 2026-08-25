import Reveal from "./Reveal";

const phrase = "Işık. His. Hikâye. Zamansız anılar.";

export default function Marquee() {
  return (
    <section id="marka" className="relative overflow-hidden border-y border-ivory/10 bg-ink py-20 md:py-28">
      <div className="relative flex select-none overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee items-center gap-10 pr-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-serif text-[13vw] italic leading-none text-transparent [-webkit-text-stroke:1px_#D8D0C3] md:text-8xl"
            >
              {phrase}
              <span className="text-3xl text-gold md:text-5xl" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      <Reveal className="mx-auto mt-16 max-w-2xl px-6 text-center md:px-10">
        <p className="text-balance text-base leading-relaxed text-stone md:text-lg">
          Düğün günü bir anda geçer. Geriye bakışlar, sesler, heyecan ve
          yıllar sonra bile aynı duyguyu taşıyan anılar kalır.{" "}
          <span className="text-ivory">Studio Kerim Işık</span>, bu hikâyeyi
          size ait bir dille kaydeder.
        </p>
      </Reveal>
    </section>
  );
}
