import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "How long does company incorporation take?",
    answer:
      "Our streamlined process allows for company incorporation in as fast as 5 business days, assuming all documentation is in order and there are no delays from the Hong Kong Companies Registry.",
  },
  {
    id: "item-2",
    question: "Do I need to be in Hong Kong to start a company?",
    answer:
      "No, you do not need to be physically present in Hong Kong. The entire incorporation process can be completed 100% online from anywhere in the world with our platform.",
  },
  {
    id: "item-3",
    question: "What's included in the €279 starting price?",
    answer:
      "The €279 Incorporation package includes company name search, preparation of all incorporation documents, Certificate of Incorporation, Business Registration Certificate, and first-year registered office address and company secretary services.",
  },
  {
    id: "item-4",
    question: "Can you help with bank account opening?",
    answer:
      "Yes, we partner with leading digital banks and traditional banks in Hong Kong to facilitate remote bank account opening for our clients. We can guide you through the process and requirements.",
  },
  {
    id: "item-5",
    question: "Do you support multiple entities?",
    answer:
      "Absolutely. Our platform is designed to manage multiple Hong Kong entities from a single dashboard, making it easy to oversee your entire portfolio of companies.",
  },
];

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-10 px-[120px] py-8 relative mt-[100px]">
      <header className="flex flex-col max-w-[952px] items-center gap-4 relative">
        <div className="relative flex flex-col items-start self-stretch w-full gap-4">
          <div className="flex justify-center self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7 relative items-center">
            FAQ
          </div>

          <h2 className="relative flex items-center justify-center self-stretch [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
            Frequently Asked Questions
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
            <AccordionTrigger className="flex items-center gap-4 px-6 py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180">
              <span className="flex-1 font-semibold text-left [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-base tracking-[-0.32px] leading-7">
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-base tracking-[-0.32px] leading-7">
                {item.answer}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
