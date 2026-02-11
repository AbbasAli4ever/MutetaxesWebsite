import React, { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Plus, Trash2, Check } from "lucide-react";

export interface ShareholderDistribution {
  id: string;
  name: string;
  shares: string;
  percentage: string;
}

export interface Step2Data {
  shareCapitalAmount: string;
  totalShares: string;
  shareDistribution: ShareholderDistribution[];
}

interface Step2Props {
  data: Step2Data;
  onChange: (data: Partial<Step2Data>) => void;
  errors?: Record<string, string>;
}

export const Step2ShareCapital: React.FC<Step2Props> = ({
  data,
  onChange,
  errors,
}) => {
  // Track which shareholder IDs have been saved
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  // The ID of the currently open (unsaved) shareholder form — only one at a time
  const unsavedId =
    data.shareDistribution.find((s) => !savedIds.has(s.id))?.id ?? null;

  const addShareholder = () => {
    // Block if there is already an unsaved form open
    if (unsavedId !== null) return;

    const newShareholder: ShareholderDistribution = {
      id: Date.now().toString(),
      name: "",
      shares: "",
      percentage: "",
    };
    onChange({
      shareDistribution: [...data.shareDistribution, newShareholder],
    });
  };

  const removeShareholder = (id: string) => {
    onChange({
      shareDistribution: data.shareDistribution.filter((s) => s.id !== id),
    });
    setSavedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const updateShareholder = (
    id: string,
    field: keyof ShareholderDistribution,
    value: string,
  ) => {
    onChange({
      shareDistribution: data.shareDistribution.map((s) =>
        s.id === id ? { ...s, [field]: value } : s,
      ),
    });
  };

  // Auto-calculate percentage when shares change
  const handleSharesChange = (id: string, shares: string) => {
    const totalSharesNum = parseFloat(data.totalShares) || 0;
    const sharesNum = parseFloat(shares) || 0;
    const percentage =
      totalSharesNum > 0
        ? ((sharesNum / totalSharesNum) * 100).toFixed(2)
        : "0";

    onChange({
      shareDistribution: data.shareDistribution.map((s) =>
        s.id === id ? { ...s, shares, percentage: percentage + "%" } : s,
      ),
    });
  };

  const saveShareholder = (id: string) => {
    const s = data.shareDistribution.find((sh) => sh.id === id);
    if (!s || !s.name.trim() || !s.shares.trim()) return;
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
            Share Capital Amount (HKD) <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            placeholder="10000"
            value={data.shareCapitalAmount}
            onChange={(e) => {
              const val = e.target.value.replace(/[^0-9]/g, "");
              onChange({ shareCapitalAmount: val });
            }}
            className={`bg-[#f5f7fa] border-gray-300 h-12 text-base ${errors?.shareCapitalAmount ? "border-red-500" : ""}`}
          />
          {errors?.shareCapitalAmount && (
            <p className="text-xs text-red-500 mt-1">
              {errors.shareCapitalAmount}
            </p>
          )}
          <p className="text-sm text-gray-500 mt-1">Standard: HKD 10,000</p>
        </div>

        <div className="space-y-2">
          <label className="block text-base font-medium text-[#212833]">
            Total Number of Shares <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            placeholder="10000"
            value={data.totalShares}
            onChange={(e) => {
              const val = e.target.value.replace(/[^0-9]/g, "");
              onChange({ totalShares: val });
            }}
            className={`bg-[#f5f7fa] border-gray-300 h-12 text-base ${errors?.totalShares ? "border-red-500" : ""}`}
          />
          {errors?.totalShares && (
            <p className="text-xs text-red-500 mt-1">{errors.totalShares}</p>
          )}
          <p className="text-sm text-gray-500 mt-1">Standard: 10,000 shares</p>
        </div>
      </div>

      {/* Share Distribution Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-semibold text-[#212833]">
            Share Distribution
          </h4>
          <Button
            type="button"
            onClick={addShareholder}
            disabled={unsavedId !== null}
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

        {data.shareDistribution.length === 0 ? (
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-[#f9fafb]">
            <p className="text-gray-500 mb-4">No shareholders added yet</p>
            <Button
              type="button"
              onClick={addShareholder}
              variant="outline"
              className="h-10 px-6 border-gray-300 hover:border-[#212833]"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add First Shareholder
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {data.shareDistribution.map((shareholder, index) => {
              const isSaved = savedIds.has(shareholder.id);
              const isOpen = !isSaved;
              const canSave =
                shareholder.name.trim() !== "" &&
                shareholder.shares.trim() !== "";

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
                      {isSaved && shareholder.name && (
                        <span className="text-gray-500 font-normal">
                          — {shareholder.name}
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
                        onClick={() => removeShareholder(shareholder.id)}
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
                            value={shareholder.name}
                            onChange={(e) =>
                              updateShareholder(
                                shareholder.id,
                                "name",
                                e.target.value,
                              )
                            }
                            className="bg-[#f5f7fa] border-gray-300 h-11"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#212833]">
                            Number of Shares{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="text"
                            placeholder="5000"
                            value={shareholder.shares}
                            onChange={(e) =>
                              handleSharesChange(shareholder.id, e.target.value)
                            }
                            className="bg-[#f5f7fa] border-gray-300 h-11"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#212833]">
                            Ownership %
                          </label>
                          <Input
                            type="text"
                            placeholder="50%"
                            value={shareholder.percentage}
                            disabled
                            className="bg-gray-100 border-gray-300 h-11 text-gray-600"
                          />
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
                        {shareholder.name}
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block mb-0.5">
                          Shares
                        </span>
                        {shareholder.shares}
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block mb-0.5">
                          Ownership
                        </span>
                        {shareholder.percentage}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Summary Info */}
      {data.shareDistribution.length > 0 && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Total shares distributed:{" "}
            {data.shareDistribution.reduce(
              (sum, s) => sum + (parseFloat(s.shares) || 0),
              0,
            )}{" "}
            / {data.totalShares || 0} shares
          </p>
        </div>
      )}
    </div>
  );
};
