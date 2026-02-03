import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#dbe6fe] md:bg-transparent h-auto">
      <div className="relative w-full xl:w-[97vw] mx-auto h-screen sm:h-[700px] md:h-[850px] lg:h-[1100px] pt-5 overflow-hidden">
        <img
          className="hidden object-cover w-full h-full md:object-fill md:block"
          alt="G illustration"
          src="/HomePage/HeroBG.png"
        />
        <video
          className="absolute bottom-0 -translate-x-1/2 left-1/2 w-full max-w-[450px] md:max-w-[650px] lg:max-w-[950px]
[mask-image:linear-gradient(to_top,black_90%,transparent_100%),linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]
[mask-composite:intersect]"
          autoPlay
          muted
          loop
          src="/HomePage/hero_video.mp4"
        />
      </div>

      <div className="absolute top-24 md:top-40 lg:top-[180px] left-1/2 -translate-x-1/2 flex flex-col w-full max-w-[900px] px-4 items-center justify-center gap-6">
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

            <h1 className="font-helvetica font-medium text-[28px] sm:text-5xl md:text-6xl lg:text-[74px] text-center tracking-[-1.95px] leading-tight md:leading-snug lg:leading-[83px]">
              {/* Line 1 */}
              <span className="text-[#212833] block">
                Your Complete Business
              </span>

              {/* Line 2 */}
              <div className="flex items-center justify-center gap-1 mt-1 sm:mt-2 flex-wrap">
                <span>Solution in</span>
                <img
                  className="w-8 h-8 lg:w-12 lg:h-12 md:w-[70px] md:h-[70px] object-cover rounded-full"
                  alt="Ellipse"
                  src="/HomePage/ellipse-3-1.png"
                />
                <span className="font-georgia font-normal text-[#004eff]">
                  Hong Kong
                </span>
              </div>
            </h1>

            <p className="w-full max-w-[350px] lg:max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[27px] text-center tracking-[-0.64px] leading-normal md:leading-[35px]">
              From company formation to compliance - we handle your business
              essentials so you can focus on growth
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button className="group h-auto gap-[35px] pl-3 pr-1.5 py-2 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:opacity-90">
              <span className="font-helvetica font-medium text-white text-base text-center tracking-[0] leading-6">
                Incorporate Now
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
            Trusted by 1,000+ Hong Kong companies.
          </p>

          <div className="flex items-center max-sm:w-fuljustify-center gap-2">
            <img
              className="w-[23.43px] h-[23.43px]"
              alt="Frame"
              src="/HomePage/frame-2.svg"
            />

            <span className="font-helvetica font-normal text-[#212833] text-base md:text-xl tracking-[0] leading-[21px]">
              4.9
            </span>

            <img alt="Frame" src="/HomePage/frame-7.svg" />

            <span className="font-helvetica font-normal text-[#212833] text-base w-10 md:text-xl tracking-[0] leading-[18px]">
              10,000+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
