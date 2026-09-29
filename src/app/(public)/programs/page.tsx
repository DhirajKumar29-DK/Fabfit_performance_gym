import React from "react";
import { Metadata } from "next";
import { Programs } from "@/components/home/Programs";
import { ProgramFeatures } from "@/components/programs/ProgramFeatures";

export const metadata: Metadata = {
  title: "Programs | FabFit Performance Gym",
  description: "Explore elite physique transformation, lifestyle coaching, contest prep, and custom workout programs at FabFit Performance Gym.",
  alternates: {
    canonical: "https://fabfitperformance.com/programs",
  },
  openGraph: {
    title: "Programs | FabFit Performance Gym",
    description: "Explore elite physique transformation, lifestyle coaching, contest prep, and custom workout programs at FabFit Performance Gym.",
    url: "https://fabfitperformance.com/programs",
    images: ["/fabfit.jpeg"],
  },
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-[72px] pb-12">
      <div className="relative -mt-12 md:-mt-16">
        <Programs isPage={true} />
      </div>
      <div className="relative">
        <ProgramFeatures />
      </div>
    </main>
  );
}
