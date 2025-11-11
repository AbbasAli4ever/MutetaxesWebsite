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

export const FaqSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[120px] py-10 sm:py-12 md:py-16 relative">
      {/* Header */}
      <header className="flex flex-col max-w-[952px] w-full items-center text-center gap-3 sm:gap-4">
        <p className="font-normal text-[#21283399] text-lg sm:text-xl md:text-2xl leading-6 sm:leading-7">
          FAQ
        </p>

        <h2 className="font-normal text-[#212833] font-georgia text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight md:leading-[72px]">
          Company Secretary FAQs
        </h2>
      </header>

      {/* Accordion Section */}
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-3 sm:gap-4 w-full max-w-[980px]"
      >
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="overflow-hidden bg-white border border-[#e5e7eb] rounded-xl shadow-sm"
          >
            <AccordionTrigger className="flex items-center gap-4 px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180">
              <span className="font-helvetica flex-1 text-left font-medium text-[#212833] text-sm sm:text-base md:text-[15px] leading-6 sm:leading-7 tracking-[-0.32px]">
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 sm:px-5 md:px-6 sm:pb-5 md:pb-6">
              <p className="font-helvetica font-normal text-[#212833] text-sm sm:text-base md:text-[15px] leading-6 sm:leading-7 tracking-[-0.32px]">
                {item.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
