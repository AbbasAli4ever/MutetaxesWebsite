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



export const AccountingServices = (): JSX.Element => {
  return (
    <div className="bg-[#efefef] overflow-hidden w-full relative">
      

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
