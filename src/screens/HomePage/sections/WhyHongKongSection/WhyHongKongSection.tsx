import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import NotchedCard from "../../../../UIComponents/NotchedCard";

const advantagesData = [
  {
    title: "Business-friendly",
    icon: "/HomePage/HK1.png",
    background: "/HomePage/subtract-6.svg",
    hasgradient: false,
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: [
          { text: "100% Foreign ", bold: true },
          { text: "Ownership Allowed", bold: false },
        ],
      },
      {
        icon: "/HomePage/frame.svg",
        text: [
          { text: "1 Director, 1 ", bold: false },
          { text: "Shareholder Minimum", bold: true },
        ],
      },
      {
        icon: "/HomePage/frame.svg",
        text: [
          { text: "No Minimum ", bold: false },
          { text: "Capital ", bold: true },
          { text: "Requirement", bold: false },
        ],
      },
      {
        icon: "/HomePage/frame.svg",
        text: [
          { text: "English ", bold: true },
          { text: "As Official Language", bold: false },
        ],
      },
    ],
  },
  {
    title: "Tax Advantages",
    icon: "/HomePage/HK2.png",
    background: "/HomePage/frame-1171278986.svg",
    hasgradient: true,
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: [{ text: "No VAT, GST, Or Sales Tax", bold: true }],
      },
      {
        icon: "/HomePage/frame.svg",
        text: [
          { text: "No Withholding Tax ", bold: false },
          { text: "On Dividends", bold: true },
        ],
      },
      {
        icon: "/HomePage/frame.svg",
        text: [
          { text: "No Capital", bold: true },
          { text: " Gains Tax", bold: false },
        ],
      },
      {
        icon: "/HomePage/frame.svg",
        text: [
          { text: "Territorial ", bold: false },
          { text: "Tax System", bold: true },
        ],
      },
    ],
  },
  {
    title: "Strategic Location",
    icon: "/HomePage/HK3.png",
    background: "/HomePage/subtract-8.svg",
    hasgradient: false,
    items: [
      {
        icon: "/HomePage/frame-5.svg",
        text: [
          { text: "Gateway To ", bold: false },
          { text: "Mainland China", bold: true },
        ],
      },
      {
        icon: "/HomePage/frame-5.svg",
        text: [
          { text: "Access To ", bold: false },
          { text: "Asean Markets", bold: true },
        ],
      },
      {
        icon: "/HomePage/frame-5.svg",
        text: [
          { text: "World-class", bold: true },
          { text: " Infrastructure", bold: false },
        ],
      },
      {
        icon: "/HomePage/frame-5.svg",
        text: [
          { text: "International Financial ", bold: false },
          { text: "Center", bold: true },
        ],
      },
    ],
  },
];

export const WhyHongKongSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full py-8 mt-32">
      <header className="flex flex-col items-center gap-4 max-w-[952px] mx-auto px-4">
        <div className="flex flex-col items-start w-full gap-4">
          <p className="w-full text-center font-helvetica font-normal text-[#21283399] text-xl md:text-2xl tracking-[0] leading-7">
            Why Hong Kong
          </p>

          <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            Why Start Your Business
            <br />
            in Hong Kong?
          </h2>
        </div>

        <p className="text-center max-w-[742px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[22px] tracking-[-0.64px] leading-relaxed lg:leading-[35px]">
          Asia&#39;s premier business hub with unmatched advantages for entrepreneurs
        </p>
      </header>

      <div className="grid w-full grid-cols-1 gap-4 px-3 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 xl:gap-y-20 max-w-[1300px]">
        {advantagesData.map((advantage, index) => (
          <div className="relative pt-20 group" key={index}>
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
              heightClass="h-[340px] sm:h-[340px] lg:h-[340px] xl:h-[400px]"
              shadowColor="#6a98ff"
              className="z-10"
            >
              <div className="absolute w-full h-full overflow-hidden">
                {advantage.hasgradient && (
                  <>
                    {/* Mobile + Tablet version (smaller and subtler) - hidden on group hover */}
                    <div className="absolute block bottom-[-300px] left-1/2 -translate-x-1/2 w-[250px] h-[400px] rounded-full blur-[60px] bg-[#467eff] pointer-events-none opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0" />

                    {/* Large screen version */}
                  </>
                )}
              </div>
              <CardContent className="relative flex flex-col items-center justify-center pt-16 xl:pt-24">
                {/* Content */}
                <div className="flex flex-col items-center sm:items-start gap-1 pb-[40px] relative z-10 sm:text-left">
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
                          className="w-[25px] xl:w-[32.93px] h-[25px] xl:h-[32.93px] flex-shrink-0"
                          alt="Checkmark"
                          src={item.icon}
                        />
                        <span className="font-helvetica font-normal text-[#212833e6] text-[14px] xl:text-[19.2px] tracking-[0] leading-[25.3px]">
                          {item.text.map((segment, segIndex) => (
                            <span
                              key={segIndex}
                              className={
                                segment.bold ? "font-helvetica font-medium" : ""
                              }
                            >
                              {segment.text}
                            </span>
                          ))}
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
