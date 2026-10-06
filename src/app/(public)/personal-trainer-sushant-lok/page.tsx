import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  Star,
  ArrowRight,
  Dumbbell,
  Activity,
  ShieldCheck,
  Sparkles,
  Clock,
  Award,
  Navigation,
  UserCheck,
  HeartHandshake,
  Users,
} from "lucide-react";
import PersonalTrainerForm from "@/components/landing/PersonalTrainerForm";
import LandingFaqAccordion from "@/components/landing/LandingFaqAccordion";

export const metadata: Metadata = {
  title: {
    absolute: "Personal Trainer in Sushant Lok 1 Gurgaon | Fab Fit Performance gym",
  },
  description:
    "Looking for a personal trainer in Sushant Lok 1? Visit Fab Fit Performance Gym in DLF Phase 4 for personalized 1:1 fitness and strength training.",
  alternates: {
    canonical: "https://fabfitperformance.com/personal-trainer-sushant-lok",
  },
  openGraph: {
    title: "Personal Trainer in Sushant Lok 1 Gurgaon | Fab Fit Performance gym",
    description:
      "Looking for a personal trainer in Sushant Lok 1? Visit Fab Fit Performance Gym in DLF Phase 4 for personalized 1:1 fitness and strength training.",
    url: "https://fabfitperformance.com/personal-trainer-sushant-lok",
    images: ["/fabfit.jpeg"],
  },
};

const ADVANTAGES = [
  {
    icon: Navigation,
    title: "Just 5 Mins from Sushant Lok 1",
    desc: "Located conveniently in DLF Phase 4 right beside Galleria & Supermart, offering a quick hassle-free drive with reserved valet parking.",
    points: ["Easy Golf Course Road connectivity", "Avoid overcrowded local gym traffic", "Quiet executive atmosphere"]
  },
  {
    icon: UserCheck,
    title: "Dedicated 1-on-1 Elite Coaching",
    desc: "Zero cookie-cutter workouts. Every set, rep, and tempo is tailored to your unique biomechanics, past injuries, and body composition goals.",
    points: ["Form & posture correction in real time", "Tailored periodized training programs", "No shared equipment during your slot"]
  },
  {
    icon: Activity,
    title: "Complete Body Recomposition System",
    desc: "Combine progressive strength workouts with practical Indian nutrition guidance, bi-weekly InBody body-fat scans, and daily coach accountability.",
    points: ["Indian diet & macro blueprints", "Bi-weekly InBody body composition tracking", "Direct WhatsApp coach access"]
  }
];

const FAQS = [
  {
    q: "How far is Fab Fit Performance from Sushant Lok 1?",
    a: "Fab Fit Performance is located in DLF Phase 4, approximately 1.5 to 2 km (a 4 to 6-minute drive) from Sushant Lok 1 via Vyapar Kendra / Galleria corridor. We provide private valet parking."
  },
  {
    q: "Why choose Fab Fit Performance over commercial gyms in Sushant Lok 1?",
    a: "Unlike crowded commercial gyms where trainers manage dozens of clients at once, Fab Fit is a private strength & performance studio. You get 100% dedicated 1:1 attention from internationally certified coaches on an uncrowded training floor."
  },
  {
    q: "What training goals do your Sushant Lok personal trainers handle?",
    a: "Our certified coaches specialize in fat loss, muscle hypertrophy, posture correction (anterior pelvic tilt, desk neck), post-pregnancy recovery, athletic conditioning, and injury rehabilitation."
  },
  {
    q: "How do I start with a trial session?",
    a: "Simply fill in the form below. Our head coach will connect with you to book a complimentary 1:1 assessment and private workout session at our DLF Phase 4 studio."
  }
];

export default function PersonalTrainerSushantLokPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Fab Fit Performance Gym - Personal Trainer for Sushant Lok 1",
    "description": "Looking for a personal trainer in Sushant Lok 1? Visit Fab Fit Performance Gym in DLF Phase 4 for personalized 1:1 fitness and strength training.",
    "url": "https://fabfitperformance.com/personal-trainer-sushant-lok",
    "telephone": "+919899179911",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "DLF Phase 4 (Near Galleria Market & Supermart, 5 mins from Sushant Lok 1)",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.4682",
      "longitude": "77.0863"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "06:00",
        "closes": "22:00"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FFB81C] selection:text-black">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-center py-10 md:py-14 border-b border-zinc-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FFB81C]/10 blur-[130px] rounded-full" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#FFB81C]/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Hero Workout Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(255,184,28,0.12)]">
                <img
                  src="/landing/sushant_hero.jpg"
                  alt="Personal trainer guiding dumbbell workout for Sushant Lok client"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#FFB81C]">1:1 Executive Coaching</div>
                    <div className="text-[11px] text-zinc-400">5 Mins from Sushant Lok 1 • DLF Phase 4</div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-[10px] font-extrabold uppercase">
                    Private
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
              {/* Top Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin size={14} />
                <span>Sushant Lok 1 & DLF Phase 4 Corridor • Premier 1:1 Coaching</span>
              </div>

              {/* Main H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
                Personal Trainer in <span className="text-[#FFB81C]">Sushant Lok 1 Gurgaon</span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed mb-6 max-w-2xl">
                Looking for a personal trainer in Sushant Lok 1? Visit Fab Fit Performance Gym in DLF Phase 4 (just 5 minutes away) for dedicated 1:1 fitness, strength, and transformation coaching.
              </p>

              {/* Value Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-left">
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <Navigation size={14} />
                    <span>5 Mins Away</span>
                  </div>
                  <div className="text-xs text-zinc-400">Near Galleria corridor</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <UserCheck size={14} />
                    <span>100% 1:1 Focus</span>
                  </div>
                  <div className="text-xs text-zinc-400">Private training floor</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <Award size={14} />
                    <span>Certified</span>
                  </div>
                  <div className="text-xs text-zinc-400">CSCS & ACE specialists</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <ShieldCheck size={14} />
                    <span>Custom Diet</span>
                  </div>
                  <div className="text-xs text-zinc-400">Indian macro plans</div>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#booking-section"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FFB81C] text-black font-extrabold text-sm sm:text-base hover:bg-[#A8861E] hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,184,28,0.35)] flex items-center justify-center gap-2"
                >
                  <span>Claim Free 1:1 Assessment</span>
                  <ArrowRight size={18} />
                </a>
                <a
                  href="https://wa.me/919899179911?text=Hi%20Coach!%20I%20am%20from%20Sushant%20Lok%201%20and%20looking%20for%20a%20personal%20trainer.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-bold text-sm sm:text-base hover:border-[#25D366] hover:text-[#25D366] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} className="text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHY SUSHANT LOK RESIDENTS CHOOSE FAB FIT */}
      <section className="py-16 md:py-20 border-b border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Advantages Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={14} />
                <span>The Executive Advantage</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                Why Sushant Lok 1 Residents Train with Fab Fit Performance
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mb-8">
                Skip crowded local gyms and experience an executive training environment with private floor access and tailored guidance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ADVANTAGES.map((adv, idx) => {
                  const Icon = adv.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-[#FFB81C]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-[#FFB81C]/10 border border-[#FFB81C]/30 flex items-center justify-center text-[#FFB81C] mb-3 group-hover:scale-110 transition-transform">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-base font-bold text-white mb-1.5">
                          {adv.title}
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {adv.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Section 2 Workout Image */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(255,184,28,0.12)]">
                <img
                  src="/landing/sushant_section2.jpg"
                  alt="Functional resistance training in Sushant Lok 1 corridor"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <Users size={14} />
                    <span>Dedicated Functional Core Studio</span>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    High-energy 1:1 training just 5 minutes from Sushant Lok 1
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: QUICK ROUTE & STUDIO ENVIRONMENT */}
      <section className="py-16 md:py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin size={14} />
              <span>Easy Commute</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Seamless 5-Minute Access from Sushant Lok 1
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Conveniently located in DLF Phase 4 with direct road connectivity, dedicated parking, and premium fitness amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              <div className="text-3xl font-extrabold text-[#FFB81C] mb-2">1.5 km</div>
              <div className="text-base font-bold text-white mb-1">Distance from Sushant Lok 1</div>
              <p className="text-xs text-zinc-400">Via Galleria / Vyapar Kendra Road</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              <div className="text-3xl font-extrabold text-[#FFB81C] mb-2">5 Mins</div>
              <div className="text-base font-bold text-white mb-1">Average Drive Time</div>
              <p className="text-xs text-zinc-400">Quick morning & evening commute</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              <div className="text-3xl font-extrabold text-[#FFB81C] mb-2">100%</div>
              <div className="text-base font-bold text-white mb-1">Valet & Parking Available</div>
              <p className="text-xs text-zinc-400">Reserved stress-free parking on arrival</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BOOKING FORM & FAQS */}
      <section id="booking-section" className="py-16 md:py-20 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Interactive Booking Form */}
            <div className="lg:col-span-6 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} />
                <span>Complimentary 1:1 Session</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Book Your Trial & Assessment
              </h3>
              <p className="text-sm text-zinc-400 mb-6">
                Experience a private personal training session and consultation at our DLF Phase 4 studio, just 5 minutes from Sushant Lok 1.
              </p>

              <PersonalTrainerForm
                sourcePage="Personal Trainer Sushant Lok 1"
                buttonText="Book Free 1:1 Assessment"
              />
            </div>

            {/* Right: Studio Details & FAQs */}
            <div className="lg:col-span-6 space-y-8">
              {/* Studio Info Card */}
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-lg">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-[#FFB81C]" />
                  <span>DLF Phase 4 Facility & Timings</span>
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  Fab Fit Performance Gym, DLF Phase 4 (Near Galleria Market & Supermart), Gurgaon, Haryana 122002.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-400 border-t border-zinc-800 pt-4">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#FFB81C]" />
                    <span>Mon - Sat: 6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-[#FFB81C]" />
                    <span>+91 98991 79911</span>
                  </div>
                </div>
              </div>

              {/* FAQs Accordion */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>Frequently Asked Questions</span>
                </h4>
                <LandingFaqAccordion faqs={FAQS} />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
