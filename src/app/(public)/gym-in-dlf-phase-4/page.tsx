import React from "react";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import PersonalTrainerForm from "@/components/landing/PersonalTrainerForm";
import LandingFaqAccordion from "@/components/landing/LandingFaqAccordion";

export const metadata: Metadata = {
  title: {
    absolute: "Premium Gym in DLF Phase 4 | Fitness Studio in DLF Phase 4",
  },
  description:
    "Explore a premium gym in DLF Phase 4, Gurgaon, for structured training and personalized fitness coaching. Book your trial session today.",
  alternates: {
    canonical: "https://fabfitperformance.com/gym-in-dlf-phase-4",
  },
  openGraph: {
    title: "Premium Gym in DLF Phase 4 | Fitness Studio in DLF Phase 4",
    description:
      "Explore a premium gym in DLF Phase 4, Gurgaon, for structured training and personalized fitness coaching. Book your trial session today.",
    url: "https://fabfitperformance.com/gym-in-dlf-phase-4",
    images: ["/fabfit.jpeg"],
  },
};

const PROGRAMS_INCLUDE = [
  "Personal training",
  "Strength training",
  "Functional training",
  "Fitness assessment",
  "Weight management support",
  "Body transformation training",
  "General fitness",
  "Conditioning"
];

const STRUCTURED_APPROACH = [
  "Improve movement quality",
  "Develop strength progressively",
  "Build training consistency",
  "Understand correct exercise technique",
  "Track your fitness progress",
  "Stay accountable to your goals"
];

const SUITABLE_FOR = [
  "Beginners starting their fitness journey",
  "Working professionals",
  "People looking for personal training",
  "Individuals interested in strength training",
  "People working toward body transformation",
  "People wanting better workout structure",
  "Members who value accountability"
];

const FAQS = [
  {
    q: "Is FabFit Performance a gym in DLF Phase 4?",
    a: "FabFit Performance gives a focused fitness and training environment in DLF Phase 4, Gurgaon."
  },
  {
    q: "Do you provide personal training?",
    a: "Personalized one-to-one training is part of the goal-based fitness approach."
  },
  {
    q: "Do you provide stamina training?",
    a: "Strength-focused training can be integrated according to certain goals and fitness levels."
  },
  {
    q: "Where is the studio located?",
    a: "FabFit Performance is located at Supermart 1, DLF Phase 4, Gurgaon."
  }
];

