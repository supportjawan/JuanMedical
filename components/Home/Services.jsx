"use client";

import { usePathname } from "next/navigation";
import { ClipboardList, Stethoscope, GraduationCap, ArrowRight, ArrowLeft } from "lucide-react";

export default function ServicesPreview() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const content = {
    ar: {
      title: "خدماتنا المتكاملة", // [cite: 26]
      subtitle: "حلول تمريضية شاملة تلبي احتياجات القطاع الصحي",
      services: [
        {
          title: "تعهيد خدمات التمريض", // [cite: 28]
            desc: "توفير كوادر تمريضية بنظام التعاقد الجزئي أو الكامل وتغطية النوبات.", // [cite: 29]
          icon: ClipboardList
        },
        {
          title: "تمريض متخصص", // [cite: 33]
          desc: "عناية مركزة (ICU)، طوارئ (ER)، غسيل كلى، حديثي الولادة (NICU).", // [cite: 34, 35, 36, 37]
          icon: Stethoscope
        },
        {
          title: "التدريب والتأهيل", // [cite: 41]
          desc: "برامج تدريبية لمعايير CBAHI، تصنيف الهيئة، وإدارة التراخيص.", // [cite: 42, 43]
          icon: GraduationCap
        },
      ],
      more: "اكتشف المزيد"
    },
    en: {
      title: "Our Integrated Services",
      subtitle: "Comprehensive nursing solutions meeting healthcare sector needs",
      services: [
        {
          title: "Nursing Outsourcing",
          desc: "Providing nursing staff for partial or full contracts and shift coverage.",
          icon: ClipboardList
        },
        {
          title: "Specialized Nursing",
          desc: "Intensive Care (ICU), Emergency (ER), Dialysis, Neonatal (NICU).",
          icon: Stethoscope
        },
        {
          title: "Training & Qualification",
          desc: "Training programs for CBAHI standards, SCFHS classification, and licensing.",
          icon: GraduationCap
        },
      ],
    },
  };

  const lang = isArabic ? "ar" : "en";
  const alignClass = isArabic ? "text-right" : "text-left";
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        
        {/* Minimalist Header */}
        <div className="mb-20 max-w-4xl">
            <span className="text-[#1e3a8a] font-bold tracking-widest uppercase text-sm mb-4 block opacity-60">
              {content[lang].subtitle}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] leading-tight">
              {content[lang].title}
            </h2>
        </div>

        {/* Creative Flat Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {content[lang].services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gray-50 rounded-[2.5rem] p-10 transition-all duration-500 hover:bg-[#1e3a8a] ${alignClass}`}
              >
                {/* Icon Box - Always White to pop against both backgrounds */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon size={32} className="text-[#1e3a8a]" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-10 text-lg group-hover:text-blue-100 transition-colors duration-300">
                  {service.desc}
                </p>

                {/* Animated 'Read More' Link */}
                <div className="flex items-center gap-3 font-bold text-[#1e3a8a] group-hover:text-white transition-all duration-300 group-hover:gap-5">
                  <span>{content[lang].more}</span>
                  <Arrow size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}