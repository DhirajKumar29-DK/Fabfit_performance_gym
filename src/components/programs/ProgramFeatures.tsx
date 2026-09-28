"use client";

import React from "react";
import Link from "next/link";
import { Target, Utensils, Dumbbell, TrendingUp, CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Biometric Assessment",
    subtitle: "In-depth body & health evaluation",
    icon: Target,
    description:
      "We analyze your body composition, metabolic rate, posture, and medical background before crafting your custom training plan.",
    bullets: ["Body Composition Analysis", "Postural & Mobility Screening", "Health & Injury History Check"],
  },
  {
    number: "02",
    title: "Custom Nutrition Architecture",
    subtitle: "Precision macro-calculated diets",
    icon: Utensils,
    description:
      "Tailored protein, carb, and fat ratios designed for sustainable fat loss and lean muscle gain without restrictive starvation.",
    bullets: ["Custom Meal Breakdown", "Flexible Diet Options", "Supplement Protocol"],
  },
  {
    number: "03",
    title: "Progressive Resistance Training",
    subtitle: "Periodized workout programming",
    icon: Dumbbell,
    description:
      "Periodized training splits engineered for continuous overload, strength gains, and joint longevity for long-term health.",
    bullets: ["Custom Exercise Selection", "Form Check Video Reviews", "Periodized Overload Splits"],
  },
  {
    number: "04",
    title: "Weekly Tracking & Adjustments",
    subtitle: "Zero plateau guarantee",
    icon: TrendingUp,
    description:
      "Weekly photo, weight, and measurement reviews to make data-driven adjustments so your body never hits a plateau.",
    bullets: ["Weekly Progress Audits", "Real-Time Calorie Adjustments", "24/7 Coach Direct Access"],
  },
];

export function ProgramFeatures() {
  return (
    <section className="py-16 md:py-24 bg-[#08080a] border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[#d4af37] text-xs md:text-sm font-black tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20">
            <Zap className="w-3.5 h-3.5" />
            SCIENCE-BACKED METHODOLOGY
          </span>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.05] mb-4">
            THE TRANSFORMATION <span className="text-[#d4af37]">BLUEPRINT</span>
          </h2>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-xl mx-auto">
            4 non-negotiable pillars of science-backed physique engineering.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300">
                      <IconComponent className="w-7 h-7 stroke-[2]" />
                    </div>
                    <span className="font-heading text-4xl font-black text-zinc-700 group-hover:text-[#d4af37] transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-2xl md:text-3xl font-black text-white uppercase mb-2 group-hover:text-[#d4af37] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-bold tracking-wider text-[#d4af37] uppercase mb-4">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="pt-6 border-t border-white/5">
                  <ul className="space-y-2.5">
                    {pillar.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs md:text-sm font-semibold text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
