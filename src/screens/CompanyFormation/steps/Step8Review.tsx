import React from "react";
import { FileText, AlertCircle } from "lucide-react";
import { Checkbox } from "../../../components/ui/checkbox";
import {
  useCompanyStore,
  useShareholders,
  useDirectors,
} from "../../../store/useCompanyStore";

export const Step8Review: React.FC = () => {
  // Use the store directly
  const { formData, stepErrors, acceptCompliance } = useCompanyStore();
  const shareholders = useShareholders();
  const directors = useDirectors();
  const errors = stepErrors;

  const { applicant, company, shareCapital, services, complianceAccepted } =
    formData;

  // Provide defaults for billing in case of hydration issues with old persisted data
  const billing = formData.billing ?? {
    name: "",
    email: "",
    phone: "",
    address: { street: "", city: "", state: "", postalCode: "", country: "" },
    paymentMethod: "",
  };

  // Helper function to get country label
  const getCountryLabel = (value: string) => {
    const countryMap: Record<string, string> = {
      "hong-kong": "Hong Kong",
      singapore: "Singapore",
      usa: "United States",
      uk: "United Kingdom",
      uae: "United Arab Emirates",
    };
    return countryMap[value] || value;
  };

  // Helper function to get country name
  const getCountryName = () => {
    switch (company.countryOfIncorporation) {
      case "usa":
        return "United States";
      case "hong-kong":
        return "Hong Kong";
      case "uk":
        return "United Kingdom";
      case "uae":
        return "United Arab Emirates";
      case "singapore":
        return "Singapore";
      default:
        return "Hong Kong";
    }
  };

  // Helper function to format business types
  const formatBusinessTypes = (types: string[]) => {
    const typeMap: Record<string, string> = {
      "it-saas": "IT / SaaS",
      ecommerce: "E-commerce",
      consulting: "Consulting",
      trading: "Trading",
      manufacturing: "Manufacturing",
      finance: "Finance",
      "real-estate": "Real Estate",
      other: "Other",
    };
    return types.map((t) => typeMap[t] || t).join(" / ");
  };

  // Check section completeness
  const isStep1Complete = !!(
    applicant.firstName &&
    applicant.lastName &&
    applicant.email &&
    company.proposedCompanyName
  );
  const isStep2Complete = shareholders.length > 0;
  const isStep3Complete =
    shareholders.length > 0 && shareholders.every((s) => s.fullName && s.email);
  const isStep4Complete =
    directors.length > 0 && directors.every((d) => d.fullName && d.email);
  const isBillingComplete = !!(
    billing.name &&
    billing.email &&
    billing.address.street &&
    billing.address.country &&
    billing.paymentMethod
  );

  const incompleteSections = [
    ...(!isStep1Complete ? ["Company Information"] : []),
    ...(!isStep2Complete ? ["Share Capital"] : []),
    ...(!isStep3Complete ? ["Shareholders"] : []),
    ...(!isStep4Complete ? ["Directors"] : []),
    ...(!isBillingComplete ? ["Billing"] : []),
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-xl font-semibold text-[#212833] mb-2">
          Review & Submit
        </h3>
        <p className="text-sm text-gray-600">
          Review your application and sign the compliance declaration
        </p>
      </div>

      {incompleteSections.length > 0 && (
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-amber-800 mb-1">
              Incomplete Sections
            </h4>
            <p className="text-sm text-amber-700">
              The following sections may have missing information:{" "}
              {incompleteSections.join(", ")}. Please go back and complete them
              before submitting.
            </p>
          </div>
        </div>
      )}

      {/* Summary Cards - 2 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Company Details */}
        <div className="p-3 md:p-6 bg-white rounded-xl border border-gray-200">
          <h4 className="text-base font-semibold text-[#212833] mb-4">
            Company Details
          </h4>
          <div className="space-y-3">
            <div>
              <div className="text-xs text-gray-600 mb-1">Country</div>
              <div className="text-sm font-medium text-[#212833]">
                {getCountryLabel(company.countryOfIncorporation) ||
                  "Not selected"}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Name</div>
              <div className="text-sm font-medium text-[#212833]">
                {company.proposedCompanyName || "Not provided"}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Business</div>
              <div className="text-sm font-medium text-[#212833]">
                {company.natureOfBusiness.length > 0
                  ? formatBusinessTypes(company.natureOfBusiness)
                  : "Not selected"}
              </div>
            </div>
          </div>
        </div>

        {/* Share Capital */}
        <div className="p-3 md:p-6 bg-white rounded-xl border border-gray-200">
          <h4 className="text-base font-semibold text-[#212833] mb-4">
            Share Capital
          </h4>
          <div className="space-y-3">
            <div>
              <div className="text-xs text-gray-600 mb-1">Amount</div>
              <div className="text-sm font-medium text-[#212833]">
                {shareCapital.currency}{" "}
                {shareCapital.totalAmount
                  ? Number(shareCapital.totalAmount).toLocaleString()
                  : "0"}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Shares</div>
              <div className="text-sm font-medium text-[#212833]">
                {shareCapital.totalShares
                  ? Number(shareCapital.totalShares).toLocaleString()
                  : "0"}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Shareholders</div>
              <div className="text-sm font-medium text-[#212833]">
                {shareholders.length}
              </div>
            </div>
          </div>
        </div>

        {/* Directors */}
        <div className="p-3 md:p-6 bg-white rounded-xl border border-gray-200">
          <h4 className="text-base font-semibold text-[#212833] mb-4">
            Directors
          </h4>
          <div className="space-y-3">
            <div>
              <div className="text-xs text-gray-600 mb-1">Count</div>
              <div className="text-sm font-medium text-[#212833]">
                {directors.length}
              </div>
            </div>
            {directors.length > 0 && (
              <div>
                <ul className="list-disc list-inside space-y-1">
                  {directors.map((director, index: number) => (
                    <li key={index} className="text-sm text-[#212833]">
                      {director.fullName || `Director ${index + 1}`}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Services */}
        <div className="p-3 md:p-6 bg-white rounded-xl border border-gray-200">
          <h4 className="text-base font-semibold text-[#212833] mb-4">
            Services
          </h4>
          <div className="space-y-3">
            <div>
              <div className="text-xs text-gray-600 mb-1">Banking</div>
              <div className="text-sm font-medium text-[#212833]">
                {services.banking.providers.length} selected
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Additional</div>
              <div className="text-sm font-medium text-[#212833]">
                {services.additionalServices.length} selected
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Nominee</div>
              <div className="text-sm font-medium text-[#212833]">
                {services.additionalServices.includes("nominee-director")
                  ? "Yes"
                  : "No"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Declaration */}
      <div className="p-3 md:p-6 bg-blue-50 rounded-xl border border-blue-200">
        <div className="flex items-start gap-3 mb-4">
          <FileText className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-base font-semibold text-[#212833] mb-3">
              Compliance Declaration
            </h4>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                I hereby declare that the information provided is complete and
                accurate. I confirm that the company will not engage in
                restricted or unlawful activities under {getCountryName()} law,
                including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Money laundering or terrorist financing</li>
                <li>Illegal trading of goods or services</li>
                <li>
                  Activities prohibited under {getCountryName()} regulations
                </li>
                <li>Tax evasion or fraudulent activities</li>
              </ul>
              <p>
                I understand that providing false information may result in
                rejection of the application and potential legal consequences.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Checkbox
            checked={complianceAccepted.isAccepted}
            onCheckedChange={(checked) => acceptCompliance(checked)}
            label="I have read and agree to the compliance declaration above"
          />
          {errors?.complianceAccepted && (
            <p className="text-xs text-red-500 mt-2 ml-8">
              {errors.complianceAccepted}
            </p>
          )}
        </div>
      </div>

      {/* Ready to Submit */}
      <div className="p-3 md:p-5 bg-green-50 rounded-xl border border-green-200">
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white shrink-0">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-base font-semibold text-[#212833] mb-2">
              Ready to Submit
            </h4>
            <p className="text-sm text-gray-700">
              Your application is complete. After submission, our team will
              review your application within 2-3 business days and contact you
              for any additional requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
