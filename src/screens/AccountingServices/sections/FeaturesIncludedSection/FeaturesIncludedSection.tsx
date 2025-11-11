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
        <span className="font-medium text-[#212833E5]">Sales and purchase</span>
        <span className="font-medium text-[#212833E5]">Sales and purchase</span>
        <br />
        <span className="font-normal">invoice recording</span>
        <span className="font-normal">invoice recording</span>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
       <span className="font-medium">Bank transaction</span> <span className="font-normal">import</span>
        <br />
      <span className="font-normal">and reconciliation</span>
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
      <span className="font-normal">Expense</span>  <span className="font-medium">categorization</span> <span className="font-normal">and</span>
        <br />
       <span className="font-normal">tracking</span>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        <span className="font-medium">Multi-Currency</span> <span className="font-normal">Transaction</span>
        <span className="font-medium">Multi-Currency</span> <span className="font-normal">Transaction</span>
        <br />
        <span className="font-normal">Management</span>
        <span className="font-normal">Management</span>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
       <span className="font-normal">Receipt digitization</span>
<br />
       <span className="font-normal">and</span>  <span className="font-medium">filing</span>
       <span className="font-normal">and</span>  <span className="font-medium">filing</span>
      </>
    ),
  },
   {
    id: 6,
    text: (
      <>
       <span className="font-normal">Petty cash</span>  <span className="font-medium">management</span>
       <span className="font-normal">Petty cash</span>  <span className="font-medium">management</span>
      </>
    ),
  },
];
const strategicBenefits = [
  {
    id: 1,
    text: (
      <>
        <span className="font-meium">Monthly Profit</span><span className="font-normal">&</span>
        <span className="font-meium">Monthly Profit</span><span className="font-normal">&</span>
        <br />
        <span className="font-normal">Loss statements</span>
        <span className="font-normal">Loss statements</span>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-normal">Balance Sheet</span>
        <span className="font-normal">Balance Sheet</span>
        <br />
        <span className="font-medium">Prepration</span>
        <span className="font-medium">Prepration</span>
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <span className="font-normal">Cash Flow </span>
        <span className="font-medium">Statements</span>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        <span className="font-normal">Management</span>
        <br /> <span className="font-medium"> Accounts</span>
        <span className="font-normal">Management</span>
        <br /> <span className="font-medium"> Accounts</span>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        <span className="font-normal">Budget Vs </span>
       <span className="font-medium">Actual</span>
        <br />
        <span className="font-medium">Analysis</span>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        <span className="font-normal">Custom </span>
       <span className="font-medium">Financial Reports</span>
      </>
    ),
  },
];
const businessBenefits = [
  {
    id: 1,
    text: (
      <>
        <span className="font-medium">Accounts</span> <span className="font-normal">Receiveable</span>
        <br />
        <span className="font-normal">Tracking</span>
        <span className="font-normal">Tracking</span>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-normal">Accounts</span> <span className="font-medium">Payable</span>
        <span className="font-normal">Accounts</span> <span className="font-medium">Payable</span>
        <br />
        <span className="font-medium">Processing</span>
        <span className="font-medium">Processing</span>
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <span className="font-normal">Customer </span>
        <span className="font-medium">Invoicing</span>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        <span className="font-normal">Vendor</span> <span className="font-medium">Paymnet</span>
        <br />  <span className="font-normal">Scheduling</span>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
       <span className="font-normal">Cash Flow </span>
        <span className="font-medium">Management</span>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
       <span className="font-medium">Credit</span>
        <span className="font-normal">Control</span>
      </>
    ),
  },
];
const worldBenefits = [
  {
    id: 1,
    text: (
      <>
        <span className="font-medium">Tax Provision </span>
        <span className="font-normal">Calculation</span>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-normal">Profits Tax</span>
       <span className="font-medium">Prepration</span>
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <span className="font-normal">Tax Depreciation Schedules</span>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
       <span className="font-medium">Offshore </span>
         <span className="font-normal">Claim Support</span>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        <span className="font-normal">IRD Correspondense</span>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        <span className="font-normal">Tax-Efficient Planing</span>
      </>
    ),
  },
];

const tabsData = [
  {
    value: "bookkeeping-transaction-processing",
    label: "Bookkeeping & Transaction Processing",
    benefits: taxBenefits,
  },
  {
    value: "financial-reporting",
    label: "Financial Reporting",
    benefits: strategicBenefits,
  },
  {
    value: "accounts-management",
    label: "Accounts Management",
    benefits: businessBenefits,
  },
  {
    value: "tax-accounting",
    label: "Tax Accounting",
    benefits: worldBenefits,
  },
];

export const FeaturesIncludedSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("bookkeeping-transaction-processing"); // ✅ match tab value

  return (
    <section className="flex flex-col w-full gap-10 py-8">
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
            width: { base: 0, sm: 200, md: 700, lg: 875 },
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

