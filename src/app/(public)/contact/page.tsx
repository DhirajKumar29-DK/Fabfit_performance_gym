import React from "react";
import { Metadata } from "next";
import { Contact } from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Contact Us | FabFit Performance Gym",
  description: "Get in touch with FabFit Performance Gym team for inquiries, consultation, and fitness guidance.",
  alternates: {
    canonical: "https://fabfitperformance.com/contact",
  },
  openGraph: {
    title: "Contact Us | FabFit Performance Gym",
    description: "Get in touch with FabFit Performance Gym team for inquiries, consultation, and fitness guidance.",
    url: "https://fabfitperformance.com/contact",
    images: ["/fabfit.jpeg"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-[72px] pb-12">
      <div className="relative -mt-12 md:-mt-16">
        <Contact />
      </div>
    </main>
  );
}
