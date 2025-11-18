import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import NotchedCard from "../../../../UIComponents/NotchedCard";

const services = [
  {
    id: "incorporation",
    label: "Incorporation",
    title: "Company Incorporation",
    subtitle: "Register your Hong Kong limited company in as fast as 1 day",
    features: [
      {
        text: (
      <>
        <span className="font-medium">Company name</span> search and reservation
      </>
    ),
      },
      {
        text: (
      <>
        <span className="font-normal">Complete</span> <span className="font-medium">government registration</span>
      </>
    ),
      },
      {
       text: (
      <>
        <span className="font-normal">Company kit with</span> <span className="font-medium">chops and seals</span>
      </>
    ),
      },
      {
        text: (
      <>
        <span className="font-medium">First year</span> <span className="font-normal">registered office included</span>
      </>
    ),
      },
    ],
    price: "€279",
    image: "/HomePage/incorp.png",
    buttonText: "Incorporation",
  },
  {
    id: "secretary",
    label: "Secretary",
    title: "Company Secretary Services",
    subtitle: "Stay 100% compliant with statutory requirements",
    features: [
      {
        text: (
      <>
        <span className="font-normal">Annual</span> <span className="font-medium">return filing</span>
      </>
    ),
      },
      {
       text: (
      <>
        <span className="font-medium">Board</span> <span className="font-normal">resolutions and minutes</span>
      </>
    ),
      },
      {
        text: (
      <>
        <span className="font-normal">Regulatory</span> <span className="font-medium">compliance management</span>
      </>
    ),
      },
      {
       text: (
      <>
        <span className="font-medium">Registered</span> <span className="font-normal">office address</span>
      </>
    ),
      },
    ],
    price: "€99/month",
    image: "/HomePage/sectry.jpg",
    buttonText: "Company Secretary",
  },
  {
    id: "accounting",
    label: "Accounting Services",
    title: "Accounting Services",
    subtitle: "Professional bookkeeping and financial reporting",
    features: [
      {
        text: (
      <>
        <span className="font-medium">Monthly bookkeeping</span> <span className="font-normal">and reconciliation</span>
      </>
    ),
      },
      {
       text: (
      <>
        <span className="font-medium">Financial statements</span> <span className="font-normal">preparation</span>
      </>
    ),
      },
      {
        text: (
      <>
        <span className="font-normal">Tax-ready</span> <span className="font-medium">accounting</span>
      </>
    ),
      },
      {
        text: (
      <>
        <span className="font-normal">Cloud-based</span> <span className="font-medium">platform access</span>
      </>
    ),
      },
    ],
    price: "€279/month",
    image: "/HomePage/acount.jpg",
    buttonText: "Accounting Services",
  },
  {
    id: "tax",
    label: "Tax Services",
    title: "Tax Services",
    subtitle: "Strategic tax planning and compliance",
    features: [
      {
text: (
      <>
        <span className="font-medium">Profits tax</span>  <span className="font-normal">return filing</span> 
      </>
    ),      },
      {
       text: (
      <>
        <span className="font-normal">Tax</span>  <span className="font-medium">planning</span> advisory
      </>
    ), 
      },
      {
        text: (
      <>
        <span className="font-normal">IRD</span>  <span className="font-medium">correspondence</span> 
      </>
    ), 
      },
      {
        text: (
      <>
        <span className="font-medium">Offshore claims</span>  <span className="font-normal">assistance</span> 
      </>
    ), 
      },
    ],
    price: "€399/year",
    image: "/HomePage/taxfile.png",
    buttonText: "Taxation",
  },
  {
    id: "audit",
    label: "Audit Support",
    title: "Audit Support",
    subtitle: "Streamline your annual statutory audit",
    features: [
      {
        text: (
      <>
        <span className="font-medium">Document</span> preparation
      </>
    ),
      },
      {
       text: (
      <>
        <span className="font-normal">Auditor</span> <span className="font-medium">coordination</span>
      </>
    ),
      },
      {
       text: (
      <>
        <span className="font-normal">Working papers</span> <span className="font-medium">compilation</span>
      </>
    ),
      },
      {
 text: (
      <>
        <span className="font-medium">
Query resolution</span> <span className="font-normal">support</span>
      </>
    ),      },
    ],
    price: "€799",
    image: "/HomePage/audit.png",
    buttonText: "Audit Support",
  },
];

