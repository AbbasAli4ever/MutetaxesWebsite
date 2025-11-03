import React from "react";
import { Card, CardContent } from "../../../../SacretaryComponents/ui/card";

const cardsData = [
  {
    id: 1,
    icon: "/Secretary/valuepropositionsection-7.svg",
    title: "Mandatory Under\nhong Kong Law",
    description:
      "Every Hong Kong Company Must Appoint A Company Secretary Within 6 Months Of Incorporation Under The Companies Ordinance (cap. 622).",
    background: "/Secretary/subtract-5.svg",
    type: "text",
  },
  {
    id: 2,
    icon: "/Secretary/valuepropositionsection-1.svg",
    title: "Who Can Be A Company Secretary",
    background: "/Secretary/subtract-6.svg",
    type: "list",
    items: [
      {
        icon: "check",
        boldText: "Individual:",
        regularText:
          " Hong Kong Resident With Relevant Knowledge And Experience",
      },
      {
        icon: "check",
        boldText: "Corporate:",
        regularText: " hong Kong Registered Company With Tcsp License",
      },
    ],
  },
  {
    id: 3,
    icon: "/Secretary/valuepropositionsection.svg",
    title: "Consequences Of Non-compliance",
    background: "/Secretary/subtract-7.svg",
    type: "warning-list",
    items: [
      "Daily Fines Up To Hk$25,000",
      "Director Prosecution Risk",
      "Potential Company Strike-off",
      "Banking Relationship Issues",
      "Damaged Business Reputation",
    ],
  },
];

export const ServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-14 px-[120px] py-8 relative">
      <header className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-light text-[#21283399] text-[24px] text-center tracking-[0] leading-7">
            Secretary Requirements
          </p>

          <h2 className="relative flex items-center justify-center w-[994px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
            Understanding Hong Kong&#39;s Company Secretary Requirements
          </h2>

          <p className="relative flex items-center justify-center self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-light text-[#212833] text-[24px] text-center tracking-[0] leading-7">
            Legal Obligations Every Hong Kong Company Must Comply With
          </p>
        </div>
      </header>

      <div className="inline-flex items-start gap-8 relative flex-[0_0_auto] ml-[-17.00px] mr-[-17.00px]">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            className="relative w-[390px] h-[454px] border-0 shadow-none bg-transparent"
          >
            <CardContent className="relative w-full h-full p-0">
              <img
                className="absolute left-0 top-[42px] w-[390px] h-[412px]"
                alt="Card background"
                src={card.background}
              />

              <img
                className="absolute top-[-13px] left-[138px] w-[162px] h-[162px]"
                alt={card.title}
                src={card.icon}
              />

              <div className="flex flex-col w-[334px] items-start gap-8 absolute top-32 left-[25px]">
                <h3 className="relative  flex items-start justify-start self-stretch mt-[-1.22px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[24px] tracking-[0] leading-[34.1px] whitespace-pre-line">
                  {card.title}
                </h3>

                {card.type === "text" && (
                  <p className="relative flex  items-center justify-center w-[336.23px] mr-[-2.67px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-extralight text-[#212833e6] text-xl tracking-[0] leading-[31.5px]">
                    {card.description}
                  </p>
                )}

                {card.type === "list" && (
                  <div className="flex flex-col w-[344px] items-start gap-6 relative flex-[0_0_auto]">
                    {card.items?.map((item, index) => (
                      <div
                        key={index}
                        className="flex w-[344px] items-start gap-2.5 relative flex-[0_0_auto]"
                      >
                        <img
                          className="relative w-6 h-6"
                          alt="Check icon"
                          src="/Secretary/frame.svg"
                        />

                       <p className="relative  [font-family:'Helvetica_Neue-Medium',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-8">
  <span className="font-medium ">{item.boldText}</span>{" "}
  <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-extralight">
    {item.regularText}
  </span>
</p>

                      </div>
                    ))}
                  </div>
                )}

                {card.type === "warning-list" && (
                  <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                    {card.items?.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-[344px] items-start gap-6 relative flex-[0_0_auto]"
                      >
                        <div className="flex w-[344px] items-center gap-2.5 relative flex-[0_0_auto]">
                         
                                <img
                          className="relative w-6 h-6 "
                          alt="Check icon"
                          src="/Secretary/Framecrose.png"
                        />

                            
                       

                          <p className="relative flex items-start justify-start w-[310px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-light text-[#212833e6] text-xl tracking-[0] ">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
