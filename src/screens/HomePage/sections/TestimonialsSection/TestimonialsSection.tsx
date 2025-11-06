import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      category: "E-commerce Success",
      quote:
        '"Mute Taxes helped us set up our Hong Kong company in just 3 days. Their ongoing accounting support has been invaluable for our Amazon FBA business."',
      author: "Sarah Chen, Founder of TechGadgets Asia",
    },
    {
      category: "Startup Consulting",
      quote:
        '"The team at Mute Taxes provided expert advice on our corporate structure. Their digital-first approach saved us a ton of time and paperwork."',
      author: "Johnathan Lee, CEO of Innovate Solutions",
    },
    {
      category: "International Expansion",
      quote:
        '"As a European company expanding into Asia, Mute Taxes was the perfect partner. Their local expertise and transparent pricing were exactly what we needed."',
      author: "Maria Garcia, Director at EuroTrade Co.",
    },
    {
      category: "Financial Services",
      quote:
        '"Their accounting and tax services are top-notch. The platform is intuitive, and their team is always responsive and knowledgeable. Highly recommended!"',
      author: "David Kim, Managing Partner at Finvest Capital",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < testimonials.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <section className="relative w-full py-16 md:py-20">
      <div className="flex flex-col max-w-[1226px] mx-auto items-start gap-8 md:gap-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-col items-start w-full gap-4 lg:flex-row lg:items-center lg:gap-40">
          <div className="inline-flex flex-col items-start justify-center gap-2 lg:gap-3">
            <p className="font-helvetica font-normal text-[#21283399] text-lg sm:text-xl md:text-2xl leading-7">
              Testimonials
            </p>

            <h2 className="w-full font-georgia max-w-[820px] font-normal text-[#212833] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[64px] leading-tight md:leading-[60px] lg:leading-[70.4px]">
              Trusted by Entrepreneurs Worldwide
            </h2>
          </div>
        </header>

        {/* Content */}
        <div className="flex flex-col items-stretch w-full gap-6 lg:flex-row">
          {/* Left Card (Testimonials) */}
          <div className="flex flex-col flex-1">
            <Card className="flex-1 bg-white rounded-[20px] border border-[#d6e2ff] overflow-hidden">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col items-start gap-6">
                  <h3 className="font-helvetica font-medium text-[#004eff] text-lg sm:text-xl leading-7">
                    {testimonials[activeIndex].category}
                  </h3>

                  <div className="flex flex-col gap-10 sm:gap-12">
                    <blockquote className="font-helvetica w-full max-w-[678px] text-[#212833] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] leading-snug sm:leading-[34px] md:leading-[38px] lg:leading-[40.8px]">
                      {testimonials[activeIndex].quote}
                    </blockquote>

                    <div className="flex flex-col sm:flex-row w-full max-w-[731px] items-start sm:items-center justify-between gap-4 sm:gap-0">
                      <p className="font-helvetica font-normal text-[#212833] text-base sm:text-lg md:text-xl leading-6 sm:leading-7 whitespace-normal sm:whitespace-nowrap">
                        {testimonials[activeIndex].author}
                      </p>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePrev}
                          disabled={activeIndex === 0}
                          className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 enabled:text-white transition-colors rounded-full disabled:bg-[#e2e3e4] disabled:text-black enabled:bg-[#004eff]"
                          aria-label="Previous testimonial"
                        >
                          <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <button
                          onClick={handleNext}
                          disabled={activeIndex === testimonials.length - 1}
                          className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 enabled:text-white transition-colors rounded-full disabled:bg-[#e2e3e4] disabled:text-black enabled:bg-[#004eff]"
                          aria-label="Next testimonial"
                        >
                          <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Indicators */}
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-[6px] sm:h-[7px] rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-[#004eff] w-[35px] sm:w-[45px]"
                      : "bg-[#d6e2ff] w-[15px] sm:w-[19px]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Card */}
          <Card className="w-full xl:w-[412px] h-auto xl:h-[364px] rounded-[20px] overflow-hidden border-0 relative mx-auto xl:mx-0">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              alt="Decorative gradient"
              src="/HomePage/ellipse-3-1.png"
            />
            <div className="absolute inset-0 bg-[#3068ff] opacity-95"></div>
            <CardContent className="px-6 sm:px-[25px] py-8 relative">
              <div className="flex flex-col items-start gap-8 sm:gap-[43px]">
                <p className="text-lg font-normal leading-7 text-white font-helvetica sm:text-xl">
                  Fact &amp; Number
                </p>

                <div className="flex flex-col items-start gap-3 sm:gap-4">
                  <div className="font-helvetica font-medium text-white text-[60px] sm:text-[80px] md:text-[96px] lg:text-[112px] leading-[1.1]">
                    99%
                  </div>

                  <p className="text-base leading-relaxed font-helvetica text-white/80 sm:text-lg md:text-xl">
                    Customers recommend Mute Taxes for seamless company
                    incorporation, accounting, and compliance in{" "}
                    <span className="font-medium text-white">Hong Kong</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
