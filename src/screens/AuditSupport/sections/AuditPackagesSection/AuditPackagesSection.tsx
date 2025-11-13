import React from "react";
import { Card, CardContent } from "../../../../SacretaryComponents/ui/card";
import SideNotchCard from "../../../../UIComponents/SIdeNotchCard";

const advantageCards = [
  {
    title: "Pre-Audit Preparation",
    backgroundSrc: "/Secretary/subtract-3.svg",
    iconSrc: "/Audit/box.png",
    sideImgSrc: "/Secretary/b1.png",
    items: [
      "Trial balance preparation",
      "Account reconciliations",
      "Working papers compilation",
      "Supporting documentation",
      "Variance analysis",
      "Internal review",
    ],
  },
  {
    title: "During Audit Support",
    backgroundSrc: "/Secretary/subtract-4.svg",
    iconSrc: "/Audit/handfre.png",
    sideImgSrc: "/Secretary/b2.png",
    items: [
      "Auditor liaison",
      "Query management",
      "Document provision",
      "Sample coordination",
      "Confirmation handling",
      "Issue resolution",
    ],
  },
];

const statutoryRecordSections = [
  {
    subtitle: "Mandatory Registers",
    items: [
      "Adjustment posting",
      "Report review",
      "Filing assistance",
      "Management letter review",
      "Implementation support",
      "Process improvements",
    ],
  },
  
];

export const AuditPackagesSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 mt-0 lg:mt-[130px]">
      <div className="flex flex-col max-w-[1260px] mx-auto items-center gap-6 px-4">
        <header className="flex flex-col max-w-[782px] items-center gap-4">
          <p className="w-full text-center font-helvetica font-normal text-[#21283399] text-xl md:text-2xl tracking-[0] leading-7">
            Solutions
          </p>

          <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            Comprehensive Audit Support Solutions
          </h2>

           <p className="text-center max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[22px] tracking-[-0.64px] leading-relaxed lg:leading-[35px]">
          End-to-end support for a seamless audit experience
        </p>
        </header>

        <div className="flex flex-col items-start justify-center w-full lg:flex-row">
          {advantageCards.map((card, index) => (
           <div className="relative pt-20 w-full md:w-[520px] lg:w-[470px] xl:w-[580px] mx-auto" key={index}>
                <img
                  className="absolute w-[141px] sm:w-[175px] md:w-[175px] xl:w-[182px] h-auto z-20  md:-left-10 lg:-left-3 top-[46px] left-[0.25rem] lg:top-[18px]"
                  alt={"icon"}
                  src={card.iconSrc}
                />
                <SideNotchCard
                  notch={{
                    width: { base: 53, sm: 53, md: 80, lg: 53 },
                    depth: { base: 103, sm: 103, md: 103, lg: 103 },
                    topLeft: 30,
                    topRight: 0,
                    bottomLeft: 20,
                    bottomRight: 20,
                  }}
                  widthClass="w-full md:w-[580px] lg:w-[470px] xl:w-[580px]"
                  heightClass="h-[420px] md:h-[400px]"
                  borderColor="bg-blue-200"
                  shadowColor="#6a98ff"
                  borderWidth={2}
                  className={``}
                >
                  <CardContent className="relative w-full h-full p-0">
{/* <img
                    src={card.sideImgSrc}
                    alt="Right side background"
                    className="absolute right-0 -bottom-24 xl:-bottom-20 w-[280px] xl:w-[320px] h-[380px] object-contain"
                  /> */}
                <div className="absolute top-[90px] left-[28px] sm:left-[33px] flex flex-col gap-4 w-auto h-full">
                  

                  <h3 className="font-helvetica font-medium text-[#212833] text-[32px] tracking-[0] leading-[34.1px]">
                    {card.title}
                  </h3>

                  <ul className="flex flex-col gap-3">
                    {card.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2.5">
                        <img
                          className="flex-shrink-0 w-6 h-6"
                          alt="CheckIcon icon"
                          src="/Secretary/frame.svg"
                        />
                        <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
                </SideNotchCard>
              </div>
          ))}
        </div>

           <Card className="w-full max-w-[1226px] mx-auto rounded-[20px] overflow-hidden border-0 bg-[#2467ff] ">
          <CardContent className="relative p-0 overflow-hidden">
          <div className="absolute -bottom-[500px] -right-[200px] w-[700px] h-[700px] bg-white rounded-full blur-3xl opacity-40" />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-start justify-center gap-6 mt-5">
              
        
              <div className="flex flex-col items-center md:items-start w-full gap-[0px] lg:gap-[300px] justify-between lg:justify-evenly flex- md:flex-row">
                <div className="flex flex-col gap-4 ml-0 md:ml-10 lg:ml-0">
                  <h3 className="font-medium text-white text-2xl mt-5 sm:text-3xl md:text-[32px] leading-tight">
               Post-Audit Services
              </h3>
                {statutoryRecordSections.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className="relative flex flex-col items-start gap-3"
                  >
                
        
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex flex-wrap items-center w-full gap-3"
                      >
                        <img
                          className="w-6 h-6 sm:w-7 sm:h-7"
                          alt="Tick Icon"
                          src="/Secretary/greyticke.png"
                        />
                        <p className="font-normal text-white/90 text-base sm:text-[18.2px] leading-[21.3px] break-words">
                          {item}
                        </p>
                      </div>
                    ))}
                    
                  </div>
                  
                ))}
        </div>
                {/* Decorative Image */}
                <img
                  src="/Audit/auditflow.png"
                  alt="Decoration"
                  className="z-10 object-contain w-[350px] mt-5 sm:mt-0"
                />
              </div>
            </div>
          </CardContent>
        </Card>


      </div>
    </section>
  );
};
