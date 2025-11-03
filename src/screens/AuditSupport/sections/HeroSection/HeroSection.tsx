import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../AuditComponents/ui/badge";
import { Button } from "../../../../AuditComponents/ui/button";
const navigationItems = [
  { label: "Incorporation", width: "w-[119.73px]" },
  { label: "Secretary", width: "w-[89.75px]" },
  { label: "Accounting Services", width: "w-fit" },
  { label: "Tax Services", width: "w-fit" },
  { label: "Audit Support", width: "w-fit", active: true },
];
const statisticsBadges = [
  {
    text: (
      <>
        Our HKICS-qualified team
        <br />
        manages all your statutory
        <br />
        obligations
      </>
    ),
    className: "bottom-[10%] left-[33%]",
    shadow: "shadow-[0px_11.91px_22.12px_#004eff52]",
  },

  {
    text: (
      <>
        Hi There!
        <br />
        Your Annual report is ready
      </>
    ),
    className: "bottom-[14%] left-[62%]",
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
          className="absolute bottom-0 -translate-x-1/2 left-1/2 mt-90"
          width="950"
          height="500"
          src="/Secretary/secretaryherobg.png"
        />

        {statisticsBadges.map((badge, index) => (
          <div
            key={index}
            className={`inline-flex items-center justify-center gap-[8.51px] px-[14.1px] py-[12.34px] absolute ${badge.className} bg-[#ffffffcc] rounded-[14.12px] border-[0.85px] border-solid border-[#00000024] ${badge.shadow} backdrop-blur-[1.76px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1.76px)_brightness(100%)]`}
          >
            <div className="relative flex items-center justify-center w-fit mt-[-0.85px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004EFF] text-[12.8px] tracking-[0] leading-[17.0px] whitespace-nowrap">
              {badge.text}
            </div>
          </div>
        ))}
      </div>

      <header className="absolute left-0 right-0 flex items-center justify-between w-[97%] mx-auto px-12 top-9">
        <img
          className="w-44 h-[30px]"
          alt="Mutetaxes logo"
          src="/HomePage/mutetaxes-logo-1.svg"
        />

        <nav className="flex items-center gap-8">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              className={`
        ${item.width} h-7 text-xl text-center tracking-[-0.40px]
        [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal leading-7 whitespace-nowrap
        transition-all duration-200
        ${item.active ? "text-[#224dff] " : "text-[#212833] hover:opacity-70"}
      `}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-auto px-[18px] py-2 rounded-[40px] border border-solid border-[#21283366] bg-transparent hover:bg-transparent"
          >
            <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-base tracking-[0] leading-6">
              Sign In
            </span>
          </Button>

          <Button className="h-auto px-[18px] py-2 rounded-[40px] bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:opacity-90">
            <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#dde7ff] text-base tracking-[0] leading-6">
              Get Started
            </span>
          </Button>
        </div>
      </header>

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
                    className="absolute  w-[90px] h-[90px] object-cover rounded-full z-0"
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
