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
    absolute: "Best Personal Trainer in DLF Phase 4, Gurgaon | FabFit Performance",
  },
  description:
    "Searching for the Best Personal Trainer in DLF Phase 4? FabFit Performance provides personalized fitness coaching, structured workouts & accountability at Supermart 1.",
  alternates: {
    canonical: "https://fabfitperformance.com/personal-trainer-dlf-phase-4",
  },
  openGraph: {
    title: "Best Personal Trainer in DLF Phase 4, Gurgaon | FabFit Performance",
    description:
      "Searching for the Best Personal Trainer in DLF Phase 4? FabFit Performance provides personalized fitness coaching, structured workouts & accountability at Supermart 1.",
    url: "https://fabfitperformance.com/personal-trainer-dlf-phase-4",
    images: ["/fabfit.jpeg"],
  },
};

const PT_PROGRAM_INCLUDES = [
  { title: "Fitness Assessment", desc: "Evaluating current movement quality, biomechanics, and baseline fitness." },
  { title: "Goal-Based Workout Planning", desc: "Structured progression tailored to your individual objectives." },
  { title: "Strength Development", desc: "Controlled, joint-safe progressive resistance training." },
  { title: "Mobility and Movement Work", desc: "Improving functional range of motion and desk-posture alignment." },
  { title: "Functional Exercises", desc: "Dynamic movements that support real-life physical capacity." },
  { title: "Conditioning", desc: "Cardiovascular and metabolic work balanced with strength." },
  { title: "Progress Monitoring", desc: "Tracking ongoing improvements in performance and body composition." },
  { title: "Exercise Technique Guidance", desc: "Real-time lifting form supervision to ensure safe training." }
];

const WHO_CAN_CONSIDER = [
  "General fitness",
  "Strength improvement",
  "Fat loss",
  "Better mobility",
  "Body transformation",
  "Improved conditioning",
  "Greater workout consistency"
];

const FAQS = [
  {
    q: "Where is FabFit Performance located?",
    a: "FabFit Performance located at Supermart 1, DLF Phase 4, Gurgaon."
  },
  {
    q: "Do you provide one-to-one personal training?",
    a: "Yes, personalized coaching can be structured around private fitness goals and training requirements."
  },
  {
    q: "Is FabFit close to Galleria Market?",
    a: "FabFit Performance is located in DLF Phase 4 and is conveniently accessible from the Galleria Market location."
  },
  {
    q: "Can freshers join personal training?",
    a: "Yes. Training can be adapted according to an individual's existing fitness level and experience."
  }
];

