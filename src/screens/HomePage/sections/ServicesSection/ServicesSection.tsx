import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

const services = [
  {
    id: "incorporation",
    label: "Incorporation",
    title: "Company Incorporation",
    subtitle: "Register your Hong Kong limited company in as fast as 5 days",
    features: [
      {
        text: "Company name",
        boldText: "Company name",
        regularText: " search and reservation",
      },
      {
        text: "Complete government registration",
        boldText: "registration",
        regularText: "Complete government ",
      },
      {
        text: "Company kit with chops and seals",
        boldText: "chops and seals",
        regularText: "Company kit with ",
      },
      {
        text: "First year registered office included",
        boldText: "First year",
        regularText: " registered office included",
      },
    ],
    price: "€279",
    image: "/HomePage/company-registration-1.png",
  },
  {
    id: "secretary",
    label: "Secretary",
    title: "Company Secretary",
    subtitle: "Professional company secretary services",
    features: [
      {
        text: "Company name",
        boldText: "Company name",
        regularText: " search and reservation",
      },
      {
        text: "Complete government registration",
        boldText: "registration",
        regularText: "Complete government ",
      },
      {
        text: "Company kit with chops and seals",
        boldText: "chops and seals",
        regularText: "Company kit with ",
      },
      {
        text: "First year registered office included",
        boldText: "First year",
        regularText: " registered office included",
      },
    ],
    price: "€279",
    image: "/HomePage/company-registration-1.png",
  },
  {
    id: "accounting",
    label: "Accounting Services",
    title: "Accounting Services",
    subtitle: "Professional accounting services",
    features: [
      {
        text: "Company name",
        boldText: "Company name",
        regularText: " search and reservation",
      },
      {
        text: "Complete government registration",
        boldText: "registration",
        regularText: "Complete government ",
      },
      {
        text: "Company kit with chops and seals",
        boldText: "chops and seals",
        regularText: "Company kit with ",
      },
      {
        text: "First year registered office included",
        boldText: "First year",
        regularText: " registered office included",
      },
    ],
    price: "€279",
    image: "/HomePage/company-registration-1.png",
  },
  {
    id: "tax",
    label: "Tax Services",
    title: "Tax Services",
    subtitle: "Professional tax services",
    features: [
      {
        text: "Company name",
        boldText: "Company name",
        regularText: " search and reservation",
      },
      {
        text: "Complete government registration",
        boldText: "registration",
        regularText: "Complete government ",
      },
      {
        text: "Company kit with chops and seals",
        boldText: "chops and seals",
        regularText: "Company kit with ",
      },
      {
        text: "First year registered office included",
        boldText: "First year",
        regularText: " registered office included",
      },
    ],
    price: "€279",
    image: "/HomePage/company-registration-1.png",
  },
  {
    id: "audit",
    label: "Audit Support",
    title: "Audit Support",
    subtitle: "Professional audit support services",
    features: [
      {
        text: "Company name",
        boldText: "Company name",
        regularText: " search and reservation",
      },
      {
        text: "Complete government registration",
        boldText: "registration",
        regularText: "Complete government ",
      },
      {
        text: "Company kit with chops and seals",
        boldText: "chops and seals",
        regularText: "Company kit with ",
      },
      {
        text: "First year registered office included",
        boldText: "First year",
        regularText: " registered office included",
      },
    ],
    price: "€279",
    image: "/HomePage/company-registration-1.png",
  },
];

