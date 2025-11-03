import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const statsData = [
  { value: "1,000+", label: "Active Clients" },
  { value: "2,500+", label: "Companies Formed" },
  { value: "100%", label: "Compliance Record" },
  { value: "15+", label: "Years Experience" },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex justify-center w-full px-4 py-10 mt-10 sm:py-14 md:py-16 lg:py-20 sm:mt-14 md:mt-16">
      <Card className="relative bg-white rounded-3xl border-2 border-[#d6e2ff] overflow-hidden w-full max-w-[1200px]">
        <CardContent className="relative flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-12 lg:gap-[24px] xl:gap-[54px] px-1 sm:px-6 md:px-10 lg:px-[46px] py-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[45%] sm:w-[40%] md:w-[220px] lg:w-[206px] gap-2 sm:gap-3 text-center"
            >
              <div
                className="font-bold text-[#004eff] tracking-[0] leading-[1.2] font-['Helvetica_Neue-Bold',Helvetica]
                text-[26px] sm:text-[28px] md:text-[30px] lg:text-[29px]"
              >
                {stat.value}
              </div>

              <div
                className="font-normal text-gray-600 tracking-[0] leading-5 font-['Helvetica_Neue-Regular',Helvetica]
                text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]"
              >
                {stat.label}
              </div>
            </div>
          ))}

          {/* Gradient Background Circle */}
          <div className="absolute -bottom-110 left-[50%] -translate-x-1/2 translate-y-1/2 w-[700px] sm:w-[850px] md:w-[950px] lg:w-[1130px] h-[700px] sm:h-[850px] md:h-[950px] lg:h-[1130px] rotate-[-47.99deg] pointer-events-none">
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full rotate-[12.34deg] blur-[70px] bg-[linear-gradient(226deg,rgba(0,78,255,0.6)_0%,rgba(222,232,255,0)_100%)]" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
