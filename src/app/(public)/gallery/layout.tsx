import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo & Video Gallery | FabFit Performance Gym",
  description: "Explore photos and videos of our facility, client training sessions, and workout culture at FabFit Performance Gym Gurgaon.",
  alternates: {
    canonical: "https://fabfitperformance.com/gallery",
  },
  openGraph: {
    title: "Photo & Video Gallery | FabFit Performance Gym",
    description: "Explore photos and videos of our facility, client training sessions, and workout culture at FabFit Performance Gym Gurgaon.",
    url: "https://fabfitperformance.com/gallery",
    images: ["/fabfit.jpeg"],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
