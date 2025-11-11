import React from "react";
import { Card, CardContent } from "../../../../AuditComponents/ui/card";

const auditIssues = [
  {
    title: "Incomplete bank\nreconciliations",
    impact: "Delays audit by 1-2 weeks, increases costs by 20-30%",
    impactBold: false,
  },
  {
    title: "Missing supporting\ndocuments",
    impact: "Multiple rounds of auditor queries, extended timeline",
    impactBold: true,
  },
  {
    title: "Unrecorded\ntransactions",
    impact: "Material adjustments, qualified audit opinion risk",
    impactBold: true,
  },
  {
    title: "Inventory count\ndiscrepancies",
    impact: "Delays audit by 1-2 weeks, increases costs by 20-30%",
    impactBold: false,
  },
  {
    title: "Insufficient documentation\nfor estimates",
    impact: "Challenge of management assumptions, delays",
    impactBold: true,
  },
];

export const BankingInfoSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-[53px] py-8">
      <div className="flex flex-col items-center gap-6 max-w-[964px] mx-auto px-4">
       <div className="flex flex-col items-start w-full gap-4">
          <p className="w-full text-center font-helvetica font-normal text-[#21283399] text-xl md:text-2xl tracking-[0] leading-7">
            Audit Issues
          </p>

          <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            Common Audit
            <br />
            Issues We Prevent
          </h2>
        </div>

        <p className="text-center max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[22px] tracking-[-0.64px] leading-relaxed lg:leading-[35px]">
          Avoid these costly mistakes that delay audits and increase fees
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 max-w-[1141px] mx-auto px-4">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {auditIssues.map((issue, index) => (
            <Card
              key={index}
              className="bg-white rounded-[10px] border-[2.44px] border-solid border-[#f1433652] h-auto"
            >
              <CardContent className="flex items-start gap-2 p-4">
                <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-[linear-gradient(129deg,rgba(255,136,128,1)_0%,rgba(241,67,54,1)_100%)] flex items-center justify-center">
                  <div className="w-3.5 h-3.5 bg-[url(/Audit/whitecross.png)] bg-[100%_100%]" />
                </div>

                <div className="flex flex-col flex-1 gap-3">
                  <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[22px] tracking-[0] leading-[29px] whitespace-pre-line">
                    {issue.title}
                  </h3>

                  <p className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-base tracking-[0] leading-6">
                    {issue.impactBold ? (
                      <>
                        <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
                          Impact:
                        </span>{" "}
                        {issue.impact}
                      </>
                    ) : (
                      <>Impact: {issue.impact}</>
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
