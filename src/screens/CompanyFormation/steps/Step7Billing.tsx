import React from "react";
import { Input } from "../../../components/ui/input";
import { Select, SelectOption } from "../../../components/ui/select";
import { Textarea } from "../../../components/ui/textarea";

export interface Step7Data {
  billingName: string;
  billingEmail: string;
  billingPhone: string;
  billingAddress: string;
  billingCountry: string;
  paymentMethod: string;
}

interface Step7Props {
  data: Step7Data;
  onChange: (data: Partial<Step7Data>) => void;
}

const countryOptions: SelectOption[] = [
  { value: "hong-kong", label: "Hong Kong" },
  { value: "china", label: "China" },
  { value: "singapore", label: "Singapore" },
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "india", label: "India" },
  { value: "japan", label: "Japan" },
  { value: "australia", label: "Australia" },
];

const paymentMethodOptions: SelectOption[] = [
  { value: "credit-card", label: "Credit Card" },
  { value: "bank-transfer", label: "Bank Transfer" },
  { value: "paypal", label: "PayPal" },
  { value: "stripe", label: "Stripe" },
];

export const Step7Billing: React.FC<Step7Props> = ({ data, onChange }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-xl font-semibold text-[#212833] mb-2">
          Billing Information
        </h3>
        <p className="text-sm text-gray-600">
          Provide your billing details for invoice generation
        </p>
      </div>

      {/* Billing Form */}
      <div className="p-3 sm:p-6 bg-white rounded-xl border border-gray-200">
        <div className="space-y-4">
          {/* Company/Client Name - Full Width */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#212833]">
              Company/Client Name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="Enter name"
              value={data.billingName}
              onChange={(e) => onChange({ billingName: e.target.value })}
              className="bg-[#f5f7fa] border-gray-300 h-11"
            />
          </div>

          {/* Email & Phone - 2 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#212833]">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                placeholder="billing@example.com"
                value={data.billingEmail}
                onChange={(e) => onChange({ billingEmail: e.target.value })}
                className="bg-[#f5f7fa] border-gray-300 h-11"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#212833]">
                Phone <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                placeholder="+852-0000-0000"
                value={data.billingPhone}
                onChange={(e) => onChange({ billingPhone: e.target.value })}
                className="bg-[#f5f7fa] border-gray-300 h-11"
              />
            </div>
          </div>

          {/* Country & Payment Method - 2 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#212833]">
                Country <span className="text-red-500">*</span>
              </label>
              <Select
                options={countryOptions}
                value={data.billingCountry}
                onChange={(value) => onChange({ billingCountry: value })}
                placeholder="Select country"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#212833]">
                Payment Method <span className="text-red-500">*</span>
              </label>
              <Select
                options={paymentMethodOptions}
                value={data.paymentMethod}
                onChange={(value) => onChange({ paymentMethod: value })}
                placeholder="Select payment method"
              />
            </div>
          </div>

          {/* Billing Address - Full Width Textarea */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#212833]">
              Billing Address <span className="text-red-500">*</span>
            </label>
            <Textarea
              placeholder="Enter full billing address"
              value={data.billingAddress}
              onChange={(e) => onChange({ billingAddress: e.target.value })}
              className="bg-[#f5f7fa] border-gray-300 min-h-[100px] resize-none"
            />
          </div>
        </div>
      </div>

      {/* Estimated Costs */}
      <div className="p-3 md:p-6 bg-[#f9fafb] rounded-xl border border-gray-200">
        <h4 className="text-lg font-semibold text-[#212833] mb-6">Estimated Costs</h4>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">Company Formation Fee</span>
            <span className="text-sm font-semibold text-[#212833]">HKD 5,000</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">Government Registration Fee</span>
            <span className="text-sm font-semibold text-[#212833]">HKD 1,720</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm text-gray-700">Additional Services</span>
              <span className="text-xs text-gray-500 ml-1">(2)</span>
            </div>
            <span className="text-sm font-semibold text-[#212833]">Price on request</span>
          </div>

          <div className="border-t border-gray-300 pt-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-base font-bold text-[#212833]">Estimated Total</span>
              <span className="text-base font-bold text-[#212833]">HKD 6,720</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 italic mt-3">
            * Final pricing will be confirmed after review of selected services
          </p>
        </div>
      </div>
    </div>
  );
};
