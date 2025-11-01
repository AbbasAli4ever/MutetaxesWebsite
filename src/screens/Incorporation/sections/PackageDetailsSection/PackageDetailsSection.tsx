import React from "react";
import { Card, CardContent } from "../../../../IncorporateComponents/ui/card";

const packageCards = [
  {
    icon: "/Incorporate/valuepropositionsection.svg",
    title: "Government Registrations",
    bgClass: "bg-[url(/Incorporate/subtract-4.svg)] bg-contain bg-no-repeat bg-bottom",
    items: [
      "Company Name Search And Reservation",
      "Certificate Of Incorporation",
      "Business Registration Certificate (1 Year)",
      "Articles Of Association Filing",
      "Government Fee Payment",
    ],
  },
  {
    icon: "/Incorporate/valuepropositionsection-1.svg",
    title: "Company Kit",
    bgClass: "bg-[url(/Incorporate/subtract-4.svg)] bg-contain bg-no-repeat bg-bottom",
    hasGradient: true,
    items: [
      "Common Seal (steel)",
      "Company Chop (round)",
      "Signature Chop",
      "Share Certificates",
      "Statutory Registers",
      "Company Folder",
    ],
  },
  {
    icon: "/Incorporate/valuepropositionsection-2.svg",
    title: "First Year Services",
    bgClass: "bg-[url(/Incorporate/subtract-4.svg)] bg-contain bg-no-repeat bg-bottom",
    items: [
      "Registered Office Address\n(central Location)",
      "Mail Handling And Forwarding",
      "Government Correspondence",
      "Compliance Calendar",
      "Digital Dashboard Access",
      "Basic Company Secretary Duties",
    ],
  },
];

export const PackageDetailsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-10 px-4 md:px-[120px] py-8">
      <div className="flex flex-col w-full max-w-[952px] items-center gap-4">
        <div className="flex flex-col items-start w-full gap-4">
          <h3 className="w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            What&apos;s Included
          </h3>

          <h2 className="w-full [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-4xl md:text-[64px] text-center tracking-[0] leading-tight md:leading-[72px]">
            Complete Incorporation Package
          </h2>

          <p className="w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-2xl text-center tracking-[0] leading-7">
            Everything You Need To Start Operating
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-[20.1px] w-full max-w-[1200px]">
        {packageCards.map((card, index) => (
          <div
            key={index}
            className={`relative w-full lg:w-[394.93px] h-auto lg:h-[361.77px] rounded-[17.08px] overflow-hidden ${card.bgClass}`}
          >
            <CardContent className="relative h-full p-0">
              {card.hasGradient && (
                <>
                  <div className="absolute top-[344px] left-[-377px] w-[949px] h-[949px] rounded-[474.32px] rotate-[12.34deg] blur-[77.38px] bg-[linear-gradient(226deg,rgba(0,78,255,1)_0%,rgba(222,232,255,0)_100%)]" />
                  <div className="absolute top-[344px] left-[-377px] w-[949px] h-[949px] rounded-[474.32px] rotate-[12.34deg] blur-[77.38px] bg-[linear-gradient(226deg,rgba(0,78,255,1)_0%,rgba(222,232,255,0)_100%)]" />
                </>
              )}

              <img
                className="absolute -top-1 left-[-11px] w-[123px] h-[123px]"
                alt={card.title}
                src={card.icon}
              />

              <div className="flex flex-col w-[289px] items-start gap-[5.57px] absolute top-[26px] left-[90px]">
                <h3 className="w-full [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[22px] leading-[26.0px] text-center tracking-[0]">
                  {card.title}
                </h3>
              </div>

              <div className="flex flex-col items-start gap-[13.86px] absolute top-[95px] left-8">
                {card.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start gap-[11.55px] w-full"
                  >
                    <img
                      className="relative w-[27.71px] h-[27.71px] flex-shrink-0"
                      alt="Check"
                      src="/Incorporate/frame-33.svg"
                    />
                    <p className="flex items-center justify-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-[16.2px] tracking-[0] leading-[21.3px] whitespace-pre-line">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </div>
        ))}
      </div>
    </section>
  );
};
