"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Dumbbell, Activity, Target } from "lucide-react";
import { motion } from "framer-motion";

export function HomeShowcase() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#070709]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Premium Dual Workout Images Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Main Featured Image (Female & Male Workout) */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group h-[440px] md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000"
                alt="FabFit Athlete Training"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Scientific Physique Engineering</span>
                  </div>
                  <p className="text-white text-sm font-semibold">100% Customized Coaching</p>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Badge Image (Top Right) */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-56 h-64 rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-2xl group z-20">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
                alt="Strength Training"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="text-[#d4af37] text-[10px] font-black tracking-widest uppercase">PROVEN RESULTS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Text & Features */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-[#d4af37] text-xs md:text-sm font-black tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 w-fit">
              <ShieldCheck className="w-4 h-4" />
              THE FABFIT STANDARDS
            </span>

            {/* Heading */}
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
              ENGINEERED FOR REAL <span className="text-[#d4af37]">PHYSIQUE EVOLUTION</span>
            </h2>

            {/* Description */}
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8 font-medium">
              We bridge the gap between scientific nutrition architecture and high-performance training. Whether your goal is stage prep, fat loss, or lean muscle gain, our customized methodology delivers guaranteed results.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#d4af37]/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Utensils className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-white text-base font-bold uppercase mb-1">Custom Macro Nutrition Architecture</h4>
                  <p className="text-zinc-400 text-xs md:text-sm">No starvation diets. Calculated macros tailored to your metabolic rate and lifestyle.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#d4af37]/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Dumbbell className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-white text-base font-bold uppercase mb-1">Progressive Resistance Training</h4>
                  <p className="text-zinc-400 text-xs md:text-sm">Periodized workout splits engineered for maximum muscle growth and joint safety.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#d4af37]/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Target className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-white text-base font-bold uppercase mb-1">Weekly Audit & Zero-Plateau Guarantee</h4>
                  <p className="text-zinc-400 text-xs md:text-sm">Weekly weight, photo, and metric check-ins so your progress never stalls.</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                scroll={true}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.scrollTo(0, 0);
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#d4af37] text-black font-extrabold tracking-wider uppercase text-sm rounded-lg hover:bg-white hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300 group text-center"
              >
                EXPLORE ABOUT US
                <ArrowRight className="ml-2 w-5 h-5 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/programs"
                scroll={true}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.scrollTo(0, 0);
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 bg-zinc-900/60 text-white font-bold tracking-wider uppercase text-sm rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300 text-center"
              >
                VIEW PROGRAMS
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// Helper icon
function Utensils(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2v20" />
      <path d="M4 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M8 2v6" />
      <path d="M18 7a3 3 0 0 0-3-3 3 3 0 0 0-3 3v5a3 3 0 0 0 3 3 3 3 0 0 0 3-3V7Z" />
    </svg>
  );
}
