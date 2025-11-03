import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const benefits = [
  { text: "HKICPA qualified" },
  { text: "Cloud-based platform" },
  { text: "Real-time reporting" },
  { text: "Fixed monthly pricing" },
];

export const BenefitsSection = (): JSX.Element => {
  return (
    <section className="relative w-full rounded-[30px]">
      <div className="relative w-full xl:w-[95vw] mx-auto">
        <img className="w-full h-auto" alt="Union" src="/HomePage/union.svg" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4">
          <h2 className="text-center [font-family:'Georgia-Regular',Helvetica] font-normal text-[64px] leading-[72px] tracking-[0] max-w-[835px]">
            <span className="text-[#212833]">
             Get Your Accounting in Order Today
            </span>
        
          </h2>

          <p className="text-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-[22px] leading-7 tracking-[0] max-w-[702px]">
            Professional accounting that grows with your business
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {benefits.map((benefit, index) => (
              <Badge
                key={index}
                variant="outline"
                className="inline-flex items-center gap-2.5 px-[11px] py-2 bg-[#ffffff99] rounded-[50px] border border-solid border-[#004eff66] shadow-[0px_4px_24px_#004eff33] h-auto"
              >
                <img className="w-5 h-5" alt="Check" src="/HomePage/svg.svg" />
                <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#004eff] text-sm leading-[21px] tracking-[0] whitespace-nowrap">
                  {benefit.text}
                </span>
              </Badge>
            ))}
          </div>

          <div className="absolute bottom-0 flex flex-wrap items-center justify-center gap-4 mt-8">
            <Button className="inline-flex items-center justify-center gap-2 pl-3 pr-1.5 py-2 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] h-auto">
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base leading-6 tracking-[0] whitespace-nowrap">
                Start Now - €279/month
              </span>
              <img className="w-[38px] h-[38px]" alt="Arrow" src="/HomePage/arrow.svg" />
            </Button>

            <Button
              variant="outline"
              className="px-[18px] py-[14px] rounded-[40px] border-2 border-solid border-[#004eff] h-auto"
            >
              <span className="bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-base leading-6 tracking-[0] whitespace-nowrap">
                Get Free Quote
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-8 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base text-center tracking-[0] leading-4">
        <p className="leading-5">
          Join 1,000+ businesses that trust Mute Taxes for their
          <br />
          <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium leading-5">
            Hong Kong operations
          </span>
        </p>
      </div>
    </section>
  );
};
