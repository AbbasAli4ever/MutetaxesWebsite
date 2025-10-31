import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../SacretaryComponents/ui/badge";
import { Button } from "../../../../SacretaryComponents/ui/button";

const benefits = [
  { text: "100% compliance record" },
  { text: "HKICS qualified team" },
  { text: "Same-day response" },
  { text: "Fixed transparent pricing" },
];

export const BenefitsSection = (): JSX.Element => {
  return (
    <section className="relative w-full rounded-[30px]">
      <div className="relative w-full">
        <img className="w-full h-auto" alt="Union" src="/Secretary/union-1.svg" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="flex flex-col w-full max-w-[835px] items-center gap-4">
            <h2 className="text-center [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] tracking-[0] leading-[72px]">
              Ensure Your Company&#39;s Compliance Today
            </h2>

            <p className="text-center w-full max-w-[702px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-[22px] tracking-[0] leading-7">
              Don&#39;t risk penalties - get professional company secretary
              services now
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {benefits.map((benefit, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="inline-flex items-center gap-2.5 px-[11px] py-2 bg-[#ffffff33] rounded-[50px] border border-solid border-[#004eff66] h-auto"
                >
                  <CheckIcon className="w-5 h-5 text-[#004eff]" />
                  <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#004eff] text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                    {benefit.text}
                  </span>
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <Button className="inline-flex items-center justify-center gap-2 pl-3 pr-1.5 py-2 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] h-auto hover:opacity-90">
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                Get Started - €99/month
              </span>
              <img className="w-[38px] h-[38px]" alt="Arrow" src="/Secretary/arrow.svg" />
            </Button>

            <Button
              variant="outline"
              className="px-[18px] py-[21px] rounded-[40px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[40px] before:[background:linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none h-auto hover:bg-transparent"
            >
              <span className="bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-transparent text-base tracking-[0] leading-6 whitespace-nowrap">
                Free Compliance CheckIcon
              </span>
            </Button>
          </div>
        </div>
      </div>

      <p className="text-center w-full max-w-[702px] mx-auto mt-4 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-5">
        Join 1,000+ businesses that trust Mute Taxes for their
        <br />
        <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
          Hong Kong operations
        </span>
      </p>
    </section>
  );
};
