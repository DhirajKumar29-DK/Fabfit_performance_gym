"use client";

import React, { useState } from "react";
import { User, Phone, Target, Clock, MessageSquare, ArrowRight, CheckCircle2, Loader2, ChevronDown } from "lucide-react";

interface Props {
  sourcePage?: string;
  buttonText?: string;
}

export default function PersonalTrainerForm({
  sourcePage = "Personal Trainer DLF Phase 4",
  buttonText = "Claim Free Trial & Assessment Session"
}: Props) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "",
    slot: "",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please enter your name and phone number.");
      return;
    }

    const phoneRegex = /^[0-9+\s-]{8,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    if (!formData.goal) {
      setErrorMessage("Please select your primary fitness goal.");
      return;
    }

    if (!formData.slot) {
      setErrorMessage("Please select your preferred time slot.");
      return;
    }

    setIsSubmitting(true);

    const waLines = [
      "Hi Coach! I just submitted an assessment request on your website.",
      "",
      `• Goal: ${formData.goal}`,
      `• Name: ${formData.name.trim()}`,
      `• Phone: ${formData.phone.trim()}`,
      `• Preferred Slot: ${formData.slot}`,
      `• Source: ${sourcePage}`,
    ];
    if (formData.notes && formData.notes.trim()) {
      waLines.push(`• Notes: ${formData.notes.trim()}`);
    }
    const waMessage = waLines.join("\n");
    const waUrl = `https://wa.me/919220393004?text=${encodeURIComponent(waMessage)}`;

    try {
      const res = await fetch("/api/assessments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name.trim(),
          phone: formData.phone.trim(),
          fitnessGoal: formData.goal,
          trainingType: "Personal Training 1:1",
          preferredTime: formData.slot,
          notes: `[Source: ${sourcePage}] ${formData.notes ? "Notes: " + formData.notes : ""}`.trim(),
          source: sourcePage,
        }),
      });

      if (!res.ok) {
        console.warn("Server response not ok, opening WhatsApp directly");
      }

      setIsSubmitted(true);

      // Open WhatsApp directly for instant coach connection
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank");
      }
    } catch (error) {
      console.error("Failed to submit assessment lead:", error);
      setIsSubmitted(true);
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    const waLines = [
      "Hi Coach! I just submitted an assessment request on your website.",
      "",
      `• Goal: ${formData.goal}`,
      `• Name: ${formData.name.trim()}`,
      `• Phone: ${formData.phone.trim()}`,
      `• Preferred Slot: ${formData.slot}`,
      `• Source: ${sourcePage}`,
    ];
    if (formData.notes && formData.notes.trim()) {
      waLines.push(`• Notes: ${formData.notes.trim()}`);
    }
    const waMessage = waLines.join("\n");
    const waUrl = `https://wa.me/919220393004?text=${encodeURIComponent(waMessage)}`;

    return (
      <div className="p-8 rounded-2xl bg-zinc-900/90 border border-[#FFB81C]/40 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-[#FFB81C]/20 border border-[#FFB81C] flex items-center justify-center mx-auto mb-4 text-[#FFB81C]">
          <CheckCircle2 size={32} />
        </div>
        <h4 className="text-xl font-bold text-white mb-2">
          Assessment Request Confirmed!
        </h4>
        <p className="text-sm text-zinc-300 mb-6 max-w-md mx-auto">
          Thank you, <span className="text-[#FFB81C] font-semibold">{formData.name}</span>. Your details have been received and our Head Coach will contact you shortly to confirm your slot in DLF Phase 4.
        </p>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#25D366] text-black font-extrabold text-sm hover:bg-[#1EBE5D] transition-colors shadow-lg"
        >
          <span>Open WhatsApp Chat Directly</span>
          <ArrowRight size={16} />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium">
          {errorMessage}
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
          Full Name *
        </label>
        <div className="relative">
          <input
            type="text"
            required
            placeholder="e.g. Rahul Verma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#FFB81C] focus:ring-1 focus:ring-[#FFB81C]/30 transition-all font-medium placeholder:text-zinc-400"
          />
          <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
          Phone / WhatsApp Number *
        </label>
        <div className="relative">
          <input
            type="tel"
            required
            placeholder="e.g. +91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#FFB81C] focus:ring-1 focus:ring-[#FFB81C]/30 transition-all font-medium placeholder:text-zinc-400"
          />
          <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
        </div>
      </div>

      {/* Primary Goal & Slot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
            Primary Goal *
          </label>
          <div className="relative">
            <select
              required
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              style={{ color: formData.goal ? "#ffffff" : "#a1a1aa" }}
              className="w-full pl-10 pr-10 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:outline-none focus:border-[#FFB81C] focus:ring-1 focus:ring-[#FFB81C]/30 transition-all font-medium appearance-none cursor-pointer"
            >
              <option value="" className="bg-zinc-900 text-zinc-400">
                Select Primary Goal
              </option>
              <option value="Fat Loss & Toning" className="bg-zinc-900 text-white">Fat Loss & Toning</option>
              <option value="Muscle Hypertrophy" className="bg-zinc-900 text-white">Muscle & Strength Building</option>
              <option value="Posture & Back Pain" className="bg-zinc-900 text-white">Posture & Back Pain Relief</option>
              <option value="Athletic Conditioning" className="bg-zinc-900 text-white">Athletic Conditioning</option>
              <option value="General Health & Mobility" className="bg-zinc-900 text-white">General Health & Mobility</option>
            </select>
            <Target size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
            <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
          </div>
        </div>

        {/* Preferred Slot */}
        <div>
          <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
            Preferred Time Slot *
          </label>
          <div className="relative">
            <select
              required
              value={formData.slot}
              onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
              style={{ color: formData.slot ? "#ffffff" : "#a1a1aa" }}
              className="w-full pl-10 pr-10 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:outline-none focus:border-[#FFB81C] focus:ring-1 focus:ring-[#FFB81C]/30 transition-all font-medium appearance-none cursor-pointer"
            >
              <option value="" className="bg-zinc-900 text-zinc-400">
                Select Preferred Time Slot
              </option>
              <option value="Morning (6:00 AM - 11:00 AM)" className="bg-zinc-900 text-white">Morning (6 AM - 11 AM)</option>
              <option value="Afternoon (12:00 PM - 4:00 PM)" className="bg-zinc-900 text-white">Afternoon (12 PM - 4 PM)</option>
              <option value="Evening (5:00 PM - 10:00 PM)" className="bg-zinc-900 text-white">Evening (5 PM - 10 PM)</option>
              <option value="Flexible / Any Time" className="bg-zinc-900 text-white">Flexible / Any Time</option>
            </select>
            <Clock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
            <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Message / Medical notes */}
      <div>
        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
          Any Existing Injury / Medical Condition (Optional)
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="e.g. Lower back stiffness, knee pain, etc."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#FFB81C] focus:ring-1 focus:ring-[#FFB81C]/30 transition-all font-medium placeholder:text-zinc-400"
          />
          <MessageSquare size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-2 py-4 px-4 sm:px-6 rounded-xl bg-[#FFB81C] text-black font-extrabold text-xs sm:text-sm md:text-base whitespace-nowrap hover:bg-[#A8861E] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,184,28,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin shrink-0" />
            <span className="whitespace-nowrap">Securing Your Slot...</span>
          </>
        ) : (
          <>
            <span className="whitespace-nowrap">{buttonText}</span>
            <ArrowRight size={18} className="shrink-0" />
          </>
        )}
      </button>

      <p className="text-[11px] text-zinc-500 text-center mt-2">
        🔒 100% Privacy Guaranteed. No spam. Direct consultation with certified coach.
      </p>
    </form>
  );
}
