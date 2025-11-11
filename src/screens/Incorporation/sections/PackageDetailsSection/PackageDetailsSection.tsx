import React from "react";
import { CardContent } from "../../../../IncorporateComponents/ui/card";
import SideNotchCard from "../../../../components/ui/SideNotchCard";

const packageCards = [
  {
    icon: "/Incorporate/valuepropositionsection.svg",
    title: "Government Registrations",
    bgClass:
      "bg-[url(/Incorporate/subtract-4.svg)] bg-contain bg-no-repeat bg-bottom",
    items: [
      "Company Name Search And Reservation",
      "Certificate Of Incorporation",
      "Business Registration Certificate (1 Year)",
      "Articles Of Association Filing",
      "Government Fee Payment",
    ],
    hasgradient: false,
  },
  {
    icon: "/Incorporate/valuepropositionsection-1.svg",
    title: "Company Kit",
    bgClass:
      "bg-[url(/Incorporate/subtract-4.svg)] bg-contain bg-no-repeat bg-bottom",
    hasGradient: true,
    items: [
      "Common Seal (steel)",
      "Company Chop (round)",
      "Signature Chop",
      "Share Certificates",
      "Statutory Registers",
      "Company Folder",
    ],
    hasgradient: true,
  },
  {
    icon: "/Incorporate/valuepropositionsection-2.svg",
    title: "First Year Services",
    bgClass:
      "bg-[url(/Incorporate/subtract-4.svg)] bg-contain bg-no-repeat bg-bottom",
    items: [
      "Registered Office Address\n(central Location)",
      "Mail Handling And Forwarding",
      "Government Correspondence",
      "Compliance Calendar",
      "Digital Dashboard Access",
      "Basic Company Secretary Duties",
    ],
    hasgradient: false,
  },
];

export const PackageDetailsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-10 px-3 sm:px-4 max-w-[1276px] mx-auto py-8">
      {/* Headings */}
      <div className="flex flex-col w-full max-w-[952px] items-center gap-4 lg:mt-[130px]">
        <h3 className="w-full text-center font-normal font-helvetica text-[#21283399] text-2xl leading-7">
          What&apos;s Included
        </h3>
        <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-4xl md:text-[64px] leading-tight md:leading-[72px]">
          Complete Incorporation Package
        </h2>
        <p className="w-full text-center font-normal font-helvetica text-[#212833] text-2xl leading-7">
          Everything You Need To Start Operating
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid w-full grid-cols-1 gap-4 mx-auto sm:gap-8 xl:gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
        {packageCards.map((card, cardIndex) => (
          <div
            className="relative pt-20 w-full lg:w-[320px] xl:w-[400px]"
            key={cardIndex}
          >
            <img
              className="absolute w-[125px] sm:w-[125px] md:w-[125px] xl:w-[132px] h-auto z-20 -left-3 lg:-left-3 top-[68px]"
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
              heightClass="h-auto md:h-[390px]"
              borderColor="bg-blue-200"
              shadowColor="#6a98ff"
              borderWidth={2}
              className={`z-10`}
            >
              <div className="absolute w-full h-full overflow-hidden">
                {card.hasGradient && (
                  <>
                    {/* Mobile + Tablet version (smaller and subtler) */}
                    <div className="absolute block z-0 bottom-[-300px] left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] xl:w-[200px] h-[400px] rounded-full blur-[60px] opacity-100 bg-[#467eff] pointer-events-none" />

                    {/* Large screen version */}
                  </>
                )}
              </div>
              <CardContent className="relative flex flex-col items-start h-full px-0">
                <div className="flex gap-[5.57px] flex-col items-center justify-center ml-24 md:ml-24 xl:ml-24 pt-5">
                  <h3 className="whitespace-pre-line [font-family:'Helvetica_Neue-Medium',Helvetica] w-full font-medium text-[#212833] text-2xl tracking-[0] leading-9 ">
                    {card.title}
                  </h3>
                </div>

                <div className="flex flex-col items-start justify-center gap-4 mt-10">
                  {card.items.map(
                    (
                      item:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined,
                      itemIndex: React.Key | null | undefined
                    ) => (
                      <div
                        key={itemIndex}
                        className="flex items-start gap-2 ml-5 text-wrap sm:gap-3"
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
                    )
                  )}
                </div>
              </CardContent>
            </SideNotchCard>
          </div>
        ))}
      </div>
    </section>
  );
};
