export const site = {
  name: "Studio Kerim Işık",
  shortName: "Kerim Işık",
  city: "Karamürsel",
  region: "Kocaeli",
  instagramHandle: "@studyoisik",
  instagramUrl: "https://instagram.com/studyoisik",
  whatsappUrl: "https://wa.me/905322402318",
  whatsappNumberDisplay: "+90 532 240 23 18",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Foto+I%C5%9F%C4%B1k+Karam%C3%BCrsel",
};

export type GalleryCategory =
  | "Dış Çekim"
  | "Düğün Hikâyesi"
  | "Sinematik"
  | "Drone"
  | "Hazırlık";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  orientation: "portrait" | "landscape" | "wide";
  label?: string;
  sublabel?: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: "outdoor-01",
    src: "/images/outdoor-01.jpg",
    alt: "Karamürsel sahilinde dış çekim, gelin ve damat",
    category: "Dış Çekim",
    orientation: "portrait",
    label: "Gün Batımında",
    sublabel: "Karamürsel",
  },
  {
    id: "prep-01",
    src: "/images/prep-01.jpg",
    alt: "Kuaförde hazırlık anı",
    category: "Hazırlık",
    orientation: "portrait",
    label: "Bir Hazırlık Hikâyesi",
    sublabel: "Kuaförde",
  },
  {
    id: "cinematic-01",
    src: "/images/cinematic-01.jpg",
    alt: "Düğün töreninden sinematik kare",
    category: "Sinematik",
    orientation: "wide",
    label: "Hareket Halinde",
    sublabel: "Tören Anı",
  },
  {
    id: "story-01",
    src: "/images/story-01.jpg",
    alt: "Gelin damat, düğün hikâyesinden bir kare",
    category: "Düğün Hikâyesi",
    orientation: "portrait",
    label: "İlk Bakış",
    sublabel: "Düğün Günü",
  },
  {
    id: "drone-01",
    src: "/images/drone-01.jpg",
    alt: "Drone ile çekilmiş düğün mekânı görüntüsü",
    category: "Drone",
    orientation: "wide",
    label: "Kuş Bakışı",
    sublabel: "Mekânın Ruhu",
  },
  {
    id: "outdoor-02",
    src: "/images/outdoor-02.jpg",
    alt: "Doğal ışıkta çift portresi",
    category: "Dış Çekim",
    orientation: "landscape",
    label: "Yumuşak Işık",
    sublabel: "Dış Mekân",
  },
  {
    id: "prep-02",
    src: "/images/prep-02.jpg",
    alt: "Aile ile paylaşılan hazırlık anı",
    category: "Hazırlık",
    orientation: "landscape",
    label: "Aileyle Paylaşılan",
    sublabel: "Hazırlık",
  },
  {
    id: "convoy-01",
    src: "/images/convoy-01.jpg",
    alt: "Düğün konvoyu, şehir sokaklarında",
    category: "Düğün Hikâyesi",
    orientation: "landscape",
    label: "Şehrin Enerjisi",
    sublabel: "Konvoy",
  },
  {
    id: "cinematic-02",
    src: "/images/cinematic-02.jpg",
    alt: "Sinematik portre kare",
    category: "Sinematik",
    orientation: "portrait",
    label: "Sessiz An",
    sublabel: "Sinematik Kare",
  },
  {
    id: "story-02",
    src: "/images/story-02.jpg",
    alt: "Kutlama anından bir kare",
    category: "Düğün Hikâyesi",
    orientation: "landscape",
    label: "Gecenin Ritmi",
    sublabel: "Kutlama",
  },
  {
    id: "outdoor-03",
    src: "/images/outdoor-03.jpg",
    alt: "Geniş kare dış çekim manzarası",
    category: "Dış Çekim",
    orientation: "wide",
    label: "Ufuk Çizgisi",
    sublabel: "Karamürsel",
  },
  {
    id: "outdoor-04",
    src: "/images/outdoor-04.jpg",
    alt: "Dış çekimden portre kare",
    category: "Dış Çekim",
    orientation: "portrait",
    label: "Bakış",
    sublabel: "Dış Çekim",
  },
];

