"use client";

import { usePathname } from "next/navigation";
import { ShieldCheck, Layers, UserCheck, Headphones, Zap } from "lucide-react";

export default function WhyUsPreview() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const content = {
    ar: {
      title: "لماذا نحن", // [cite: 47]
      subtitle: "قيمة مضافة لشركائنا",
      points: [
        { 
          title: "التزام بالأنظمة", 
          text: "التزام كامل بأنظمة وزارة الصحة.", // [cite: 48]
          icon: ShieldCheck 
        },
        { 
          title: "مرونة تعاقدية", 
          text: "مرونة تقلل التكاليف التشغيلية.", // [cite: 49]
          icon: Layers 
        },
        { 
          title: "كوادر مرخصة", 
          text: "كوادر تمريضية مرخصة ومعتمدة.", // [cite: 51]
          icon: UserCheck 
        },
        { 
          title: "دعم مستمر", 
          text: "دعم إداري وتشغيلي مستمر للمستشفى.", // [cite: 53]
          icon: Headphones 
        },
        { 
          title: "سرعة الاستجابة", 
          text: "سرعة في توفير الكادر حسب الاحتياج.", // [cite: 54]
          icon: Zap 
        },
      ],
    },
    en: {
      title: "Why Choose Us",
      subtitle: "Added value for our partners",
      points: [
        { 
          title: "Regulatory Compliance", 
          text: "Full compliance with Ministry of Health regulations.",
          icon: ShieldCheck 
        },
        { 
          title: "Contractual Flexibility", 
          text: "Flexibility that reduces operational costs.",
          icon: Layers 
        },
        { 
          title: "Licensed Staff", 
          text: "Fully licensed and certified nursing staff.",
          icon: UserCheck 
        },
        { 
          title: "Continuous Support", 
          text: "Ongoing administrative and operational support.",
          icon: Headphones 
        },
        { 
          title: "Fast Response", 
          text: "Speed in providing staff according to need.",
          icon: Zap 
        },
      ],
    },
  };

  const lang = isArabic ? "ar" : "en";
  const dirClass = isArabic ? "text-right" : "text-left";

  return (
    <section className="py-24 bg-white container mx-auto px-6">
      
      {/* Creative Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <div className="w-16 h-2 bg-[#1e3a8a] rounded-full mb-6"></div>
        <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4 tracking-tight">
          {content[lang].title}
        </h2>
        <p className="text-gray-400 font-bold tracking-widest uppercase text-sm">
          {content[lang].subtitle}
        </p>
      </div>

      {/* Masonry-like Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {content[lang].points.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index} 
              className={`group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-gray-50 rounded-[2rem] p-8 transition-all duration-500 hover:bg-[#1e3a8a] overflow-hidden ${dirClass}`}
            >
              {/* Abstract decorative circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-white/10 group-hover:scale-150"></div>

              {/* Icon Container */}
              <div className="relative w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <Icon size={28} className="text-[#1e3a8a]" strokeWidth={2.5} />
              </div>
              
              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}