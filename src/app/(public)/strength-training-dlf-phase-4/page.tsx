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
  Zap,
  Target,
  Layers,
  ChevronRight
} from "lucide-react";
import PersonalTrainerForm from "@/components/landing/PersonalTrainerForm";

export const metadata: Metadata = {
  title: {
    absolute: "Strength Training in DLF Phase 4 Gurgaon | Fab Fit Performance gym",
  },
  description:
    "Build strength and improve movement with structured strength training in DLF Phase 4, Gurgaon, at Fab Fit Performance gym.. Book your trial session today.",
  alternates: {
    canonical: "https://fabfitperformance.com/strength-training-dlf-phase-4",
  },
  openGraph: {
    title: "Strength Training in DLF Phase 4 Gurgaon | Fab Fit Performance gym",
    description:
      "Build strength and improve movement with structured strength training in DLF Phase 4, Gurgaon, at Fab Fit Performance gym.. Book your trial session today.",
    url: "https://fabfitperformance.com/strength-training-dlf-phase-4",
    images: ["/fabfit.jpeg"],
  },
};

const PROTOCOLS = [
  {
    icon: Dumbbell,
    title: "Progressive Overload & Hypertrophy",
    desc: "Structured training cycles designed to stimulate muscle hypertrophy and increase absolute strength without plateaus or burnout.",
    highlights: ["Custom RPE / 1RM calculations", "Periodized 8-12 week blocks", "Targeted volume tracking"]
  },
  {
    icon: Target,
    title: "Compound Lifts & Biomechanics",
    desc: "Master the fundamental compound movements—squat, bench, deadlift, overhead press, and rows—with millimetre-precise form correction.",
    highlights: ["Spine & joint safety screening", "Kinetic chain activation", "Lifting tempo & barbell bar-path checks"]
  },
  {
    icon: Activity,
    title: "Posture, Mobility & Injury Pre-Hab",
    desc: "Designed especially for corporate professionals in DLF Phase 4 dealing with rounded shoulders, anterior pelvic tilt, and desk fatigue.",
    highlights: ["Thoracic & hip mobility drills", "Rotator cuff & core stabilization", "Active post-workout decompression"]
  }
];

const EQUIPMENT_FEATURES = [
  {
    title: "Olympic Lifting & Power Racks",
    desc: "Heavy-duty power cages, calibrated steel and bumper plates, and competition Olympic barbells for safe heavy lifting."
  },
  {
    title: "Complete Free Weight & Dumbbell Zone",
    desc: "Precision urethane dumbbells up to 50 kg, adjustable incline/decline benches, and specialized trap bars."
  },
  {
    title: "Functional Turf & Conditioning Track",
    desc: "Indoor turf strip equipped with weighted push sleds, battle ropes, and competition kettlebells for athletic power."
  },
  {
    title: "Smooth Cable & Pin-Selected Stations",
    desc: "Dual adjustable pulley stations and selectorized isolation machines for safe muscle hypertrophy."
  }
];

const FAQS = [
  {
    q: "Is strength training suitable for complete beginners in DLF Phase 4?",
    a: "Absolutely! Over 60% of our members started with zero weightlifting background. Your coach will guide you through foundational bodyweight and light resistance mechanics before advancing to heavier barbell lifts."
  },
  {
    q: "Will strength training make women bulky?",
    a: "No. Women lack the testosterone levels required to build massive bulk naturally. Instead, strength training produces a toned, athletic physique, improves bone density, and burns stubborn visceral fat."
  },
  {
    q: "How many days per week should I do strength training?",
    a: "We recommend 3 to 4 structured sessions per week (45-60 minutes each). This allows sufficient recovery for muscle repair and joint adaptation."
  },
  {
    q: "Can I book a trial session before committing to a membership?",
    a: "Yes! You can book a complimentary strength assessment and trial session right here. Our coach will analyze your movement patterns and take you through a tailored workout."
  }
];

