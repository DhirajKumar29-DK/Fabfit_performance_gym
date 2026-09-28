"use client";

import React, { useRef, useEffect, useState } from "react";
import { homeData } from "@/data/dummy";
import { api } from "@/services/api";
import { fixImageUrl } from "@/lib/apiConfig";
import { motion } from "framer-motion";

interface TeamSection {
  badge: string;
  title: string;
  description: string;
}

export function Trainers() {
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

  // Determine display text (either from API or fallback to dummy)
  const displayBadge = teamSection?.badge || trainers.badge;
  const displayTitle = teamSection?.title || `${trainers.headingLine1} ${trainers.headingLine2}`;
  const displayDesc = teamSection?.description || trainers.description;
  
  // Use API members if available, otherwise fallback to dummy items
  const displayMembers = teamMembers.length > 0 ? teamMembers : trainers.items;

  return (
    <section id="trainers" className="py-16 md:py-24 bg-[#0a0a0c] relative">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-12 relative z-10 max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary/50" />
            <span className="text-primary font-bold text-xs md:text-sm lg:text-base tracking-[0.2em] uppercase">
              {displayBadge}
            </span>
            <div className="h-px w-8 bg-primary/50" />
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black leading-tight uppercase tracking-tight drop-shadow-lg mb-6">
            {displayTitle.split(/\.\s+/).map((sentence: string, idx: number, arr: string[]) => (
              <span key={idx} className={`block ${idx % 2 === 0 ? 'text-white' : 'text-primary'}`}>
                {sentence}{idx < arr.length - 1 ? '.' : ''}
              </span>
            ))}
          </h2>
          
          <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed whitespace-pre-line">
            {displayDesc}
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {displayMembers.map((trainer) => {
            const trainerImage = fixImageUrl(trainer.image);
            const trainerName = trainer.name;
            const trainerCategory = trainer.category || trainer.specialty;
            const trainerRole = trainer.specialization || trainer.role;
            const trainerDesc = trainer.description;
            
            const instaUrl = trainer.instagramUrl || trainer.socials?.instagram;
            const facebookUrl = trainer.facebookUrl;
            
            return (
              <div
                key={trainer.id}
                className="group relative rounded-2xl overflow-hidden bg-[#121215] border border-white/10 hover:border-primary/50 transition-colors duration-300 transform-gpu"
              >
                {/* Card Image */}
                <div className="relative h-[320px] w-full overflow-hidden bg-black/40">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent z-10" />
                  <img
                    src={trainerImage}
                    alt={trainerName}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Category Badge over the image */}
                  <div className="absolute bottom-4 left-5 z-20">
                    <span className="inline-block px-3 py-1.5 bg-black/80 text-primary border border-primary/30 text-xs font-bold tracking-wider rounded-md">
                      {trainerCategory}
                    </span>
                  </div>
                  
                  {/* Social Links on Hover */}
                  <div className="absolute top-5 right-5 z-20 flex flex-col gap-2.5 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    {instaUrl && (
                      <a href={instaUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-black/80 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"></circle></svg>
                      </a>
                    )}
                    {facebookUrl && (
                      <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-black/80 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-20 px-6 pb-6 pt-4">
                  <div className="mb-2">
                    <h3 className="font-heading text-2xl md:text-3xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
                      {trainerName}
                    </h3>
                    <p className="text-primary font-bold text-xs tracking-widest uppercase mt-1">
                      {trainerRole}
                    </p>
                  </div>
                  
                  <div className="overflow-hidden mt-3">
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {trainerDesc}
                    </p>
                  </div>

                  {/* Decorative Line */}
                  <div className="w-full h-px bg-white/10 group-hover:bg-primary/40 transition-colors duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
