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
  TrendingDown,
  Activity,
  Award
} from "lucide-react";
import PersonalTrainerForm from "@/components/landing/PersonalTrainerForm";
import LandingFaqAccordion from "@/components/landing/LandingFaqAccordion";

export const metadata: Metadata = {
  title: {
    absolute: "Weight Loss Trainer in DLF Phase 4 | FabFit",
  },
  description:
    "Work towards your fitness goals with a weight loss trainer in DLF Phase 4 at FabFit Performance. Contact us to discuss your gym training needs.",
  alternates: {
    canonical: "https://fabfitperformance.com/weight-loss-training-dlf-phase-4",
  },
  openGraph: {
    title: "Weight Loss Trainer in DLF Phase 4 | FabFit",
    description:
      "Work towards your fitness goals with a weight loss trainer in DLF Phase 4 at FabFit Performance. Contact us to discuss your gym training needs.",
    url: "https://fabfitperformance.com/weight-loss-training-dlf-phase-4",
    images: ["/fabfit.jpeg"],
  },
};

const TRAINING_COMPONENTS = [
  "Strength exercises",
  "Functional movements",
  "Cardiovascular conditioning",
  "Mobility",
  "Core exercises",
  "Progressive training",
  "Fitness assessment",
  "Progress monitoring"
];

const TRANSFORMATION_PROGRESS = [
  "Strength",
  "Fitness",
  "Mobility",
  "Exercise technique",
  "Conditioning",
  "Consistency",
  "Overall physical performance"
];

const WHO_CAN_CONSIDER = [
  "You have been exercising without seeing consistent progress",
  "You struggle to maintain regular workouts",
  "You are unsure which exercises are suitable",
  "You want accountability",
  "You want to become stronger",
  "You want professional guidance during workouts"
];

const FAQS = [
  {
    q: "Can a personal trainer help with weight-loss purposes?",
    a: "A personal trainer can provide structured exercises, exercise guidance and accountability to sustain your fitness objectives."
  },
  {
    q: "Do I require previous gym experience?",
    a: "No. Training can be adjusted according to your present fitness level."
  },
  {
    q: "Do you make a certain level of weight reduction?",
    a: "Specific outcomes differ. The focus needs to be on sustainable progress as opposed to ensured outcome."
  },
  {
    q: "Where is FabFit situated?",
    a: "FabFit Performance located at Supermart 1, DLF Phase 4, Gurgaon."
  }
];

