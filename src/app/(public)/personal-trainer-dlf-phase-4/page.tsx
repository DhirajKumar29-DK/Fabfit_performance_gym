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
  ShieldCheck,
  Award,
  Sparkles,
  ChevronDown,
  Dumbbell,
  Users,
  Laptop,
  Clock,
  Check
} from "lucide-react";
import PersonalTrainerForm from "@/components/landing/PersonalTrainerForm";
import LandingFaqAccordion from "@/components/landing/LandingFaqAccordion";

export const metadata: Metadata = {
  title: {
    absolute: "Personal Trainer in DLF Phase 4 | Fab Fit Performance Gym",
  },
  description:
    "Looking for a personal trainer in DLF Phase 4? Get personalized 1:1 fitness, strength and transformation coaching at Fab Fit Performance.",
  alternates: {
    canonical: "https://fabfitperformance.com/personal-trainer-dlf-phase-4",
  },
  openGraph: {
    title: "Personal Trainer in DLF Phase 4 | Fab Fit Performance Gym",
    description:
      "Looking for a personal trainer in DLF Phase 4? Get personalized 1:1 fitness, strength and transformation coaching at Fab Fit Performance.",
    url: "https://fabfitperformance.com/personal-trainer-dlf-phase-4",
    images: ["/fabfit.jpeg"],
  },
};

const CERTIFICATIONS = [
  { name: "ACE Certified", org: "American Council on Exercise", badge: "ACE-CPT" },
  { name: "CSCS Specialist", org: "Strength & Conditioning", badge: "CSCS" },
  { name: "K11 Sports Science", org: "School of Fitness Sciences", badge: "K11" },
  { name: "ACSM Clinical", org: "American College of Sports Med", badge: "ACSM" }
];

const SERVICES = [
  {
    icon: Dumbbell,
    title: "1-on-1 Private Personal Training",
    subtitle: "100% Dedicated Attention",
    desc: "Private floor training tailored strictly to your biomechanics. Includes real-time lifting form correction, custom pacing, and injury pre-hab protocols.",
    features: [
      "Custom periodized strength programming",
      "Real-time postural alignment checks",
      "Bi-weekly InBody body-fat scans",
      "Dedicated nutrition & macro blueprint"
    ],
    highlight: "Most Popular"
  },
  {
    icon: Users,
    title: "Small Group & Buddy Training",
    subtitle: "High-Energy Shared Accountability",
    desc: "Train with a partner or in small intimate groups (2-4 people). Enjoy high-energy coaching, friendly competition, and significant cost savings.",
    features: [
      "Shared coach attention & team motivation",
      "Structured progressive group workouts",
      "Cost-effective premium personal training",
      "Ideal for couples, friends & colleagues"
    ],
    highlight: "Best Value"
  },
  {
    icon: Laptop,
    title: "Hybrid & Online Performance Coaching",
    subtitle: "For Busy Traveling Executives",
    desc: "Stay consistent even when traveling. Combines in-person studio sessions with custom workout app tracking, video form checks, and travel nutrition plans.",
    features: [
      "Custom workout app with video demonstrations",
      "Weekly video progress review calls",
      "Hotel gym & travel workout adaptations",
      "24/7 direct WhatsApp coach access"
    ],
    highlight: "Maximum Flexibility"
  }
];

const TRANSFORMATIONS = [
  {
    name: "Rohit Malhotra",
    location: "DLF Phase 4, Gurgaon",
    stats: "Lost 14.5 kg • Built 4.2 kg Muscle",
    duration: "12 Weeks",
    image: "/user_uploaded/media_1790696135531.png",
    quote: "Working with the 1:1 coaches in DLF Phase 4 completely transformed my desk posture, lower back strength, and daily energy levels."
  },
  {
    name: "Pooja Singhania",
    location: "Sector 28, Gurgaon",
    stats: "Dropped 4 Dress Sizes • Core Strength",
    duration: "16 Weeks",
    image: "/user_uploaded/media_1790695387159.png",
    quote: "I was intimidated by heavy weights before. The trainers broke down every movement safely with zero joint pain."
  },
  {
    name: "Amit Vashist",
    location: "DLF Galleria Corridor",
    stats: "Reversed Pre-Diabetes • 18 kg Fat Loss",
    duration: "20 Weeks",
    image: "/user_uploaded/media_1790697213797.png",
    quote: "The personalized Indian diet plan and consistent lifting technique gave me results that 5 years of solo gymming never could."
  }
];

const FAQS = [
  {
    q: "Is 1:1 personal training suitable for complete beginners in DLF Phase 4?",
    a: "Yes, 100%! Over 70% of our clients start as beginners. Your coach begins with fundamental movement mechanics, safe lifting techniques, and adjusts workout intensity to your current baseline."
  },
  {
    q: "What training slots and timings are available in DLF Phase 4?",
    a: "We offer flexible personal training slots from 6:00 AM to 10:00 PM (Monday to Saturday) and morning slots on Sundays. You can lock in a dedicated time slot that fits your schedule."
  },
  {
    q: "Are female personal trainers available at Fab Fit?",
    a: "Yes, we have certified male and female personal trainers specializing in strength training, fat loss, pre/post-natal fitness, and mobility."
  },
  {
    q: "How soon can I expect visible transformation results?",
    a: "With consistent 1:1 training and adherence to your custom nutrition plan, clients notice improved energy and posture in 2 weeks, measurable body composition changes in 4 weeks, and significant transformations in 8-12 weeks."
  }
];

