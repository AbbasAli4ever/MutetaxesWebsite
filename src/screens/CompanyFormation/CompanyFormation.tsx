// import React, { useState } from "react";
// import { ArrowLeft, ArrowRight, Check } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import { Step1CompanyInfo, Step1Data } from "./steps/Step1CompanyInfo";
// import { Step2ShareCapital, Step2Data } from "./steps/Step2ShareCapital";
// import { Step3Shareholders, Step3Data } from "./steps/Step3Shareholders";
// import { Step4Directors, Step4Data } from "./steps/Step4Directors";
// import { Step5Services, Step5Data } from "./steps/Step5Services";
// import { Step6Documents, Step6Data } from "./steps/Step6Documents";
// import { Step7Billing, Step7Data } from "./steps/Step7Billing";
// import { Step8Review, Step8Data } from "./steps/Step8Review";

// interface FormData {
//   step1: Step1Data;
//   step2: Step2Data;
//   step3: Step3Data;
//   step4: Step4Data;
//   step5: Step5Data;
//   step6: Step6Data;
//   step7: Step7Data;
//   step8: Step8Data;
// }

// const steps = [
//   { number: 1, label: "Information" },
//   { number: 2, label: "Share Capital" },
//   { number: 3, label: "Shareholders" },
//   { number: 4, label: "Directors" },
//   { number: 5, label: "Services" },
//   // { number: 6, label: "Documents" },
//   { number: 6, label: "Billing" },
//   { number: 7, label: "Review" },
// ];

// const MOBILE_STEP_WIDTH = 80;
// const MOBILE_STEP_GAP = 8;
// const CONNECTOR_WIDTH = 32; // w-8

// const getMobileTrackTransform = (step: number) => {
//   // Total width per step = step width + connector + gap
//   const stepSpacing = MOBILE_STEP_WIDTH + CONNECTOR_WIDTH + MOBILE_STEP_GAP;

//   if (step === 1 || step === 2) {
//     // Steps 1 & 2: Keep same position (no sliding from step 1 to 2)
//     return "translateX(8px)";
//   }

//   // For steps 3-8: Calculate to center the current step, shifted slightly left
//   // Each step moves left by stepSpacing
//   const offsetFromStart = (step - 1) * stepSpacing;
//   const centeringOffset = MOBILE_STEP_WIDTH / 2; // Half of step width to center it
//   const leftShift = 30; // Shift 30px to the left for better visibility

//   return `translateX(calc(50% - ${offsetFromStart + centeringOffset + leftShift}px))`;
// };

// export const CompanyFormation: React.FC = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState<FormData>({
//     step1: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       countryOfIncorporation: "hong-kong",
//       proposedCompanyName: "",
//       alternativeName1: "",
//       alternativeName2: "",
//       alternativeName3: "",
//       natureOfBusiness: [],
//       businessScope: "",
//       businessScopeDescription: "",
//       companyType: "Private Limited Company",
//     },
//     step2: {
//       shareCapitalAmount: "10000",
//       totalShares: "10000",
//       shareDistribution: [],
//     },
//     step3: {
//       shareholders: [],
//     },
//     step4: {
//       directors: [],
//       nomineeDirectorService: false,
//     },
//     step5: {
//       bankingServices: [],
//       additionalServices: [],
//     },
//     step6: {
//       passportDocuments: [],
//       selfieDocuments: [],
//       addressProofs: [],
//     },
//     step7: {
//       billingName: "",
//       billingEmail: "",
//       billingPhone: "",
//       billingAddress: "",
//       billingCountry: "",
//       paymentMethod: "",
//     },
//     step8: {
//       complianceAccepted: false,
//     },
//   });

//   const updateFormData = (step: keyof FormData, data: any) => {
//     setFormData((prev) => ({
//       ...prev,
//       [step]: { ...prev[step], ...data },
//     }));
//   };