export const ServicesSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("incorporation");

  return (
    <section className="flex flex-col w-full gap-10 py-8 mt-16">
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
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="relative z-10 w-full mt-0"
      >
        <TabsList className="relative z-20 flex items-center scrollbar-hide justify-start w-[90%] h-auto gap-2 mx-auto overflow-x-auto bg-transparent sm:w-full sm:overflow-x-visible md:justify-center -mb-14 md:-mb-12 lg:-mb-14">
          {services.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.id}
              className={`inline-flex items-center justify-center z-30 gap-2.5 p-1.5 md:p-2 lg:p-3 rounded-[50px] h-auto data-[state=active]:shadow-none sm:data-[state=active]:shadow-[0px_24px_34px_#004eff47] data-[state=active]:bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] bg-white  data-[state=inactive]:bg-[#efefef] sm:data-[state=inactive]:bg-white font-helvetica font-normal text-xs md:text-[16px] text-center tracking-[0] leading-6 whitespace-nowrap data-[state=active]:text-white data-[state=inactive]:text-[#212833] mb-2`}
            >
              {service.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <NotchedCard
          notch={{
            width: { base: 0, sm: 200, md: 700, lg: 750 }, // px values for each screen size
            depth: { base: 50, sm: 40, md: 45, lg: 50 }, // px values for each screen size
            bottomRadius: 25,
            topRadius: 25,
          }}
          widthClass="w-full lg:w-[1000px] xl:w-[1300px]"
          heightClass="h-auto lg:h-[520px] xl:h-[450px]"
          shadowColor="#6a98ff"
          className="z-10 px-3"
        >
          {services.map((service) => (
            <TabsContent
              key={service.id}
              value={service.id}
              className="pt-20 mt-0"
            >
              <div className="flex flex-col justify-center h-full w-full md:w-[90%] mx-auto items-center lg:items-start gap-8 lg:flex-row">
                <div className="flex flex-col items-center flex-1 gap-12 sm:items-start">
                  <div className="flex flex-col items-start gap-6">
                    <div className="flex flex-col items-center w-full gap-2 sm:items-start">
                      <h3 className="font-helvetica font-medium text-[#212833] text-2xl md:text-[40px] tracking-[0] leading-[35px]">
                        {service.title}
                      </h3>

                      <p className="font-helvetica font-normal text-[#212833cc] text-xs md:text-xl tracking-[0] leading-7">
                        {service.subtitle}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full sm:w-auto">
                      <div className="flex flex-col items-center gap-3 sm:items-start">
                        <div className="flex items-center justify-center font-helvetica font-medium text-[#212833] text-xl tracking-[0] leading-7 whitespace-nowrap">
                          Key Features:
                        </div>

                        <div className="grid items-center justify-center grid-cols-1 gap-4 md:grid-cols-2 sm:justify-start sm:items-start">
                          {service.features.map((feature, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="flex items-center justify-center px-3.5 py-[7px] bg-white rounded-[50px] border border-solid border-[#2128333d] h-auto [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833cc] text-sm tracking-[0] leading-7 whitespace-nowrap"
                            >
                              <span className="font-helvetica">
                                {feature.text}
                              </span>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-center md:justify-start gap-8 md:gap-[154px] flex-wrap">
                    <div className="flex flex-col items-center justify-center gap-1 sm:items-start">
                      <div className="flex items-center justify-center font-helvetica font-medium text-[#212833cc] text-sm tracking-[0] leading-5 whitespace-nowrap">
                        Starting Price
                      </div>

                      <div className="flex items-center justify-center font-helvetica font-medium text-[#004eff] text-[32px] tracking-[0] leading-[35px] whitespace-nowrap">
                        {service.price}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="group inline-flex gap-2.5 pl-3 pr-1.5 py-1.5 transition-all duration-500 ease-in-out hover:bg-[#3b77ff] rounded-[100px] border-[1.5px] border-solid border-[#004eff] items-center justify-center h-auto bg-transparent "
                    >
                      <span className="flex items-center justify-center font-helvetica font-medium text-[#004eff] transition-all duration-500 ease-in-out group-hover:text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                        {`Go to ${service.buttonText}`}
                      </span>

                      <img
                        className="w-[38px] h-[38px] transition-all duration-500 ease-in-out group-hover:-rotate-45"
                        alt="Arrow"
                        src="/HomePage/arrow.svg"
                      />
                    </Button>
                  </div>
                </div>

                <img
                  className="w-full max-w-md  lg:w-[28.71%] h-auto xl:h-[352px] lg:h-[290px] object-cover"
                  alt="Company registration"
                  src={service.image}
                />
              </div>
            </TabsContent>
          ))}
        </NotchedCard>
      </Tabs>
    </section>
  );
};
