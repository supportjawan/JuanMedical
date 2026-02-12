"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowLeft, Send } from "lucide-react";

export default function CTA() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");
  const lang = isArabic ? "ar" : "en";

  const content = {
    ar: {
      title: "جاهزون لدعم منشأتكم الصحية؟",
      subtitle: "نحن هنا لنكون شريككم الاستراتيجي في توفير الكوادر التمريضية المؤهلة والمرخصة.",
      primaryButton: "اطلب عرض سعر",
      secondaryButton: "تواصل معنا",
    },
    en: {
      title: "Ready to Support Your Healthcare Facility?",
      subtitle: "We are here to be your strategic partner in providing qualified and licensed nursing staff.",
      primaryButton: "Request a Quote",
      secondaryButton: "Contact Us",
    },
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="relative py-24 bg-[#1e3a8a] overflow-hidden">
      
      {/* Creative Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#0f256e]"></div>
        
        {/* Abstract Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#006847]/30 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Text Content */}
        <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            {content[lang].title}
            </h2>
            
            <p className="text-blue-100 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed opacity-90">
            {content[lang].subtitle}
            </p>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          
          {/* Primary Button */}
          <Link 
            href={`/${lang}/contact`}
            className="group w-full sm:w-auto bg-white text-[#1e3a8a] px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-blue-900/50 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>{content[lang].primaryButton}</span>
            <ArrowIcon size={22} className="group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
          </Link>

          {/* Secondary Button */}
          <Link 
            href={`/${lang}/contact`}
            className="group w-full sm:w-auto bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{content[lang].secondaryButton}</span>
            <Send size={20} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100" />
          </Link>
          
        </div>
      </div>
    </section>
  );
}