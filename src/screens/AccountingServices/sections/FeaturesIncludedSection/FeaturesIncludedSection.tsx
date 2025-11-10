import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
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
        <span className="font-semibold">Sales And Purchase</span>
        <br />
        Invoice Recording
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-semibold">Bank Transaction Import</span> 
        <br />
        And Reconciliation
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        Expense Categorization And <br />
        <span className="font-semibold">Tracking</span>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        Multi-Currency Transaction Management
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        Receipt Digitization <br />
        <span className="font-semibold">And Filing</span>
      </>
    ),
  },
   {
    id: 6,
    text: (
      <>
        Petty Cash Managenment <br />
        {/* <span className="font-semibold">And Filing</span> */}
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
    value: "Bookkeeping & Transaction Processing",
    label: "Bookkeeping & Transaction Processing",
    benefits: taxBenefits,
  },
  {
    value: "Financial Reporting",
    label: "Financial Reporting",
    benefits: strategicBenefits,
  },
  {
    value: "Accounts Management",
    label: "Accounts Management",
    benefits: businessBenefits,
  },
  {
    value: "Tax Accounting",
    label: "Tax Accounting",
    benefits: worldBenefits,
  },
];

export const FeaturesIncludedSection = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-between w-full py-8">
      <div className="flex mx-auto w-full max-w-[952px] flex-col items-center gap-4 px-4">
        <div className="flex flex-col items-start w-full gap-6">
          <div className="flex items-center justify-center w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7 lg:mt-[130px]">
            Accounting Solutions
          </div>

          <h2 className="flex items-center justify-center w-full [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
            Comprehensive Accounting Solutions
          </h2>
        </div>

        <p className="flex items-center justify-center w-full max-w-[702px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[22px] text-center tracking-[-0.64px] leading-[30px] mb-[20px]">
          Full-service accounting tailored to your business needs
        </p>
      </div>

      <div className="w-full max-w-[1276px] min-h-[500px] mx-auto relative bg-[url(/Incorporate/subtract-6.svg)] bg-contain bg-no-repeat bg-center px-4 overflow-hidden">
        <Tabs
          defaultValue={tabsData[0].value}
          className="w-full"
        >
          <div className="flex items-start justify-center mb-6">
            <TabsList className="items-center gap-1.5 bg-transparent h-auto p-0 mx-auto flex justify-center mt-14 mb-10">
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="inline-flex items-center justify-center gap-2.5 px-3 py-3 rounded-[50px] data-[state=active]:bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] data-[state=active]:text-white data-[state=active]:shadow-[0px_24px_34px_#004eff47] data-[state=inactive]:bg-white data-[state=inactive]:text-[#212833] [font-family:'Helvetica_Neue-Medium',Helvetica] data-[state=active]:font-medium data-[state=inactive]:[font-family:'Helvetica_Neue-Regular',Helvetica] data-[state=inactive]:font-normal text-[14px] text-center tracking-[0] leading-6 whitespace-nowrap h-auto"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {tabsData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-0">
              <div className="relative flex items-center justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[60px] gap-y-[52px] p-8">
                  {tab.benefits.map((benefit) => (
                    <div
                      key={benefit.id}
                      className="inline-flex items-start gap-4"
                    >
                      <div className="relative w-6 h-6 mt-1 flex items-center justify-center bg-[#d9e5ff] rounded-full flex-shrink-0">
                        <CheckIcon className="w-4 h-4 text-[#004eff]" />
                      </div>
                      <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833e6] text-xl leading-[30px]">
                        {benefit.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
