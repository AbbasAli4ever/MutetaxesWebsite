import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export const HeroBannerSection = (): JSX.Element => {
  const statisticsBadges = [
  {
     text: ( 

     <div>
       Our <span className="font-semibold">HKICS-qualified team</span>
        <br />
        manages all your statutory
        <br />
        obligations
      </div>
       ),
    className: "bottom-[8%] sm:bottom-[10%] left-[2%] md:left-[8%] xl:left-[24%] rounded-l-[14.12px] rounded-br-[14.12px]",
    shadow: "shadow-[0px_11.91px_22.12px_#004eff52]",
  },

  {
    text: (
      <div>
        Hi There!
        <br />
        Your <span className="font-semibold">Annual report</span> is ready
      </div>
    ),
    className: "bottom-[9%] sm:bottom-[12%] left-[50%] md:left-[60%] xl:left-[62%] rounded-r-[14.12px] rounded-bl-[14.12px]",
    shadow: "shadow-[0px_11.91px_22.12px_#004eff52]",
  },
];
  return (
    <section className="relative w-full bg-[#dbe6fe] md:bg-transparent h-auto">
      <div className="relative w-full xl:w-[97vw] mx-auto h-[1050px] sm:h-[700px] md:h-[950px] lg:h-[1100px] pt-5 overflow-hidden">
        <img
          className="hidden object-cover w-full h-full md:object-fill md:block"
          alt="G illustration"
          src="/HomePage/HeroBG.png"
        />
        <img
          className="absolute -translate-x-1/2 -bottom-24 sm:-bottom-52 left-1/2 "
          width="950"
          height="500"
          alt="G illustration"
          src="/Secretary/herobg.png"
        />
        {statisticsBadges.map((badge, index) => (
          <div
            key={index}
            className={`inline-flex items-center justify-center gap-[8.51px] px-[14.1px] py-[12.34px] absolute ${badge.className} bg-[#ffffffcc]  border-[0.85px] border-solid border-[#00000024] ${badge.shadow} backdrop-blur-[1.76px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1.76px)_brightness(100%)]`}
          >
            <div className="relative flex items-center justify-center w-fit mt-[-0.85px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004EFF] text-[10px] sm:text-[17.8px] tracking-[0] leading-[17.0px] whitespace-nowrap">
              {badge.text}
            </div>
          </div>
        ))}
      
      </div>

      <div className="absolute top-24 md:top-40 lg:top-[207px] left-1/2 -translate-x-1/2 flex flex-col w-full max-w-[1200px] px-4 items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="relative flex flex-col items-center gap-6">
            <Badge className="h-auto px-[11px] py-2 bg-[#28b44608] rounded-[50px] border border-solid border-[#28b446] hover:bg-[#28b44608]">
              <div className="flex items-center gap-2.5">
                <img className="w-5 h-5" alt="Svg" src="/HomePage/svg-3.svg" />
                <span className="font-helvetica font-normal text-[#28b446] text-sm text-center tracking-[0] leading-[21px]">
                  Starting from €279
                </span>
              </div>
            </Badge>

            <h1 className="font-helvetica font-medium text-5xl sm:text-5xl md:text-6xl lg:text-[74px] text-center tracking-[-1.95px] leading-tight md:leading-snug lg:leading-[83px]">
              <span className=" text-[#212833] ">
                Licensed Company Secretary{" "} 
                <br />  
              </span>
               
              <div className="flex flex-col items-center justify-center gap-1 font-medium sm:flex-row ">
             <span>
                services in
              </span>
              <img
              className="w-12 h-12 md:w-[70px] md:h-[70px] object-cover rounded-full"
              alt="Ellipse"
              src="/HomePage/ellipse-3-1.png"
            />
              <span className="font-georgia font-normal text-[#004eff]">
                Hong Kong
              </span>
              </div>
            </h1>

            <p className="w-full max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[27px] text-center tracking-[-0.64px] leading-normal md:leading-[35px]">
              Ensure 100% statutory compliance with professional company secretarial support
            </p>

            
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button className="h-auto gap-[35px] pl-3 pr-1.5 py-2 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:opacity-90">
              <span className="font-helvetica font-medium text-white text-base text-center tracking-[0] leading-6">
                Get Company Secretary Services
              </span>
              <img className="w-[38px] h-[38px]" alt="Arrow" src="/HomePage/arrow.svg" />
            </Button>

            <Button
              variant="outline"
              className="h-auto px-[18px] py-[13px] rounded-[40px] border border-solid border-blue-500 bg-transparent hover:bg-transparent"
            >
              <span className="bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-helvetica font-medium text-base tracking-[0] leading-6">
                Check Compliance Status
              </span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="font-helvetica font-normal text-[#212833] text-base md:text-xl text-center tracking-[-0.64px] leading-6">
            Over 2,500 successful incorporations completed Join
          </p>

          <div className="flex items-center justify-center gap-2">
            <img
              className="w-[23.43px] h-[23.43px]"
              alt="Frame"
              src="/HomePage/frame-2.svg"
            />

            <span className="font-helvetica font-normal text-[#212833] text-base md:text-xl tracking-[0] leading-[21px]">
              4.9
            </span>

            <img alt="Frame" src="/HomePage/frame-7.svg" />

            <span className="font-helvetica font-normal text-[#212833] text-base md:text-xl tracking-[0] leading-[18px]">
              10,000+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
