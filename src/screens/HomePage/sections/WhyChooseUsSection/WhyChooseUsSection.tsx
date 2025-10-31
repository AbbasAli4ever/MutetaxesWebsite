import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

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
    <section className="flex items-center justify-center w-full px-4 py-16">
      <div className="flex flex-col items-center gap-16 max-w-[1226px] w-full">
        <div className="flex flex-col items-center gap-4 max-w-[882px] w-full">
          <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-[28.1px]">
            Why Choose Us
          </p>

          <h2 className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64.3px] text-center tracking-[0] leading-[72.4px]">
            Why 1,000+ Hong Kong Businesses Choose Mute Taxes
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative bg-transparent border-0 shadow-none"
            >
              <CardContent className="relative p-0">
                <img
                  className="absolute top-[42px] left-0 w-full h-[348px]"
                  alt="Background"
                  src={feature.background}
                />

                <img
                  className="absolute top-[-13px] left-[57%] -translate-x-1/2 w-[162px] h-[162px]"
                  alt={feature.title}
                  src={feature.icon}
                />

                <div className="flex flex-col items-start gap-[10.67px] pt-[151px] px-[26px] pb-[42px] relative z-10">
                  <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[32px] tracking-[0] leading-[34.1px]">
                    {feature.title}
                  </h3>

                  <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-[21.3px] tracking-[0] leading-[31.5px]">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
