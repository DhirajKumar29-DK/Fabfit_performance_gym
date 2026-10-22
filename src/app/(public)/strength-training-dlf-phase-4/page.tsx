import React from "react";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Dumbbell,
  Clock,
  Sparkles,
  ShieldCheck,
  Target
} from "lucide-react";
import PersonalTrainerForm from "@/components/landing/PersonalTrainerForm";
import LandingFaqAccordion from "@/components/landing/LandingFaqAccordion";

export const metadata: Metadata = {
  title: {
    absolute: "Strength Training in DLF Phase 4, Gurgaon | FabFit Performance",
  },
  description:
    "Looking for Strength Training in DLF Phase 4? FabFit Performance offers structured strength training, functional movements & coaching at Supermart 1, Gurgaon.",
  alternates: {
    canonical: "https://fabfitperformance.com/strength-training-dlf-phase-4",
  },
  openGraph: {
    title: "Strength Training in DLF Phase 4, Gurgaon | FabFit Performance",
    description:
      "Looking for Strength Training in DLF Phase 4? FabFit Performance offers structured strength training, functional movements & coaching at Supermart 1, Gurgaon.",
    url: "https://fabfitperformance.com/strength-training-dlf-phase-4",
    images: ["/fabfit.jpeg"],
  },
};

const TRAINING_ENTAILS = [
  "Resistance exercises",
  "Bodyweight movements",
  "Functional movements",
  "Core training",
  "Mobility exercises",
  "Stability work",
  "Progressive resistance",
  "Conditioning"
];

const BENEFITS = [
  "Improved physical strength",
  "Better movement quality",
  "Greater exercise capacity",
  "Improved stability",
  "Better workout confidence",
  "Stronger daily movement patterns",
  "More structured fitness progression"
];

const FAQS = [
  {
    q: "Is strength training suitable for beginners?",
    a: "Yes. Exercises and strength can be adjusted according to your current fitness level."
  },
  {
    q: "Do I need to lift heavy weights?",
    a: "Not always. Training requirements to continue according to your strength, technique and goals."
  },
  {
    q: "Can personal training consist of strength training?",
    a: "Yes. Strength workouts can develop part of an individualized fitness program."
  },
  {
    q: "Where can I find strength training in DLF Phase 4?",
    a: "FabFit Performance lies at Supermart 1 in DLF Phase 4, Gurgaon."
  }
];

