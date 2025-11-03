import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../AuditComponents/ui/badge";
import { Button } from "../../../../AuditComponents/ui/button";
import { Card, CardContent } from "../../../../AuditComponents/ui/card";

const pricingPlans = [
  {
    name: "Basic",
    price: "€799",
    description: "Perfect for simple audits,\ndormant companies",
    revenueRange: "Up To Hk$1m Annual Revenue",
    support: "Email",
    features: [
      "Trial Balance Preparation",
      "Basic Reconciliations",
      "Document Organization",
      "Auditor Liaison",
      "Report Review",
    ],
    featured: false,
  },
  {
    name: "Standard",
    price: "€1,499",
    description: "Perfect for typical SMEs",
    revenueRange: "Up To Hk$10m Annual Revenue",
    support: "Phone",
    features: [
      "Everything In Basic, Plus:",
      "Full Reconciliations",
      "Working Papers Preparation",
      "Sample Coordination",
      "Management Letter Assistance",
    ],
    featured: true,
    featuredLabel: "Most Popular",
  },
  {
    name: "Comprehensive",
    price: "€2,499",
    description: "Perfect for complex structures",
    revenueRange: "Up To Hk$50m Annual Revenue",
    support: "Priority Support",
    features: [
      "Everything In Standard, Plus:",
      "Detailed Variance Analysis",
      "On-site Support Available",
      "Multiple Subsidiary Coordination",
      "Priority Response",
    ],
    featured: false,
  },
  {
    name: "Enterprise",
    price: "€4,999+",
    description: "Perfect for large operations",
    revenueRange: "Hk$50m+ Annual Revenue",
    support: "Dedicated Team",
    features: [
      "Everything In\ncomprehensive, Plus:",
      "Dedicated Audit Manager",
      "Group Consolidation Support",
      "Full On-site Presence",
      "Custom Reporting",
    ],
    featured: false,
  },
];

export const WhyHongKongSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center gap-[58px] py-8">
      <header className="flex flex-col items-center gap-4 max-w-[702px] px-4">
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            Packages
          </p>

          <h2 className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px] whitespace-nowrap">
            Audit Support Packages
          </h2>
        </div>

        <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[22px] text-center tracking-[-0.64px] leading-[35px] w-full">
          Choose the plan that fits your needs and scale as you grow
        </p>
      </header>

      <div className="relative w-full max-w-[1272px] px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.featured && (
                <Badge className="absolute -top-4 left-52 -translate-x-1/2 z-10 rounded-[40px] shadow-[0px_4px_24px_#00000040,inset_0px_-3px_6px_#ffffff73] bg-[linear-gradient(90deg,rgba(139,174,255,1)_0%,rgba(4,81,255,1)_100%)] border-0 px-[13px] py-3 h-auto">
                  <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[18.5px] whitespace-nowrap">
                    {plan.featuredLabel}
                  </span>
                </Badge>
              )}

              <Card
                className={`h-[812px] rounded-[20px] border-0 ${
                  plan.featured
                    ? "shadow-[0px_35px_104px_#004eff40] overflow-hidden relative"
                    : "bg-white"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-[-270px] left-[200px] rotate-[-30deg] w-[500px] h-[600px] rounded-[474.32px]  blur-[77.38px] bg-[#004EFF]" />
                )}

                <CardContent className="relative flex flex-col h-full p-0">
                  <div className="flex flex-col items-start gap-5 pt-10 px-[17px]">
                    <div className="flex flex-col items-start gap-4">
                      <h3
                        className={`[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[54.2px] tracking-[0] leading-[normal] whitespace-nowrap ${
                          plan.featured ? "text-[#004eff]" : "text-[#222222]"
                        }`}
                      >
                        {plan.price}
                      </h3>
                    </div>

                    <div className="flex flex-col items-start gap-[7px]">
                      <h4 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#222222] text-2xl tracking-[0] leading-7 whitespace-nowrap">
                        {plan.name}
                      </h4>

                      <p className="[ [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#65676c] text-lg tracking-[0.45px] leading-6 whitespace-pre-line">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center mx-auto w-full mt-[67px] absolute top-40">
                    <Badge className="bg-[#004eff1a] hover:bg-[#004eff1a] border-0 rounded-[40px] px-4 py-4 h-auto">
                      <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#004eff] text-base text-center tracking-[0] leading-[18.5px] whitespace-nowrap">
                        {plan.revenueRange}
                      </span>
                    </Badge>
                  </div>

                  <div className="flex flex-col items-start gap-10 mt-[37px] px-[17px] absolute top-72">
                    <div className="flex flex-col items-start w-full gap-5">
                      <h5 className="[ [font-family:'Helvetica_Neue-Medium',Helvetica] font-semibold text-[#212833] text-[22px] tracking-[0.55px] leading-6">
                        Features
                      </h5>

                      <div className="flex flex-col items-start justify-center gap-3">
                        {plan.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start justify-center gap-2.5"
                          >
                            <img src="/Audit/frame.svg" alt="tick icon" width={24} height={24} />
                            <p
                              className={`[font-family:'Helvetica_Neue-Regular',Helvetica] text-[#212833e6] text-base tracking-[0] leading-[18.5px] ${
                                featureIndex === 0 &&
                                (
                                  plan.name === "Standard" ||
                                    plan.name === "Comprehensive" ||
                                    plan.name === "Enterprise"
                                )
                                  ? "[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium"
                                  : "font-normal"
                              } ${
                                feature.includes("\n")
                                  ? "whitespace-pre-line"
                                  : "whitespace-nowrap"
                              }`}
                            >
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col items-center gap-3 px-[42px] pb-[45px]">
                    <Button
                      variant="outline"
                      className={`w-[217px] h-[54px] rounded-[28.01px] ${
                        plan.featured
                          ? "bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] border-0 text-white hover:bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:text-white "
                          : "bg-white border-[1.36px] border-solid border-black text-black hover:bg-white hover:text-black"
                      } [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[16.3px] tracking-[0] leading-[normal]`}
                    >
                      Get Started
                    </Button>

                    <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px] text-center whitespace-nowrap">
                      {plan.support.includes("Supprot:") ? (
                        <>
                          <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px]">
                            Supprot:{" "}
                          </span>
                          <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                            {plan.support.replace("Supprot: ", "")}
                          </span>
                        </>
                      ) : plan.support === "Phone" ? (
                        <>
                          <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px]">
                            Supprot:{" "}
                          </span>
                          <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                            Phone
                          </span>
                        </>
                      ) : (
                        plan.support
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
