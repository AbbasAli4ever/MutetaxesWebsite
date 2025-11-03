import React from "react";
import { AccountingFAQSection } from "./sections/AccountingFAQSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { ContactFooterSection } from "./sections/ContactFooterSection";
import { FeaturesIncludedSection } from "./sections/FeaturesIncludedSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { HongKongAdvantagesSection } from "./sections/HongKongAdvantagesSection";
import { IncludedServicesSection } from "./sections/IncludedServicesSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { PricingPlansSection } from "./sections/PricingPlansSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";

// const navigationItems = [
//   { label: "Incorporation", active: false },
//   { label: "Secretary", active: false },
//   { label: "Accounting & Tax Services", active: true },
//   { label: "Audit Support", active: false },
// ];

export const AccountingServices = (): JSX.Element => {
  return (
    <div className="bg-[#efefef] overflow-hidden w-full relative">
      {/* <nav className="flex items-center justify-center gap-8 py-11 w-full">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-center h-7 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-xl text-center tracking-[-0.40px] leading-7 whitespace-nowrap cursor-pointer ${
              item.active ? "text-[#004eff]" : "text-[#212833]"
            }`}
          >
            {item.label}
          </div>
        ))}
      </nav> */}

      <HeroBannerSection />
      <FeaturesIncludedSection />
      <PricingPlansSection />
      <HongKongAdvantagesSection />
      <IncludedServicesSection />
      <IntroductionSection />
      <ServicesOverviewSection />
      <AccountingFAQSection />
      <BenefitsSection />
      <ContactFooterSection />
    </div>
  );
};
