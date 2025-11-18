import { XIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../IncorporateComponents/ui/badge";
import { Button } from "../../../../IncorporateComponents/ui/button";
import { Card, CardContent } from "../../../../IncorporateComponents/ui/card";

const pricingTiers = [
  {
    price: "€279",
    title: "Starter",
    description: "Perfect for getting started",
    support: "Email",
    features: [
      { name: "Company Formation", included: true },
      { name: "Government Fees", included: true },
      { name: "Company Kit", included: true },
      { name: "Registered Office (1 Year)", included: true },
      { name: "Company Secretary (1 Year)", included: false },
      { name: "Accounting Setup", included: false },
      { name: "Tax Registration", included: false },
      { name: (
    <>
      Express Service (1 Day){" "}
      <span className="text-[#3A7AFE]">+€200</span>
    </>
  ), included: false, addon: "+€200" },
    ],
    buttonVariant: "outline" as const,
    isPopular: false,
  },
  {
    price: "€599",
    title: "Professional",
    description: "Most popular choice",
    support: "Phone+email",
    features: [
      { name: "Company Formation", included: true },
      { name: "Government Fees", included: true },
      { name: "Company Kit", included: true },
      { name: "Registered Office (1 Year)", included: true },
      { name: "Company Secretary (1 Year)", included: true },
      { name: "Accounting Setup", included: false },
      { name: "Tax Registration", included: false },
      { name: "Express Service (1 Day)", included: false },
    ],
    buttonVariant: "default" as const,
    isPopular: true,
  },
  {
    price: "€999",
    title: "Premium",
    description: "Complete business setup",
    support: "Priority 24/7",
    features: [
      { name: "Company Formation", included: true },
      { name: "Government Fees", included: true },
      { name: "Company Kit", included: true },
      { name: "Registered Office (1 Year)", included: true },
      { name: "Company Secretary (1 Year)", included: true },
      { name: "Accounting Setup", included: true },
      { name: "Tax Registration", included: true },
      { name: "Express Service (1 Day)", included: true },
    ],
    buttonVariant: "outline" as const,
    isPopular: false,
  },
];

export const HongKongOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full gap-10 py-8 lg:mt-[130px]">
      <header className="flex flex-col items-center gap-4 px-4 max-w-[1016px] mx-auto">
        <div className="flex flex-col items-center w-full gap-4">
          <p className="font-helvetica font-normal text-[#21283399] lg:text-2xl text-center tracking-[0] leading-7">
            Incorporation Pricing
          </p>

          <h1 className="font-georgia font-normal text-[#212833] text-[39px]  lg:text-[62px] text-center tracking-[0] leading-tight lg:leading-[72px]">
            Choose Your Incorporation Package
          </h1>
        </div>

        <p className="font-helvetica font-normal text-[#212833] text-[15px] lg:text-[20px] text-center tracking-[-0.64px] leading-[35px] max-w-[702px]">
          We help you select the optimal structure for your business goals
        </p>
      </header>

<div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 px-4 max-w-[1140px] mx-auto w-full">
        {pricingTiers.map((tier, index) => (
          <div key={index} className="relative flex-1 max-w-[366px]">
            {tier.isPopular && (
              <Badge className="absolute -top-[15px] -right-5 -translate-x-1/2 z-10 rounded-[40px] shadow-[0px_4px_24px_#00000040,inset_0px_-3px_6px_#ffffff73] bg-[linear-gradient(90deg,rgba(139,174,255,1)_0%,rgba(4,81,255,1)_100%)] border-0 px-[13px] py-3 h-auto">
                <span className="font-helvetica font-normal text-white text-base text-center tracking-[0] leading-[18.5px]">
                  Most Popular
                </span>
              </Badge>
            )}

            <Card
              className={`h-[812px] rounded-[20px] bg-white border-0 ${
                tier.isPopular
                  ? "shadow-[0px_35px_104px_#004eff40] overflow-hidden relative"
                  : ""
              }`}
            >
              {tier.isPopular && (
                 
              
                
                  <div className="absolute top-[-270px] left-[200px] rotate-[-30deg] w-[500px] h-[600px] rounded-[474.32px]  blur-[77.38px] bg-[#004EFF]" />
                  
               
              
            )}
              

              <CardContent className="relative flex flex-col h-full p-6">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-4">
                    <div className="text-[#222222] font-helvetica font-normal text-[54.2px] tracking-[0] leading-[normal]">
                      {tier.price}
                    </div>
                  </div>

                  <div className="flex flex-col gap-[7px]">
                    <h3 className="font-helvetica font-normal text-[#222222] text-2xl tracking-[0] leading-7">
                      {tier.title}
                    </h3>

                    <p className=" font-helvetica font-normal text-[#65676c] text-lg tracking-[0.45px] leading-6">
                      {tier.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-10 mt-[67px]">
                  <div className="flex flex-col gap-5">
                    <h4 className="[-webkit-text-stroke:0.9px_#707070] font-helvetica font-normal text-[#212833] text-[22px] tracking-[0.55px] leading-6">
                      Features
                    </h4>

                    <div className="flex flex-col gap-3">
                      {tier.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2.5"
                        >
                          {feature.included ? (
                            <img
                              className="flex-shrink-0 w-6 h-6"
                              alt="Check"
                              src="/Incorporate/frame.svg"
                            />
                          ) : (
                            <div className="w-6 h-6 flex-shrink-0 bg-[#21283336] rounded-[60px] flex items-center justify-center">
                              <XIcon className="w-3 h-3 text-[#212833b2]" />
                            </div>
                          )}

                          <div
                            className={`[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-base tracking-[0] leading-[18.5px] ${
                              feature.included
                                ? "text-[#212833e6]"
                                : "text-[#212833b2]"
                            }`}
                          >
                            {feature.name}
                            {feature.included && (
                              <>
                                {" "}
                                <span className="font-helvetica font-normal text-[#004eff]">
                                  {feature.included}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 mt-auto">
                  <Button
                    variant={tier.buttonVariant}
                    className={`w-[217px] h-[54px] rounded-[28.01px] ${
                      tier.isPopular
                        ? "bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] text-white border-0 hover:opacity-90 "
                        : "bg-white border-[1.36px] border-black text-black hover:bg-gray-50"
                    }`}
                  >
                    <span className="font-helvetica font-normal text-[16.3px] tracking-[0] leading-[normal]">
                      Get Started
                    </span>
                  </Button>

                  <div className="font-helvetica font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px]">
                    <span>Supprot: </span>
                    <span className="font-medium font-helvetica">
                      {tier.support}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
