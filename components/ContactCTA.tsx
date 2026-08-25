"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { site } from "@/lib/data";
import Reveal from "./Reveal";

const eventTypes = [
  "Düğün",
  "Nişan / Söz",
  "Kına Gecesi",
  "Nikâh (Resmi)",
  "Dış Çekim",
  "Diğer",
];

type FormState = {
  name: string;
  phone: string;
  date: string;
  type: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  date: "",
  type: "",
  message: "",
};

export default function ContactCTA() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setErrors((er) => ({ ...er, [key]: undefined }));
    };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = "Lütfen adınızı ve soyadınızı girin.";
    }
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      next.phone = "Lütfen geçerli bir telefon numarası girin.";
    }
    if (!form.type) {
      next.type = "Lütfen etkinlik türünü seçin.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      `Merhaba Studio Kerim Işık, düğün/organizasyon çekimim için bilgi almak istiyorum.`,
      `Ad Soyad: ${form.name.trim()}`,
      form.date ? `Tarih: ${form.date}` : null,
      `Etkinlik Türü: ${form.type}`,
      form.message.trim() ? `Mesaj: ${form.message.trim()}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/905322402318?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="iletisim" className="relative bg-ink">
      <div className="grid md:grid-cols-2">
        <div className="relative order-2 min-h-[420px] md:order-1">
          <Image
            src="/images/cinematic-01.jpg"
            alt="Studio Kerim Işık'tan sinematik bir kare"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-ink/40" />
        </div>

        <div className="order-1 flex flex-col justify-center px-6 py-24 md:order-2 md:px-14 lg:px-20">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-gold">
              İletişim
            </p>
            <h2 className="max-w-md font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl">
              Hikâyenizi birlikte kaydedelim.
            </h2>
            <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-stone">
              Düğün gününüz için fotoğraf, video, dış çekim veya albüm
              planınızı konuşalım.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-8 flex flex-wrap gap-4">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold bg-gold px-6 py-3.5 text-sm font-semibold tracking-wide text-ink transition-all hover:bg-transparent hover:text-gold active:scale-[0.97]"
            >
              WhatsApp&apos;tan Mesaj Gönder
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-stone/40 px-6 py-3.5 text-sm font-medium tracking-wide text-stone transition-all hover:border-ivory hover:text-ivory"
            >
              Instagram&apos;ı İncele
            </a>
          </Reveal>

          <Reveal delay={220}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="mt-14 flex flex-col gap-6 border-t border-ivory/10 pt-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Ad Soyad" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    className={inputClass(!!errors.name)}
                  />
                </Field>
                <Field label="Telefon" error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    autoComplete="tel"
                    placeholder="05xx xxx xx xx"
                    aria-invalid={!!errors.phone}
                    className={inputClass(!!errors.phone)}
                  />
                </Field>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Etkinlik Tarihi">
                  <input
                    type="date"
                    value={form.date}
                    onChange={update("date")}
                    className={inputClass(false)}
                  />
                </Field>
                <Field label="Etkinlik Türü" error={errors.type}>
                  <select
                    value={form.type}
                    onChange={update("type")}
                    aria-invalid={!!errors.type}
                    className={inputClass(!!errors.type)}
                  >
                    <option value="" disabled>
                      Seçiniz
                    </option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Mesajınız">
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={3}
                  className={inputClass(false)}
                />
              </Field>

              <button
                type="submit"
                className="mt-2 w-fit border border-gold bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-ink transition-all hover:bg-transparent hover:text-gold active:scale-[0.97]"
              >
                Hikâyemi Anlat
              </button>

              <p role="status" className="min-h-[1.25rem] text-xs text-stone">
                {sent
                  ? "WhatsApp açıldı — mesajınızı göndermeyi unutmayın."
                  : "Gönder butonuna bastığınızda, bilgileriniz WhatsApp üzerinden bize iletilir."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `w-full border-b bg-transparent px-0.5 py-2.5 text-ivory placeholder:text-stone/40 focus:outline-none ${
    hasError ? "border-oxblood" : "border-ivory/20 focus:border-gold"
  }`;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-widest2 text-stone/70">
        {label}
      </span>
      {children}
      {error && <span className="text-xs text-oxblood">{error}</span>}
    </label>
  );
}
