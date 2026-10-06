"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface LandingFaqAccordionProps {
  faqs: FAQItem[];
}

export default function LandingFaqAccordion({ faqs }: LandingFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className={`p-4 rounded-xl bg-zinc-900/70 border transition-all duration-300 cursor-pointer ${
              isOpen ? "border-[#FFB81C]/50 bg-zinc-900/90 shadow-md shadow-[#FFB81C]/5" : "border-zinc-800 hover:border-zinc-700"
            }`}
            onClick={() => toggleFAQ(idx)}
          >
            <div className="flex items-center justify-between cursor-pointer font-semibold text-sm text-zinc-200 select-none">
              <span className={isOpen ? "text-[#FFB81C]" : "text-zinc-200"}>{faq.q}</span>
              <ChevronDown
                size={16}
                className={`text-zinc-400 shrink-0 ml-2 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-[#FFB81C]" : ""
                }`}
              />
            </div>
            {isOpen && (
              <div className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed pt-2 border-t border-zinc-800/80 animate-in fade-in-50 duration-200">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
