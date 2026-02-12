"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Globe, Home, Info, Briefcase, ShieldCheck, Layers, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const isArabic = pathname.startsWith("/ar");
  const lang = isArabic ? "ar" : "en";

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const links = {
    ar: [
      { name: "الرئيسية", href: "/ar", icon: Home },
      { name: "من نحن", href: "/ar/about", icon: Info },
      { name: "خدماتنا", href: "/ar/services", icon: Briefcase },
      { name: "لماذا نحن", href: "/ar/why-us", icon: ShieldCheck },
      { name: "آلية العمل", href: "/ar/process", icon: Layers },
      { name: "الامتثال", href: "/ar/compliance", icon: ShieldCheck },
      { name: "تواصل معنا", href: "/ar/contact", icon: MessageSquare },
    ],
    en: [
      { name: "Home", href: "/en", icon: Home },
      { name: "About", href: "/en/about", icon: Info },
      { name: "Services", href: "/en/services", icon: Briefcase },
      { name: "Why Us", href: "/en/why-us", icon: ShieldCheck },
      { name: "Process", href: "/en/process", icon: Layers },
      { name: "Compliance", href: "/en/compliance", icon: ShieldCheck },
      { name: "Contact", href: "/en/contact", icon: MessageSquare },
    ],
  };

  const toggleLanguage = () => {
    const newPath = isArabic 
      ? pathname.replace("/ar", "/en") 
      : pathname.replace("/en", "/ar");
    router.push(newPath);
  };

  return (
    <>
      {/* 1. MAIN NAVBAR (Fixed Top) */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled || isOpen
            ? "top-0 bg-white/90 backdrop-blur-md shadow-lg shadow-blue-900/5 py-3 border-b border-gray-100" 
            : "top-0 bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* BRAND LOGO */}
          <Link href={`/${lang}`} className="flex items-center gap-3 group relative z-50">
            <div className="relative w-12 h-12">
              <Image 
                src="/Logo.png" 
                alt="JUAN Medical Logo" 
                fill
                className="object-contain group-hover:scale-105 transition duration-500 ease-out"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP MENU (Centered Pill) */}
          <div className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ${
            scrolled ? "bg-gray-100/50 border border-gray-200/50" : "bg-white/90 shadow-2xl shadow-blue-900/10 backdrop-blur-md border border-white/20"
          }`}>
            {links[lang].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden group ${
                    isActive ? "text-white" : "text-gray-600 hover:text-[#1e3a8a]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] rounded-full shadow-md"></span>
                  )}
                  {!isActive && (
                    <span className="absolute inset-0 bg-gray-200/50 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 scale-90 group-hover:scale-100"></span>
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* DESKTOP RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center gap-3 relative z-20">
             <button
              onClick={toggleLanguage}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  scrolled 
                  ? "bg-gray-100 text-gray-500 hover:text-[#1e3a8a] border-transparent" 
                  : "bg-white/20 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-[#1e3a8a]"
              }`}
            >
              <Globe size={16} />
              <span>{isArabic ? "EN" : "عربي"}</span>
            </button>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button 
            className={`lg:hidden relative z-50 p-2 rounded-xl transition-colors duration-300 ${
                isOpen ? "bg-gray-100 text-[#1e3a8a]" : (scrolled ? "text-[#1e3a8a]" : "text-white bg-black/20 backdrop-blur-md")
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* 2. MOBILE MENU OVERLAY (Slide from Right) */}
      <div
        className={`fixed inset-y-0 right-0 w-full z-40 bg-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ paddingTop: "100px" }}
      >
        <div className="container mx-auto px-6 flex-1 flex flex-col overflow-y-auto pb-10">
          
          {/* Menu Links */}
          <div className="flex flex-col space-y-2 mt-4">
            {links[lang].map((link, i) => {
                const Icon = link.icon;
                return (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between p-4 rounded-2xl text-lg font-bold uppercase tracking-widest transition-all duration-300 transform ${
                    pathname === link.href 
                        ? "bg-[#1e3a8a] text-white shadow-lg shadow-blue-900/20 translate-x-2" 
                        : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                    }`}
                    style={{ 
                        transitionDelay: `${isOpen ? i * 50 : 0}ms`,
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? 'translateY(0)' : 'translateY(20px)'
                    }}
                >
                    <div className="flex items-center gap-4">
                        <Icon size={20} className={pathname === link.href ? "text-white/80" : "text-gray-400"} />
                        <span>{link.name}</span>
                    </div>
                </Link>
            )})}
          </div>

          {/* Mobile Footer Area (Language Only) */}
          <div className="mt-auto pt-8">
             <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center gap-3 py-4 bg-gray-100 rounded-2xl text-sm font-bold uppercase tracking-widest text-gray-600 hover:bg-[#1e3a8a] hover:text-white transition-all duration-300"
              >
                <Globe size={20} />
                <span>{isArabic ? "Switch to English" : "تغيير للعربية"}</span>
              </button>
          </div>

        </div>
      </div>
    </>
  );
}