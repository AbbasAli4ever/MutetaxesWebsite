import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../AccountingComponents/ui/accordion";

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

export const AccountingFAQSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-10 px-[120px] py-8 relative">
      <header className="flex w-full max-w-[952px] gap-4 flex-col items-center">
        <div className="flex flex-col items-start w-full gap-4">
          <p className="flex justify-center w-full [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            Faq
          </p>

          <h2 className="flex items-center justify-center w-full [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
            Accounting Services FAQs
          </h2>
        </div>
      </header>

      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-4 w-full max-w-[988px]"
      >
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="overflow-hidden bg-white border-0 rounded-xl"
          >
            <AccordionTrigger className="flex items-center gap-4 w-full p-6 hover:no-underline [&[data-state=open]>svg]:rotate-180">
              <span className="flex-1 text-left [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-base tracking-[-0.32px] leading-7">
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-0 pb-6">
              <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-base tracking-[-0.32px] leading-7"></div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
