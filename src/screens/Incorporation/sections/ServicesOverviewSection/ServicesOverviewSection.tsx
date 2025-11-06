import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../IncorporateComponents/ui/tabs";
import NotchedCard from "../../../../components/ui/NotchedCard";

const taxBenefits = [
  {
    id: 1,
    text: (
      <>
        <span className="font-semibold">Corporate Tax:</span> 16.5%
        <br />
        8.25% On First Hk$2m
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-semibold">No Vat/gst</span> Keeping
        <br />
        prices Competitive
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        No Withholding tax On <br />
        <span className="font-semibold">Dividends</span>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        Territorial Tax System
        <br />- Only <span className="font-semibold">Hk Income</span> Taxed
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        Extensive Network of <br />
        <span className="font-semibold">Tax Treaties</span>
      </>
    ),
  },
];

const strategicBenefits = [
  {
    id: 1,
    text: (
      <>
        Gateway To<span className="font-semibold">1.4 Billion</span>
        <br />
        Chinese Consumers
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-semibold">CEPA Agreement</span> For
        <br />
        China Market Access
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <span className="font-semibold">Hub</span>
        For Belt & Road
        <br />
        Initiative
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        Free Trade Agreements
        <br /> With<span className="font-semibold"> ASEAN</span>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        <span className="font-semibold">4-Hour Flight </span>
        To Half The
        <br />
        World's Population
      </>
    ),
  },
];

const businessBenefits = [
  {
    id: 1,
    text: (
      <>
        <span className="font-semibold">Corporate Tax:</span> 16.5%
        <br />
        8.25% On First Hk$2m
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-semibold">No Vat/gst</span> Keeping
        <br />
        prices Competitive
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        No Withholding tax On <br />
        <span className="font-semibold">Dividends</span>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        Territorial Tax System
        <br />- Only <span className="font-semibold">Hk Income</span> Taxed
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        Extensive Network of <br />
        <span className="font-semibold">Tax Treaties</span>
      </>
    ),
  },
];

const worldBenefits = [
  {
    id: 1,
    text: (
      <>
        <span className="font-semibold">Corporate Tax:</span> 16.5%
        <br />
        8.25% On First Hk$2m
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-semibold">No Vat/gst</span> Keeping
        <br />
        prices Competitive
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        No Withholding tax On <br />
        <span className="font-semibold">Dividends</span>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        Territorial Tax System
        <br />- Only <span className="font-semibold">Hk Income</span> Taxed
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        Extensive Network of <br />
        <span className="font-semibold">Tax Treaties</span>
      </>
    ),
  },
];

const tabsData = [
  {
    value: "tax-efficiency",
    label: "Tax Efficiency",
    benefits: taxBenefits,
  },
  {
    value: "strategic-access",
    label: "Strategic Access",
    benefits: strategicBenefits,
  },
  {
    value: "business-freedom",
    label: "Business Freedom",
    benefits: businessBenefits,
  },
  {
    value: "world-class-infrastructure",
    label: "World-Class Infrastructure",
    benefits: worldBenefits,
  },
];

export const ServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-between w-full py-8">
      <div className="flex mx-auto w-full max-w-[952px] flex-col items-center gap-4 px-4">
        <div className="flex flex-col items-start w-full gap-4">
          <div className="flex items-center justify-center w-full font-helvetica font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            Why Incorporate In Hong Kong
          </div>

          <h2 className="flex items-center justify-center w-full font-georgia font-normal text-[#212833] text-[32px]  lg:text-[64px] text-center tracking-[0] leading-tight lg:leading-[72px]">
            Hong Kong - Asia&#39;s Premier Business Jurisdiction
          </h2>
        </div>

        <p className="flex items-center justify-center w-full max-w-[702px] font-helvetica font-normal text-[#212833] text-[18px] lg:text-[22px] text-center tracking-[-0.64px] leading-[30px]">
          Discover the unmatched advantages of establishing
          <br />
          your company in Hong Kong
        </p>
      </div>

      <div className="relative w-full max-w-[1276px] mx-auto px-4 flex flex-col items-center">
  <Tabs defaultValue={tabsData[0].value} className="relative z-10 w-full mt-[48px] flex flex-col items-center">
    
    {/* TabsList ABOVE the card (same as example) */}
    <TabsList
      className="
        relative z-20 flex items-center justify-start 
        w-[63%] lg:w-[90%] h-auto gap-2 mx-auto 
        overflow-x-auto bg-transparent sm:w-full 
        sm:overflow-x-visible md:justify-center 
        lg:-mb-14 md:-mb-11 scrollbar-hide 
      "
    >
      {tabsData.map((tab) => (
        <TabsTrigger
          key={tab.value}
          value={tab.value}
          className={`inline-flex items-center justify-center z-30 gap-2.5 p-1.5 md:p-2 lg:p-3 rounded-[50px] h-auto 
            data-[state=active]:shadow-[0px_24px_34px_#004eff47] 
            data-[state=active]:bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] 
            data-[state=inactive]:bg-white 
            font-helvetica font-normal text-xs md:text-[17px] text-center tracking-[0] leading-6 whitespace-nowrap 
            data-[state=active]:text-white data-[state=inactive]:text-[#212833] mb-2
          `}
        >
          {tab.label}
        </TabsTrigger>
      ))}
    </TabsList>

    {/* Notched Card BELOW tabs */}
    <NotchedCard
      className="z-10 mx-auto mt-0 pt-0 md:border-t-0 lg:pt-0 px-3"
      widthClass="w-[320px] md:w-[700px] lg:w-[1226px]"
      heightClass="h-[627px] md:h-[426px] lg:h-[350px]"
      borderColor="bg-[#D7E3FF]"
      shadowColor="#D7E3FF"
      notch={{
        width: { base: 0, sm: 200, md: 700, lg: 750 },
        depth: { base: 50, sm: 40, md: 45, lg: 50 },
        bottomRadius: 25,
        topRadius: 25,
      }}
    >
      {/* TabsContent inside the NotchedCard (matches example) */}
      {tabsData.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="pt-[76px] mt-0">
          <div className="relative flex items-center justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[60px] gap-y-[52px] lg:p-[5rem]">
              {tab.benefits.map((benefit) => (
                <div key={benefit.id} className="inline-flex items-start gap-4">
                  <div className="relative w-6 h-6 mt-1 flex items-center justify-center bg-[#d9e5ff] rounded-full flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-[#004eff]" />
                  </div>
                  <div className="font-helvetica font-medium text-[#212833e6] text-xl leading-[30px]">
                    {benefit.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      ))}
    </NotchedCard>
  </Tabs>
</div>


    </section>
  );
};
