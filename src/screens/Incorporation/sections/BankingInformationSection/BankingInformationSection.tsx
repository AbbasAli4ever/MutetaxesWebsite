import React from "react";
import { Card, CardContent } from "../../../../IncorporateComponents/ui/card";

const directorsShareholdersItems = [
  {
    icon: "/Incorporate/container.svg",
    title: "Passport copy",
    subtitle: null,
  },
  {
    icon: "/Incorporate/container.svg",
    title: "Proof of address",
    subtitle: "(utility bill/bank statement)",
  },
  {
    icon: "/Incorporate/container.svg",
    title: "Brief background\ninformation",
    subtitle: null,
  },
  {
    icon: "/Incorporate/container.svg",
    title: "Proposed business\nactivities",
    subtitle: null,
  },
];

const companyItems = [
  {
    icon: "/Incorporate/container.svg",
    title: "3 proposed company\nnames",
    subtitle: null,
  },
  {
    icon: "/Incorporate/container.svg",
    title: "Share capital amount",
    subtitle: "(usually HK$10,000)",
  },
  {
    icon: "/Incorporate/container.svg",
    title: "Registered office consent",
    subtitle: null,
  },
  {
    icon: "/Incorporate/container.svg",
    title: "Business description",
    subtitle: null,
  },
];

export const BankingInformationSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-[29px] py-10 mt-[100px]">
      <div className="flex flex-col items-center gap-6 max-w-[964px] mx-auto px-4">
        <p className="font-helvetica font-normal text-[#21283399] text-[1rem] lg:text-2xl text-center tracking-[0] leading-7">
          We help you navigate Hong Kong&#39;s banking requirements
        </p>

        <h2 className="font-georgia font-normal text-[#212833] text-[39px] lg:text-[64px] text-center tracking-[0] leading-tight lg:leading-[66px]">
          Bank Account Opening
          <br />
          Assistance
        </h2>

        <p className="font-helvetica font-normal text-[#212833] text-2xl text-center tracking-[0] leading-7">
          We help you navigate Hong Kong&#39;s banking requirements
        </p>
      </div>

      <div className="flex flex-col lg:flex lg:flex-row lg:justify-center gap-6 max-w-[1146px] mx-auto px-4">
        <Card className="w-full max-w-[561px] bg-white rounded-[14px] border border-solid border-[#0000001a]">
          <CardContent className="flex flex-col gap-[30px] p-6">
            <h3 className="font-helvetica font-normal text-neutral-950 text-[22px] tracking-[0] leading-5">
              For Directors/Shareholders
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {directorsShareholdersItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col  lg:flex lg:flex-row lg:items-center gap-2 p-3 rounded-[10px] border border-solid border-[#0000001a]"
                >
                  <img
                    className="flex-shrink-0 w-8 h-8"
                    alt="Document icon"
                    src={item.icon}
                  />

                  <div className="flex flex-col gap-0.5">
                    <div className="font-helvetica font-normal text-[#212833] text-base tracking-[0] leading-5 whitespace-pre-line">
                      {item.title}
                    </div>
                    {item.subtitle && (
                      <div className="font-helvetica font-normal text-[#212833] text-[10px] tracking-[0] leading-[11px]">
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="w-full max-w-[561px] bg-white rounded-[14px] border border-solid border-[#0000001a]">
          <CardContent className="flex flex-col gap-[30px] p-6">
            <h3 className="font-helvetica font-normal text-neutral-950 text-[22px] tracking-[0] leading-5">
              For the Company
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {companyItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex lg:flex-row lg:items-center gap-2  p-3 rounded-[10px] border border-solid border-[#0000001a]"
                >
                  <img
                    className="flex-shrink-0 w-8 h-8"
                    alt="Document icon"
                    src={item.icon}
                  />

                  <div className="flex flex-col gap-0.5">
                    <div className="font-helvetica font-normal text-[#212833] text-[15px] lg:text-base tracking-[0] leading-tight lg:leading-5 whitespace-pre-line">
                      {item.title}
                    </div>
                    {item.subtitle && (
                      <div className="font-helvetica font-normal text-[#212833] text-sm tracking-[0] leading-[11px]">
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
