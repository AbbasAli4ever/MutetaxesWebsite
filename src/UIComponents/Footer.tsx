import React from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

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

export const Footer = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-2.5 px-3 sm:px-6 py-6">
    <footer className="flex flex-col mt-16 items-start gap-6 w-full mx-auto bg-[#212833] rounded-3xl overflow-hidden px-6 sm:px-10 md:px-16 lg:px-24 pt-12 pb-6">
      {/* Logo + Email */}
      <div className="flex flex-col items-start justify-between w-full gap-4 md:flex-row md:items-center">
        <div className="flex flex-col items-start gap-2">
          <img
            className="h-auto w-36 sm:w-44"
            alt="Mutetaxes logo"
            src="/HomePage/mutetaxes-logo-1-1.svg"
          />
          <p className="text-[#c6c8cb] text-sm sm:text-base leading-6 font-helvetica">
            Your Complete Business Solution in Hong Kong
          </p>
        </div>

        <a
          className="text-lg font-medium text-white sm:text-2xl font-helvetica"
          href="mailto:hello@mutetaxes.hk"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello@mutetaxes.hk
        </a>
      </div>

      <Separator className="w-full bg-gray-700" />

      {/* Main content sections */}
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {/* Contact */}
        <div>
          <h3 className="mb-3 text-lg font-medium text-white sm:text-xl font-helvetica">
            Contact:
          </h3>
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="text-base text-[#c6c8cb] leading-[30px]"
            >
              <span className="text-white font-helvetica">{item.label}</span>{" "}
              <span className="font-helvetica">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="mb-3 text-lg font-medium text-white sm:text-xl">
            Business Hours:
          </h3>
          {businessHours.map((hours, index) => (
            <div
              key={index}
              className="text-base text-[#c6c8cb] leading-[30px] font-helvetica"
            >
              {hours}
            </div>
          ))}
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-3 text-lg font-medium text-white sm:text-xl font-helvetica">
            Services:
          </h3>
          {services.map((service, index) => (
            <div
              key={index}
              className="text-base text-[#c6c8cb] leading-[27px] font-helvetica"
            >
              {service}
            </div>
          ))}
        </div>

        {/* Resources */}
        <div>
          <h3 className="mb-3 text-lg font-medium text-white sm:text-xl font-helvetica">
            Resources:
          </h3>
          {resources.map((resource, index) => (
            <div
              key={index}
              className="text-base text-[#c6c8cb] leading-[27px] font-helvetica"
            >
              {resource}
            </div>
          ))}
        </div>

        {/* Stay Updated */}
        <div>
          <h3 className="mb-2 text-lg font-bold text-white sm:text-xl font-helvetica">
            Stay Updated
          </h3>
          <p className="mb-4 text-[11px] leading-5 text-gray-400 font-helvetica">
            Get Hong Kong business news and compliance deadlines delivered to
            your inbox
          </p>

          <div className="flex flex-col gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 text-sm text-gray-400 bg-gray-800 border border-gray-700 rounded-full h-9"
            />
            <Button className="h-9 w-full bg-[#004eff] rounded-full text-white text-sm hover:bg-[#0040cc] font-helvetica">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <Separator className="w-full bg-gray-700" />

      {/* Certifications */}
      <div className="flex flex-wrap items-center justify-center w-full gap-x-6 gap-y-2">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-400">
            <img
              className="w-6 h-4"
              alt="Svg margin"
              src="/HomePage/svg-margin.svg"
            />
            <span className="text-sm font-helvetica">{cert}</span>
          </div>
        ))}
      </div>

      <Separator className="w-full bg-gray-700" />

      {/* Footer bottom */}
      <div className="flex flex-col items-center justify-between w-full gap-4 sm:flex-row">
        <p className="text-[#c6c8cb] text-sm sm:text-base md:text-xl text-center sm:text-left font-helvetica">
          Copyright © MuteTaxes 2025
        </p>
        <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-12 h-12 border border-[#333943] rounded-full">
        <img src="/HomePage/tiktok2.png" alt="Icon 1" className="w-6 h-6" />
      </div>
      <div className="flex items-center justify-center w-12 h-12 border border-[#333943] rounded-full">
        <img src="/HomePage/linkedin.png" alt="Icon 2" className="w-6 h-6" />
      </div>
      <div className="flex items-center justify-center w-12 h-12 border border-[#333943] rounded-full">
        <img src="/HomePage/instagram.png" alt="Icon 3" className="w-6 h-6" />
      </div>
      <div className="flex items-center justify-center w-12 h-12 border border-[#333943] rounded-full">
        <img src="/HomePage/dribbble.png" alt="Icon 4" className="w-6 h-6" />
      </div>
    </div>
      </div>
    </footer>
    </div>
  );
};
