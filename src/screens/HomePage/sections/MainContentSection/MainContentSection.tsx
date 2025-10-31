import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const statsData = [
  {
    value: "1,000+",
    label: "Active Clients",
    fontSize: "text-[28.2px]",
  },
  {
    value: "2,500+",
    label: "Companies Formed",
    fontSize: "text-[28.2px]",
  },
  {
    value: "100%",
    label: "Compliance Record",
    fontSize: "text-[29.6px]",
  },
  {
    value: "15+",
    label: "Years Experience",
    fontSize: "text-[27.5px]",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex justify-center w-full px-4 py-8 mt-16">
      <Card className="relative bg-white rounded-3xl border-2 border-[#d6e2ff] overflow-hidden">
        <CardContent className="flex flex-wrap items-start justify-center gap-[54px] px-[46px] py-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col w-[206px] items-start gap-1"
            >
              <div className="flex flex-col items-center w-full">
                <div
                  className={`flex items-center justify-center w-full [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#004eff] ${stat.fontSize} text-center tracking-[0] leading-[56px]`}
                >
                  {stat.value}
                </div>
              </div>

              <div className="flex flex-col items-center w-full">
                <div className="flex items-center justify-center w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-gray-600 text-[17px] text-center tracking-[0] leading-5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}

          <div className="absolute top-[122px] left-[-7px] w-[1130px] h-[1130px] rotate-[-47.99deg] pointer-events-none">
            <div className="absolute top-[90px] left-[90px] w-[949px] h-[949px] rounded-[474.32px] rotate-[12.34deg] blur-[77.38px] bg-[linear-gradient(226deg,rgba(0,78,255,1)_0%,rgba(222,232,255,0)_100%)]" />

            <div className="absolute top-[90px] left-[90px] w-[949px] h-[949px] rounded-[474.32px] rotate-[12.34deg] blur-[77.38px] bg-[linear-gradient(226deg,rgba(0,78,255,1)_0%,rgba(222,232,255,0)_100%)]" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
