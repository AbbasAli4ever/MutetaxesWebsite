import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../AccountingComponents/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

const tabItems = [
  { value: "bookkeeping", label: "Bookkeeping & Transaction Processing" },
  { value: "reporting", label: "Financial Reporting" },
  { value: "accounts", label: "Accounts Management" },
  { value: "tax", label: "Tax Accounting" },
];

const featureRows = [
  [
    {
      title: "Sales And Purchase",
      subtitle: "Invoice Recording",
    },
    {
      title: "Bank Transaction",
      subtitle: "Import and Reconciliation",
    },
    {
      title: "Expense",
      titleBold: "Categorization",
      subtitle: "And Tracking",
    },
  ],
  [
    {
      title: "Multi-currency",
      subtitle: "Transaction management",
    },
    {
      title: "Receipt Digitization and",
      titleBold: "Filing",
    },
    {
      title: "Petty Cash",
      titleBold: "Management",
    },
  ],
];

export const FeaturesIncludedSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-14 px-[120px] py-8 relative">
      <div className="inline-flex gap-4 relative flex-[0_0_auto] flex-col items-center">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl text-center tracking-[0] leading-7">
            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl tracking-[0] leading-7">
              Accounting Solutions
            </span>
          </div>

          <div className="relative flex items-center justify-center w-full max-w-[994px] mx-auto [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] text-center tracking-[0] leading-[72px]">
            Comprehensive Accounting Solutions
          </div>

          <div className="relative flex items-center justify-center self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-2xl text-center tracking-[0] leading-7">
            Full-service Accounting Tailored To Your Business Needs
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-[1140px]">
        <Tabs defaultValue="bookkeeping" className="w-full">
          <TabsList className="inline-flex items-center gap-1.5 w-full justify-center bg-transparent h-auto p-0 mb-[74px]">
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="justify-center gap-2.5 px-3 py-3 rounded-[50px] data-[state=active]:bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] data-[state=active]:shadow-[0px_24px_34px_#004eff47] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-[#212833] [font-family:'Helvetica_Neue-Medium',Helvetica] data-[state=active]:font-medium data-[state=inactive]:[font-family:'Helvetica_Neue-Regular',Helvetica] data-[state=inactive]:font-normal text-[17px] text-center tracking-[0] leading-6 whitespace-nowrap h-auto"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="bookkeeping" className="mt-0">
            <div className="relative flex items-center justify-center w-full">
              <div className="absolute w-[107.54%] h-full top-0 left-[-3.77%] flex items-center justify-center bg-[url(/subtract-13.svg)] bg-[100%_100%]" />

              <div className="relative inline-flex flex-col items-start gap-[52px] py-[74px]">
                {featureRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="inline-flex items-start gap-[60px] relative flex-[0_0_auto]"
                  >
                    {row.map((feature, featureIndex) => (
                      <Badge
                        key={featureIndex}
                        variant="outline"
                        className="inline-flex items-start gap-4 pl-0 pr-[11.64px] pt-0 pb-[14.7px] relative flex-[0_0_auto] rounded-[126.82px] shadow-[0px_2.91px_21px_#050f241f] bg-white border-0 h-auto"
                      >
                        <CheckIcon className="relative flex-shrink-0 w-6 h-6 text-current" />
                        <div className="relative flex items-center justify-center mt-[-1.05px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-[30px]">
                          {feature.title && !feature.titleBold && (
                            <span className="font-medium">
                              {feature.title}
                              {feature.subtitle && <br />}
                            </span>
                          )}
                          {feature.title && feature.titleBold && (
                            <>
                              <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                                {feature.title}{" "}
                              </span>
                              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                                {feature.titleBold}
                              </span>
                            </>
                          )}
                          {feature.subtitle && !feature.titleBold && (
                            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                              {feature.subtitle}
                            </span>
                          )}
                          {feature.subtitle && feature.titleBold && (
                            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                              {feature.subtitle}
                            </span>
                          )}
                        </div>
                      </Badge>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reporting" className="mt-0">
            <div className="relative flex items-center justify-center w-full">
              <div className="absolute w-[107.54%] h-full top-0 left-[-3.77%] flex items-center justify-center bg-[url(/subtract-13.svg)] bg-[100%_100%]" />

              <div className="relative inline-flex flex-col items-start gap-[52px] py-[74px]">
                {featureRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="inline-flex items-start gap-[60px] relative flex-[0_0_auto]"
                  >
                    {row.map((feature, featureIndex) => (
                      <Badge
                        key={featureIndex}
                        variant="outline"
                        className="inline-flex items-start gap-4 pl-0 pr-[11.64px] pt-0 pb-[14.7px] relative flex-[0_0_auto] rounded-[126.82px] shadow-[0px_2.91px_21px_#050f241f] bg-white border-0 h-auto"
                      >
                        <CheckIcon className="relative flex-shrink-0 w-6 h-6 text-current" />
                        <div className="relative flex items-center justify-center mt-[-1.05px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-[30px]">
                          {feature.title && !feature.titleBold && (
                            <span className="font-medium">
                              {feature.title}
                              {feature.subtitle && <br />}
                            </span>
                          )}
                          {feature.title && feature.titleBold && (
                            <>
                              <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                                {feature.title}{" "}
                              </span>
                              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                                {feature.titleBold}
                              </span>
                            </>
                          )}
                          {feature.subtitle && !feature.titleBold && (
                            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                              {feature.subtitle}
                            </span>
                          )}
                          {feature.subtitle && feature.titleBold && (
                            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                              {feature.subtitle}
                            </span>
                          )}
                        </div>
                      </Badge>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="accounts" className="mt-0">
            <div className="relative flex items-center justify-center w-full">
              <div className="absolute w-[107.54%] h-full top-0 left-[-3.77%] flex items-center justify-center bg-[url(/subtract-13.svg)] bg-[100%_100%]" />

              <div className="relative inline-flex flex-col items-start gap-[52px] py-[74px]">
                {featureRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="inline-flex items-start gap-[60px] relative flex-[0_0_auto]"
                  >
                    {row.map((feature, featureIndex) => (
                      <Badge
                        key={featureIndex}
                        variant="outline"
                        className="inline-flex items-start gap-4 pl-0 pr-[11.64px] pt-0 pb-[14.7px] relative flex-[0_0_auto] rounded-[126.82px] shadow-[0px_2.91px_21px_#050f241f] bg-white border-0 h-auto"
                      >
                        <CheckIcon className="relative flex-shrink-0 w-6 h-6 text-current" />
                        <div className="relative flex items-center justify-center mt-[-1.05px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-[30px]">
                          {feature.title && !feature.titleBold && (
                            <span className="font-medium">
                              {feature.title}
                              {feature.subtitle && <br />}
                            </span>
                          )}
                          {feature.title && feature.titleBold && (
                            <>
                              <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                                {feature.title}{" "}
                              </span>
                              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                                {feature.titleBold}
                              </span>
                            </>
                          )}
                          {feature.subtitle && !feature.titleBold && (
                            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                              {feature.subtitle}
                            </span>
                          )}
                          {feature.subtitle && feature.titleBold && (
                            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                              {feature.subtitle}
                            </span>
                          )}
                        </div>
                      </Badge>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tax" className="mt-0">
            <div className="relative flex items-center justify-center w-full">
              <div className="absolute w-[107.54%] h-full top-0 left-[-3.77%] flex items-center justify-center bg-[url(/subtract-13.svg)] bg-[100%_100%]" />

              <div className="relative inline-flex flex-col items-start gap-[52px] py-[74px]">
                {featureRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="inline-flex items-start gap-[60px] relative flex-[0_0_auto]"
                  >
                    {row.map((feature, featureIndex) => (
                      <Badge
                        key={featureIndex}
                        variant="outline"
                        className="inline-flex items-start gap-4 pl-0 pr-[11.64px] pt-0 pb-[14.7px] relative flex-[0_0_auto] rounded-[126.82px] shadow-[0px_2.91px_21px_#050f241f] bg-white border-0 h-auto"
                      >
                        <CheckIcon className="relative flex-shrink-0 w-6 h-6 text-current" />
                        <div className="relative flex items-center justify-center mt-[-1.05px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-normal text-[#212833e6] text-xl tracking-[0] leading-[30px]">
                          {feature.title && !feature.titleBold && (
                            <span className="font-medium">
                              {feature.title}
                              {feature.subtitle && <br />}
                            </span>
                          )}
                          {feature.title && feature.titleBold && (
                            <>
                              <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                                {feature.title}{" "}
                              </span>
                              <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                                {feature.titleBold}
                              </span>
                            </>
                          )}
                          {feature.subtitle && !feature.titleBold && (
                            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                              {feature.subtitle}
                            </span>
                          )}
                          {feature.subtitle && feature.titleBold && (
                            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                              {feature.subtitle}
                            </span>
                          )}
                        </div>
                      </Badge>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
