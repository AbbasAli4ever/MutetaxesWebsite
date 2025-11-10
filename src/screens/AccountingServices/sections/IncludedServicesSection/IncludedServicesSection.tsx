import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import NotchedCard from "../../../../UIComponents/NotchedCard";

const advantagesData = [
  {
    title: "E-Commerce & Retail",
    icon: "/Audit/valuepropositionsection-7.svg",
    background: "/HomePage/subtract-6.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-semibold">Multi-channel</span> sales tracking
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            Inventory <span className="font-semibold"> management</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-semibold">Marketplace</span> reconciliation
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            Product profitability{" "}
            <span className="font-semibold">analysis</span>{" "}
          </div>
        ),
      },
    ],
  },
  {
    title: "Technology & SaaS",
    icon: "/Audit/valuepropositionsection-3.svg",
    background: "/HomePage/frame-1171278986.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            Revenue{" "}
            <span className="font-semibold"> {"recognition (IFRS 15)"} </span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-semibold">R&D </span> expense tracking
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            Subscription <span className="font-semibold"> metrics</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-semibold">MRR/ARR </span>reporting
          </div>
        ),
      },
    ],
  },
  {
    title: "Professional Services",
    icon: "/Audit/valuepropositionsection-10.svg",
    background: "/HomePage/subtract-8.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            Project <span className="font-semibold"> accounting</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-semibold">Time </span> & billing{" "}
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            WIP <span className="font-semibold"> management</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-semibold">Client </span> profitability{" "}
          </div>
        ),
      },
    ],
  },
  {
    title: "Trading & Import/Export",
    icon: "/Audit/valuepropositionsection-9.svg",
    background: "/HomePage/subtract-8.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            Multi-currency <span className="font-semibold">accounting</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-semibold">Landed cost </span> calculation
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            Letter of credit <span className="font-semibold">tracking</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-semibold">Customs duty </span> accounting
          </div>
        ),
      },
    ],
  },
];

export const IncludedServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full gap-16 py-8 sm:gap-24">
      <header className="flex flex-col items-center gap-4 max-w-[1052px] mx-auto px-4">
        <div className="flex flex-col items-start w-full gap-4">
          <p className="w-full text-center font-helvetica font-normal text-[#21283399] text-xl md:text-2xl tracking-[0] leading-7">
            Secretary Requirements
          </p>

          <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            Understanding Hong Kong's <br /> Company Secretary Requirements
          </h2>
        </div>

        <p className="text-center max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[22px] tracking-[-0.64px] leading-relaxed lg:leading-[35px]">
          Legal obligations every Hong Kong company must comply with{" "}
        </p>
      </header>

      <div className="grid w-full grid-cols-1 gap-4 px-3 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 xl:gap-y-20 max-w-[1300px]">
        {advantagesData.map((advantage, index) => (
          <div className="relative pt-20" key={index}>
            <img
              className="absolute w-[150px] sm:w-[150px] md:w-[155px] xl:w-[162px] h-auto z-20 left-1/2 -ml-[51px] md:-ml-[52px] lg:-ml-[52px] xl:-ml-14 -mt-14"
              alt={advantage.title}
              src={advantage.icon}
            />
            <NotchedCard
              notch={{
                width: { base: 150, sm: 150, md: 150, lg: 150 },
                depth: { base: 40, sm: 35, md: 40, lg: 50 },
                bottomRadius: 25,
                topRadius: 25,
              }}
              widthClass="w-full max-w-[400px] sm:w-[300px] md:w-[300px] lg:w-[320px] xl:w-[400px]"
              heightClass="h-[300px] sm:h-[300px] lg:h-[300px] xl:h-[400px]"
              shadowColor="#6a98ff"
              className="z-10"
            >
              <CardContent className="relative flex flex-col items-center justify-center pt-16 xl:pt-24">
                {/* Content */}
                <div className="flex flex-col items-start sm:items-start pb-[40px] relative z-10 text-center sm:text-left">
                  <h3 className="font-helvetica font-medium text-[#212833] text-2xl sm:text-[26px] md:text-[25px] lg:text-[25px] xl:text-[32px] leading-snug">
                    {advantage.title}
                  </h3>

                  <ul className="flex flex-col gap-[7px] xl:gap-[16.46px] mt-[10px]">
                    {advantage.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-1 sm:gap-[13.72px]"
                      >
                        <img
                          className="w-[25px] xl:w-[28.93px] h-[25px] xl:h-[28.93px] flex-shrink-0"
                          alt="Checkmark"
                          src={item.icon}
                        />
                        <span className="font-helvetica font-normal text-[#212833e6] text-[14px] xl:text-[19.2px] tracking-[0] leading-[25.3px]">
                          <span className={"font-helvetica font-medium"}>
                            {item.text}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </NotchedCard>
          </div>
        ))}
      </div>
    </section>
  );
};
