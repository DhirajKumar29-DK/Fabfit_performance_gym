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
  UserCheck,
  Compass,
  Target,
  LineChart
} from "lucide-react";
import PersonalTrainerForm from "@/components/landing/PersonalTrainerForm";
import LandingFaqAccordion from "@/components/landing/LandingFaqAccordion";

export const metadata: Metadata = {
  title: {
    absolute: "Personal Trainer in Sushant Lok 1 Gurgaon | FabFit",
  },
  description:
    "Looking for a personal trainer in Sushant Lok 1? Visit FabFit Performance in DLF Phase 4 for personalized 1:1 fitness and strength training.",
  alternates: {
    canonical: "https://fabfitperformance.com/personal-trainer-sushant-lok",
  },
  openGraph: {
    title: "Personal Trainer in Sushant Lok 1 Gurgaon | FabFit",
    description:
      "Looking for a personal trainer in Sushant Lok 1? Visit FabFit Performance in DLF Phase 4 for personalized 1:1 fitness and strength training.",
    url: "https://fabfitperformance.com/personal-trainer-sushant-lok",
    images: ["/fabfit.jpeg"],
  },
};

const TRAINING_CONTAINS = [
  "Strength training",
  "General fitness",
  "Weight management",
  "Functional exercises",
  "Conditioning",
  "Mobility",
  "Core training",
  "Body transformation programs"
];

const HELPFUL_FOR = [
  "Are new to exercise",
  "Want more workout structure",
  "Need accountability",
  "Want to improve exercise technique",
  "Have specific fitness goals",
  "Prefer personal attention over crowded group environments"
];

const NEARBY_LOCATIONS = [
  "Sushant Lok 1",
  "Galleria Market",
  "DLF Phase 4",
  "Sector 27",
  "Sector 28",
  "Sector 43",
  "Golf Course Road"
];

const WHAT_TO_FIND = [
  {
    title: "Clear Personal Goal Setting",
    desc: "Your trainer must absolutely identify what you intend to achieve."
  },
  {
    title: "Structured Reveals",
    desc: "Workouts demand to adhere to a plan rather than transform randomly every session."
  },
  {
    title: "Exercise Guidance",
    desc: "Exceptional coaching must assist you comprehend appropriate exercise technique."
  },
  {
    title: "Progress Monitoring",
    desc: "Your program needs to be assessed as your fitness modifications."
  },
  {
    title: "Accountability",
    desc: "Regular training and consistency are exceptionally vital parts of long-term fitness."
  }
];

const FAQS = [
  {
    q: "Is FabFit Performance close to Sushant Lok 1?",
    a: "FabFit Performance is located at Supermart 1 in DLF Phase 4, near the Sushant Lok and Galleria Market location."
  },
  {
    q: "Do you provide one-to-one personal training?",
    a: "Yes, personalized training can be structured around certain fitness requirements."
  },
  {
    q: "Can new-comers join?",
    a: "Yes. Programs can be adapted according to experience and existing fitness level."
  },
  {
    q: "Can I book a trial session?",
    a: "You can ask with FabFit Performance about a fitness evaluation and trial session before choosing a suitable program."
  }
];

export default function PersonalTrainerSushantLokPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ExerciseGym",
        "name": "FabFit Performance - Personal Trainer in Sushant Lok 1, Gurgaon",
        "description": "FabFit Performance provides 1:1 personal training and fitness coaching at Supermart 1, DLF Phase 4, near Sushant Lok 1, Gurgaon.",
        "url": "https://fabfitperformance.com/personal-trainer-sushant-lok",
        "telephone": "+919220393004",
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
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-zinc-800/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Hero Workout Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(255,184,28,0.12)]">
                <img
                  src="/landing/sushant_hero.jpg"
                  alt="Personal trainer guiding workout for Sushant Lok client at DLF Phase 4"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#FFB81C]">1-on-1 Fitness Coaching</div>
                    <div className="text-[11px] text-zinc-400">Supermart 1 • DLF Phase 4 (Near Sushant Lok 1)</div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-[10px] font-extrabold uppercase">
                    Focused
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
              {/* Top Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin size={14} />
                <span>Supermart 1, DLF Phase 4 (Near Sushant Lok 1)</span>
              </div>

              {/* Main H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
                Personal Trainer in{" "}
                <span className="text-[#FFB81C]">Sushant Lok 1, Gurgaon</span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed mb-4 max-w-2xl">
                If you live or work in Sushant Lok 1 and desire structured fitness coaching nearby, FabFit Performance provides personalized training from its location at Supermart 1, DLF Phase 4.
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8 max-w-2xl">
                Choosing a Personal Trainer in Sushant Lok 1 or a nearby location can make regular exercise easier considering because you spend a whole lot less time travelling and have less factors to avoid sessions.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href="#sushant-lok-booking"
                  className="w-auto px-5 sm:px-6 py-3.5 rounded-xl bg-[#FFB81C] text-black font-extrabold text-xs sm:text-sm md:text-base whitespace-nowrap hover:bg-[#A8861E] hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,184,28,0.35)] flex items-center justify-center gap-2 shrink-0"
                >
                  <span className="whitespace-nowrap">Book Your Fitness Assessment & Trial Session</span>
                  <ArrowRight size={18} className="shrink-0" />
                </a>
                <a
                  href="https://wa.me/919220393004?text=Hi%20FabFit!%20I%20am%20looking%20for%20a%20Personal%20Trainer%20near%20Sushant%20Lok%201.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto px-5 sm:px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-bold text-xs sm:text-sm md:text-base whitespace-nowrap hover:border-[#25D366] hover:text-[#25D366] transition-colors flex items-center justify-center gap-2 shrink-0"
                >
                  <MessageCircle size={18} className="text-[#25D366]" />
                  <span className="whitespace-nowrap">Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: PERSONALIZED FITNESS TRAINING & WHY CHOOSE ONE-TO-ONE */}
      <section className="py-16 md:py-20 border-b border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Personalized Training */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
                <UserCheck size={14} />
                <span>1-on-1 Focus</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                Personalized Fitness Training Near Sushant Lok
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed">
                Personal training begins by understanding your fitness goals, existing physical capability and training experience. Instead of adhering to a generic workout strategy, a structured program can be designed around your requirements.
              </p>

              {/* Training May Contain Grid */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-[#FFB81C] uppercase tracking-wider mb-3">
                  Training May Contain:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {TRAINING_CONTAINS.map((item, idx) => (
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

              {/* Sub-Section: Why Choose One-to-One */}
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <h3 className="text-xl font-bold text-white mb-2">
                  Why Choose One-to-One Personal Training?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3">
                  One-to-one coaching offers individual interest throughout the training session.
                </p>
                <div className="text-xs font-bold text-[#FFB81C] uppercase tracking-wider mb-3">
                  This can be helpful for individuals who:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 mb-3">
                  {HELPFUL_FOR.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFB81C] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-zinc-400 italic">
                  Your trainer can monitor your performance and readjust workouts as your fitness establishes.
                </p>
              </div>
            </div>

            {/* Right Column: Workout Image */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(255,184,28,0.12)]">
                <img
                  src="/landing/sushant_section2.jpg"
                  alt="Certified coach monitoring personal training technique at DLF Phase 4 studio"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800">
                  <div className="text-xs font-bold text-[#FFB81C] flex items-center gap-1.5 mb-1">
                    <Sparkles size={14} />
                    <span>Personal Attention Over Crowded Spaces</span>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Quiet, focused studio environment just minutes from Sushant Lok 1
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: NEAR GALLERIA MARKET & WHAT TO LOOK FOR IN A TRAINER */}
      <section className="py-16 md:py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hyperlocal Connectivity Card */}
          <div className="bg-zinc-950 p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-xl mb-14 max-w-5xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
                <Compass size={14} />
                <span>Hyperlocal Accessibility</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Personal Trainer Near Galleria Market
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                Sushant Lok 1 and Galleria Market are closely connected to the DLF Phase 4 area. FabFit Performance's Supermart 1 location makes the studio problem-free for consumers looking for a Personal Trainer Near Galleria Market along with Sushant Lok.
              </p>
              <p className="text-xs text-zinc-400">
                This hyperlocal location makes the studio ideal for both citizens and working professionals in the area.
              </p>
            </div>

            {/* Nearby Locations Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {NEARBY_LOCATIONS.map((loc, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium flex items-center gap-1.5"
                >
                  <MapPin size={12} className="text-[#FFB81C]" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What Should You Try to Find in a Personal Trainer? */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck size={14} />
                <span>Quality Checklist</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                What Should You Try to Find in a Personal Trainer?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Prior to choosing a trainer, think about whether the training method consists of:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHAT_TO_FIND.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-[#FFB81C]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#FFB81C]/10 border border-[#FFB81C]/30 flex items-center justify-center text-[#FFB81C] mb-3 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: LOCATION, FITNESS GOALS & FAQS */}
      <section id="sushant-lok-booking" className="py-16 md:py-20 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Interactive Booking Form */}
            <div className="lg:col-span-6 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFB81C]/10 border border-[#FFB81C]/30 text-[#FFB81C] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} />
                <span>Fitness Coaching Based on Your Goals</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Book Your Fitness Assessment & Trial Session
              </h3>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                Everybody begins at a different level. Some customers can want to boost basic fitness, while others may concentrate on strength, body transformation or weight management. That is why the first step needs to be understanding your particular goal.
              </p>

              <PersonalTrainerForm
                sourcePage="Personal Trainer in Sushant Lok 1"
                buttonText="Book Fitness Assessment"
              />
            </div>

            {/* Right: Studio Details & FAQs */}
            <div className="lg:col-span-6 space-y-8">
              {/* Studio Info Card */}
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-lg">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <MapPin size={18} className="text-[#FFB81C]" />
                  <span>Visit FabFit Performance Near Sushant Lok 1</span>
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                  If you are looking for a personal trainer near Sushant Lok, visit FabFit Performance at Supermart 1, DLF Phase 4, for personalized fitness coaching tailored to your goals.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Start with a conversation about your purposes and experience the training environment prior to choosing the ideal program.
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
