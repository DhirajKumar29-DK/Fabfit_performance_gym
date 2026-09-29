import React from "react";
import { Metadata } from "next";
import { About } from "@/components/home/About";
import { AboutFAQ } from "@/components/about/AboutFAQ";

export const metadata: Metadata = {
  title: "About Us | FabFit Performance Gym",
  description: "Learn about FabFit Performance Gym, our mission, expert coaches, and elite fitness transformation methodology.",
  alternates: {
    canonical: "https://fabfitperformance.com/about",
  },
  openGraph: {
    title: "About Us | FabFit Performance Gym",
    description: "Learn about FabFit Performance Gym, our mission, expert coaches, and elite fitness transformation methodology.",
    url: "https://fabfitperformance.com/about",
    images: ["/fabfit.jpeg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-[72px] pb-12">
      <div className="relative -mt-12 md:-mt-16">
        <About isPage={true} />
      </div>
      <div className="relative">
        <AboutFAQ />
      </div>
    </main>
  );
}
