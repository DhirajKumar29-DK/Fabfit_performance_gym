"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.png";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const navbarData = {
  links: [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PROGRAMS", href: "/programs" },
    { name: "SERVICES", href: "/services" },
    { name: "COACHES", href: "/coaches" },
    { name: "TRANSFORMATIONS", href: "/transformations" },
    { name: "MEMBERSHIP", href: "/membership" },
    { name: "GALLERY", href: "/gallery" },
    { name: "BLOGS", href: "/blogs" },
    { name: "CONTACT", href: "/contact" },
  ],
  cta: "BOOK ASSESSMENT"
};

export const MORE_PAGES = [
  { name: "Personal Trainer DLF Phase 4", href: "/personal-trainer-dlf-phase-4" },
  { name: "Gym in DLF Phase 4", href: "/gym-in-dlf-phase-4" },
  { name: "Weight Loss Trainer DLF Phase 4", href: "/weight-loss-training-dlf-phase-4" },
  { name: "Strength Training DLF Phase 4", href: "/strength-training-dlf-phase-4" },
  { name: "Personal Trainer Sushant Lok 1", href: "/personal-trainer-sushant-lok" },
];

const USE_DYNAMIC_CMS = true;

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [moreMobileOpen, setMoreMobileOpen] = useState(false);
  const [dynamicLinks, setDynamicLinks] = useState(navbarData.links);
  const navbar = { ...navbarData, links: dynamicLinks };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (USE_DYNAMIC_CMS) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/page-structure`)
        .then(res => res.json())
        .then(data => {
          if (data.success && data.data) {
            const activeSections = data.data.filter((s: any) => s.isActive);
            const routeMap: Record<string, string> = {
              home: '/',
              about: '/about',
              programs: '/programs',
              services: '/services',
              coaches: '/coaches',
              transformations: '/transformations',
              membership: '/membership',
              gallery: '/gallery',
              blogs: '/blogs',
              contact: '/contact',
            };
            const newLinks = activeSections.map((s: any) => ({
              name: s.title,
              href: routeMap[s.sectionId] || `/#${s.sectionId}`
            }));
            setDynamicLinks(newLinks);
          }
        })
        .catch(err => console.error("Error fetching dynamic navbar:", err));
    }
  }, []);

  // ✅ Auto-scroll to hash target when arriving at home page from another route (e.g. /gallery)
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const timer = setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  // ✅ Core fix: handle navigation and smooth scrolling cleanly without appending # or #home
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" || href === "/#home") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.hash) {
          window.history.replaceState(null, "", "/");
        }
      }
      return;
    }

    // Only handle hash links on the home page
    if (pathname !== "/" || !href.startsWith("/#")) return;

    e.preventDefault();
    const sectionId = href.replace("/#", "");

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update URL without triggering a navigation
      window.history.pushState(null, "", href);
    }
  };

  return (
    <div className="fixed w-full z-50 top-0 left-0">
      <div
        className={`absolute inset-0 bg-[#050505]/80 backdrop-blur-md border-b border-white/10 shadow-lg transition-opacity duration-300 pointer-events-none ${isScrolled ? "opacity-100" : "opacity-0"}`}
      />

      <nav className="w-full h-[72px] flex items-center px-4 md:px-8 lg:px-12 relative z-10">

        {/* Left: Brand / Logo */}
        <div className="flex-1 flex justify-start">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                if (window.location.hash) {
                  window.history.replaceState(null, "", "/");
                }
              }
            }}
          >
            <img src={Logo.src} alt="FabFit Logo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex flex-[3] items-center justify-center gap-4 xl:gap-6 h-full">
          {navbar.links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 flex items-center h-full ${
                  isActive ? "text-[#FFB81C]" : "text-zinc-400 hover:text-primary"
                }`}
              >
                <span className="relative">
                  {link.name}
                  {/* Hover Underline */}
                  <span className="absolute -bottom-1.5 left-0 w-full flex justify-center">
                    <span className={`h-[2px] bg-primary rounded-full transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </span>
                </span>
              </Link>
            );
          })}

          {/* MORE DROPDOWN */}
          <div className="relative group h-full flex items-center">
            <button
              type="button"
              className="group text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 flex items-center gap-1 text-zinc-400 hover:text-primary cursor-pointer py-2"
              aria-haspopup="true"
            >
              <span>MORE</span>
              <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Simple Dropdown Menu */}
            <div className="absolute top-[65px] left-1/2 -translate-x-1/2 w-64 bg-[#0a0a0a] border border-white/10 rounded-xl p-1.5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              {MORE_PAGES.map((page) => {
                const isCurrent = pathname === page.href;
                return (
                  <Link
                    key={page.href}
                    href={page.href}
                    className={`block px-3.5 py-2.5 rounded-lg text-[12px] font-bold uppercase tracking-wider transition-colors ${
                      isCurrent 
                        ? "text-[#FFB81C] bg-white/5" 
                        : "text-zinc-300 hover:text-[#FFB81C] hover:bg-white/5"
                    }`}
                  >
                    {page.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end items-center h-full">
          {/* Desktop CTA */}
          <Link
            href="/assessment"
            target="_blank"
            className="hidden lg:flex group items-center justify-center h-[42px] px-6 bg-transparent border border-primary text-primary hover:bg-primary hover:text-black text-[12px] font-bold tracking-wide uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] rounded-md"
          >
            {navbar.cta}
            <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl overflow-y-auto max-h-[85vh]">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navbar.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  handleNavClick(e, link.href);
                }}
                className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                  pathname === link.href ? "text-[#FFB81C]" : "text-white hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile MORE Section */}
            <div className="pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => setMoreMobileOpen(!moreMobileOpen)}
                className="w-full flex items-center justify-between text-sm font-bold tracking-widest uppercase text-zinc-400 hover:text-primary py-2"
              >
                <span>MORE</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${moreMobileOpen ? "rotate-180" : ""}`} />
              </button>

              {moreMobileOpen && (
                <div className="mt-1 pl-3 space-y-2 border-l border-[#FFB81C]/40">
                  {MORE_PAGES.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-1 text-xs uppercase font-bold tracking-wider text-zinc-300 hover:text-[#FFB81C]"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/assessment"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center h-12 bg-transparent border border-primary text-primary hover:bg-primary hover:text-black text-sm font-bold tracking-wide uppercase transition-all rounded-md"
            >
              {navbar.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}


