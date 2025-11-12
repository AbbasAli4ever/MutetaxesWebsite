import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import NotchedCard from "../../../../UIComponents/NotchedCard";

const features = [
  {
    icon: "/HomePage/WhyLogo1.png",
    title: "All-in-one Platform",
    description:
      "Manage Incorporation, Accounting, Taxes, And Compliance From A Single Dashboard. No More Juggling Multiple Service Providers.",
    background: "/HomePage/subtract-4.svg",
  },
  {
    icon: "/HomePage/WhyLogo2.png",
    title: "Local Expertise",
    description:
      "Hkicpa Qualified Accountants And Licensed Company Secretaries With 15+ Years Of Hong Kong Market Experience.",
    background: "/HomePage/subtract-9.svg",
  },
  {
    icon: "/HomePage/WhyLogo3.png",
    title: "Transparent Pricing",
    description:
      "Clear, Competitive Rates Starting From €279 With No Hidden Fees. Know Exactly What You're Paying For.",
    background: "/HomePage/subtract-1.svg",
  },
  {
    icon: "/HomePage/WhyLogo4.png",
    title: "Digital First",
    description:
      "Cloud-based Platform With real-time Access To Your Documents And Financial Data From Anywhere In The World.",
    background: "/HomePage/subtract-7.svg",
  },
];

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-center w-full px-4 py-16 md:px-8 lg:px-12">
      <div className="flex flex-col items-center gap-12 max-w-[1226px] w-full">
        {/* Heading Section */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[892px] w-full px-2">
          <p className="font-helvetica font-normal text-[#21283399] text-lg sm:text-xl md:text-2xl leading-tight">
            Why Choose Us
          </p>

          <h2 className="font-georgia font-normal text-[#212833] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight md:leading-[72px]">
            Why 1,000+ Hong Kong Businesses Choose Mute Taxes
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid w-full grid-cols-1 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div className="relative pt-20" key={index}>
              <img
                className="absolute w-[150px] sm:w-[150px] md:w-[155px] xl:w-[162px] h-auto z-20 left-1/2 -ml-[51px] md:-ml-[52px] lg:-ml-[52px] xl:-ml-14 -mt-14"
                 alt={feature.title}
                src={feature.icon}
              />
              <NotchedCard
                notch={{
                width: { base: 150, sm: 150, md: 150, lg: 150 },
                depth: { base: 40, sm: 35, md: 40, lg: 50 },
                bottomRadius: 25,
                topRadius: 25,
              }}
                widthClass="w-full max-w-[400px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[400px]"
                heightClass="h-[300px] sm:h-[300px] lg:h-[300px] xl:h-[350px]"
                shadowColor="#6a98ff"
                className="z-10"
              >
                <CardContent className="relative flex flex-col items-center justify-center pt-16 xl:pt-24">
                  {/* Content */}
                  <div
                    className="flex flex-col items-center sm:items-start gap-1 px-4 sm:px-4 pb-[0px] relative z-10 text-center sm:text-left"
                  >
                  <h3 className="font-helvetica font-medium text-[#212833] text-2xl sm:text-[24px] md:text-[25px] xl:text-[32px] leading-snug">
                    {feature.title}
                  </h3>

                  <p className="font-helvetica font-normal text-[#212833e6] text-base sm:text-base md:text-[15px] xl:text-[20px] leading-snug sm:leading-snug md:leading-snug lg:leading-snug xl:leading-8">
                    {feature.description}
                  </p>
                  </div>
                </CardContent>
              </NotchedCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
