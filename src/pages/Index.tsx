import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ScholarshipSection } from "@/components/home/ScholarshipSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <ScholarshipSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
