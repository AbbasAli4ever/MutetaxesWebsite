import React, { useState, useMemo, useEffect } from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Plus, Trash2, Check, AlertCircle, CheckCircle2 } from "lucide-react";
import {
  useCompanyStore,
  useShareholders,
} from "../../../store/useCompanyStore";
import { getCurrencyForCountry } from "../../../lib/countryUtils";

export const Step2ShareCapital: React.FC = () => {
  // Use the store directly
  const {
    formData,
    stepErrors,
    updateShareCapital,
    addShareholder,
    updateShareholderDistribution,
    removeShareholder,
    updatePerson,
  } = useCompanyStore();

  const shareholders = useShareholders();
  const { shareCapital, company } = formData;
  const errors = stepErrors;

  // Get currency based on country of incorporation
  const currency = getCurrencyForCountry(company.countryOfIncorporation);

  // Update currency in store when country changes
  useEffect(() => {
    if (shareCapital.currency !== currency) {
      updateShareCapital({ currency });
    }
  }, [currency, shareCapital.currency, updateShareCapital]);

  // Track which shareholder IDs have been saved
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  // Track percentage field errors per shareholder
  const [percentageErrors, setPercentageErrors] = useState<
    Record<string, string>
  >({});

  // The ID of the currently open (unsaved) shareholder form — only one at a time
  const unsavedId = shareholders.find((s) => !savedIds.has(s.id))?.id ?? null;

  // Calculate share allocation stats based on percentage
  const allocationStats = useMemo(() => {
    const totalShares = shareCapital.totalShares || 0;

    // Calculate total percentage allocated
    const totalPercentageAllocated = shareholders.reduce((sum, s) => {
      const pct = s.shareholding?.percentage || 0;
      return sum + pct;
    }, 0);

    // Calculate allocated shares from percentage
    const allocatedShares = shareholders.reduce(
      (sum, s) => sum + (s.shareholding?.shares || 0),
      0,
    );

    const remainingPercentage = Math.max(0, 100 - totalPercentageAllocated);
    const remainingShares = Math.max(0, totalShares - allocatedShares);
    const allocationPercentage = Math.min(100, totalPercentageAllocated);
    const isComplete = totalPercentageAllocated === 100;
    const isOverAllocated = totalPercentageAllocated > 100;

    return {
      totalShares,
      allocatedShares,
      remainingShares,
      allocationPercentage,
      remainingPercentage,
      isComplete,
      isOverAllocated,
    };
  }, [shareCapital.totalShares, shareholders]);

  const handleAddShareholder = () => {
    // Block if there is already an unsaved form open
    if (unsavedId !== null) return;

    // Add shareholder with empty data
    addShareholder("", 0, 0);
  };

  const handleRemoveShareholder = (id: string) => {
    removeShareholder(id);
    setSavedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    // Clear any percentage error for this shareholder
    setPercentageErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[id];
      return newErrors;
    });
  };

  const updateShareholderName = (id: string, name: string) => {
    updatePerson(id, { fullName: name });
  };

  // Auto-calculate shares when percentage changes with validation
  const handlePercentageChange = (id: string, inputValue: string) => {
    // Only allow numeric input with decimal point
    const cleanedValue = inputValue.replace(/[^0-9.]/g, "");

    // Ensure only one decimal point
    const parts = cleanedValue.split(".");
    const percentage =
      parts.length > 2
        ? parts[0] + "." + parts.slice(1).join("")
        : cleanedValue;

    const percentageNum = parseFloat(percentage) || 0;
    const totalSharesNum = shareCapital.totalShares || 0;

    // Calculate percentage already allocated to OTHER shareholders
    const otherPercentageAllocated = shareholders
      .filter((s) => s.id !== id)
      .reduce((sum, s) => {
        const pct = s.shareholding?.percentage || 0;
        return sum + pct;
      }, 0);

    // Calculate maximum allowed percentage for this shareholder
    const maxAllowedPercentage = Math.max(0, 100 - otherPercentageAllocated);

    // Check if percentage exceeds the maximum allowed and set error
    if (percentageNum > maxAllowedPercentage) {
      setPercentageErrors((prev) => ({
        ...prev,
        [id]: `Exceeds available ownership. Max: ${maxAllowedPercentage.toFixed(2)}%`,
      }));
    } else if (percentageNum > 100) {
      setPercentageErrors((prev) => ({
        ...prev,
        [id]: "Ownership cannot exceed 100%",
      }));
    } else {
      // Clear error if valid
      setPercentageErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }

    // Calculate shares from percentage (use raw percentage for calculation)
    const calculatedShares =
      totalSharesNum > 0
        ? Math.round(((percentageNum || 0) / 100) * totalSharesNum)
        : 0;

    updateShareholderDistribution(id, calculatedShares, percentageNum);
  };

  // Get remaining percentage available for a specific shareholder
  const getRemainingPercentageFor = (shareholderId: string): number => {
    const otherPercentageAllocated = shareholders
      .filter((s) => s.id !== shareholderId)
      .reduce((sum, s) => {
        const pct = s.shareholding?.percentage || 0;
        return sum + pct;
      }, 0);
    return Math.max(0, 100 - otherPercentageAllocated);
  };

  const saveShareholder = (id: string) => {
    const s = shareholders.find((sh) => sh.id === id);
    const percentageValue = s?.shareholding?.percentage || 0;
    // Don't save if there's a percentage error
    if (
      !s ||
      !s.fullName?.trim() ||
      percentageValue <= 0 ||
      percentageErrors[id]
    )
      return;
    setSavedIds((prev) => new Set(prev).add(id));
  };

  const editShareholder = (id: string) => {
    // Only allow editing if no other form is currently unsaved
    if (unsavedId !== null && unsavedId !== id) return;
    setSavedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-xl font-semibold text-[#212833] mb-2">
          Share Capital Structure
        </h3>
        <p className="text-sm text-gray-600">
          Define your company's share capital and distribution
        </p>
      </div>

      {/* Share Capital Amount & Total Shares */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-base font-medium text-[#212833]">
            Share Capital Amount ({currency}){" "}
            <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            placeholder="10000"
            value={shareCapital.totalAmount.toString()}
            onChange={(e) => {
              const val = e.target.value.replace(/[^0-9]/g, "");
              updateShareCapital({ totalAmount: parseInt(val) || 0 });
            }}
            className={`bg-[#f5f7fa] border-gray-300 h-12 text-base ${errors?.shareCapitalAmount ? "border-red-500" : ""}`}
          />
          {errors?.shareCapitalAmount && (
            <p className="text-xs text-red-500 mt-1">
              {errors.shareCapitalAmount}
            </p>
          )}
          <p className="text-sm text-gray-500 mt-1">
            Standard: {currency} 10,000
          </p>
        </div>

        <div className="space-y-2">
          <label className="block text-base font-medium text-[#212833]">
            Total Number of Shares <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            placeholder="10000"
            value={shareCapital.totalShares.toString()}
            onChange={(e) => {
              const val = e.target.value.replace(/[^0-9]/g, "");
              updateShareCapital({ totalShares: parseInt(val) || 0 });
            }}
            className={`bg-[#f5f7fa] border-gray-300 h-12 text-base ${errors?.totalShares ? "border-red-500" : ""}`}
          />
          {errors?.totalShares && (
            <p className="text-xs text-red-500 mt-1">{errors.totalShares}</p>
          )}
          <p className="text-sm text-gray-500 mt-1">Standard: 10,000 shares</p>
        </div>
      </div>

      {/* Share Allocation Progress */}
      {shareholders.length > 0 && (
        <div
          className={`p-4 rounded-xl border-2 transition-colors ${
            allocationStats.isComplete
              ? "bg-green-50 border-green-300"
              : allocationStats.isOverAllocated
                ? "bg-red-50 border-red-300"
                : "bg-blue-50 border-blue-200"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {allocationStats.isComplete ? (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              ) : allocationStats.isOverAllocated ? (
                <AlertCircle className="w-5 h-5 text-red-600" />
              ) : (
                <AlertCircle className="w-5 h-5 text-blue-600" />
              )}
              <span
                className={`font-semibold ${
                  allocationStats.isComplete
                    ? "text-green-800"
                    : allocationStats.isOverAllocated
                      ? "text-red-800"
                      : "text-blue-800"
                }`}
              >
                Share Allocation:{" "}
                {allocationStats.allocationPercentage.toFixed(1)}%
              </span>
            </div>
            <span
              className={`text-sm ${
                allocationStats.isComplete
                  ? "text-green-700"
                  : allocationStats.isOverAllocated
                    ? "text-red-700"
                    : "text-blue-700"
              }`}
            >
              {allocationStats.allocatedShares.toLocaleString()} /{" "}
              {allocationStats.totalShares.toLocaleString()} shares
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                allocationStats.isComplete
                  ? "bg-green-500"
                  : allocationStats.isOverAllocated
                    ? "bg-red-500"
                    : "bg-blue-500"
              }`}
              style={{
                width: `${Math.min(100, allocationStats.allocationPercentage)}%`,
              }}
            />
          </div>

          {/* Status Message */}
          <p
            className={`text-sm mt-2 ${
              allocationStats.isComplete
                ? "text-green-700"
                : allocationStats.isOverAllocated
                  ? "text-red-700"
                  : "text-blue-700"
            }`}
          >
            {allocationStats.isComplete
              ? "✓ 100% ownership allocated. You can proceed to the next step."
              : allocationStats.isOverAllocated
                ? `⚠ Over-allocated by ${(allocationStats.allocationPercentage - 100).toFixed(2)}%. Please reduce allocation.`
                : `${allocationStats.remainingPercentage.toFixed(2)}% ownership remaining to allocate`}
          </p>
        </div>
      )}

      {/* Share Distribution Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-semibold text-[#212833]">
            Share Distribution
          </h4>
          <Button
            type="button"
            onClick={handleAddShareholder}
            disabled={unsavedId !== null || allocationStats.isComplete}
            variant="outline"
            className="h-10 px-4 border-gray-300 hover:border-[#212833] hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Shareholder
          </Button>
        </div>

        {unsavedId !== null && (
          <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-md px-3 py-2">
            Please save the current shareholder before adding a new one.
          </p>
        )}

        {errors?.shareDistribution && (
          <p className="text-xs text-red-500 bg-red-50 border border-red-200 rounded-md px-3 py-2">
            {errors.shareDistribution}
          </p>
        )}

        {shareholders.length === 0 ? (
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-[#f9fafb]">
            <p className="text-gray-500 mb-4">No shareholders added yet</p>
            <Button
              type="button"
              onClick={handleAddShareholder}
              variant="outline"
              className="h-10 px-6 border-gray-300 hover:border-[#212833]"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add First Shareholder
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {shareholders.map((shareholder, index) => {
              const isSaved = savedIds.has(shareholder.id);
              const isOpen = !isSaved;
              const percentageValue = shareholder.shareholding?.percentage || 0;
              const hasPercentageError = !!percentageErrors[shareholder.id];
              const canSave =
                shareholder.fullName?.trim() !== "" &&
                percentageValue > 0 &&
                !hasPercentageError;

              return (
                <div
                  key={shareholder.id}
                  className={`p-5 bg-white rounded-xl border-2 transition-colors ${
                    isSaved
                      ? "border-green-300 bg-green-50/30"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="font-medium text-[#212833] flex items-center gap-2">
                      Shareholder {index + 1}
                      {isSaved && shareholder.fullName && (
                        <span className="text-gray-500 font-normal">
                          — {shareholder.fullName}
                        </span>
                      )}
                      {isSaved && (
                        <span className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                          <Check className="w-3 h-3" /> Saved
                        </span>
                      )}
                    </h5>
                    <div className="flex items-center gap-2">
                      {isSaved && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => editShareholder(shareholder.id)}
                          disabled={
                            unsavedId !== null && unsavedId !== shareholder.id
                          }
                          className="h-8 px-3 text-xs border-gray-300 hover:border-[#212833] disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          Edit
                        </Button>
                      )}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveShareholder(shareholder.id)}
                        className="text-gray-400 hover:text-red-500 hover:bg-red-50 h-8 w-8 p-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {isOpen && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#212833]">
                            Shareholder Name{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="text"
                            placeholder="Enter name"
                            value={shareholder.fullName || ""}
                            onChange={(e) =>
                              updateShareholderName(
                                shareholder.id,
                                e.target.value,
                              )
                            }
                            className="bg-[#f5f7fa] border-gray-300 h-11"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#212833]">
                            Ownership % <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="text"
                            placeholder="50"
                            value={
                              shareholder.shareholding?.percentage?.toString() ||
                              ""
                            }
                            onChange={(e) =>
                              handlePercentageChange(
                                shareholder.id,
                                e.target.value,
                              )
                            }
                            className={`bg-[#f5f7fa] border-gray-300 h-11 ${hasPercentageError ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                          />
                          {hasPercentageError ? (
                            <p className="text-xs text-red-500">
                              {percentageErrors[shareholder.id]}
                            </p>
                          ) : (
                            <p className="text-xs text-gray-500">
                              Max available:{" "}
                              {getRemainingPercentageFor(
                                shareholder.id,
                              ).toFixed(2)}
                              %
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#212833]">
                            Number of Shares
                          </label>
                          <Input
                            type="text"
                            placeholder="Calculated"
                            value={
                              shareholder.shareholding?.shares?.toString() || ""
                            }
                            disabled
                            className="bg-gray-100 border-gray-300 h-11 text-gray-600"
                          />
                          <p className="text-xs text-gray-500">
                            Auto-calculated from ownership %
                          </p>
                        </div>
                      </div>

                      {/* Save Button */}
                      <div className="mt-4 flex justify-end">
                        <Button
                          type="button"
                          onClick={() => saveShareholder(shareholder.id)}
                          disabled={!canSave}
                          className="h-9 px-5 bg-[#004eff] hover:bg-[#003dd4] text-white text-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Check className="w-4 h-4 mr-1.5" />
                          Save Shareholder
                        </Button>
                      </div>
                    </>
                  )}

                  {/* Saved summary row */}
                  {isSaved && (
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="text-xs text-gray-400 block mb-0.5">
                          Name
                        </span>
                        {shareholder.fullName}
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block mb-0.5">
                          Ownership
                        </span>
                        {shareholder.shareholding?.percentage}%
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block mb-0.5">
                          Shares
                        </span>
                        {shareholder.shareholding?.shares}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Validation Warning */}
      {shareholders.length > 0 && !allocationStats.isComplete && (
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-amber-800">
              Share ownership must reach exactly 100%
            </p>
            <p className="text-sm text-amber-700 mt-1">
              You need to allocate{" "}
              {allocationStats.remainingPercentage.toFixed(2)}% more ownership
              before you can proceed to the next step.
            </p>
          </div>
        </div>
      )}

      {/* Success Message */}
      {allocationStats.isComplete && (
        <div className="p-4 bg-green-50 border border-green-300 rounded-lg flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-green-800">
              Share ownership complete!
            </p>
            <p className="text-sm text-green-700 mt-1">
              100% ownership ({allocationStats.totalShares.toLocaleString()}{" "}
              shares) has been distributed among {shareholders.length}{" "}
              shareholder
              {shareholders.length > 1 ? "s" : ""}. You can now proceed to the
              next step.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
