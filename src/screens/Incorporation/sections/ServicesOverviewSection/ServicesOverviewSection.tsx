import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { CheckIcon } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import NotchedCard from "../../../../UIComponents/NotchedCard";

const taxBenefits = [
  {
    id: 1,
    text: (
      <>
        <span className="font-medium">Corporate Tax:</span> <span className="font-normal">16.5%</span>
        <br />
        <span className="font-normal">(8.25% On First Hk$2m)</span>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-medium">No VAT/GST</span>  <span className="font-normal">Keeping</span>
        <br />
        <span className="font-normal">prices Competitive</span>
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <span className="font-normal">No Withholding tax On</span>  <br />
        <span className="font-medium">Dividends</span>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        <span className="font-normal">Territorial Tax System</span>
        <br />  <span className="font-normal">- Only</span> <span className="font-medium">Hk Income</span> Taxed
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        <span className="font-normal">Extensive Network of</span>  <br />
        <span className="font-medium">Tax Treaties</span>
      </>
    ),
  },
];
const strategicBenefits = [
  {
    id: 1,
    text: (
      <>
       <span className="font-normal">Gateway To</span> <span className="font-medium">1.4 Billion</span>
        <br />
        <span className="font-normal">Chinese Consumers</span>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-medium">CEPA Agreement</span>  <span className="font-normal">For</span>
        <br />
         <span className="font-normal">China Market Access</span>
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <span className="font-medium">Hub</span>
        <span className="font-normal">For Belt & Road</span>
        <br />
         <span className="font-normal">Initiative</span>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
       <span className="font-normal">Free Trade Agreements</span>
        <br /> <span className="font-normal">With</span> <span className="font-medium"> ASEAN</span>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        <span className="font-medium">4-Hour Flight </span>
       <span className="font-normal">To Half The</span>
        <br />
       <span className="font-normal">World's Populatione</span>
      </>
    ),
  },
];
const businessBenefits = [
  {
    id: 1,
    text: (
      <>
       <span className="font-normal">100%</span> <span className="font-medium"> foreign </span>
        <br />
       <span className="font-normal">ownership permitted</span>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
       <span className="font-normal">No minimum capital</span> <span className="font-medium"><br /> <span className="font-normal">requirement (start with HK$1)</span> </span>
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <span className="font-medium">Only 1 director needed (any</span> <br /> <span className="font-normal">nationality)</span>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        <span className="font-medium">No residency</span> <br /> <span className="font-normal">requirements</span>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
       <span className="font-normal">Common</span>
        <span className="font-medium"> law system</span>
      </>
    ),
  },
];
const worldBenefits = [
  {
    id: 1,
    text: (
      <>
        <span className="font-medium">70+ international </span> <span className="font-normal"> banks</span>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-medium">Ranked #3 globally </span> <span className="font-normal">for ease</span>  <br /> <span className="font-normal">of doing business</span>
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <span className="font-meidum">Award-winning</span> <br />
       <span className="font-normal">airport and port</span>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
       <span className="font-normal">Advanced digital</span>  <br />
        <span className="font-medium">infrastructure</span>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
       <span className="font-normal">English as official</span>
        <br /><span className="font-medium"> business language</span>
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
  const [activeTab, setActiveTab] = useState("tax-efficiency"); // ✅ match tab value

  return (
    <section className="flex flex-col w-full gap-10 py-8 mt-0 lg:mt-[120px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 px-4 max-w-[952px] mx-auto">
        <div className="flex flex-col items-start w-full gap-4">
          <div className="w-full flex items-center justify-center font-helvetica font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            Our Services
          </div>
          <h2 className="w-full flex items-center justify-center font-georgia font-normal text-[#212833] text-[40px] md:text-[50px] lg:text-[64px] text-center tracking-[0] leading-[42px] md:leading-[60px] lg:leading-[72px]">
            Everything You Need to Run Your Hong Kong Business
          </h2>
        </div>
        <p className="flex items-center justify-center max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[22px] text-center tracking-[-0.64px] leading-relaxed lg:leading-[35px]">
          Comprehensive solutions tailored for modern businesses
        </p>
      </div>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="relative z-10 w-full mt-12"
      >
        <TabsList className="relative z-20 flex items-center scrollbar-hide justify-start w-[90%] h-auto gap-2 mx-auto overflow-x-auto bg-transparent sm:w-full sm:overflow-x-visible md:justify-center -mb-14 md:-mb-12 lg:-mb-15 xl:-mb-[55px]">
          {tabsData.map((service) => (
            <TabsTrigger
              key={service.value}
              value={service.value} // ✅ use tab.value not label
              className="inline-flex items-center justify-center z-30 gap-2.5 p-1.5 md:p-2 lg:p-3 rounded-[50px] h-auto data-[state=active]:shadow-none sm:data-[state=active]:shadow-[0px_24px_34px_#004eff47] data-[state=active]:bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] bg-white  data-[state=inactive]:bg-[#efefef] sm:data-[state=inactive]:bg-white font-helvetica font-normal text-xs md:text-[15px] text-center tracking-[0] leading-6 whitespace-nowrap data-[state=active]:text-white data-[state=inactive]:text-[#212833] mb-2"
            >
              {service.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <NotchedCard
          notch={{
            width: { base: 0, sm: 200, md: 700, lg: 750 },
            depth: { base: 50, sm: 40, md: 45, lg: 50 },
            bottomRadius: 25,
            topRadius: 25,
          }}
          widthClass="w-full lg:w-[1000px] xl:w-[1300px]"
          heightClass="h-auto lg:h-[400px] xl:h-[400px]"
          shadowColor="#6a98ff"
          className="z-10 px-3"
        >
          {tabsData.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value} // ✅ matches trigger
              className="px-10 pt-32 pb-10"
            >
              <div className="relative flex items-center justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[60px] gap-y-[52px]">
                  {tab.benefits.map((benefit) => (
                    <div
                      key={benefit.id}
                      className="inline-flex items-start gap-4"
                    >
                      <div className="relative w-6 h-6 mt-1 flex items-center justify-center bg-[#d9e5ff] rounded-full flex-shrink-0">
                        <CheckIcon className="w-4 h-4 text-[#004eff]" />
                      </div>
                      <div className="font-helvetica font-medium text-[#212833E5] text-xl leading-[30px]">
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
    </section>
  );
};

