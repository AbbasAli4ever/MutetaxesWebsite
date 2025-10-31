import { CheckIcon } from "lucide-react";
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../IncorporateComponents/ui/tabs";

const taxBenefits = [
  {
    id: 1,
    text: (
      <>
        <span className="font-medium">Corporate Tax:</span>
        <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
          {" "}
          16.5%
          <br />
          (8.25% On First Hk$2m)
        </span>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-medium">No Vat/gst</span>
        <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
          {" "}
          Keeping
          <br />
          prices Competitive
        </span>
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-[30px]">
          No Withholding
          <br />
          tax On{" "}
        </span>
        <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
          Dividends
        </span>
      </>
    ),
  },
];

const taxBenefitsRow2 = [
  {
    id: 4,
    text: (
      <>
        <span className="leading-[30px]">
          Territorial Tax System
          <br />- Only{" "}
        </span>
        <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium leading-[30px]">
          Hk Income
        </span>
        <span className="leading-[30px]"> Taxed</span>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        <span className="leading-[30px]">
          Extensive Network
          <br />
          of{" "}
        </span>
        <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium leading-[30px]">
          Tax Treaties
        </span>
      </>
    ),
  },
];

const tabs = [
  { value: "tax-efficiency", label: "Tax Efficiency" },
  { value: "strategic-access", label: "Strategic Access" },
  { value: "business-freedom", label: "Business Freedom" },
  { value: "world-class-infrastructure", label: "World-Class Infrastructure" },
];

export const ServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-between w-full py-8">
      <div className="flex mx-auto w-full max-w-[952px] flex-col items-center gap-4 px-4">
        <div className="flex flex-col items-start w-full gap-4">
          <div className="flex items-center justify-center w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            Why Incorporate In Hong Kong
          </div>

          <h2 className="flex items-center justify-center w-full [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
            Hong Kong - Asia&#39;s Premier Business Jurisdiction
          </h2>
        </div>

        <p className="flex items-center justify-center w-full max-w-[702px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[22px] text-center tracking-[-0.64px] leading-[30px]">
          Discover the unmatched advantages of establishing
          <br />
          your company in Hong Kong
        </p>
      </div>

      <div className="w-full max-w-[1140px] mx-auto mt-8 px-4">
        <Tabs defaultValue="tax-efficiency" className="w-full">
          <div className="flex items-center justify-center mb-6">
            <TabsList className="inline-flex items-center gap-1.5 bg-transparent h-auto p-0">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="inline-flex items-center justify-center gap-2.5 px-3 py-3 rounded-[50px] data-[state=active]:bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] data-[state=active]:text-white data-[state=active]:shadow-[0px_24px_34px_#004eff47] data-[state=inactive]:bg-white data-[state=inactive]:text-[#212833] [font-family:'Helvetica_Neue-Medium',Helvetica] data-[state=active]:font-medium data-[state=inactive]:[font-family:'Helvetica_Neue-Regular',Helvetica] data-[state=inactive]:font-normal text-[17px] text-center tracking-[0] leading-6 whitespace-nowrap h-auto"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="tax-efficiency" className="mt-0">
            <div className="relative flex items-center justify-center w-full">
              <div className="w-full flex items-center justify-center bg-[url(/subtract-6.svg)] bg-[length:100%_100%] bg-no-repeat py-[74px]">
                <div className="inline-flex flex-col items-start gap-[52px]">
                  <div className="inline-flex items-start gap-[60px]">
                    {taxBenefits.map((benefit) => (
                      <div
                        key={benefit.id}
                        className="inline-flex items-start gap-4 pl-0 pr-[11.64px] pt-0 pb-[14.7px] rounded-[126.82px] shadow-[0px_2.91px_21px_#050f241f] bg-white"
                      >
                        <div className="relative w-6 h-6 flex items-center justify-center bg-[#004EFF] rounded-full flex-shrink-0">
                          <CheckIcon className="w-4 h-4 text-white" />
                        </div>

                        <div className="flex items-center justify-center mt-[-1.05px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-[30px]">
                          {benefit.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-start gap-[60px]">
                    {taxBenefitsRow2.map((benefit) => (
                      <div
                        key={benefit.id}
                        className="inline-flex items-start gap-4 pl-0 pr-[11.64px] pt-0 pb-[14.7px] rounded-[126.82px] shadow-[0px_2.91px_21px_#050f241f] bg-white"
                      >
                        <div className="relative w-6 h-6 flex items-center justify-center bg-[#004EFF] rounded-full flex-shrink-0">
                          <CheckIcon className="w-4 h-4 text-white" />
                        </div>

                        <div className="mt-[-1.05px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-xl leading-5 flex items-center justify-center tracking-[0]">
                          {benefit.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="strategic-access" className="mt-0">
            <div className="relative flex items-center justify-center w-full">
              <div className="w-full flex items-center justify-center bg-[url(/subtract-6.svg)] bg-[length:100%_100%] bg-no-repeat py-[74px]">
                <div className="text-center text-[#212833] text-xl">
                  Strategic Access content
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="business-freedom" className="mt-0">
            <div className="relative flex items-center justify-center w-full">
              <div className="w-full flex items-center justify-center bg-[url(/subtract-6.svg)] bg-[length:100%_100%] bg-no-repeat py-[74px]">
                <div className="text-center text-[#212833] text-xl">
                  Business Freedom content
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="world-class-infrastructure" className="mt-0">
            <div className="relative flex items-center justify-center w-full">
              <div className="w-full flex items-center justify-center bg-[url(/subtract-6.svg)] bg-[length:100%_100%] bg-no-repeat py-[74px]">
                <div className="text-center text-[#212833] text-xl">
                  World-Class Infrastructure content
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
