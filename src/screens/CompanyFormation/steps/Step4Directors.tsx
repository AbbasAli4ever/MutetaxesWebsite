import React, { useState, useEffect } from "react";
import { Input } from "../../../components/ui/input";
import { Select, SelectOption } from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { Plus, Trash2, Upload } from "lucide-react";

export interface Director {
  id: string;
  fullName: string;
  nationality: string;
  position: string;
  email: string;
  phone: string;
  residentialAddress: string;
  passportFile: File | null;
  selfieFile: File | null;
  addressProofFile: File | null;
}

export interface Step4Data {
  directors: Director[];
  nomineeDirectorService: boolean;
}

interface Step4Props {
  data: Step4Data;
  onChange: (data: Partial<Step4Data>) => void;
  shareholdersFromStep3?: Array<{
    id: string;
    fullName: string;
    nationality: string;
    email: string;
    phone: string;
    residentialAddress: string;
    passportFile: File | null;
    selfieFile: File | null;
    addressProofFile: File | null;
  }>;
  errors?: Record<string, string>;
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

export const Step4Directors: React.FC<Step4Props> = ({
  data,
  onChange,
  shareholdersFromStep3 = [],
  errors,
}) => {
  const [expandedDirectors, setExpandedDirectors] = useState<string[]>([]);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

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

  const addDirector = (name: string = "", shareholderId?: string) => {
    if (expandedDirectors.length > 0) {
      setFormMessage(
        "Please save the current director form before adding a new one.",
      );
      return;
    }
    setFormMessage(null);
    setFormErrors({});

    let newDirector: Director;

    // If adding from shareholder, copy all their information
    if (shareholderId) {
      const shareholder = shareholdersFromStep3.find(
        (s) => s.id === shareholderId,
      );
      if (shareholder) {
        newDirector = {
          id: Date.now().toString(),
          fullName: shareholder.fullName,
          nationality: shareholder.nationality,
          position: "Director",
          email: shareholder.email,
          phone: shareholder.phone,
          residentialAddress: shareholder.residentialAddress,
          passportFile: shareholder.passportFile,
          selfieFile: shareholder.selfieFile,
          addressProofFile: shareholder.addressProofFile,
        };
      } else {
        // Fallback if shareholder not found
        newDirector = {
          id: Date.now().toString(),
          fullName: name,
          nationality: "",
          position: "Director",
          email: "",
          phone: "",
          residentialAddress: "",
          passportFile: null,
          selfieFile: null,
          addressProofFile: null,
        };
      }
    } else {
      // Adding new director manually
      newDirector = {
        id: Date.now().toString(),
        fullName: name,
        nationality: "",
        position: "Director",
        email: "",
        phone: "",
        residentialAddress: "",
        passportFile: null,
        selfieFile: null,
        addressProofFile: null,
      };
    }

    onChange({ directors: [...data.directors, newDirector] });

    // Auto-expand only the newly added director (close all others)
    if (!shareholderId) {
      setExpandedDirectors([newDirector.id]);
    } else {
      // Close all forms when adding from shareholder (data is complete)
      setExpandedDirectors([]);
    }
  };

  const saveDirector = (id: string) => {
    const dir = data.directors.find((d) => d.id === id);
    if (!dir) return;

    const errs: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!dir.fullName.trim()) errs.fullName = "Full name is required";
    if (!dir.nationality) errs.nationality = "Nationality is required";
    if (!dir.email.trim()) errs.email = "Email is required";
    else if (!emailRegex.test(dir.email)) errs.email = "Invalid email format";
    if (!dir.phone.trim()) errs.phone = "Phone is required";
    if (!dir.residentialAddress.trim())
      errs.residentialAddress = "Address is required";
    if (!dir.passportFile) errs.passportFile = "Passport upload is required";
    if (!dir.selfieFile) errs.selfieFile = "Selfie upload is required";
    if (!dir.addressProofFile)
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
    const shareholder = shareholdersFromStep3.find(
      (s) => s.id === shareholderId,
    );
    if (!shareholder) return false;
    return data.directors.some((d) => d.fullName === shareholder.fullName);
  };

  const removeDirector = (id: string) => {
    onChange({
      directors: data.directors.filter((d) => d.id !== id),
    });
    setExpandedDirectors((prev) => prev.filter((eid) => eid !== id));
    setFormMessage(null);
    setFormErrors({});
  };

