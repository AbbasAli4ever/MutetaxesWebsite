import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../IncorporateComponents/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "How long does company incorporation take?",
  },
  {
    id: "item-2",
    question: "Do I need to be in Hong Kong to start a company?",
  },
  {
    id: "item-3",
    question: "What's included in the €279 starting price?",
  },
  {
    id: "item-4",
    question: "Can you help with bank account opening?",
  },
  {
    id: "item-5",
    question: "Do you support multiple entities?",
  },
];

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-10 px-[120px] py-8 relative">
      <div className="flex flex-col w-full max-w-[952px] items-center gap-4 relative">
        <div className="relative flex flex-col items-start self-stretch w-full gap-4">
          <div className="relative flex items-center justify-center self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            Faq
          </div>

          <h2 className="relative flex items-center justify-center self-stretch [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
            Frequently Asked Questions
          </h2>
        </div>
      </div>

      <div className="inline-flex flex-col items-center gap-4 relative w-full max-w-[988px]">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col w-full gap-4"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="overflow-hidden bg-white border-0 rounded-xl"
            >
              <AccordionTrigger className="flex items-center gap-4 px-6 py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                <span className="flex-1 text-left [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-base tracking-[-0.32px] leading-7">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-base tracking-[-0.32px] leading-7"></div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
