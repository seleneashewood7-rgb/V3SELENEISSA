import { HeroSection } from "./components/HeroSection";
import { VisaTypesSection } from "./components/VisaTypesSection";
import { GetStartedSection } from "./components/GetStartedSection";
import { AboutUsSection } from "./components/AboutUsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VisaTypesSection />
      <GetStartedSection />
      <AboutUsSection />
      <Footer />
    </div>
  );
}
