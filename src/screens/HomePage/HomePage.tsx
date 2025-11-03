import React from "react";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyChooseUsDetailsSection } from "./sections/WhyChooseUsDetailsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { WhyHongKongSection } from "./sections/WhyHongKongSection";
import { MainContentSection } from "./sections/MainContentSection";

export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-[#efefef] w-full relative">
      <HeroSection />
       <MainContentSection/>
      <WhyChooseUsSection />
      {/*<ServicesSection />
      <WhyHongKongSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
      <WhyChooseUsDetailsSection />
      <FooterSection /> */}
    </div>
  );
};
