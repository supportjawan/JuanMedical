"use client";

import { usePathname } from "next/navigation";
import { ClipboardList, FileText, PenTool, Users, Activity } from "lucide-react";

export default function ProcessPage() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const content = {
    ar: {
      title: "آلية العمل",
      intro: "نتبع منهجية دقيقة لضمان تلبية احتياجاتكم بأعلى معايير الجودة والسرعة.",
      steps: [
        {
          title: "دراسة احتياج المستشفى",
          desc: "تحليل المتطلبات الفنية والعددية للكوادر التمريضية بدقة.",
          icon: ClipboardList
        },
        {
          title: "تقديم عرض فني ومالي",
          desc: "دراسة الميزانية وتقديم أنسب الحلول التعاقدية.",
          icon: FileText
        },
        {
          title: "توقيع العقد",
          desc: "إتمام الإجراءات القانونية والتعاقدية للبدء في التنفيذ.",
          icon: PenTool
        },
        {
          title: "توفير الكوادر خلال مدة قياسية",
          desc: "اختيار وتجهيز الكوادر المؤهلة والبدء في توزيعهم.",
          icon: Users
        },
        {
          title: "متابعة الأداء والجودة بشكل مستمر",
          desc: "الإشراف الدوري لضمان الالتزام بالمعايير المهنية.",
          icon: Activity
        },
      ],
    },
    en: {
      title: "Our Process",
      intro: "We follow a precise methodology to ensure your needs are met with the highest standards of quality and speed.",
      steps: [
        {
          title: "Study Hospital Needs",
          desc: "Analyzing technical and numerical requirements for nursing staff accurately.",
          icon: ClipboardList
        },
        {
          title: "Submit Technical & Financial Proposal",
          desc: "Budget analysis and providing the most suitable contractual solutions.",
          icon: FileText
        },
        {
          title: "Contract Signing",
          desc: "Completing legal and contractual procedures to commence execution.",
          icon: PenTool
        },
        {
          title: "Provide Staff within Record Time",
          desc: "Selecting and preparing qualified staff and beginning deployment.",
          icon: Users
        },
        {
          title: "Continuous Performance & Quality Monitoring",
          desc: "Periodic supervision to ensure compliance with professional standards.",
          icon: Activity
        },
      ],
    },
  };

  const lang = isArabic ? "ar" : "en";

  return (
    <section className="py-24 bg-white container mx-auto px-6">
      
      {/* Creative Header */}
      <div className="text-center mb-24 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mb-8">
          {content[lang].title}
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
          {content[lang].intro}
        </p>
      </div>

      {/* Modern Flat Timeline */}
      <div className="relative max-w-5xl mx-auto">
        
        {/* Central Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-100 transform -translate-x-1/2 hidden md:block rounded-full"></div>

        <div className="space-y-12 md:space-y-24">
          {content[lang].steps.map((step, index) => {
            const Icon = step.icon;
            // Determine alignment based on index and language (Zig-Zag)
            const isLeft = index % 2 === 0;
            // In Arabic (RTL), "Left" visually means Right side if we stick to standard flex-row-reverse logic, 
            // but let's handle flex logic explicitly for clarity.
            // Standard LTR: Even -> Left, Odd -> Right
            // RTL: Even -> Right, Odd -> Left
            
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center justify-between group ${
                   index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                
                {/* 1. Content Half */}
                <div className={`w-full md:w-[45%] mb-8 md:mb-0 ${isArabic ? "text-right" : "text-left"}`}>
                  <div className="bg-gray-50 hover:bg-[#1e3a8a] p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 group-hover:scale-105">
                     <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* 2. Center Icon/Number */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full border-[6px] border-gray-50 group-hover:border-[#1e3a8a] transition-all duration-500 shadow-none">
                   <div className="w-full h-full rounded-full bg-[#1e3a8a] flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                   </div>
                </div>

                {/* 3. Empty Spacer Half */}
                <div className="hidden md:block w-[45%]"></div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}