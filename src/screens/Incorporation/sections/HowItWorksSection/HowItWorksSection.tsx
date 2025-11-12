import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import SideNotchCard from "../../../../UIComponents/SIdeNotchCard";

const steps = [
  {
    number: "Day 1",
    title: "Initial Consultation",
    icon: "/HomePage/frame-1171278983.svg",
    items: [
      "Free Consultation",
      "Buisness Structure Advice",
      " Name Availability Check",
      "Document Requirements Explained",
      "Service Agreement",
    ],
    background: "/Incorporate/subtract-7.svg",
    alignment: "right",
  },
  {
    number: "Days 2-3",
    title: "Document\npreparation",
    items: [
      "Kyc Documents Collection",
      "Incorporation Forms Drafting",
      " articles Of Association",
      "Director/shareholder Details",
    ],
    icon: "/Incorporate/frame-1171278984-1.svg",
    background: "/Incorporate/subtract-2.svg",
    alignment: "left",
  },
  {
    number: "Days 4-5",
    title: "Government submission",
    items: [
      "Companies Registry Filing",
      "Business Registration Application",
      "Name Reservation",
      "Fee Payment",
      "Status Tracking",
    ],
    icon: "/HomePage/frame-1171278983.svg",
    background: "/Incorporate/subtract-7.svg",
    alignment: "right",
  },
  {
    number: "Days 6-7",
    title: "Ongoing Support",
    items: [
      "Certificate Issuance",
      "Company Kit Preparation",
      "Chops And Seals Creation",
      "Digital Platform Setup",
      "Handover And Training",
    ],
    icon: "/Incorporate/frame-1171278984.svg",
    background: "/Incorporate/subtract-2.svg",
    alignment: "left",
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-8">
      <div className="flex flex-col w-full max-w-[952px] mx-auto items-center gap-4 px-4">
        <div className="flex flex-col items-start w-full gap-4">
          <div className="w-full flex items-center justify-center font-helvetica font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            How It&apos;s Work
          </div>

          <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            Start Your Hong Kong
            <br />
            Journey in 3 Simple Steps
          </h2>
        </div>
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto mt-[120px] px-4">
        <div className="relative min-h-[1450px] md:min-h-[1150px]">
          <div className="absolute left-1/2 top-0 w-1 h-[1468px] md:h-[1168px] bg-[linear-gradient(180deg,rgba(58,118,255,1)_38%,rgba(239,239,239,1)_94%)] -translate-x-1/2" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className={`absolute ${
                  index === 0
                    ? "top-0"
                    : index === 1
                    ? "top-[369px] md:top-[292px]"
                    : index === 2
                    ? "top-[729px] md:top-[590px]"
                    : "top-[1093px] md:top-[900px]"
                } left-1/2 -translate-x-1/2 w-24 h-12 bg-white rounded-[91.43px] overflow-hidden shadow-[0px_4px_4px_#004eff26] z-10`}
              >
                <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-16 h-16 bg-[#004eff] rounded-[32px] blur-[17px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[26px] flex items-center justify-center font-helvetica font-normal text-[black] text-[17.6px] text-center tracking-[0] leading-[37px] whitespace-nowrap">
                  {step.number}
                </div>
              </div>
              <div className="relative">
                <img
                  className={`absolute w-[108px] h-[87px] z-20 ${
                    index === 0
                      ? "-top-2"
                      : index === 1
                      ? "top-[360px] md:top-[282px]"
                      : index === 2
                      ? "top-[720px] md:top-[580px]"
                      : "top-[1083px] md:top-[890px]"
                  } ${
                    step.alignment === "right"
                      ? "left-[calc(50%+35px)]"
                      : "right-[calc(50%+35px)]"
                  }`}
                  alt="Icon"
                  src={step.icon}
                />
                <SideNotchCard
                  notch={{
                    width: { base: -20, sm: -20, md: 50, lg: 50 },
                    depth: { base: 0, sm: 0, md: 50, lg: 50 },
                    topLeft: 30,
                    topRight: 0,
                    bottomLeft: 20,
                    bottomRight: 20,
                  }}
                  widthClass="w-[290px] lg:w-[300px]"
                  heightClass="h-[280px]"
                  borderColor="bg-blue-200"
                  shadowColor="#6a98ff"
                  borderWidth={2}
                  className={`absolute ${
                    index === 0
                      ? "top-[70px] md:top-[7px]"
                      : index === 1
                      ? "top-[436px] md:top-[296px] transform scale-x-[-1]"
                      : index === 2
                      ? "top-[800px] md:top-[596px]"
                      : "top-[1169px] md:top-[906px] transform scale-x-[-1]"
                  } ${
                    step.alignment === "right"
                      ? "left-1/2 -translate-x-1/2 md:left-[calc(50%+83px)] md:-translate-x-0"
                      : "left-1/2 -translate-x-1/2 md:left-auto md:right-[calc(50%+83px)] md:-translate-x-0"
                  } border-0 shadow-none bg-transparent`}
                >
                  <CardContent
                    className={`relative flex flex-col gap-3 ${
                      (index === 1 || index === 3) && "scale-x-[-1]"
                    }`}
                  >
                    <div
                      className={`h-auto flex ${
                        step.alignment === "right"
                          ? "justify-center ml-0 mt-3 md:ml-12"
                          : "justify-center md:justify-start mt-3"
                      } font-helvetica font-normal text-[#212833] text-[18px] lg:text-[22px] tracking-[0] leading-[23px] lg:whitespace-pre-wrap`}
                    >
                      {step.title}
                    </div>

                    {/* List */}
                    <ul className="mt-[16px] flex flex-col gap-3">
                      {step.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center gap-2.5"
                        >
                          <img
                            className="flex-shrink-0 w-6 h-6"
                            alt="Check"
                            src="/Incorporate/frame.svg"
                          />
                          <span className="font-helvetica font-normal text-[#212833e6] text-sm tracking-[0] leading-[18.5px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </SideNotchCard>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-[81px]">
          <Button className="group inline-flex items-center justify-center gap-2.5 pl-3 pr-1.5 py-1.5 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] h-auto border-0 hover:opacity-90">
            <span className="font-helvetica font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Incorporate Now
            </span>
            <img
              className="w-[38px] h-[38px] transition-all duration-500 ease-in-out group-hover:-rotate-45"
              alt="Arrow"
              src="/HomePage/arrow.svg"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
