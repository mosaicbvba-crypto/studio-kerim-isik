import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/Portfolio";
import StoryTimeline from "@/components/StoryTimeline";
import Services from "@/components/Services";
import OutdoorFeature from "@/components/OutdoorFeature";
import Process from "@/components/Process";
import Regions from "@/components/Regions";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Portfolio />
        <StoryTimeline />
        <Services />
        <OutdoorFeature />
        <Process />
        <Regions />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
