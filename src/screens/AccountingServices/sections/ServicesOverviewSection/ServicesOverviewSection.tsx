import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../AccountingComponents/ui/card";

const servicesData = [
  {
    title: "Cost Savings",
    icon: "/AccountingServices/vector1.png",
    background: "/AccountingServices/subtract-5.svg",
    features: [
      {
        text: "",
        boldText: "",
        regularText: " 50% less than in-house staff",
      },
      {
        text: "",
        boldText: "",
        regularText: "No recruitment costs ",
      },
      {
        text: "",
        boldText: "No training expenses",
        regularText: " ",
      },
      {
        text: "Product Profitability Analysis",
        boldText: "",
        regularText: "No software licenses ",
      },
      {
        text: "Product Profitability Analysis",
        boldText: "",
        regularText: "Predictable monthly fees ",
      },
    ],
  },
  {
    title: "Expertise",
    icon: "/AccountingServices/vector-2.png",
    background: "/AccountingServices/subtract-1.svg",
    features: [
      {
        text: "HKICPA qualified Accountants",
        boldText: "HKICPA qualified Accountants  ",
        regularText: "",
      },
      {
        text: "",
        boldText: " ",
        regularText: "Latest compliance knowledge",
      },
      {
        text: "",
        boldText: " ",
        regularText: "Industry best practices",
      },
      {
        text: "",
        boldText: " ",
        regularText: "Continuous training",
      },
      {
        text: "",
        boldText: " ",
        regularText: "Technical support",
      },
    ],
  },
  {
    title: "Technology",
    icon: "/AccountingServices/vector-3.png",
    background: "/AccountingServices/subtract-4.svg",
    features: [
      {
        text: "",
        boldText: "",
        regularText: "Latest cloud software ",
      },
      { text: "", boldText: " ", regularText: "Automated processes" },
      { text: "", boldText: " ", regularText: "Real-time reporting" },
      {
        text: "",
        boldText: " ",
        regularText: "Mobile access",
      },
      {
        text: "",
        boldText: " ",
        regularText: "System integrations",
      },
    ],
  },
  {
    title: "Peace of Mind",
    icon: "/AccountingServices/vector-6.png",
    background: "/AccountingServices/subtract-6.svg",
    features: [
      {
        text: "",
        boldText: "",
        regularText: "Accurate records",
      },
      {
        text: "",
        boldText: " ",
        regularText: "Timely reporting",
      },
      {
        text: "",
        boldText: "",
        regularText: "Regulatory compliance ",
      },
      {
        text: "",
        boldText: " ",
        regularText: "Data security",
      },
       {
        text: "",
        boldText: " ",
        regularText: "Business continuity",
      },
    ],
  },
];

export const ServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-14 px-4 md:px-8 lg:px-[120px] py-8">
      <header className="inline-flex gap-4 flex-col items-center max-w-[994px]">
        <div className="flex flex-col items-start w-full gap-4 mt-[130px]">
          <p className="flex items-center justify-center w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            Why Outsource
          </p>

          <h1 className="flex items-center justify-center w-full [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-4xl md:text-5xl lg:text-[64px] text-center tracking-[0] leading-tight lg:leading-[72px]">
            Why Outsource Your Accounting
          </h1>

          <p className="flex items-center justify-center w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-2xl text-center tracking-[0] leading-7">
            Focus on growing your business while we handle the numbers
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            className="relative w-full h-auto overflow-visible bg-transparent border-0 shadow-none"
          >
            <CardContent className="relative p-0">
              <div className="relative w-full pt-[41px]">
                <img
                  className="w-full h-[360px] object-contain"
                  alt={`${service.title} background`}
                  src={service.background}
                />

                <div className="absolute top-[2px] left-[57%] -translate-x-1/2 -translate-y-[13px] w-[162px] h-[162px]">
                  <img
                    className="w-full h-full"
                    alt={`${service.title} icon`}
                    src={service.icon}
                  />
                </div>

                <div className="absolute top-[124px] left-[26px] right-[26px] flex flex-col gap-5">
                  <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-2xl tracking-[0] leading-[34.1px]">
                    {service.title}
                  </h3>

                  <ul className="flex flex-col gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2.5"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-6 h-6">
                          <img
                            className="flex-shrink-0 w-5 h-5"
                            alt="Check"
                            src="/Incorporate/frame.svg"
                          />
                        </div>

                        <span className="flex-1 [font-family:'Helvetica_Neue-Regular',Helvetica] text-[#212833e6] text-xl tracking-[0] leading-8">
                          <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal">
                            {feature.regularText}
                          </span>
                          <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                            {feature.boldText}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
