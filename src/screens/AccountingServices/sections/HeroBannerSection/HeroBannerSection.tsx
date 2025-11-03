import React from "react";
import { Badge } from "../../../../IncorporateComponents/ui/badge";
import { Button } from "../../../../IncorporateComponents/ui/button";
import { Link } from "react-router-dom";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="relative w-full xl:w-[97vw] mx-auto h-[1018px] pt-5 overflow-hidden">
        <img
          className="object-fill w-full h-full"
          alt="G illustration"
          src="/HomePage/HeroBG.png"
        />
        <img
          className="absolute bottom-0 left-1/2 -translate-x-[54%] translate-y-[-3px]"
          width="950"
          height="500"
          alt="G illustration"
          src="/AccountingServices/Group289.png"
        />
       
      </div>
     
      <div className="absolute top-[207px] left-1/2 -translate-x-1/2 flex flex-col w-[1200px] items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="relative flex flex-col items-center gap-6">
            <Badge className="h-auto px-[11px] py-2 bg-[#28b44608] rounded-[50px] border border-solid border-[#28B446] hover:bg-[#28b44608]">
              <div className="flex items-center gap-2.5">
                <img className="w-5 h-5" alt="Svg" src="/HomePage/svg-3.svg" />
                <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#28B446] text-sm text-center tracking-[0] leading-[21px]">
                  Starting from €279
                </span>
              </div>
            </Badge>
            <h1 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-normal text-[74px] text-center tracking-[-1.95px] leading-[83px]">
              <span className="font-medium text-[#212833] block tracking-[-1px]">
                Expert Accounting Services
              </span>
              <span className="[font-family:'Georgia-Regular',Helvetica] text-[#004EFF] block">
                for &nbsp;&nbsp;&nbsp;{" "} Hong Kong Businesses
              </span>
            </h1>
            <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[27px] text-center tracking-[-0.64px] leading-[35px] whitespace-nowrap">
              From bookkeeping to financial reporting - accurate, timely, and compliant
            </p>
            <img
              className="absolute top-[149px] left-[95px] w-[70px] h-[70px] object-cover rounded-full"
              alt="Ellipse"
              src="/HomePage/ellipse-3-1.png"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button className="h-auto gap-[35px] pl-3 pr-1.5 py-2 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:opacity-90">
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6">
                Get Started - €279/month
              </span>
              <img className="w-[38px] h-[38px]" alt="Arrow" src="/HomePage/arrow.svg" />
            </Button>
            <Button
              variant="outline"
              className="h-auto px-[18px] py-[13px] rounded-[40px] border border-solid border-[#004EFF] bg-transparent hover:bg-transparent"
            >
              <span className="bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-base tracking-[0] leading-6">
                Book Free Consultation
              </span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl text-center tracking-[-0.64px] leading-6">
            Over 2,500 successful incorporations completed Join
          </p>
          <div className="flex items-center justify-center gap-2">
            <img
              className="w-[23.43px] h-[23.43px]"
              alt="Frame"
              src="/HomePage/frame-2.svg"
            />
            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl tracking-[0] leading-[21px]">
              4.9
            </span>
            <img alt="Frame" src="/HomePage/frame-7.svg" />
            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl tracking-[0] leading-[18px]">
              10,000+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};