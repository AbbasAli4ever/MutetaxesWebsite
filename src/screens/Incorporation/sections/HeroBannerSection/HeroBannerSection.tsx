import React from "react";
import { Badge } from "../../../../IncorporateComponents/ui/badge";
import { Button } from "../../../../IncorporateComponents/ui/button";


const statisticsBadges = [
  {
    text: "100% Approval Rate",
    className: "bottom-[35%] left-[53%] md:bottom-[40%] md:left-[70%]",
    shadow: "shadow-[0px_11.91px_22.12px_#004eff52]",
  },
  {
    text: "50+ Countries Served",
    className: "left-[3%] bottom-[35%] md:bottom-[10%] lg:bottom-[14%] md:left-[41%]",
    shadow: "shadow-[17.63px_11.92px_17.63px_#004eff52]",
  },
  {
    text: "2,500+ Companies Formed",
    className: "bottom-[50%] left-[23%] md:bottom-[17%] md:left-[8%]",
    shadow: "shadow-[0px_11.91px_22.12px_#004eff52]",
  },
];



export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#dbe6fe] md:bg-transparent h-auto">
      <div className="relative w-full xl:w-[97vw] mx-auto h-[950px] sm:h-[700px] md:h-[950px] lg:h-[1100px] pt-5 overflow-hidden">
        <img
          className="hidden object-cover w-full h-full md:object-fill md:block"
          alt="G illustration"
          src="/HomePage/HeroBG.png"
        />
        <img
          className="absolute bottom-0 -translate-x-1/2 left-1/2 "
          width="950"
          height="500"
          alt="G illustration"
          src="/Incorporate/rectangle-259.png"
        />
        <div className="absolute bottom-0 h-[400px] w-full lg:w-[900px] xl:w-[1200px] left-1/2 -translate-x-1/2">
          {statisticsBadges.map((badge, index) => (
            <div
              key={index}
              className={`inline-flex items-center justify-center gap-[8.51px] px-[14.1px] py-[12.34px] absolute ${badge.className} bg-[#ffffffcc] rounded-[119.12px] border-[0.85px] border-solid border-[#00000024] ${badge.shadow} backdrop-blur-[1.76px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1.76px)_brightness(100%)]`}
            >
              <div className="relative flex items-center justify-center w-fit mt-[-0.85px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004eff] text-[12px] md:text-[17.8px] tracking-[0] leading-[17.0px] whitespace-nowrap">
                {badge.text}
              </div>
            </div>
          ))}
        </div>
      </div>





      <div className="absolute top-24 md:top-40 lg:top-[180px] left-1/2 -translate-x-1/2 flex flex-col w-full max-w-[1000px] px-4 items-center justify-center gap-6">
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

          <h1 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-normal text-[1.8rem] md:text-5xl lg:text-[74px] text-center tracking-[-1.95px] leading-tight md:leading-snug lg:leading-[83px]">
  {/* First line: Register Your + Icon + Hong Kong */}
  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 font-medium">
    <span className="font-medium font-helvetica text-[#212833]">Register Your</span>
    <span className="flex items-center gap-2">
      <img
        src="/HomePage/ellipse-3-1.png"
        alt="Hong Kong Icon"
        className="w-8 h-8 object-cover md:w-[3rem] md:h-[3rem] lg:w-12 lg:h-12 rounded-full"
      />
      <span className="font-georgia text-[#004eff] whitespace-nowrap">
        Hong Kong
      </span>
    </span>
  </div>

  {/* Second line: Company in 5–7 Days */}
  <div className="font-medium font-helvetica text-[#212833] mt-1 lg:mt-2">
    Company in 5–7 Days
  </div>
</h1>



            <p className="w-[300px] lg:w-[698px] xl:w-[702px] font-helvetica font-normal text-[#212833] text-[15px] lg:text-[28px] text-center tracking-[-0.64px] lg:leading-[35px]">
              Expert incorporation services with everything you need
              to start your business
            </p>

            {/* <img
              className="absolute top-[62px] left-[180px] w-[30px] h-[30px] lg:top-[73px] lg:left-[430px] lg:w-[70px] lg:h-[70px] object-cover rounded-full"
              alt="Ellipse"
              src="/HomePage/ellipse-3-1.png"
            /> */}
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-4 xl:flex xl:items-center">
            <Button className="group h-auto gap-[35px] pl-3 pr-1.5 py-2 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:opacity-90">
              <span className="font-helvetica font-normal text-white text-base text-center tracking-[0] leading-6">
                Start Incorporate Now
              </span>
              <img className="w-[38px] h-[38px] transition-all duration-500 ease-in-out group-hover:-rotate-45" alt="Arrow" src="/HomePage/arrow.svg" />
            </Button>

            <Button
              variant="outline"
              className="h-auto px-[18px] py-[13px] rounded-[40px] border border-solid border-blue-500 bg-transparent hover:bg-transparent"
            >
              <span className="bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-helvetica font-normal text-base tracking-[0] leading-6">
                Download Free Guide
              </span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="font-helvetica font-normal text-[#212833] text-[1rem] lg:text-xl text-center tracking-[-0.64px] leading-6">
            Over 2,500 successful incorporations completed Join
          </p>

          <div className="flex items-center justify-center gap-2">
            <img
              className="w-[23.43px] h-[23.43px]"
              alt="Frame"
              src="/HomePage/frame-2.svg"
            />

            <span className="font-helvetica font-normal text-[#212833] text-xl tracking-[0] leading-[21px]">
              4.9
            </span>

            <img alt="Frame" src="/HomePage/frame-7.svg" />

            <span className="font-helvetica font-normal text-[#212833] text-[14px] tracking-[0] leading-[18px]">
              10,000+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
