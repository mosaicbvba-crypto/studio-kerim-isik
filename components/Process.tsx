import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Tanışalım",
    text: "Tarzınızı, gününüzü ve hayalinizdeki atmosferi konuşalım.",
  },
  {
    number: "02",
    title: "Planlayalım",
    text: "Çekim akışını, lokasyonları ve önemli anları birlikte netleştirelim.",
  },
  {
    number: "03",
    title: "Yaşayın",
    text: "Günün tadını çıkarın. Biz gerçek anları doğru anda yakalayalım.",
  },
  {
    number: "04",
    title: "Yeniden Hissedin",
    text: "Seçilen kareler, klip ve albümle hikâyeniz kalıcı bir hatıraya dönüşsün.",
  },
];

export default function Process() {
  return (
    <section className="relative bg-ink px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-8xl">
        <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-10">
          <div>
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-gold">
                Süreç
              </p>
              <h2 className="max-w-sm font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl">
                Kameranın arkasında iyi bir plan var.
              </h2>
            </Reveal>

            <Reveal delay={200} className="mt-10 max-w-xs border-l border-gold/40 pl-5">
              <p className="font-serif text-lg italic leading-snug text-stone">
                &ldquo;Poz vermekten çok, anın içinde olmanızı istiyoruz.&rdquo;
              </p>
            </Reveal>
          </div>

          <div>
            {steps.map((step, i) => (
              <Reveal
                key={step.number}
                delay={i * 90}
                className="group grid grid-cols-[auto_1fr] gap-6 border-t border-ivory/10 py-8 last:border-b md:gap-10"
              >
                <span className="font-serif text-4xl text-stone/30 transition-colors duration-500 group-hover:text-gold md:text-5xl">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-ivory md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-stone md:text-base">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
