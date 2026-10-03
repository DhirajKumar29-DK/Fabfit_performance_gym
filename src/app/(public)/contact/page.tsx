import React from "react";
import { Metadata } from "next";
import { Contact } from "@/components/home/Contact";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Us | Fab Fit Performance Gym",
  },
  description: "Contact Fab Fit Performance gym in DLF Phase 4, Gurgaon. Find our address, gym timings and phone number, or enquire about memberships and personal training.",
  alternates: {
    canonical: "https://fabfitperformance.com/contact",
  },
  openGraph: {
    title: "Contact Us | Fab Fit Performance Gym",
    description: "Contact Fab Fit Performance gym in DLF Phase 4, Gurgaon. Find our address, gym timings and phone number, or enquire about memberships and personal training.",
    url: "https://fabfitperformance.com/contact",
    images: ["/fabfit.jpeg"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-[72px] pb-12">
      <div className="relative -mt-12 md:-mt-16">
        <Contact isPage={true} />
      </div>
    </main>
  );
}
