import React from "react";
import { Card, CardContent } from "../../../../SacretaryComponents/ui/card";
import SideNotchCard from "../../../../UIComponents/SIdeNotchCard";

const advantageCards = [
  {
    title: "Features",
    backgroundSrc: "/Secretary/subtract-3.svg",
    iconSrc: "/Secretary/greenicon.png",
    sideImgSrc: "/Secretary/b1.png",
    items: [
      "Real-Time Compliance Status",
      "Upcoming Deadline Alerts",
      "Document Repository",
      "Task Management",
      "Secure Messaging",
    ],
  },
  {
    title: "Mobile Access",
    backgroundSrc: "/Secretary/subtract-4.svg",
    iconSrc: "/Secretary/mobileicon.png",
    sideImgSrc: "/Secretary/b2.png",
    items: [
      "Ios/android Apps",
      "Document Approval On-the-go",
      "Push Notifications",
      "Offline Access",
    ],
  },
];

export const AdvantagesSection = (): JSX.Element => {
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
           <div className="relative pt-20 w-full md:w-[520px] lg:w-[470px] xl:w-[580px] mx-auto" key={index}>
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
                  heightClass="h-[600px] md:h-[400px]"
                  borderColor="bg-blue-200"
                  shadowColor="#6a98ff"
                  borderWidth={2}
                  className={``}
                >
                  <CardContent className="relative w-full h-full p-0">
<img
                    src={card.sideImgSrc}
                    alt="Right side background"
                    className="absolute right-0 -bottom-24 xl:-bottom-20 w-[280px] xl:w-[320px] h-[380px] object-contain"
                  />
                <div className="absolute top-[90px] left-[28px] sm:left-[33px] flex flex-col gap-4 w-auto h-full">
                  

                  <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[32px] tracking-[0] leading-[34.1px]">
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

        <div className="relative w-full max-w-[1185px] h-auto min-h-[127px] rounded-[20px] overflow-hidden bg-[#145cff] px-6 py-6 md:px-10 md:py-6">
  {/* Decorative blurred circles */}
  

  {/* Text content */}
  <div className="relative flex flex-col gap-2 md:gap-3 xl:gap-4">
    <h3 className="font-medium text-white text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] leading-[1.2]">
      Bank-level Security
    </h3>
    <p className="font-medium sm:w-full w-[80%] text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] leading-[1.3]">
      ISO 27001 Certified Data Protection
    </p>
  </div>

  {/* Icon inside two circular divs */}
  <div className="absolute flex items-center justify-center top-7 right-3 sm:right-4 md:top-3 md:right-6">
    <div className="flex items-center justify-center p-2 rounded-full sm:p-4 bg-white/10">
      <div className="flex items-center justify-center p-2 rounded-full sm:p-4 bg-white/20">
        <img
          src="/Secretary/lock.png"
          alt="Security icon"
          className="w-[28px] h-[28px] md:w-[36px] md:h-[36px] lg:w-[42px] lg:h-[44px]"
        />
      </div>
    </div>
  </div>
</div>


      </div>
    </section>
  );
};
