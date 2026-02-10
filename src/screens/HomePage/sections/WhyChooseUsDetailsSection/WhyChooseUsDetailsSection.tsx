import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const benefits = [
  { text: "Fast 5-day setup" },
  { text: "No hidden fees" },
  { text: "100% online process" },
  { text: "Expert support" },
];

export const WhyChooseUsDetailsSection = (): JSX.Element => {
  return (
    <section className="relative w-full rounded-[30px] px-4 sm:px-6 md:px-8 mt-[150px]">
      <div className="relative w-full h-[210px] sm:h-[300px] md:h-[300px] lg:h-auto xl:w-[95vw] mx-auto mt-96 md:mt-20 lg:mt-10 xl:mt-0">
        <img
          className="object-cover w-full h-auto"
          alt="Union"
          src="/HomePage/union.svg"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-4 text-center md:justify-start xl:justify-center xl:gap-6">
          {/* Heading */}
          <h2 className="text-[#212833] font-normal font-georgia leading-tight sm:leading-[60px] md:leading-[60px] xl:leading-[72px] tracking-[0] max-w-[90%] sm:max-w-[700px] md:max-w-[835px] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[64px] -mt-[500px] md:-mt-20 lg:mt-0">
            <span>
              Ready to Start Your
              <br className="hidden sm:block" />
            </span>
            <span className="text-[#004eff]"> Hong Kong </span>
            <span>Business?</span>
          </h2>

          {/* Description */}
          <p className="text-[#212833e6] font-helvetica font-normal text-base sm:text-lg md:text-[18px] xl:text-[22px] leading-relaxed sm:leading-7 tracking-[0] max-w-[90%] sm:max-w-[600px] md:max-w-[710px]">
            Get your company incorporated and operational in as fast as 5 days
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-2 sm:gap-3 md:gap-2 sm:mt-4">
            {benefits.map((benefit, index) => (
              <Badge
                key={index}
                variant="outline"
                className="inline-flex items-center gap-2.5 px-[10px] sm:px-[12px] py-2 bg-[#ffffff99] rounded-[50px] border border-solid border-[#004eff66] shadow-[0px_4px_24px_#004eff33]"
              >
                <img
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  alt="Check"
                  src="/HomePage/svg.svg"
                />
                <span className="font-helvetica font-normal text-[#004eff] text-xs sm:text-sm  leading-[18px] sm:leading-[21px] tracking-[0] whitespace-nowrap">
                  {benefit.text}
                </span>
              </Badge>
            ))}
          </div>

          {/* Buttons */}
          <div className="absolute flex flex-col flex-wrap items-center justify-center gap-2 mt-6 -bottom-20 lg:-bottom-8 xl:bottom-0 md:flex-row xl:gap-1 sm:gap-1 sm:mt-8">
            <Button className="group inline-flex items-center justify-center gap-2 pl-3 pr-2 sm:pr-1.5 py-6 xl:py-7 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)]">
              <span className="text-sm font-medium leading-6 text-white font-helvetica sm:text-xs xl:text-base whitespace-nowrap">
                Incorporate Now - €279
              </span>
              <img
                className="w-[30px] sm:w-[28px] h-[30px] sm:h-[28px] xl:h-[38px] xl:w-[38px] transition-all duration-500 ease-in-out group-hover:-rotate-45"
                alt="Arrow"
                src="/HomePage/arrow.svg"
              />
            </Button>

            <Button
              variant="outline"
              className="px-[24px] sm:px-[18px] md:px[26px] py-[20px] sm:py-[20px] xl:py-[26px] rounded-[40px] border-2 border-solid border-[#004eff]"
            >
              <span className="bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-helvetica font-medium text-sm sm:text-xs xl:text-base leading-6 whitespace-nowrap">
                Book Free Consultation
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="flex items-center justify-center w-full px-4 mt-24 text-center lg:mt-10 xl:mt-4">
        <p className="font-helvetica font-normal text-[#212833e6] text-sm sm:text-base leading-5 sm:leading-6">
          Join 1,000+ businesses that trust Mute Taxes for their
          <br className="hidden sm:block" />
          <span className="font-medium font-helvetica">
            Hong Kong operations
          </span>
        </p>
      </div>
    </section>
  );
};