export default function PersonalTrainerDLFPhase4Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "FabFit Performance Gym - Best Personal Trainer in DLF Phase 4, Gurgaon",
        "description": "Searching for the Best Personal Trainer in DLF Phase 4? FabFit Performance provides personalized fitness coaching at Supermart 1, DLF Phase 4.",
        "url": "https://fabfitperformance.com/personal-trainer-dlf-phase-4",
        "telephone": "+919899179911",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Supermart 1, DLF Phase 4 (Near Galleria Market & Sushant Lok 1)",
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
                    <div className="text-xs font-bold text-[#FFB81C]">Supermart 1, DLF Phase 4</div>
                    <div className="text-[11px] text-zinc-400">Near Galleria Market & Sushant Lok 1</div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-[10px] font-extrabold uppercase">
                    1:1 Coaching
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
              {/* Top Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin size={14} />
                <span>Supermart 1, DLF Phase 4, Gurgaon</span>
              </div>

              {/* Main H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
                Best Personal Trainer in <span className="text-[#FFB81C]">DLF Phase 4, Gurgaon</span>
              </h1>

              {/* Subheading from Doc */}
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed mb-4 max-w-2xl">
                Searching for the Best Personal Trainer in DLF Phase 4 that can offer you concentrated, structured workouts and accountability? FabFit Performance provides personalized fitness coaching for individuals who wish to train with a clear strategy rather than sticking to random exercises.
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 max-w-2xl">
                Conveniently located at Supermart 1, DLF Phase 4, Gurgaon, FabFit Performance is quickly accessible for people residing or working around Galleria Market, Sushant Lok 1, Sector 27, Sector 28 and nearby Golf Course Road.
              </p>

              {/* Value Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 text-xs sm:text-sm font-medium">
                  <CheckCircle2 size={16} className="text-[#FFB81C] shrink-0" />
                  <span>Clear Strategy & Progression</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 text-xs sm:text-sm font-medium">
                  <CheckCircle2 size={16} className="text-[#FFB81C] shrink-0" />
                  <span>Concentrated & Structured</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 text-xs sm:text-sm font-medium">
                  <CheckCircle2 size={16} className="text-[#FFB81C] shrink-0" />
                  <span>Dedicated Accountability</span>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href="#booking-section"
                  className="w-auto px-5 sm:px-6 py-3.5 rounded-xl bg-[#FFB81C] text-black font-extrabold text-xs sm:text-sm md:text-base whitespace-nowrap hover:bg-[#A8861E] hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,184,28,0.35)] flex items-center justify-center gap-2 shrink-0"
                >
                  <span className="whitespace-nowrap">Book Your Trial Session at FabFit Performance</span>
                  <ArrowRight size={18} className="shrink-0" />
                </a>
                <a
                  href="https://wa.me/919220393004?text=Hi%20FabFit!%20I%20am%20looking%20for%20the%20best%20personal%20trainer%20in%20DLF%20Phase%204.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto px-5 sm:px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-bold text-xs sm:text-sm md:text-base whitespace-nowrap hover:border-[#25D366] hover:text-[#25D366] transition-colors flex items-center justify-center gap-2 shrink-0"
                >
                  <MessageCircle size={18} className="text-[#25D366] shrink-0" />
                  <span className="whitespace-nowrap">Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT DOES A PERSONAL TRAINER DO? */}
      <section className="py-16 md:py-20 border-b border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={14} />
              <span>Personalized Approach</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              What Does a Personal Trainer Do?
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
              A personal trainer does above simply count repetitions. A structured personal training program needs to know your present fitness level, goals, movement ability and training experience before creating a plan.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              At FabFit Performance, the emphasis gets on developing a training approach around your individual requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {PT_PROGRAM_INCLUDES.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-[#FFB81C]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={18} className="text-[#FFB81C] shrink-0" />
                    <h3 className="text-base font-bold text-white group-hover:text-[#FFB81C] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs sm:text-sm text-zinc-300">
            💡 <strong className="text-white">Note:</strong> This makes personal training perfect for freshers as well as people who already exercise but desire a lot more structured progression.
          </div>
        </div>
      </section>

      {/* SECTION 3: ONE TO ONE IN GURGAON & WHO CAN CONSIDER */}
      <section className="py-16 md:py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: One to One Coaching */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
                  <Award size={14} />
                  <span>1-on-1 Focus</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                  One to One Personal Training in Gurgaon
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                  One of the greatest benefits of One to One Personal Training in Gurgaon is individual interest.
                </p>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-4">
                  As opposed to adhering to the exact same workout as everyone else, your training can be transformed according to your fitness level, schedule and purposes.
                </p>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  A personal trainer can furthermore assist you preserve consistency by monitoring simply how you do exercises and exactly just how your training progresses slowly.
                </p>
              </div>

              {/* Hyperlocal Near Galleria */}
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <MapPin size={18} className="text-[#FFB81C]" />
                  <span>Personal Trainer Near Galleria Market</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3">
                  If you live or work near Galleria Market, DLF Phase 4 or Sushant Lok 1, picking a nearby fitness studio can make it much easier to remain consistent.
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  FabFit Performance located at Supermart 1 in DLF Phase 4, making it practical for nearby residents and professionals looking for a Personal Trainer near Galleria Market. A close-by personal training studio can decrease traveling time and make regular training much easier to keep. The objective should certainly not simply be to work out even more harder. It should be to train with much better structure, technique and consistency.
                </p>
              </div>
            </div>

            {/* Right Column: Who Can Consider Personal Training? */}
            <div className="lg:col-span-5 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                Who Can Consider Personal Training?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Personal training can be appropriate if your objective is:
              </p>

              <div className="space-y-3">
                {WHO_CAN_CONSIDER.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800/80">
                    <CheckCircle2 size={18} className="text-[#FFB81C] shrink-0" />
                    <span className="text-sm font-medium text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: START WITH A FITNESS ASSESSMENT & FAQS */}
      <section id="booking-section" className="py-16 md:py-20 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Quick Booking Form */}
            <div className="lg:col-span-6 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} />
                <span>Start Today</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Start With a Fitness Assessment
              </h3>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                If you are not sure which training program is appropriate for you, begin with a fitness assessment and conversation about your purposes.
              </p>

              <PersonalTrainerForm
                sourcePage="Personal Trainer DLF Phase 4"
                buttonText="Book Your Trial Session at FabFit Performance"
              />
            </div>

            {/* Right: FAQs & Studio Info */}
            <div className="lg:col-span-6 space-y-8">
              {/* Studio Info Card */}
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-lg">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-[#FFB81C]" />
                  <span>Where is FabFit Performance Located?</span>
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  FabFit Performance located at Supermart 1, DLF Phase 4, Gurgaon, Haryana 122002.
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
