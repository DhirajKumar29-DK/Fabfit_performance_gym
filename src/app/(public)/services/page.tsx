import React from "react";
import { Metadata } from "next";
import { Services } from "@/components/home/Services";

export const metadata: Metadata = {
  title: "Our Services | Fab Fit Performance Gym",
  description: "Explore elite fitness services, personalized training programs, nutrition consulting, and wellness solutions at Fab Fit Performance Gym.",
  alternates: {
    canonical: "https://fabfitperformance.com/services",
  },
  openGraph: {
    title: "Our Services | Fab Fit Performance Gym",
    description: "Explore elite fitness services, personalized training programs, nutrition consulting, and wellness solutions at Fab Fit Performance Gym.",
    url: "https://fabfitperformance.com/services",
    images: ["/fabfit.jpeg"],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-[72px] pb-12">
      <div className="relative -mt-12 md:-mt-16">
        <Services isPage={true} />
      </div>
    </main>
  );
}
