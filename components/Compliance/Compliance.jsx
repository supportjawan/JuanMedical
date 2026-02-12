"use client";

import { usePathname } from "next/navigation";
import { ShieldCheck, Check, Building2, Building, Stethoscope, Landmark, GraduationCap } from "lucide-react";

export default function CompliancePage() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const content = {
    ar: {
      title: "الامتثال والاعتماد",
      intro: "نلتزم بتقديم خدمات تمريضية عالية الجودة، تدعم سلامة المرضى، وتساهم في تحسين تجربة الرعاية الصحية.",
      complianceTitle: "التزامنا بالمعايير",
      compliancePoints: [
        "مرخصون من وزارة الصحة",
        "الكوادر مسجلة لدى الهيئة السعودية للتخصصات الصحية",
        "الالتزام بمعايير CBAHI",
        "تطبيق سياسات الجودة وسلامة المرضى",
        "الامتثال لأنظمة العمل ونطاقات وحماية الأجور",
      ],
      clientsTitle: "عملاؤنا المستهدفون",
      clients: [
        { name: "مستشفيات وزارة الصحة", icon: Building2 },
        { name: "مستشفيات التشغيل الذاتي", icon: Building },
        { name: "المستشفيات الخاصة", icon: Stethoscope },
        { name: "المستشفيات التخصصية", icon: ShieldCheck },
        { name: "المدن الطبية", icon: Landmark },
      ],
    },
    en: {
      title: "Compliance & Accreditation",
      intro: "We are committed to delivering high-quality nursing services that support patient safety and contribute to improving the healthcare experience.",
      complianceTitle: "Our Commitment",
      compliancePoints: [
        "Licensed by the Ministry of Health",
        "Staff registered with Saudi Commission for Health Specialties",
        "Compliance with CBAHI standards",
        "Implementation of quality & patient safety policies",
        "Compliance with labor laws and wage protection",
      ],
      clientsTitle: "Target Clients",
      clients: [
        { name: "Ministry of Health Hospitals", icon: Building2 },
        { name: "Self-Operation Hospitals", icon: Building },
        { name: "Private Hospitals", icon: Stethoscope },
        { name: "Specialized Hospitals", icon: ShieldCheck },
        { name: "Medical Cities", icon: Landmark },
      ],
    },
  };

  const lang = isArabic ? "ar" : "en";

  return (
    <section className="py-24 bg-white container mx-auto px-6">
      
      {/* Header */}
      <div className="text-center mb-20 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mb-8 relative inline-block">
          {content[lang].title}
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
          {content[lang].intro}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

        {/* Compliance Section (Left/Right) */}
        <div className="group bg-blue-50/50 rounded-[2.5rem] p-10 transition-all duration-500 hover:bg-[#1e3a8a]">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#1e3a8a] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-3xl font-bold text-[#1e3a8a] group-hover:text-white transition-colors duration-300">
              {content[lang].complianceTitle}
            </h2>
          </div>
          
          <ul className="space-y-6">
            {content[lang].compliancePoints.map((point, index) => (
              <li key={index} className="flex items-start gap-5">
                <span className="mt-1 w-6 h-6 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-[#1e3a8a] transition-all duration-300">
                  <Check size={14} strokeWidth={4} />
                </span>
                <span className="text-gray-600 font-medium text-lg leading-relaxed group-hover:text-blue-50 transition-colors duration-300">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Clients Section (Right/Left) */}
        <div>
          <div className="flex items-center gap-6 mb-10 pl-4">
             <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1e3a8a]">
              <Building2 size={32} />
            </div>
            <h2 className="text-3xl font-bold text-[#1e3a8a]">
              {content[lang].clientsTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {content[lang].clients.map((client, index) => {
              const Icon = client.icon;
              return (
                <div 
                  key={index} 
                  className="group flex items-center p-6 rounded-[2rem] bg-gray-50 hover:bg-[#1e3a8a] transition-all duration-500 cursor-default"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-400 group-hover:text-[#1e3a8a] transition-colors duration-300 mx-4">
                     <Icon size={20} />
                  </div>
                  <span className="text-gray-600 font-bold text-lg group-hover:text-white transition-colors duration-300">
                      {client.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}