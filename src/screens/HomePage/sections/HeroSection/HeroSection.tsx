import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
const navigationItems = [
  {
    label: "Incorporation",
    href: "/incorporate",
    isActive: true,
  },
  {
    label: "Secretary",
    href: "/secretary",
    isActive: false,
  },
  {
    label: "Accounting & Tax Services",
    href: "/AccountingServices",
    isActive: false,
  },
  {
    label: "Audit Support",
    href: "/AuditSupport",
    isActive: false,
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="relative w-full xl:w-[97vw] mx-auto h-[1100px] pt-5 overflow-hidden">
        <img
          className="object-fill w-full h-full"
          alt="G illustration"
          src="/HomePage/HeroBG.png"
        />
        <video
          className="absolute bottom-0 -translate-x-1/2 left-1/2"
          width="950"
          height="500"
          autoPlay
          muted
          loop
          src="/HomePage/hero_video.mp4"
        />
      </div>

      <header className="absolute left-0 right-0 flex items-center justify-between w-[97%] mx-auto px-12 top-9">
        <img
          className="w-44 h-[30px]"
          alt="Mutetaxes logo"
          src="/HomePage/mutetaxes-logo-1.svg"
        />

        <nav className="flex items-center gap-8">
                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    className={`h-7 text-xl text-center tracking-[-0.40px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] leading-7 whitespace-nowrap hover:opacity-70 transition-opacity ${
                      item.isActive ? "text-[#004eff]" : "text-[#212833]"
                    }`}
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-auto px-[18px] py-2 rounded-[40px] border border-solid border-[#21283366] bg-transparent hover:bg-transparent"
          >
            <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-base tracking-[0] leading-6">
              Sign In
            </span>
          </Button>

          <Button className="h-auto px-[18px] py-2 rounded-[40px] bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:opacity-90">
            <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#dde7ff] text-base tracking-[0] leading-6">
              Get Started
            </span>
          </Button>
        </div>
      </header>

      <div className="absolute top-[207px] left-1/2 -translate-x-1/2 flex flex-col w-[800px] items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="relative flex flex-col items-center gap-6">
            <Badge className="h-auto px-[11px] py-2 bg-[#28b44608] rounded-[50px] border border-solid border-[#28b446] hover:bg-[#28b44608]">
              <div className="flex items-center gap-2.5">
                <img className="w-5 h-5" alt="Svg" src="/HomePage/svg-3.svg" />
                <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#28b446] text-sm text-center tracking-[0] leading-[21px]">
                  Starting from €279
                </span>
              </div>
            </Badge>

            <h1 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-normal text-[74px] text-center tracking-[-1.95px] leading-[83px]">
              <span className="font-medium text-[#212833]">
                Your Complete Business
                <br />
                Solution in&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              </span>
              <span className="[font-family:'Georgia-Regular',Helvetica] text-[#004eff]">
                Hong Kong
              </span>
            </h1>

            <p className="w-[702px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[27px] text-center tracking-[-0.64px] leading-[35px]">
              From company formation to compliance - we handle your business
              essentials so you can focus on growth
            </p>

            <img
              className="absolute top-[153px] left-[338px] w-[70px] h-[70px] object-cover rounded-full"
              alt="Ellipse"
              src="/HomePage/ellipse-3-1.png"
            />
          </div>

          <div className="flex items-center gap-4">
            <Button className="h-auto gap-[35px] pl-3 pr-1.5 py-2 rounded-[100px] bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:opacity-90">
              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6">
                Incorporate Now
              </span>
              <img className="w-[38px] h-[38px]" alt="Arrow" src="/HomePage/arrow.svg" />
            </Button>

            <Button
              variant="outline"
              className="h-auto px-[18px] py-[13px] rounded-[40px] border border-solid border-blue-500 bg-transparent hover:bg-transparent"
            >
              <span className="bg-[linear-gradient(140deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-base tracking-[0] leading-6">
                Book Free Consultation
              </span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl text-center tracking-[-0.64px] leading-6">
            Trusted by 1,000+ Hong Kong companies.
          </p>

          <div className="flex items-center justify-center gap-2">
            <img
              className="w-[23.43px] h-[23.43px]"
              alt="Frame"
              src="/HomePage/frame-2.svg"
            />

            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl tracking-[0] leading-[21px]">
              4.9
            </span>

            <img alt="Frame" src="/HomePage/frame-7.svg" />

            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl tracking-[0] leading-[18px]">
              10,000+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
