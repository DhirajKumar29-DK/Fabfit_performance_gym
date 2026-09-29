"use client";

import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { About } from "@/components/home/About";
import { Programs } from "@/components/home/Programs";
import { Services } from "@/components/home/Services";
import { Transformations } from "@/components/home/Transformations";
import { Coaches } from "@/components/home/Coaches";
import { Trainers } from "@/components/home/Trainers";
import { ClientTestimonials } from "@/components/home/ClientTestimonials";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Membership } from "@/components/home/Membership";
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

      {/* 3. About Us Section */}
      <About />

      {/* 4. Programs Section */}
      <Programs />

      {/* 5. Services Section */}
      <Services />

      {/* 6. Transformations Section */}
      <Transformations />

      {/* 7. Head Coach Section */}
      <Coaches />

      {/* 8. Team Trainers Section */}
      <Trainers />

      {/* 9. Client Testimonials Section */}
      <ClientTestimonials />

      {/* 10. Gallery Preview Section */}
      <GalleryPreview />

      {/* 11. Membership Plans Section */}
      <Membership />

      {/* 12. Contact Section */}
      <Contact />
    </main>
  );
}

