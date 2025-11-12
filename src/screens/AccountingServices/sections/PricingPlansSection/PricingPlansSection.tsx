import React from "react";
import { Card, CardContent } from "../../../../SacretaryComponents/ui/card";
import SideNotchCard from "../../../../UIComponents/SIdeNotchCard";

const advantageCards = [
  {
    title: "QuickBooks Online",
    backgroundSrc: "/Secretary/subtract-3.svg",
    iconSrc: "/AccountingServices/quickbook.png",
    sideImgSrc: "/Secretary/b1.png",
    items: [
      "650+ integrations",
      "Real-time collaboration",
      "Automated bank feeds",
      "Mobile access",
      "Digital Signatures",
      "Custom reporting",
    ],
  },
  {
    title: "Xero",
    backgroundSrc: "/Secretary/subtract-4.svg",
    iconSrc: "/AccountingServices/xero.png",
    sideImgSrc: "/Secretary/b2.png",
    items: [
      "Beautiful interface",
      "Unlimited users",
      "Project tracking",
      "Fixed asset register",
      "Expense claims",
    ],
  },
];

const statutoryRecordSections = [
  {
    subtitle: "Mandatory Registers",
    items: [
      "Directors Register",
      "Multi-currency support",
      "Automated workflows",
      "Real-time reporting",
      "Bank reconciliation",
      "Document storage",
    ],
  },
];

export const PricingPlansSection = (): JSX.Element => {
  return (
    <section className="w-full py-20">
      <div className="flex flex-col max-w-[1260px] mx-auto items-center gap-6 px-4">
        <header className="flex flex-col max-w-[882px] items-center gap-4">
          <p className="w-full text-center font-helvetica font-normal text-[#21283399] text-xl md:text-2xl tracking-[0] leading-7">
            Dashboard
          </p>

          <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            Modern Compliance Management Dashboard
          </h2>

          <p className="text-center max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[22px] tracking-[-0.64px] leading-relaxed lg:leading-[35px]">
            Manage your company's compliance from anywhere, anytime
          </p>
        </header>

        <div className="flex flex-col items-start justify-center w-full lg:flex-row">
          {advantageCards.map((card, index) => (
            <div
              className="relative pt-20 w-full md:w-[520px] lg:w-[470px] xl:w-[580px] mx-auto"
              key={index}
            >
              <img
                className="absolute w-[175px] sm:w-[175px] md:w-[175px] xl:w-[182px] h-auto z-20 -left-3 md:-left-10 lg:-left-3 top-[18px]"
                alt={"icon"}
                src={card.iconSrc}
              />
              <SideNotchCard
                notch={{
                  width: { base: 53, sm: 53, md: 53, lg: 53 },
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
                  <div className="absolute top-[90px] left-[28px] sm:left-[33px] flex flex-col gap-4 w-auto h-full">
                    <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[32px] tracking-[0] leading-[34.1px]">
                      {card.title}
                    </h3>

                    <ul className="flex flex-col gap-3">
                      {card.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center gap-2.5"
                        >
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

      <Card className="w-full max-w-[1226px] mx-auto rounded-[20px] overflow-hidden border-0 bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] px-4 sm:px-8 py-6">
  <CardContent className="relative p-0 overflow-hidden">
    {/* Blurred background circle */}
   

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-center gap-8">
      <div className="flex flex-col-reverse items-center justify-between w-full gap-8 lg:flex-row lg:items-start">
        {/* Left Section */}
        <div className="flex flex-col gap-4 w-full lg:w-[70%] text-left">
          <h3 className="font-medium text-white text-2xl sm:text-3xl md:text-[32px] leading-tight">
            Key Features
          </h3>

          {statutoryRecordSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-12 gap-x-4"
            >
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-start gap-3"
                >
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                    alt="Tick Icon"
                    src="/Secretary/greyticke.png"
                  />
                  <p className="text-white/90 text-base sm:text-lg md:text-[18.2px] leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right Section (Image) */}
        <div className="flex justify-center  w-full lg:w-[40%]">
          <img
            src="/AccountingServices/keyfeatureimg.png"
            alt="Decoration"
            className="object-contain w-[220px] sm:w-[300px] md:w-[350px] lg:w-[350px] xl:w-[300px]"
          />
        </div>
      </div>
    </div>
  </CardContent>
</Card>

      </div>
    </section>
  );
};
