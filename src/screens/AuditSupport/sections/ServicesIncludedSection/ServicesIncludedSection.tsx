import React from "react";
import { Card, CardContent } from "../../../../AuditComponents/ui/card";

const cardsData = [
  {
    title: "Cost Savings",
    description: "15-30% Reduction",
    additionalText: " In Total Audit\nfees Through Efficient Preparation",
    backgroundImage: "/Audit/subtract-3.svg",
    iconImage: "/Audit/valuepropositionsection-2.svg",
  },
  {
    title: "Time Savings",
    description: "15-30% Reduction",
    additionalText: " In Total Audit\nfees Through Efficient Preparation",
    backgroundImage: "/Audit/subtract-12.svg",
    iconImage: "/Audit/valuepropositionsection-11.svg",
  },
  {
    title: "Quality Assurance",
    description: "15-30% Reduction",
    additionalText: " In Total Audit\nfees Through Efficient Preparation",
    backgroundImage: "/Audit/subtract-2.svg",
    iconImage: "/Audit/valuepropositionsection-4.svg",
  },
  {
    title: "Peace Of Mind",
    description: "15-30% Reduction",
    additionalText: " In Total Audit\nfees Through Efficient Preparation",
    backgroundImage: "/Audit/subtract-4.svg",
    iconImage: "/Audit/valuepropositionsection-5.svg",
  },
];

export const ServicesIncludedSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-14 px-4 md:px-[120px] py-8">
      <header className="inline-flex flex-col items-center gap-4 max-w-[994px]">
        <div className="flex flex-col items-start w-full gap-4">
          <p className="w-full text-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl tracking-[0] leading-7">
            Secretary Requirements
          </p>

          <h1 className="w-full text-center [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-4xl md:text-[64px] tracking-[0] leading-tight md:leading-[72px]">
            Understanding Hong Kong&#39;s Company Secretary Requirements
          </h1>

          <p className="w-full text-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-2xl tracking-[0] leading-7">
            Legal Obligations Every Hong Kong Company Must Comply With
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1200px]">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="relative overflow-visible bg-transparent border-0 shadow-none"
          >
            <CardContent className="p-0 relative h-[301px]">
              <img
                className="absolute top-[41px] left-0 w-full h-[260px]"
                alt="Background shape"
                src={card.backgroundImage}
              />

              <div className="absolute top-[124px] left-[26px] right-[26px] flex flex-col gap-8">
                <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-semibold text-[#212833] text-2xl tracking-[0] leading-[34.1px]">
                  {card.title}
                </h3>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-2.5">
                    <p className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-8">
                      <span className="font-medium">{card.description}</span>
                      <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                        {card.additionalText}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="absolute top-[-13px] right-1 -translate-x-1/2 w-[162px] h-[162px]"
                alt="Value proposition icon"
                src={card.iconImage}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