export default function PersonalTrainerDLFPhase4Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Fab Fit Performance Gym - Personal Trainer DLF Phase 4",
        "description": "Best 1:1 Personal Trainer in DLF Phase 4 Gurgaon offering customized strength coaching, fat loss training, and scientific nutrition planning.",
        "url": "https://fabfitperformance.com/personal-trainer-dlf-phase-4",
        "telephone": "+919899179911",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "DLF Phase 4 (Near Galleria Market & Supermart)",
          "addressLocality": "Gurgaon",
          "addressRegion": "Haryana",
          "postalCode": "122002",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.4682",
          "longitude": "77.0838"
        },
        "openingHours": "Mo-Sa 06:00-22:00, Su 07:00-14:00"
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FFB81C] selection:text-black">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-center py-10 md:py-14 border-b border-zinc-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FFB81C]/10 blur-[130px] rounded-full" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-zinc-800/20 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Hero Workout Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(255,184,28,0.12)]">
                <img
                  src="/landing/pt_dlf_hero.jpg"
                  alt="Personal Training in DLF Phase 4"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#FFB81C]">1:1 Dedicated Training</div>
                    <div className="text-[11px] text-zinc-400">Private Training Floor • DLF Phase 4</div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-[10px] font-extrabold uppercase">
                    Certified
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
              {/* Top Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin size={14} />
                <span>DLF Phase 4, Gurgaon • Dedicated 1:1 Personal Training</span>
              </div>

              {/* Main H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
                Personal Trainer in <span className="text-[#FFB81C]">DLF Phase 4</span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed mb-6 max-w-2xl">
                Looking for a personal trainer in DLF Phase 4? Get personalized 1:1 fitness, strength and transformation coaching at Fab Fit Performance with custom Indian nutrition and guaranteed results.
              </p>

              {/* Value Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 text-xs sm:text-sm font-medium">
                  <CheckCircle2 size={16} className="text-[#FFB81C] shrink-0" />
                  <span>100% 1:1 Dedicated Coach</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 text-xs sm:text-sm font-medium">
                  <CheckCircle2 size={16} className="text-[#FFB81C] shrink-0" />
                  <span>Bi-Weekly InBody Scans</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 text-xs sm:text-sm font-medium">
                  <CheckCircle2 size={16} className="text-[#FFB81C] shrink-0" />
                  <span>Custom Indian Nutrition</span>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#booking-section"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FFB81C] text-black font-extrabold text-sm sm:text-base hover:bg-[#A8861E] hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,184,28,0.35)] flex items-center justify-center gap-2"
                >
                  <span>Claim Free 1:1 Trial Session</span>
                  <ArrowRight size={18} />
                </a>
                <a
                  href="https://wa.me/919899179911?text=Hi%20Coach!%20I%20am%20looking%20for%20a%20personal%20trainer%20in%20DLF%20Phase%204.%20Please%20guide%20me."
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

      {/* SECTION 2: COACHING PROGRAMS & CREDENTIALS */}
      <section className="py-16 md:py-20 border-b border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
            
            {/* Left Column: Programs Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={14} />
                <span>Tailored Coaching Formats</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                Personalized Training Programs in DLF Phase 4
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mb-8">
                Evidence-based biomechanics, joint-safe progressive overload, and custom nutrition blueprints designed for corporate professionals and fitness enthusiasts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SERVICES.map((srv, idx) => {
                  const Icon = srv.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-[#FFB81C]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#FFB81C]/10 border border-[#FFB81C]/30 flex items-center justify-center text-[#FFB81C] group-hover:scale-110 transition-transform">
                            <Icon size={20} />
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-[10px] font-bold">
                            {srv.highlight}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-1.5">
                          {srv.title}
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {srv.desc}
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
                  src="/landing/pt_dlf_section2.jpg"
                  alt="1:1 Strength Coaching in DLF Phase 4"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <Award size={14} />
                    <span>Progressive Overload & Form Mastery</span>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Safe biomechanics guided 1:1 by Head Coach Ankit Baliyan
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Coach Certifications Strip */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold text-[#FFB81C] uppercase tracking-wider">Coach Credentials</span>
              <h4 className="text-sm sm:text-base font-bold text-white">Internationally Certified Master Trainers</h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full sm:w-auto">
              {CERTIFICATIONS.map((cert, cIdx) => (
                <div key={cIdx} className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-center">
                  <span className="text-[11px] font-bold text-[#FFB81C] block">{cert.badge}</span>
                  <span className="text-[10px] text-zinc-400 block truncate">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROVEN TRANSFORMATIONS */}
      <section className="py-16 md:py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
              <Award size={14} />
              <span>Real Client Results</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Proven Transformations in DLF Phase 4
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Measurable body recomposition results achieved through dedicated 1:1 training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRANSFORMATIONS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-zinc-800">
                    <span className="text-sm font-bold text-[#FFB81C]">{item.stats}</span>
                    <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-semibold">
                      {item.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[#FFB81C] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FFB81C]" />
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/80 text-xs text-zinc-500">
                  📍 {item.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: BOOKING FORM & FAQS */}
      <section id="booking-section" className="py-16 md:py-20 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Quick Booking Form */}
            <div className="lg:col-span-6 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} />
                <span>Limited 1:1 Slots</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Book Your Free 1:1 Trial & Assessment
              </h3>
              <p className="text-sm text-zinc-400 mb-6">
                Meet our Head Coach in DLF Phase 4, evaluate your movement, and get a customized transformation plan.
              </p>

              <PersonalTrainerForm
                sourcePage="Personal Trainer DLF Phase 4"
                buttonText="Claim Free 1:1 Trial Session"
              />
            </div>

            {/* Right: FAQs & Studio Info */}
            <div className="lg:col-span-6 space-y-8">
              {/* Studio Info Card */}
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-lg">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-[#FFB81C]" />
                  <span>DLF Phase 4 Studio Location</span>
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
