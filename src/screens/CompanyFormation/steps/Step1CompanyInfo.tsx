import React from "react";
import { Input } from "../../../components/ui/input";
import { Select, SelectOption } from "../../../components/ui/select";
import { Checkbox } from "../../../components/ui/checkbox";
import { Textarea } from "../../../components/ui/textarea";

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

interface Step1Props {
  data: Step1Data;
  onChange: (data: Partial<Step1Data>) => void;
  errors?: Record<string, string>;
}

const countryOptions: SelectOption[] = [
  { value: "hong-kong", label: "Hong Kong" },
  { value: "singapore", label: "Singapore" },
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
];

const businessScopeOptions: SelectOption[] = [
  { value: "trading", label: "Trading" },
  { value: "consulting", label: "Consulting Services" },
  { value: "it-services", label: "IT & Software Services" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "import-export", label: "Import/Export" },
  { value: "ecommerce", label: "E-Commerce" },
  { value: "finance", label: "Financial Services" },
  { value: "real-estate", label: "Real Estate" },
];

const natureOfBusinessOptions = [
  { id: "ecommerce", label: "E-Commerce" },
  { id: "consulting", label: "Consulting" },
  { id: "services", label: "Services" },
  { id: "trading", label: "Trading" },
  { id: "it-saas", label: "IT / SaaS" },
  { id: "import-export", label: "Import/Export" },
];

export const Step1CompanyInfo: React.FC<Step1Props> = ({
  data,
  onChange,
  errors,
}) => {
  const handleCheckboxChange = (id: string, checked: boolean) => {
    const updatedNature = checked
      ? [...data.natureOfBusiness, id]
      : data.natureOfBusiness.filter((item) => item !== id);
    onChange({ natureOfBusiness: updatedNature });
  };

  return (
    <div className="space-y-8">
      {/* Personal Info */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#212833] border-b border-gray-200 pb-2">
          Personal Info
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#212833]">
              First Name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="Enter first name"
              value={data.firstName}
              onChange={(e) => onChange({ firstName: e.target.value })}
              className={`bg-[#f5f7fa] border-gray-300 h-11 ${errors?.firstName ? "border-red-500" : ""}`}
            />
            {errors?.firstName && (
              <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#212833]">
              Last Name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="Enter last name"
              value={data.lastName}
              onChange={(e) => onChange({ lastName: e.target.value })}
              className={`bg-[#f5f7fa] border-gray-300 h-11 ${errors?.lastName ? "border-red-500" : ""}`}
            />
            {errors?.lastName && (
              <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#212833]">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              placeholder="Enter email address"
              value={data.email}
              onChange={(e) => onChange({ email: e.target.value })}
              className={`bg-[#f5f7fa] border-gray-300 h-11 ${errors?.email ? "border-red-500" : ""}`}
            />
            {errors?.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#212833]">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <Input
              type="tel"
              placeholder="Enter phone number"
              value={data.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              className={`bg-[#f5f7fa] border-gray-300 h-11 ${errors?.phone ? "border-red-500" : ""}`}
            />
            {errors?.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-[#212833] border-b border-gray-200 pb-2">
          Company Information
        </h3>

        {/* Country of Incorporation */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#212833]">
            Country of Incorporation <span className="text-red-500">*</span>
          </label>
          <Select
            options={countryOptions}
            value={data.countryOfIncorporation}
            onChange={(value) => onChange({ countryOfIncorporation: value })}
            placeholder="Hong Kong"
          />
        </div>

        {/* Proposed Company Name */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#212833]">
            Proposed Company Name (English){" "}
            <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            placeholder="Enter proposed company name"
            value={data.proposedCompanyName}
            onChange={(e) => onChange({ proposedCompanyName: e.target.value })}
            className={`bg-[#f5f7fa] border-gray-300 h-11 ${errors?.proposedCompanyName ? "border-red-500" : ""}`}
          />
          {errors?.proposedCompanyName && (
            <p className="text-xs text-red-500 mt-1">
              {errors.proposedCompanyName}
            </p>
          )}
        </div>

        {/* Alternative Names */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#212833]">
            Alternative Names (Optional)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Input
              type="text"
              placeholder="Alternative name 1"
              value={data.alternativeName1}
              onChange={(e) => onChange({ alternativeName1: e.target.value })}
              className="bg-[#f5f7fa] border-gray-300 h-11"
            />
            <Input
              type="text"
              placeholder="Alternative name 2"
              value={data.alternativeName2}
              onChange={(e) => onChange({ alternativeName2: e.target.value })}
              className="bg-[#f5f7fa] border-gray-300 h-11"
            />
            <Input
              type="text"
              placeholder="Alternative name 3"
              value={data.alternativeName3}
              onChange={(e) => onChange({ alternativeName3: e.target.value })}
              className="bg-[#f5f7fa] border-gray-300 h-11"
            />
          </div>
        </div>

        {/* Nature of Business */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-[#212833]">
            Nature of Business <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {natureOfBusinessOptions.map((option) => (
              <Checkbox
                key={option.id}
                checked={data.natureOfBusiness.includes(option.id)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(option.id, checked)
                }
                label={option.label}
              />
            ))}
          </div>
          {errors?.natureOfBusiness && (
            <p className="text-xs text-red-500 mt-1">
              {errors.natureOfBusiness}
            </p>
          )}
        </div>

        {/* Business Scope */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#212833]">
            Business Scope <span className="text-red-500">*</span>
          </label>
          <Select
            options={businessScopeOptions}
            value={data.businessScope}
            onChange={(value) => onChange({ businessScope: value })}
            placeholder="Select business scope"
          />
          {errors?.businessScope && (
            <p className="text-xs text-red-500 mt-1">{errors.businessScope}</p>
          )}
        </div>

        {/* Business Scope Description */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#212833]">
            Business Scope Description <span className="text-red-500">*</span>
          </label>
          <Textarea
            placeholder="Describe your business activities in detail..."
            value={data.businessScopeDescription}
            onChange={(e) =>
              onChange({ businessScopeDescription: e.target.value })
            }
            className={`bg-[#f5f7fa] border-gray-300 min-h-[100px] ${errors?.businessScopeDescription ? "border-red-500" : ""}`}
          />
          {errors?.businessScopeDescription && (
            <p className="text-xs text-red-500 mt-1">
              {errors.businessScopeDescription}
            </p>
          )}
        </div>

        {/* Company Type */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#212833]">
            Company Type
          </label>
          <Input
            type="text"
            value={data.companyType}
            disabled
            className="bg-[#f5f7fa] border-gray-300 h-11"
          />
        </div>
      </div>
    </div>
  );
};