//   const handleNext = () => {
//     if (currentStep < 8) {
//       // Sync shareholders from Step 2 to Step 3 when moving from Step 2 to Step 3
//       if (currentStep === 2) {
//         const shareholdersFromStep2 = formData.step2.shareDistribution.map((dist) => ({
//           id: dist.id,
//           type: "individual" as const,
//           fullName: dist.name,
//           nationality: "",
//           email: "",
//           phone: "",
//           shares: dist.shares,
//           percentage: dist.percentage,
//           residentialAddress: "",
//           passportFile: null,
//           addressProofFile: null,
//         }));

//         setFormData((prev) => ({
//           ...prev,
//           step3: { shareholders: shareholdersFromStep2 },
//         }));
//       }

//       setCurrentStep(currentStep + 1);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const handleSubmit = () => {
//     console.log("Form submitted:", formData);
//     alert("Application submitted successfully! Our team will contact you soon.");
//   };

//   const canProceed = () => {
//     if (currentStep === 8) {
//       return formData.step8.complianceAccepted;
//     }
//     return true;
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <Step1CompanyInfo
//             data={formData.step1}
//             onChange={(data) => updateFormData("step1", data)}
//           />
//         );
//       case 2:
//         return (
//           <Step2ShareCapital
//             data={formData.step2}
//             onChange={(data) => updateFormData("step2", data)}
//           />
//         );
//       case 3:
//         return (
//           <Step3Shareholders
//             data={formData.step3}
//             onChange={(data) => updateFormData("step3", data)}
//           />
//         );
//       case 4:
//         return (
//           <Step4Directors
//             data={formData.step4}
//             onChange={(data) => updateFormData("step4", data)}
//             shareholdersFromStep3={formData.step3.shareholders}
//           />
//         );
//       case 5:
//         return (
//           <Step5Services
//             data={formData.step5}
//             onChange={(data) => updateFormData("step5", data)}
//           />
//         );
//       // case 6:
//       //   return (
//       //     <Step6Documents
//       //       data={formData.step6}
//       //       onChange={(data) => updateFormData("step6", data)}
//       //       shareholdersAndDirectors={[
//       //         ...formData.step3.shareholders.map((s) => ({
//       //           id: s.id,
//       //           fullName: s.fullName,
//       //         })),
//       //         ...formData.step4.directors.map((d) => ({
//       //           id: d.id,
//       //           fullName: d.fullName,
//       //         })),
//       //       ]}
//       //     />
//       //   );
//       case 6:
//         return (
//           <Step7Billing
//             data={formData.step7}
//             onChange={(data) => updateFormData("step7", data)}
//           />
//         );
//       case 7:
//         return (
//           <Step8Review
//             data={formData.step8}
//             onChange={(data) => updateFormData("step8", data)}
//             formData={formData}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   const progressPercentage = Math.round((currentStep / 7) * 100);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f0f4ff]">
//       <div className="max-w-5xl mx-auto px-2 md:px-6 xl:px-2 py-8 md:py-12">
//         {/* Header */}
//         <div className="text-center lg:text-start mb-8 md:mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold text-[#212833] mb-3">
//             Hong Kong Company Formation
//           </h1>
//           <p className="text-gray-600 text-base md:text-lg">
//             Complete all sections to register your Private Limited Company
//           </p>
//         </div>

//         {/* Progress Bar & Step Indicators - Sticky Container */}
//         <div className="sticky top-0 z-10 backdrop-blur-lg rounded-2xl  py-2 px-2 md:px-4 md:py-4 md:pb-6 ">
//           {/* Progress Bar */}
//           <div className="mb-6 md:mb-8">
//             <div className="flex items-center justify-between mb-4">
//               <span className="text-sm font-medium text-[#212833]">
//                 Step {currentStep} of 7
//               </span>
//               <span className="text-sm font-semibold text-[#004eff]">
//                 Progress: {progressPercentage}%
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
//               <div
//                 className="bg-gradient-to-r from-[#6896ff] to-[#004eff] h-2.5 rounded-full transition-all duration-500 ease-out"
//                 style={{ width: `${progressPercentage}%` }}
//               />
//             </div>
//           </div>

