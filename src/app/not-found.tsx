"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Dumbbell, Home, ArrowRight, Flame, Activity, PhoneCall, Trophy } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[90vh] bg-[#050505] text-white flex flex-col items-center justify-center relative overflow-hidden px-4 py-12 select-none">
      
      {/* Dynamic Background Mesh & Animated Beams */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-[#050505] to-[#050505] pointer-events-none" />

      {/* Grid Lines Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Pulsing Neon Glow Orbs */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-3xl w-full text-center relative z-10 space-y-8 flex flex-col items-center">

        {/* Floating Animated Gym Dumbbell / Weight Icon */}
        <div className="relative flex items-center justify-center my-2">
          {/* Outer Pulsing Aura Ring */}
          <motion.div
            animate={{ scale: [1, 1.35, 1], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-36 h-36 rounded-full bg-primary/20 blur-xl"
          />

          {/* Dumbbell Lifter Animation */}
          <motion.div
            animate={{ 
              y: [0, -22, 0],
              rotate: [0, -6, 6, 0],
              scale: [1, 1.08, 1]
            }}
            transition={{ 
              duration: 2.2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-zinc-900 via-[#121216] to-black border-2 border-primary/40 flex items-center justify-center shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)] relative group cursor-pointer"
          >
            <Dumbbell className="w-14 h-14 sm:w-16 sm:h-16 text-primary drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)] transition-transform duration-300 group-hover:scale-110" />
            
            {/* Energy Particle Flashes */}
            <motion.span 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -top-1.5 -right-1.5 flex h-4 w-4"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
            </motion.span>
          </motion.div>
        </div>

        {/* Badge Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-black tracking-[0.25em] uppercase shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]"
        >
          <Flame className="w-4 h-4 text-primary animate-bounce" />
          <span>404 // SET NOT FOUND</span>
          <Activity className="w-4 h-4 text-primary ml-1" />
        </motion.div>

        {/* Giant 404 Kinetic Text */}
        <div className="relative">
          <motion.h1 
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-8xl sm:text-[130px] md:text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 tracking-tighter leading-none"
          >
            404
          </motion.h1>

          <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-primary font-black text-xs sm:text-sm tracking-[0.4em] uppercase whitespace-nowrap bg-black/80 px-4 py-1 border border-primary/20 rounded-md backdrop-blur-md">
            PAGE DROPPED THE WEIGHT
          </p>
        </div>

        {/* Subtitle Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-2 max-w-xl mx-auto pt-2"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            PAGE NOT FOUND
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-medium leading-relaxed">
            We couldn't find the page you requested. Explore our fitness programs or return to the homepage to get back on track.
          </p>
        </motion.div>

        {/* High Energy CTA Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-4 max-w-2xl"
        >
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center gap-2.5 bg-primary text-black font-black text-xs sm:text-sm tracking-widest uppercase px-6 py-4 rounded-2xl hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:scale-105"
          >
            <Home className="w-4 h-4 stroke-[3]" />
            <span>HOME BASE</span>
            <ArrowRight className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/programs"
            className="group inline-flex items-center justify-center gap-2.5 bg-zinc-900/90 border border-white/10 text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-6 py-3 py-4 rounded-2xl hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-md hover:scale-105"
          >
            <Trophy className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            <span>PROGRAMS</span>
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 bg-zinc-900/90 border border-white/10 text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-6 py-4 rounded-2xl hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-md hover:scale-105"
          >
            <PhoneCall className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            <span>CONTACT US</span>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
