import React from "react";
import { Card, CardContent } from "../../../../AuditComponents/ui/card";

const checklistData = [
  {
    title: "Financial Records",
    icon: "/Audit/valuepropositionsection-7.svg",
    background: "/Audit/subtract-8.svg",
    items: [
      "General Ledger",
      "Trial Balance",
      "Bank Statements (all Accounts)",
      "Bank Reconciliations",
      "Journal Entries",
    ],
  },
  {
    title: "Supporting Documents",
    icon: "/Audit/valuepropositionsection-12.svg",
    background: "/Audit/subtract-7.svg",
    items: [
      "Sales Invoices",
      "Purchase Invoices",
      "Contracts And Agreements",
      "Fixed Asset Register",
      "Inventory Records",
    ],
  },
  {
    title: "Corporate Records",
    icon: "/Audit/valuepropositionsection-9.svg",
    background: "/Audit/subtract-10.svg",
    items: [
      "Board Minutes",
      "Shareholder Resolutions",
      "Statutory Registers",
      "Insurance Policies",
      "Employment Records",
    ],
  },
  {
    title: "Tax Records",
    icon: "/Audit/valuepropositionsection-10.svg",
    background: "/Audit/subtract-11.svg",
    items: [
      "Tax Returns",
      "Ird Correspondence",
      "Tax Payment Records",
      "Mpf Contributions",
    ],
  },
];

export const SupportInfoSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-14 px-[120px] py-8">
      <header className="inline-flex flex-col items-center gap-4">
        <div className="flex flex-col items-start w-full gap-4">
          <div className="flex items-center justify-center w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            Audit Preparation
          </div>

          <h1 className="flex items-center justify-center w-full max-w-[994px] mx-auto [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
            Audit Preparation Checklist
          </h1>

          <div className="flex items-center justify-center w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-2xl text-center tracking-[0] leading-7">
            Essential Documents Needed For Your Audit
          </div>
        </div>
      </header>

      <div className="flex flex-col items-start gap-8">
        <div className="grid grid-cols-3 gap-8">
          {checklistData.slice(0, 3).map((category, index) => (
            <Card
              key={index}
              className="w-[390px] h-[432px] relative border-0 shadow-none bg-transparent"
            >
              <CardContent className="relative w-full h-full p-0">
                <img
                  className="absolute top-[42px] left-0 w-[390px] h-[390px]"
                  alt="Background shape"
                  src={category.background}
                />

                <img
                  className="absolute top-[-13px] left-[138px] w-[162px] h-[162px]"
                  alt={`${category.title} icon`}
                  src={category.icon}
                />

                <div className="absolute top-32 left-[25px] flex flex-col items-start gap-8 w-[344px]">
                  <h3 className="flex items-center justify-start w-full [font-family:'Helvetica_Neue-Medium',Helvetica] font-semibold text-[#212833] text-2xl tracking-[0] leading-[34.1px]">
                    {category.title}
                  </h3>

                  <ul className="flex flex-col items-start w-full gap-3">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex w-full items-center gap-2.5"
                      >
                        <img
                          className="flex-shrink-0 w-6 h-6"
                          alt="Checkmark"
                          src="/Audit/frame.svg"
                        />
                        <span className="flex items-center justify-start flex-1 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-8">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-start gap-8">
          {checklistData.slice(3, 4).map((category, index) => (
            <Card
              key={index}
              className="w-[390px] h-[432px] relative border-0 shadow-none bg-transparent"
            >
              <CardContent className="relative w-full h-full p-0">
                <img
                  className="absolute top-[42px] left-0 w-[390px] h-[390px]"
                  alt="Background shape"
                  src={category.background}
                />

                <img
                  className="absolute top-[-13px] left-[138px] w-[162px] h-[162px]"
                  alt={`${category.title} icon`}
                  src={category.icon}
                />

                <div className="absolute top-32 left-[25px] flex flex-col items-start gap-8 w-[344px]">
                  <h3 className="flex items-center justify-start w-full [font-family:'Helvetica_Neue-Medium',Helvetica] font-semibold text-[#212833] text-2xl tracking-[0] leading-[34.1px]">
                    {category.title}
                  </h3>

                  <ul className="flex flex-col items-start w-full gap-3">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex w-full items-center gap-2.5"
                      >
                        <img
                          className="flex-shrink-0 w-6 h-6"
                          alt="Checkmark"
                          src="/Audit/frame.svg"
                        />
                        <span className="flex items-center justify-start flex-1 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-8">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
