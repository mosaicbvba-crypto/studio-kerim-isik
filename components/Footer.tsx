import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-ink px-6 pb-10 pt-16 md:px-10">
      <div className="mx-auto max-w-8xl">
        <div className="flex flex-col gap-10 border-t border-ivory/10 pt-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-xl tracking-[0.1em] text-ivory">
              STUDIO KERİM IŞIK
            </p>
            <p className="mt-2 text-sm text-stone">
              {site.city}, {site.region}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-stone">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Instagram
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              WhatsApp
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Haritada Gör
            </a>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-stone/60 md:flex-row md:items-center md:justify-between">
          <p className="font-script text-2xl leading-none text-gold/80 md:text-3xl">
            Bazı anlar geçmez. Sadece bir hikâyeye dönüşür.
          </p>
          <p>&copy; 2026 Studio Kerim Işık. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
