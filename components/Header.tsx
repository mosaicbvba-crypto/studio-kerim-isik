"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/90 backdrop-blur-sm py-3 shadow-[0_1px_0_0_rgba(180,149,99,0.2)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-8xl items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            className="font-serif leading-none text-ivory transition-opacity hover:opacity-80"
          >
            <span className="block text-[0.62rem] tracking-widest2 text-gold">
              STUDIO
            </span>
            <span className="block text-lg tracking-[0.12em] md:text-xl">
              KERİM IŞIK
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium tracking-wide text-stone transition-colors hover:text-ivory"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/60 px-5 py-2 text-sm font-medium tracking-wide text-gold transition-all hover:bg-gold hover:text-ink active:scale-[0.97]"
            >
              WhatsApp
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Menüyü aç"
            aria-expanded={menuOpen}
            className="flex flex-col items-end gap-1.5 md:hidden"
          >
            <span className="h-px w-7 bg-ivory transition-transform" />
            <span className="h-px w-5 bg-gold transition-transform" />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menüsü"
        className={`fixed inset-0 z-[60] flex flex-col bg-ink transition-opacity duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="font-serif text-lg tracking-[0.12em] text-ivory">
            KERİM IŞIK
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Menüyü kapat"
            className="text-2xl leading-none text-stone hover:text-gold"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 60 + 80}ms` : "0ms" }}
              className={`border-b border-ivory/10 py-4 font-serif text-3xl text-ivory transition-all duration-500 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-4 px-8 pb-10">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-gold bg-gold py-4 text-center text-sm font-semibold tracking-wide text-ink"
          >
            WhatsApp&apos;tan Yaz
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-stone/30 py-4 text-center text-sm tracking-wide text-stone"
          >
            Instagram
          </a>
        </div>
      </div>
    </>
  );
}
