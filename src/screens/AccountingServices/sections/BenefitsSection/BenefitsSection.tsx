import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../AccountingComponents/ui/badge";
import { Button } from "../../../../AccountingComponents/ui/button";

const benefits = [
  { text: "HKICPA qualified" },
  { text: "Cloud-based platform" },
  { text: "Real-time reporting" },
  { text: "Fixed monthly pricing" },
];

export const BenefitsSection = (): JSX.Element => {
  return (
    <section className="relative w-full rounded-[30px]">
      <div className="relative w-full">
        <img className="w-full h-auto" alt="Union" src="/AccountingServices/union-1.svg" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="flex w-full max-w-[835px] gap-4 flex-col items-center">
            <h2 className="relative flex items-center justify-center self-stretch [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
              Get Your Accounting in Order Today
            </h2>

            <p className="w-full max-w-[702px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-[22px] text-center leading-7 relative flex items-center justify-center tracking-[0]">
              Professional accounting that grows with your business
            </p>

            <div className="relative inline-flex flex-wrap items-start justify-center gap-2">
              {benefits.map((benefit, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2.5 px-[11px] py-2 h-auto bg-[#ffffff99] rounded-[50px] border border-solid border-[#004eff66] shadow-[0px_4px_24px_#004eff33]"
                >
                  <CheckIcon className="w-5 h-5 text-[#004eff]" />
                  <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] text-[#004eff] text-center leading-[21px] font-normal text-sm tracking-[0] whitespace-nowrap">
                    {benefit.text}
                  </span>
                </Badge>
              ))}
            </div>
          </div>

          <div className="inline-flex items-center gap-4 mt-8">
            <Button className="inline-flex items-center justify-center gap-2 pl-3 pr-1.5 py-2 h-auto rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:opacity-90">
              <span className="relative flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                Start Now - €279/month
              </span>
              <img
                className="relative w-[38px] h-[38px]"
                alt="Arrow"
                src="/AccountingServices/arrow.svg"
              />
            </Button>

            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2.5 px-11 py-[21px] h-auto rounded-[40px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[40px] before:[background:linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-accent"
            >
              <span className="bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium leading-6 relative flex items-center justify-center text-base tracking-[0] whitespace-nowrap">
                Get Free Quote
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[702px] mx-auto mt-8 flex items-center justify-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base text-center tracking-[0] leading-5">
        <p>
          Join 1,000+ businesses that trust Mute Taxes for their
          <br />
          <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
            Hong Kong operations
          </span>
        </p>
      </div>
    </section>
  );
};
