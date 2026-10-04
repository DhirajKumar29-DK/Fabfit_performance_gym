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
  Clock, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Users,
  ChevronDown
} from "lucide-react";
import PersonalTrainerForm from "@/components/landing/PersonalTrainerForm";

export const metadata: Metadata = {
  title: {
    absolute: "Premium Gym in DLF Phase 4 | Fitness Studio in DLF Phase 4",
  },
  description:
    "Explore Fab Fit Performance gym, a premium gym in DLF Phase 4, Gurgaon, for structured training and personalized fitness coaching. Book your trial session today.",
  alternates: {
    canonical: "https://fabfitperformance.com/gym-in-dlf-phase-4",
  },
  openGraph: {
    title: "Premium Gym in DLF Phase 4 | Fitness Studio in DLF Phase 4",
    description:
      "Explore Fab Fit Performance gym, a premium gym in DLF Phase 4, Gurgaon, for structured training and personalized fitness coaching. Book your trial session today.",
    url: "https://fabfitperformance.com/gym-in-dlf-phase-4",
    images: ["/fabfit.jpeg"],
  },
};

const ZONES = [
  {
    icon: Dumbbell,
    title: "Olympic Strength & Powerlifting Zone",
    desc: "Heavy-duty power cages, calibrated steel plates, Olympic barbells, and dumbells up to 50 kg for serious muscle & strength progression.",
    features: ["Precision Olympic barbells & bumper plates", "Multiple squat racks & deadlift platforms", "Zero wait times during peak hours"]
  },
  {
    icon: Zap,
    title: "Functional Turf & Conditioning Area",
    desc: "High-traction sprint turf equipped with weighted sleds, battle ropes, kettlebells, and plyometric boxes for high-octane conditioning.",
    features: ["Prowler push sleds & turf lane", "Competition kettlebells & slam balls", "Agility and cardiovascular conditioning"]
  },
  {
    icon: Activity,
    title: "Biomechanics & Recovery Lounge",
    desc: "Dedicated mobility zone with foam rollers, resistance bands, InBody body-composition analyzers, and post-workout decompression equipment.",
    features: ["Bi-weekly InBody 570 body scans", "Thoracic & hip mobility stations", "Dedicated certified stretching coaches"]
  }
];

const REVIEWS = [
  {
    name: "Vikram Singhal",
    tag: "DLF Phase 4 Resident • Member since 2024",
    review: "I switched from a crowded commercial gym near Galleria to Fab Fit. The private environment, premium barbells, and coach attention are unmatched in Gurgaon.",
    rating: 5
  },
  {
    name: "Ananya Mehta",
    tag: "Corporate Executive, Cyber City",
    review: "The studio is spotless, aesthetic, and non-intimidating. The coaches make sure your technique is 100% on point before adding weight. Best gym in DLF Phase 4!",
    rating: 5
  },
  {
    name: "Siddharth Rao",
    tag: "Triathlete & Strength Enthusiast",
    review: "Finding a gym with proper Olympic lifting racks and functional turf in Gurgaon was tough until I found Fab Fit. Absolutely top-tier equipment.",
    rating: 5
  }
];

const FAQS = [
  {
    q: "How do I book a free studio tour and trial session in DLF Phase 4?",
    a: "You can simply fill out the booking form on this page or WhatsApp us directly at +91 98991 79911. Our team will schedule your personalized studio walkthrough and complimentary fitness assessment."
  },
  {
    q: "What are the gym timings for Fab Fit Performance in DLF Phase 4?",
    a: "We are open Monday to Saturday from 6:00 AM to 10:00 PM, and on Sundays from 7:00 AM to 2:00 PM. Our flexible operating hours cater to both early morning and late evening workout schedules."
  },
  {
    q: "Is parking available at the DLF Phase 4 studio?",
    a: "Yes, we provide hassle-free dedicated parking right outside the facility in DLF Phase 4, with easy accessibility from Galleria Market, Supermart, and Sector 28."
  },
  {
    q: "What membership plans do you offer?",
    a: "We offer flexible 1-Month, 3-Month, 6-Month, and Annual memberships, along with personalized 1-on-1 coaching packages. All memberships include full access to studio zones and body composition assessments."
  }
];

