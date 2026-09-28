"use client";

import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { HomeShowcase } from "@/components/home/HomeShowcase";
import { About } from "@/components/home/About";
import { Programs } from "@/components/home/Programs";
import { Services } from "@/components/home/Services";
import { Transformations } from "@/components/home/Transformations";
import { Coaches } from "@/components/home/Coaches";
import { Trainers } from "@/components/home/Trainers";
import { ClientTestimonials } from "@/components/home/ClientTestimonials";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Membership } from "@/components/home/Membership";
import { CTASection } from "@/components/home/CTASection";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#050505] text-white">
      {/* 1. Main Hero Banner */}
      <Hero />

      {/* 2. Live Stats Bar */}
      <div className="py-6 border-t border-white/5 bg-[#08080a]">
        <Stats />
      </div>

      {/* 3. Premium Homepage Showcase Section */}
      <HomeShowcase />

      {/* 4. About Us Section */}
      <About />

      {/* 5. Programs Section */}
      <Programs />

      {/* 6. Services Section */}
      <Services />

      {/* 7. Transformations Section */}
      <Transformations />

      {/* 8. Head Coach Section */}
      <Coaches />

      {/* 9. Team Trainers Section */}
      <Trainers />

      {/* 10. Client Testimonials Section */}
      <ClientTestimonials />

      {/* 11. Gallery Preview Section */}
      <GalleryPreview />

      {/* 12. Membership Plans Section */}
      <Membership />

      {/* 13. Call To Action Section */}
      <CTASection />

      {/* 14. Contact Section */}
      <Contact />
    </main>
  );
}

