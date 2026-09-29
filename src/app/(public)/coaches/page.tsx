import React from "react";
import { Metadata } from "next";
import { Coaches } from "@/components/home/Coaches";
import { Trainers } from "@/components/home/Trainers";

export const metadata: Metadata = {
  title: "Coaches & Trainers | FabFit Performance Gym",
  description: "Meet our certified head coaches and personal trainers dedicated to guiding your physique and health transformation at FabFit Performance Gym.",
  alternates: {
    canonical: "https://fabfitperformance.com/coaches",
  },
  openGraph: {
    title: "Coaches & Trainers | FabFit Performance Gym",
    description: "Meet our certified head coaches and personal trainers dedicated to guiding your physique and health transformation at FabFit Performance Gym.",
    url: "https://fabfitperformance.com/coaches",
    images: ["/fabfit.jpeg"],
  },
};

export default function CoachesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-[72px] pb-12">
      <div className="relative -mt-12 md:-mt-16 space-y-12">
        <Coaches isPage={true} />
        <Trainers isPage={true} />
      </div>
    </main>
  );
}
