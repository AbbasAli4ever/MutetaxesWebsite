import React from "react";
import { Badge } from "../../../../SacretaryComponents/ui/badge";
import { Button } from "../../../../SacretaryComponents/ui/button";

const statisticsBadges = [
  {
    text: "100% Approval Rate",
    top: "top-[798px]",
    left: "left-[861px]",
    shadow: "shadow-[0px_11.91px_22.12px_#004eff52]",
  },
  {
    text: "2,500+ Companies Formed",
    top: "top-[800px]",
    left: "left-[350px]",
    shadow: "shadow-[17.63px_11.92px_17.63px_#004eff52]",
  },
  {
    text: "50+ Countries Served",
    top: "top-[876px]",
    left: "left-[676px]",
    shadow: "shadow-[0px_11.91px_22.12px_#004eff52]",
  },
];

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-auto">
      <div className="relative w-full h-auto rounded-[30px] overflow-hidden bg-[url(/union-6.svg)] bg-[100%_100%]">
        <div className="absolute top-[142px] left-[-535px] w-[944px] h-[944px] rounded-[472px] rotate-[12.34deg] blur-[77px] bg-[linear-gradient(184deg,rgba(0,78,255,0.24)_0%,rgba(222,232,255,0)_100%)]" />

        <div className="absolute top-[142px] left-[1045px] w-[944px] h-[944px] rounded-[472px] rotate-[167.66deg] blur-[77px] bg-[linear-gradient(184deg,rgba(0,78,255,0.24)_0%,rgba(222,232,255,0)_100%)]" />

        <div className="absolute w-[33.40%] h-[28.25%] top-[72.30%] left-[33.33%] flex">
          <div className="flex-1 w-[465px] relative">
            <div className="absolute w-[49.68%] h-[49.20%] top-0 left-[28.17%]">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute w-[100.87%] h-full top-0 left-0">
                  <img
                    className="absolute w-[98.71%] h-full top-0 left-0"
                    alt="Vector"
                    src="/Secretary/vector-2.svg"
                  />

                  <div className="absolute w-[38.63%] h-[24.63%] top-[9.90%] left-[28.35%] flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004eff] text-[14.5px] tracking-[0] leading-[16.2px]">
                    Company
                    <br />
                    Incorporation
                  </div>

                  <img
                    className="absolute w-[99.14%] h-full top-0 left-0"
                    alt="Vector"
                    src="/Secretary/vector.svg"
                  />
                </div>

                <img
                  className="absolute w-[69.81%] h-0 top-[94.84%] left-[10.36%]"
                  alt="Vector"
                  src="/Secretary/vector-1.svg"
                />
              </div>

              <img
                className="absolute w-[76.94%] h-[75.86%] top-[7.34%] left-[8.58%]"
                alt="Group"
                src="/Secretary/group-3.png"
              />
            </div>

            <img
              className="absolute w-[34.37%] h-[84.62%] top-[14.29%] left-[65.63%]"
              alt="Group"
              src="/Secretary/group.png"
            />

            <img
              className="absolute w-[99.92%] h-[13.58%] top-[86.42%] left-0"
              alt="Group"
              src="/Secretary/group-1.png"
            />

            <img
              className="absolute w-[62.31%] h-[74.89%] top-[21.91%] left-0"
              alt="Group"
              src="/Secretary/group-2.png"
            />
          </div>
        </div>

        {statisticsBadges.map((badge, index) => (
          <div
            key={index}
            className={`inline-flex items-center justify-center gap-[8.51px] px-[14.1px] py-[12.34px] absolute ${badge.top} ${badge.left} bg-[#ffffffcc] rounded-[119.12px] border-[0.85px] border-solid border-[#00000024] ${badge.shadow} backdrop-blur-[1.76px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1.76px)_brightness(100%)]`}
          >
            <div className="relative flex items-center justify-center w-fit mt-[-0.85px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004eff] text-[12.8px] tracking-[0] leading-[17.0px] whitespace-nowrap">
              {badge.text}
            </div>
          </div>
        ))}

        <header className="absolute left-0 right-0 flex items-center justify-between px-12 top-9">
          <img
            className="w-44 h-[30px]"
            alt="Mutetaxes logo"
            src="/Secretary/mutetaxes-logo-1-1.svg"
          />

          <nav className="inline-flex items-center gap-2">
            <Button
              variant="outline"
              className="h-auto px-[18px] py-4 rounded-[40px] border border-solid border-[#21283366] bg-transparent"
            >
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-base tracking-[0] leading-6">
                Sign In
              </span>
            </Button>

            <Button className="h-auto px-[18px] py-4 rounded-[40px] bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)]">
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#dde7ff] text-base tracking-[0] leading-6">
                Get Started
              </span>
            </Button>
          </nav>
        </header>

        <div className="flex flex-col items-center justify-center gap-6 pt-[207px] pb-[253px] px-4">
          <div className="inline-flex flex-col items-center justify-center gap-6">
            <Badge className="h-auto inline-flex items-center justify-center gap-2.5 px-[11px] py-2 bg-[#28b44608] rounded-[50px] border border-solid border-[#28b446] hover:bg-[#28b44608]">
              <div className="inline-flex items-center gap-2.5">
                <img className="w-5 h-5" alt="Svg" src="/Secretary/svg-4.svg" />

                <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#28b446] text-sm text-center tracking-[0] leading-[21px]">
                  From €99/month
                </span>
              </div>
            </Badge>

            <div className="inline-flex flex-col items-center gap-6">
              <h1 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-normal text-transparent text-[74px] text-center tracking-[-2.64px] leading-[83px]">
                <span className="font-medium text-[#212833] tracking-[-1.95px]">
                  Licensed Company Secretary
                  <br />
                  Services&nbsp;&nbsp;for{" "}
                </span>
                <span className="[font-family:'Georgia-Regular',Helvetica] text-[#004eff] tracking-[-1.95px]">
                  Hong Kong Companies
                </span>
              </h1>

              <p className="w-[890px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[27px] text-center tracking-[-0.64px] leading-[35px]">
                Ensure 100% statutory compliance with professional
                <br />
                company secretarial support
              </p>
            </div>

            <div className="inline-flex items-center gap-4">
              <Button className="h-auto inline-flex items-center justify-center gap-[15px] pl-3 pr-1.5 py-2 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)]">
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6">
                  Get Company Secretary Services
                </span>

                <img
                  className="w-[38px] h-[38px]"
                  alt="Arrow"
                  src="/Secretary/arrow.svg"
                />
              </Button>

              <Button
                variant="outline"
                className="h-auto px-[37px] py-[21px] rounded-[40px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[40px] before:[background:linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none bg-transparent"
              >
                <span className="bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-transparent text-base tracking-[0] leading-6">
                  Check Compliance Status
                </span>
              </Button>
            </div>
          </div>

          <div className="inline-flex flex-col items-center justify-center gap-2">
            <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl text-center tracking-[-0.64px] leading-6">
              Over 2,500 successful incorporations completed Join
            </p>

            <div className="inline-flex items-center justify-center gap-2">
              <img
                className="w-[23.43px] h-[23.43px]"
                alt="Frame"
                src="/Secretary/frame-66.svg"
              />

              <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl tracking-[0] leading-[21px]">
                4.9
              </span>

              <img alt="Frame" src="/Secretary/frame-7-1.svg" />

              <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl tracking-[0] leading-[18px]">
                10,000+ reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
