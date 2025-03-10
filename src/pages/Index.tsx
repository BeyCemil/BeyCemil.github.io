
import AnimatedContent from "@/components/AnimatedContent";
import BackgroundEffects from "@/components/BackgroundEffects";
import BinaryRain from "@/components/BinaryRain";
import ProfileHeader from "@/components/ProfileHeader";
import GamesSection from "@/components/GamesSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import AdditionalInfoSection from "@/components/AdditionalInfoSection";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundEffects />
      <BinaryRain />

      <div className="container mx-auto px-4 py-8 relative z-10 [&_h1]:text-shadow [&_h2]:text-shadow [&_h3]:text-shadow [&_p]:text-shadow [&_a]:text-shadow">
        <AnimatedContent>
          <ProfileHeader />
          <GamesSection />
          <ExperienceSection />
          <CertificationsSection />
          <AdditionalInfoSection />
        </AnimatedContent>
      </div>
    </div>
  );
};

export default Index;
