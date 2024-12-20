import HeroSection from "./components/Hero";
import HomeRefresh from "./components/Home-Refresh";
import Cleaning from "./components/clealing";
import Statistics from "./components/Statics";
import CleaningServices from "./components/Cleaning-Service";
import TestimonialSection from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import FreeQuoteForm from "./components/FreeQuoteForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HomeRefresh /> 
      <Cleaning />
      <Statistics />
      <CleaningServices />
      <TestimonialSection />
      <FaqSection />
      <FreeQuoteForm />
      <Footer />
     

    </div>
  );
}