export default function StrengthTrainingDLFPhase4Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Fab Fit Performance Gym - Strength Training DLF Phase 4",
    "description": "Build strength and improve movement with structured strength training in DLF Phase 4, Gurgaon, at Fab Fit Performance gym.",
    "url": "https://fabfitperformance.com/strength-training-dlf-phase-4",
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
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-16 selection:bg-[#FFB81C] selection:text-black">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden py-12 md:py-20 border-b border-zinc-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FFB81C]/10 blur-[130px] rounded-full" />
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FFB81C]/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            
            {/* Top Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin size={14} />
              <span>DLF Phase 4, Gurgaon • Strength & Conditioning Studio</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Strength Training in <span className="text-[#FFB81C]">DLF Phase 4 Gurgaon</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Build strength, develop lean muscle, and improve joint movement with structured strength training at Fab Fit Performance gym. Certified coaching tailored to your biomechanics.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10 text-left">
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                  <Zap size={14} />
                  <span>Progressive</span>
                </div>
                <div className="text-xs text-zinc-400">Overload protocols</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                  <Dumbbell size={14} />
                  <span>Equipment</span>
                </div>
                <div className="text-xs text-zinc-400">Olympic bars & racks</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                  <ShieldCheck size={14} />
                  <span>Injury-Free</span>
                </div>
                <div className="text-xs text-zinc-400">Form & joint safety</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                  <Award size={14} />
                  <span>Certified</span>
                </div>
                <div className="text-xs text-zinc-400">CSCS & ACE coaches</div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#booking-section"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FFB81C] text-black font-extrabold text-sm sm:text-base hover:bg-[#A8861E] hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,184,28,0.35)] flex items-center justify-center gap-2"
              >
                <span>Book Strength Trial Session</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/919899179911?text=Hi%20Coach!%20I%20am%20interested%20in%20strength%20training%20at%20DLF%20Phase%204.%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-bold text-sm sm:text-base hover:border-[#25D366] hover:text-[#25D366] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STRUCTURED STRENGTH PROTOCOLS */}
      <section className="py-16 md:py-20 border-b border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={14} />
              <span>Evidence-Based Strength</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Strength Protocols Designed for Sustainable Growth
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Whether your goal is lifting heavier, developing athletic physique, or fixing posture, our periodized strength blocks deliver measurable milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROTOCOLS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 hover:border-[#FFB81C]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#FFB81C]/10 border border-[#FFB81C]/30 flex items-center justify-center text-[#FFB81C] mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <ul className="space-y-2 border-t border-zinc-800/80 pt-4">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 size={14} className="text-[#FFB81C] shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: WORLD-CLASS EQUIPMENT & STUDIO FLOOR */}
      <section className="py-16 md:py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
              <Dumbbell size={14} />
              <span>Premium Training Environment</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Engineered for Serious Lifters & Beginners Alike
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Experience a private, hygienic, and non-crowded studio setup in DLF Phase 4 optimized for maximum training efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {EQUIPMENT_FEATURES.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFB81C]/10 border border-[#FFB81C]/30 flex items-center justify-center text-[#FFB81C] shrink-0 mt-1">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: BOOKING FORM & STUDIO FAQS */}
      <section id="booking-section" className="py-16 md:py-20 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Interactive Booking Form */}
            <div className="lg:col-span-6 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} />
                <span>Complimentary Trial Session</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Book Your Strength Assessment
              </h3>
              <p className="text-sm text-zinc-400 mb-6">
                Meet our strength coaches in DLF Phase 4, test your baseline movement mechanics, and experience a personalized lifting workout.
              </p>

              <PersonalTrainerForm 
                sourcePage="Strength Training DLF Phase 4"
                buttonText="Book Free Strength Assessment"
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
                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 open:border-[#FFB81C]/40 transition-colors cursor-pointer"
                    >
                      <summary className="text-sm font-semibold text-white list-none flex items-center justify-between">
                        <span>{faq.q}</span>
                        <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <p className="text-xs text-zinc-400 mt-3 leading-relaxed pt-3 border-t border-zinc-800/60">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
