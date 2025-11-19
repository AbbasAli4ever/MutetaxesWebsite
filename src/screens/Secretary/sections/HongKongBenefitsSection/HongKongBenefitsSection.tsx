// import { CheckIcon } from "lucide-react";
// import React from "react";
// import { Button } from "../../../../SacretaryComponents/ui/button";
// import { Card, CardContent } from "../../../../SacretaryComponents/ui/card";

// const pricingData = [
//   {
//     price: "€99",
//     period: "/month",
//     name: "Essential",
//     description: "Perfect for dormant companies, holding companies",
//     support: "Email",
//     features: [
//       "Annual Return Filing",
//       "Business Registration Renewal",
//       "Registered Office Address",
//       "Statutory Registers Maintenance",
//       "Government Correspondence",
//     ],
//     highlighted: false,
//   },
//   {
//     price: "€199",
//     period: "/month",
//     name: "Professional",
//     description: "Perfect for active SMEs, trading companies",
//     support: "Phone",
//     features: [
//       { text: "Everything In Essential, Plus", bold: true },
//       "Unlimited Corporate Changes",
//       "Board Resolution Drafting",
//       "Share Transfer Handling",
//       "Meeting Minutes Preparation",
//       "Quarterly Compliance Review",
//     ],
//     highlighted: true,
//   },
//   {
//     price: "€399",
//     period: "/month",
//     name: "Enterprise",
//     description: "Perfect for complex structures, multiple entities",
//     support: "Priority 24/7",
//     features: [
//       { text: "Everything In Professional, Plus:", bold: true },
//       "Agm/egm Coordination",
//       "Significant Controller Services",
//       "Monthly Compliance Reports",
//       "Board Advisory Services",
//       "On-site Meeting Attendance",
//     ],
//     highlighted: false,
//   },
// ];

// export const HongKongBenefitsSection = (): JSX.Element => {
//   return (
//     <section className="w-full flex flex-col items-center gap-[58px] py-8">
//       <div className="flex flex-col items-center gap-4 max-w-[702px] px-4">
//         <div className="flex flex-col items-start w-full gap-4">
//           <div className="w-full text-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#21283399] text-2xl tracking-[0] leading-7">
//             Secretary Pricing
//           </div>

//           <h2 className="w-full text-center [font-family:'Georgia-Regular',Helvetica] font-normal text-[#212833] text-[64px] tracking-[0] leading-[72px]">
//             Choose Your Company
//             <br />
//             Secretary Package
//           </h2>
//         </div>

//         <p className="w-full text-center [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833] text-[22px] tracking-[-0.64px] leading-[35px]">
//           Flexible packages designed for every business stage
//         </p>
//       </div>

//       <div className="flex flex-wrap justify-center items-start gap-6 max-w-[1140px] px-4">
//         {pricingData.map((plan, index) => (
//           <Card
//             key={index}
//             className={`w-full max-w-[366px] rounded-[20px] ${
//               plan.highlighted
//                 ? "shadow-[0px_35px_104px_#004eff40] relative overflow-hidden"
//                 : "bg-white"
//             }`}
//           >
//             {plan.highlighted && (
//               <div className="absolute inset-0 -z-10">
//                 <div className="absolute top-[-217px] left-[-497px] w-[1132px] h-[1130px]">
//                   <div className="absolute top-[217px] left-[497px] w-[364px] h-[812px] bg-white rounded-[20px]" />
//                   <div className="absolute top-0 left-0 h-[1130px] w-[1130px]">
//                     <div className="absolute top-[90px] left-[90px] w-[949px] h-[949px] rounded-[474.32px] rotate-[12.34deg] blur-[77.38px] bg-[linear-gradient(226deg,rgba(0,78,255,1)_0%,rgba(222,232,255,0)_100%)]" />
//                   </div>
//                 </div>
//               </div>
//             )}

