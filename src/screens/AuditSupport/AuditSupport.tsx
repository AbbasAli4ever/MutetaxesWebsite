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
      <nav className="flex items-center justify-center gap-8 py-11">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            className={`relative flex items-center justify-center h-7 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-xl tracking-[-0.40px] leading-7 whitespace-nowrap ${
              item.active ? "text-[#004eff]" : "text-[#212833]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

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
