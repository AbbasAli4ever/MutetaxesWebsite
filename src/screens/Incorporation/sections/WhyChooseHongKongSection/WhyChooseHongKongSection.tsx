import React from "react";
import { Button } from "../../../../IncorporateComponents/ui/button";
import { Card, CardContent } from "../../../../IncorporateComponents/ui/card";

const pricingData = [
  {
    price: "€599",
    title: "Branch Office",
    description: "Existing foreign companies expanding to HK",
    features: [
      "Extension Of Parent Company",
      "Parent Company Liable",
      "No Separate Legal Entity",
      "2-3 Weeks Setup",
    ],
    buttonVariant: "outline" as const,
    buttonText: "Get Started",
    featured: false,
  },
  {
    price: "€279",
    title: "Private Limited Company",
    description: "Best for most businesses,\nstartups, SMEs",
    features: [
      "Limited Liability Protection",
      "Separate Legal Entity",
      "1-50 Shareholders Allowed",
      "Can Raise Capital Easily",
      "5-7 Days Incorporation",
    ],
    buttonVariant: "default" as const,
    buttonText: "Get Started",
    featured: true,
  },
  {
    price: "€899",
    title: "Representative Office",
    description: "Best For: Market research, liaison",
    features: [
      "No Commercial Activities",
      "Liaison And Promotion Only",
      "4-6 Weeks Setup",
    ],
    buttonVariant: "outline" as const,
    buttonText: "Get Started",
    featured: false,
  },
];

export const WhyChooseHongKongSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full px-auto lg:gap-10 lg:py-8">
      <div className="flex flex-col items-center gap-4 max-w-[952px] mx-auto px-4">
        <div className="flex flex-col items-start w-full gap-4">
          <div className="w-full text-center font-helvetica font-normal text-[#21283399] text-2xl tracking-[0] leading-7">
            Company Structure Pricing
          </div>

          <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-[32px] lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            Choose Your Company Structure
          </h2>
        </div>

        <p className="text-center max-w-[702px] text-[#212833] text-[18px] lg:text-[22px] tracking-[-0.64px] mb-8 lg:mb-0 leading-[35px] font-helvetica font-normal">
          Select the right entity type for your business needs
        </p>
      </div>

     <div className="flex flex-col lg:flex-row justify-center items-start gap-6 max-w-[1140px] mx-auto px-4">
  {pricingData.map((plan, index) => (
    <Card
      key={index}
      className={`w-full max-w-[290px] overflow-hidden sm:max-w-[340px] md:max-w-[364px]
 h-auto min-h-[710px] rounded-[20px] flex flex-col relative ${
        plan.featured
          ? "shadow-[0px_35px_104px_#004eff40]"
          : "bg-white"
      }`}
    >
      {plan.featured && (
        <div className="absolute top-[-270px] left-[200px] rotate-[-30deg] w-[500px] h-[600px] rounded-[474.32px] blur-[77.38px] bg-[#004EFF]" />
      )}

      <CardContent className="relative z-10 flex flex-col h-full p-6">
        <div className="flex flex-col gap-5 mb-10">
          <div className="flex flex-col gap-4">
            <div
              className={`font-helvetica font-normal text-[54.2px] tracking-[0] leading-[normal] ${
                plan.featured ? "text-[#004eff]" : "text-[#222222]"
              }`}
            >
              {plan.price}
            </div>
          </div>

          <div className="flex flex-col gap-[7px]">
            <h3 className="font-helvetica font-normal text-[#222222] text-xl tracking-[0] leading-7 whitespace-nowrap">
              {plan.title}
            </h3>

            <p className="[-webkit-text-stroke:0.9px_#707070] font-helvetica font-normal text-[#65676c] text-lg tracking-[0.45px] leading-6 whitespace-pre-line">
              {plan.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 mb-10">
          <div className="flex flex-col gap-5">
            <h4 className="[-webkit-text-stroke:0.9px_#707070] font-helvetica font-normal text-[#212833] text-[22px] tracking-[0.55px] leading-6">
              Features
            </h4>

            <div className="flex flex-col gap-3">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-2.5">
                  <img
                    className="flex-shrink-0 w-6 h-6"
                    alt="Check"
                    src="/Incorporate/frame.svg"
                  />

                  <span className="font-helvetica font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      <div className="absolute flex items-center justify-center w-full mt-auto bottom-10">
        <Button
          variant={plan.buttonVariant}
          className={`h-auto w-[217px] rounded-[28.01px] py-[15px] px-6 ${
            plan.featured
              ? "bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] text-white border-0 hover:opacity-90"
              : "bg-white border-[1.36px] border-black text-black hover:bg-gray-50"
          }`}
        >
          <span className="font-helvetica font-normal text-[16.3px] tracking-[0] leading-[normal]">
            {plan.buttonText}
          </span>
        </Button>
      </div>
    </Card>
  ))}
</div>

    </section>
  );
};
