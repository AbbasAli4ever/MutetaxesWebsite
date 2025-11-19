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
        <span className="font-medium text-[#212833E5]">Sales And Purchase</span>
        <br />
        <span className="font-normal">Invoice Recording</span>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-medium">Bank Transaction</span> <span className="font-normal">Import</span>
        <br />
        <span className="font-normal">And Reconciliation</span>
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <span className="font-normal">Expense</span>  <span className="font-medium">Categorization</span> <span className="font-normal">And</span>
        <br />
        <span className="font-normal">Tracking</span>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        <span className="font-medium">Multi-Currency</span> <span className="font-normal">Transaction</span>
        <br />
        <span className="font-normal">Management</span>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        <span className="font-normal">Receipt Digitization</span>
        <br />
        <span className="font-normal">And</span>  <span className="font-medium">Filing</span>
      </>
    ),
  },
  {
    id: 6,
    text: (
      <>
        <span className="font-normal">Petty Cash</span>  <span className="font-medium">Management</span>
      </>
    ),
  },
];

const strategicBenefits = [
  {
    id: 1,
    text: (
      <>
        <span className="font-meium">Monthly Profit</span><span className="font-normal"> &</span>
        <br />
        <span className="font-normal">Loss Statements</span>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-normal">Balance Sheet</span>
        <br />
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
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="font-normal">Accounts</span> <span className="font-medium">Payable</span>
        <br />
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
        <span className="font-medium">Credit </span>
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

        <span className="font-medium"> Prepration</span>
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

        <span className="font-normal">IRD Correspondence</span>
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
      <div className="flex mx-auto w-full max-w-[952px] flex-col items-center gap-4 px-4 lg:mt-[130px]">
        <div className="flex flex-col items-start w-full gap-4">
          <div className="flex items-center justify-center w-full font-helvetica font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            Accounting Solutions
          </div>

          <h2 className="flex items-center justify-center w-full font-georgia font-normal text-[#212833] text-[32px]  lg:text-[64px] text-center tracking-[0] leading-tight lg:leading-[72px]">
            Comprehensive Accounting Solutions
          </h2>
        </div>

        <p className="flex items-center justify-center w-full max-w-[702px] font-helvetica font-normal text-[#212833] text-[18px] lg:text-[22px] text-center tracking-[-0.64px] leading-[30px]">
          Full-Service Accounting Tailored To Your Business Needs

        </p>
      </div>

      <Tabs
        defaultValue={tabsData[0].value}
        className="relative z-10 w-full mt-[48px] flex flex-col items-center"
      >
        {/* --- Tabs ABOVE card on large screens --- */}
        <div className="hidden lg:flex w-full justify-center mb-[-40px] z-20">
          <TabsList
            className="
        flex items-center justify-center w-full max-w-[950px] gap-3 bg-transparent
      "
          >
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-[50px]
            data-[state=active]:shadow-[0px_24px_34px_#004eff47]
            data-[state=active]:bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)]
            data-[state=inactive]:bg-white
            font-helvetica font-normal text-[14px] text-center
            data-[state=active]:text-white data-[state=inactive]:text-[#212833]
            whitespace-nowrap transition-all duration-200 lg:mb-[-60px]
          `}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* --- The Notched Card --- */}
        <NotchedCard
          className="z-10 px-4 pt-6 mx-auto md:pt-8 md:px-6"
          widthClass="w-[320px] md:w-[700px] lg:w-[1226px]"
          heightClass="h-auto"
          borderColor="bg-[#D7E3FF]"
          shadowColor="#D7E3FF]"
          notch={{
            width: { base: 0, sm: 200, md: 700, lg: 940 },
            depth: { base: 50, sm: 40, md: 45, lg: 50 },
            bottomRadius: 25,
            topRadius: 25,
          }}
        >
          {/* --- Tabs INSIDE card on small/medium screens --- */}
          <div className="block lg:hidden">
            <TabsList
              className="flex items-center justify-start w-full gap-2 mb-6 overflow-x-auto bg-transparent md:justify-center "
            >
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={`inline-flex items-center justify-center gap-2.5 px-3 py-2 rounded-[50px]
              data-[state=active]:shadow-[0px_24px_34px_#004eff47]
              data-[state=active]:bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)]
              data-[state=inactive]:bg-white
              font-helvetica font-normal text-xs md:text-[17px] text-center
              data-[state=active]:text-white data-[state=inactive]:text-[#212833]
              whitespace-nowrap
            `}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* --- Tabs Content (shared) --- */}
          {tabsData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="pb-10 mt-4">
              <div className="relative flex items-center justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[60px] gap-y-[52px] lg:p-[3rem]">
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




    </section>
  );
};