//             <CardContent className="relative z-10 flex flex-col gap-10 p-6">
//               <div className="flex flex-col gap-5">
//                 <div className="flex flex-col gap-4">
//                   <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#222222] text-[54.2px] tracking-[0] leading-[normal] whitespace-nowrap">
//                     <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#222222] text-[54.2px] tracking-[0]">
//                       {plan.price}
//                     </span>
//                     <span className="text-3xl">{plan.period}</span>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-[7px]">
//                   <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#222222] text-2xl tracking-[0] leading-7 whitespace-nowrap">
//                     {plan.name}
//                   </h3>
//                   <p className="[-webkit-text-stroke:0.9px_#707070] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#65676c] text-lg tracking-[0.45px] leading-6">
//                     {plan.description}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-5">
//                 <h4 className="[-webkit-text-stroke:0.9px_#707070] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[22px] tracking-[0.55px] leading-6">
//                   Features
//                 </h4>

//                 <div className="flex flex-col gap-3">
//                   {plan.features.map((feature, featureIndex) => {
//                     const isObject = typeof feature === "object";
//                     const featureText = isObject ? feature.text : feature;
//                     const isBold = isObject && feature.bold;

//                     return (
//                       <div
//                         key={featureIndex}
//                         className="flex items-center gap-2.5"
//                       >
//                         <CheckIcon className="flex-shrink-0 w-6 h-6" />
//                         <span
//                           className={`${
//                             isBold
//                               ? "[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium"
//                               : "[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal"
//                           } text-[#212833e6] text-base tracking-[0] leading-[18.5px]`}
//                         >
//                           {featureText}
//                         </span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               <div className="flex flex-col items-center gap-3 mt-auto">
//                 <Button
//                   variant={plan.highlighted ? "default" : "outline"}
//                   className={`w-[217px] h-[54px] rounded-[28.01px] ${
//                     plan.highlighted
//                       ? "bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] text-white border-0 [-webkit-text-stroke:0.9px_#000000]"
//                       : "border-[1.36px] border-solid border-black bg-white text-black"
//                   } [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[16.3px] tracking-[0] leading-[normal]`}
//                 >
//                   Get Started
//                 </Button>

//                 <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px] whitespace-nowrap">
//                   <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px]">
//                     Supprot:{" "}
//                   </span>
//                   <span className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium">
//                     {plan.support}
//                   </span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// };

