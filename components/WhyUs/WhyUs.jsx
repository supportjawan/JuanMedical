"use client";

import { usePathname } from "next/navigation";
import { ShieldCheck, Layers, UserCheck, Headphones, Zap } from "lucide-react";

export default function WhyUsPage() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const content = {
    ar: {
      title: "لماذا نحن",
      intro: "نتميز بتقديم قيمة مضافة لشركائنا من خلال الالتزام والجودة.",
      points: [
        {
          title: "التزام بالأنظمة",
          text: "التزام كامل بأنظمة وزارة الصحة.",
          icon: ShieldCheck
        },
        {
          title: "مرونة تعاقدية",
          text: "مرونة تعاقدية تقلل التكاليف التشغيلية.",
          icon: Layers
        },
        {
          title: "كوادر مرخصة",
          text: "كوادر تمريضية مرخصة ومعتمدة.",
          icon: UserCheck
        },
        {
          title: "دعم مستمر",
          text: "دعم إداري وتشغيلي مستمر للمستشفى.",
          icon: Headphones
        },
        {
          title: "سرعة الاستجابة",
          text: "سرعة في توفير الكادر حسب الاحتياج.",
          icon: Zap
        },
      ],
    },
    en: {
      title: "Why Choose Us",
      intro: "We distinguish ourselves by providing added value through commitment and quality.",
      points: [
        {
          title: "Regulatory Compliance",
          text: "Full compliance with Ministry of Health regulations.",
          icon: ShieldCheck
        },
        {
          title: "Contract Flexibility",
          text: "Flexible contracts that reduce operational costs.",
          icon: Layers
        },
        {
          title: "Licensed Staff",
          text: "Licensed and certified nursing staff.",
          icon: UserCheck
        },
        {
          title: "Continuous Support",
          text: "Ongoing administrative and operational support.",
          icon: Headphones
        },
        {
          title: "Rapid Response",
          text: "Speed in providing staff according to needs.",
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
      <div className="text-center mb-20 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mb-8">
          {content[lang].title}
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
          {content[lang].intro}
        </p>
      </div>

      {/* Points Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {content[lang].points.map((point, index) => {
          const Icon = point.icon;
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
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 group-hover:text-white transition-colors duration-300">
                {point.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-medium group-hover:text-blue-100 transition-colors duration-300">
                {point.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}