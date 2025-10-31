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
    <section className="relative w-full py-20">
      <div className="flex flex-col max-w-[1226px] mx-auto items-start gap-10 px-4">
        <header className="flex items-center w-full gap-40">
          <div className="inline-flex flex-col items-start justify-center gap-3">
            <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl tracking-[0] leading-7">
              Testimonials
            </p>

            <h2 className="w-full max-w-[820px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] tracking-[-1.92px] leading-[70.4px]">
              Trusted by Entrepreneurs Worldwide
            </h2>
          </div>
        </header>

        <div className="flex items-stretch w-full gap-6">
          <div>
          <Card className="flex-1 bg-white rounded-[20px] border-[1.8px] border-solid border-[#d6e2ff] overflow-hidden">
            <CardContent className="p-8">
              <div className="inline-flex flex-col items-start gap-6">
                <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004eff] text-xl tracking-[-0.40px] leading-7">
                  {testimonials[activeIndex].category}
                </h3>

                <div className="inline-flex items-end gap-[140px]">
                  <div className="inline-flex flex-col items-start gap-12">
                    <blockquote className="w-full max-w-[678px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[34px] tracking-[-1.02px] leading-[40.8px]">
                      {testimonials[activeIndex].quote}
                    </blockquote>

                    <div className="flex w-full max-w-[731px] items-center justify-between">
                      <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-xl tracking-[-0.40px] leading-7 whitespace-nowrap">
                        {testimonials[activeIndex].author}
                      </p>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePrev}
                          disabled={activeIndex === 0}
                          className="flex items-center justify-center w-10 h-10 enabled:text-white transition-colors rounded-full disabled:bg-[#e2e3e4] disabled:cursor-not-allowed disabled:text-black enabled:bg-[#004eff]"
                          aria-label="Previous testimonial"
                        >
                          <ChevronLeftIcon className="w-6 h-6" />
                        </button>
                        <button
                          onClick={handleNext}
                          disabled={activeIndex === testimonials.length - 1}
                          className="flex items-center justify-center w-10 h-10 transition-colors enabled:text-white rounded-full disabled:bg-[#e2e3e4] disabled:text-black enabled:bg-[#004eff] disabled:cursor-not-allowed hover:bg-gray-100"
                          aria-label="Next testimonial"
                        >
                          <ChevronRightIcon className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={` h-[7px] rounded-full transition-colors ${
              activeIndex === index ? "bg-[#004eff] w-[45px]" : "bg-[#d6e2ff] w-[19px]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
          </div>
          <Card className="w-[412px] h-[364px] rounded-[20px] overflow-hidden border-0 relative">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              alt="Decorative gradient"
              src="/HomePage/ellipse-3-1.png"
            />
            <div className="absolute inset-0 bg-[#3068ff] opacity-95"></div>
            <CardContent className="px-[25px] py-8 relative">
              <div className="inline-flex flex-col items-start gap-[43px]">
                <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-xl tracking-[-0.40px] leading-7">
                  Fact &amp; Number
                </p>

                <div className="inline-flex flex-col items-start gap-4">
                  <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-8xl tracking-[-2.88px] leading-[105.6px]">
                    99%
                  </div>

                  <p className="w-full max-w-[362px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#ffffffcc] text-2xl tracking-[-0.48px] leading-[33.6px]">
                    <span className="tracking-[-0.12px]">
                      Customers recommend Mute Taxes for seamless company
                      incorporation, accounting, and compliance in{" "}
                    </span>
                    <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium tracking-[-0.12px]">
                      Hong Kong
                    </span>
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
