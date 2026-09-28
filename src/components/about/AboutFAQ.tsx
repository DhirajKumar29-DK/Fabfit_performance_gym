"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "1. What are your gym timings?",
    answer:
      "Our facility and head coaches operate from 6:00 AM to 10:00 PM (Monday through Saturday). For online personal coaching clients, support and query resolution are available 24/7 via WhatsApp and our portal.",
  },
  {
    question: "2. Do you provide personal training?",
    answer:
      "Yes! Every client receives a 100% customized 1-on-1 training blueprint and macro-calculated workout plan tailored specifically to their body type, goals, and experience level.",
  },
  {
    question: "3. Do you offer diet or nutrition guidance?",
    answer:
      "Absolutely. Nutrition is 70% of your progress. We design personalized, easy-to-follow meal plans, macro targets, and supplement advice to maximize fat loss and muscle gain.",
  },
];

export function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Fixed-Height 3-Image Dynamic Grid Layout */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 h-[496px] md:h-[536px] sticky top-28">
            {/* Left Column (Stack of 2 Images) */}
            <div className="flex flex-col gap-4 h-full">
              {/* Image 1: Top Left */}
              <div className="h-[240px] md:h-[260px] shrink-0 rounded-2xl overflow-hidden relative group border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800"
                  alt="Female Athlete Workout"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              </div>

              {/* Image 2: Bottom Left */}
              <div className="h-[240px] md:h-[260px] shrink-0 rounded-2xl overflow-hidden relative group border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=800"
                  alt="FabFit Workout Facility"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              </div>
            </div>

            {/* Right Column: Tall Single Vertical Image (Fixed Exact Height) */}
            <div className="h-[496px] md:h-[536px] rounded-2xl overflow-hidden relative group border border-white/10 shadow-2xl shrink-0">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
                alt="Fitness Training Session"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2 text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Elite Performance</span>
                </div>
                <p className="text-white text-xs font-semibold">100% Guaranteed Results</p>
              </div>
            </div>
          </div>

          {/* Right Column: FAQs Content & Accordion (Exactly 3 FAQs) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Header Badge & Title */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-[#d4af37] text-xs md:text-sm font-black tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20">
                <HelpCircle className="w-3.5 h-3.5" />
                FAQs
              </span>

              <h2 className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.05] mb-4">
                Everything about <span className="text-[#d4af37]">FabFit Performance Gym</span>
              </h2>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                We know that starting or maintaining a fitness journey can feel overwhelming. Here are some frequently asked questions to help guide you through your training at FabFit Performance Gym.
              </p>
            </div>

            {/* Accordion List (3 Items) */}
            <div className="space-y-4">
              {faqData.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen
                        ? "bg-zinc-900/90 border-[#d4af37]/40 shadow-[0_0_20px_rgba(212,175,55,0.08)]"
                        : "bg-zinc-900/40 border-white/5 hover:border-white/15"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 group"
                    >
                      <span
                        className={`text-sm md:text-base font-bold transition-colors ${
                          isOpen ? "text-[#d4af37]" : "text-white group-hover:text-[#d4af37]"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-[#d4af37] text-black rotate-180"
                            : "bg-white/5 text-zinc-400 group-hover:bg-white/10 group-hover:text-white"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-zinc-400 text-xs md:text-sm leading-relaxed border-t border-white/5">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
