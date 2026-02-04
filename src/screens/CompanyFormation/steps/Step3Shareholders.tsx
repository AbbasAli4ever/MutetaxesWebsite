import React from "react";
import { Input } from "../../../components/ui/input";
import { Select, SelectOption } from "../../../components/ui/select";
import { RadioGroup } from "../../../components/ui/radio-group";
import { Button } from "../../../components/ui/button";
import { Upload } from "lucide-react";

export interface Shareholder {
  id: string;
  type: "individual" | "corporate";
  fullName: string;
  nationality: string;
  email: string;
  phone: string;
  shares: string;
  percentage: string;
  residentialAddress: string;
  passportFile: File | null;
  addressProofFile: File | null;
}

export interface Step3Data {
  shareholders: Shareholder[];
}

interface Step3Props {
  data: Step3Data;
  onChange: (data: Partial<Step3Data>) => void;
}

const nationalityOptions: SelectOption[] = [
  { value: "hong-kong", label: "Hong Kong" },
  { value: "china", label: "China" },
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "singapore", label: "Singapore" },
  { value: "india", label: "India" },
  { value: "japan", label: "Japan" },
  { value: "korea", label: "South Korea" },
];

const shareholderTypeOptions = [
  { value: "individual", label: "Individual" },
  { value: "corporate", label: "Corporate" },
];

export const Step3Shareholders: React.FC<Step3Props> = ({ data, onChange }) => {
  const updateShareholder = (id: string, field: keyof Shareholder, value: any) => {
    onChange({
      shareholders: data.shareholders.map((s) =>
        s.id === id ? { ...s, [field]: value } : s
      ),
    });
  };

  const handleFileUpload = (id: string, field: "passportFile" | "addressProofFile", file: File | null) => {
    updateShareholder(id, field, file);
  };

  // Initialize with one shareholder if none exist
  React.useEffect(() => {
    if (data.shareholders.length === 0) {
      onChange({
        shareholders: [
          {
            id: "1",
            type: "individual",
            fullName: "",
            nationality: "",
            email: "",
            phone: "",
            shares: "",
            percentage: "",
            residentialAddress: "",
            passportFile: null,
            addressProofFile: null,
          },
        ],
      });
    }
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-xl font-semibold text-[#212833] mb-2">Shareholders Information</h3>
        <p className="text-sm text-gray-600">
          Provide detailed information for each shareholder
        </p>
      </div>

      {/* Shareholders List */}
      <div className="space-y-6">
        {data.shareholders.map((shareholder, index) => (
          <div
            key={shareholder.id}
            className="p-3 md:p-6 bg-[#f9fafb] rounded-xl border border-gray-200"
          >
            <h4 className="text-lg font-semibold text-[#212833] mb-6">
              Shareholder {index + 1}: {shareholder.type === "individual" ? "Human" : "Corporate"}
            </h4>

            {/* Shareholder Type */}
            <div className="space-y-2 mb-6">
              <label className="block text-sm font-medium text-[#212833]">
                Shareholder Type <span className="text-red-500">*</span>
              </label>
              <RadioGroup
                name={`shareholder-type-${shareholder.id}`}
                options={shareholderTypeOptions}
                value={shareholder.type}
                onChange={(value) =>
                  updateShareholder(shareholder.id, "type", value as "individual" | "corporate")
                }
              />
            </div>

            {/* Full Name */}
            <div className="space-y-2 mb-6">
              <label className="block text-sm font-medium text-[#212833]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                placeholder="Numan"
                value={shareholder.fullName}
                onChange={(e) => updateShareholder(shareholder.id, "fullName", e.target.value)}
                className="bg-white border-gray-300 h-11"
              />
            </div>

            {/* Nationality & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212833]">
                  Nationality <span className="text-red-500">*</span>
                </label>
                <Select
                  options={nationalityOptions}
                  value={shareholder.nationality}
                  onChange={(value) => updateShareholder(shareholder.id, "nationality", value)}
                  placeholder="Select nationality"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212833]">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="email@example.com"
                  value={shareholder.email}
                  onChange={(e) => updateShareholder(shareholder.id, "email", e.target.value)}
                  className="bg-white border-gray-300 h-11"
                />
              </div>
            </div>

            {/* Phone & Shareholding */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212833]">
                  Phone <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  placeholder="+852-0000-0000"
                  value={shareholder.phone}
                  onChange={(e) => updateShareholder(shareholder.id, "phone", e.target.value)}
                  className="bg-white border-gray-300 h-11"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212833]">Shareholding</label>
                <Input
                  type="text"
                  placeholder="0 shares (-0.01%)"
                  value={
                    shareholder.shares
                      ? `${shareholder.shares} shares (${shareholder.percentage})`
                      : ""
                  }
                  disabled
                  className="bg-gray-100 border-gray-300 h-11 text-gray-600"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Based on share distribution from Step 2
                </p>
              </div>
            </div>

            {/* Residential Address */}
            <div className="space-y-2 mb-6">
              <label className="block text-sm font-medium text-[#212833]">
                Residential Address <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                placeholder="Enter full residential address"
                value={shareholder.residentialAddress}
                onChange={(e) =>
                  updateShareholder(shareholder.id, "residentialAddress", e.target.value)
                }
                className="bg-white border-gray-300 h-11"
              />
            </div>

            {/* File Uploads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Passport Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212833]">
                  Passport/ID Upload <span className="text-red-500">*</span>
                </label>
                <label className="flex items-center justify-center gap-2 h-11 px-4 border-2 border-gray-300 rounded-md bg-white hover:bg-gray-50 cursor-pointer transition-colors">
                  <Upload className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">
                    {shareholder.passportFile
                      ? shareholder.passportFile.name
                      : "Upload Passport"}
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                      handleFileUpload(
                        shareholder.id,
                        "passportFile",
                        e.target.files?.[0] || null
                      )
                    }
                    className="hidden"
                  />
                </label>
              </div>

              {/* Proof of Address Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212833]">
                  Proof of Address Upload <span className="text-red-500">*</span>
                </label>
                <label className="flex items-center justify-center gap-2 h-11 px-4 border-2 border-gray-300 rounded-md bg-white hover:bg-gray-50 cursor-pointer transition-colors">
                  <Upload className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">
                    {shareholder.addressProofFile
                      ? shareholder.addressProofFile.name
                      : "Upload Document"}
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                      handleFileUpload(
                        shareholder.id,
                        "addressProofFile",
                        e.target.files?.[0] || null
                      )
                    }
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> The shareholding distribution is automatically pulled from Step 2.
          If you need to add more shareholders or modify the distribution, please go back to Step 2.
        </p>
      </div>
    </div>
  );
};