  const updateDirector = (id: string, field: keyof Director, value: any) => {
    onChange({
      directors: data.directors.map((d) =>
        d.id === id ? { ...d, [field]: value } : d,
      ),
    });
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
      {shareholdersFromStep3.length > 0 ? (
        <div className="p-3 sm:p-5 bg-[#e8f0fe] rounded-xl border border-blue-200">
          <h4 className="text-base font-semibold text-[#212833] mb-4">
            Quick Add from Shareholders
          </h4>
          {shareholdersFromStep3.map((shareholder) => (
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
                    addDirector(shareholder.fullName, shareholder.id);
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
            Directors{" "}
            {data.directors.length > 0 && `(${data.directors.length})`}
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

        {data.directors.length === 0 ? (
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
            {data.directors.map((director, index) => {
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
                      {/* Full Name */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#212833]">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="text"
                          placeholder="Enter full name"
                          value={director.fullName}
                          onChange={(e) =>
                            updateDirector(
                              director.id,
                              "fullName",
                              e.target.value,
                            )
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
                            value={director.nationality}
                            onChange={(value) =>
                              updateDirector(director.id, "nationality", value)
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
                            value={director.position}
                            onChange={(e) =>
                              updateDirector(
                                director.id,
                                "position",
                                e.target.value,
                              )
                            }
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
                            value={director.email}
                            onChange={(e) =>
                              updateDirector(
                                director.id,
                                "email",
                                e.target.value,
                              )
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
                          <Input
                            type="tel"
                            placeholder="+852-0000-0000"
                            value={director.phone}
                            onChange={(e) =>
                              updateDirector(
                                director.id,
                                "phone",
                                e.target.value,
                              )
                            }
                            className={`bg-[#f5f7fa] border-gray-300 h-11 ${formErrors.phone || errors?.[`directors.${index}.phone`] ? "border-red-500" : ""}`}
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
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#212833]">
                          Residential Address{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="text"
                          placeholder="Enter full residential address"
                          value={director.residentialAddress}
                          onChange={(e) =>
                            updateDirector(
                              director.id,
                              "residentialAddress",
                              e.target.value,
                            )
                          }
                          className={`bg-[#f5f7fa] border-gray-300 h-11 ${formErrors.residentialAddress || errors?.[`directors.${index}.residentialAddress`] ? "border-red-500" : ""}`}
                        />
                        {(formErrors.residentialAddress ||
                          errors?.[
                            `directors.${index}.residentialAddress`
                          ]) && (
                          <p className="text-xs text-red-500 mt-1">
                            {formErrors.residentialAddress ||
                              errors?.[`directors.${index}.residentialAddress`]}
                          </p>
                        )}
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
                              {director.passportFile
                                ? director.passportFile.name
                                : "Upload Passport"}
                            </span>
                            <span className="text-xs text-gray-400">
                              PDF, JPG, PNG · Max 10 MB
                            </span>
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => {
                                const file = e.target.files?.[0] || null;
                                if (file && file.size > 10 * 1024 * 1024) {
                                  setFormMessage(
                                    "File size must be under 10 MB",
                                  );
                                  return;
                                }
                                updateDirector(
                                  director.id,
                                  "passportFile",
                                  file,
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
                              {director.selfieFile
                                ? director.selfieFile.name
                                : "Upload Selfie"}
                            </span>
                            <span className="text-xs text-gray-400">
                              JPG, PNG · Max 10 MB
                            </span>
                            <input
                              type="file"
                              accept=".jpg,.jpeg,.png"
                              onChange={(e) => {
                                const file = e.target.files?.[0] || null;
                                if (file && file.size > 10 * 1024 * 1024) {
                                  setFormMessage(
                                    "File size must be under 10 MB",
                                  );
                                  return;
                                }
                                updateDirector(director.id, "selfieFile", file);
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
                              {director.addressProofFile
                                ? director.addressProofFile.name
                                : "Upload Document"}
                            </span>
                            <span className="text-xs text-gray-400">
                              PDF, JPG, PNG · Max 10 MB
                            </span>
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => {
                                const file = e.target.files?.[0] || null;
                                if (file && file.size > 10 * 1024 * 1024) {
                                  setFormMessage(
                                    "File size must be under 10 MB",
                                  );
                                  return;
                                }
                                updateDirector(
                                  director.id,
                                  "addressProofFile",
                                  file,
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
          checked={data.nomineeDirectorService}
          onCheckedChange={(checked) =>
            onChange({ nomineeDirectorService: checked })
          }
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
