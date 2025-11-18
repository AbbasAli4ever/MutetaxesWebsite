import React from "react";
import { Card, CardContent } from "../../../../SacretaryComponents/ui/card";
import NotchedCard from "../../../../UIComponents/NotchedCard";

const cardsData = [
  {
    id: 1,
    icon: "/Audit/peopleo.png",
    title: "Who Needs An Audit?",
    alt:"who needs an Audit ",
    description:
      (<span>
        <span className="font-medium">All Hong Kong Companies Must Be Audited Annually.</span> No Exceptions Unless You Qualify For Small Company Exemption.
      </span>),
    background: "/Secretary/subtract-5.svg",
    type: "text",
    shadowColor: "#ff9951",
    borderColor: "#ffc7a1"
  },
  {
    id: 2,
    icon: "/Audit/dollar.png",
    title: "Small Company Exemption",
    background: "/Secretary/subtract-6.svg",
    type: "list",
    shadowColor: "#6a98ff",
    borderColor: "#d7e3ff",
    items: [
      (<span>Annual Revenue <span className="font-medium">≤ HK$25 Million</span></span>),
      (<span>Total Assets  <span className="font-medium">≤ HK$25 Million</span></span>),
      (<span>Employees  <span className="font-medium">≤ 50</span></span>),
    ]
  },
  {
    id: 3,
    icon: "/Audit/notice.png",
    title: (<span>Non-Compliance <br /> Consequences</span>),
    background: "/Secretary/subtract-7.svg",
    type: "warning-list",
    shadowColor: "#fbc3bf",
    borderColor: "#fbc3bf",
    items: [
      "Fines Up To HK$300,000",
      "Director Prosecution",
      "Company Strike-Off Risk",
      "Banking Issues",

    ],
  },
];

export const IncludedServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-4 max-w-[1200px] mx-auto py-8 relative mt-0 lg:mt-[130px]">
      <header className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]">
        <div className="flex flex-col items-start w-full gap-4">
          <p className="w-full text-center font-helvetica font-normal text-[#21283399] text-xl md:text-2xl tracking-[0] leading-7">
            Audit Requirements
          </p>

          <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            Understanding Hong Kong
            <br />
            Audit Requirements
          </h2>
        </div>

        <p className="text-center max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[22px] tracking-[-0.64px] leading-relaxed lg:leading-[35px]">
          Know Your Obligations And Avoid Costly Penalties
        </p>
      </header>

      <div className="grid w-full grid-cols-1 gap-4 px-2 lg:gap-10 xl:gap-24 xl:gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card, index) => (
          <div className="relative pt-20" key={index}>
            <img
              className="absolute w-[150px] sm:w-[150px] md:w-[155px] xl:w-[162px] h-auto z-20 left-1/2 -ml-[51px] md:-ml-[52px] lg:-ml-[52px] xl:-ml-14 -mt-14"
              alt={card.alt}
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
              heightClass="h-[380px] sm:h-[380px] lg:h-[350px] xl:h-[375px]"
              shadowColor={card.shadowColor}
              borderColor={card.borderColor}
              className="z-10"
            >
              <CardContent className="relative flex flex-col items-start justify-center pt-12 xl:pt-24">
                <div className="flex flex-col items-center sm:items-start gap-6 pb-[40px] relative z-10 text-start sm:text-left ">
                  <h3 className="font-helvetica font-medium text-[#212833] mt-5 xl:mt-0 text-2xl sm:text-[24px] md:text-[20px] xl:text-[24px] leading-snug">
                    {card.title}
                  </h3>

                  {card.type === "text" && (
                    <p className="font-helvetica font-normal text-[#212833e6] text-base sm:text-base md:text-[15px] xl:text-[20px] xl:leading-[30px]">
                      {card.description}
                    </p>
                  )}

                  {card.type === "list" && (
                    <div className="flex flex-col  mx-auto items-start gap-4 xl:gap-6 relative flex-[0_0_auto]">
                      <p className="font-helvetica font-normal text-[#212833e6] text-base sm:text-base md:text-[15px] xl:text-[20px] leading-relaxed">Qualify if meeting 2 of 3 criteria:</p>
                      {card.items?.map((item, index) => (
                        <div
                          key={index}
                          className="flex  items-start gap-2.5 relative flex-[0_0_auto]"
                        >
                          <img
                            className="relative w-6 h-6"
                            alt="Check icon"
                            src="/Secretary/frame.svg"
                          />

                          <p className="font-helvetica font-normal text-[#212833e6] text-base sm:text-base md:text-[15px] xl:text-[20px] leading-relaxed">
                            {item}
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
                          className="flex flex-col items-start gap-6 relative flex-[0_0_auto]"
                        >
                          <div className="flex items-center gap-2.5 relative flex-[0_0_auto]">
                            <img
                              className="relative w-6 h-6 "
                              alt="Check icon"
                              src="/Secretary/Framecrose.png"
                            />

                            <p className="font-helvetica font-normal text-[#212833e6] text-base sm:text-base md:text-[15px] xl:text-[20px] leading-relaxed ">
                              {item}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
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
