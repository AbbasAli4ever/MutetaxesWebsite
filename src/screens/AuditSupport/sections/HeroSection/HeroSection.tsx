import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../AuditComponents/ui/badge";
import { Button } from "../../../../AuditComponents/ui/button";

const statisticsBadges = [
  {
    text: (
      <>
        Make your annual audit
        <br />
        smooth and efficient
        <br />
        with expert documentation
        <br />
        and auditor coordination
      </>
    ),
    className: "bottom-[16%] left-[28%] rounded-l-[14.12px] rounded-tr-[14.12px]",
    shadow: "shadow-[0px_11.91px_22.12px_#004eff52]",
  },

  {
    text: (
      <>
        Hi There! <br />
        We’re Professional 
        <br />
        audit preparation
      </>
    ),
    className: "bottom-[10%] left-[61.5%] rounded-r-[14.12px] rounded-bl-[14.12px]",
    shadow: "shadow-[0px_11.91px_22.12px_#004eff52]",
  },
];
export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="relative w-full xl:w-[97vw] mx-auto h-[1100px] pt-5 overflow-hidden">
        <img
          className="object-fill w-full h-full"
          alt="G illustration"
          src="/HomePage/HeroBG.png"
        />
        <img
          className="absolute -translate-x-1/2 -bottom-0 left-1/2 mt-90"
          width="800"
          height="500"
          src="/Audit/AuditHero.png"
        />

        {statisticsBadges.map((badge, index) => (
          <div
            key={index}
            className={`inline-flex items-center justify-center gap-[8.51px] px-[14.1px] py-[12.34px] absolute ${badge.className} bg-[#ffffffcc] border-[0.85px] border-solid border-[#00000024] ${badge.shadow} backdrop-blur-[1.76px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1.76px)_brightness(100%)]`}
          >
            <div className="relative flex items-center justify-center w-fit mt-[-0.85px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004EFF] text-[18.8px] tracking-[0] leading-[22.0px] whitespace-nowrap">
              {badge.text}
            </div>
          </div>
        ))}
      </div>

      

      <div className="absolute top-[207px] left-1/2 -translate-x-1/2 flex flex-col w-full items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="relative flex flex-col items-center gap-6">
            <Badge className="h-auto px-[11px] py-2 bg-[#28b44608] rounded-[50px] border border-solid border-[#28b446] hover:bg-[#28b44608]">
              <div className="flex items-center gap-2.5">
                <img className="w-5 h-5" alt="Svg" src="/HomePage/svg-3.svg" />
                <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#28b446] text-sm text-center tracking-[0] leading-[21px]">
                  Starting from €279
                </span>
              </div>
            </Badge>

            <div className="relative inline-block text-center">
              <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-normal text-[74px] text-center tracking-[-1.95px] leading-[83px] relative inline-block">
                <span className="font-medium text-[#212833]">
                  Streamline Your{" "}
                </span>

                {/* Container for image + Hong Kong */}
                <span className="relative inline-block ">
                  {/* background image behind Hong Kong */}
                  <img
                    className="absolute top-2 -left-1 w-[70px] h-[70px] object-cover rounded-full z-0"
                    alt="Ellipse"
                    src="/HomePage/ellipse-3-1.png"
                  />
                  <span className=" z-10 ml-20  text-[#004eff]">Hong Kong</span>
                </span>

                <span className="[font-family:'Georgia-Regular',Helvetica] text-[#004eff] block">
                  Statutory Audit
                </span>
              </div>
            </div>

            <p className="w-[702px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-light text-[#212833] text-[27px] text-center tracking-[-0.64px] leading-[35px]">
             Professional audit preparation and coordination services
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button className="h-auto gap-[35px] pl-3 pr-1.5 py-2 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:opacity-90">
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6">
                Prepare for Your Audit
              </span>
              <img
                className="w-[38px] h-[38px]"
                alt="Arrow"
                src="/HomePage/arrow.svg"
              />
            </Button>

            <Button
              variant="outline"
              className="h-auto px-[18px] py-[13px] rounded-[40px] border border-solid border-blue-500 bg-transparent hover:bg-transparent"
            >
              <span className="bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-base tracking-[0] leading-6">
               Get Readiness Assessment
              </span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-light text-[#212833] text-xl text-center tracking-[-0.64px] leading-6">
            Over 2,500 successful incorporations completed Join
          </p>

          <div className="flex items-center justify-center gap-2">
            <img
              className="w-[23.43px] h-[23.43px]"
              alt="Frame"
              src="/HomePage/frame-2.svg"
            />

            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-light text-[#212833] text-xl tracking-[0] leading-[21px]">
              4.9
            </span>

            <img alt="Frame" src="/HomePage/frame-7.svg" />

            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-light text-[#212833] text-xl tracking-[0] leading-[18px]">
              10,000+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
