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
    <section className="flex items-center justify-center w-full px-4 py-16 md:px-8 lg:px-12">
      <div className="flex flex-col items-center gap-12 max-w-[1226px] w-full">
        {/* Heading Section */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[882px] w-full px-2">
          <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-lg sm:text-xl md:text-2xl leading-tight">
            Why Choose Us
          </p>

          <h2 className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight md:leading-[72px]">
            Why 1,000+ Hong Kong Businesses Choose Mute Taxes
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid w-full grid-cols-1 gap-24 sm:gap-10 xl:gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative bg-transparent border-0 shadow-none"
            >
              <CardContent className="relative flex flex-col items-center p-0">
                {/* Background Shape */}
                <img
                  className="absolute top-[30px] lg:top-[7px] xl:top-[60px] left-0 w-full h-[300px] sm:h-[320px] md:h-[340px] lg:h-[348px] object-contain"
                  alt="Background"
                  src={feature.background}
                />
<div className={"w-full flex items-center justify-center"}>
                {/* Icon */}
                <img
                  className="ml-8 md:ml-10 lg:ml-11 xl:ml-12 w-[110px] sm:w-[130px] md:w-[130px] xl:w-[162px] h-auto z-10"
                  alt={feature.title}
                  src={feature.icon}
                />
</div>
                {/* Content */}
                <div className="flex flex-col items-center sm:items-start gap-1  px-4 sm:px-6 pb-[40px] relative z-10 text-center sm:text-left">
                  <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-2xl sm:text-[26px] md:text-[25px] xl:text-[32px] leading-snug">
                    {feature.title}
                  </h3>

                  <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base px-5 sm:px-0 sm:text-lg md:text-[15px] xl:text-[20px] leading-relaxed">
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