export default function WeightLossTrainingDLFPhase4Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ExerciseGym",
        "name": "FabFit Performance - Weight Loss Trainer in DLF Phase 4, Gurgaon",
        "description": "FabFit Performance provides personalized fitness coaching and weight loss training at Supermart 1, DLF Phase 4, Gurgaon.",
        "url": "https://fabfitperformance.com/weight-loss-training-dlf-phase-4",
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
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-zinc-800/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Hero Workout Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(255,184,28,0.12)]">
                <img
                  src="/landing/weightloss_hero.jpg"
                  alt="Weight loss and conditioning training at FabFit Performance DLF Phase 4"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#FFB81C]">Sustainable Conditioning</div>
                    <div className="text-[11px] text-zinc-400">Supermart 1 • DLF Phase 4</div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-[10px] font-extrabold uppercase">
                    Personalized
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
                Weight Loss Trainer in{" "}
                <span className="text-[#FFB81C]">DLF Phase 4, Gurgaon</span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed mb-4 max-w-2xl">
                If you are trying to find a Weight Loss Trainer in DLF Phase 4, one of the most vital factors is finding a program you can follow consistently.
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 max-w-2xl">
                Weight management is not concerning one exercise, extreme training or unrealistic temporary promises. A structured fitness program needs to focus on sustainable exercise habits, strength, conditioning and progress in time.
              </p>

              <p className="text-xs sm:text-sm text-[#FFB81C] font-medium leading-relaxed mb-8 max-w-2xl">
                FabFit Performance provides personalized fitness coaching from its studio at Supermart 1, DLF Phase 4, Gurgaon.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href="#consultation-section"
                  className="w-auto px-5 sm:px-6 py-3.5 rounded-xl bg-[#FFB81C] text-black font-extrabold text-xs sm:text-sm md:text-base whitespace-nowrap hover:bg-[#A8861E] hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,184,28,0.35)] flex items-center justify-center gap-2 shrink-0"
                >
                  <span className="whitespace-nowrap">Book Your Fitness Assessment & Trial Session</span>
                  <ArrowRight size={18} className="shrink-0" />
                </a>
                <a
                  href="https://wa.me/919220393004?text=Hi%20FabFit!%20I%20am%20looking%20for%20a%20Weight%20Loss%20Trainer%20in%20DLF%20Phase%204.%20Please%20guide%20me."
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

      {/* SECTION 2: HOW PERSONAL TRAINING SUPPORTS WEIGHT LOSS & WHY STRENGTH TRAINING MATTERS */}
      <section className="py-16 md:py-20 border-b border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Methodology & Components */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={14} />
                <span>Sustainable Approach</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                How Can Personal Training Support Weight Loss?
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed">
                A personal trainer can help make an exercise structure based upon your present fitness level and objectives. The purpose is to develop a training regimen that you can execute consistently.
              </p>

              {/* Training Might Integrate Grid */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-[#FFB81C] uppercase tracking-wider mb-3">
                  Your Training Might Integrate:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {TRAINING_COMPONENTS.map((item, idx) => (
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

              {/* Sub-Section: Why Strength Training Matters */}
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <h3 className="text-xl font-bold text-white mb-2">
                  Why Strength Training Matters
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3">
                  Several individuals connect weight-loss simply with cardio. However, strength training can also be a fundamental part of a balanced fitness program.
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-2">
                  Strength training helps you establish physical capacity while making workouts a lot more structured and progressive.
                </p>
                <p className="text-xs text-[#FFB81C] font-medium leading-relaxed">
                  Your exact program needs to depend on your existing condition, experience and certain objectives.
                </p>
              </div>
            </div>

            {/* Right Column: Workout Image */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(255,184,28,0.12)]">
                <img
                  src="/landing/weightloss_section2.jpg"
                  alt="Strength and conditioning workouts for sustainable weight loss in DLF Phase 4"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <TrendingDown size={14} />
                    <span>Balanced Training & Conditioning</span>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Combining resistance, mobility, and functional movement for lasting results
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: BODY TRANSFORMATION GYM & WHO CAN CONSIDER IT */}
      <section className="py-16 md:py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
              <Award size={14} />
              <span>Realistic Process</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Body Transformation Gym in DLF Phase 4
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
              If you search for a Body Transformation Gym in DLF Phase 4, it is required to recognize that substantial transformation is typically a treatment. An exceptional transformation program ought to concentrate on more than body weight alone.
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              At FabFit Performance, the approach is based on creating a structured program instead of making unrealistic outcome guarantees.
            </p>
          </div>

          {/* Progress Indicators & Who Can Consider Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left: Progress Could Include */}
            <div className="lg:col-span-5 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Progress Could Include Improvements In:
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                A holistic view of physical capability and long-term health:
              </p>
              <div className="space-y-3">
                {TRANSFORMATION_PROGRESS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 flex items-center justify-center text-[#FFB81C] text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Who Can Consider a Transformation Program */}
            <div className="lg:col-span-7 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Who Can Consider a Transformation Program?
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                You might consider structured coaching if:
              </p>
              <div className="space-y-3">
                {WHO_CAN_CONSIDER.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-[#FFB81C]/40 transition-colors flex items-center gap-3"
                  >
                    <CheckCircle2 size={16} className="text-[#FFB81C] shrink-0" />
                    <span className="text-xs sm:text-sm text-zinc-200">{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: LOCATION, FITNESS ASSESSMENT & FAQS */}
      <section id="consultation-section" className="py-16 md:py-20 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Interactive Booking Form */}
            <div className="lg:col-span-6 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} />
                <span>Start With Your Current Fitness Level</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Book Your Fitness Assessment & Trial Session
              </h3>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                Instead of comparing on your own with another person's transformation, begin with an evaluation of your extremely own present fitness level. A trainer can then help structure workouts according to your capacity and objectives.
              </p>

              <PersonalTrainerForm
                sourcePage="Weight Loss Trainer in DLF Phase 4"
                buttonText="Book Fitness Assessment"
              />
            </div>

            {/* Right: Studio Details & FAQs */}
            <div className="lg:col-span-6 space-y-8">
              {/* Studio Info Card */}
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-lg">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <MapPin size={18} className="text-[#FFB81C]" />
                  <span>Local Weight Loss Training Near Galleria Market</span>
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                  FabFit Performance depends on DLF Phase 4 at Supermart 1 and comes from Galleria Market, Sushant Lok 1 and surrounding Gurgaon areas.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  A nearby studio can make routine workouts more functional for active professionals and residents.
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
