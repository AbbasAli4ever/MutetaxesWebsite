import React from "react";
import { Badge } from "../../../../AccountingComponents/ui/badge";
import { Button } from "../../../../AccountingComponents/ui/button";
import { Card, CardContent } from "../../../../AccountingComponents/ui/card";

const pricingPlans = [
  {
    name: "Starter",
    price: "€279",
    description: "Perfect for new businesses,\nfreelancers",
    transactionLimit: "Up To 50 Transactions/month",
    support: { text: "Supprot: ", highlight: "Email" },
    features: [
      "Monthly Bookkeeping",
      "Bank Reconciliation",
      "Basic Financial Statements",
      "Expense Tracking",
      "Cloud Software Setup",
    ],
    isPopular: false,
    hasGradient: false,
  },
  {
    name: "Growth",
    price: "€549",
    description: "Perfect for growing SMEs",
    transactionLimit: "Up To 200 Transactions/month",
    support: { text: "Supprot: ", highlight: "Phone" },
    features: [
      { text: "Everything In Starter, Plus:", bold: true },
      "Accounts Payable/receivable",
      "Payroll (5 Employees)",
      "Management Accounts",
      "Cash Flow Reporting",
      "Budget Tracking",
    ],
    isPopular: true,
    hasGradient: true,
  },
  {
    name: "Professional",
    price: "€999",
    description: "Perfect for established\nbusinesses",
    transactionLimit: "Up To 500 Transactions/month",
    support: {
      text: "",
      highlight: "Weekly Updates",
      text2: ", Priority Support",
    },
    features: [
      { text: "Everything In Growth, Plus:", bold: true },
      "Full Payroll (20 Employees)",
      "Board Reporting Packs",
      "Tax Provision",
      "Audit Preparation",
    ],
    isPopular: false,
    hasGradient: false,
  },
  {
    name: "Enterprise",
    price: "€2,499",
    description: "Perfect for complex operations",
    transactionLimit: "Unlimited Transactions",
    support: { text: "Dedicated Team, ", highlight: "24/7 Support" },
    features: [
      { text: "Everything In Growth, Plus:", bold: true },
      "Full Payroll (20 Employees)",
      "Board Reporting Packs",
      "Tax Provision",
      "Audit Preparation",
    ],
    isPopular: false,
    hasGradient: false,
  },
];

export const HongKongAdvantagesSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center gap-[58px] py-8">
      <header className="flex flex-col items-center gap-4 max-w-[702px] px-4">
        <div className="flex flex-col items-center w-full gap-4">
          <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            Packages
          </div>

          <h2 className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
            Flexible Packages for
            <br />
            Every Business Stage
          </h2>
        </div>

        <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[22px] text-center tracking-[-0.64px] leading-[35px] w-full">
          Choose the plan that fits your needs and scale as you grow
        </p>
      </header>

      <div className="relative flex items-start gap-6 max-w-[1272px] w-full px-4 flex-wrap lg:flex-nowrap justify-center">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`relative w-full lg:w-[300px] h-[812px] rounded-[20px] overflow-hidden ${
              plan.hasGradient
                ? "shadow-[0px_35px_104px_#004eff40]"
                : "bg-white"
            }`}
          >
            {plan.hasGradient && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-217px] left-[-197px] w-[949px] h-[949px] rounded-[474.32px] rotate-[12.34deg] blur-[77.38px] bg-[linear-gradient(226deg,rgba(0,78,255,1)_0%,rgba(222,232,255,0)_100%)]" />
                <div className="absolute top-[-217px] left-[-197px] w-[949px] h-[949px] rounded-[474.32px] rotate-[12.34deg] blur-[77.38px] bg-[linear-gradient(226deg,rgba(0,78,255,1)_0%,rgba(222,232,255,0)_100%)]" />
              </div>
            )}

            <CardContent className="relative h-full p-0">
              <div className="flex flex-col h-full">
                <div className="flex flex-col items-start gap-5 pt-10 px-[17px]">
                  <div className="flex flex-col items-start gap-4">
                    <div
                      className={`[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[54.2px] tracking-[0] leading-[normal] whitespace-nowrap ${
                        plan.hasGradient ? "text-[#004eff]" : "text-[#222222]"
                      }`}
                    >
                      {plan.price}
                      <span className="text-3xl">/month</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-[7px]">
                    <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#222222] text-2xl tracking-[0] leading-7 whitespace-nowrap">
                      {plan.name}
                    </div>

                    <div className="[-webkit-text-stroke:0.9px_#707070] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#65676c] text-lg tracking-[0.45px] leading-6 whitespace-pre-line">
                      {plan.description}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center px-4 mt-[47px]">
                  <Badge className="bg-[#004eff1a] text-[#004eff] hover:bg-[#004eff1a] px-4 py-4 rounded-[40px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-base tracking-[0] leading-[18.5px] h-auto">
                    {plan.transactionLimit}
                  </Badge>
                </div>

                <div className="flex flex-col items-start gap-10 px-[17px] mt-[57px]">
                  <div className="flex flex-col items-start w-full gap-5">
                    <div className="[-webkit-text-stroke:0.9px_#707070] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[22px] tracking-[0.55px] leading-6">
                      Features
                    </div>

                    <div className="flex flex-col items-start gap-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2.5"
                        >
                          <img
                            className="flex-shrink-0 w-6 h-6"
                            alt="Check"
                            src="/AccountingServices/frame.svg"
                          />

                          <div
                            className={`[font-family:'Helvetica_Neue-Regular',Helvetica] text-[#212833e6] text-base tracking-[0] leading-[18.5px] ${
                              typeof feature === "object" && feature.bold
                                ? "[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium"
                                : "font-normal"
                            }`}
                          >
                            {typeof feature === "string"
                              ? feature
                              : feature.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex flex-col items-center gap-3 px-[17px] pb-[45px]">
                  <Button
                    variant="outline"
                    className={`w-[217px] h-[54px] rounded-[28.01px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[16.3px] tracking-[0] ${
                      plan.hasGradient
                        ? "bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] text-white border-0 hover:bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-text-stroke:0.9px_#000000]"
                        : "bg-white text-black border-[1.36px] border-black hover:bg-white"
                    }`}
                  >
                    Get Started
                  </Button>

                  <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px] text-center">
                    {plan.support.text && (
                      <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal">
                        {plan.support.text}
                      </span>
                    )}
                    <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                      {plan.support.highlight}
                    </span>
                    {plan.support.text2 && (
                      <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal">
                        {plan.support.text2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-[calc(50%-24px)] lg:translate-x-0 rounded-[40px] shadow-[0px_4px_24px_#00000040,inset_0px_-3px_6px_#ffffff73] bg-[linear-gradient(90deg,rgba(139,174,255,1)_0%,rgba(4,81,255,1)_100%)] px-[13px] py-3 [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[18.5px] hover:bg-[linear-gradient(90deg,rgba(139,174,255,1)_0%,rgba(4,81,255,1)_100%)] h-auto whitespace-nowrap">
          Most Popular
        </Badge>
      </div>
    </section>
  );
};
