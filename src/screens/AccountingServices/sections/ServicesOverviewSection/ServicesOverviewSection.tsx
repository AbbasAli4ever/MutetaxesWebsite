import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../AccountingComponents/ui/card";

const servicesData = [
  {
    title: "Cost Savings",
    icon: "/AccountingServices/valuepropositionsection-6.svg",
    background: "/AccountingServices/subtract-3.svg",
    benefits: [
      { text: "50% Less Than In-house Staff", bold: false },
      { text: "No Recruitment Costs", bold: false },
      { text: "No Training Expenses", bold: true },
      { text: "No Software Licenses", bold: false },
      { text: "Predictable Monthly Fees", bold: false },
    ],
  },
  {
    title: "Expertise",
    icon: "/AccountingServices/valuepropositionsection-4.svg",
    background: "/AccountingServices/subtract-11.svg",
    benefits: [
      {
        text: "Hkicpa Qualified Accountants",
        bold: true,
        parts: [
          { text: "Hkicpa", bold: true },
          { text: " ", bold: false },
          { text: "Qualified", bold: true },
          { text: " Accountants", bold: false },
        ],
      },
      {
        text: "Latest Compliance Knowledge",
        bold: false,
        parts: [
          { text: "Latest Compliance", bold: false },
          { text: " Knowledge", bold: true },
        ],
      },
      {
        text: "Industry Best Practices",
        bold: false,
        parts: [
          { text: "Industry", bold: true },
          { text: " Best Practices", bold: false },
        ],
      },
      {
        text: "Continuous Training",
        bold: false,
        parts: [
          { text: "Continuous", bold: false },
          { text: " Training", bold: true },
        ],
      },
      {
        text: "Technical Support",
        bold: false,
        parts: [
          { text: "Technical ", bold: true },
          { text: "Support", bold: false },
        ],
      },
    ],
  },
  {
    title: "Technology",
    icon: "/AccountingServices/valuepropositionsection-5.svg",
    background: "/AccountingServices/subtract-7.svg",
    benefits: [
      {
        text: "Latest Cloud Software",
        bold: false,
        parts: [
          { text: "Latest Cloud", bold: true },
          { text: " Software", bold: false },
        ],
      },
      {
        text: "Automated Processes",
        bold: false,
        parts: [
          { text: "Automated", bold: false },
          { text: " Processes", bold: true },
        ],
      },
      {
        text: "Real-time Reporting",
        bold: false,
        parts: [
          { text: "Real-time", bold: true },
          { text: " Reporting", bold: false },
        ],
      },
      {
        text: "Mobile Access",
        bold: false,
        parts: [
          { text: "Mobile ", bold: true },
          { text: "Access", bold: false },
        ],
      },
      {
        text: "System Integrations",
        bold: false,
        parts: [
          { text: "System ", bold: false },
          { text: "Integrations", bold: true },
        ],
      },
    ],
  },
  {
    title: "Peace Of Mind",
    icon: "/AccountingServices/valuepropositionsection-7.svg",
    background: "/AccountingServices/subtract-10.svg",
    benefits: [
      {
        text: "Accurate Records",
        bold: false,
        parts: [
          { text: "Accurate ", bold: true },
          { text: "Records", bold: false },
        ],
      },
      {
        text: "Timely Reporting",
        bold: false,
        parts: [
          { text: "Timely", bold: false },
          { text: " Reporting", bold: true },
        ],
      },
      {
        text: "Regulatory Compliance",
        bold: false,
        parts: [
          { text: "Regulatory ", bold: true },
          { text: "Compliance", bold: false },
        ],
      },
      {
        text: "Data Security",
        bold: false,
        parts: [
          { text: "Data", bold: false },
          { text: " Security", bold: true },
        ],
      },
      {
        text: "Business Continuity",
        bold: false,
        parts: [
          { text: "Business ", bold: true },
          { text: "Continuity", bold: false },
        ],
      },
    ],
  },
];

export const ServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-14 px-[120px] py-8">
      <header className="inline-flex gap-4 flex-col items-center max-w-[994px]">
        <div className="flex flex-col items-start w-full gap-4">
          <p className="flex items-center justify-center w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            Why Outsource
          </p>

          <h2 className="flex items-center justify-center w-full [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
            Why Outsource Your Accounting
          </h2>

          <p className="flex items-center justify-center w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-2xl text-center tracking-[0] leading-7">
            Focus On Growing Your Business While We Handle The Numbers
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1230px]">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            className="relative w-full h-auto bg-transparent border-0 shadow-none"
          >
            <CardContent className="relative p-0">
              <div className="relative w-full pt-[42px]">
                <img
                  className="w-full h-[390px]"
                  alt={`${service.title} background`}
                  src={service.background}
                />

                <div className="absolute top-[124px] left-[26px] right-[26px] flex flex-col gap-8">
                  <h3 className="flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-2xl tracking-[0] leading-[34.1px]">
                    {service.title}
                  </h3>

                  <ul className="flex flex-col gap-6">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex gap-2.5 items-center"
                      >
                        <CheckIcon className="w-6 h-6 flex-shrink-0 text-[#212833]" />
                        <span className="flex items-center justify-center flex-1 text-[#212833e6] text-xl tracking-[0] leading-8">
                          {benefit.parts? (
                            benefit.parts.map((part, partIndex) => (
                              <span
                                key={partIndex}
                                className={
                                  part.bold
                                    ? "[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium"
                                    : "[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal"
                                }
                              >
                                {part.text}
                              </span>
                            ))
                          ) : (
                            <span
                              className={
                                benefit.bold
                                  ? "[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium"
                                  : "[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal"
                              }
                            >
                              {benefit.text}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <img
                  className="absolute top-[-13px] left-1/2 -translate-x-1/2 w-[162px] h-[162px]"
                  alt={`${service.title} icon`}
                  src={service.icon}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
