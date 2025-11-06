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
  },
];

export const PackageDetailsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-10 px-4  py-8">
      {/* Headings */}
      <div className="flex flex-col w-full max-w-[952px] items-center gap-4">
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
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-[20px] w-full max-w-[1200px]">
        {packageCards.map((card, index) => (
          <React.Fragment key={index}>
            {/* --- Small & Medium Screens: Notched Card --- */}
            {/* --- Small & Medium Screens: Notched Card --- */}
            <div className="block lg:hidden w-full sm:w-[90%] md:w-[394.93px]   overflow-hidden">
              <SideNotchCard
                className="relative"
                widthClass="w-full "
                heightClass="h-[450px]"
                borderWidth={3}
                borderColor="bg-[#D7E3FF]"
                shadowColor="#D7E3FF"
                notch={{
                  width: { base: 80, sm: 90, md: 100, lg: 110 },
                  depth: { base: 70, sm: 50, md: 0, lg: 45 },
                  topLeft: 30,
                  topRight: 0,
                  bottomLeft: 20,
                  bottomRight: 20,
                }}
              >
                <div className="relative h-full px-8 flex flex-col justify-start">
                  {/* Gradient for center card */}
                  {card.hasGradient && (
                    <>
                      <div className="absolute top-[180px] left-[-150px] w-[500px] h-[500px] rounded-[250px] rotate-[12.34deg] blur-[60px] bg-[linear-gradient(226deg,rgba(0,78,255,0.8)_0%,rgba(222,232,255,0)_100%)] z-0" />
                    </>
                  )}

                  {/* Icon */}
                  <img
                    className="absolute  w-[70px] h-[70px] top-4 left-1 lg:left-4 z-20"
                    alt={card.title}
                    src={card.icon}
                  />

                  {/* Title */}
                  <h3 className="font-helvetica font-medium text-[#212833] text-[20px] leading-[26px] lg:mb-4 p-8 lg:p-0 lg:mt-[100px] text-center lg:text-left   z-20">
                    {card.title}
                  </h3>

                  {/* Items */}
                  <div className="flex flex-col gap-3 z-20">
                    {card.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        {/* Checkbox icon — same as desktop */}
                        <img
                          className="w-[22px] h-[22px] mt-[3px]"
                          alt="Check"
                          src="/Incorporate/frame-33.svg"
                        />
                        <p className="font-helvetica font-normal text-[#212833e6] text-[15px] leading-[21px] whitespace-pre-line">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SideNotchCard>
            </div>


            {/* --- Large Screens: Original Background Card --- */}
            <div className="hidden lg:block relative w-full md:w-[394.93px] h-[361.77px] rounded-[17.08px] overflow-hidden">
              <div className={` absolute inset-0 w-full h-full  ${card.bgClass}`} />
              <CardContent className="relative h-full   lg:pt-12 lg:pl-3 flex flex-col lg:items-start justify-start">
                {card.hasGradient && (
                  <>
                    <div className="absolute top-[344px] left-[-377px] w-[949px] h-[949px] rounded-[474.32px] rotate-[12.34deg] blur-[77.38px] bg-[linear-gradient(226deg,rgba(0,78,255,1)_0%,rgba(222,232,255,0)_100%)]" />
                    <div className="absolute top-[344px] left-[-377px] w-[949px] h-[949px] rounded-[474.32px] rotate-[12.34deg] blur-[77.38px] bg-[linear-gradient(226deg,rgba(0,78,255,1)_0%,rgba(222,232,255,0)_100%)]" />
                  </>
                )}

                <img
                  className="absolute w-[123px] h-[123px] -top-1 left-[-11px]"
                  alt={card.title}
                  src={card.icon}
                />

                <h3 className="font-helvetica font-medium text-[#212833] text-[22px] leading-[26px] mb-4 text-left lg:pl-16">
                  {card.title}
                </h3>

                <div className="flex flex-col gap-[13.86px]">
                  {card.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3 w-full">
                      <img
                        className="w-[27.71px] h-[27.71px]"
                        alt="Check"
                        src="/Incorporate/frame-33.svg"
                      />
                      <p className="font-helvetica font-normal text-[#212833e6] text-[16.2px] leading-[21px] whitespace-pre-line">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
