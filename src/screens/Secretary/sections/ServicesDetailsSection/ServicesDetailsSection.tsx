import React from "react";
import { Card, CardContent } from "../../../../SacretaryComponents/ui/card";
import NotchedCard from "../../../../UIComponents/NotchedCard";
import SideNotchCard from "../../../../UIComponents/SIdeNotchCard";

const serviceCards = [
  {
    icon: "/Secretary/valueproposition8.png",
    title: "Annual Compliance Management",
    background: "bg-[url(/Secretary/Subtract.png)]",
    sections: [
      {
        subtitle: "Annual Return (nar1)",
        items: [
          "Preparation And Filing Within 42 Days",
          "Director/shareholder Information\nupdate",
          "Share Capital Confirmation",
          "Digital Submission To Companies\nregistry",
          "Inland Revenue Registration",
        ],
      },
      {
        subtitle: "Business Registration Renewal",
        items: [
          "Annual Certificate Renewal",
          "Timely Payment Processing",
          "Branch Registration Management",
          "Display Certificate Provision",
        ],
      },
    ],
  },
  {
    icon: "/Secretary/valueproposition9.png",
    title: "Corporate Changes & Resolutions",
    background: "bg-[url(/Secretary/Subtract.png)]",
    sections: [
      {
        subtitle: "Director & Officer Changes",
        items: [
          "Appointment Documentation (nd2a)",
          "Resignation Processing (nd2b)",
          "Register Updates",
          "Companies Registry Notification",
        ],
      },
      {
        subtitle: "Shareholder Modifications",
        items: [
          "Share Transfer Documentation",
          "Allotment Processing",
          "Share Certificates Issuance",
          "Stamp Duty Handling",
        ],
      },
      {
        subtitle: "Company Details Updates",
        items: [
          "Name Change Processing",
          "Registered Office Change",
          "Articles Amendment",
          "Business Scope Modifications",
        ],
      },
    ],
  },
  {
    icon: "/Secretary/valueproposition10.png",
    title: "Meeting\nadministration",
    background: "bg-[url(/Secretary/Subtract.png)]",
    sections: [
      {
        subtitle: "Annual Return (nar1)",
        items: [
          "Preparation And Filing Within 42 Days",
          "Director/shareholder Information Update",
          "Share Capital Confirmation",
          "Digital Submission To Companies Registry",
          "Inland Revenue Registration",
        ],
      },
      {
        subtitle: "Business Registration Renewal",
        items: [
          "Annual Certificate Renewal",
          "Timely Payment Processing",
          "Branch Registration Management",
          "Display Certificate Provision",
        ],
      },
    ],
  },
];

const statutoryRecordSections = [
  {
    subtitle: "Mandatory Registers",
    items: [
      "Directors Register",
      "Shareholders Register",
      "Company Secretary Register",
      "Significant Controllers Register",
      "Charges Register",
    ],
  },
  {
    subtitle: "Compliance Filing Management",
    items: [
      "Deadline Monitoring",
      "Late Filing Prevention",
      "Express Filing Service",
      "Confirmation Receipts",
    ],
  },
];

