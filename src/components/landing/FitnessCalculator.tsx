"use client";

import React, { useState } from "react";
import { Calculator, Flame, Activity, Zap, ArrowRight, Sparkles } from "lucide-react";

export default function FitnessCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState<string>("75");
  const [height, setHeight] = useState<string>("175");
  const [age, setAge] = useState<string>("30");
  const [activity, setActivity] = useState<string>("moderate");
  const [goal, setGoal] = useState<string>("fat_loss");

  const [result, setResult] = useState<{
    bmr: number;
    tdee: number;
    targetCalories: number;
    proteinGrams: number;
    bmi: number;
    bmiCategory: string;
  } | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (!w || !h || !a) return;

    // Harris-Benedict Formula
    let bmr = 0;
    if (gender === "male") {
      bmr = 88.362 + 13.397 * w + 4.799 * h - 5.677 * a;
    } else {
      bmr = 447.593 + 9.247 * w + 3.098 * h - 4.33 * a;
    }

    // Activity multiplier
    let multiplier = 1.2;
    if (activity === "light") multiplier = 1.375;
    if (activity === "moderate") multiplier = 1.55;
    if (activity === "very") multiplier = 1.725;

    const tdee = Math.round(bmr * multiplier);

    // Goal adjustments
    let target = tdee;
    if (goal === "fat_loss") target = Math.round(tdee - 450);
    if (goal === "muscle_gain") target = Math.round(tdee + 300);

    // Protein recommendation: 1.8g - 2.2g per kg bodyweight
    const protein = Math.round(w * 2.0);

    // BMI Calculation
    const heightInMeters = h / 100;
    const bmi = parseFloat((w / (heightInMeters * heightInMeters)).toFixed(1));
    let bmiCategory = "Normal Weight";
    if (bmi < 18.5) bmiCategory = "Underweight";
    else if (bmi >= 25 && bmi < 29.9) bmiCategory = "Overweight";
    else if (bmi >= 30) bmiCategory = "Obese";

    setResult({
      bmr: Math.round(bmr),
      tdee,
      targetCalories: target,
      proteinGrams: protein,
      bmi,
      bmiCategory
    });
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-[#FFB81C]/10 border border-[#FFB81C]/20 text-[#FFB81C]">
          <Calculator size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Interactive Calorie & Macro Calculator</h3>
          <p className="text-xs text-zinc-400">Discover your baseline metabolism and custom daily target</p>
        </div>
      </div>

      <form onSubmit={calculate} className="space-y-4">
        {/* Gender */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setGender("male")}
            className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
              gender === "male"
                ? "bg-[#FFB81C] text-black shadow-md"
                : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700"
            }`}
          >
            Male
          </button>
          <button
            type="button"
            onClick={() => setGender("female")}
            className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
              gender === "female"
                ? "bg-[#FFB81C] text-black shadow-md"
                : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700"
            }`}
          >
            Female
          </button>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
              Age (Years)
            </label>
            <input
              type="number"
              min="14"
              max="90"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-xs font-bold focus:border-[#FFB81C] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
              Weight (KG)
            </label>
            <input
              type="number"
              min="30"
              max="200"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-xs font-bold focus:border-[#FFB81C] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
              Height (CM)
            </label>
            <input
              type="number"
              min="100"
              max="230"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-xs font-bold focus:border-[#FFB81C] focus:outline-none"
            />
          </div>
        </div>

        {/* Goal & Activity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
              Activity Level
            </label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-xs font-medium focus:border-[#FFB81C] focus:outline-none"
            >
              <option value="sedentary">Sedentary (Desk Job)</option>
              <option value="light">Lightly Active (1-2 days)</option>
              <option value="moderate">Moderately Active (3-5 days)</option>
              <option value="very">Very Active (6-7 days)</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
              Fitness Goal
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-xs font-medium focus:border-[#FFB81C] focus:outline-none"
            >
              <option value="fat_loss">Fat Loss (-450 kcal)</option>
              <option value="maintenance">Maintain Weight</option>
              <option value="muscle_gain">Build Lean Muscle (+300 kcal)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-[#FFB81C] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#A8861E] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
        >
          <Sparkles size={14} />
          <span>Calculate My Transformation Targets</span>
        </button>
      </form>

      {/* Result Cards */}
      {result && (
        <div className="mt-6 pt-6 border-t border-zinc-800 grid grid-cols-2 sm:grid-cols-3 gap-3 animate-in fade-in zoom-in-95 duration-200">
          <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
            <span className="text-[10px] font-bold text-zinc-400 uppercase block">Daily Target</span>
            <span className="text-xl font-black text-[#FFB81C]">{result.targetCalories}</span>
            <span className="text-[10px] text-zinc-500 block">kcal / day</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
            <span className="text-[10px] font-bold text-zinc-400 uppercase block">Protein Goal</span>
            <span className="text-xl font-black text-emerald-400">{result.proteinGrams}g</span>
            <span className="text-[10px] text-zinc-500 block">per day</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 col-span-2 sm:col-span-1">
            <span className="text-[10px] font-bold text-zinc-400 uppercase block">BMI Status</span>
            <span className="text-base font-black text-white">{result.bmi}</span>
            <span className="text-[10px] text-[#FFB81C] block">{result.bmiCategory}</span>
          </div>
        </div>
      )}
    </div>
  );
}