export const ServicesSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("incorporation");

  return (
    <section className="flex flex-col w-full gap-10 py-8">
      <div className="flex flex-col items-center gap-4 px-4 max-w-[952px] mx-auto">
        <div className="flex flex-col items-start w-full gap-4">
          <div className="w-full flex items-center justify-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            Our Services
          </div>

          <h2 className="w-full flex items-center justify-center [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
            Everything You Need to Run Your Hong Kong Business
          </h2>
        </div>

        <p className="flex items-center justify-center max-w-[702px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[22px] text-center tracking-[-0.64px] leading-[35px]">
          Comprehensive solutions tailored for modern businesses
        </p>
      </div>

      <div className="w-full max-w-[1276px] min-h-[500px] mx-auto relative bg-[url(/HomePage/subtract-2.svg)] bg-contain bg-no-repeat bg-center px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className=" items-center gap-1.5 bg-transparent h-auto p-0 mx-auto flex justify-center mb-12">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className={`inline-flex items-center justify-center gap-2.5 p-3 rounded-[50px] h-auto data-[state=active]:shadow-[0px_24px_34px_#004eff47] data-[state=active]:bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] data-[state=inactive]:bg-white [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[17px] text-center tracking-[0] leading-6 whitespace-nowrap data-[state=active]:text-white data-[state=inactive]:text-[#212833]`}
              >
                {service.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <div className="flex flex-col w-[90%] mx-auto items-start gap-8 lg:flex-row">
                <div className="flex flex-col items-start flex-1 gap-12">
                  <div className="flex flex-col items-start gap-6">
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[40px] tracking-[0] leading-[35px] whitespace-nowrap">
                        {service.title}
                      </h3>

                      <p className="flex items-center justify-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833cc] text-xl tracking-[0] leading-7 whitespace-nowrap">
                        {service.subtitle}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                      <div className="flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-xl tracking-[0] leading-7 whitespace-nowrap">
                        Key Features:
                      </div>

                      <div className="flex flex-col items-start gap-4">
                        <div className="flex flex-wrap items-start gap-4">
                          <Badge
                            variant="outline"
                            className="inline-flex items-center justify-center gap-2.5 px-3.5 py-[7px] bg-white rounded-[50px] border border-solid border-[#2128333d] h-auto [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833cc] text-base tracking-[0] leading-7 whitespace-nowrap"
                          >
                            <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                              {service.features[0].boldText}
                            </span>
                            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                              {service.features[0].regularText}
                            </span>
                          </Badge>

                          <Badge
                            variant="outline"
                            className="inline-flex items-center justify-center gap-2.5 px-3.5 py-[7px] rounded-[40px] border border-solid border-[#2128333d] h-auto [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833cc] text-base tracking-[0] leading-7 whitespace-nowrap"
                          >
                            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833cc] text-base tracking-[0] leading-7">
                              {service.features[1].regularText}
                            </span>
                            <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                              {service.features[1].boldText}
                            </span>
                          </Badge>
                        </div>

                        <div className="flex flex-wrap items-start gap-4">
                          <Badge
                            variant="outline"
                            className="inline-flex items-center justify-center gap-2.5 px-3.5 py-[7px] bg-white rounded-[50px] border border-solid border-[#2128333d] h-auto [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833cc] text-base tracking-[0] leading-7 whitespace-nowrap"
                          >
                            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833cc] text-base tracking-[0] leading-7">
                              {service.features[2].regularText}
                            </span>
                            <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                              {service.features[2].boldText}
                            </span>
                          </Badge>

                          <Badge
                            variant="outline"
                            className="inline-flex items-center justify-center gap-2.5 px-3.5 py-[7px] rounded-[40px] border border-solid border-[#2128333d] h-auto [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833cc] text-base tracking-[0] leading-7 whitespace-nowrap"
                          >
                            <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                              {service.features[3].boldText}
                            </span>
                            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                              {service.features[3].regularText}
                            </span>
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center gap-[154px] flex-wrap">
                    <div className="inline-flex flex-col items-start justify-center gap-1">
                      <div className="flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833cc] text-sm tracking-[0] leading-5 whitespace-nowrap">
                        Starting Price
                      </div>

                      <div className="flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004eff] text-[32px] tracking-[0] leading-[35px] whitespace-nowrap">
                        {service.price}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="inline-flex gap-2.5 pl-3 pr-1.5 py-1.5 rounded-[100px] border-[1.5px] border-solid border-[#004eff] items-center justify-center h-auto bg-transparent hover:bg-[#004eff]/10"
                    >
                      <span className="flex items-center justify-center [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004eff] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                        Go to Incorporation
                      </span>

                      <img
                        className="w-[38px] h-[38px]"
                        alt="Arrow"
                        src="/HomePage/arrow.svg"
                      />
                    </Button>
                  </div>
                </div>

                <img
                  className="w-full lg:w-[28.71%] h-auto lg:h-[352px] object-cover"
                  alt="Company registration"
                  src={service.image}
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
