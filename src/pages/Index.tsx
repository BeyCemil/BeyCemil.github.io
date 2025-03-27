
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Games from "@/components/Games";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import AdditionalInfo from "@/components/AdditionalInfo";
import BinaryRain from "@/components/BinaryRain";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BinaryRain />
      <Header />
      <Hero />
      <Games />
      <Experience />
      <Certifications />
      <AdditionalInfo />
    </div>
  );
};

export default Index;