export default function GymInDLFPhase4Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ExerciseGym",
        "name": "Fab Fit Performance Gym - Gym in DLF Phase 4",
        "description": "Premium Gym & Fitness Studio in DLF Phase 4 Gurgaon featuring Olympic strength zones, functional turf, and elite coaching.",
        "url": "https://fabfitperformance.com/gym-in-dlf-phase-4",
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
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-16 selection:bg-[#FFB81C] selection:text-black">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden py-12 md:py-20 border-b border-zinc-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FFB81C]/10 blur-[130px] rounded-full" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-zinc-800/20 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            
            {/* Top Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin size={14} />
              <span>DLF Phase 4, Gurgaon • Premium Strength & Conditioning Studio</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Gym in <span className="text-[#FFB81C]">DLF Phase 4 Gurgaon</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Visit Fab Fit Performance gym in DLF Phase 4 Gurgaon for personal training and fitness workouts. Experience private training floors, Olympic free weights, and certified coaching.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10 text-left">
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                  <Dumbbell size={14} />
                  <span>Equipment</span>
                </div>
                <div className="text-xs text-zinc-400">Olympic free weights</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                  <Zap size={14} />
                  <span>Turf Track</span>
                </div>
                <div className="text-xs text-zinc-400">Sleds & kettlebells</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                  <ShieldCheck size={14} />
                  <span>Private</span>
                </div>
                <div className="text-xs text-zinc-400">Uncrowded facility</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                  <Users size={14} />
                  <span>Coaching</span>
                </div>
                <div className="text-xs text-zinc-400">1:1 Certified trainers</div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#booking-section"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FFB81C] text-black font-extrabold text-sm sm:text-base hover:bg-[#A8861E] hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,184,28,0.35)] flex items-center justify-center gap-2"
              >
                <span>Book Free Studio Tour & Trial</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/919899179911?text=Hi%20Fab%20Fit!%20I%20would%20like%20to%20visit%20your%20gym%20in%20DLF%20Phase%204.%20Please%20guide%20me."
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

      {/* SECTION 2: STUDIO TRAINING ZONES */}
      <section className="py-16 md:py-20 border-b border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={14} />
              <span>World-Class Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Engineered Training Zones for Every Fitness Goal
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Designed to eliminate crowded waits, optimize biomechanics, and provide the most efficient workout experience in DLF Phase 4.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ZONES.map((zone, idx) => {
              const Icon = zone.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 hover:border-[#FFB81C]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#FFB81C]/10 border border-[#FFB81C]/30 flex items-center justify-center text-[#FFB81C] mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {zone.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      {zone.desc}
                    </p>
                  </div>
                  <ul className="space-y-2 border-t border-zinc-800/80 pt-4">
                    {zone.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 size={14} className="text-[#FFB81C] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: REVIEWS & TESTIMONIALS */}
      <section className="py-16 md:py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
              <Star size={14} className="fill-[#FFB81C]" />
              <span>Community Ratings</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              What DLF Phase 4 Members Say
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Read verified feedback from corporate executives, athletes, and local residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between hover:border-[#FFB81C]/40 transition-colors shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#FFB81C] mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-[#FFB81C]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-6">
                    "{rev.review}"
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800">
                  <div className="text-sm font-bold text-white">{rev.name}</div>
                  <div className="text-xs text-[#FFB81C] font-semibold mt-0.5">{rev.tag}</div>
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
            
            {/* Left: Quick Booking Form */}
            <div className="lg:col-span-6 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} />
                <span>Complimentary Pass</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Book a Free Studio Tour & Trial
              </h3>
              <p className="text-sm text-zinc-400 mb-6">
                Tour our private DLF Phase 4 facility, experience the training floor, and get a tailored fitness consultation.
              </p>

              {/* Interactive Client Lead Form */}
              <PersonalTrainerForm 
                sourcePage="Gym & Fitness Studio in DLF Phase 4" 
                buttonText="Claim Free Trial & Studio Tour"
              />
            </div>

            {/* Right: Studio Details & FAQs */}
            <div className="lg:col-span-6 space-y-8">
              {/* Studio Info Card */}
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-lg">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-[#FFB81C]" />
                  <span>DLF Phase 4 Studio Address</span>
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
                      <summary className="flex items-center justify-between cursor-pointer font-semibold text-sm text-zinc-200 list-none">
                        <span>{faq.q}</span>
                        <ChevronDown size={16} className="text-zinc-500 group-open:rotate-180 transition-transform shrink-0 ml-2" />
                      </summary>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed pt-2 border-t border-zinc-800/80">
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
