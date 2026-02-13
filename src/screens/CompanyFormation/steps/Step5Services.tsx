import React from "react";
import { Checkbox } from "../../../components/ui/checkbox";
import { RadioGroup } from "../../../components/ui/radio-group";
import { useCompanyStore } from "../../../store/useCompanyStore";

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

export const Step5Services: React.FC = () => {
  // Use the store directly
  const { formData, updateServices, updateBanking } = useCompanyStore();
  const { services } = formData;

  const handleBankingChange = (id: string, checked: boolean) => {
    let updated = checked
      ? [...services.banking.providers, id]
      : services.banking.providers.filter((item) => item !== id);

    // If the removed provider was the preferred one, clear it
    if (!checked && services.banking.preferredProvider === id) {
      updateBanking({ providers: updated, preferredProvider: "" });
      return;
    }

    updateBanking({ providers: updated });
  };

  const handlePreferredProviderChange = (value: string) => {
    updateBanking({ preferredProvider: value });
  };

  const handleAdditionalServiceChange = (id: string, checked: boolean) => {
    const updated = checked
      ? [...services.additionalServices, id]
      : services.additionalServices.filter((item) => item !== id);
    updateServices({ additionalServices: updated });
  };

  // Get selected banking providers for preferred provider selection (exclude "no-bank-account")
  const selectedBankingProviders = services.banking.providers
    .filter((id) => id !== "no-bank-account")
    .map((id) => {
      const option = bankingOptions.find((opt) => opt.id === id);
      return option ? { value: option.id, label: option.label } : null;
    })
    .filter(Boolean) as { value: string; label: string }[];

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
              checked={services.banking.providers.includes(option.id)}
              onCheckedChange={(checked) =>
                handleBankingChange(option.id, checked)
              }
              label={option.label}
            />
          ))}
        </div>

        {/* Preferred Provider Selection */}
        {selectedBankingProviders.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h5 className="text-sm font-semibold text-[#212833] mb-2">
              Preferred Provider
            </h5>
            <p className="text-sm text-gray-600 mb-4">
              Select your primary banking service preference
            </p>
            <RadioGroup
              name="preferred-banking-provider"
              options={selectedBankingProviders}
              value={services.banking.preferredProvider}
              onChange={handlePreferredProviderChange}
            />
          </div>
        )}
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
              checked={services.additionalServices.includes(option.id)}
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
        <h4 className="font-semibold text-[#212833] mb-3">
          Service Selection Summary
        </h4>
        <div className="space-y-1 text-sm text-gray-700">
          <p>
            <span className="font-medium">Banking Services:</span>{" "}
            {services.banking.providers.length} selected
          </p>
          <p>
            <span className="font-medium">Additional Services:</span>{" "}
            {services.additionalServices.length} selected
          </p>
        </div>
      </div>
    </div>
  );
};
