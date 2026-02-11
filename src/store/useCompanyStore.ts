import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// --- Interfaces (Moved from your component) ---
// You might want to move these to a separate types.ts file eventually

export interface Step1Data {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryOfIncorporation: string;
  proposedCompanyName: string;
  alternativeName1: string;
  alternativeName2: string;
  alternativeName3: string;
  natureOfBusiness: string[];
  businessScope: string;
  businessScopeDescription: string;
  companyType: string;
}

export interface Step2Data {
  shareCapitalAmount: string;
  totalShares: string;
  shareDistribution: any[]; // Define stricter types if available
}

export interface Step3Data {
  shareholders: any[];
}

export interface Step4Data {
  directors: any[];
  nomineeDirectorService: boolean;
}

export interface Step5Data {
  bankingServices: any[];
  additionalServices: any[];
}

// export interface Step6Data {
//   passportDocuments: any[];
//   selfieDocuments: any[];
//   addressProofs: any[];
// }

export interface Step7Data {
  billingName: string;
  billingEmail: string;
  billingPhone: string;
  billingAddress: string;
  billingCountry: string;
  paymentMethod: string;
}

export interface Step8Data {
  complianceAccepted: boolean;
}

export interface FormData {
  step1: Step1Data;
  step2: Step2Data;
  step3: Step3Data;
  step4: Step4Data;
  step5: Step5Data;
  // step6: Step6Data;
  step6: Step7Data;
  step7: Step8Data;
}

interface CompanyStoreState {
  currentStep: number;
  formData: FormData;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  stepErrors: Record<string, string>;

  // Actions
  setStep: (step: number) => void;
  updateFormData: (step: keyof FormData, data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  submitApplication: () => Promise<void>;
  validateStep: (step: number) => boolean;
  clearStepErrors: () => void;
  resetForm: () => void;
}

// --- Initial State ---
const initialFormData: FormData = {
  step1: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryOfIncorporation: "hong-kong",
    proposedCompanyName: "",
    alternativeName1: "",
    alternativeName2: "",
    alternativeName3: "",
    natureOfBusiness: [],
    businessScope: "",
    businessScopeDescription: "",
    companyType: "Private Limited Company",
  },
  step2: {
    shareCapitalAmount: "10000",
    totalShares: "10000",
    shareDistribution: [],
  },
  step3: {
    shareholders: [],
  },
  step4: {
    directors: [],
    nomineeDirectorService: false,
  },
  step5: {
    bankingServices: [],
    additionalServices: [],
  },
  // step6: {
  //   passportDocuments: [],
  //   selfieDocuments: [],
  //   addressProofs: [],
  // },
  step6: {
    billingName: "",
    billingEmail: "",
    billingPhone: "",
    billingAddress: "",
    billingCountry: "",
    paymentMethod: "",
  },
  step7: {
    complianceAccepted: false,
  },
};

