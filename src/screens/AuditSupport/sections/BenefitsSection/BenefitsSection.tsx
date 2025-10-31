import React from "react";
import { Badge } from "../../../../AuditComponents/ui/badge";
import { Button } from "../../../../AuditComponents/ui/button";

const benefits = [
  { text: "15-30% cost reduction" },
  { text: "Faster completion" },
  { text: "Clean audit opinions" },
  { text: "Expert coordination" },
];

export const BenefitsSection = (): JSX.Element => {
  return (
    <section className="relative w-full rounded-[30px]">
      <div className="relative w-full">
        <img className="w-full h-auto" alt="Union" src="/Audit/union-9.svg" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4">
          <h2 className="text-center [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] tracking-[0] leading-[72px] max-w-[835px]">
            Make Your Next Audit Stress-Free
          </h2>

          <p className="text-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-[22px] tracking-[0] leading-7 max-w-[702px]">
            Professional preparation that saves time and money
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {benefits.map((benefit, index) => (
              <Badge
                key={index}
                variant="outline"
                className="inline-flex items-center gap-2.5 px-[11px] py-2 bg-[#ffffff99] rounded-[50px] border border-solid border-[#004eff66] shadow-[0px_4px_24px_#004eff33] h-auto"
              >
                <img className="w-5 h-5" alt="Check" src="/Audit/svg.svg" />
                <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#004eff] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                  {benefit.text}
                </span>
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-8">
            <Button className="inline-flex items-center justify-center gap-2 pl-3 pr-1.5 py-2 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] h-auto">
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                Get Audit Support - €799
              </span>
              <img className="w-[38px] h-[38px]" alt="Arrow" src="/Audit/arrow.svg" />
            </Button>

            <Button
              variant="outline"
              className="px-11 py-[21px] rounded-[40px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[40px] before:[background:linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none h-auto"
            >
              <span className="bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-base leading-6 whitespace-nowrap [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium tracking-[0]">
                Free Assessment
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base text-center tracking-[0] leading-5">
        <span>
          Join 1,000+ businesses that trust Mute Taxes for their
          <br />
          <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
            Hong Kong operations
          </span>
        </span>
      </div>
    </section>
  );
};
