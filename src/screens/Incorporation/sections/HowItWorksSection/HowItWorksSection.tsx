import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const steps = [
  {
    number: "Day 1",
    title: "Initial Consultation",
    icon: "/HomePage/frame-1171278983.svg",
    items: ["Kyc Documents Collection", "Incorporation Forms Drafting", " articles Of Association", "Director/shareholder Details",],
    background: "/Incorporate/subtract-7.svg",
    alignment: "right",
  },
  {
    number: "Days 2-3",
    title: "Document\npreparation",
    items: ["Kyc Documents Collection", "Incorporation Forms Drafting", " articles Of Association", "Director/shareholder Details",],
    icon: "/HomePage/icon.svg",
    background: "/Incorporate/subtract-2.svg",
    alignment: "left",
  },
  {
    number: "Days 4-5",
    title: "Government submission",
    items: ["Companies Registry Filing", "Business Registration Application", "Name Reservation", "Fee Payment", "Status Tracking",],
    icon: "/HomePage/frame-1171278983.svg",
    background: "/Incorporate/subtract-7.svg",
    alignment: "right",
  },
  {
    number: "Days 6-7",
    title: "Ongoing Support",
    items: ["Certificate Issuance", "Company Kit Preparation", "Chops And Seals Creation", "Digital Platform Setup", "Handover And Training",],
    icon: "/HomePage/icon.svg",
    background: "/Incorporate/subtract-2.svg",
    alignment: "left",
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-8">
      <div className="flex flex-col w-full max-w-[952px] mx-auto items-center gap-4 px-4">
        <div className="flex flex-col items-start w-full gap-4 lg:mt-[100px]">
          <h3 className="w-full text-center font-helvetica font-normal text-[#21283399] text-2xl tracking-[0] leading-7">
            {" "}
            Timeline{" "}
          </h3>{" "}
          <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-[40px] lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            {" "}
            Your Incorporation Timeline{" "}
          </h2>{" "}
          <p className="w-full text-center font-helvetica font-normal text-[#212833] text-2xl tracking-[0] leading-7">
            {" "}
            A Transparent, Step-by-step Process From Start To Finish{" "}
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto mt-[50px] lg:mt-[120px] px-16 lg:px-0">
        <div className="relative min-h-[1150px]">
          <div className="absolute left-1/2 top-0 w-1 h-[1268px] bg-[linear-gradient(180deg,rgba(58,118,255,1)_38%,rgba(239,239,239,1)_94%)] -translate-x-1/2" />

         {steps.map((step, index) => (
  <div key={index} className="relative ">
    {/* --- Step Number Bubble --- */}
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

    {/* --- Card --- */}
    <Card
      className={`absolute ${
        index === 0
          ? "top-8 md:-top-3"
          : index === 1
          ? "top-[396px] md:top-[286px]"
          : index === 2
          ? "top-[754px] md:top-[586px]"
          : "top-[1119px] md:top-[896px]"
      } ${
        step.alignment === "right"
          ? "md:left-[calc(50%+73px)]"
          : "md:right-[calc(50%+82px)]"
      } w-[292px] border-0 shadow-none bg-transparent`}
    >
      <CardContent className="relative w-[300px] h-[300px] flex flex-col pt-8 lg:pt-0">
        {/* Background */}
        <img
          src={step.background}
          alt=""
          className="absolute inset-0 w-full h-full hidden sm:hidden md:block"
        />

        {/* White Square for Small Only */}
        <div className="absolute inset-0 bg-[#FFFFFF] border border-[#004eff33] rounded-[20px] block sm:block md:hidden" />

        {/* Icon (Visible on md & lg) */}
        <img
          className={`absolute top-[0px] ${
            step.alignment === "right" ? "left-[-45px]" : "left-[238px]"
          } w-[108px] h-[87px] hidden sm:hidden md:block`}
          alt=""
          src={step.icon}
        />

        {/* Card Content */}
        <div className="relative z-10 flex flex-col py-5 pl-0">
          {/* Title */}
          <div
            className={`h-auto flex ${
              step.alignment === "right"
                ? "justify-center ml-0 md:ml-12 md:mt-2"
                : "justify-start mt-2"
            } font-helvetica font-normal text-[#212833] text-[22px] tracking-[0] leading-[23px] lg:whitespace-pre-wrap`}
          >
            {step.title}
          </div>

          {/* List */}
          <ul className="mt-[23px] flex flex-col gap-3">
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
        </div>
      </CardContent>
    </Card>
  </div>
))}

        </div>

        <div className="flex justify-center mt-[350px] lg:mt-[121px]">
          <Button className="inline-flex items-center justify-center gap-2.5 pl-3 pr-1.5 py-1.5 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] h-auto border-0 hover:opacity-90">
            <span className="font-helvetica font-normal text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Incorporate Now
            </span>
            <img
              className="w-[38px] h-[38px]"
              alt="Arrow"
              src="/HomePage/arrow.svg"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
