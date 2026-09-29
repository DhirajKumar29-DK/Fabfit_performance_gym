"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { homeData } from "@/data/dummy";
import { api } from "@/services/api";
import { fixImageUrl } from "@/lib/apiConfig";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, ArrowRight } from "lucide-react";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

interface TeamSection {
  badge: string;
  title: string;
  description: string;
}

export function Trainers({ isPage = false }: { isPage?: boolean }) {
  const { trainers } = homeData;
  const [teamSection, setTeamSection] = useState<TeamSection | null>(null);
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sectionRes, membersRes] = await Promise.all([
          api.get('/team-section?public=true'),
          api.get('/team-members?public=true')
        ]);
        
        if (sectionRes.ok) {
          const sectionData = await sectionRes.json();
          const items = sectionData.success ? sectionData.data : sectionData;
          if (Array.isArray(items) && items.length > 0) {
            setTeamSection(items[0]);
          }
        }

        if (membersRes.ok) {
          const membersData = await membersRes.json();
          const items = membersData.success ? membersData.data : membersData;
          if (Array.isArray(items)) {
            const sortedItems = [...items].sort((a: any, b: any) => (Number(a.displayOrder) || 0) - (Number(b.displayOrder) || 0));
            setTeamMembers(sortedItems);
          }
        }
      } catch (error) {
        console.error("Failed to fetch Trainers data:", error);
      }
    };
    fetchData();
  }, []);

  const displayBadge = teamSection?.badge || trainers.badge;
  const displayTitle = teamSection?.title || `${trainers.headingLine1} ${trainers.headingLine2}`;
  const displayDesc = teamSection?.description || trainers.description;
  const displayMembers = teamMembers.length > 0 ? teamMembers : trainers.items;
  const visibleMembers = !isPage ? displayMembers.slice(0, 3) : displayMembers;

  return (
    <section id="trainers" className="py-16 md:py-24 bg-[#050507] relative overflow-hidden">
      {/* Ambient Backlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-12 relative z-10 max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary/50" />
            <span className="text-primary font-black text-xs md:text-sm tracking-[0.25em] uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              {displayBadge}
            </span>
            <div className="h-px w-10 bg-primary/50" />
          </div>
          
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black leading-none uppercase tracking-tighter drop-shadow-xl mb-6">
            {displayTitle.split(/\.\s+/).map((sentence: string, idx: number, arr: string[]) => (
              <span key={idx} className={`block ${idx % 2 === 0 ? 'text-white' : 'text-primary'}`}>
                {sentence}{idx < arr.length - 1 ? '.' : ''}
              </span>
            ))}
          </h2>
          
          <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed whitespace-pre-line max-w-2xl mx-auto">
            {displayDesc}
          </p>
        </div>

        {/* Interactive Gym Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {visibleMembers.map((trainer, index) => {
            const trainerImage = fixImageUrl(trainer.image);
            const trainerName = trainer.name;
            const trainerCategory = trainer.category || trainer.specialty;
            const trainerRole = trainer.specialization || trainer.role;
            const trainerDesc = trainer.description;
            
            const instaUrl = trainer.instagramUrl || trainer.socials?.instagram;
            const facebookUrl = trainer.facebookUrl;

            return (
              <motion.div
                key={trainer.id || index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-[#0a0a0d] border border-white/10 hover:border-primary/70 transition-all duration-500 hover:-translate-y-3 shadow-2xl hover:shadow-[0_25px_60px_rgba(var(--primary-rgb),0.25)] flex flex-col"
              >
                {/* Neon Corner Accent on Hover */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/0 group-hover:border-primary rounded-tl-3xl transition-all duration-500 z-30 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/0 group-hover:border-primary rounded-br-3xl transition-all duration-500 z-30 pointer-events-none" />

                {/* Top Image Container */}
                <div className="relative h-[380px] w-full overflow-hidden bg-black">
                  {/* Top & Bottom Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0a0a0d] z-10" />
                  
                  <img
                    src={trainerImage}
                    alt={trainerName}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Top-Right Social Media Buttons */}
                  <div className="absolute top-5 right-5 z-20 flex gap-2">
                    {instaUrl && (
                      <a 
                        href={instaUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Instagram"
                        className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 shadow-xl hover:scale-110"
                      >
                        <InstagramIcon />
                      </a>
                    )}
                    {facebookUrl && (
                      <a 
                        href={facebookUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Facebook"
                        className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 shadow-xl hover:scale-110"
                      >
                        <FacebookIcon />
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom Card Content & Stat Badges */}
                <div className="relative z-20 p-6 md:p-7 flex-1 flex flex-col justify-between bg-[#0a0a0d] -mt-4">
                  
                  <div>
                    {/* Coach Name */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors duration-300 uppercase tracking-tight">
                        {trainerName}
                      </h3>
                      {instaUrl && (
                        <a
                          href={instaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300 shrink-0"
                        >
                          <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                        </a>
                      )}
                    </div>

                    {/* Category (100% Dynamic from Admin) */}
                    {trainerCategory && (
                      <p className="text-primary font-black text-[11px] tracking-[0.2em] uppercase mb-1">
                        {trainerCategory}
                      </p>
                    )}

                    {/* Specialization (100% Dynamic from Admin) */}
                    {trainerRole && (
                      <p className="text-zinc-400 font-bold text-xs tracking-wider uppercase mb-3">
                        {trainerRole}
                      </p>
                    )}

                    {/* Bio Description */}
                    {trainerDesc && (
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium line-clamp-3 group-hover:text-zinc-300 transition-colors">
                        {trainerDesc}
                      </p>
                    )}
                  </div>

                  {/* Bottom Dynamic Glow Strip */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest text-zinc-500 uppercase group-hover:text-primary transition-colors">
                      FABFIT CERTIFIED COACH
                    </span>
                    <div className="h-1.5 w-12 rounded-full bg-white/10 group-hover:bg-primary transition-colors duration-500" />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore All Coaches CTA for Homepage */}
        {!isPage && (
          <div className="flex justify-center mt-12">
            <Link
              href="/coaches"
              className="group inline-flex items-center justify-center h-12 px-8 bg-primary text-black text-[12px] font-black tracking-widest uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] rounded-[6px]"
            >
              EXPLORE ALL COACHES <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-2 stroke-[3]" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
