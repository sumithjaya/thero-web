"use client";

import React, { useState } from "react";
import Image from "next/image";

type FormData = {
  userFirstName: string;
  userAge: number | "";
  userPlannedRetirementAge: number | "";
  userCurrentPensionBalance: number | "";
  userCurrentSuperBalance: number | "";
  userDesiredHouseholdIncome: number | "";

  hasPartner: "yes" | "no" | "";
  partnerFirstName: string;
  partnerAge: number | "";
  partnerPlannedRetirementAge: number | "";
  partnerCurrentPensionBalance: number | "";
  partnerCurrentSuperBalance: number | "";
  partnerCombinedPerAnnum: number | "";

  totalValueCarsContents: number | "";
  ownYourOwnHome: "yes" | "no" | "";
  totalCombinedOtherInvestments: number | "";
};

export default function CalForm() {
  const [formData, setFormData] = useState<FormData>({
    userFirstName: "",
    userAge: "",
    userPlannedRetirementAge: "",
    userCurrentPensionBalance: "",
    userCurrentSuperBalance: "",
    userDesiredHouseholdIncome: "",

    hasPartner: "",
    partnerFirstName: "",
    partnerAge: "",
    partnerPlannedRetirementAge: "",
    partnerCurrentPensionBalance: "",
    partnerCurrentSuperBalance: "",
    partnerCombinedPerAnnum: "",

    totalValueCarsContents: "",
    ownYourOwnHome: "",
    totalCombinedOtherInvestments: "",
  });

  // handle text/number/textarea in one place
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    // Parse numbers for number inputs; keep "" if empty
    const next =
      type === "number" ? (value === "" ? "" : Number(value)) : value;

    setFormData((prev) => ({ ...prev, [name]: next as any }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // TODO: send to API
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        gap: 50,
        boxShadow: "0px 0px 10px 10px rgba(189, 185, 185, 0.15)",
        borderRadius: "26px",
      }}
    >
      {/* Banner */}
      <div
        style={{
          backgroundColor: "#ECF4FE",
          borderRadius: "20px",
          display: "flex",
          padding: "30px",
          gap: 50,
        }}
      >
        <Image
          src="/images/oldlady.jpg"
          alt="thero"
          width={300}
          height={300}
          style={{ borderRadius: "20px" }}
        />
        <div style={{ padding: "0 50px" }}>
          <h1 style={{ color: "#1F1F1F", fontSize: "34px", fontWeight: 700 }}>
            Do I qualify for the aged pension?
          </h1>
          <p style={{ color: "#1F1F1F", fontSize: "20px", fontWeight: 400 }}>
            Yes, you’ll qualify for a part pension.
          </p>
        </div>
      </div>
      <script src="https://elfsightcdn.com/platform.js" async></script>{" "}
      <div
        className="elfsight-app-4e747e1c-d9a2-4e2f-8118-2955ba126861"
        data-elfsight-app-lazy
      ></div>{" "}
      <h1 style={{ color: "#1F1F1F", fontSize: "26px", fontWeight: 700 }}>
        Enter your details
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User fields */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User first name
            </label>
            <input
              type="text"
              name="userFirstName"
              value={formData.userFirstName}
              onChange={handleInputChange}
              placeholder="Enter"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Do you have a partner?
            </label>
            <input
              type="number"
              name="userAge"
              value={formData.userAge}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 58"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User age
            </label>
            <input
              type="number"
              name="userAge"
              value={formData.userAge}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 58"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Partner first name
            </label>
            <input
              type="number"
              name="userPlannedRetirementAge"
              value={formData.userPlannedRetirementAge}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 67"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User planned retirement age
            </label>
            <input
              type="number"
              name="userCurrentPensionBalance"
              value={formData.userCurrentPensionBalance}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 250000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Partner age
            </label>
            <input
              type="number"
              name="userCurrentSuperBalance"
              value={formData.userCurrentSuperBalance}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 320000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User current pension balance
            </label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>{" "}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Partner planned retirement age
            </label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>{" "}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User current super balance
            </label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>{" "}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Partner current pension balance
            </label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User desired household income
            </label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>{" "}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Partner current super balance
            </label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>{" "}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total value of cars and contents
            </label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>{" "}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Partner combined per annum
            </label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Home & assets */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Do you own your own home?
            </label>
          </div>
          <div className="flex flex-wrap gap-4">
            {["Yes ", "No - Renting", "No - Paying Off", "No - Other"].map(
              (option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="ownYourOwnHome"
                    value={option}
                    checked={formData.ownYourOwnHome === option}
                    onChange={handleInputChange}
                    className="text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              )
            )}
          </div>{" "}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Partner combined per annum
            </label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="rounded-xl bg-[#0047AB] px-6 py-3 font-semibold text-white hover:opacity-90 transition"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
}
