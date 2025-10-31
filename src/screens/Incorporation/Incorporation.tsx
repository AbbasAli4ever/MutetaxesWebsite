import React from "react";
import { Link } from "react-router-dom";
import { BankingInformationSection } from "./sections/BankingInformationSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { FooterSection } from "./sections/FooterSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { HongKongOverviewSection } from "./sections/HongKongOverviewSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { PackageDetailsSection } from "./sections/PackageDetailsSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";
import { WhyChooseHongKongSection } from "./sections/WhyChooseHongKongSection";

const timelineBadges = [
  {
    top: "top-[4278px]",
    left: "left-[662px]",
    label: "Day 1",
  },
  {
    top: "top-[4634px]",
    left: "left-[651px]",
    label: "Days 2-3",
  },
  {
    top: "top-[4943px]",
    left: "left-[651px]",
    label: "Days 4-5",
  },
  {
    top: "top-[5315px]",
    left: "left-[651px]",
    label: "Days 6-7",
  },
];

const navigationItems = [
  {
    label: "Incorporation",
    href: "/incorporation",
    isActive: true,
  },
  {
    label: "Secretary",
    href: "#",
    isActive: false,
  },
  {
    label: "Accounting & Tax Services",
    href: "#",
    isActive: false,
  },
  {
    label: "Audit Support",
    href: "#",
    isActive: false,
  },
];

export const Incorporation = (): JSX.Element => {
  return (
    <div className="bg-[#efefef] overflow-hidden w-full min-w-[1440px] relative">
      <nav className="flex items-center gap-8 absolute top-11 left-[calc(50.00%_-_331px)] z-10">
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            className={`relative flex items-end justify-center h-7 mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-xl text-center tracking-[-0.40px] leading-7 whitespace-nowrap ${
              item.isActive ? "text-[#004eff]" : "text-[#212833]"
            }`}
            to={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <HeroBannerSection />
      <ServicesOverviewSection />
      <WhyChooseHongKongSection />
      <PackageDetailsSection />
      <HowItWorksSection />
      <HongKongOverviewSection />
      <BankingInformationSection />
      <FrequentlyAskedQuestionsSection />
      <BenefitsSection />
      <FooterSection />

      {timelineBadges.map((badge, index) => (
        <div
          key={index}
          className={`inline-flex items-center justify-center gap-2.5 px-4 py-3 absolute ${badge.top} ${badge.left} bg-white rounded-[30px] overflow-hidden shadow-[0px_4px_4px_#004eff26]`}
        >
          <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
            {badge.label}
          </div>
          <div className="absolute top-8 left-[11px] w-16 h-16 bg-[#004eff] rounded-[32px] blur-[17px]" />
        </div>
      ))}
    </div>
  );
};
