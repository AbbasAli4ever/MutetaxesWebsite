import React from "react";
import { Badge } from "../../../../IncorporateComponents/ui/badge";
import { Button } from "../../../../IncorporateComponents/ui/button";

const statisticsBadges = [
  {
    text: "100% Approval Rate",
    className: "top-[757px] left-[898px]",
    shadow: "shadow-[0px_11.91px_22.12px_#004eff52]",
  },
  {
    text: "2,500+ Companies Formed",
    className: "top-[820px] left-[331px]",
    shadow: "shadow-[17.63px_11.92px_17.63px_#004eff52]",
  },
  {
    text: "50+ Countries Served",
    className: "top-[869px] left-[645px]",
    shadow: "shadow-[0px_11.91px_22.12px_#004eff52]",
  },
];

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="relative w-full rounded-[30px] overflow-hidden bg-[url(/union-4.svg)] bg-[100%_100%] min-h-[964px]">
        <img
          className="absolute top-[675px] left-[calc(50.00%_-_478px)] w-[971px] h-[289px]"
          alt="Rectangle"
          src="/Incorporate/rectangle-259.png"
        />

        <div className="absolute top-[142px] left-[-535px] w-[944px] h-[944px] rounded-[472px] rotate-[12.34deg] blur-[77px] bg-[linear-gradient(184deg,rgba(0,78,255,0.24)_0%,rgba(222,232,255,0)_100%)]" />

        <div className="absolute top-[142px] left-[1045px] w-[944px] h-[944px] rounded-[472px] rotate-[167.66deg] blur-[77px] bg-[linear-gradient(184deg,rgba(0,78,255,0.24)_0%,rgba(222,232,255,0)_100%)]" />

        {statisticsBadges.map((badge, index) => (
          <div
            key={index}
            className={`inline-flex items-center justify-center gap-[8.51px] px-[14.1px] py-[12.34px] absolute ${badge.className} bg-[#ffffffcc] rounded-[119.12px] border-[0.85px] border-solid border-[#00000024] ${badge.shadow} backdrop-blur-[1.76px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1.76px)_brightness(100%)]`}
          >
            <div className="relative flex items-center justify-center w-fit mt-[-0.85px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004eff] text-[12.8px] tracking-[0] leading-[17.0px] whitespace-nowrap">
              {badge.text}
            </div>
          </div>
        ))}

        <nav className="inline-flex items-center gap-2 absolute top-9 left-[1175px]">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <Button
              variant="outline"
              className="h-auto inline-flex items-center justify-center gap-2.5 px-[18px] py-4 relative flex-[0_0_auto] rounded-[40px] border border-solid border-[#21283366]"
            >
              <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-base tracking-[0] leading-6 whitespace-nowrap">
                Sign In
              </span>
            </Button>

            <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-[18px] py-4 relative flex-[0_0_auto] rounded-[40px] bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%),linear-gradient(0deg,rgba(0,78,255,1)_0%,rgba(0,78,255,1)_100%)]">
              <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#dde7ff] text-base tracking-[0] leading-6 whitespace-nowrap">
                Get Started
              </span>
            </Button>
          </div>
        </nav>

        <img
          className="absolute top-[43px] left-12 w-44 h-[30px]"
          alt="Mutetaxes logo"
          src="/Incorporate/mutetaxes-logo-1.svg"
        />

        <div className="inline-flex flex-col items-center justify-center gap-6 absolute top-[187px] left-[calc(50.00%_-_447px)]">
          <div className="inline-flex flex-col items-center justify-center gap-6 relative flex-[0_0_auto]">
            <Badge className="inline-flex items-center justify-center gap-2.5 px-[11px] py-2 relative flex-[0_0_auto] bg-[#28b44608] rounded-[50px] border border-solid border-[#28b446] hover:bg-[#28b44608]">
              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <img className="relative w-5 h-5" alt="Svg" src="/Incorporate/svg.svg" />

                <span className="relative flex items-center justify-center w-fit [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#28b446] text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                  Starting from €279
                </span>
              </div>
            </Badge>

            <div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto]">
              <h1 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-normal text-transparent text-[74px] text-center tracking-[-2.64px] leading-[83px]">
                <span className="font-medium text-[#212833] tracking-[-1.95px]">
                  Register Your&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>

                <span className="[font-family:'Georgia-Regular',Helvetica] text-[#004eff] tracking-[-1.95px]">
                  Hong Kong
                  <br />
                </span>

                <span className="font-medium text-[#212833] tracking-[-1.95px]">
                  Company in 5-7 Days
                </span>
              </h1>

              <p className="w-[890px] text-[#212833] text-[27px] tracking-[-0.64px] leading-[35px] relative flex items-center justify-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-center">
                Expert incorporation services with everything you need
                <br />
                to start your business
              </p>

              <img
                className="absolute top-2 left-[454px] w-[70px] h-[70px] object-cover"
                alt="Ellipse"
                src="/Incorporate/ellipse-3.png"
              />
            </div>

            <div className="relative flex-[0_0_auto] inline-flex items-center gap-4">
              <Button className="h-auto inline-flex items-center justify-center gap-[15px] pl-3 pr-1.5 py-2 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)]">
                <span className="relative flex items-center justify-center w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  Start Incorporate Now
                </span>

                <img
                  className="relative w-[38px] h-[38px]"
                  alt="Arrow"
                  src="/Incorporate/arrow.svg"
                />
              </Button>

              <Button
                variant="outline"
                className="h-auto px-[37px] py-[21px] inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] rounded-[40px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[40px] before:[background:linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <span className="mt-[-2.00px] bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-transparent text-base leading-6 whitespace-nowrap relative flex items-center justify-center w-fit tracking-[0]">
                  Download Free Guide
                </span>
              </Button>
            </div>
          </div>

          <div className="inline-flex flex-col items-center justify-center gap-2 relative flex-[0_0_auto]">
            <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl text-center tracking-[-0.64px] leading-6 whitespace-nowrap">
              Over 2,500 successful incorporations completed Join
            </p>

            <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
              <img
                className="relative w-[23.43px] h-[23.43px]"
                alt="Frame"
                src="/Incorporate/frame-57.svg"
              />

              <span className="relative flex items-center justify-center w-fit [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl tracking-[0] leading-[21px] whitespace-nowrap">
                4.9
              </span>

              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/Incorporate/frame-7-1.svg"
              />

              <span className="relative flex items-center justify-center w-fit [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl tracking-[0] leading-[18px] whitespace-nowrap">
                10,000+ reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
