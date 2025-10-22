"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./CalForm.module.css";

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
  // NOTE: your options include several "No - ..." variants.
  // Keeping the original type to avoid changing your data model.
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const next = type === "number" ? (value === "" ? "" : Number(value)) : value;
    setFormData((prev) => ({ ...prev, [name]: next as any }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className={styles.wrapper}>
      {/* Banner */}
      <div className={styles.banner}>
        <div className={styles.bannerImgWrap}>
          <Image
            src="/images/oldlady.jpg"
            alt="thero"
            width={300}
            height={300}
            className={styles.bannerImg}
            priority
          />
        </div>
        <div className={styles.bannerText}>
          <h1 className={styles.bannerTitle}>Do I qualify for the aged pension?</h1>
          <p className={styles.bannerSubtitle}>Yes, you’ll qualify for a part pension.</p>
        </div>
      </div>

      {/* Elfsight embed */}
      <script src="https://elfsightcdn.com/platform.js" async></script>
      <div className="elfsight-app-4e747e1c-d9a2-4e2f-8118-2955ba126861" data-elfsight-app-lazy></div>

      <h1 className={styles.formHeading}>Enter your details</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* User fields */}
        <div className={styles.grid}>
          <div>
            <label className={styles.label}>User first name</label>
            <input
              type="text"
              name="userFirstName"
              value={formData.userFirstName}
              onChange={handleInputChange}
              placeholder="Enter"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>Do you have a partner?</label>
            <input
              type="number"
              name="userAge"
              value={formData.userAge}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 58"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>User age</label>
            <input
              type="number"
              name="userAge"
              value={formData.userAge}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 58"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>Partner first name</label>
            <input
              type="number"
              name="userPlannedRetirementAge"
              value={formData.userPlannedRetirementAge}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 67"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>User planned retirement age</label>
            <input
              type="number"
              name="userCurrentPensionBalance"
              value={formData.userCurrentPensionBalance}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 250000"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>Partner age</label>
            <input
              type="number"
              name="userCurrentSuperBalance"
              value={formData.userCurrentSuperBalance}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 320000"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>User current pension balance</label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>Partner planned retirement age</label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>User current super balance</label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>Partner current pension balance</label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>User desired household income</label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>Partner current super balance</label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>Total value of cars and contents</label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>Partner combined per annum</label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className={styles.input}
            />
          </div>
        </div>

        {/* Home & assets */}
        <div className={styles.grid}>
          <div>
            <label className={styles.label}>Do you own your own home?</label>
          </div>
          <div className={styles.radioGroup}>
            {["Yes ", "No - Renting", "No - Paying Off", "No - Other"].map(
              (option) => (
                <label key={option} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="ownYourOwnHome"
                    value={option}
                    checked={formData.ownYourOwnHome === (option as any)}
                    onChange={handleInputChange}
                    className={styles.radioInput}
                  />
                  <span>{option}</span>
                </label>
              )
            )}
          </div>

          <div>
            <label className={styles.label}>Partner combined per annum</label>
            <input
              type="number"
              name="userDesiredHouseholdIncome"
              value={formData.userDesiredHouseholdIncome}
              onChange={handleInputChange}
              min={0}
              placeholder="e.g., 70000"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.submitRow}>
          <button type="submit" className={styles.submitBtn}>
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
}
