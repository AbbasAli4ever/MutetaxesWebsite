import React from "react";
import { Button } from "../../../../SacretaryComponents/ui/button";
import { Input } from "../../../../SacretaryComponents/ui/input";
import { Separator } from "../../../../SacretaryComponents/ui/separator";

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
  "HKICPA Members",
  "Licensed TCSP",
  "ISO 27001 Certified",
];

export const FooterSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-2.5 p-6">
      <footer className="flex flex-col items-start gap-[19px] pt-12 pb-3.5 px-[100px] relative self-stretch w-full flex-[0_0_auto] bg-[#212833] rounded-3xl overflow-hidden">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[682.5px] items-start justify-center gap-[11px] relative">
            <img
              className="relative w-44 h-[30px]"
              alt="Mutetaxes logo"
              src="/Secretary/mutetaxes-logo-1.svg"
            />

            <div className="relative flex items-end justify-center w-fit [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#c6c8cb] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
              Your Complete Business Solution in Hong Kong
            </div>
          </div>

          <a
            className="relative flex items-end justify-center w-fit [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-2xl text-right tracking-[-0.48px] leading-8 whitespace-nowrap"
            href="mailto:hello@mutetaxes.hk"
            rel="noopener noreferrer"
            target="_blank"
          >
            hello@mutetaxes.hk
          </a>
        </div>

        <Separator className="bg-white/10" />

        <div className="inline-flex items-start gap-[734px] relative flex-[0_0_auto]">
          <div className="inline-flex items-start gap-[58px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <div className="relative flex items-end justify-center w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-xl tracking-[-0.40px] leading-[30px] whitespace-nowrap">
                Contact:
              </div>

              <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className={`${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Helvetica_Neue-Regular',Helvetica] text-transparent relative flex items-end justify-center w-fit font-normal text-base tracking-[-0.32px] leading-[30px] whitespace-nowrap`}
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

            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <div className="relative flex items-end justify-center w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-xl tracking-[-0.40px] leading-[30px] whitespace-nowrap">
                Business Hours:
              </div>

              <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                {businessHours.map((hour, index) => (
                  <div
                    key={index}
                    className={`${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Figtree',Helvetica] text-[#c6c8cb] relative flex items-end justify-center w-fit font-normal text-base tracking-[-0.32px] leading-[30px] whitespace-nowrap`}
                  >
                    {hour}
                  </div>
                ))}
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <div className="relative flex items-end justify-center w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-xl tracking-[-0.40px] leading-[30px] whitespace-nowrap">
                Services:
              </div>

              <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`relative flex items-end justify-center w-fit ${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#c6c8cb] text-base tracking-[-0.32px] leading-[27px] whitespace-nowrap`}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <div className="relative flex items-end justify-center w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-xl tracking-[-0.40px] leading-[30px] whitespace-nowrap">
                Resources:
              </div>

              <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className={`relative flex items-end justify-center w-fit ${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#c6c8cb] text-base tracking-[-0.32px] leading-[27px] whitespace-nowrap`}
                  >
                    {resource}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-[268px] items-start gap-4 relative self-stretch">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Segoe_UI-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-7">
                  Stay Updated
                </div>
              </div>

              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-gray-400 text-[13.9px] tracking-[0] leading-5">
                  Get Hong Kong business news and
                  <br />
                  compliance deadlines delivered to your
                  <br />
                  inbox
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <Input
                  placeholder="Your email address"
                  className="h-9 bg-gray-800 rounded-[166px] border-gray-700 text-sm placeholder:text-gray-500 [font-family:'Segoe_UI-Regular',Helvetica]"
                />

                <Button className="h-9 w-full bg-[#004eff] hover:bg-[#0040cc] rounded-[146px] text-sm [font-family:'Segoe_UI-Regular',Helvetica] font-normal">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        <div className="flex flex-wrap items-center justify-center gap-[0px_24px] relative self-stretch w-full flex-[0_0_auto]">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="inline-flex items-center relative flex-[0_0_auto]"
            >
              <img
                className="relative w-6 h-4"
                alt="Svg margin"
                src="/Secretary/svg-margin.svg"
              />

              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-gray-400 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {cert}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator className="bg-white/10" />

        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative flex items-end justify-center w-fit [font-family:'Figtree',Helvetica] font-normal text-[#c6c8cb] text-xl tracking-[-0.40px] leading-[30px] whitespace-nowrap">
            Copyright © MuteTaxes 2025
          </div>

          <img
            className="relative flex-[0_0_auto]"
            alt="Social media"
            src="/Secretary/social-media.svg"
          />
        </div>
      </footer>
    </div>
  );
};
