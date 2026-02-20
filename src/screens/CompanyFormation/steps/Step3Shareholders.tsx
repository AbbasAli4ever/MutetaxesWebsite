import React, { useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3000";
import { Input } from "../../../components/ui/input";
import { Select, SelectOption } from "../../../components/ui/select";
import { RadioGroup } from "../../../components/ui/radio-group";
import { PhoneInput } from "../../../components/ui/phone-input";
import { AddressInput } from "../../../components/ui/address-input";
import { Upload } from "lucide-react";
import {
  useCompanyStore,
  useShareholders,
  PersonType,
} from "../../../store/useCompanyStore";

const nationalityOptions: SelectOption[] = [
  { value: "hong-kong", label: "Hong Kong" },
  { value: "singapore", label: "Singapore" },
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "uae", label: "United Arab Emirates" },
];

const countryOfIncorporationOptions: SelectOption[] = [
  { value: "hong-kong", label: "Hong Kong" },
  { value: "singapore", label: "Singapore" },
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "uae", label: "United Arab Emirates" },
];

const shareholderTypeOptions = [
  { value: "individual", label: "Individual" },
  { value: "corporate", label: "Corporate" },
];

const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const Step3Shareholders: React.FC = () => {
  // Use the store directly
  const { formData, stepErrors, updatePerson, updatePersonDocuments } =
    useCompanyStore();
  const shareholders = useShareholders();
  const errors = stepErrors;
  const defaultCountryCode = formData.company.countryOfIncorporation;

  const [uploadingFiles, setUploadingFiles] = useState<Record<string, boolean>>({});

  const handleFileUpload = async (
    id: string,
    field:
      | "passport"
      | "selfie"
      | "addressProof"
      | "certificate_of_incorporation"
      | "business_license"
      | "others",
    file: File | null,
  ) => {
    if (!file) {
      updatePersonDocuments(id, { [field]: null });
      return;
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      alert("Unsupported file type. Allowed: PDF, JPEG, PNG, WEBP");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be under 10 MB");
      return;
    }

    const uploadKey = `${id}-${field}`;
    setUploadingFiles((prev) => ({ ...prev, [uploadKey]: true }));

    try {
      const presignRes = await fetch(
        `${API_BASE}/api/v1/uploads/presign`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            documentType: field,
            fileName: file.name,
            mimeType: file.type,
            sizeBytes: file.size,
          }),
        },
      );

      if (!presignRes.ok) {
        const err = await presignRes.json().catch(() => ({}));
        throw new Error(err?.error ?? "Failed to get upload URL");
      }

      const { uploadUrl, key, publicUrl } = await presignRes.json();

      const uploadRes = await fetch(uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (!uploadRes.ok) {
        throw new Error(`Upload failed: ${uploadRes.status}`);
      }

      updatePersonDocuments(id, {
        [field]: {
          key,
          url: publicUrl,
          fileName: file.name,
          mimeType: file.type,
          size: file.size,
        },
      });
    } catch (err: any) {
      alert(err.message ?? "File upload failed");
    } finally {
      setUploadingFiles((prev) => {
        const next = { ...prev };
        delete next[uploadKey];
        return next;
      });
    }
  };

  const isUploading = (id: string, field: string) =>
    !!uploadingFiles[`${id}-${field}`];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-xl font-semibold text-[#212833] mb-2">
          Shareholders Information
        </h3>
        <p className="text-sm text-gray-600">
          Provide detailed information for each shareholder
        </p>
      </div>

      {errors?.shareholders && (
        <p className="text-xs text-red-500 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {errors.shareholders}
        </p>
      )}

      {/* Shareholders List */}
      <div className="space-y-6">
        {shareholders.map((shareholder, index) => (
          <div
            key={shareholder.id}
            className="p-3 md:p-6 bg-[#f9fafb] rounded-xl border border-gray-200"
          >
            <h4 className="text-lg font-semibold text-[#212833] mb-6">
              Shareholder {index + 1}
              {shareholder.fullName ? `: ${shareholder.fullName}` : ""}
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
                  updatePerson(shareholder.id, { type: value as PersonType })
                }
              />
            </div>

            {/* CORPORATE FIELDS - Only show when type is corporate */}
            {shareholder.type === "corporate" && (
              <>
                {/* Company Name */}
                <div className="space-y-2 mb-6">
                  <label className="block text-sm font-medium text-[#212833]">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter company name"
                    value={shareholder.companyName || ""}
                    onChange={(e) =>
                      updatePerson(shareholder.id, {
                        companyName: e.target.value,
                      })
                    }
                    className={`bg-white border-gray-300 h-11 ${errors?.[`shareholders.${index}.companyName`] ? "border-red-500" : ""}`}
                  />
                  {errors?.[`shareholders.${index}.companyName`] && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors[`shareholders.${index}.companyName`]}
                    </p>
                  )}
                </div>

                {/* Country of Incorporation & Registration No */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#212833]">
                      Country of Incorporation{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Select
                      options={countryOfIncorporationOptions}
                      value={shareholder.countryOfIncorporation || ""}
                      onChange={(value) =>
                        updatePerson(shareholder.id, {
                          countryOfIncorporation: value,
                        })
                      }
                      placeholder="Select country"
                    />
                    {errors?.[
                      `shareholders.${index}.countryOfIncorporation`
                    ] && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors[`shareholders.${index}.countryOfIncorporation`]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#212833]">
                      Registration No. <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter registration number"
                      value={shareholder.registrationNumber || ""}
                      onChange={(e) =>
                        updatePerson(shareholder.id, {
                          registrationNumber: e.target.value,
                        })
                      }
                      className={`bg-white border-gray-300 h-11 ${errors?.[`shareholders.${index}.registrationNumber`] ? "border-red-500" : ""}`}
                    />
                    {errors?.[`shareholders.${index}.registrationNumber`] && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors[`shareholders.${index}.registrationNumber`]}
                      </p>
                    )}
                  </div>
                </div>

                {/* Corporate Document Uploads */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Certificate of Incorporation */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#212833]">
                      Certificate of Incorporation{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <label className="flex flex-col items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-[#004eff] hover:bg-blue-50/30 cursor-pointer transition-colors">
                      <Upload className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-600 text-center">
                        {isUploading(shareholder.id, "certificate_of_incorporation")
                          ? "Uploading..."
                          : shareholder.documents?.certificate_of_incorporation
                            ? shareholder.documents.certificate_of_incorporation.fileName
                            : "Upload Certificate"}
                      </span>
                      <span className="text-xs text-gray-400">
                        PDF, JPG, PNG · Max 10 MB
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) =>
                          handleFileUpload(
                            shareholder.id,
                            "certificate_of_incorporation",
                            e.target.files?.[0] || null,
                          )
                        }
                        className="hidden"
                      />
                    </label>
                    {errors?.[`shareholders.${index}.certificate`] && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors[`shareholders.${index}.certificate`]}
                      </p>
                    )}
                  </div>

                  {/* Business License */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#212833]">
                      Business License{" "}
                      <span className="text-gray-400">(Optional)</span>
                    </label>
                    <label className="flex flex-col items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-[#004eff] hover:bg-blue-50/30 cursor-pointer transition-colors">
                      <Upload className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-600 text-center">
                        {isUploading(shareholder.id, "business_license")
                          ? "Uploading..."
                          : shareholder.documents?.business_license
                            ? shareholder.documents.business_license.fileName
                            : "Upload License"}
                      </span>
                      <span className="text-xs text-gray-400">
                        PDF, JPG, PNG · Max 10 MB
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) =>
                          handleFileUpload(
                            shareholder.id,
                            "business_license",
                            e.target.files?.[0] || null,
                          )
                        }
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Other Documents */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#212833]">
                      Other Documents{" "}
                      <span className="text-gray-400">(Optional)</span>
                    </label>
                    <label className="flex flex-col items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-[#004eff] hover:bg-blue-50/30 cursor-pointer transition-colors">
                      <Upload className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-600 text-center">
                        {isUploading(shareholder.id, "others")
                          ? "Uploading..."
                          : shareholder.documents?.others
                            ? shareholder.documents.others.fileName
                            : "Upload Document"}
                      </span>
                      <span className="text-xs text-gray-400">
                        PDF, JPG, PNG · Max 10 MB
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) =>
                          handleFileUpload(
                            shareholder.id,
                            "others",
                            e.target.files?.[0] || null,
                          )
                        }
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </>
            )}

            {/* Full Name */}
            <div className="space-y-2 mb-6">
              <label className="block text-sm font-medium text-[#212833]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                placeholder="Numan"
                value={shareholder.fullName || ""}
                onChange={(e) =>
                  updatePerson(shareholder.id, { fullName: e.target.value })
                }
                className={`bg-white border-gray-300 h-11 ${errors?.[`shareholders.${index}.fullName`] ? "border-red-500" : ""}`}
              />
              {errors?.[`shareholders.${index}.fullName`] && (
                <p className="text-xs text-red-500 mt-1">
                  {errors[`shareholders.${index}.fullName`]}
                </p>
              )}
            </div>

            {/* Nationality & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212833]">
                  Nationality <span className="text-red-500">*</span>
                </label>
                <Select
                  options={nationalityOptions}
                  value={shareholder.nationality || ""}
                  onChange={(value) =>
                    updatePerson(shareholder.id, { nationality: value })
                  }
                  placeholder="Select nationality"
                />
                {errors?.[`shareholders.${index}.nationality`] && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors[`shareholders.${index}.nationality`]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212833]">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="email@example.com"
                  value={shareholder.email || ""}
                  onChange={(e) =>
                    updatePerson(shareholder.id, { email: e.target.value })
                  }
                  className={`bg-white border-gray-300 h-11 ${errors?.[`shareholders.${index}.email`] ? "border-red-500" : ""}`}
                />
                {errors?.[`shareholders.${index}.email`] && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors[`shareholders.${index}.email`]}
                  </p>
                )}
              </div>
            </div>

            {/* Phone & Shareholding */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212833]">
                  Phone <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  value={shareholder.phone || ""}
                  onChange={(value) =>
                    updatePerson(shareholder.id, { phone: value })
                  }
                  defaultCountryCode={defaultCountryCode}
                  placeholder="Enter phone number"
                  error={!!errors?.[`shareholders.${index}.phone`]}
                />
                {errors?.[`shareholders.${index}.phone`] && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors[`shareholders.${index}.phone`]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212833]">
                  Shareholding
                </label>
                <Input
                  type="text"
                  placeholder="0 shares (-0.01%)"
                  value={
                    shareholder.shareholding?.shares
                      ? `${shareholder.shareholding.shares} shares (${shareholder.shareholding.percentage}%)`
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
            <div className="mb-6">
              <h5 className="text-sm font-medium text-[#212833] mb-4">
                Residential Address <span className="text-red-500">*</span>
              </h5>
              <AddressInput
                value={
                  shareholder.residentialAddress || {
                    street: "",
                    city: "",
                    state: "",
                    postalCode: "",
                    country: "",
                  }
                }
                onChange={(address) =>
                  updatePerson(shareholder.id, { residentialAddress: address })
                }
                defaultCountry={defaultCountryCode}
                errors={{
                  street: errors?.[`shareholders.${index}.residentialAddress`],
                  city: errors?.[
                    `shareholders.${index}.residentialAddress.city`
                  ],
                  postalCode:
                    errors?.[
                      `shareholders.${index}.residentialAddress.postalCode`
                    ],
                  country:
                    errors?.[
                      `shareholders.${index}.residentialAddress.country`
                    ],
                }}
              />
            </div>

            {/* File Uploads */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Passport Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212833]">
                  Passport/ID Upload <span className="text-red-500">*</span>
                </label>
                <label className="flex flex-col items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-[#004eff] hover:bg-blue-50/30 cursor-pointer transition-colors">
                  <Upload className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600 text-center">
                    {isUploading(shareholder.id, "passport")
                      ? "Uploading..."
                      : shareholder.documents?.passport
                        ? shareholder.documents.passport.fileName
                        : "Upload Passport"}
                  </span>
                  <span className="text-xs text-gray-400">
                    PDF, JPG, PNG · Max 10 MB
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                      handleFileUpload(
                        shareholder.id,
                        "passport",
                        e.target.files?.[0] || null,
                      )
                    }
                    className="hidden"
                  />
                </label>
                {errors?.[`shareholders.${index}.passportFile`] && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors[`shareholders.${index}.passportFile`]}
                  </p>
                )}
              </div>

              {/* Passport Holding Selfie Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212833]">
                  Passport Holding Selfie{" "}
                  <span className="text-red-500">*</span>
                </label>
                <label className="flex flex-col items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-[#004eff] hover:bg-blue-50/30 cursor-pointer transition-colors">
                  <Upload className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600 text-center">
                    {isUploading(shareholder.id, "selfie")
                      ? "Uploading..."
                      : shareholder.documents?.selfie
                        ? shareholder.documents.selfie.fileName
                        : "Upload Selfie"}
                  </span>
                  <span className="text-xs text-gray-400">
                    JPG, PNG · Max 10 MB
                  </span>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) =>
                      handleFileUpload(
                        shareholder.id,
                        "selfie",
                        e.target.files?.[0] || null,
                      )
                    }
                    className="hidden"
                  />
                </label>
                {errors?.[`shareholders.${index}.selfieFile`] && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors[`shareholders.${index}.selfieFile`]}
                  </p>
                )}
              </div>

              {/* Proof of Address Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#212833]">
                  Proof of Address Upload{" "}
                  <span className="text-red-500">*</span>
                </label>
                <label className="flex flex-col items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-[#004eff] hover:bg-blue-50/30 cursor-pointer transition-colors">
                  <Upload className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-600 text-center">
                    {isUploading(shareholder.id, "addressProof")
                      ? "Uploading..."
                      : shareholder.documents?.addressProof
                        ? shareholder.documents.addressProof.fileName
                        : "Upload Document"}
                  </span>
                  <span className="text-xs text-gray-400">
                    PDF, JPG, PNG · Max 10 MB
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                      handleFileUpload(
                        shareholder.id,
                        "addressProof",
                        e.target.files?.[0] || null,
                      )
                    }
                    className="hidden"
                  />
                </label>
                {errors?.[`shareholders.${index}.addressProofFile`] && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors[`shareholders.${index}.addressProofFile`]}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> The shareholding distribution is automatically
          pulled from Step 2. If you need to add more shareholders or modify the
          distribution, please go back to Step 2.
        </p>
      </div>
    </div>
  );
};