export default function StrengthTrainingDLFPhase4Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ExerciseGym",
        "name": "FabFit Performance - Strength Training in DLF Phase 4, Gurgaon",
        "description": "FabFit Performance offers structured strength training, functional movements, and certified coaching at Supermart 1, DLF Phase 4, Gurgaon.",
        "url": "https://fabfitperformance.com/strength-training-dlf-phase-4",
        "telephone": "+919899179911",
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
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-zinc-800/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Hero Workout Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(255,184,28,0.12)]">
                <img
                  src="/landing/strength_hero.jpg"
                  alt="Barbell deadlift and strength training at FabFit Performance DLF Phase 4"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#FFB81C]">Progressive Strength Studio</div>
                    <div className="text-[11px] text-zinc-400">Supermart 1 • DLF Phase 4</div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-[10px] font-extrabold uppercase">
                    Coached
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
                Strength Training in{" "}
                <span className="text-[#FFB81C]">DLF Phase 4, Gurgaon</span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed mb-4 max-w-2xl">
                Strength training is not just for athletes or advanced gym members. It can be an important part of fitness for beginners, working professionals and any person that wants to come to be stronger and improve physical capability.
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8 max-w-2xl">
                FabFit Performance makes use of structured Strength Training in DLF Phase 4 from its studio at Supermart 1, Gurgaon.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href="#strength-assessment"
                  className="w-auto px-5 sm:px-6 py-3.5 rounded-xl bg-[#FFB81C] text-black font-extrabold text-xs sm:text-sm md:text-base whitespace-nowrap hover:bg-[#A8861E] hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,184,28,0.35)] flex items-center justify-center gap-2 shrink-0"
                >
                  <span className="whitespace-nowrap">Book Your Strength Training Trial Session</span>
                  <ArrowRight size={18} className="shrink-0" />
                </a>
                <a
                  href="https://wa.me/919220393004?text=Hi%20FabFit!%20I%20am%20interested%20in%20Strength%20Training%20in%20DLF%20Phase%204.%20Please%20guide%20me."
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

      {/* SECTION 2: WHAT IS STRENGTH TRAINING & BENEFITS */}
      <section className="py-16 md:py-20 border-b border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: What It Entails */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
                <Dumbbell size={14} />
                <span>Force & Physical Capability</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                What Is Strength Training?
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed">
                Strength training consists of exercises designed to progressively challenge your muscles and improve your capacity to generate force. A structured program requires to continue gradually as opposed to simply making every exercise harder.
              </p>

              {/* Training Might Entail Grid */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-[#FFB81C] uppercase tracking-wider mb-3">
                  Relying on Your Experience & Goals, Training Might Entail:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {TRAINING_ENTAILS.map((item, idx) => (
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

              {/* Sub-Section: Benefits of Strength Training */}
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <h3 className="text-xl font-bold text-white mb-2">
                  Benefits of Strength Training
                </h3>
                <div className="text-xs font-bold text-[#FFB81C] uppercase tracking-wider mb-3">
                  Strength training might help support:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 mb-3">
                  {BENEFITS.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFB81C] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-zinc-400 italic">
                  The best workout choice and progression depend on a person's fitness level.
                </p>
              </div>
            </div>

            {/* Right Column: Workout Image */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(255,184,28,0.12)]">
                <img
                  src="/landing/strength_section2.jpg"
                  alt="Dumbbell press and upper body strength training at DLF Phase 4 studio"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <Sparkles size={14} />
                    <span>Gradual, Controlled Progression</span>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Focus on biomechanics and movement quality over arbitrary weight lifting
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: BEGINNERS, TECHNIQUE & PRACTICAL TRAINING */}
      <section className="py-16 md:py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck size={14} />
              <span>Foundation First</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Strength Training for Beginners
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
              You do not require previous weight-training experience prior to beginning. Beginners can capitalize on learning right movement patterns and workout technique prior to enhancing training issues.
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              At FabFit Performance, training can be structured according to where you are beginning instead of expecting everybody to adhere to the very same program.
            </p>
          </div>

          {/* Cards: Why Technique Matters & Practical Training */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Card 1: Why Technique Matters */}
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FFB81C]/10 border border-[#FFB81C]/30 flex items-center justify-center text-[#FFB81C] mb-4">
                  <Target size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Why Technique Matters
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  Proper technique aids you do workouts more effectively and makes it possible for training to proceed in a controlled method.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  One-to-one mentoring can help trainers observe movement and change workouts where required.
                </p>
              </div>
            </div>

            {/* Card 2: Practical Training in DLF Phase 4 */}
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FFB81C]/10 border border-[#FFB81C]/30 flex items-center justify-center text-[#FFB81C] mb-4">
                  <Dumbbell size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Practical Training in DLF Phase 4
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  Useful training can complement strength advancement by including activities that require coordination, stability and several muscle mass teams.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  The goal is not simply to carry out complicated workouts. Functional training ought to have a clear feature based upon your fitness calls for.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: LOCATION, ASSESSMENT & FAQS */}
      <section id="strength-assessment" className="py-16 md:py-20 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Interactive Booking Form */}
            <div className="lg:col-span-6 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} />
                <span>Starting With a Strength Assessment</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Book Your Strength Training Trial Session
              </h3>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                If you are not exactly sure whether strength training is suitable for you, start with a fitness analysis. Your trainer can identify your existing fitness level, training background and goals prior to recommending a program.
              </p>

              <PersonalTrainerForm
                sourcePage="Strength Training in DLF Phase 4"
                buttonText="Book Strength Training Trial"
              />
            </div>

            {/* Right: Studio Details & FAQs */}
            <div className="lg:col-span-6 space-y-8">
              {/* Studio Info Card */}
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-lg">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <MapPin size={18} className="text-[#FFB81C]" />
                  <span>Strength Training Near Galleria Market</span>
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                  FabFit Performance exists at Supermart 1, DLF Phase 4, making it accessible for residents around Galleria Market, Sushant Lok 1, Sector 27, Sector 28 and neighboring Golf Course Road.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  For individuals with hectic schedules, having a structured training studio near to home or work can make fitness easier to maintain.
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
