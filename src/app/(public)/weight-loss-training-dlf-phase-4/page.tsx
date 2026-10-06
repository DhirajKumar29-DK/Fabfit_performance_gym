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
  Flame,
  Activity,
  HeartHandshake,
  Scale,
  Sparkles,
  Clock,
  Award,
  Apple,
  TrendingDown,
  ShieldCheck,
} from "lucide-react";
import PersonalTrainerForm from "@/components/landing/PersonalTrainerForm";
import LandingFaqAccordion from "@/components/landing/LandingFaqAccordion";

export const metadata: Metadata = {
  title: {
    absolute: "Weight Loss Trainer in DLF Phase 4 | Fab Fit Performance Gym",
  },
  description:
    "Work towards your fitness goals with a weight loss trainer in DLF Phase 4 at Fab Fit Performance. Contact us to discuss your gym training needs.",
  alternates: {
    canonical: "https://fabfitperformance.com/weight-loss-training-dlf-phase-4",
  },
  openGraph: {
    title: "Weight Loss Trainer in DLF Phase 4 | Fab Fit Performance Gym",
    description:
      "Work towards your fitness goals with a weight loss trainer in DLF Phase 4 at Fab Fit Performance. Contact us to discuss your gym training needs.",
    url: "https://fabfitperformance.com/weight-loss-training-dlf-phase-4",
    images: ["/fabfit.jpeg"],
  },
};

const PILLARS = [
  {
    icon: Flame,
    title: "Metabolic Resistance Training",
    desc: "We focus on progressive resistance training combined with high-density intervals so you torch fat while maintaining lean muscle, boosting resting metabolic rate for 24-48 hours.",
    points: ["EPOC (Afterburn effect)", "Protects lean muscle tissue", "Custom low-impact joints friendly options"]
  },
  {
    icon: Apple,
    title: "Sustainable Nutrition & Macros",
    desc: "No crash diets or extreme fasting. We design practical, high-protein nutrition blueprints tailored to your daily routine, food preferences, and Indian home-cooked meals.",
    points: ["Realistic calorie deficit", "Dining out & travel guidelines", "Weekly adjustments based on InBody data"]
  },
  {
    icon: Activity,
    title: "Hormone & Recovery Management",
    desc: "Stubborn belly fat is often tied to cortisol, poor sleep, and metabolic adaptation. Our coaches monitor your recovery, stress levels, and daily step count for steady results.",
    points: ["Cortisol & stress reduction", "Bi-weekly body composition scans", "Daily accountability on WhatsApp"]
  }
];

const TRANSFORMATIONS = [
  {
    name: "Rohit Malhotra",
    metric: "-16.4 kg Lost",
    fatLoss: "From 31% to 17% Body Fat",
    timeframe: "14 Weeks",
    desc: "Lost 16+ kgs of stubborn fat while regaining peak energy and reversing pre-diabetic markers with structured 1:1 training in DLF Phase 4.",
    tags: ["Fat Loss", "Strength", "Executive"]
  },
  {
    name: "Ananya Sharma",
    metric: "-12.8 kg Lost",
    fatLoss: "From 34% to 22% Body Fat",
    timeframe: "12 Weeks",
    desc: "Overcame post-pregnancy weight plateaus and chronic lower back stiffness with low-impact functional fat loss workouts.",
    tags: ["Post-Pregnancy", "Core & Toning"]
  },
  {
    name: "Vikram Singhania",
    metric: "-19.2 kg Lost",
    fatLoss: "From 36% to 20% Body Fat",
    timeframe: "16 Weeks",
    desc: "Built sustainable dietary habits and dropped 4 waist sizes without giving up social dinners or working long corporate hours.",
    tags: ["Body Recomp", "Metabolic Health"]
  }
];

const FAQS = [
  {
    q: "How fast can I expect to lose weight with a dedicated trainer?",
    a: "Our clients sustainably lose 0.5 kg to 1.0 kg of pure fat per week (typically 3-5 kg per month) while maintaining lean muscle and increasing their resting metabolic rate. We prioritize long-term fat loss over transient water weight loss."
  },
  {
    q: "Do you provide customized Indian meal plans?",
    a: "Yes! Every member receives a tailored nutrition framework calculated for their specific total daily energy expenditure (TDEE). We accommodate vegetarian, eggetarian, vegan, and non-vegetarian Indian meals."
  },
  {
    q: "What if I have knee pain, slip disc, or have never exercised before?",
    a: "All weight loss programs begin with a comprehensive movement screening. If you have joint discomfort or past injuries, your certified coach adapts every exercise with low-impact, joint-safe alternatives."
  },
  {
    q: "Where is Fab Fit Performance located in DLF Phase 4?",
    a: "We are situated in the heart of DLF Phase 4, Gurgaon, very close to Galleria Market and Supermart 1 & 2. We have private valet parking and world-class equipment."
  }
];

