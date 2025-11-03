import React from "react";
import { Card, CardContent } from "../../../../AuditComponents/ui/card";

const preAuditItems = [
  "Trial Balance Preparation",
  "Account Reconciliations",
  "Working Papers Compilation",
  "Supporting Documentation",
  "Variance Analysis",
  "Internal Review",
];

const duringAuditItems = [
  "Auditor Liaison",
  "Query Management",
  "Document Provision",
  "Sample Coordination",
  "Confirmation Handling",
  "Issue Resolution",
];

const postAuditItems = [
  "Adjustment Posting",
  "Report Review",
  "Filing Assistance",
  "Management Letter Review",
  "Implementation Support",
  "Process Improvements",
];

export const AuditPackagesSection = (): JSX.Element => {
  return (
    <section className="flex justify-center w-full py-8">
      <div className="flex w-full max-w-[1226px] px-4 flex-col items-center gap-16">
        <header className="flex flex-col max-w-[882px] items-center gap-4">
          <p className="text-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl tracking-[0] leading-[28.1px]">
            Solutions
          </p>

          <h2 className="text-center [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64.3px] tracking-[0] leading-[72.4px]">
            Comprehensive Audit
            <br />
            Support Solutions
          </h2>

          <p className="text-center max-w-[702px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[22px] tracking-[-0.64px] leading-[35px]">
            End-to-end support for a seamless audit experience
          </p>
        </header>

        <div className="flex flex-col items-center w-full gap-6">
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
            <Card className="relative overflow-hidden border-0 shadow-none">
              <CardContent className="p-0">
                <div className="relative w-full h-[426.69px]">
                  <img
                    className="absolute top-[42px] left-0 w-full h-[385px]"
                    alt="Pre-audit background"
                    src="/Audit/subtract.svg"
                  />

                  <img
                    className="absolute -left-3 top-[-13px] w-[162px] h-[162px]"
                    alt="Pre-audit icon"
                    src="/Audit/valuepropositionsection-1.svg"
                  />

                  <div className="absolute top-[131px] left-[26px] flex flex-col gap-4 w-[334px]">
                    <h3 className="text-[#212833] text-[32px] leading-[34.1px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium tracking-[0]">
                      Pre-audit Preparation
                    </h3>

                    <ul className="flex flex-col gap-3">
                      {preAuditItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-2.5">
                          <img
                            className="flex-shrink-0 w-6 h-6"
                            alt="Checkmark"
                            src="/Audit/frame.svg"
                          />
                          <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-none">
              <CardContent className="p-0">
                <div className="relative w-full h-[426.69px]">
                  <img
                    className="absolute top-[42px] left-0 w-full h-[385px]"
                    alt="During audit background"
                    src="/Audit/subtract-1.svg"
                  />

                  <img
                    className="absolute -left-3.5 top-[-13px] w-[162px] h-[162px]"
                    alt="During audit icon"
                    src="/Audit/valuepropositionsection.svg"
                  />

                  <div className="absolute top-[131px] left-[33px] flex flex-col gap-4 w-[334px]">
                    <h3 className="text-[#212833] text-[32px] leading-[34.1px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium tracking-[0]">
                      During Audit Support
                    </h3>

                    <ul className="flex flex-col gap-3">
                      {duringAuditItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-2.5">
                          <img
                            className="flex-shrink-0 w-6 h-6"
                            alt="Checkmark"
                            src="/Audit/frame.svg"
                          />
                          <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="w-full rounded-[20px] overflow-hidden border-0 bg-[linear-gradient(131deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)]">
            <CardContent className="relative p-0 h-[371px]">
              
              <div className="absolute -bottom-[500px] -right-[200px] w-[700px] h-[700px] bg-white rounded-full blur-3xl opacity-40" />

              <div className="relative z-10 pt-[43px] px-[43px]">
                <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-[26.0px] mb-[18px]">
                  Post-audit Services
                </h3>

                <ul className="flex flex-col gap-[13.86px]">
                  {postAuditItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-[11.55px]">
                      <img
                        className="w-[27.71px] h-[27.71px] flex-shrink-0"
                        alt="Checkmark"
                        src="/Audit/frame-6.svg"
                      />
                      <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#ffffffe6] text-[16.2px] tracking-[0] leading-[21.3px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