//           {/* Step Indicators */}
//           <div className="py-2">
//           {/* Mobile: Centered carousel with 3 visible steps */}
//           <div className="md:hidden overflow-hidden px-2">
//             <div
//               className="flex items-center transition-transform duration-500 ease-out"
//               style={{
//                 transform: getMobileTrackTransform(currentStep),
//                 gap: `${MOBILE_STEP_GAP}px`,
//               }}
//             >
//               {steps.map((step, index) => (
//                 <React.Fragment key={step.number}>
//                   <div
//                     className="flex flex-col items-center py-1 flex-shrink-0"
//                     style={{ width: `${MOBILE_STEP_WIDTH}px` }}
//                   >
//                     <div
//                       className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
//                         currentStep > step.number
//                           ? "bg-green-500 text-white"
//                           : currentStep === step.number
//                           ? "bg-[#004eff] text-white ring-4 ring-[#004eff]/20"
//                           : "bg-gray-200 text-gray-500"
//                       }`}
//                     >
//                       {currentStep > step.number ? (
//                         <Check className="w-5 h-5" />
//                       ) : (
//                         step.number
//                       )}
//                     </div>
//                     <span
//                       className={`text-xs mt-2 font-medium whitespace-nowrap ${
//                         currentStep === step.number
//                           ? "text-[#004eff]"
//                           : currentStep > step.number
//                           ? "text-green-600"
//                           : "text-gray-500"
//                       }`}
//                     >
//                       {step.label}
//                     </span>
//                   </div>
//                   {index < steps.length - 1 && (
//                     <div
//                       className={`h-0.5 w-8 mb-6 transition-all duration-300 flex-shrink-0 ${
//                         step.number < currentStep
//                           ? "bg-green-500"
//                           : "bg-gray-200"
//                       }`}
//                     />
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>

//           {/* Desktop: All steps visible */}
//           <div className="hidden md:block">
//             <div className="flex items-center gap-2 lg:gap-3 justify-center">
//               {steps.map((step, index) => (
//                 <React.Fragment key={step.number}>
//                   <div className="flex flex-col items-center py-1">
//                     <div
//                       className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
//                         currentStep > step.number
//                           ? "bg-green-500 text-white"
//                           : currentStep === step.number
//                           ? "bg-[#004eff] text-white ring-4 ring-[#004eff]/20"
//                           : "bg-gray-200 text-gray-500"
//                       }`}
//                     >
//                       {currentStep > step.number ? (
//                         <Check className="w-6 h-6" />
//                       ) : (
//                         step.number
//                       )}
//                     </div>
//                     <span
//                       className={`text-xs mt-2 font-medium whitespace-nowrap ${
//                         currentStep === step.number
//                           ? "text-[#004eff]"
//                           : currentStep > step.number
//                           ? "text-green-600"
//                           : "text-gray-500"
//                       }`}
//                     >
//                       {step.label}
//                     </span>
//                   </div>
//                   {index < steps.length - 1 && (
//                     <div
//                       className={`h-0.5 w-16 mb-6 transition-all duration-300 ${
//                         currentStep > step.number ? "bg-green-500" : "bg-gray-200"
//                       }`}
//                     />
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </div>
//         </div>

//         {/* Form Content */}
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 md:p-10 mb-6">
//           <div className="mb-6">
//             <h2 className="text-2xl font-bold text-[#212833] mb-1">
//               {steps[currentStep - 1].label}
//             </h2>
//             <p className="text-sm text-gray-500">Step {currentStep} of 7</p>
//           </div>

//           {renderStep()}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex items-center justify-between gap-4">
//           <Button
//             onClick={handleBack}
//             disabled={currentStep === 1}
//             variant="outline"
//             className="h-12 px-6 rounded-full border-2 border-gray-300 hover:border-[#004eff] hover:bg-[#004eff] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
//           >
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Back
//           </Button>

