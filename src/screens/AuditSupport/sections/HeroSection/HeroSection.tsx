import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../AuditComponents/ui/badge";
import { Button } from "../../../../AuditComponents/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-auto">
      <div className="relative w-full h-auto rounded-[30px] overflow-hidden bg-[url(/union-10.svg)] bg-[100%_100%] p-6">
        <div className="absolute top-[142px] left-[-535px] w-[944px] h-[944px] rounded-[472px] rotate-[12.34deg] blur-[77px] bg-[linear-gradient(184deg,rgba(0,78,255,0.24)_0%,rgba(222,232,255,0)_100%)]" />

        <div className="absolute top-[142px] right-[-535px] w-[944px] h-[944px] rounded-[472px] rotate-[167.66deg] blur-[77px] bg-[linear-gradient(184deg,rgba(0,78,255,0.24)_0%,rgba(222,232,255,0)_100%)]" />

        <header className="relative flex items-center justify-between mb-[159px]">
          <img
            className="w-44 h-[30px]"
            alt="Mutetaxes logo"
            src="/Audit/mutetaxes-logo-1-1.svg"
          />

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="h-auto px-[18px] py-4 rounded-[40px] border-[#21283366] bg-transparent hover:bg-transparent"
            >
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-base">
                Sign In
              </span>
            </Button>

            <Button className="h-auto px-[18px] py-4 rounded-[40px] bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:bg-[linear-gradient(129deg,rgba(104,150,255,0.9)_0%,rgba(0,78,255,0.9)_100%)]">
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#dde7ff] text-base">
                Get Started
              </span>
            </Button>
          </div>
        </header>

        <div className="relative flex flex-col items-center justify-center gap-6 max-w-[960px] mx-auto mb-[272px]">
          <div className="flex flex-col items-center justify-center gap-6">
            <Badge className="h-auto px-[11px] py-2 bg-[#28b44608] rounded-[50px] border-[#28b446] hover:bg-[#28b44608]">
              <div className="flex items-center gap-2.5">
                <CheckIcon className="w-5 h-5 text-[#28b446]" />
                <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#28b446] text-sm">
                  Starting from €799
                </span>
              </div>
            </Badge>

            <div className="relative flex flex-col items-center gap-6">
              <h1 className="flex items-center justify-center text-center [font-family:'Helvetica_Neue-Medium',Helvetica] text-[74px] leading-[83px] tracking-[-1.95px]">
                <span className="font-medium text-[#212833]">
                  Streamline Your&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span className="[font-family:'Georgia-Regular',Helvetica] text-[#004eff]">
                  Hong Kong <br />
                  Statutory Audit
                </span>
              </h1>

              <p className="w-[890px] text-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[27px] leading-[35px] tracking-[-0.64px]">
                Professional audit preparation and coordination services
              </p>

              <img
                className="absolute top-[69px] left-[514px] w-[70px] h-[70px] object-cover"
                alt="Ellipse"
                src="/Audit/ellipse-3.png"
              />
            </div>

            <div className="flex items-center gap-4">
              <Button className="h-auto pl-3 pr-1.5 py-2 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:bg-[linear-gradient(131deg,rgba(104,150,255,0.9)_0%,rgba(0,78,255,0.9)_100%)]">
                <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base mr-[49px]">
                  Prepare for Your Audit
                </span>
                <img
                  className="w-[38px] h-[38px]"
                  alt="Arrow"
                  src="/Audit/arrow.svg"
                />
              </Button>

              <Button
                variant="outline"
                className="h-auto px-8 py-[21px] rounded-[40px] border-[none] bg-transparent hover:bg-transparent before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[40px] before:[background:linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <span className="bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-base [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                  Get Readiness Assessment
                </span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl leading-6 tracking-[-0.64px]">
              Make your annual audit smooth and efficient with expert
              <br />
              documentation and auditor coordination.
            </p>
          </div>
        </div>

        <div className="relative flex justify-center w-full pb-6">
          <div className="w-[33.40%] flex">
            <div className="flex-1 w-[465px] relative">
              <div className="absolute w-[49.68%] h-[49.20%] top-0 left-[28.17%]">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute w-[100.87%] h-full top-0 left-0">
                    <img
                      className="absolute w-[98.71%] h-full top-0 left-0"
                      alt="Vector"
                      src="/Audit/vector-2.svg"
                    />

                    <div className="absolute w-[38.63%] h-[24.63%] top-[9.90%] left-[28.35%] flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004eff] text-[14.5px] tracking-[0] leading-[16.2px]">
                      Company
                      <br />
                      Incorporation
                    </div>

                    <img
                      className="absolute w-[99.14%] h-full top-0 left-0"
                      alt="Vector"
                      src="/Audit/vector-1.svg"
                    />
                  </div>

                  <img
                    className="absolute w-[69.81%] h-0 top-[94.84%] left-[10.36%]"
                    alt="Vector"
                    src="/Audit/vector.svg"
                  />
                </div>

                <img
                  className="absolute w-[76.94%] h-[75.86%] top-[7.34%] left-[8.58%]"
                  alt="Group"
                  src="/Audit/group-3.png"
                />
              </div>

              <img
                className="absolute w-[34.37%] h-[84.62%] top-[14.29%] left-[65.63%]"
                alt="Group"
                src="/Audit/group.png"
              />

              <img
                className="absolute w-[99.92%] h-[13.58%] top-[86.42%] left-0"
                alt="Group"
                src="/Audit/group-1.png"
              />

              <img
                className="absolute w-[62.31%] h-[74.89%] top-[21.91%] left-0"
                alt="Group"
                src="/Audit/group-2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
