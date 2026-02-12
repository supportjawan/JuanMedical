"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link"; // Assuming you might want to link the button

export default function AboutPreview() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const content = {
    ar: {
      label: "من نحن", // [cite: 4]
      title: "شريككم الاستراتيجي في إدارة وتشغيل الخدمات التمريضية", // [cite: 7]
      text: "شركة متخصصة في تقديم خدمات التمريض للمستشفيات والمنشآت الصحية داخل المملكة العربية السعودية. نعمل على سد العجز في الكوادر التمريضية من خلال توفير كوادر مؤهلة ومرخصة وفق أعلى المعايير المهنية.", // [cite: 5, 6]
      vision: "نهدف لأن نكون الخيار الأول للمستشفيات السعودية.", // [cite: 13]
      button: "اقرأ المزيد",
    },
    en: {
      label: "About Us",
      title: "Your Strategic Partner in Nursing Service Management",
      text: "A specialized company providing nursing services to hospitals and healthcare facilities within Saudi Arabia. We work to fill nursing staff shortages by providing qualified and licensed professionals according to the highest standards.",
      vision: "We aim to be the first choice for Saudi hospitals.",
      button: "Read More",
    },
  };

  const lang = isArabic ? "ar" : "en";
  const alignClass = isArabic ? "text-right" : "text-left";

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Text Content */}
        <div className={`order-2 md:order-1 ${alignClass}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#1e3a8a]"></span>
            <span className="text-[#1e3a8a] font-bold tracking-wider uppercase text-sm">
              {content[lang].label}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#1e3a8a] leading-tight">
            {content[lang].title}
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {content[lang].text}
          </p>
          
          {/* Minimalist Vision Box */}
          <div className="bg-blue-50/50 p-6 rounded-2xl mb-10 border border-blue-100">
            <p className="text-[#1e3a8a] font-medium text-lg">
              "{content[lang].vision}"
            </p>
          </div>

          <Link href={`/${lang}/about`}>
            <button className="bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-medium hover:bg-blue-900 transition-colors duration-300">
              {content[lang].button}
            </button>
          </Link>
        </div>
        
        {/* Image Section - Clean & Flat */}
        <div className="order-1 md:order-2">
           <div className="relative h-[400px] md:h-[550px] w-full rounded-[2.5rem] overflow-hidden bg-gray-100">
             <Image 
               src="/about.png" 
               alt={isArabic ? "طاقم تمريض شركة جوان الطبي" : "Juan Medical Nursing Staff"} 
               fill
               className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
               sizes="(max-width: 768px) 100vw, 50vw"
               priority
             />
           </div>
        </div>

      </div>
    </section>
  );
}