//           {currentStep < 7 ? (
//             <Button
//               onClick={handleNext}
//               className="h-12 px-8 rounded-full bg-gradient-to-r from-[#6896ff] to-[#004eff] hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
//             >
//               Next
//               <ArrowRight className="w-5 h-5 ml-2" />
//             </Button>
//           ) : (
//             <Button
//               onClick={handleSubmit}
//               disabled={!canProceed()}
//               className="h-12 px-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <Check className="w-5 h-5 mr-2" />
//               Submit Application
//             </Button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react"; // Added Loader2
import { Button } from "../../components/ui/button";
import { useCompanyStore } from "../../store/useCompanyStore"; // Import the store

// Import your steps...
import { Step1CompanyInfo } from "./steps/Step1CompanyInfo";
import { Step2ShareCapital } from "./steps/Step2ShareCapital";
import { Step3Shareholders } from "./steps/Step3Shareholders";
import { Step4Directors } from "./steps/Step4Directors";
import { Step5Services } from "./steps/Step5Services";
// import { Step6Documents } from "./steps/Step6Documents";
import { Step7Billing } from "./steps/Step7Billing";
import { Step8Review } from "./steps/Step8Review";

const steps = [
  { number: 1, label: "Information" },
  { number: 2, label: "Share Capital" },
  { number: 3, label: "Shareholders" },
  { number: 4, label: "Directors" },
  { number: 5, label: "Services" },
  { number: 6, label: "Billing" },
  { number: 7, label: "Review" },
];

const MOBILE_STEP_WIDTH = 80;
const MOBILE_STEP_GAP = 8;
const CONNECTOR_WIDTH = 32;

const getMobileTrackTransform = (step: number) => {
  const stepSpacing = MOBILE_STEP_WIDTH + CONNECTOR_WIDTH + MOBILE_STEP_GAP;
  if (step === 1 || step === 2) return "translateX(8px)";
  const offsetFromStart = (step - 1) * stepSpacing;
  const centeringOffset = MOBILE_STEP_WIDTH / 2;
  const leftShift = 30;
  return `translateX(calc(50% - ${offsetFromStart + centeringOffset + leftShift}px))`;
};

