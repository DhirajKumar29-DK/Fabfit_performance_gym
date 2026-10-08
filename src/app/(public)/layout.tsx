import { Metadata, Viewport } from "next";
import { Inter, Archivo } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { VisitorTracker } from "@/components/VisitorTracker";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fabfitperformance.com";

export const viewport: Viewport = {
  themeColor: "#FFB81C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gym in DLF Phase 4, Gurgaon | Fab Fit Performance gym",
  description: "Train at FabFit Performance gym in DLF Phase 4, Gurgaon. Explore personal coaching, fitness programs and gym memberships. Book your assessment.",
  keywords: [
    "Fab Fit Performance Gym",
    "FabFit Performance Gym",
    "Gym in Gurgaon",
    "Fitness Coaching Gurgaon",
    "Personal Trainer Gurgaon",
    "Online Fitness Coach",
    "Ankit Baliyan Coach",
    "Weight Loss Gym Gurgaon",
    "Body Transformation Gurgaon",
    "Best Gym DLF Phase 4",
  ],
  authors: [{ name: "Ankit Baliyan", url: siteUrl }],
  publisher: "Fab Fit Performance Gym",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "google2df1f7cdcaafff4e",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Gym in DLF Phase 4, Gurgaon | Fab Fit Performance gym",
    description: "Train at FabFit Performance gym in DLF Phase 4, Gurgaon. Explore personal coaching, fitness programs and gym memberships. Book your assessment.",
    url: siteUrl,
    siteName: "Fab Fit Performance Gym",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coach Ankit Baliyan - Fab Fit Performance Gym",
      },
      {
        url: "/ankit-baliyan.png",
        width: 800,
        height: 800,
        alt: "Coach Ankit Baliyan",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gym in DLF Phase 4, Gurgaon | Fab Fit Performance gym",
    description: "Train at FabFit Performance gym in DLF Phase 4, Gurgaon. Explore personal coaching, fitness programs and gym memberships. Book your assessment.",
    images: ["/og-image.jpg"],
    creator: "@fabfitperformance",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": ["ExerciseGym", "SportsActivityLocation", "HealthAndBeautyBusiness"],
  "name": "Fab Fit Performance Gym",
  "image": `${siteUrl}/og-image.jpg`,
  "logo": `${siteUrl}/logo.png`,
  "description": "Premium destination for elite fitness, personal training, and physique transformation coaching in Gurgaon.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "62C, 6th Floor, Supermart 1, DLF Phase-4",
    "addressLocality": "Gurgaon",
    "addressRegion": "Haryana",
    "postalCode": "122002",
    "addressCountry": "IN"
  },
  "hasMap": "https://maps.app.goo.gl/oPEMZr8uqCoxkmwq8",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.4621527",
    "longitude": "77.087228"
  },
  "telephone": "+919220393004",
  "url": siteUrl,
  "priceRange": "₹₹₹",
  "founder": {
    "@type": "Person",
    "name": "Ankit Baliyan",
    "jobTitle": "Head Performance Coach"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "06:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "08:00",
      "closes": "14:00"
    }
  ]
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VisitorTracker />
      <SmoothScroll>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </SmoothScroll>
    </>
  );
}