import React from "react";
import { Button } from "../../../../IncorporateComponents/ui/button";
import { Card, CardContent } from "../../../../IncorporateComponents/ui/card";
const pricingData = [


  
  {
    price: "€99",
    title: "Essential",
    description: "Perfect for dormant companies, holding companies",
    features: [
      "Annual Return Filing",
      "Business Registration Renewa",
      "Registered Office Address",
      "Statutory Registers Maintenance",
      "Government Correspondence",
    ],
    
    buttonVariant: "outline" as const,
    buttonText: "Get Started",
    
    featured: false,
     support: "Email",
  },
  {
    price: "€199",
    title: "Professional",
    description: "Perfect for active SMEs, trading companies",
    features: [
      "Everything in Essential, Plus",
       "Unlimited Corporate Changes",
      "Board Resolution Drafting",
      "Share Transfer Handling",
      "Meeting Minutes Preparation",
      "Quarterly Compliance Review",
    ],
    support: "Phone",
    buttonVariant: "default" as const,
    buttonText: "Get Started",
    featured: true,
  },
  {
    price: "€399",
    title: "Enterprise",
    description: "Perfect for complex structures, multiple entities",
    features: [
       "Everything in Professional, Plus",
     "Agm/egm Coordination",
      "Significant Controller Services",
      "Monthly Compliance Reports",
      "Board Advisory Services",
      "On-site Meeting Attendance",
    ],
     support: "Priority 24/7",
    buttonVariant: "outline" as const,
    buttonText: "Get Started",
    featured: false,
  },
  
];
export const HongKongBenefitsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full gap-10 py-8 mt-0 lg:mt-[130px]">
      <div className="flex flex-col items-center gap-4 max-w-[952px] mx-auto px-4">
        <div className="flex flex-col items-start w-full gap-4">
          <p className="w-full text-center font-helvetica font-normal text-[#21283399] text-xl md:text-2xl tracking-[0] leading-7">
            Secretary Pricing
          </p>

          <h2 className="w-full text-center font-georgia font-normal text-[#212833] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[72px]">
            Choose Your Company Secretary Package
          </h2>
        </div>

        <p className="text-center max-w-[702px] font-helvetica font-normal text-[#212833] text-lg md:text-xl lg:text-[21px] lg:ml-[70px] tracking-[-0.64px] leading-relaxed lg:leading-[35px]">
          Flexible packages designed for every business stage
        </p>
      </div>
      <div className="flex lg:flex-nowrap flex-wrap justify-center items-start gap-6 max-w-[1200px] mx-auto px-4">
        {pricingData.map((plan, index) => (
          <Card
            key={index}
            className={`w-full max-w-[364px] h-auto min-h-[710px] rounded-[20px] flex flex-col relative overflow-hidden ${
              plan.featured ? "shadow-[0px_35px_104px_#004eff40]" : "bg-white"
            }`}
          >
            {plan.featured && (
                  <div className="absolute top-[-270px] left-[200px] rotate-[-30deg] w-[500px] h-[600px] rounded-[474.32px]  blur-[77.38px] bg-[#004EFF]" />
            )}
            <CardContent className="relative z-10 flex flex-col h-full p-6">
              <div className="flex flex-col gap-5 mb-10">
                <div className="flex flex-col gap-4">
                  <div
                    className={`[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[54.2px] tracking-[0] leading-[normal] ${
                      plan.featured ? "text-[#004EFF]" : "text-[#222222]"
                    }`}
                  >
                    {plan.price}
                  </div>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#222222] text-[24px] tracking-[0] leading-7 whitespace-nowrap">
                    {plan.title}
                  </h3>
                  <p className="[-webkit-text-stroke:0.9px_#707070] [font-family:'Helvetica_Neue-Regular',Helvetica] font-extralight text-[#65676C] text-[18px] tracking-[0.45px] leading-6 whitespace-pre-line">
                    {plan.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10 mb-10">
                <div className="flex flex-col gap-5">
                  <h4 className="[-webkit-text-stroke:0.9px_#707070] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#212833] text-[22px] tracking-[0.55px] leading-6">
                    Features
                  </h4>
                  <div className="flex flex-col gap-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2.5"
                      >
                        <img
                          className="flex-shrink-0 w-6 h-6"
                          alt="Check"
                          src="/Incorporate/frame.svg"
                        />
                        <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] text-base tracking-[0] leading-[18.5px]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
</CardContent>
              <div className="absolute flex items-center justify-center w-full mt-auto bottom-10">
                <div className="items-center justify-center ">
   <Button
                  variant={plan.buttonVariant}
                  className={`h-auto w-[217px] rounded-[28.01px] py-[15px] px-6 ${
                    plan.featured
                      ? "bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] text-white border-0 hover:opacity-90"
                      : "bg-white border-[1.36px] border-black text-black hover:bg-gray-50"
                  }`}
                >
                  <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[16.3px] tracking-[0] leading-[normal]">
                    {plan.buttonText}
                  </span>
                </Button>
                 <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#212833e6] flex justify-center  mt-4 text-base tracking-[0] leading-[18.5px] whitespace-nowrap">
                   <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal  text-[#212833e6] text-base tracking-[0] leading-[18.5px]">
                     Support:{" "}
                   </span>
                   <span className="font-helvetica font-medium">
                     {plan.support}
                   </span>
                 </div>
                </div>
             
              </div>
             
          </Card>
        ))}
      </div>
    </section>
  );
};
