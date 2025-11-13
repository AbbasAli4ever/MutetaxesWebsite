import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import NotchedCard from "../../../../UIComponents/NotchedCard";

const advantagesData = [
  {
    title: "E-Commerce & Retail",
    icon: "/AccountingServices/cart1.png",
    background: "/HomePage/subtract-6.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-medium">Multi-channel</span>  <span className="font-normal">sales tracking</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
           <span className="font-normal">Inventory</span>  <span className="font-medium"> management</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-medium">Marketplace</span> <span className="font-normal">reconciliation</span> 
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
           <span className="font-normal">Product profitability{" "}</span> 
            <span className="font-medium">analysis</span>{" "}
          </div>
        ),
      },
    ],
  },
  {
    title: "Technology & SaaS",
     icon: "/AccountingServices/bracket.png",
    background: "/HomePage/frame-1171278986.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-normal">Revenue{" "}</span>
            <span className="font-medium"> {"Recognition (IFRS 15)"} </span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-medium">R&D </span> <span className="font-normal">expense tracking</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-normal">Subscription</span> <span className="font-medium"> metrics</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-medium">MRR/ARR </span> <span className="font-normal">reporting</span>
          </div>
        ),
      },
    ],
  },
  {
    title: "Professional Services",
     icon: "/AccountingServices/buket.png",
    background: "/HomePage/subtract-8.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-normal">Project</span> <span className="font-medium"> Accounting</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-medium">Time </span> <span className="font-normal"> & billing{" "}</span> 
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-normal">WIP</span> <span className="font-medium"> management</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-medium">Client </span> <span className="font-normal">profitability{" "}</span> 
          </div>
        ),
      },
    ],
  },
  {
    title: "Trading & Import/Export",
     icon: "/AccountingServices/arrow-in.png",
    background: "/HomePage/subtract-8.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
           <span className="font-normal">Multi-currency</span>  <span className="font-medium">accounting</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-medium">Landed cost </span>  <span className="font-normal">calculation</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
           <span className="font-normal">Letter of credit</span>  <span className="font-medium">tracking</span>
          </div>
        ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
          <div>
            <span className="font-medium">Customs duty </span> <span className="font-normal">Accounting</span>
          </div>
        ),
      },
    ],
  },
];

export const IncludedServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full gap-16 py-8 lg:gap-4 mt-0 lg:mt-[130px]">
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

      <div className="grid w-full grid-cols-1 gap-x-4 px-3 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-10 max-w-[1300px]">
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
                  <h3 className="font-helvetica font-medium text-[#212833] text-2xl sm:text-[26px] md:text-[25px] lg:text-[25px] xl:text-[24px] leading-snug pb-4">
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
                        <span className="font-helvetica font-normal text-[#212833e6] text-[14px] xl:text-[20px] tracking-[0] leading-[25.3px]">
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
