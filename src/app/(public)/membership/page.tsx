import React from "react";
import { Metadata } from "next";
import { Membership } from "@/components/home/Membership";
import { MembershipPerks } from "@/components/membership/MembershipPerks";

export const metadata: Metadata = {
  title: "Membership Plans & Pricing | FabFit Performance Gym",
  description: "View pricing packages, membership options, and custom coaching plans at FabFit Performance Gym.",
  alternates: {
    canonical: "https://fabfitperformance.com/membership",
  },
  openGraph: {
    title: "Membership Plans & Pricing | FabFit Performance Gym",
    description: "View pricing packages, membership options, and custom coaching plans at FabFit Performance Gym.",
    url: "https://fabfitperformance.com/membership",
    images: ["/fabfit.jpeg"],
  },
};

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-[72px] pb-12">
      <div className="relative -mt-12 md:-mt-16">
        <Membership isPage={true} />
      </div>
      <div className="relative">
        <MembershipPerks />
      </div>
    </main>
  );
}
