import React from "react";
import { Card, CardContent } from "../../../../SacretaryComponents/ui/card";

const featuresList = [
  "Real-time Compliance Status",
  "Upcoming Deadline Alerts",
  "Document Repository",
  "Task Management",
  "Digital Signatures",
  "Secure Messaging",
];

const mobileAccessList = [
  "Ios/android Apps",
  "Document Approval On-the-go",
  "Push Notifications",
  "Offline Access",
];

export const AdvantagesSection = (): JSX.Element => {
  return (
    <section className="w-full py-20">
      <div className="flex flex-col max-w-[1226px] mx-auto items-center gap-16 px-4">
        <header className="flex flex-col max-w-[882px] items-center gap-4">
          <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-[28.1px]">
            Dashboard
          </div>

          <h2 className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64.3px] text-center tracking-[0] leading-[72.4px]">
            Modern Compliance Management Dashboard
          </h2>

          <p className="max-w-[702px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[22px] text-center tracking-[-0.64px] leading-[35px]">
            Manage your company&#39;s compliance from anywhere, anytime
          </p>
        </header>

        <div className="flex flex-wrap items-start justify-center w-full gap-6">
          <Card className="relative w-full max-w-[580px] h-auto overflow-hidden border-0 shadow-none bg-transparent">
            <CardContent className="relative p-0 h-[426.69px]">
              <img
                className="absolute left-0 top-[42px] w-full h-[385px]"
                alt="Features background"
                src="/Secretary/subtract-3.svg"
              />

              <img
                className="absolute top-[-13px] -left-3 w-[162px] h-[162px]"
                alt="Features icon"
                src="/Secretary/greenicon.png"
              />

              <div className="absolute top-[131px] left-[33px] flex flex-col gap-4 w-full"
   >    
        <img
    src="/Secretary/b1.png"
    alt="Right side background"
    className="absolute right-0 top-0 w-[320px] h-[380px] object-contain"
  />
                
                <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[32px] tracking-[0] leading-[34.1px]">
                  Features
                </h3>

                <ul className="flex flex-col gap-3">
                  {featuresList.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2.5">
                      <img
                        className="flex-shrink-0 w-6 h-6"
                        alt="CheckIcon icon"
                        src="/Secretary/frame.svg"
                      />
                      <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* <Card className="relative w-full max-w-[580px] h-auto overflow-hidden border-0 shadow-none bg-transparent">
            <CardContent className="relative p-0 h-[426.69px]">
              <img
                className="absolute left-px top-[42px] w-full h-[385px]"
                alt="Mobile access background"
                src="/Secretary/subtract-4.svg"
              />

              <img
                className="absolute top-[-13px] -left-3.5 w-[162px] h-[162px]"
                alt="Mobile access icon"
                src="/Secretary/valuepropositionsection-6.svg"
              />

              <div className="absolute top-[131px] left-[33px] flex flex-col gap-4 w-[334px]">
                <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[32px] tracking-[0] leading-[34.1px]">
                  Mobile Access
                </h3>

                <ul className="flex flex-col gap-3">
                  {mobileAccessList.map((item, index) => (
                    <li key={index} className="flex items-center gap-2.5">
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
          </Card> */}
          <Card
  className="relative w-full max-w-[580px] h-auto overflow-hidden border-0 shadow-none bg-transparent"
>
  <CardContent
    className="relative p-0 h-[426.69px] bg-no-repeat bg-right bg-contain"
   
  >
    {/* Background layer images */}
    <img
      className="absolute left-px top-[42px] w-full h-[385px]"
      alt="Mobile access background"
      src="/Secretary/subtract-4.svg"
    />

    <img
      className="absolute top-[-13px] -left-3.5 w-[162px] h-[162px]"
      alt="Mobile access icon"
      src="/Secretary/valuepropositionsection-6.svg"
    />

    {/* Text content */}
    <div className="absolute top-[131px] left-[33px] flex flex-col gap-4 w-full"
   >
        <img
    src="/Secretary/b2.png"
    alt="Right side background"
    className="absolute right-0 top-0 w-[320px] h-[380px] object-contain"
  />
      <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[32px] tracking-[0] leading-[34.1px]">
        Mobile Access
      </h3>

      <ul className="flex flex-col gap-3">
        {mobileAccessList.map((item, index) => (
          <li key={index} className="flex items-center gap-2.5">
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
</Card>

        </div>

        <div className="relative w-full max-w-[1185px] h-[127px] rounded-[20px] overflow-hidden bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)]">
          <div className="absolute top-[23px] left-[583px] h-[1180px] w-[1130px]">
            <div className="absolute top-[90px] left-[90px] w-[949px] h-[949px] rounded-[474.32px] rotate-[12.34deg] blur-[27.38px] bg-[linear-gradient(226deg,rgba(0,78,255,0.9)_0%,rgba(222,232,255,0.18)_100%)]" />

            <div className="absolute top-[140px] left-[90px] w-[949px] h-[949px] rounded-[474.32px] rotate-[12.34deg] blur-[27.38px] bg-[linear-gradient(226deg,rgba(0,78,255,0.9)_0%,rgba(222,232,255,0.18)_100%)]" />
          </div>

          <div className="absolute top-[calc(50%_-_34px)] left-[43px] flex flex-col gap-4">
            <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-[26.0px] whitespace-nowrap">
              Bank-level Security
            </h3>

            <p className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[21px] tracking-[0] leading-[26.0px] whitespace-nowrap">
              Iso 27001 Certified Data Protection
            </p>
          </div>

          <img
            className="absolute top-[31px] left-[1062px] w-[68px] h-[68px]"
            alt="Security icon"
            src="/Secretary/frame-49.svg"
          />
        </div>
      </div>
    </section>
  );
};