export default function GymInDLFPhase4Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ExerciseGym",
        "name": "FabFit Performance Gym - Gym & Fitness Studio in DLF Phase 4, Gurgaon",
        "description": "FabFit Performance offers a structured fitness environment focused on coaching, personal attention and goal-based training at Supermart 1, DLF Phase 4, Gurgaon.",
        "url": "https://fabfitperformance.com/gym-in-dlf-phase-4",
        "telephone": "+919220393004",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Supermart 1, DLF Phase 4 (Near Galleria Market & Sushant Lok)",
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
                  src="/landing/gym_dlf_hero.jpg"
                  alt="Battle ropes workout at gym in DLF Phase 4"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#FFB81C]">Functional & Strength Studio</div>
                    <div className="text-[11px] text-zinc-400">Supermart 1 • DLF Phase 4</div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-[10px] font-extrabold uppercase">
                    Premium
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
                Gym & Fitness Studio in{" "}
                <span className="text-[#FFB81C]">DLF Phase 4, Gurgaon</span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed mb-4 max-w-2xl">
                If you are trying to find a Gym in DLF Phase 4 however need more than access to exercise equipment, FabFit Performance offers a much more structured fitness environment focused on coaching, personal attention and goal-based training.
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8 max-w-2xl">
                Located at Supermart 1, DLF Phase 4, Gurgaon, the studio is convenient for residents and professionals from DLF Phase 4, Sushant Lok, Galleria Market, Sector 27, Sector 28 and surrounding Golf Course Road.
              </p>

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
                  href="https://wa.me/919220393004?text=Hi%20FabFit!%20I%20am%20looking%20for%20a%20Gym%20and%20Fitness%20Studio%20in%20DLF%20Phase%204.%20Please%20guide%20me."
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

      {/* SECTION 2: WHAT MAKES A GOOD FITNESS STUDIO & FITNESS STUDIO IN DLF PHASE 4 */}
      <section className="py-16 md:py-20 border-b border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Programs & Philosophy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={14} />
                <span>Goal-Based Training</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                What Makes a Good Fitness Studio?
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 mb-4 leading-relaxed">
                An outstanding fitness studio needs to assist you understand what to do, just how to do it appropriately and how your training has to progress. Lots of people join a gym with motivation yet struggle to remain consistent since they do not have a structured program.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 mb-6 leading-relaxed">
                FabFit Performance focuses on guided training based on individual fitness purposes.
              </p>

              {/* Programs Include Grid */}
              <div className="mb-10">
                <h3 className="text-sm font-bold text-[#FFB81C] uppercase tracking-wider mb-4">
                  Programs May Include:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {PROGRAMS_INCLUDE.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FFB81C]/40 transition-colors flex items-center gap-2 text-xs font-medium text-zinc-200"
                    >
                      <CheckCircle2 size={14} className="text-[#FFB81C] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-Section: Fitness Studio in DLF Phase 4 */}
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <h3 className="text-xl font-bold text-white mb-2">
                  Fitness Studio in DLF Phase 4
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  A Fitness Studio in DLF Phase 4 can be particularly suitable for people who like an added focused training environment compared to a crowded fitness center. Training needs to be based upon progression instead of just executing random exercises.
                </p>
                <div className="text-xs font-bold text-[#FFB81C] uppercase tracking-wider mb-3">
                  A structured approach can assist you:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                  {STRUCTURED_APPROACH.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFB81C] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(255,184,28,0.12)]">
                <img
                  src="/landing/gym_dlf_section2.jpg"
                  alt="Training environment at fitness studio in DLF Phase 4"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <Sparkles size={14} />
                    <span>Progression Over Random Workouts</span>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Focused coaching environment designed for measurable, sustainable results
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: PREMIUM GYM IN DLF PHASE 4 & WHO IS IT SUITABLE FOR */}
      <section className="py-16 md:py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck size={14} />
              <span>True Premium Value</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Premium Gym in DLF Phase 4
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
              The term Premium Gym in DLF Phase 4 must indicate more than premium interiors. For somebody sincere about fitness, the actual worth is personalized guidance, specialist training assistance and a program associated with specific goals.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              At FabFit Performance, the emphasis gets on producing a far much better training experience around each participant rather than complying with a one-size-fits-all approach.
            </p>
          </div>

          {/* Who is FabFit Performance Suitable For? */}
          <div className="bg-zinc-950 p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-xl max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Who is FabFit Performance Suitable For?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                FabFit may be ideal for:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SUITABLE_FOR.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-[#FFB81C]/40 transition-colors flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FFB81C]/10 border border-[#FFB81C]/30 flex items-center justify-center text-[#FFB81C] shrink-0 font-bold text-xs">
                    {idx + 1}
                  </div>
                  <span className="text-sm font-semibold text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LOCATION, FITNESS JOURNEY, BOOKING FORM & STUDIO FAQS */}
      <section id="booking-section" className="py-16 md:py-20 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Quick Booking Form */}
            <div className="lg:col-span-6 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} />
                <span>Start Your Fitness Journey</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Book Your Trial Session at FabFit Performance
              </h3>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                You do not require to identify specifically which program you need prior to visiting. Starting with a fitness evaluation, assess your goals and comprehend the training approach that may help you.
              </p>

              {/* Interactive Client Lead Form */}
              <PersonalTrainerForm
                sourcePage="Gym & Fitness Studio in DLF Phase 4"
                buttonText="Book Your Trial Session"
              />
            </div>

            {/* Right: Location Details & FAQs */}
            <div className="lg:col-span-6 space-y-8">
              {/* Studio Info Card */}
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-lg">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <MapPin size={18} className="text-[#FFB81C]" />
                  <span>Conveniently Located in DLF Phase 4</span>
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                  Location plays a vital role in fitness consistency. FabFit Performance at Supermart 1 makes it obtainable from Galleria Market, Sushant Lok 1, Sector 27, Sector 28 and surrounding DLF areas.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  If your fitness studio is close to your home or workplace, it happens a lot easier to make exercise part of your routine.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-400 border-t border-zinc-800 pt-4">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#FFB81C]" />
                    <span>Mon - Sat: 6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-[#FFB81C]" />
                    <span>+91 92203 93004</span>
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
