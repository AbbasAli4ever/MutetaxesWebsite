import React, { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Select, SelectOption } from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { RadioGroup } from "../../../components/ui/radio-group";
import { PhoneInput } from "../../../components/ui/phone-input";
import { AddressInput } from "../../../components/ui/address-input";
import { Plus, Trash2, Upload } from "lucide-react";
import {
  useCompanyStore,
  useShareholders,
  useDirectors,
  FileInterface,
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

const directorTypeOptions: { value: PersonType; label: string }[] = [
  { value: "individual", label: "Individual" },
  { value: "corporate", label: "Corporate Entity" },
];

export const Step4Directors: React.FC = () => {
  // Use the store directly
  const {
    formData,
    stepErrors,
    updatePerson,
    updatePersonDocuments,
    addDirectorRole,
    removeDirectorRole,
    addNewDirector,
    removePerson,
  } = useCompanyStore();

  const shareholders = useShareholders();
  const directors = useDirectors();
  const errors = stepErrors;
  const defaultCountryCode = formData.company.countryOfIncorporation;

  const [expandedDirectors, setExpandedDirectors] = useState<string[]>([]);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [nomineeDirectorService, setNomineeDirectorService] = useState(false);

  const toggleDirectorExpanded = (id: string) => {
    const otherFormOpen =
      expandedDirectors.length > 0 && expandedDirectors[0] !== id;
    if (otherFormOpen) {
      setFormMessage(
        "Please save the current director form before editing another.",
      );
      return;
    }
    setFormMessage(null);
    setFormErrors({});
    setExpandedDirectors([id]);
  };

  const addDirector = (shareholderId?: string) => {
    if (expandedDirectors.length > 0) {
      setFormMessage(
        "Please save the current director form before adding a new one.",
      );
      return;
    }
    setFormMessage(null);
    setFormErrors({});

    // If adding from shareholder, just add director role
    if (shareholderId) {
      const shareholder = shareholders.find((s) => s.id === shareholderId);
      if (shareholder) {
        addDirectorRole(shareholderId);
        // Close all forms when adding from shareholder (data is complete)
        setExpandedDirectors([]);
        return;
      }
    }

    // Adding new director manually
    const newId = addNewDirector({
      fullName: "",
      nationality: "",
      email: "",
      phone: "",
    });

    // Auto-expand the newly added director
    setExpandedDirectors([newId]);
  };

  const saveDirector = (id: string) => {
    const dir = directors.find((d) => d.id === id);
    if (!dir) return;

    const errs: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Corporate fields validation (when type is corporate)
    if (dir.type === "corporate") {
      if (!dir.companyName?.trim())
        errs.companyName = "Company name is required";
      if (!dir.countryOfIncorporation)
        errs.countryOfIncorporation = "Country of incorporation is required";
      if (!dir.registrationNumber?.trim())
        errs.registrationNumber = "Registration number is required";
      if (!dir.documents?.certificate_of_incorporation)
        errs.certificateFile = "Certificate of incorporation is required";
      if (!dir.documents?.business_license)
        errs.businessLicenseFile = "Business license is required";
    }

    // Individual fields validation (always required)
    if (!dir.fullName?.trim()) errs.fullName = "Full name is required";
    if (!dir.nationality) errs.nationality = "Nationality is required";
    if (!dir.email?.trim()) errs.email = "Email is required";
    else if (!emailRegex.test(dir.email)) errs.email = "Invalid email format";
    if (!dir.phone?.trim()) errs.phone = "Phone is required";
    if (!dir.residentialAddress?.street?.trim())
      errs.residentialAddress = "Address is required";
    if (!dir.documents?.passport)
      errs.passportFile = "Passport upload is required";
    if (!dir.documents?.selfie) errs.selfieFile = "Selfie upload is required";
    if (!dir.documents?.addressProof)
      errs.addressProofFile = "Address proof is required";

    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      setFormMessage("Please fill in all required fields before saving.");
      return;
    }

    setFormErrors({});
    setFormMessage(null);
    setExpandedDirectors([]);
  };

  const isShareholderAlreadyDirector = (shareholderId: string) => {
    const shareholder = shareholders.find((s) => s.id === shareholderId);
    if (!shareholder) return false;
    return shareholder.roles.includes("director");
  };

  const removeDirector = (id: string) => {
    const director = directors.find((d) => d.id === id);
    if (!director) return;

    // If director is also a shareholder, just remove director role
    if (director.roles.includes("shareholder")) {
      removeDirectorRole(id);
    } else {
      // Otherwise remove the person entirely
      removePerson(id);
    }

    setExpandedDirectors((prev) => prev.filter((eid) => eid !== id));
    setFormMessage(null);
    setFormErrors({});
  };

  const handleFileUpload = (
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
    if (file && file.size > 10 * 1024 * 1024) {
      setFormMessage("File size must be under 10 MB");
      return;
    }

    const fileData: FileInterface | null = file
      ? {
          key: Date.now().toString(),
          url: URL.createObjectURL(file),
          fileName: file.name,
          mimeType: file.type,
          size: file.size,
        }
      : null;

    updatePersonDocuments(id, { [field]: fileData });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-xl font-semibold text-[#212833] mb-2">
          Directors Information
        </h3>
        <p className="text-sm text-gray-600">
          Specify directors for your company
        </p>
      </div>

      {formMessage && (
        <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-md px-3 py-2">
          {formMessage}
        </p>
      )}

      {errors?.directors && (
        <p className="text-xs text-red-500 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {errors.directors}
        </p>
      )}

      {/* Quick Add from Shareholders */}
      {shareholders.length > 0 ? (
        <div className="p-3 sm:p-5 bg-[#e8f0fe] rounded-xl border border-blue-200">
          <h4 className="text-base font-semibold text-[#212833] mb-4">
            Quick Add from Shareholders
          </h4>
          {shareholders.map((shareholder) => (
            <div
              key={shareholder.id}
              className="flex items-center justify-between py-3 px-4 bg-white rounded-lg mb-3 last:mb-0"
            >
              <span className="text-sm font-medium text-[#212833]">
                {shareholder.fullName || "Unnamed Shareholder"}
              </span>
              {isShareholderAlreadyDirector(shareholder.id) ? (
                <Button
                  type="button"
                  disabled
                  className="h-9 px-5 bg-gray-400 hover:bg-gray-400 text-white cursor-not-allowed"
                >
                  Already Added
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={() => {
                    addDirector(shareholder.id);
                  }}
                  className="h-9 px-5 bg-black hover:bg-gray-800 text-white"
                >
                  Add as Director
                </Button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="p-5 bg-yellow-50 rounded-xl border border-yellow-200">
          <p className="text-sm text-yellow-800">
            <strong>Tip:</strong> Add shareholders in Step 2 & Step 3 to use the
            Quick Add feature here.
          </p>
        </div>
      )}

      {/* Directors Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-semibold text-[#212833]">
            Directors {directors.length > 0 && `(${directors.length})`}
          </h4>
          <Button
            type="button"
            onClick={() => addDirector()}
            variant="outline"
            className="h-10 px-4 border-gray-300 hover:border-[#212833] hover:bg-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Director
          </Button>
        </div>

        {directors.length === 0 ? (
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-white">
            <p className="text-gray-500 mb-4">No directors added yet</p>
            <Button
              type="button"
              onClick={() => addDirector()}
              variant="outline"
              className="h-10 px-6 border-gray-300 hover:border-[#212833]"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add First Director
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {directors.map((director, index) => {
              const isExpanded = expandedDirectors.includes(director.id);

              return (
                <div
                  key={director.id}
                  className="bg-white rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors overflow-hidden"
                >
                  {/* Collapsed Header */}
                  <div className="flex items-center justify-between p-4">
                    <h5 className="font-semibold text-[#212833]">
                      Director {index + 1}
                      {director.fullName && `: ${director.fullName}`}
                    </h5>
                    <div className="flex items-center gap-2">
                      {!isExpanded && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => toggleDirectorExpanded(director.id)}
                          className="h-8 px-3"
                        >
                          Edit Details
                        </Button>
                      )}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeDirector(director.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Expanded Form */}
                  {isExpanded && (
                    <div className="p-6 pt-2 space-y-4 border-t">
                      {/* Director Type Selector */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#212833]">
                          Director Type <span className="text-red-500">*</span>
                        </label>
                        <RadioGroup
                          name={`director-type-${director.id}`}
                          options={directorTypeOptions}
                          value={director.type || "individual"}
                          onChange={(value) =>
                            updatePerson(director.id, {
                              type: value as PersonType,
                            })
                          }
                        />
                      </div>

                      {/* Corporate Fields (shown when type is corporate) */}
                      {director.type === "corporate" && (
                        <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-[#212833] text-sm">
                            Corporate Entity Details
                          </h5>

                          {/* Company Name */}
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-[#212833]">
                              Company Name{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <Input
                              type="text"
                              placeholder="Enter company name"
                              value={director.companyName || ""}
                              onChange={(e) =>
                                updatePerson(director.id, {
                                  companyName: e.target.value,
                                })
                              }
                              className={`bg-white border-gray-300 h-11 ${formErrors.companyName || errors?.[`directors.${index}.companyName`] ? "border-red-500" : ""}`}
                            />
                            {(formErrors.companyName ||
                              errors?.[`directors.${index}.companyName`]) && (
                              <p className="text-xs text-red-500 mt-1">
                                {formErrors.companyName ||
                                  errors?.[`directors.${index}.companyName`]}
                              </p>
                            )}
                          </div>

                          {/* Country of Incorporation & Registration Number */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-[#212833]">
                                Country of Incorporation{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <Select
                                options={countryOfIncorporationOptions}
                                value={director.countryOfIncorporation || ""}
                                onChange={(value) =>
                                  updatePerson(director.id, {
                                    countryOfIncorporation: value,
                                  })
                                }
                                placeholder="Select country"
                              />
                              {(formErrors.countryOfIncorporation ||
                                errors?.[
                                  `directors.${index}.countryOfIncorporation`
                                ]) && (
                                <p className="text-xs text-red-500 mt-1">
                                  {formErrors.countryOfIncorporation ||
                                    errors?.[
                                      `directors.${index}.countryOfIncorporation`
                                    ]}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-[#212833]">
                                Registration Number{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <Input
                                type="text"
                                placeholder="Enter registration number"
                                value={director.registrationNumber || ""}
                                onChange={(e) =>
                                  updatePerson(director.id, {
                                    registrationNumber: e.target.value,
                                  })
                                }
                                className={`bg-white border-gray-300 h-11 ${formErrors.registrationNumber || errors?.[`directors.${index}.registrationNumber`] ? "border-red-500" : ""}`}
                              />
                              {(formErrors.registrationNumber ||
                                errors?.[
                                  `directors.${index}.registrationNumber`
                                ]) && (
                                <p className="text-xs text-red-500 mt-1">
                                  {formErrors.registrationNumber ||
                                    errors?.[
                                      `directors.${index}.registrationNumber`
                                    ]}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Corporate Document Uploads */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-[#212833]">
                                Certificate of Incorporation{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <label className="flex flex-col items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-[#004eff] hover:bg-blue-50/30 cursor-pointer transition-colors">
                                <Upload className="w-5 h-5 text-gray-400" />
                                <span className="text-sm text-gray-600 text-center">
                                  {director.documents
                                    ?.certificate_of_incorporation
                                    ? director.documents
                                        .certificate_of_incorporation.fileName
                                    : "Upload Certificate"}
                                </span>
                                <span className="text-xs text-gray-400">
                                  PDF, JPG, PNG · Max 10 MB
                                </span>
                                <input
                                  type="file"
                                  accept=".pdf,.jpg,.jpeg,.png"
                                  onChange={(e) => {
                                    handleFileUpload(
                                      director.id,
                                      "certificate_of_incorporation",
                                      e.target.files?.[0] || null,
                                    );
                                  }}
                                  className="hidden"
                                />
                              </label>
                              {(formErrors.certificateFile ||
                                errors?.[
                                  `directors.${index}.certificateFile`
                                ]) && (
                                <p className="text-xs text-red-500 mt-1">
                                  {formErrors.certificateFile ||
                                    errors?.[
                                      `directors.${index}.certificateFile`
                                    ]}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-[#212833]">
                                Business License{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <label className="flex flex-col items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-[#004eff] hover:bg-blue-50/30 cursor-pointer transition-colors">
                                <Upload className="w-5 h-5 text-gray-400" />
                                <span className="text-sm text-gray-600 text-center">
                                  {director.documents?.business_license
                                    ? director.documents.business_license
                                        .fileName
                                    : "Upload License"}
                                </span>
                                <span className="text-xs text-gray-400">
                                  PDF, JPG, PNG · Max 10 MB
                                </span>
                                <input
                                  type="file"
                                  accept=".pdf,.jpg,.jpeg,.png"
                                  onChange={(e) => {
                                    handleFileUpload(
                                      director.id,
                                      "business_license",
                                      e.target.files?.[0] || null,
                                    );
                                  }}
                                  className="hidden"
                                />
                              </label>
                              {(formErrors.businessLicenseFile ||
                                errors?.[
                                  `directors.${index}.businessLicenseFile`
                                ]) && (
                                <p className="text-xs text-red-500 mt-1">
                                  {formErrors.businessLicenseFile ||
                                    errors?.[
                                      `directors.${index}.businessLicenseFile`
                                    ]}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-[#212833]">
                                Other Documents
                              </label>
                              <label className="flex flex-col items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-[#004eff] hover:bg-blue-50/30 cursor-pointer transition-colors">
                                <Upload className="w-5 h-5 text-gray-400" />
                                <span className="text-sm text-gray-600 text-center">
                                  {director.documents?.others
                                    ? director.documents.others.fileName
                                    : "Upload Document"}
                                </span>
                                <span className="text-xs text-gray-400">
                                  PDF, JPG, PNG · Max 10 MB
                                </span>
                                <input
                                  type="file"
                                  accept=".pdf,.jpg,.jpeg,.png"
                                  onChange={(e) => {
                                    handleFileUpload(
                                      director.id,
                                      "others",
                                      e.target.files?.[0] || null,
                                    );
                                  }}
                                  className="hidden"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Full Name */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#212833]">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="text"
                          placeholder="Enter full name"
                          value={director.fullName || ""}
                          onChange={(e) =>
                            updatePerson(director.id, {
                              fullName: e.target.value,
                            })
                          }
                          className={`bg-[#f5f7fa] border-gray-300 h-11 ${formErrors.fullName || errors?.[`directors.${index}.fullName`] ? "border-red-500" : ""}`}
                        />
                        {(formErrors.fullName ||
                          errors?.[`directors.${index}.fullName`]) && (
                          <p className="text-xs text-red-500 mt-1">
                            {formErrors.fullName ||
                              errors?.[`directors.${index}.fullName`]}
                          </p>
                        )}
                      </div>

                      {/* Nationality & Position */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#212833]">
                            Nationality <span className="text-red-500">*</span>
                          </label>
                          <Select
                            options={nationalityOptions}
                            value={director.nationality || ""}
                            onChange={(value) =>
                              updatePerson(director.id, { nationality: value })
                            }
                            placeholder="Select nationality"
                          />
                          {(formErrors.nationality ||
                            errors?.[`directors.${index}.nationality`]) && (
                            <p className="text-xs text-red-500 mt-1">
                              {formErrors.nationality ||
                                errors?.[`directors.${index}.nationality`]}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#212833]">
                            Position
                          </label>
                          <Input
                            type="text"
                            placeholder="Director"
                            value="Director"
                            disabled
                            className="bg-[#f5f7fa] border-gray-300 h-11"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#212833]">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="email"
                            placeholder="email@example.com"
                            value={director.email || ""}
                            onChange={(e) =>
                              updatePerson(director.id, {
                                email: e.target.value,
                              })
                            }
                            className={`bg-[#f5f7fa] border-gray-300 h-11 ${formErrors.email || errors?.[`directors.${index}.email`] ? "border-red-500" : ""}`}
                          />
                          {(formErrors.email ||
                            errors?.[`directors.${index}.email`]) && (
                            <p className="text-xs text-red-500 mt-1">
                              {formErrors.email ||
                                errors?.[`directors.${index}.email`]}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#212833]">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <PhoneInput
                            value={director.phone || ""}
                            onChange={(value) =>
                              updatePerson(director.id, { phone: value })
                            }
                            defaultCountryCode={defaultCountryCode}
                            placeholder="Enter phone number"
                            error={
                              !!(
                                formErrors.phone ||
                                errors?.[`directors.${index}.phone`]
                              )
                            }
                          />
                          {(formErrors.phone ||
                            errors?.[`directors.${index}.phone`]) && (
                            <p className="text-xs text-red-500 mt-1">
                              {formErrors.phone ||
                                errors?.[`directors.${index}.phone`]}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Residential Address */}
                      <div>
                        <h5 className="text-sm font-medium text-[#212833] mb-4">
                          Residential Address{" "}
                          <span className="text-red-500">*</span>
                        </h5>
                        <AddressInput
                          value={
                            director.residentialAddress || {
                              street: "",
                              city: "",
                              state: "",
                              postalCode: "",
                              country: "",
                            }
                          }
                          onChange={(address) =>
                            updatePerson(director.id, {
                              residentialAddress: address,
                            })
                          }
                          defaultCountry={defaultCountryCode}
                          errors={{
                            street:
                              formErrors.residentialAddress ||
                              errors?.[`directors.${index}.residentialAddress`],
                            city: errors?.[
                              `directors.${index}.residentialAddress.city`
                            ],
                            postalCode:
                              errors?.[
                                `directors.${index}.residentialAddress.postalCode`
                              ],
                            country:
                              errors?.[
                                `directors.${index}.residentialAddress.country`
                              ],
                          }}
                        />
                      </div>

                      {/* File Uploads */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#212833]">
                            Passport/ID Upload{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <label className="flex flex-col items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-[#004eff] hover:bg-blue-50/30 cursor-pointer transition-colors">
                            <Upload className="w-5 h-5 text-gray-400" />
                            <span className="text-sm text-gray-600 text-center">
                              {director.documents?.passport
                                ? director.documents.passport.fileName
                                : "Upload Passport"}
                            </span>
                            <span className="text-xs text-gray-400">
                              PDF, JPG, PNG · Max 10 MB
                            </span>
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => {
                                handleFileUpload(
                                  director.id,
                                  "passport",
                                  e.target.files?.[0] || null,
                                );
                              }}
                              className="hidden"
                            />
                          </label>
                          {(formErrors.passportFile ||
                            errors?.[`directors.${index}.passportFile`]) && (
                            <p className="text-xs text-red-500 mt-1">
                              {formErrors.passportFile ||
                                errors?.[`directors.${index}.passportFile`]}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#212833]">
                            Passport Holding Selfie{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <label className="flex flex-col items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-[#004eff] hover:bg-blue-50/30 cursor-pointer transition-colors">
                            <Upload className="w-5 h-5 text-gray-400" />
                            <span className="text-sm text-gray-600 text-center">
                              {director.documents?.selfie
                                ? director.documents.selfie.fileName
                                : "Upload Selfie"}
                            </span>
                            <span className="text-xs text-gray-400">
                              JPG, PNG · Max 10 MB
                            </span>
                            <input
                              type="file"
                              accept=".jpg,.jpeg,.png"
                              onChange={(e) => {
                                handleFileUpload(
                                  director.id,
                                  "selfie",
                                  e.target.files?.[0] || null,
                                );
                              }}
                              className="hidden"
                            />
                          </label>
                          {(formErrors.selfieFile ||
                            errors?.[`directors.${index}.selfieFile`]) && (
                            <p className="text-xs text-red-500 mt-1">
                              {formErrors.selfieFile ||
                                errors?.[`directors.${index}.selfieFile`]}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#212833]">
                            Proof of Address Upload{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <label className="flex flex-col items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-[#004eff] hover:bg-blue-50/30 cursor-pointer transition-colors">
                            <Upload className="w-5 h-5 text-gray-400" />
                            <span className="text-sm text-gray-600 text-center">
                              {director.documents?.addressProof
                                ? director.documents.addressProof.fileName
                                : "Upload Document"}
                            </span>
                            <span className="text-xs text-gray-400">
                              PDF, JPG, PNG · Max 10 MB
                            </span>
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => {
                                handleFileUpload(
                                  director.id,
                                  "addressProof",
                                  e.target.files?.[0] || null,
                                );
                              }}
                              className="hidden"
                            />
                          </label>
                          {(formErrors.addressProofFile ||
                            errors?.[
                              `directors.${index}.addressProofFile`
                            ]) && (
                            <p className="text-xs text-red-500 mt-1">
                              {formErrors.addressProofFile ||
                                errors?.[`directors.${index}.addressProofFile`]}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Save Button */}
                      <div className="flex justify-end pt-4">
                        <Button
                          type="button"
                          onClick={() => saveDirector(director.id)}
                          className="h-10 px-8 bg-[#004eff] hover:bg-[#0040cc] text-white"
                        >
                          Save Director
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Nominee Director Service */}
      <div className="p-5 bg-[#f9fafb] rounded-xl border border-gray-200">
        <Checkbox
          checked={nomineeDirectorService}
          onCheckedChange={(checked) => setNomineeDirectorService(checked)}
          label="Add Nominee Director Service"
        />
        <p className="text-sm text-gray-600 mt-2 ml-8">
          Our nominee director service provides professional representation for
          your company
        </p>
      </div>
    </div>
  );
};
