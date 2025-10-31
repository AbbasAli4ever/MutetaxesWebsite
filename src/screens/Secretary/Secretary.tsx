import React from "react";
import { AdvantagesSection } from "./sections/AdvantagesSection";
import { BankingServicesSection } from "./sections/BankingServicesSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { HongKongBenefitsSection } from "./sections/HongKongBenefitsSection";
import { ServicesDetailsSection } from "./sections/ServicesDetailsSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";

const navigationItems = [
  { label: "Incorporation", active: false },
  { label: "Secretary", active: true },
  { label: "Accounting Services", active: false },
  { label: "Tax Services", active: false },
  { label: "Audit Support", active: false },
];

export const Secretary = (): JSX.Element => {
  return (
    <div className="bg-[#efefef] overflow-hidden w-full min-w-[1440px] relative">
      <nav className="flex items-center justify-center gap-8 py-11">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            className={`h-7 text-xl text-center tracking-[-0.40px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal leading-7 whitespace-nowrap ${
              item.active ? "text-[#004eff]" : "text-[#212833]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <HeroBannerSection />
      <ServicesOverviewSection />
      <ServicesDetailsSection />
      <HongKongBenefitsSection />
      <AdvantagesSection />
      <BankingServicesSection />
      <FaqSection />
      <BenefitsSection />
      <FooterSection />
    </div>
  );
};
