// src/pages/Home.jsx
import CenterLocation from "../components/Centre";
import WhyChooseUsSection from "../components/ChooseUs";
import HeroSection from "../components/HeroSection";
import OurApproach from "../components/OurApproach";
import EnhancedGallery from "../components/OurGallery";
import OurGallery from "../components/OurGallery";
import TeamSection from "../components/OurTeam";
import ServicesSection from "../components/ServiceSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

   <WhyChooseUsSection/>
   <ServicesSection/>
  <TeamSection/>
   <CenterLocation/>
   <OurApproach/>
    <OurGallery/>
    </div>
  );
}
