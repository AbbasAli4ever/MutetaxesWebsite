import React from "react";
import { Card, CardContent } from "../../../../AccountingComponents/ui/card";

const quickbooksFeatures = [
  "650+ Integrations",
  "Real-time Collaboration",
  "Automated Bank Feeds",
  "Mobile Access",
  "Custom Reporting",
];

const xeroFeatures = [
  "Beautiful Interface",
  "Unlimited Users",
  "Project Tracking",
  "Fixed Asset Register",
  "Expense Claims",
];

const keyFeaturesRow1 = [
  "Directors Register",
  "Multi-currency Support",
  "Automated Workflows",
  "Real-time Reporting",
];

const keyFeaturesRow2 = ["Bank Reconciliation", "Document Storage"];

export const PricingPlansSection = (): JSX.Element => {
  return (
    <section className="flex justify-center w-full py-8">
      <div className="flex w-full max-w-[1226px] flex-col items-center gap-16 px-4">
        <header className="flex flex-col w-full max-w-[882px] items-center gap-4">
          <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-[28.1px] lg:mt-[130px]">
            Dashboard
          </div>

          <h1 className="[font-family:'Helvetica] font-normal text-[#212833] text-[64.3px] text-center tracking-[0] leading-[72.4px]">
            Modern Compliance Management Dashboard
          </h1>

          <p className="w-full max-w-[702px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[22px] text-center tracking-[-0.64px] leading-[35px]">
            Manage your company&#39;s compliance from anywhere, anytime
          </p>
        </header>

        <div className="flex flex-col items-center w-full gap-6">
          <div className="flex flex-wrap items-start justify-center w-full gap-6 lg:flex-nowrap">
            <Card className="w-full lg:w-[580px] h-auto border-0 shadow-none bg-transparent">
              <CardContent className="relative p-0 h-[426.69px]">
                <img
                  className="absolute top-[42px] left-0 w-full h-[385px]"
                  alt="Subtract"
                  src="/AccountingServices/subtract-2.svg"
                />

                <div className="absolute left-0.5 top-0 flex w-[83px] h-[83px] items-center justify-center rounded-[23.37px] shadow-[25.39px_26.4px_39.61px_#00b8db47] bg-[linear-gradient(129deg,#96E5F4_0%,#00B8DB_100%)]">
                  <img
                    className="relative object-cover w-14 h-14"
                    alt="Download"
                    src="/AccountingServices/download--82--1.png"
                  />
                </div>


                <div className="absolute left-[26px] top-[131px] flex flex-col w-[334px] items-start gap-4">
                  <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[32px] tracking-[0] leading-[34.1px]">
                    Quickbooks Online
                  </h3>

                  <ul className="flex flex-col items-start gap-3">
                    {quickbooksFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2.5">
                        <img className="w-6 h-6" alt="Frame" src="/AccountingServices/frame.svg" />
                        <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full lg:w-[580px] h-auto border-0 shadow-none bg-transparent">
              <CardContent className="relative p-0 h-[426.69px]">
                <img
                  className="absolute top-[42px] left-px w-full h-[385px]"
                  alt="Subtract"
                  src="/AccountingServices/subtract.svg"
                />

                <div className="absolute left-0 top-0 flex w-[83px] h-[83px] items-center justify-center rounded-[23.37px] shadow-[25.39px_26.4px_39.61px_#004eff47] bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)]">
                  <img
                    className="relative w-[67px] h-[26px]"
                    alt="Download"
                    src="/AccountingServices/download--81--1.png"
                  />
                </div>

                <div className="absolute left-[33px] top-[131px] flex flex-col w-[334px] items-start gap-4">
                  <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[32px] tracking-[0] leading-[34.1px]">
                    Xero
                  </h3>

                  <ul className="flex flex-col items-start gap-3">
                    {xeroFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2.5">
                        <img className="w-6 h-6" alt="Frame" src="/AccountingServices/frame.svg" />
                        <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px] whitespace-nowrap">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full max-w-[1184px] h-auto rounded-[20px] overflow-hidden">
  <img
    src="/AccountingServices/key-features.png"
    alt="Key Features"
    className="w-full h-auto object-cover"
  />
</div>

        </div>
      </div>
    </section>
  );
};
