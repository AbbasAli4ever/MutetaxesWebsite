import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const steps = [
  {
    number: "1",
    title: "Consultation",
    description:
      "Free 30-minute Consultation to Understand Your Needs and Recommend The Right structure And Services.",
    icon: "/HomePage/frame-1171278983-1.svg",
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
    icon: "/HomePage/frame-1171278983.svg",
    background: "/HomePage/subtract.svg",
    alignment: "right",
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-8">
      <div className="flex flex-col w-full max-w-[952px] mx-auto items-center gap-4 px-4">
        <div className="flex flex-col items-start w-full gap-4">
          <div className="w-full flex items-center justify-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            How It&apos;s Work
          </div>

          <div className="w-full flex items-center justify-center [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
            Start Your Hong Kong
            <br />
            Journey in 3 Simple Steps
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto mt-[120px] px-4">
        <div className="relative min-h-[768px]">
          <div className="absolute left-1/2 top-0 w-1 h-[768px] bg-[linear-gradient(180deg,rgba(58,118,255,1)_38%,rgba(239,239,239,1)_94%)] -translate-x-1/2" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className={`absolute ${index === 0 ? "top-0" : index === 1 ? "top-[252px]" : "top-[500px]"} left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-[91.43px] overflow-hidden shadow-[0px_4px_4px_#004eff26] z-10`}
              >
                <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-16 h-16 bg-[#004eff] rounded-[32px] blur-[17px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[26px] flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004eff] text-[36.6px] text-center tracking-[0] leading-[37px] whitespace-nowrap">
                  {step.number}
                </div>
              </div>

              <Card
  className={`
    absolute
    ${index === 0 ? "top-[7px] " : index === 1 ? "top-[256px] " : "top-[506px]"}
    ${step.alignment === "right"
      ? "left-[calc(50%+63px)]"
      : "right-[calc(50%+63px)]"}
    border-0 shadow-none bg-transparent

    /* :iphone: Responsive */
  static mx-auto w-[90%] max-w-[320px] flex justify-center items-center 

  md:absolute md:mx-auto md:w-[90%] md:max-w-[320px] md:flex md:justify-center md:items-center
  `}
>
                <CardContent
                  className={`relative py-3 pl-7 p h-[194px] bg-contain bg-center bg-no-repeat flex flex-col`}
                  style={{ backgroundImage: `url(${step.background})` }}
                >
                  <div
                    className={`h-auto flex ${step.alignment === "right" ? "justify-center ml-4" : "justify-start"} [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[22px] tracking-[0] leading-[48px] whitespace-pre-wrap`}
                  >
                    {step.title}
                  </div>

                  <img
                    className={`absolute top-[-17px] ${step.alignment === "right" ? "left-[-35px]" : "left-[218px]"} w-[108px] h-[87px]`}
                    alt="Icon"
                    src={step.icon}
                  />

                  <div
                    className={`flex w-56 items-center gap-2.5 text-start`}
                  >
                    <div className="relative flex items-center justify-center w-fit [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-6">
                      {step.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-[81px]">
          <Button className="inline-flex items-center justify-center gap-2.5 pl-3 pr-1.5 py-1.5 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] h-auto border-0 hover:opacity-90">
            <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Incorporate Now
            </span>
            <img className="w-[38px] h-[38px]" alt="Arrow" src="/HomePage/arrow.svg" />
          </Button>
        </div>
      </div>
    </section>
  );
};
