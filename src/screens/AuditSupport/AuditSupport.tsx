import React from "react";
import { AuditPackagesSection } from "./sections/AuditPackagesSection";
import { BankingInfoSection } from "./sections/BankingInfoSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { IncludedServicesSection } from "./sections/IncludedServicesSection";
import { ServicesIncludedSection } from "./sections/ServicesIncludedSection";
import { SupportInfoSection } from "./sections/SupportInfoSection";
import { WhyHongKongSection } from "./sections/WhyHongKongSection";

const navigationItems = [
  { label: "Incorporation", active: false },
  { label: "Secretary", active: false },
  { label: "Accounting & Tax Services", active: false },
  { label: "Audit Support", active: true },
];

export const AuditSupport = (): JSX.Element => {
  return (
    <div className="bg-[#efefef] overflow-hidden w-full min-w-[1440px] relative">


      <HeroSection />
      <IncludedServicesSection />
      <AuditPackagesSection />
      <SupportInfoSection />
      <WhyHongKongSection />
      <ServicesIncludedSection />
      <BankingInfoSection />
      <FaqSection />
      <BenefitsSection />
      <FooterSection />
    </div>
  );
};
