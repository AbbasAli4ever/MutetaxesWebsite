import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import NotchedCard from "../../../../UIComponents/NotchedCard";

const advantagesData = [
  {
    title: "Cost Savings",
    icon: "/AccountingServices/arrow-down.png",
    background: "/HomePage/subtract-6.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: "50% less than in-house staff",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "No recruitment costs",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "No training expenses",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "No software licenses",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Predictable monthly fees",
      },
    ],
  },
  {
    title: "Expertise",
    icon: "/AccountingServices/badgeg.png",
    background: "/HomePage/frame-1171278986.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: "HKICPA qualified accountants",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Latest compliance knowledge",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Industry best practices",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Continuous training",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Technical support",
      },
    ],
  },
  {
    title: "Technology",
    icon: "/AccountingServices/saver.png",
    background: "/HomePage/subtract-8.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: "Latest cloud software",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Automated processes",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Real-time reporting",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Mobile access",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "System integrations",
      },
    ],
  },
  {
    title: "Peace of Mind",
    icon: "/AccountingServices/sqaure.png",
    background: "/HomePage/subtract-8.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: "Accurate records",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Timely reporting",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Regulatory compliance",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Data security",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Business continuity",
      },
    ],
  },
];

export const ServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full gap-16 py-8 sm:gap-4 mt-0 lg:mt-[130px]">
      <header className="flex flex-col items-center gap-4 max-w-[1052px] mx-auto px-4">
        <div className="flex flex-col items-start w-full gap-4">
          <p className="w-full text-center font-helvetica font-normal text-[#21283399] text-xl md:text-2xl tracking-[0] leading-7">
            Why Outsource
          </p>

          <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            Why Outsource Your Accounting{" "}
          </h2>
        </div>

        <p className="text-center max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[22px] tracking-[-0.64px] leading-relaxed lg:leading-[35px]">
          Focus On Growing Your Business While We Handle The Numbers{" "}
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
              <CardContent className="relative flex flex-col items-stat=rt justify-center pt-16 xl:pt-24">
                {/* Content */}
                <div className="flex flex-col items-start sm:items-start pb-[40px] relative z-10 text-center sm:text-left">
                  <h3 className="font-helvetica font-medium mb-3 text-[#212833] text-2xl sm:text-[26px] md:text-[25px] lg:text-[25px] leading-snug">
                    {advantage.title}
                  </h3>

                  <ul className="flex flex-col gap-[7px] xl:gap-[16.46px] mt-[10px]">
                    {advantage.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-1 sm:gap-[13.72px]"
                      >
                        <img
                          className="w-[25px] xl:w-[23.93px] h-[25px] xl:h-[23.93px] flex-shrink-0"
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
