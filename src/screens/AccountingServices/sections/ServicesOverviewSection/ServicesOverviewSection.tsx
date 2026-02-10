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
        text: "50% Less Than In-House Staff",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "No Recruitment Costs",
      },
      {
        icon: "/HomePage/frame.svg",
       text: (
      <>
        <span className="font-medium">No Training Expenses</span> 
       
       
      </>
    ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: "No Software Licenses",
      },
      {
        icon: "/HomePage/frame.svg",
        text: "Predictable Monthly Fees",
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
        text: (
      <>
        <span className="font-medium">HKICPA Qualified </span> 
       
      <span className="font-normal">Accountants</span>
      </>
    ),
      },
      {
        icon: "/HomePage/frame.svg",
       text: (
      <>
        <span className="font-normal">Latest Compliance </span> 
       
      <span className="font-medium">Knowledge</span>
      </>
    ),
      },
      {
        icon: "/HomePage/frame.svg",
         text: (
      <>
        <span className="font-medium">Industry </span> 
       
      <span className="font-normal">Best Practice</span>
      </>
    ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
      <>
        <span className="font-normal">Continous </span> 
       
      <span className="font-medium">Tranning</span>
      </>
    ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
      <>
        <span className="font-medium">Technical  </span> 
       
      <span className="font-normal">Support</span>
      </>
    ),
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
        text: (
      <>
        <span className="font-medium">Latest Cloud  </span> 
       
      <span className="font-normal">Software</span>
      </>
    ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
      <>
        <span className="font-normal">Automated  </span> 
       
      <span className="font-medium">Processes</span>
      </>
    ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
      <>
        <span className="font-medium">Real-Time  </span> 
       
      <span className="font-normal">Reporting</span>
      </>
    ),
      },
      {
        icon: "/HomePage/frame.svg",
         text: (
      <>
        <span className="font-medium">Mobile  </span> 
       
      <span className="font-normal">Access</span>
      </>
    ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
      <>
        <span className="font-normal">System  </span> 
       
      <span className="font-medium">Integration</span>
      </>
    ),
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
         text: (
      <>
        <span className="font-medium">Accurate  </span> 
       
      <span className="font-normal">Records</span>
      </>
    ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
      <>
        <span className="font-normal">Timely  </span> 
       
      <span className="font-medium">Reporting</span>
      </>
    ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
      <>
        <span className="font-medium">Regulatory  </span> 
       
      <span className="font-normal">Compliance</span>
      </>
    ),
      },
      {
        icon: "/HomePage/frame.svg",
        text: (
      <>
        <span className="font-normal">Data  </span> 
       
      <span className="font-medium">Security</span>
      </>
    ),
      },
      {
        icon: "/HomePage/frame.svg",
         text: (
      <>
        <span className="font-medium">Buisness  </span> 
       
      <span className="font-normal">Continuity</span>
      </>
    ),
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
                          <span className={"font-helvetica font-normal"}>
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
