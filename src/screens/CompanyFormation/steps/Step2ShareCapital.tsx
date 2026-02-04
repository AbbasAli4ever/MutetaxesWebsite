import React from "react";
import { Input } from "../../../components/ui/input";
import { Select, SelectOption } from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import { Plus, Trash2 } from "lucide-react";

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
}

export const Step2ShareCapital: React.FC<Step2Props> = ({ data, onChange }) => {
  const addShareholder = () => {
    const newShareholder: ShareholderDistribution = {
      id: Date.now().toString(),
      name: "",
      shares: "",
      percentage: "",
    };
    onChange({ shareDistribution: [...data.shareDistribution, newShareholder] });
  };

  const removeShareholder = (id: string) => {
    onChange({
      shareDistribution: data.shareDistribution.filter((s) => s.id !== id),
    });
  };

  const updateShareholder = (
    id: string,
    field: keyof ShareholderDistribution,
    value: string
  ) => {
    onChange({
      shareDistribution: data.shareDistribution.map((s) =>
        s.id === id ? { ...s, [field]: value } : s
      ),
    });
  };

  // Auto-calculate percentage when shares change
  const handleSharesChange = (id: string, shares: string) => {
    const totalSharesNum = parseFloat(data.totalShares) || 0;
    const sharesNum = parseFloat(shares) || 0;
    const percentage = totalSharesNum > 0 ? ((sharesNum / totalSharesNum) * 100).toFixed(2) : "0";

    onChange({
      shareDistribution: data.shareDistribution.map((s) =>
        s.id === id ? { ...s, shares, percentage: percentage + "%" } : s
      ),
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-xl font-semibold text-[#212833] mb-2">Share Capital Structure</h3>
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
            onChange={(e) => onChange({ shareCapitalAmount: e.target.value })}
            className="bg-[#f5f7fa] border-gray-300 h-12 text-base"
          />
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
            onChange={(e) => onChange({ totalShares: e.target.value })}
            className="bg-[#f5f7fa] border-gray-300 h-12 text-base"
          />
          <p className="text-sm text-gray-500 mt-1">Standard: 10,000 shares</p>
        </div>
      </div>

      {/* Share Distribution Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-semibold text-[#212833]">Share Distribution</h4>
          <Button
            type="button"
            onClick={addShareholder}
            variant="outline"
            className="h-10 px-4 border-gray-300 hover:border-[#212833] hover:bg-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Shareholder
          </Button>
        </div>

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
            {data.shareDistribution.map((shareholder, index) => (
              <div
                key={shareholder.id}
                className="p-5 bg-white rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h5 className="font-medium text-[#212833]">
                    Shareholder {index + 1}
                  </h5>
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#212833]">
                      Shareholder Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter name"
                      value={shareholder.name}
                      onChange={(e) =>
                        updateShareholder(shareholder.id, "name", e.target.value)
                      }
                      className="bg-[#f5f7fa] border-gray-300 h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#212833]">
                      Number of Shares <span className="text-red-500">*</span>
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
              </div>
            ))}
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
              0
            )}{" "}
            / {data.totalShares || 0} shares
          </p>
        </div>
      )}
    </div>
  );
};
