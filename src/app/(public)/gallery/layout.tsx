import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Gym Photos & Workout Videos | Fab Fit Performance Gym",
  },
  description: "Explore the Fab Fit Performance gallery for gym photos, workout videos, training sessions and community moments from our fitness centre in Gurgaon.",
  alternates: {
    canonical: "https://fabfitperformance.com/gallery",
  },
  openGraph: {
    title: "Gym Photos & Workout Videos | Fab Fit Performance Gym",
    description: "Explore the Fab Fit Performance gallery for gym photos, workout videos, training sessions and community moments from our fitness centre in Gurgaon.",
    url: "https://fabfitperformance.com/gallery",
    images: ["/fabfit.jpeg"],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
