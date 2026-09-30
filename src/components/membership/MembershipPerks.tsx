"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Award, Zap, HeartPulse } from "lucide-react";

const perks = [
  {
    title: "Personalized Macro Diets & Meal Plans",
    description: "Calculated protein, carb, and fat targets tailored to your metabolic rate and food preferences.",
  },
  {
    title: "24/7 Direct Coach Support",
    description: "Get instant form check corrections, technique feedback, and guidance directly on WhatsApp.",
  },
  {
    title: "Weekly Metric Audits & Zero-Plateau Guarantee",
    description: "Data-driven adjustments every week so your physique progress never hits a wall.",
  },
  {
    title: "Exclusive Member Exercise Vault",
    description: "Access to complete video exercise tutorials, warmup protocols, and mobility routines.",
  },
];

export function MembershipPerks() {
  return (
    <section className="py-16 md:py-24 bg-[#08080a] border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Gym Workout Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group h-[450px] md:h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1000"
                alt="Fab Fit Premium Membership Gym"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>All-Inclusive Membership</span>
                  </div>
                  <p className="text-white text-sm font-semibold">100% Guaranteed Results</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#d4af37] text-black flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Text Content & Perks */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-[#d4af37] text-xs md:text-sm font-black tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 w-fit">
              <ShieldCheck className="w-4 h-4" />
              MEMBERSHIP PRIVILEGES
            </span>

            {/* Heading */}
            <h2 className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
              MORE THAN A GYM PASS. <br />
              <span className="text-[#d4af37]">A FULL LIFE TRANSFORMER.</span>
            </h2>

            {/* Description */}
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8 font-medium">
              When you join Fab Fit Performance Gym, you gain access to an ecosystem engineered for results. We handle your training programming, macro nutrition architecture, and real-time accountability so you can focus purely on execution.
            </p>

            {/* Perks List */}
            <div className="space-y-4 mb-10">
              {perks.map((perk, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#d4af37]/30 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white text-base font-bold uppercase mb-1">{perk.title}</h4>
                    <p className="text-zinc-400 text-xs md:text-sm">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Action */}
            <div>
              <Link
                href="/assessment"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#d4af37] text-black font-extrabold tracking-wider uppercase text-sm rounded-lg hover:bg-white hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300 group"
              >
                APPLY FOR MEMBERSHIP NOW
                <ArrowRight className="ml-2 w-5 h-5 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
