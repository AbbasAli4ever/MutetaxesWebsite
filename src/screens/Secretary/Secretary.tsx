import React from "react";
import { AdvantagesSection } from "./sections/AdvantagesSection";
import { BankingServicesSection } from "./sections/BankingServicesSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { FaqSection } from "./sections/FaqSection";

import { HeroBannerSection } from "./sections/HeroBannerSection";
import { HongKongBenefitsSection } from "./sections/HongKongBenefitsSection";
import { ServicesDetailsSection } from "./sections/ServicesDetailsSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";
import { FooterSection } from "../HomePage/sections/FooterSection";


export const Secretary = (): JSX.Element => {
  return (
  <div className="bg-[#efefef] w-full min-w-[1440px] relative">

      <HeroBannerSection />
      <ServicesOverviewSection />
      <ServicesDetailsSection />
      <HongKongBenefitsSection />
      <AdvantagesSection />
      <BankingServicesSection />
      <FaqSection />
      <BenefitsSection />
      {/* <FooterSection /> */}
    </div>
  );
};
