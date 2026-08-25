import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Parisienne } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";

const editorial = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const script = Parisienne({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studiokerimisik.com"),
  title: "Studio Kerim Işık | Karamürsel Düğün Fotoğrafçısı",
  description:
    "Studio Kerim Işık; Karamürsel ve çevresinde düğün fotoğrafçılığı, dış çekim, sinematik klip, drone çekimi, düğün hikâyesi ve albüm hizmetleri sunar.",
  keywords: [
    "Karamürsel düğün fotoğrafçısı",
    "Kocaeli düğün fotoğrafçısı",
    "düğün hikâyesi çekimi",
    "dış çekim Karamürsel",
    "sinematik düğün klibi",
  ],
  openGraph: {
    title: "Studio Kerim Işık | Karamürsel Düğün Fotoğrafçısı",
    description:
      "Karamürsel merkezli, Kocaeli ve çevresinde düğün fotoğrafçılığı ve sinematik çekim stüdyosu.",
    url: "https://studiokerimisik.com",
    siteName: "Studio Kerim Işık",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/images/hero-wedding.jpg", width: 2400, height: 1500 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  areaServed: [
    "Karamürsel",
    "Gölcük",
    "Başiskele",
    "İzmit",
    "Değirmendere",
    "Yalova",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karamürsel",
    addressRegion: "Kocaeli",
    addressCountry: "TR",
  },
  sameAs: [site.instagramUrl],
  telephone: "+905322402318",
  url: "https://studiokerimisik.com",
  image: "/images/hero-wedding.jpg",
  priceRange: undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${editorial.variable} ${body.variable} ${script.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd, (key, value) =>
              value === undefined ? undefined : value
            ),
          }}
        />
      </head>
      <body className="bg-ink text-ivory font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
