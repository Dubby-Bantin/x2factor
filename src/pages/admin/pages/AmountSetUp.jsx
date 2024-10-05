// src/pages/AmountSetup.js

import React, { useState } from "react";

const AmountSetup = () => {
  const [formData, setFormData] = useState({
    minRechargeAmount: "",
    minWithdrawalINR: "",
    minWithdrawalTRX: "",
    minTransferFund: "",
    rechargeBonus: "",
    referBonus: "",
    level1Commission: "",
    level2Commission: "",
    level3Commission: "",
    signUpBonus: "",
    withdrawalStatus: "On",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" w-full p-8 px-36 bg-white shadow-md rounded-lg ">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Amount Setup
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Minimum Recharge Amount
              </label>
              <input
                type="number"
                name="minRechargeAmount"
                value={formData.minRechargeAmount}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                placeholder="e.g., 5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Minimum Withdrawal INR
              </label>
              <input
                type="number"
                name="minWithdrawalINR"
                value={formData.minWithdrawalINR}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                placeholder="e.g., 10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Minimum Withdrawal TRX
              </label>
              <input
                type="number"
                name="minWithdrawalTRX"
                value={formData.minWithdrawalTRX}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                placeholder="e.g., 10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Minimum Transfer Fund
              </label>
              <input
                type="number"
                name="minTransferFund"
                value={formData.minTransferFund}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                placeholder="e.g., 0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Recharge Bonus (%)
              </label>
              <input
                type="number"
                name="rechargeBonus"
                value={formData.rechargeBonus}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                placeholder="e.g., 0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Refer Bonus (%)
              </label>
              <input
                type="number"
                name="referBonus"
                value={formData.referBonus}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                placeholder="e.g., 0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Level 1 Commission (%)
              </label>
              <input
                type="number"
                name="level1Commission"
                value={formData.level1Commission}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                placeholder="e.g., 1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Level 2 Commission (%)
              </label>
              <input
                type="number"
                name="level2Commission"
                value={formData.level2Commission}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                placeholder="e.g., 0.6"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Level 3 Commission (%)
              </label>
              <input
                type="number"
                name="level3Commission"
                value={formData.level3Commission}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                placeholder="e.g., 0.3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sign Up Bonus
              </label>
              <input
                type="number"
                name="signUpBonus"
                value={formData.signUpBonus}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                placeholder="e.g., 3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Withdrawal Status
              </label>
              <select
                name="withdrawalStatus"
                value={formData.withdrawalStatus}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
              >
                <option value="On">On</option>
                <option value="Off">Off</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AmountSetup;
