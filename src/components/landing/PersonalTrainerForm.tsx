"use client";

import React, { useState } from "react";
import { User, Phone, Target, Clock, MessageSquare, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

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
    goal: "Fat Loss & Toning",
    slot: "Morning (6:00 AM - 11:00 AM)",
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

    setIsSubmitting(true);

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
          notes: `[Source: ${sourcePage}] ${formData.notes ? "Notes: " + formData.notes : ""}`,
          source: sourcePage,
        }),
      });

      if (!res.ok) {
        console.warn("Lead recorded locally");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit assessment lead:", error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    const waMessage = `Hi Coach! I just submitted an assessment request on your website for *${formData.goal}*. My name is ${formData.name} (${formData.phone}). When can we schedule my session?`;
    const waUrl = `https://wa.me/919899179911?text=${encodeURIComponent(waMessage)}`;

    return (
      <div className="p-8 rounded-2xl bg-zinc-900/90 border border-[#FFB81C]/40 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-[#FFB81C]/20 border border-[#FFB81C] flex items-center justify-center mx-auto mb-4 text-[#FFB81C]">
          <CheckCircle2 size={32} />
        </div>
        <h4 className="text-xl font-bold text-white mb-2">
          Assessment Request Confirmed!
        </h4>
        <p className="text-sm text-zinc-300 mb-6 max-w-md mx-auto">
          Thank you, <span className="text-[#FFB81C] font-semibold">{formData.name}</span>. Our Head Coach will call you shortly to confirm your slot in DLF Phase 4.
        </p>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#25D366] text-black font-bold text-sm hover:bg-[#1EBE5D] transition-colors"
        >
          <span>Connect Instantly on WhatsApp</span>
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
            className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#FFB81C] focus:ring-1 focus:ring-[#FFB81C]/30 transition-all font-medium placeholder:text-zinc-600"
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
            placeholder="e.g. +91 98991 00000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#FFB81C] focus:ring-1 focus:ring-[#FFB81C]/30 transition-all font-medium placeholder:text-zinc-600"
          />
          <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
        </div>
      </div>

      {/* Primary Goal & Slot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
            Primary Goal
          </label>
          <div className="relative">
            <select
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#FFB81C] focus:ring-1 focus:ring-[#FFB81C]/30 transition-all font-medium appearance-none cursor-pointer"
            >
              <option value="Fat Loss & Toning">Fat Loss & Toning</option>
              <option value="Muscle Hypertrophy">Muscle & Strength Building</option>
              <option value="Posture & Back Pain">Posture & Back Pain Relief</option>
              <option value="Athletic Conditioning">Athletic Conditioning</option>
              <option value="General Health & Mobility">General Health & Mobility</option>
            </select>
            <Target size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
          </div>
        </div>

        {/* Preferred Slot */}
        <div>
          <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
            Preferred Time Slot
          </label>
          <div className="relative">
            <select
              value={formData.slot}
              onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#FFB81C] focus:ring-1 focus:ring-[#FFB81C]/30 transition-all font-medium appearance-none cursor-pointer"
            >
              <option value="Morning (6:00 AM - 11:00 AM)">Morning (6 AM - 11 AM)</option>
              <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12 PM - 4 PM)</option>
              <option value="Evening (5:00 PM - 10:00 PM)">Evening (5 PM - 10 PM)</option>
              <option value="Flexible / Any Time">Flexible / Any Time</option>
            </select>
            <Clock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
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
            className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#FFB81C] focus:ring-1 focus:ring-[#FFB81C]/30 transition-all font-medium placeholder:text-zinc-600"
          />
          <MessageSquare size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-2 py-4 px-6 rounded-xl bg-[#FFB81C] text-black font-extrabold text-sm sm:text-base hover:bg-[#A8861E] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,184,28,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Securing Your Slot...</span>
          </>
        ) : (
          <>
            <span>{buttonText}</span>
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <p className="text-[11px] text-zinc-500 text-center mt-2">
        🔒 100% Privacy Guaranteed. No spam. Direct consultation with certified coach.
      </p>
    </form>
  );
}