export const ServicesDetailsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full px-1 sm:px-4 max-w-[1276px] mx-auto py-8 mt-0 lg:mt-32">
      <div className="flex flex-col w-full max-w-[952px] mx-auto items-center gap-4">
       <div className="flex flex-col items-start w-full gap-4">
          <p className="w-full text-center font-helvetica font-normal text-[#21283399] text-xl md:text-2xl tracking-[0] leading-7">
            What’s Included
          </p>

          <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            Complete Incorporation Package
          </h2>
        </div>

        <p className="text-center max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[22px] tracking-[-0.64px] leading-relaxed lg:leading-[35px]">
          Everything you need to start operating
        </p>
      </div>

      <div className="flex flex-col items-center w-full gap-4">
        
          <div className="grid w-full grid-cols-1 gap-4 px-1 sm:px-4 sm:gap-8 xl:gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card, cardIndex) => (
              <div className="relative pt-10 w-full lg:w-[320px] xl:w-[400px]" key={cardIndex}>
                <img
                  className="absolute w-[125px] sm:w-[125px] md:w-[125px] xl:w-[132px] h-auto z-20 -left-3 lg:-left-3 top-[28px]"
                  alt={"icon"}
                  src={card.icon}
                />
                <SideNotchCard
                  notch={{
                    width: { base: 73, sm: 73, md: 73, lg: 73 },
                    depth: { base: 73, sm: 73, md: 73, lg: 73 },
                    topLeft: 30,
                    topRight: 0,
                    bottomLeft: 20,
                    bottomRight: 20,
                  }}
                  widthClass="w-full lg:w-[320px] xl:w-[400px]"
                  heightClass="h-[850px]"
                  borderColor="bg-blue-200"
                  shadowColor="#6a98ff"
                  borderWidth={2}
                  className={``}
                >
                  <CardContent className="relative flex flex-col items-center h-full p-0">
                    <div className="flex gap-[5.57px] flex-col items-center justify-center ml-20 md:ml-24 xl:ml-4 pt-5">
                      <h3 className="whitespace-pre-line font-helvetica w-full sm:w-[250px] font-medium text-[#212833] text-2xl tracking-[0] leading-9 ">
                        {card.title}
                      </h3>
                    </div>

                    <div className="flex flex-col items-start justify-center gap-8 mt-10">
                      {card.sections.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="flex flex-col items-start gap-[13.86px] w-[280px]"
                        >
                          <div className="flex items-center justify-center gap-[11.55px]">
                            <h4 className="font-helvetica font-medium text-xl leading-[21.3px] whitespace-nowrap text-[#212833e6] tracking-[0]">
                              {section.subtitle}
                            </h4>
                          </div>

                          {section.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-start gap-2 text-wrap sm:gap-3"
                            >
                              <img
                                className="relative flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7"
                                alt="Frame"
                                src="/Secretary/frame-2.svg"
                              />

                              <p className="font-helvetica font-normal text-[#212833e6] text-wrap text-base sm:text-[16.2px] tracking-[0] leading-snug sm:leading-[21.3px] whitespace-pre-line">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </SideNotchCard>
              </div>
            ))}
          </div>
       

       <Card className="w-full max-w-[1226px] mx-auto rounded-[20px] overflow-hidden border-0 bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] px-5 py-6 sm:px-8 md:px-10 lg:px-[50px] md:py-[30px]">
  <CardContent className="relative h-full p-0 overflow-hidden">
    {/* Background blur orbs */}
    <div className="absolute top-[10%] right-0 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[45%] h-[600px] md:h-[800px] lg:h-[1000px] overflow-hidden pointer-events-none">
      <div className="absolute top-[50px] left-[50px] blur-[25px] bg-[linear-gradient(226deg,rgba(0,78,255,0.9)_0%,rgba(222,232,255,0.18)_100%)] w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] md:w-[850px] md:h-[850px] rounded-full rotate-[12deg]" />
      <div className="absolute top-[120px] left-[80px] blur-[25px] bg-[linear-gradient(226deg,rgba(0,78,255,0.9)_0%,rgba(222,232,255,0.18)_100%)] w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] md:w-[850px] md:h-[850px] rounded-full rotate-[12deg]" />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-start gap-6 mt-5">
      <h3 className="font-medium text-white text-2xl sm:text-3xl md:text-[32px] leading-tight">
        Statutory Record Maintenance
      </h3>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {statutoryRecordSections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="relative flex flex-col items-start gap-3"
          >
            <div className="flex items-center justify-start gap-2">
              <h4 className="text-lg font-medium text-white/90 sm:text-xl">
                {section.subtitle}
              </h4>
            </div>

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
                <p className="font-normal text-white/90 text-base sm:text-[16.2px] leading-[21.3px] break-words">
                  {item}
                </p>
              </div>
            ))}
          </div>
        ))}

        {/* Decorative Image */}
        <img
          src="/Secretary/freee.png"
          alt="Decoration"
          className="z-10 object-contain w-full mt-5 sm:mt-0"
        />
      </div>
    </div>
  </CardContent>
</Card>

      </div>
    </section>
  );
};