export default function WeightLossTrainingDLFPhase4Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Fab Fit Performance Gym - Weight Loss Training DLF Phase 4",
    "description": "Work towards your fitness goals with a certified weight loss trainer in DLF Phase 4 at Fab Fit Performance Gym Gurgaon.",
    "url": "https://fabfitperformance.com/weight-loss-training-dlf-phase-4",
    "telephone": "+919899179911",
    "priceRange": "₹₹₹",
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
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-red-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Hero Workout Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(255,184,28,0.12)]">
                <img
                  src="/landing/weightloss_hero.jpg"
                  alt="High-intensity sled push fat loss training in DLF Phase 4"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#FFB81C]">Metabolic Fat Loss</div>
                    <div className="text-[11px] text-zinc-400">Turf & Strength Conditioning • DLF Phase 4</div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-[10px] font-extrabold uppercase">
                    Guaranteed
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
              {/* Top Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin size={14} />
                <span>DLF Phase 4, Gurgaon • Dedicated Weight Loss Coaching</span>
              </div>

              {/* Main H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
                Weight Loss Trainer in <span className="text-[#FFB81C]">DLF Phase 4</span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed mb-6 max-w-2xl">
                Work towards your fitness goals with an experienced weight loss trainer at Fab Fit Performance. Sustainable fat loss through customized strength training, macro nutrition, and dedicated 1:1 accountability.
              </p>

              {/* Value Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-left">
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <TrendingDown size={14} />
                    <span>Fat Loss</span>
                  </div>
                  <div className="text-xs text-zinc-400">Pure body fat reduction</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <Apple size={14} />
                    <span>Nutrition</span>
                  </div>
                  <div className="text-xs text-zinc-400">Custom macro plans</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <Scale size={14} />
                    <span>InBody</span>
                  </div>
                  <div className="text-xs text-zinc-400">Bi-weekly body scans</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <Award size={14} />
                    <span>Coaching</span>
                  </div>
                  <div className="text-xs text-zinc-400">Certified 1:1 trainers</div>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#consultation-section"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FFB81C] text-black font-extrabold text-sm sm:text-base hover:bg-[#A8861E] hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,184,28,0.35)] flex items-center justify-center gap-2"
                >
                  <span>Book Free Weight Loss Consultation</span>
                  <ArrowRight size={18} />
                </a>
                <a
                  href="https://wa.me/919899179911?text=Hi%20Coach!%20I%20am%20looking%20for%20a%20weight%20loss%20trainer%20in%20DLF%20Phase%204.%20Please%20guide%20me."
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

      {/* SECTION 2: THE 3-PILLAR WEIGHT LOSS SYSTEM */}
      <section className="py-16 md:py-20 border-b border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Pillars Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={14} />
                <span>Science-Backed Methodology</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                How Our DLF Phase 4 Trainers Guarantee Results
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mb-8">
                Unlike generic aerobic bootcamps, our weight loss training combines metabolic conditioning with personalized resistance training so you keep the weight off permanently.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PILLARS.map((pillar, idx) => {
                  const Icon = pillar.icon;
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
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {pillar.desc}
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
                  src="/landing/weightloss_section2.jpg"
                  alt="Dynamic plyometric box jumps for rapid fat burn"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <TrendingDown size={14} />
                    <span>Functional High-Intensity Calorie Burn</span>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    High metabolic afterburn (EPOC) tailored to protect joint health
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: TRANSFORMATIONS & METRICS */}
      <section className="py-16 md:py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
              <Award size={14} />
              <span>Real Gurugram Client Results</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Real Weight Loss Transformations in DLF Phase 4
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Measurable body recomposition results achieved through structured 1:1 training without crash dieting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRANSFORMATIONS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Stats Banner */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-zinc-800">
                    <div>
                      <div className="text-2xl font-extrabold text-[#FFB81C]">{item.metric}</div>
                      <div className="text-xs text-zinc-400">{item.fatLoss}</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-semibold">
                      {item.timeframe}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: BOOKING FORM & STUDIO FAQS */}
      <section id="consultation-section" className="py-16 md:py-20 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Interactive Booking Form */}
            <div className="lg:col-span-6 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} />
                <span>100% Free Initial Assessment</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Claim Free Weight Loss Assessment
              </h3>
              <p className="text-sm text-zinc-400 mb-6">
                Meet our head coach in DLF Phase 4, get an InBody body composition scan, and discuss your tailored weight loss roadmap.
              </p>

              <PersonalTrainerForm
                sourcePage="Weight Loss Training DLF Phase 4"
                buttonText="Claim Free Weight Loss Assessment"
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
