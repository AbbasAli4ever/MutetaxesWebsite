import React from "react";
import { Card, CardContent } from "../../../../AuditComponents/ui/card";
import NotchedCard from "../../../../UIComponents/NotchedCard";

const cardsData = [
   {
    id: 1,
    icon: "/Audit/valuepropositionsection-2.svg",
    title: "Cost Savings",
    description:
      (<span>
        <span className="font-medium">15-30% Reduction</span> In Total Audit
Fees Through Efficient Preparation
      </span>),
    background: "/Secretary/subtract-5.svg",
    type: "text",
    shadowColor: "#6a98ff",
    borderColor: "#d7e3ff"
  },
  {
    id: 2,
    icon: "/Audit/valuepropositionsection-11.svg",
    title: "Time Savings",
    description:
      (<span>
        <span className="font-medium">15-30% Reduction</span> In Total Audit
Fees Through Efficient Preparation
      </span>),
    background: "/Secretary/subtract-5.svg",
    type: "text",
    shadowColor: "#6a98ff",
    borderColor: "#d7e3ff"
  },
  {
    id: 3,
    icon: "/Audit/valuepropositionsection-4.svg",
    title: "Quality Assurance",
    description:
      (<span>
        <span className="font-medium">15-30% Reduction</span>  In Total Audit
Fees Through Efficient Preparation.
      </span>),
    background: "/Secretary/subtract-5.svg",
    type: "text",
    shadowColor: "#6a98ff",
    borderColor: "#d7e3ff"
  },
  {
    id: 4,
    icon: "/Audit/valuepropositionsection-5.svg",
    title: "Peace of Mind",
    description:
      (<span>
        <span className="font-medium">15-30% Reduction</span>  In Total Audit
Fees Through Efficient Preparation
      </span>),
    background: "/Secretary/subtract-5.svg",
    type: "text",
    shadowColor: "#6a98ff",
    borderColor: "#d7e3ff"
  },
];

export const ServicesIncludedSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-4 max-w-[1200px] mx-auto py-8 relative mt-10 lg:mt-[120px]">
      <header className="inline-flex flex-col items-center gap-4 max-w-[994px]">
       <div className="flex flex-col items-start w-full gap-4">
          <p className="w-full text-center font-helvetica font-normal text-[#21283399] text-xl md:text-2xl tracking-[0] leading-7">
            Secretary Requirements
          </p>

          <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            Understanding Hong Kong's 
            <br />
           Company Secretary Requirements
          </h2>
        </div>

        <p className="text-center max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[22px] tracking-[-0.64px] leading-relaxed lg:leading-[35px]">
          Legal Obligations Every Hong Kong Company Must Comply With
        </p>
      </header>

      <div className="grid grid-cols-1 px-2 gap-x-4 lg:gap-x-14 xl:gap-x-20 sm:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card, index) => (
          <div className="relative pt-20" key={index}>
              <img
                className="absolute w-[150px] sm:w-[150px] md:w-[155px] xl:w-[162px] h-auto z-20 left-1/2 -ml-[51px] md:-ml-[52px] lg:-ml-[52px] xl:-ml-14 -mt-14"
                 alt={card.title}
                src={card.icon}
              />
              <NotchedCard
                notch={{
                width: { base: 150, sm: 150, md: 150, lg: 150 },
                depth: { base: 40, sm: 35, md: 40, lg: 50 },
                bottomRadius: 25,
                topRadius: 25,
              }}
                widthClass="w-full max-w-[400px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[400px]"
                heightClass="h-[250px] sm:h-[250px] lg:h-[250px] xl:h-[250px]"
                shadowColor={card.shadowColor}
                borderColor={card.borderColor}
                className="z-10"
              >
                <CardContent className="relative flex flex-col items-start justify-center pt-16 xl:pt-24">
              <div className="flex flex-col items-center sm:items-start gap-6 pb-[40px] relative z-10 text-center sm:text-left ">
                <h3 className="font-helvetica font-medium text-[#212833] text-2xl sm:text-[24px] md:text-[20px] xl:text-[24px] leading-snug">
                  {card.title}
                </h3>

                {card.type === "text" && (
                  <p className="font-helvetica font-normal text-[#212833e6] text-base sm:text-base md:text-[15px] xl:text-[20px] leading-relaxed">
                    {card.description}
                  </p>
                )}
                 </div>
            </CardContent>
              </NotchedCard>
            </div>
        ))}
      </div>
    </section>
  );
};
