import React from "react";
import { Button } from "../../../../IncorporateComponents/ui/button";
import { Card, CardContent } from "../../../../IncorporateComponents/ui/card";
import { Badge } from "../../../../IncorporateComponents/ui/badge";

const pricingData = [
  {
    price: "€279/month",
    title: "Starter",
    description: "Perfect for new businesses,freelancers",
    badge: "Up to 50 transactions/month",
    features: [
      "Monthly bookkeeping",
      "Bank reconciliation",
      "Basic financial statements",
      "Expense tracking",
      "Cloud software setup"
    ],
    buttonVariant: "outline" as const,
    buttonText: "Get Started",
    support: "Email",
    featured: false,
  },
  {
    price: "€549/month",
    title: "Growth",
    description: "Perfect for growing SMEs",
    badge: "Up to 200 transactions/month",
    features: [
      "Everything in Starter, plus:",
      "Accounts payable/receivable",
      "Payroll (5 employees)",
      "Management accounts",
      "Cash flow reporting",
      "Budget tracking",
    ],
    buttonVariant: "default" as const,
    buttonText: "Get Started",
    support: "Phone",
    featured: true,
  },
  {
    price: "€999/month",
    title: "Professionals",
    description: "Perfect for established businesses",
    badge: "Up to 500 transactions/month",
    features: [
      "Everything in Growth, plus:",
      "Full payroll (20 employees)",
      "Board reporting packs",
      "Tax provision",
      "Audit preparation"
    ],
    buttonVariant: "outline" as const,
    buttonText: "Get Started",
    supportHeading: "Weekly Updates",
    support: "Priority Support",
    featured: false,
  },
  {
    price: "€2,499/month",
    title: "Enterprise",
    description: "Perfect for complex operations",
    badge: "Unlimited transactions",
    features: [
      "Everything in Growth, plus:",
      "Full payroll (20 employees)",
      "Board reporting packs",
      "Tax provision",
      "Audit preparation",
    ],
    buttonVariant: "default" as const,
    buttonText: "Get Started",
    supportHeading: "Dedicated Team",
    support: "24/7 Support",
    featured: false,
  },
];

export const HongKongAdvantagesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full gap-10 py-8">
      {/* Section heading */}
      <div className="flex flex-col items-center gap-4 max-w-[952px] mx-auto px-4">
        <div className="flex flex-col items-start w-full gap-4">
          <div className="w-full text-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl tracking-[0] leading-7 mt-[130px]">
            Packages
          </div>

          <h2 className="w-full text-center [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] tracking-[0] leading-[72px]">
            Flexible Packages for
            Every Business Stage
          </h2>
        </div>

        <p className="text-center max-w-[702px] text-[#212833] text-[22px] tracking-[-0.64px] leading-[35px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal">
          Choose the plan that fits your needs and scale as you grow
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="relative flex justify-center items-start gap-6 px-4 max-w-[1300px] mx-auto w-full">
  {pricingData.map((plan, index) => (
    <div key={index} className="relative flex-1 max-w-[330px]">
      
      {/* ✅ Most Popular Badge */}
      {plan.featured && (
        <Badge className="absolute -top-[15px] left-1/2 -translate-x-[1%] z-20 rounded-[40px] shadow-[0px_4px_24px_#00000040,inset_0px_-3px_6px_#ffffff73] bg-[linear-gradient(90deg,rgba(139,174,255,1)_0%,rgba(4,81,255,1)_100%)] border-0 px-[13px] py-3 h-auto">
          <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[18.5px]">
            Most Popular
          </span>
        </Badge>
      )}

      {/* ✅ Card wrapper with overflow-hidden to contain blur */}
      <Card
        className={`relative w-full h-auto min-h-[710px] rounded-[20px] flex flex-col border-0 overflow-hidden ${
          plan.featured
            ? "shadow-[0px_35px_104px_#004eff40] bg-white"
            : "bg-white"
        }`}
      >
        {/* ✅ Blue blur stays inside the card only */}
        {plan.featured && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute -top-[250px] left-[150px] w-[700px] h-[700px] rounded-full blur-[80px] bg-[rgba(0,78,255,0.6)]" />
          </div>
        )}

        <CardContent className="relative z-10 flex flex-col h-full p-6">
          <div className="flex flex-col gap-5 mb-10">
            <div className="flex flex-col gap-4">
              <div
                className={`[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium xl:text-[40.2px] text-[50.2px] tracking-[0] leading-[normal] ${
                  plan.featured ? "text-[#004eff]" : "text-[#222222]"
                }`}
              >
                {plan.price}
              </div>
            </div>

            <div className="flex flex-col gap-[7px]">
              <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#222222] text-2xl tracking-[0] leading-7 whitespace-nowrap">
                {plan.title}
              </h3>

              <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#65676c] text-lg tracking-[0.45px] leading-6 whitespace-pre-line">
                {plan.description}
              </p>

              <div className="mt-2 px-4 py-2 rounded-full bg-[#004EFF1A] text-[#004EFF] text-sm [font-family:'Helvetica_Neue-Regular',Helvetica]">
                {plan.badge}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-10 mb-10">
            <div className="flex flex-col gap-5">
              <h4 className="[-webkit-text-stroke:0.9px_#707070] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[22px] tracking-[0.55px] leading-6">
                Features
              </h4>

              <div className="flex flex-col gap-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2.5">
                    <img
                      className="flex-shrink-0 w-6 h-6"
                      alt="Check"
                      src="/Incorporate/frame.svg"
                    />
                    <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        {/* Button + Support */}
        <div className="absolute flex-col items-center justify-center w-full mt-auto bottom-10 z-10">
          <Button
            variant={plan.buttonVariant}
            className={`h-auto w-[217px] rounded-[28.01px] py-[15px] px-6 ${
              plan.featured
                ? "bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] text-white border-0 hover:opacity-90 ml-[40px]"
                : "bg-white border-[1.36px] border-black text-black hover:bg-gray-50 ml-[40px]"
            }`}
          >
            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[16.3px] tracking-[0] leading-[normal]">
              {plan.buttonText}
            </span>
          </Button>
          <div className="text-center mt-3">
            <h1 className="text-sm text-black">
              {plan.supportHeading
                ? `${plan.supportHeading}:`
                : "Support:"}{" "}
              {plan.support}
            </h1>
          </div>
        </div>
      </Card>
    </div>
  ))}
</div>

    </section>
  );
};
