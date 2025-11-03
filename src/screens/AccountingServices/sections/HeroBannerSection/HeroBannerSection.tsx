import React from "react";
import { Badge } from "../../../../AccountingComponents/ui/badge";
import { Button } from "../../../../AccountingComponents/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="relative mx-6 my-6 rounded-[30px] overflow-hidden bg-[url(/union.svg)] bg-[100%_100%]">
        <div className="absolute top-[142px] left-[-535px] w-[944px] h-[944px] rounded-[472px] rotate-[12.34deg] blur-[77px] bg-[linear-gradient(184deg,rgba(0,78,255,0.24)_0%,rgba(222,232,255,0)_100%)]" />

        <div className="absolute top-[142px] right-[-535px] w-[944px] h-[944px] rounded-[472px] rotate-[167.66deg] blur-[77px] bg-[linear-gradient(184deg,rgba(0,78,255,0.24)_0%,rgba(222,232,255,0)_100%)]" />

        <div className="relative flex flex-col min-h-[964px]">
          

          <div className="flex flex-col items-center justify-center flex-1 gap-6 px-6 py-12">
            <div className="flex flex-col items-center gap-6 max-w-[894px]">
              <Badge className="h-auto px-[11px] py-2 bg-[#28b44608] rounded-[50px] border-[#28b446] hover:bg-[#28b44608]">
                <div className="flex items-center gap-2.5">
                  <img className="w-5 h-5" alt="Svg" src="/AccountingServices/svg.svg" />
                  <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#28b446] text-sm">
                    From €99/month
                  </span>
                </div>
              </Badge>

              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <h1 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[74px] text-center tracking-[-1.95px] leading-[83px]">
                    Expert Accounting Services <br />
                    for&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    <span className="[font-family:'Georgia-Regular',Helvetica] text-[#004eff]">
                      Hong Kong Businesses
                    </span>
                  </h1>

                  <img
                    className="absolute top-[87px] left-28 w-[70px] h-[70px] object-cover"
                    alt="Ellipse"
                    src="/AccountingServices/ellipse-3.png"
                  />
                </div>

                <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[27px] text-center tracking-[-0.64px] leading-[35px] max-w-[890px]">
                  From bookkeeping to financial reporting - accurate, timely,
                  and compliant
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button className="h-auto pl-3 pr-1.5 py-2 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:bg-[linear-gradient(131deg,rgba(104,150,255,0.9)_0%,rgba(0,78,255,0.9)_100%)]">
                  <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base">
                    Get Started - €279/month
                  </span>
                  <img
                    className="w-[38px] h-[38px]"
                    alt="Arrow"
                    src="/AccountingServices/arrow.svg"
                  />
                </Button>

                <Button
                  variant="outline"
                  className="h-auto px-[37px] py-[21px] rounded-[40px] border-[none] bg-transparent hover:bg-transparent before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[40px] before:[background:linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                >
                  <span className="bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-base">
                    Book Free Consultation
                  </span>
                </Button>
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl text-center tracking-[-0.64px] leading-6">
                  Let our HKICPA-qualified accountants handle your books while
                  <br />
                  you focus on growth. Cloud-based, real-time, and fully
                  compliant.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center pb-12">
            <div className="relative w-[465px] h-[272px]">
              <div className="absolute w-[49.68%] h-[49.20%] top-0 left-[28.17%]">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute w-[100.87%] h-full top-0 left-0">
                    <img
                      className="absolute w-[98.71%] h-full top-0 left-0"
                      alt="Vector"
                      src="/AccountingServices/vector-2.svg"
                    />

                    <div className="absolute w-[38.63%] h-[24.63%] top-[9.90%] left-[28.35%] flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004eff] text-[14.5px] tracking-[0] leading-[16.2px]">
                      Company
                      <br />
                      Incorporation
                    </div>

                    <img
                      className="absolute w-[99.14%] h-full top-0 left-0"
                      alt="Vector"
                      src="/AccountingServices/vector-1.svg"
                    />
                  </div>

                  <img
                    className="absolute w-[69.81%] h-0 top-[94.84%] left-[10.36%]"
                    alt="Vector"
                    src="/AccountingServices/vector.svg"
                  />
                </div>

                <img
                  className="absolute w-[76.94%] h-[75.86%] top-[7.34%] left-[8.58%]"
                  alt="Group"
                  src="/AccountingServices/group-3.png"
                />
              </div>

              <img
                className="absolute w-[34.37%] h-[84.62%] top-[14.29%] left-[65.63%]"
                alt="Group"
                src="/AccountingServices/group.png"
              />

              <img
                className="absolute w-[99.92%] h-[13.58%] top-[86.42%] left-0"
                alt="Group"
                src="/AccountingServices/group-1.png"
              />

              <img
                className="absolute w-[62.31%] h-[74.89%] top-[21.91%] left-0"
                alt="Group"
                src="/AccountingServices/group-2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
