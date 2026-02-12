"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Globe, Phone } from "lucide-react";
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

  const links = {
    ar: [
      { name: "الرئيسية", href: "/ar" },
      { name: "من نحن", href: "/ar/about" },
      { name: "خدماتنا", href: "/ar/services" },
      { name: "لماذا نحن", href: "/ar/why-us" },
      { name: "آلية العمل", href: "/ar/process" },
      { name: "الامتثال", href: "/ar/compliance" },
      { name: "تواصل معنا", href: "/ar/contact" },
    ],
    en: [
      { name: "Home", href: "/en" },
      { name: "About", href: "/en/about" },
      { name: "Services", href: "/en/services" },
      { name: "Why Us", href: "/en/why-us" },
      { name: "Process", href: "/en/process" },
      { name: "Compliance", href: "/en/compliance" },
      { name: "Contact", href: "/en/contact" },
    ],
  };

  const toggleLanguage = () => {
    const newPath = isArabic 
      ? pathname.replace("/ar", "/en") 
      : pathname.replace("/en", "/ar");
    router.push(newPath);
  };

  return (
    <nav
      className='fixed w-full z-50 transition-all duration-500 ease-in-out top-0 bg-transparent backdrop-blur-sm py-5 border-b border-transparent'
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* BRAND LOGO */}
        <Link href={`/${lang}`} className="flex items-center gap-3 group relative z-20">
          <div className="relative w-14 h-14">
            <Image 
              src="/Logo.png" 
              alt="JUAN Medical Logo" 
              fill
              className="object-contain group-hover:scale-105 transition duration-500 ease-out"
            />
          </div>
        </Link>

        {/* CENTERED FLOATING MENU (Desktop) */}
        <div className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ${
          scrolled ? "bg-gray-100/50 border border-gray-200/50" : "bg-white/80 shadow-xl shadow-blue-900/5 border border-gray-100"
        }`}>
          {links[lang].map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden group ${
                  isActive ? "text-white" : "text-gray-500 hover:text-[#1e3a8a]"
                }`}
              >
                {/* Active Background */}
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] rounded-full shadow-md"></span>
                )}
                {/* Hover Background (for non-active) */}
                {!isActive && (
                  <span className="absolute inset-0 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 scale-90 group-hover:scale-100"></span>
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-3 relative z-20">
            {/* Contact Icon (Optional quick link) */}
            <Link href='tel:0505220117' className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-all duration-300">
                <Phone size={18} />
            </Link>

            {/* Language Switcher */}
            <button
            onClick={toggleLanguage}
            className="group flex items-center gap-2 px-3 py-2 rounded-full bg-gray-50 hover:bg-white text-sm font-bold text-gray-400 hover:text-[#1e3a8a] transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-sm"
          >
            <Globe size={18} className="text-gray-300 group-hover:text-[#1e3a8a] transition-colors" />
            <span>{isArabic ? "En" : "عربي"}</span>
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden p-2.5 text-[#1e3a8a] bg-gray-50 rounded-xl hover:bg-blue-50 transition active:scale-95" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ top: "0", paddingTop: "100px" }} // Padding to clear the logo area
      >
        <div className="container mx-auto px-6 h-full flex flex-col">
          <div className="flex flex-col space-y-4">
            {links[lang].map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-bold tracking-tight py-3 border-b border-gray-100 flex items-center justify-between group ${
                  pathname === link.href ? "text-[#1e3a8a]" : "text-gray-400"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }} // Staggered animation
              >
                {link.name}
                <span className={`w-2 h-2 rounded-full transition-all duration-300 ${pathname === link.href ? "bg-[#1e3a8a]" : "bg-transparent group-hover:bg-gray-200"}`}></span>
              </Link>
            ))}
          </div>

          <div className="mt-auto mb-10 space-y-6">
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center gap-3 py-4 bg-gray-50 rounded-2xl text-lg font-medium text-gray-600 hover:bg-[#1e3a8a] hover:text-white transition-all duration-300"
              >
                <Globe size={20} />
                <span>{isArabic ? "Switch to English" : "تغيير للعربية"}</span>
              </button>
              
              <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-2xl text-center">
                  <p className="text-sm text-gray-500 mb-2">{isArabic ? "هل تحتاج مساعدة؟" : "Need Help?"}</p>
                  <p className="text-xl font-bold text-[#1e3a8a] dir-ltr">0505220117</p>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
}