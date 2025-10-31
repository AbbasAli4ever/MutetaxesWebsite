import React from "react";
import { Button } from "../../../../IncorporateComponents/ui/button";
import { Card, CardContent } from "../../../../IncorporateComponents/ui/card";

const timelineSteps = [
  {
    position: "right",
    title: "Initial Consultation",
    icon: "/Incorporate/frame-1171278983.svg",
    background: "/Incorporate/subtract-7.svg",
    items: [
      "Free Consultation",
      "Business Structure Advice",
      "Name Availability Check",
      "Document Requirements Explained",
      "Service Agreement",
    ],
  },
  {
    position: "left",
    title: "Document\npreparation",
    icon: "/Incorporate/frame-1171278984-1.svg",
    background: "/Incorporate/subtract-2.svg",
    items: [
      "Kyc Documents Collection",
      "Incorporation Forms Drafting",
      " articles Of Association",
      "Director/shareholder Details",
    ],
  },
  {
    position: "right",
    title: "Government\nsubmission",
    icon: "/Incorporate/frame-1171278983-1.svg",
    background: "/Incorporate/subtract.svg",
    items: [
      "Companies Registry Filing",
      "Business Registration Application",
      "Name Reservation",
      "Fee Payment",
      "Status Tracking",
    ],
  },
  {
    position: "left",
    title: "Completion",
    icon: "/Incorporate/frame-1171278984.svg",
    background: "/Incorporate/subtract-1.svg",
    items: [
      "Certificate Issuance",
      "Company Kit Preparation",
      "Chops And Seals Creation",
      "Digital Platform Setup",
      "Handover And Training",
    ],
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full py-8">
      <header className="flex mx-auto w-full max-w-[952px] px-4 flex-col items-center gap-4 mt-8">
        <div className="flex flex-col items-start w-full gap-4">
          <h3 className="w-full text-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl tracking-[0] leading-7">
            Timeline
          </h3>

          <h2 className="w-full text-center [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] tracking-[0] leading-[72px]">
            Your Incorporation Timeline
          </h2>

          <p className="w-full text-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-2xl tracking-[0] leading-7">
            A Transparent, Step-by-step Process From Start To Finish
          </p>
        </div>
      </header>

      <div className="relative mx-auto w-full max-w-[765px] mt-[143px] px-4">
        <div className="absolute left-1/2 top-[23px] w-1 h-[1108px] bg-[linear-gradient(180deg,rgba(58,118,255,1)_49%,rgba(239,239,239,1)_94%)] -translate-x-1/2" />

        <div className="relative grid gap-[85px]">
          {timelineSteps.map((step, index) => (
            <div
              key={index}
              className={`relative ${
                step.position === "right"
                  ? "ml-auto pl-[50px]"
                  : "mr-auto pr-[50px]"
              } w-[calc(50%+164px)]`}
            >
              <Card className="relative w-[328px] border-0 shadow-none bg-transparent">
                <CardContent className="relative p-0">
                  <img
                    className="absolute w-[90.55%] h-[97.06%] top-[2.94%] left-[8.84%]"
                    alt="Background"
                    src={step.background}
                  />

                  <div className="relative px-6 pb-6 pt-7">
                    <h3
                      className={`${
                        step.position === "right" ? "ml-20" : "ml-0"
                      } [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[22px] tracking-[0] leading-7 whitespace-pre-line`}
                    >
                      {step.title}
                    </h3>

                    <ul className="mt-[20px] flex flex-col gap-3">
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
                          <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-sm tracking-[0] leading-[18.5px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <img
                    className={`absolute top-[-9px] ${
                      step.position === "right"
                        ? "left-[-15px]"
                        : "left-[238px]"
                    } w-[108px] h-[87px]`}
                    alt="Step icon"
                    src={step.icon}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button className="h-auto mx-auto mt-[89px] px-3 py-1.5 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:opacity-90">
        <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
          Incorporate Now
        </span>
        <img
          className="w-[38px] h-[38px] ml-2.5"
          alt="Arrow"
          src="/Incorporate/arrow.svg"
        />
      </Button>
    </section>
  );
};
