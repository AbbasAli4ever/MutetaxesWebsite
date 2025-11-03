import React from "react";
import { Card, CardContent } from "../../../../SacretaryComponents/ui/card";

const serviceCards = [
  {
    icon: "/Secretary/valuepropositionsection-2.svg",
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
    icon: "/Secretary/valuepropositionsection-3.svg",
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
    icon: "/Secretary/valuepropositionsection-4.svg",
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
    <section className="flex flex-col w-full gap-10 px-[120px] py-8">
      <div className="flex flex-col w-full max-w-[952px] mx-auto items-center gap-4">
        <div className="flex flex-col items-start w-full gap-4">
          <p className="w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            What&apos;s Included
          </p>

          <h2 className="w-full [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
            Complete Incorporation Package
          </h2>

          <p className="w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-2xl text-center tracking-[0] leading-7">
            Everything You Need To Start Operating
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center w-full gap-4">
        <div className="flex flex-col items-start w-full gap-4">
          <div className="flex items-start gap-[20.1px] w-full justify-center">
            {serviceCards.map((card, cardIndex) => (
              <Card
                key={cardIndex}
             
                className={`relative shadow-none w-[395px] bg-contain bg-no-repeat bg-center h-[826px] ${card.background} border-0 overflow-visible`}
              >
                <CardContent className="relative h-full p-0">
                  <img
                    className="absolute -top-2.5 left-[-7px] w-[123px] h-[123px]"
                    alt="Value proposition"
                    src={card.icon}
                  />

                  <div className="flex gap-[5.57px] absolute top-[26px] left-[137px] flex-col items-start w-[289px]">
                    <h3 className="whitespace-pre-line [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-2xl tracking-[0] leading-9 ">
                      {card.title}
                    </h3>
                  </div>

                  <div className="flex flex-col items-start gap-8 absolute top-[135px] left-12 w-[312px]">
                    {card.sections.map((section, sectionIndex) => (
                      <div
                        key={sectionIndex}
                        className="flex flex-col items-start gap-[13.86px] w-full"
                      >
                        <div className="flex items-center justify-center gap-[11.55px]">
                          <h4 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-xl leading-[21.3px] whitespace-nowrap text-[#212833e6] tracking-[0]">
                            {section.subtitle}
                          </h4>
                        </div>

                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start gap-[11.55px] w-full"
                          >
                            <img
                              className="relative w-[27.71px] h-[27.71px] flex-shrink-0"
                              alt="Frame"
                              src="/Secretary/frame-2.svg"
                            />

                            <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-[16.2px] tracking-[0] leading-[21.3px] whitespace-pre-line">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="w-full max-w-[1226px] h-[371px] rounded-[20px] overflow-hidden bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] border-0">
          <CardContent className="relative h-full p-0">
            <div className="absolute top-[23px] left-[583px] h-[1180px] w-[1130px]">
              <div className="absolute top-[90px] left-[90px] blur-[27.38px] bg-[linear-gradient(226deg,rgba(0,78,255,0.9)_0%,rgba(222,232,255,0.18)_100%)] w-[949px] h-[949px] rounded-[474.32px] rotate-[12.34deg]" />

              <div className="absolute top-[140px] left-[90px] blur-[27.38px] bg-[linear-gradient(226deg,rgba(0,78,255,0.9)_0%,rgba(222,232,255,0.18)_100%)] w-[949px] h-[949px] rounded-[474.32px] rotate-[12.34deg]" />
            </div>

            <div className="flex flex-col items-start gap-[5.57px] absolute top-[43px] left-[43px]">
              <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-[26.0px] whitespace-nowrap">
                Statutory Record Maintenance
              </h3>
            </div>

            {/* <div className="flex items-start gap-[309px] absolute top-[113px] left-[43px]">
              {statutoryRecordSections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="flex flex-col items-start gap-[13.86px]"
                >
                  <div className="flex items-center justify-center gap-[11.55px]">
                    <h4 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#ffffffe6] text-xl tracking-[0] leading-[21.3px] whitespace-nowrap">
                      {section.subtitle}
                    </h4>
                  </div>

                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-[11.55px] w-full"
                    >
                      <img
                        className="relative w-[27.71px] h-[27.71px]"
                        alt="Frame"
                        src="/Secretary/frame-2.svg"
                      />

                      <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#ffffffe6] text-[16.2px] tracking-[0] leading-[21.3px] whitespace-nowrap">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div> */}
 <div className="absolute top-[113px] left-[43px] grid grid-cols-3  items-start w-full max-w-[1200px]">
  {statutoryRecordSections.map((section, sectionIndex) => (
    <div
      key={sectionIndex}
      className="flex flex-col items-start gap-[13.86px] relative"
    >
      <div className="flex items-center justify-center gap-[11.55px]">
        <h4 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#ffffffe6] text-xl tracking-[0] leading-[21.3px] whitespace-nowrap">
          {section.subtitle}
        </h4>
      </div>

      {section.items.map((item, itemIndex) => (
        <div
          key={itemIndex}
          className="flex items-center gap-[11.55px] w-full"
        >
          <img
            className="relative w-[27.71px] h-[27.71px]"
            alt="Frame"
            src="/Secretary/greyticke.png"
          />

          <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#ffffffe6] text-[16.2px] tracking-[0] leading-[21.3px] whitespace-nowrap">
            {item}
          </p>
        </div>
      ))}

      {/* ✅ Show image on the right side only for the last column */}
      {sectionIndex === statutoryRecordSections.length - 1 && (
        <img
          src="/Secretary/freee.png"
          alt="Decoration"
          className="absolute right-[-380px]  top-0 w-[659vw] h-auto object-contain"
        />
      )}
    </div>
  ))}
</div>



          </CardContent>
        </Card>
      </div>
    </section>
  );
};
