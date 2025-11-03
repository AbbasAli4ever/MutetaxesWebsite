import React from "react";
import { Card, CardContent } from "../../../../AuditComponents/ui/card";

const cards = [
  {
    id: 1,
    bgImage: "/Audit/subtract-9.svg",
    icon: "/Audit/valuepropositionsection-6.svg",
    title: "Who Needs An Audit?",
    content: (
      <>
        <p>
          <span className="font-semibold">All Hong Kong Companies Must Be Audited Annually. </span>
          No Exceptions Unless You Qualify For Small Company Exemption.
        </p>
      </>
    ),
  },
  {
    id: 2,
    bgImage: "/Audit/subtract-5.svg",
    icon: "/Audit/valuepropositionsection-3.svg",
    title: "Small Company Exemption",
    hasChecklist: true,
  },
  {
    id: 3,
    bgImage: "/Audit/subtract-6.svg",
    icon: "/Audit/valuepropositionsection-8.svg",
    title: "Non-compliance Consequences",
    hasWarnings: true,
  },
];

const checklistItems = [
  {
    text: (
      <>
        <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-8">
          Annual Revenue{" "}
        </span>
        <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
          ≤ Hk$25 Million
        </span>
      </>
    ),
  },
  {
    text: (
      <>
        <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-8">
          Total Assets{" "}
        </span>
        <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
          ≤ Hk$25 Million
        </span>
      </>
    ),
  },
  {
    text: (
      <>
        <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-8">
          Employees{" "}
        </span>
        <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
          ≤ 50
        </span>
      </>
    ),
  },
];

const warningItems = [
  "Fines Up To Hk$300,000",
  "Director Prosecution",
  "Company Strike-off Risk",
  "Banking Issues",
];

export const IncludedServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-14 px-[120px] py-8 relative">
      <header className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            Audit Requirements
          </p>

          <h2 className="relative flex items-center justify-center w-[994px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
            Understanding Hong Kong
            <br />
            Audit Requirements
          </h2>

          <p className="relative flex items-center justify-center self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-2xl text-center tracking-[0] leading-7">
            Know Your Obligations And Avoid Costly Penalties
          </p>
        </div>
      </header>

      <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="relative w-[390px] h-auto border-0 shadow-none bg-transparent"
          >
            <CardContent className="p-0 relative h-[408px]">
              <img
                className="absolute top-[42px] left-0 w-[390px] h-[366px]"
                alt="Card background"
                src={card.bgImage}
              />

              <img
                className="absolute top-[-13px] left-[138px] w-[162px] h-[162px]"
                alt="Card icon"
                src={card.icon}
              />

              {card.id === 1 && (
                <div className="flex w-[344px] gap-8 top-32 left-[25px] flex-col items-start absolute">
                  <h3 className="relative flex items-center justify-start font-semibold self-stretch mt-[-1.22px] [font-family:'Helvetica_Neue-Medium',Helvetica] text-[#212833] text-2xl tracking-[0] leading-[34.1px]">
                    {card.title}
                  </h3>

                  <p className="relative flex items-center justify-center w-[336.23px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-[31.5px]">
                    {card.content}
                  </p>
                </div>
              )}

              {card.hasChecklist && (
                <div className="inline-flex gap-8 top-[124px] left-[26px] flex-col items-start absolute">
                  <h3 className="relative flex items-center justify-start self-stretch mt-[-1.22px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-semibold text-[#212833] text-2xl tracking-[0] leading-[34.1px]">
                    {card.title}
                  </h3>

                  <div className="flex flex-col w-[344px] items-start gap-4 relative flex-[0_0_auto]">
                    <div className="flex w-[344px] items-center gap-2.5 relative flex-[0_0_auto]">
                      <p className="relative flex items-center justify-start w-[310px] mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-8">
                        Qualify If Meeting 2 Of 3 Criteria:
                      </p>
                    </div>

                    {checklistItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex w-[344px] items-center gap-2.5 relative flex-[0_0_auto]"
                      >
                        <img
                          className="relative w-6 h-6"
                          alt="Checkmark"
                          src="/Audit/frame.svg"
                        />

                        <div className="relative flex items-center justify-start w-[310px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-8">
                          {item.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {card.hasWarnings && (
                <div className="inline-flex gap-8 top-[131px] left-[25px] flex-col items-start absolute">
                  <h3 className="relative flex items-center justify-start self-stretch mt-[-6.22px] -ml-2 [font-family:'Helvetica_Neue-Medium',Helvetica] font-semibold text-[#212833] text-2xl tracking-[0] leading-[34.1px]">
                    {card.title}
                  </h3>

                  <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                    {warningItems.map((warning, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-[344px] items-start gap-6 relative flex-[0_0_auto]"
                      >
                        <div className="flex w-[344px] items-center gap-2.5 relative flex-[0_0_auto]">
                          <div className="relative w-6 h-6 bg-[#f1433669] rounded-[60px] overflow-hidden">
                            <div className="relative w-[50.00%] h-[50.00%] top-[24.21%] left-[25.00%]">
                              <div className="relative w-[85.00%] h-[85.00%] top-[7.50%] left-[7.50%] bg-[url(/Audit/union.svg)] bg-[100%_100%]" />
                            </div>
                          </div>

                          <p className="relative flex items-center justify-start w-[310px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-8">
                            {warning}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
