import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import SideNotchCard from "../../../../UIComponents/SIdeNotchCard";

const steps = [
  {
    number: "1",
    title: "Consultation",
    description:
      "Free 30-minute Consultation to Understand Your Needs and Recommend The Right structure And Services.",
    icon: "/HomePage/message-icon.png",
    background: "/HomePage/subtract.svg",
    alignment: "right",
  },
  {
    number: "2",
    title: "Setup & registration",
    description:
      "We Handle All Documentation, Government Submissions, And Registrations While You Focus On Your Business.",
    icon: "/HomePage/icon.svg",
    background: "/HomePage/subtract-5.svg",
    alignment: "left",
  },
  {
    number: "3",
    title: "Ongoing Support",
    description:
      "Access Your Digital Dashboard, Receive Your Company Kit, And Enjoy Continuous Compliance Support.",
    icon: "/HomePage/headphone.png",
    background: "/HomePage/subtract.svg",
    alignment: "right",
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-8 mt-32">
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
        <div className="relative min-h-[900px] md:min-h-[708px]">
          <div className="absolute left-1/2 top-0 w-1 h-[768px] bg-[linear-gradient(180deg,rgba(58,118,255,1)_38%,rgba(239,239,239,1)_94%)] -translate-x-1/2" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className={`absolute ${
                  index === 0
                    ? "top-0"
                    : index === 1
                    ? "top-[279px] md:top-[252px]"
                    : "top-[563px] md:top-[500px]"
                } left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-[91.43px] overflow-hidden shadow-[0px_4px_4px_#004eff26] z-10`}
              >
                <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-16 h-16 bg-[#004eff] rounded-[32px] blur-[17px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[26px] flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004eff] text-[36.6px] text-center tracking-[0] leading-[37px] whitespace-nowrap">
                  {step.number}
                </div>
              </div>
              <div className="relative">
                <img
                  className={`absolute w-[108px] h-[87px] z-20 ${
                  index === 0
                    ? "-top-2"
                    : index === 1
                    ? "top-[272px] md:top-[242px]"
                    : "top-[560px] md:top-[490px]"
                } ${
                    step.alignment === "right" ? "left-[calc(50%+20px)]" : "right-[calc(50%+20px)]"
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
                widthClass="w-[300px]"
                heightClass="h-[200px]"
                borderColor="bg-blue-200"
                shadowColor="#6a98ff"
                borderWidth={2}
                className={`absolute ${
                  index === 0
                    ? "top-[70px] md:top-[7px]"
                    : index === 1
                    ? "top-[356px] md:top-[256px] transform scale-x-[-1]"
                    : "top-[640px] md:top-[506px]"
                } ${
                  step.alignment === "right"
                    ? "left-1/2 -translate-x-1/2 md:left-[calc(50%+63px)] md:-translate-x-0"
                    : "left-1/2 -translate-x-1/2 md:left-auto md:right-[calc(50%+63px)] md:-translate-x-0"
                } border-0 shadow-none bg-transparent`}
              > 
                <CardContent className={`relative flex flex-col gap-3 ${index===1 && "scale-x-[-1]"}`}>
                  <div
                    className={`h-auto flex ${
                      step.alignment === "right"
                        ? "justify-center ml-4"
                        : "justify-start"
                    } font-helvetica font-medium text-[#212833] text-[22px] tracking-[0] leading-[48px] whitespace-pre-wrap`}
                  >
                    {step.title}
                  </div>

                  <div className={`flex w-56 items-center gap-2.5 text-start`}>
                    <div className="relative flex items-center justify-center w-fit font-helvetica font-normal text-[#212833e6] text-base tracking-[0] leading-6">
                      {step.description}
                    </div>
                  </div>
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
