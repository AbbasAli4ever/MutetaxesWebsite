import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../AccountingComponents/ui/card";

const servicesData = [
  {
    title: "E-commerce & Retail",
    icon: "/AccountingServices/valuepropositionsection.svg",
    background: "/AccountingServices/subtract-5.svg",
    features: [
      {
        text: "Multi-channel",
        boldText: "Multi-channel",
        regularText: " Sales Tracking",
      },
      {
        text: "Inventory Management",
        boldText: "Management",
        regularText: "Inventory ",
      },
      {
        text: "Marketplace Reconciliation",
        boldText: "Marketplace",
        regularText: " Reconciliation",
      },
      {
        text: "Product Profitability Analysis",
        boldText: "Analysis",
        regularText: "Product Profitability ",
      },
    ],
  },
  {
    title: "Technology & Saas",
    icon: "/AccountingServices/valuepropositionsection-1.svg",
    background: "/AccountingServices/subtract-1.svg",
    features: [
      {
        text: "Revenue Recognition (ifrs 15)",
        boldText: "Recognition (ifrs 15)",
        regularText: "Revenue ",
      },
      {
        text: "R&d Expense Tracking",
        boldText: "R&d ",
        regularText: "Expense Tracking",
      },
      {
        text: "Subscription Metrics",
        boldText: " Metrics",
        regularText: "Subscription",
      },
      {
        text: "Mrr/arr Reporting",
        boldText: "Mrr/arr ",
        regularText: "Reporting",
      },
    ],
  },
  {
    title: "Professional Services",
    icon: "/AccountingServices/valuepropositionsection-3.svg",
    background: "/AccountingServices/subtract-4.svg",
    features: [
      {
        text: "Project Accounting",
        boldText: "Accounting",
        regularText: "Project ",
      },
      { text: "Time & Billing", boldText: "Time ", regularText: "& Billing" },
      { text: "Wip Management", boldText: " Management", regularText: "Wip" },
      {
        text: "Client Profitability",
        boldText: "Client ",
        regularText: "Profitability",
      },
    ],
  },
  {
    title: "Trading & Import/export",
    icon: "/AccountingServices/valuepropositionsection-2.svg",
    background: "/AccountingServices/subtract-6.svg",
    features: [
      {
        text: "Multi-currency Accounting",
        boldText: " Accounting",
        regularText: "Multi-currency",
      },
      {
        text: "Landed Cost Calculation",
        boldText: "Landed Cost ",
        regularText: "Calculation",
      },
      {
        text: "Letter Of Credit Tracking",
        boldText: "Tracking",
        regularText: "Letter Of Credit ",
      },
      {
        text: "Customs Duty Accounting",
        boldText: "Customs Duty ",
        regularText: "Accounting",
      },
    ],
  },
];

export const IncludedServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-14 px-4 md:px-8 lg:px-[120px] py-8">
      <header className="inline-flex gap-4 flex-col items-center max-w-[994px]">
        <div className="flex flex-col items-start w-full gap-4 lg:mt-[130px]">
          <p className="flex items-center justify-center w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            Secretary Requirements
          </p>

          <h1 className="flex items-center justify-center w-full [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-4xl md:text-5xl lg:text-[64px] text-center tracking-[0] leading-tight lg:leading-[72px]">
            Understanding Hong Kong&#39;s Company Secretary Requirements
          </h1>

          <p className="flex items-center justify-center w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-2xl text-center tracking-[0] leading-7">
            Legal Obligations Every Hong Kong Company Must Comply With
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

                <div className="absolute top-[124px] left-[26px] right-[26px] flex flex-col gap-8">
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
