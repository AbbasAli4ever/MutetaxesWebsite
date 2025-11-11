import React from "react";
import { Card, CardContent } from "../../../../SacretaryComponents/ui/card";

const features = [
  {
    title: "HKICS Qualified Team",
    description: "Licensed professionals with 15+ years experience",
    icon: "/Secretary/container.svg",
  },
  {
    title: "100% Compliance Record",
    description: "Licensed professionals with 15+\nyears experience",
    icon: "/Secretary/container.svg",
  },
  {
    title: "Fixed Transparent Pricing",
    description: "No hidden fees or surprises",
    icon: "/Secretary/container.svg",
  },
  {
    title: "Same-Day Response",
    description: "Urgent matters handled immediately",
    icon: "/Secretary/container.svg",
  },
  {
    title: "Digital Platform",
    description: "24/7 access to all documents",
    icon: "/Secretary/container.svg",
  },
  {
    title: "Multi-lingual Support",
    description: "English, Cantonese, Mandarin",
    icon: "/Secretary/container.svg",
  },
];

export const BankingServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full gap-12 py-10">
      <div className="flex flex-col items-center gap-6 max-w-[980px] mx-auto px-4">
         <p className="w-full text-center font-helvetica font-normal text-[#21283399] text-xl md:text-2xl tracking-[0] leading-7">
            Compliance Partner
          </p>

          <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            Your Trusted Compliance Partner
          </h2>

        <p className="text-center max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[22px] tracking-[-0.64px] leading-relaxed lg:leading-[35px]">
          Why businesses choose Mute Taxes for company secretary services
        </p>
      </div>

      <div className="flex flex-col items-center gap-[13px] max-w-[1117px] mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[17px] w-full">
          {features.slice(0, 3).map((feature, index) => (
            <Card
              key={index}
              className="bg-white rounded-[10px] border border-solid border-[#0000001a]"
            >
              <CardContent className="flex items-start gap-2 p-4">
                <img
                  className="flex-shrink-0 w-8 h-8"
                  alt="Feature icon"
                  src={feature.icon}
                />
                <div className="flex flex-col flex-1 gap-3">
                  <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-2xl tracking-[0] leading-5">
                    {feature.title}
                  </h3>
                  <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-base tracking-[0] leading-[17px] whitespace-pre-line">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[17px] w-full">
          {features.slice(3, 6).map((feature, index) => (
            <Card
              key={index}
              className="bg-white rounded-[10px] border border-solid border-[#0000001a]"
            >
              <CardContent className="flex items-start gap-2 p-4">
                <img
                  className="flex-shrink-0 w-8 h-8"
                  alt="Feature icon"
                  src={feature.icon}
                />
                <div className="flex flex-col flex-1 gap-3">
                  <h3 className="font-helvetica font-medium text-[#212833] text-2xl tracking-[0] leading-5">
                    {feature.title}
                  </h3>
                  <p className="font-helvetica  text-[#212833] text-base font-extralight tracking-[0] leading-[17px]">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