export const useCompanyStore = create<CompanyStoreState>()(
  persist(
    (set, get) => ({
      currentStep: 1,
      formData: initialFormData,
      isLoading: false,
      isSuccess: false,
      error: null,
      stepErrors: {},

      setStep: (step) => set({ currentStep: step }),

      updateFormData: (step, data) =>
        set((state) => ({
          formData: {
            ...state.formData,
            [step]: { ...state.formData[step], ...data },
          },
          stepErrors: {},
        })),

      nextStep: () => {
        const { currentStep, formData } = get();

        // Sync Logic: Step 2 -> Step 3
        if (currentStep === 2) {
          const shareholdersFromStep2 = formData.step2.shareDistribution.map(
            (dist) => ({
              id: dist.id,
              type: "individual" as const,
              fullName: dist.name,
              nationality: "",
              email: "",
              phone: "",
              shares: dist.shares,
              percentage: dist.percentage,
              residentialAddress: "",
              passportFile: null,
              selfieFile: null,
              addressProofFile: null,
            }),
          );

          set((state) => ({
            formData: {
              ...state.formData,
              step3: { shareholders: shareholdersFromStep2 },
            },
          }));
        }

        if (currentStep < 7) {
          set({ currentStep: currentStep + 1 });
        }
      },

      prevStep: () => {
        const { currentStep } = get();
        if (currentStep > 1) {
          set({ currentStep: currentStep - 1 });
        }
      },

      submitApplication: async () => {
        const { formData } = get();
        set({ isLoading: true, error: null });
        let steps = {
          formData,
        };
        try {
          console.log(JSON.stringify(steps));

          // Replace with your actual API endpoint

          const response = await fetch("https://api.your-domain.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });

          if (!response.ok) throw new Error("Submission failed");

          set({ isSuccess: true, isLoading: false });

          // Optional: Clear storage on success
          // localStorage.removeItem('company-formation-storage');
        } catch (err: any) {
          set({
            error: err.message || "Something went wrong",
            isLoading: false,
          });
        }
      },

      validateStep: (step: number) => {
        const { formData } = get();
        const errors: Record<string, string> = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        switch (step) {
          case 1: {
            const d = formData.step1;
            if (!d.firstName.trim())
              errors.firstName = "First name is required";
            if (!d.lastName.trim()) errors.lastName = "Last name is required";
            if (!d.email.trim()) errors.email = "Email is required";
            else if (!emailRegex.test(d.email))
              errors.email = "Invalid email format";
            if (!d.phone.trim()) errors.phone = "Phone number is required";
            if (!d.proposedCompanyName.trim())
              errors.proposedCompanyName = "Company name is required";
            if (d.natureOfBusiness.length === 0)
              errors.natureOfBusiness = "Select at least one business type";
            if (!d.businessScope)
              errors.businessScope = "Business scope is required";
            if (!d.businessScopeDescription.trim())
              errors.businessScopeDescription = "Description is required";
            break;
          }
          case 2: {
            const d = formData.step2;
            if (
              !d.shareCapitalAmount ||
              isNaN(Number(d.shareCapitalAmount)) ||
              Number(d.shareCapitalAmount) <= 0
            )
              errors.shareCapitalAmount = "Enter a valid share capital amount";
            if (
              !d.totalShares ||
              isNaN(Number(d.totalShares)) ||
              Number(d.totalShares) <= 0
            )
              errors.totalShares = "Enter a valid number of shares";
            if (d.shareDistribution.length === 0) {
              errors.shareDistribution = "Add at least one shareholder";
            } else {
              const totalDistributed = d.shareDistribution.reduce(
                (sum: number, s: any) => sum + (parseFloat(s.shares) || 0),
                0,
              );
              const totalShares = parseFloat(d.totalShares) || 0;
              if (totalDistributed > totalShares)
                errors.shareDistribution =
                  "Distributed shares exceed total shares";
              const incomplete = d.shareDistribution.some(
                (s: any) => !s.name?.trim() || !s.shares?.trim(),
              );
              if (incomplete)
                errors.shareDistribution =
                  "All shareholders must have a name and share count";
            }
            break;
          }
          case 3: {
            const d = formData.step3;
            if (d.shareholders.length === 0) {
              errors.shareholders = "At least one shareholder is required";
              break;
            }
            d.shareholders.forEach((s: any, i: number) => {
              if (!s.fullName?.trim())
                errors[`shareholders.${i}.fullName`] = "Full name is required";
              if (!s.nationality)
                errors[`shareholders.${i}.nationality`] =
                  "Nationality is required";
              if (!s.email?.trim())
                errors[`shareholders.${i}.email`] = "Email is required";
              else if (!emailRegex.test(s.email))
                errors[`shareholders.${i}.email`] = "Invalid email format";
              if (!s.phone?.trim())
                errors[`shareholders.${i}.phone`] = "Phone is required";
              if (!s.residentialAddress?.trim())
                errors[`shareholders.${i}.residentialAddress`] =
                  "Address is required";
              if (!s.passportFile)
                errors[`shareholders.${i}.passportFile`] =
                  "Passport upload is required";
              if (!s.selfieFile)
                errors[`shareholders.${i}.selfieFile`] =
                  "Selfie upload is required";
              if (!s.addressProofFile)
                errors[`shareholders.${i}.addressProofFile`] =
                  "Address proof is required";
            });
            break;
          }
          case 4: {
            const d = formData.step4;
            if (d.directors.length === 0) {
              errors.directors = "At least one director is required";
              break;
            }
            d.directors.forEach((dir: any, i: number) => {
              if (!dir.fullName?.trim())
                errors[`directors.${i}.fullName`] = "Full name is required";
              if (!dir.nationality)
                errors[`directors.${i}.nationality`] =
                  "Nationality is required";
              if (!dir.email?.trim())
                errors[`directors.${i}.email`] = "Email is required";
              else if (!emailRegex.test(dir.email))
                errors[`directors.${i}.email`] = "Invalid email format";
              if (!dir.phone?.trim())
                errors[`directors.${i}.phone`] = "Phone is required";
              if (!dir.residentialAddress?.trim())
                errors[`directors.${i}.residentialAddress`] =
                  "Address is required";
              if (!dir.passportFile)
                errors[`directors.${i}.passportFile`] =
                  "Passport upload is required";
              if (!dir.selfieFile)
                errors[`directors.${i}.selfieFile`] =
                  "Selfie upload is required";
              if (!dir.addressProofFile)
                errors[`directors.${i}.addressProofFile`] =
                  "Address proof is required";
            });
            break;
          }
          case 5:
            break;
          case 6: {
            const d = formData.step6;
            if (!d.billingName.trim())
              errors.billingName = "Billing name is required";
            if (!d.billingEmail.trim())
              errors.billingEmail = "Email is required";
            else if (!emailRegex.test(d.billingEmail))
              errors.billingEmail = "Invalid email format";
            if (!d.billingPhone.trim())
              errors.billingPhone = "Phone is required";
            if (!d.billingAddress.trim())
              errors.billingAddress = "Billing address is required";
            if (!d.billingCountry)
              errors.billingCountry = "Country is required";
            if (!d.paymentMethod)
              errors.paymentMethod = "Payment method is required";
            break;
          }
          case 7: {
            if (!formData.step7.complianceAccepted)
              errors.complianceAccepted =
                "You must accept the compliance declaration";
            break;
          }
        }

        set({ stepErrors: errors });
        return Object.keys(errors).length === 0;
      },

      clearStepErrors: () => set({ stepErrors: {} }),

      resetForm: () =>
        set({
          currentStep: 1,
          formData: initialFormData,
          isSuccess: false,
          error: null,
          stepErrors: {},
        }),
    }),
    {
      name: "company-formation-storage", // Unique key in localStorage
      storage: createJSONStorage(() => localStorage), // Default is localStorage, but being explicit is good
      partialize: (state) => ({
        // Select fields to persist (exclude isLoading/errors)
        currentStep: state.currentStep,
        formData: state.formData,
      }),
    },
  ),
);
