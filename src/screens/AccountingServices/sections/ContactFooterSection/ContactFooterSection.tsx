import React from "react";
import { Button } from "../../../../AccountingComponents/ui/button";
import { Input } from "../../../../AccountingComponents/ui/input";
import { Separator } from "../../../../AccountingComponents/ui/separator";

const contactInfo = [
  { label: "Phone:", value: "+852 XXXX XXXX" },
  { label: "WhatsApp:", value: "+852 XXXX XXXX" },
  { label: "Email:", value: "hello@mutetaxes.hk" },
];

const businessHours = [
  "Mon-Fri: 9:00 AM - 6:00 PM HKT",
  "Sat: 9:00 AM - 1:00 PM HKT",
];

const services = [
  "Company Incorporation",
  "Company Secretary",
  "Accounting Services",
  "Tax Services",
  "Audit Support",
];

const resources = ["Free Guide", "Blog", "FAQs", "Contact Us"];

const certifications = [
  { icon: "/AccountingServices/svg-margin.svg", text: "HKICPA Members" },
  { icon: "/AccountingServices/svg-margin.svg", text: "Licensed TCSP" },
  { icon: "/AccountingServices/svg-margin.svg", text: "ISO 27001 Certified" },
];

export const ContactFooterSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-2.5 p-6">
      <footer className="flex flex-col items-start gap-[19px] pt-12 pb-3.5 px-[100px] w-full bg-[#212833] rounded-3xl overflow-hidden">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col w-[682.5px] items-start justify-center gap-[11px]">
            <img
              className="w-44 h-[30px]"
              alt="Mutetaxes logo"
              src="/AccountingServices/mutetaxes-logo-1.svg"
            />

            <div className="flex items-end justify-center w-fit [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#c6c8cb] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
              Your Complete Business Solution in Hong Kong
            </div>
          </div>

          <a
            className="flex items-end justify-center w-fit [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-2xl text-right tracking-[-0.48px] leading-8 whitespace-nowrap"
            href="mailto:hello@mutetaxes.hk"
            rel="noopener noreferrer"
            target="_blank"
          >
            hello@mutetaxes.hk
          </a>
        </div>

        <Separator className="w-full bg-gray-700" />

        <div className="inline-flex items-start gap-[734px]">
          <div className="inline-flex items-start gap-[58px]">
            <div className="inline-flex flex-col items-start gap-4">
              <div className="flex items-end justify-center w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-xl tracking-[-0.40px] leading-[30px] whitespace-nowrap">
                Contact:
              </div>

              <div className="inline-flex flex-col items-start gap-1">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="[font-family:'Helvetica_Neue-Regular',Helvetica] text-transparent flex items-end justify-center w-fit font-normal text-base tracking-[-0.32px] leading-[30px] whitespace-nowrap"
                  >
                    <span className="text-white tracking-[-0.05px]">
                      {item.label}
                    </span>
                    <span className="text-[#c6c8cb] tracking-[-0.05px]">
                      {" "}
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-4">
              <div className="flex items-end justify-center w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-xl tracking-[-0.40px] leading-[30px] whitespace-nowrap">
                Business Hours:
              </div>

              <div className="inline-flex flex-col items-start gap-1">
                {businessHours.map((hours, index) => (
                  <div
                    key={index}
                    className="[font-family:'Figtree',Helvetica] text-[#c6c8cb] flex items-end justify-center w-fit font-normal text-base tracking-[-0.32px] leading-[30px] whitespace-nowrap"
                  >
                    {hours}
                  </div>
                ))}
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-4">
              <div className="flex items-end justify-center w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-xl tracking-[-0.40px] leading-[30px] whitespace-nowrap">
                Services:
              </div>

              <div className="inline-flex flex-col items-start gap-1">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-end justify-center w-fit [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#c6c8cb] text-base tracking-[-0.32px] leading-[27px] whitespace-nowrap"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-4">
              <div className="flex items-end justify-center w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-xl tracking-[-0.40px] leading-[30px] whitespace-nowrap">
                Resources:
              </div>

              <div className="inline-flex flex-col items-start gap-1">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-end justify-center w-fit [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#c6c8cb] text-base tracking-[-0.32px] leading-[27px] whitespace-nowrap"
                  >
                    {resource}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-[268px] items-start gap-4">
              <div className="flex flex-col items-start w-full">
                <div className="flex items-center justify-center w-full [font-family:'Segoe_UI-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-7">
                  Stay Updated
                </div>
              </div>

              <div className="flex flex-col items-start w-full">
                <div className="flex items-center justify-center w-full [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-gray-400 text-[13.9px] tracking-[0] leading-5">
                  Get Hong Kong business news and
                  <br />
                  compliance deadlines delivered to your
                  <br />
                  inbox
                </div>
              </div>

              <div className="flex flex-col items-start w-full gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="w-full h-9 bg-gray-800 rounded-[166px] border border-gray-700 shadow-[0px_1px_2px_#0000000d] text-gray-500 text-sm [font-family:'Segoe_UI-Regular',Helvetica] px-[13px]"
                />

                <Button className="h-9 w-full bg-[#004eff] rounded-[146px] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] text-white text-sm [font-family:'Segoe_UI-Regular',Helvetica] hover:bg-[#0040cc]">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="w-full bg-gray-700" />

        <div className="flex flex-wrap items-center justify-center gap-[0px_24px] w-full">
          {certifications.map((cert, index) => (
            <div key={index} className="inline-flex items-center">
              <img className="w-6 h-4" alt="Svg margin" src={cert.icon} />
              <div className="inline-flex flex-col items-start">
                <div className="[font-family:'Segoe_UI-Regular',Helvetica] text-gray-400 leading-5 flex items-center justify-center w-fit font-normal text-sm tracking-[0] whitespace-nowrap">
                  {cert.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator className="w-full bg-gray-700" />

        <div className="flex items-center justify-between w-full">
          <div className="flex items-end justify-center w-fit [font-family:'Figtree',Helvetica] font-normal text-[#c6c8cb] text-xl tracking-[-0.40px] leading-[30px] whitespace-nowrap">
            Copyright © MuteTaxes 2025
          </div>

          <img alt="Social media" src="/AccountingServices/social-media.svg" />
        </div>
      </footer>
    </div>
  );
};
