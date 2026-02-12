"use client";

import { usePathname } from "next/navigation";
import { ClipboardList, Stethoscope, Clock, FileText, GraduationCap } from "lucide-react";

export default function ServicesPage() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const content = {
    ar: {
      title: "خدماتنا",
      intro: "نرتقي بخدمات الرعاية الصحية المتكاملة من خلال حلول تمريضية احترافية.",
      services: [
        {
          title: "تعهيد خدمات التمريض",
          description: "توفير كوادر تمريضية للعمل بنظام التعاقد الجزئي أو الكامل، وفق احتياج المستشفى.",
          icon: ClipboardList,
        },
        {
          title: "تمريض متخصص",
          description: "كوادر متخصصة في العناية المركزة (ICU)، الطوارئ (ER)، غسيل الكلى، حديثي الولادة (NICU)، وغرف العمليات.",
          icon: Stethoscope,
        },
        {
          title: "تغطية النوبات والطوارئ",
          description: "تغطية العجز المفاجئ، الإجازات، ومواسم الضغط مثل الحج والعمرة.",
          icon: Clock,
        },
        {
          title: "إدارة التراخيص والملفات",
          description: "تصنيف وتسجيل الكوادر لدى الهيئة السعودية للتخصصات الصحية، متابعة التراخيص المهنية، وإدارة ملفات الامتثال.",
          icon: FileText,
        },
        {
          title: "التدريب والتأهيل",
          description: "تقديم برامج تدريبية داعمة لمتطلبات الجودة والاعتماد (CBAHI).",
          icon: GraduationCap,
        },
      ],
    },
    en: {
      title: "Our Services",
      intro: "Elevating integrated healthcare services through professional nursing solutions.",
      services: [
        {
          title: "Nursing Outsourcing",
          description: "Providing nursing staff for partial or full contract basis according to hospital needs.",
          icon: ClipboardList,
        },
        {
          title: "Specialized Nursing",
          description: "Specialized staff for ICU, ER, Dialysis, NICU, and Operating Rooms.",
          icon: Stethoscope,
        },
        {
          title: "Shift & Emergency Coverage",
          description: "Covering sudden shortages, leaves, and high-demand seasons like Hajj and Umrah.",
          icon: Clock,
        },
        {
          title: "Licensing & File Management",
          description: "Staff classification and registration with SCFHS, professional license tracking, and compliance file management.",
          icon: FileText,
        },
        {
          title: "Training & Qualification",
          description: "Providing training programs that support quality and accreditation requirements (CBAHI).",
          icon: GraduationCap,
        },
      ],
    },
  };

  const lang = isArabic ? "ar" : "en";
  const dirClass = isArabic ? "text-right" : "text-left";

  return (
    <section className="py-24 bg-white container mx-auto px-6">
      
      {/* Creative Header */}
      <div className="text-center mb-20 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mb-8">
          {content[lang].title}
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
          {content[lang].intro}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content[lang].services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`group relative bg-gray-50 rounded-[2.5rem] p-10 transition-all duration-500 hover:bg-[#1e3a8a] ${dirClass}`}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Icon size={32} className="text-[#1e3a8a]" />
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h2>
              
              <p className="text-gray-500 leading-relaxed text-lg font-medium group-hover:text-blue-100 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}