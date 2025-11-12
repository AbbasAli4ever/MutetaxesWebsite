import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
export const HeroBannerSection = (): JSX.Element => {
  const statisticsBadges = [
    {
      text: (
        <div>
          <span className="font-semibold">HKICPA-qualified accountants</span>
          <br />
          handle your books while
          <br />
          you focus on growth.
        </div>
      ),
      className:
        "bottom-3 md:bottom-[10%] xl:bottom-[20%] left-3 md:left-[10%] lg:left-[0%] rounded-l-[14.12px] rounded-br-[14.12px]",
      shadow: "shadow-[0px_11.91px_22.12px_#004eff52]",
    },
    {
      text: (
        <div>
          Hi There!
          <br />
          We’ve <span className="font-semibold">Cloud-based,
          <br />
          real-time,</span> and fully
          <br />
          compliant.
        </div>
      ),
      className:
        "right-3 md:right-[10%] bottom-5 md:bottom-[20%]  rounded-r-[14.12px] rounded-bl-[14.12px]",
      shadow: "shadow-[0px_11.91px_22.12px_#004eff52]",
    },
  ];
  return (
    <section className="relative w-full bg-[#DBE6FE] md:bg-transparent h-auto">
      <div className="relative w-full xl:w-[97vw] mx-auto h-[1080px] sm:h-[700px] md:h-[950px] lg:h-[1100px] pt-5 overflow-hidden">
        <img
          className="hidden object-cover w-full h-full md:object-fill md:block"
          alt="G illustration"
          src="/HomePage/HeroBG.png"
        />
        <img
          className="absolute bottom-0 w-[250px] md:w-[450px] lg:w-[500px]  -translate-x-1/2 left-1/2 "
          width="400"
          height="500"
          alt="G illustration"
          src="/AccountingServices/AccountHeroImg.png"
        />
        <div className="absolute bottom-0 h-[400px] w-full lg:w-[800px] xl:w-[1000px] left-1/2 -translate-x-1/2">
        {statisticsBadges.map((badge, index) => (
          <div
            key={index}
            className={`inline-flex items-center justify-center gap-[8.51px] px-[14.1px] py-[12.34px] absolute ${badge.className} bg-[#ffffffcc]  border-[0.85px] border-solid border-[#00000024] ${badge.shadow} backdrop-blur-[1.76px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1.76px)_brightness(100%)]`}
          >
            <div className="relative flex items-center justify-center w-fit mt-[-0.85px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004EFF] text-[10px] sm:text-[17.8px] tracking-[0] leading-[15px] sm:leading-[25.0px] whitespace-nowrap">
              {badge.text}
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="absolute top-24 md:top-40 lg:top-[207px] left-1/2 -translate-x-1/2 flex flex-col w-full max-w-[1200px] px-4 items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="relative flex flex-col items-center gap-6">
            <Badge className="h-auto px-[11px] py-2 bg-[#28b44608] rounded-[50px] border border-solid border-[#28B446] hover:bg-[#28b44608]">
              <div className="flex items-center gap-2.5">
                <img className="w-5 h-5" alt="Svg" src="/HomePage/svg-3.svg" />
                <span className="font-helvetica font-normal text-[#28B446] text-sm text-center tracking-[0] leading-[21px]">
                  Starting from €279
                </span>
              </div>
            </Badge>
            <h1 className="font-helvetica font-medium text-5xl sm:text-5xl md:text-5xl lg:text-[74px] text-center tracking-[-1.95px] leading-tight md:leading-snug lg:leading-[83px]">
              <span className=" text-[#212833] ">
                Expert Accounting Services
              </span>
              <div className="flex flex-col items-center justify-center gap-3 font-medium sm:flex-row ">
                <div className="flex items-center justify-center gap-3">
                <span>for</span>
                <img
                  className="w-12 h-12 md:w-[70px] md:h-[70px] object-cover rounded-full"
                  alt="Ellipse"
                  src="/HomePage/ellipse-3-1.png"
                />
                </div>
                <span className="font-georgia font-normal text-[#004EFF]">
                  Hong Kong Businesses
                </span>
              </div>
            </h1>
            <p className="w-full max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[27px] text-center tracking-[-0.64px] leading-normal md:leading-[35px]">
              From bookkeeping to financial reporting - accurate, timely, and
              compliant{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button className="group h-auto gap-[35px] pl-3 pr-1.5 py-2 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:opacity-90">
              <span className="font-helvetica font-medium text-white text-base text-center tracking-[0] leading-6">
                Get Started - €279/month
              </span>
              <img
                className="w-[38px] h-[38px] transition-all duration-500 ease-in-out group-hover:-rotate-45"
                alt="Arrow"
                src="/HomePage/arrow.svg"
              />
            </Button>
            <Button
              variant="outline"
              className="h-auto px-[18px] py-[13px] rounded-[40px] border border-solid border-blue-500 bg-transparent hover:bg-transparent"
            >
              <span className="bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-helvetica font-medium text-base tracking-[0] leading-6">
                Book Free Consultation
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