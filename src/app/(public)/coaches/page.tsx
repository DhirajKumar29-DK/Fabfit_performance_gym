import React from "react";
import { Metadata } from "next";
import { Coaches } from "@/components/home/Coaches";
import { Trainers } from "@/components/home/Trainers";

export const metadata: Metadata = {
  title: {
    absolute: "Fitness Coaches in Gurgaon | Fab Fit Performance Gym",
  },
  description: "Meet the coaching team at FabFit Performance in Gurgaon. Explore our trainers and find guidance for your fitness goals, workouts and progress.",
  alternates: {
    canonical: "https://fabfitperformance.com/coaches",
  },
  openGraph: {
    title: "Fitness Coaches in Gurgaon | Fab Fit Performance Gym",
    description: "Meet the coaching team at FabFit Performance in Gurgaon. Explore our trainers and find guidance for your fitness goals, workouts and progress.",
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
