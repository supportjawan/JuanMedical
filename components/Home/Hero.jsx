"use client";

import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const content = {
    ar: {
      title: "شركة جوان الطبي",
      subtitle: "نرتقي بالرعاية الصحية - الشركة الرائدة في خدمات التمريض", // [cite: 8, 2]
      button: "تواصل معنا",
    },
    en: {
      title: "Juan Medical Company",
      subtitle: "Elevating Healthcare - The Leading Nursing Services Provider", // [cite: 8, 2]
      button: "Contact Us",
    },
  };

  const lang = isArabic ? "ar" : "en";

  return (
    <section className="relative bg-[#1e3a8a] text-white overflow-hidden">
      {/* Optional: Overlay pattern to match the professional feel */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>
      
      <div className="container mx-auto px-6 py-32 md:py-48 relative z-10 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {content[lang].title}
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl">
          {content[lang].subtitle}
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-[#006847] px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition transform hover:scale-105">
            {content[lang].button}
          </button>
        </div>
      </div>
      
      {/* Decorative Curve similar to the Logo */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}