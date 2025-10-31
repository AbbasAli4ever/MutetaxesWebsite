import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const advantagesData = [
  {
    title: "Business-friendly",
    icon: "/HomePage/HK1.png",
    background: "/HomePage/subtract-6.svg",
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
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: [{ text: "No Vat, Gst, Or Sales Tax", bold: true }],
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
    <section className="w-full flex flex-col gap-[100px] py-8">
      <header className="flex flex-col items-center gap-4 max-w-[952px] mx-auto px-4">
        <div className="flex flex-col items-start w-full gap-4">
          <p className="w-full text-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl tracking-[0] leading-7">
            Why Hong Kong
          </p>

          <h2 className="w-full text-center [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] tracking-[0] leading-[72px]">
            Why Start Your Business
            <br />
            in Hong Kong?
          </h2>
        </div>

        <p className="text-center max-w-[702px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[22px] tracking-[-0.64px] leading-[35px]">
          Asia&#39;s premier business hub with unmatched advantages for
          entrepreneurs
        </p>
      </header>

      <div className="flex justify-center items-center gap-[19px] w-full mx-auto px-4">
        {advantagesData.map((advantage, index) => (
          <Card
            key={index}
            className="relative w-full max-w-[400px] h-[401px] border-0 shadow-none bg-transparent overflow-visible"
          >
            <img
              className="absolute inset-0 object-cover w-full h-full"
              alt="Background"
              src={advantage.background}
            />

            <img
              className="absolute w-[162px] h-[162px] top-[-17.87%] left-[35.45%]"
              alt="Icon"
              src={advantage.icon}
            />

            <CardContent className="relative h-full flex flex-col justify-center p-6 pt-[78px]">
              <h3 className="mb-[7.6px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[30.2px] tracking-[0] leading-[35.5px]">
                {advantage.title}
              </h3>

              <ul className="flex flex-col gap-[16.46px] mt-[30px]">
                {advantage.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-[13.72px]"
                  >
                    <img
                      className="w-[32.93px] h-[32.93px] flex-shrink-0"
                      alt="Checkmark"
                      src={item.icon}
                    />
                    <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-[19.2px] tracking-[0] leading-[25.3px]">
                      {item.text.map((segment, segIndex) => (
                        <span
                          key={segIndex}
                          className={
                            segment.bold
                              ? "[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium"
                              : ""
                          }
                        >
                          {segment.text}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
