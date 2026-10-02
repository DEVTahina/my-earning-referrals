import Header from "../components/Header";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import FeaturedSection from "../components/FeaturedSection";
import PlatformSection from "../components/PlatformSection";
import MobileAppSection from "../components/MobileAppSection";
import HowItWorks from "../components/HowItWorks";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <FeaturedSection />
        <PlatformSection />
        <MobileAppSection />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
