import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import NotchedCard from "../../../../UIComponents/NotchedCard";
import { Badge } from "../../../../components/ui/badge";

const advantagesData = [
  {
    title: "Setup",
    icon: "/AccountingServices/clock.png",
    badge:"week1",
    background: "/HomePage/subtract-6.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: "Initial consultation",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Information gathering",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "System selection",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Chart of accounts design",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Bank feed connection",
      },
    ],
  },
  {
    title: "Migration",
    icon: "/AccountingServices/spinner.png",
    badge:"week2",
    background: "/HomePage/frame-1171278986.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: "Historical data import",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Opening balances",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Validation & testing",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Training session",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Go-live",
      },
    ],
  },
  {
    title: "Operations",
   icon: "/AccountingServices/true.png",
    badge:"ongoing",
    background: "/HomePage/subtract-8.svg",
    items: [
      {
        icon: "/HomePage/frame.svg",
        text: "Daily transaction processing",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Weekly status updates",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Monthly financial statements",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Quarterly reviews",
      },
      
    ],
  },
  
];

export const IntroductionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full gap-16 py-8 sm:gap-24">
      <header className="flex flex-col items-center gap-4 max-w-[952px] mx-auto px-4">
        <div className="flex flex-col items-start w-full gap-4">
          <p className="w-full text-center font-helvetica font-normal text-[#21283399] text-xl md:text-2xl tracking-[0] leading-7">
            Transition
          </p>

          <h2 className="w-full text-center font-georgia font-medium text-[#212833] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            Seamless Transition in 2 Weeks
          </h2>
        </div>

        <p className="text-center max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[22px] tracking-[-0.64px] leading-relaxed lg:leading-[35px]">
          Quick, Painless Onboarding With Full Support Every Step Of The Way
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
              <CardContent className="relative flex flex-col items-start justify-center pt-16 xl:pt-20">
                {/* Content */}
                <div className="flex flex-col w-full items-start sm:items-start pb-[40px] relative z-10 text-center sm:text-left">
                 <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] mb-2 xl:mb-5">
                      <h3 className="relative flex items-center justify-center w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-2xl tracking-[0] leading-[34.1px] whitespace-nowrap">
                        {advantage.title}
                      </h3>

                      <Badge className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] bg-[#004eff1a] rounded-[20px] hover:bg-[#004eff1a] border-0">
                        <span className="relative w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004eff] text-sm tracking-[0] leading-[17px] whitespace-nowrap">
                          {advantage.badge}
                        </span>
                      </Badge>
                    </div>

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
                          
                            <span
                             
                              className={
                                
                                  "font-helvetica font-medium"
                                  
                              }
                            >
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
