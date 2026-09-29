import React from "react";
import { Metadata } from "next";
import { Transformations } from "@/components/home/Transformations";
import { ClientTestimonials } from "@/components/home/ClientTestimonials";

export const metadata: Metadata = {
  title: "Client Transformations | FabFit Performance Gym",
  description: "See real before & after physique transformations and reviews from clients coached by FabFit Performance Gym.",
  alternates: {
    canonical: "https://fabfitperformance.com/transformations",
  },
  openGraph: {
    title: "Client Transformations | FabFit Performance Gym",
    description: "See real before & after physique transformations and reviews from clients coached by FabFit Performance Gym.",
    url: "https://fabfitperformance.com/transformations",
    images: ["/fabfit.jpeg"],
  },
};

export default function TransformationsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-[72px] pb-12">
      <div className="relative -mt-12 md:-mt-16 space-y-12">
        <Transformations isPage={true} />
        <ClientTestimonials />
      </div>
    </main>
  );
}
