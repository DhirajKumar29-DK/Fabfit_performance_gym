import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo & Video Gallery | Fab Fit Performance Gym",
  description: "Explore photos and videos of our facility, client training sessions, and workout culture at Fab Fit Performance Gym Gurgaon.",
  alternates: {
    canonical: "https://fabfitperformance.com/gallery",
  },
  openGraph: {
    title: "Photo & Video Gallery | Fab Fit Performance Gym",
    description: "Explore photos and videos of our facility, client training sessions, and workout culture at Fab Fit Performance Gym Gurgaon.",
    url: "https://fabfitperformance.com/gallery",
    images: ["/fabfit.jpeg"],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
