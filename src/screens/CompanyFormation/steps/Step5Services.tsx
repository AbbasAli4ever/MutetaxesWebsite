import React from "react";
import { Checkbox } from "../../../components/ui/checkbox";

export interface Step5Data {
  bankingServices: string[];
  additionalServices: string[];
}

interface Step5Props {
  data: Step5Data;
  onChange: (data: Partial<Step5Data>) => void;
}

const bankingOptions = [
  { id: "airwallex", label: "Airwallex" },
  { id: "paypal", label: "PayPal" },
  { id: "payoneer", label: "Payoneer" },
  { id: "currenxie", label: "Currenxie" },
  { id: "stripe", label: "Stripe" },
  { id: "bank-account-assistance", label: "Bank Account Assistance" },
  { id: "no-bank-account", label: "No Bank Account Needed" },
];

const additionalServiceOptions = [
  { id: "annual-secretarial", label: "Annual Secretarial Service" },
  { id: "registered-address-renewal", label: "Registered Address Renewal" },
  { id: "accounting-bookkeeping", label: "Accounting & Bookkeeping" },
  { id: "audit-arrangement", label: "Audit Arrangement" },
  { id: "br-renewal", label: "BR Renewal Handling" },
  { id: "virtual-office", label: "Virtual Office" },
  { id: "phone-efax", label: "Phone Number / E-Fax" },
  { id: "nominee-shareholder", label: "Nominee Shareholder Service" },
  { id: "nominee-director", label: "Nominee Director Service" },
  { id: "compliance-support", label: "Compliance Support" },
  { id: "visa-application", label: "Visa Application Support" },
  { id: "payment-setup", label: "PayPal / Stripe Setup Guidance" },
];

export const Step5Services: React.FC<Step5Props> = ({ data, onChange }) => {
  const handleBankingChange = (id: string, checked: boolean) => {
    const updated = checked
      ? [...data.bankingServices, id]
      : data.bankingServices.filter((item) => item !== id);
    onChange({ bankingServices: updated });
  };

  const handleAdditionalServiceChange = (id: string, checked: boolean) => {
    const updated = checked
      ? [...data.additionalServices, id]
      : data.additionalServices.filter((item) => item !== id);
    onChange({ additionalServices: updated });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-xl font-semibold text-[#212833] mb-2">
          Banking & Additional Services
        </h3>
        <p className="text-sm text-gray-600">
          Select the services you need to support your business
        </p>
      </div>

      {/* Bank Account Opening Services */}
      <div className="p-3 md:p-6 bg-white rounded-xl border border-gray-200">
        <h4 className="text-base font-semibold text-[#212833] mb-2">
          Bank Account Opening Services (Optional)
        </h4>
        <p className="text-sm text-gray-600 mb-6">
          Select your preferred banking or fintech platforms
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {bankingOptions.map((option) => (
            <Checkbox
              key={option.id}
              checked={data.bankingServices.includes(option.id)}
              onCheckedChange={(checked) => handleBankingChange(option.id, checked)}
              label={option.label}
            />
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="p-3 md:p-6 bg-white rounded-xl border border-gray-200">
        <h4 className="text-base font-semibold text-[#212833] mb-2">
          Additional Services (Optional)
        </h4>
        <p className="text-sm text-gray-600 mb-6">
          Enhance your company formation with these value-added services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {additionalServiceOptions.map((option) => (
            <Checkbox
              key={option.id}
              checked={data.additionalServices.includes(option.id)}
              onCheckedChange={(checked) =>
                handleAdditionalServiceChange(option.id, checked)
              }
              label={option.label}
            />
          ))}
        </div>
      </div>

      {/* Service Selection Summary */}
      <div className="p-3 md:p-6 bg-[#f0f4ff] rounded-xl border border-blue-200">
        <h4 className="font-semibold text-[#212833] mb-3">Service Selection Summary</h4>
        <div className="space-y-1 text-sm text-gray-700">
          <p>
            <span className="font-medium">Banking Services:</span>{" "}
            {data.bankingServices.length} selected
          </p>
          <p>
            <span className="font-medium">Additional Services:</span>{" "}
            {data.additionalServices.length} selected
          </p>
        </div>
      </div>
    </div>
  );
};
