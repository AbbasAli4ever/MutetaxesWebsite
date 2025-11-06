import React from "react";
import { Link } from "react-router-dom";
import { BankingInformationSection } from "./sections/BankingInformationSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { FooterSection } from "./sections/FooterSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection";

import { HongKongOverviewSection } from "./sections/HongKongOverviewSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { PackageDetailsSection } from "./sections/PackageDetailsSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";
import { WhyChooseHongKongSection } from "./sections/WhyChooseHongKongSection";
import { Navbar } from "../../UIComponents/Navbar";
import { HeroBannerSection } from "./sections/HeroBannerSection";




export const Incorporation = (): JSX.Element => {
  return (
    <div className="bg-[#efefef] w-full relative">
      
      <HeroBannerSection />
      <ServicesOverviewSection />
      <WhyChooseHongKongSection />
      <PackageDetailsSection />
      <HowItWorksSection />
      <HongKongOverviewSection />
      <BankingInformationSection />
      <FrequentlyAskedQuestionsSection />
      <BenefitsSection />
      {/* <FooterSection /> */}

     
    </div>
  );
};
