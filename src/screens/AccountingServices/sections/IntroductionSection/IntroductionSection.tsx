import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../AccountingComponents/ui/badge";
import { Card, CardContent } from "../../../../AccountingComponents/ui/card";

const transitionCards = [
  {
    title: "Setup",
    badge: "Week 1",
    icon: "/AccountingServices/valuepropositionsection-8.svg",
    background: "/AccountingServices/subtract-8.svg",
    items: [
      { text: "Initial Consultation", boldWords: ["Initial"] },
      { text: "Information Gathering", boldWords: ["Gathering"] },
      { text: "System Selection", boldWords: ["System"] },
      { text: "Chart Of Accounts Design", boldWords: ["Accounts Design"] },
      { text: "Bank Feed Connection", boldWords: ["Bank Feed"] },
    ],
  },
  {
    title: "Migration",
    badge: "Week 2",
    icon: "/AccountingServices/valuepropositionsection-9.svg",
    background: "/AccountingServices/subtract-9.svg",
    items: [
      { text: "Historical Data Import", boldWords: ["Data Import"] },
      { text: "Opening Balances", boldWords: ["Opening"] },
      { text: "Validation & Testing", boldWords: ["Testing"] },
      { text: "Training Session", boldWords: ["Training"] },
      { text: "Go-Live", boldWords: ["Live"] },
    ],
  },
  {
    title: "Operations",
    badge: "Ongoing",
    icon: "/AccountingServices/valuepropositionsection-10.svg",
    background: "/AccountingServices/subtract-12.svg",
    items: [
      { text: "Daily Transaction Processing", boldWords: ["Processing"] },
      { text: "Weekly Status Updates", boldWords: ["Weekly"] },
      {
        text: "Monthly Financial Statements",
        boldWords: ["Financial Statements"],
      },
      { text: "Quarterly Reviews", boldWords: ["Quarterly"] },
    ],
  },
];

const renderTextWithBold = (text: string, boldWords: string[]) => {
  const result = text;
  const parts: { text: string; bold: boolean }[] = [];
  let currentIndex = 0;

  boldWords.forEach((boldWord) => {
    const index = result.indexOf(boldWord, currentIndex);
    if (index !== -1) {
      if (index > currentIndex) {
        parts.push({
          text: result.substring(currentIndex, index),
          bold: false,
        });
      }
      parts.push({ text: boldWord, bold: true });
      currentIndex = index + boldWord.length;
    }
  });

  if (currentIndex < result.length) {
    parts.push({ text: result.substring(currentIndex), bold: false });
  }

  return (
    <>
      {parts.map((part, idx) =>
        part.bold ? (
          <span
            key={idx}
            className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium"
          >
            {part.text}
          </span>
        ) : (
          <span
            key={idx}
            className="[font-family:'Helvetica_Neue-Regular',Helvetica]"
          >
            {part.text}
          </span>
        ),
      )}
    </>
  );
};

export const IntroductionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-14 px-[120px] py-8 relative">
      <div className="inline-flex flex-col items-center gap-14 relative flex-[0_0_auto]">
        <div className="inline-flex gap-4 relative flex-[0_0_auto] flex-col items-center">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex items-center justify-center self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7 lg:mt-[130px]">
              Transition
            </div>

            <h2 className="relative flex items-center justify-center w-full max-w-[994px] mx-auto [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
              Seamless Transition in 2 Weeks
            </h2>

            <p className="relative flex items-center justify-center self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-2xl text-center tracking-[0] leading-7">
              Quick, Painless Onboarding With Full Support Every Step Of The Way
            </p>
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
            {transitionCards.map((card, index) => (
              <Card
                key={index}
                className="relative w-[390px] h-[454.15px] border-0 shadow-none bg-transparent"
              >
                <CardContent className="relative w-full h-full p-0">
                  <img
                    className="absolute top-[42px] left-0 w-[390px] h-[412px]"
                    alt="Background"
                    src={card.background}
                  />

                  <div className="inline-flex flex-col items-start gap-8 absolute top-[124px] left-[26px]">
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative flex items-center justify-center w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-2xl tracking-[0] leading-[34.1px] whitespace-nowrap">
                        {card.title}
                      </h3>

                      <Badge className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] bg-[#004eff1a] rounded-[20px] hover:bg-[#004eff1a] border-0">
                        <span className="relative w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#004eff] text-sm tracking-[0] leading-[17px] whitespace-nowrap">
                          {card.badge}
                        </span>
                      </Badge>
                    </div>

                    <ul className="flex flex-col w-[344px] items-start gap-3 relative flex-[0_0_auto]">
                      {card.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex gap-2.5 items-center relative w-full flex-[0_0_auto]"
                        >
                          <img
                            className="flex-shrink-0 w-5 h-5"
                            alt="Check"
                            src="/Incorporate/frame.svg"
                          />

                          <div className="relative flex items-center justify-start flex-1 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-8">
                            {renderTextWithBold(item.text, item.boldWords)}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <img
                    className="absolute top-[-13px] left-[139px] w-[162px] h-[162px]"
                    alt="Icon"
                    src={card.icon}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