export type StoryScene = {
  number: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export const storyScenes: StoryScene[] = [
  {
    number: "01",
    title: "Hazırlık",
    text: "Kuafördeki ilk heyecan, aileyle paylaşılan küçük anlar ve günün başlangıcı.",
    image: "/images/scene-hazirlik.jpg",
    alt: "Hazırlık sahnesi",
  },
  {
    number: "02",
    title: "Buluşma",
    text: "Bakışlar, ilk karşılaşma ve birlikte başlayan yolculuk.",
    image: "/images/scene-bulusma.jpg",
    alt: "Buluşma sahnesi",
  },
  {
    number: "03",
    title: "Tören",
    text: "Nikâh, ilk dans, alkışlar ve unutulmayacak anlar.",
    image: "/images/scene-toren.jpg",
    alt: "Tören sahnesi",
  },
  {
    number: "04",
    title: "Kutlama",
    text: "Müziğin, kahkahanın ve gecenin enerjisi.",
    image: "/images/scene-kutlama.jpg",
    alt: "Kutlama sahnesi",
  },
  {
    number: "05",
    title: "Son Kare",
    text: "Yıllar sonra bile sizi aynı güne götürecek bir hatıra.",
    image: "/images/scene-sonkare.jpg",
    alt: "Son kare sahnesi",
  },
];

export type Service = {
  number: string;
  title: string;
  description?: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Düğün Fotoğrafçılığı",
    description:
      "Günün doğal akışını, detayları ve duyguyu zamansız karelere dönüştürüyoruz.",
  },
  {
    number: "02",
    title: "Kamera ve Fotoğraf Çekimi",
  },
  {
    number: "03",
    title: "Dış Çekim & Albüm",
    description:
      "Tarzınıza, mevsime ve ışığa göre planlanan dış çekimlerle; özenle tasarlanmış albümler hazırlıyoruz.",
  },
  {
    number: "04",
    title: "Sinematik Klip",
    description:
      "Müzik, kurgu ve güçlü görüntü diliyle düğün gününüzü yalnızca izlenen değil, hissedilen bir filme dönüştürüyoruz.",
  },
  {
    number: "05",
    title: "Düğün Hikâyesi",
    description:
      "Hazırlıktan kutlamaya uzanan gününüzü bütüncül ve size ait bir anlatıyla kayıt altına alıyoruz.",
  },
  {
    number: "06",
    title: "Drone Çekimi",
    description:
      "Mekânın ruhunu ve günün büyük atmosferini farklı bir perspektiften yakalıyoruz.",
  },
  {
    number: "07",
    title: "Kuaför Çekimi",
    description:
      "Günün ilk heyecanını, hazırlıkları ve en gerçek duyguları hikâyenizin ilk sahnesine dönüştürüyoruz.",
  },
  {
    number: "08",
    title: "Konvoy Çekimi",
    description:
      "Düğün gününün coşkusunu, hareketini ve şehirdeki enerjisini kare kare kayıt altına alıyoruz.",
  },
  {
    number: "09",
    title: "Reels Akım (Trend) Çekimleri",
    description:
      "Günün enerjisini sosyal medyada paylaşmaya hazır, modern ve yaratıcı kısa videolara dönüştürüyoruz.",
  },
  {
    number: "10",
    title: "Baskı & Albüm",
  },
];

export const regions = [
  "Karamürsel",
  "Gölcük",
  "Başiskele",
  "İzmit",
  "Değirmendere",
  "Yalova",
];

export const navLinks = [
  { href: "#portfolyo", label: "Portfolyo" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#hikaye", label: "Hikâye" },
  { href: "#bolgeler", label: "Bölgeler" },
  { href: "#iletisim", label: "İletişim" },
];