export const CompanyFormation: React.FC = () => {
  // 1. Consume the store
  const {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    submitApplication,
    isLoading,
    isSuccess,
    stepErrors,
    validateStep,
    clearStepErrors,
  } = useCompanyStore();

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  // Handle Success State (Optional)
  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Application Submitted!
          </h2>
          <p className="text-gray-600">
            Our team will contact you soon regarding your company formation.
          </p>
        </div>
      </div>
    );
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      clearStepErrors();
      nextStep();
    }
  };

  const canProceed = () => {
    if (currentStep === 7) {
      // 7 is the index for Review in your steps array
      return formData.step7.complianceAccepted;
    }
    return true;
  };

  const progressPercentage = Math.round((currentStep / 7) * 100);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1CompanyInfo
            data={formData.step1}
            onChange={(data) => updateFormData("step1", data)}
            errors={stepErrors}
          />
        );
      case 2:
        return (
          <Step2ShareCapital
            data={formData.step2}
            onChange={(data) => updateFormData("step2", data)}
            errors={stepErrors}
          />
        );
      case 3:
        return (
          <Step3Shareholders
            data={formData.step3}
            onChange={(data) => updateFormData("step3", data)}
            errors={stepErrors}
          />
        );
      case 4:
        return (
          <Step4Directors
            data={formData.step4}
            onChange={(data) => updateFormData("step4", data)}
            shareholdersFromStep3={formData.step3.shareholders}
            errors={stepErrors}
          />
        );
      case 5:
        return (
          <Step5Services
            data={formData.step5}
            onChange={(data) => updateFormData("step5", data)}
          />
        );
      // Case 6 is commented out in your original code (Documents)
      case 6:
        return (
          <Step7Billing
            data={formData.step6}
            onChange={(data) => updateFormData("step6", data)}
            errors={stepErrors}
          />
        );
      case 7:
        return (
          <Step8Review
            data={formData.step7}
            onChange={(data) => updateFormData("step7", data)}
            formData={formData}
            errors={stepErrors}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f0f4ff]">
      <div className="max-w-5xl mx-auto px-2 md:px-6 xl:px-2 py-8 md:py-12">
        {/* Header */}
        <div className="text-center lg:text-start mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#212833] mb-3">
            Hong Kong Company Formation
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Complete all sections to register your Private Limited Company
          </p>
        </div>

        {/* Progress Bar & Step Indicators */}
        <div className="sticky top-0 z-10 backdrop-blur-lg rounded-2xl py-2 px-2 md:px-4 md:py-4 md:pb-6 ">
          <div className="mb-6 md:mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-[#212833]">
                Step {currentStep} of 7
              </span>
              <span className="text-sm font-semibold text-[#004eff]">
                Progress: {progressPercentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#6896ff] to-[#004eff] h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Render Step Indicators (Mobile/Desktop) - Kept largely the same */}
          <div className="py-2">
            {/* Mobile Carousel */}
            <div className="md:hidden overflow-hidden px-2">
              <div
                className="flex items-center transition-transform duration-500 ease-out"
                style={{
                  transform: getMobileTrackTransform(currentStep),
                  gap: `${MOBILE_STEP_GAP}px`,
                }}
              >
                {steps.map((step, index) => (
                  <React.Fragment key={step.number}>
                    <div
                      className="flex flex-col items-center py-1 flex-shrink-0"
                      style={{ width: `${MOBILE_STEP_WIDTH}px` }}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                          currentStep > step.number
                            ? "bg-green-500 text-white"
                            : currentStep === step.number
                              ? "bg-[#004eff] text-white ring-4 ring-[#004eff]/20"
                              : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {currentStep > step.number ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          step.number
                        )}
                      </div>
                      <span
                        className={`text-xs mt-2 font-medium whitespace-nowrap ${
                          currentStep === step.number
                            ? "text-[#004eff]"
                            : currentStep > step.number
                              ? "text-green-600"
                              : "text-gray-500"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-0.5 w-8 mb-6 transition-all duration-300 flex-shrink-0 ${
                          step.number < currentStep
                            ? "bg-green-500"
                            : "bg-gray-200"
                        }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Desktop Steps */}
            <div className="hidden md:block">
              <div className="flex items-center gap-2 lg:gap-3 justify-center">
                {steps.map((step, index) => (
                  <React.Fragment key={step.number}>
                    <div className="flex flex-col items-center py-1">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                          currentStep > step.number
                            ? "bg-green-500 text-white"
                            : currentStep === step.number
                              ? "bg-[#004eff] text-white ring-4 ring-[#004eff]/20"
                              : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {currentStep > step.number ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          step.number
                        )}
                      </div>
                      <span
                        className={`text-xs mt-2 font-medium whitespace-nowrap ${
                          currentStep === step.number
                            ? "text-[#004eff]"
                            : currentStep > step.number
                              ? "text-green-600"
                              : "text-gray-500"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-0.5 w-16 mb-6 transition-all duration-300 ${
                          currentStep > step.number
                            ? "bg-green-500"
                            : "bg-gray-200"
                        }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 md:p-10 mb-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#212833] mb-1">
              {steps[currentStep - 1]?.label}
            </h2>
            <p className="text-sm text-gray-500">Step {currentStep} of 7</p>
          </div>
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4">
          <Button
            onClick={prevStep}
            disabled={currentStep === 1 || isLoading}
            variant="outline"
            className="h-12 px-6 rounded-full border-2 border-gray-300 hover:border-[#004eff] hover:bg-[#004eff] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>

          {currentStep < 7 ? (
            <Button
              onClick={handleNext}
              className="h-12 px-8 rounded-full bg-gradient-to-r from-[#6896ff] to-[#004eff] hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Next
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={submitApplication}
              disabled={!canProceed() || isLoading}
              className="h-12 px-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <Check className="w-5 h-5 mr-2" />
              )}
              {isLoading ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
