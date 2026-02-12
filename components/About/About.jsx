"use client";

import { usePathname } from "next/navigation";
import { Eye, Rocket, Handshake, ShieldCheck, UserCheck, Zap, Infinity as InfinityIcon } from "lucide-react";

export default function About() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const content = {
    ar: {
      title: "من نحن",
      description:
        "شركة جوان الطبي هي شركة متخصصة في تقديم خدمات التمريض للمستشفيات والمنشآت الصحية داخل المملكة العربية السعودية. نعمل على سد العجز في الكوادر التمريضية من خلال توفير كوادر مؤهلة ومرخصة وفق أعلى المعايير المهنية والتنظيمية.",
      visionTitle: "رؤيتنا",
      vision:
        "أن نكون الخيار الأول للمستشفيات السعودية في خدمات التمريض والتشغيل التمريضي، والمساهم الأبرز في رفع جودة الرعاية الصحية بالمملكة.",
      missionTitle: "رسالتنا",
      mission:
        "تقديم حلول تمريضية متكاملة ومرنة، تضمن استمرارية الخدمة الطبية، وتدعم المستشفيات بكوادر مهنية مؤهلة، مع التزام كامل بالجودة والأنظمة الصحية المعتمدة.",
      valuesTitle: "قيمنا",
      values: [
        { title: "الالتزام والموثوقية", icon: Handshake },
        { title: "الجودة وسلامة المرضى", icon: ShieldCheck },
        { title: "المهنية والأمانة", icon: UserCheck },
        { title: "سرعة الاستجابة", icon: Zap },
        { title: "الشراكة طويلة الأمد", icon: InfinityIcon },
      ],
    },
    en: {
      title: "Who We Are",
      description:
        "Juan Medical Company is specialized in providing nursing services to hospitals and healthcare facilities within Saudi Arabia. We work to bridge the gap in nursing staff by providing qualified and licensed personnel according to the highest professional and regulatory standards.",
      visionTitle: "Our Vision",
      vision:
        "To be the first choice for Saudi hospitals in nursing services and operational management, and the most prominent contributor to raising the quality of healthcare in the Kingdom.",
      missionTitle: "Our Mission",
      mission:
        "To provide integrated and flexible nursing solutions that ensure medical service continuity, supporting hospitals with qualified professional staff while maintaining full commitment to quality.",
      valuesTitle: "Our Values",
      values: [
        { title: "Commitment & Reliability", icon: Handshake },
        { title: "Quality & Patient Safety", icon: ShieldCheck },
        { title: "Professionalism & Integrity", icon: UserCheck },
        { title: "Rapid Response", icon: Zap },
        { title: "Long-term Partnership", icon: InfinityIcon },
      ],
    },
  };

  const lang = isArabic ? "ar" : "en";

  return (
    <section className="py-24 bg-white container mx-auto px-6">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-black text-[#1e3a8a] mb-8 tracking-tight">
          {content[lang].title}
        </h1>
        <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light">
          {content[lang].description}
        </p>
      </div>

      {/* Vision & Mission - Creative Split */}
      <div className="grid lg:grid-cols-2 gap-8 mb-32">
        {/* Vision Card */}
        <div className="group relative bg-blue-50/50 rounded-[2.5rem] p-10 md:p-14 transition-all duration-500 hover:bg-[#1e3a8a] hover:shadow-2xl hover:shadow-blue-900/20 overflow-hidden">
            {/* Background Icon Effect */}
            <Eye className="absolute -right-6 -bottom-6 w-64 h-64 text-[#1e3a8a]/5 group-hover:text-white/10 transition-colors duration-500" />
            
            <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#1e3a8a] mb-8 shadow-sm group-hover:bg-white/10 group-hover:text-white transition-all duration-500">
                    <Eye size={32} />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6 group-hover:text-white transition-colors duration-300">
                    {content[lang].visionTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-blue-50 transition-colors duration-300">
                    {content[lang].vision}
                </p>
            </div>
        </div>

        {/* Mission Card */}
        <div className="group relative bg-gray-50 rounded-[2.5rem] p-10 md:p-14 transition-all duration-500 hover:bg-[#1e3a8a] hover:shadow-2xl hover:shadow-blue-900/20 overflow-hidden">
            {/* Background Icon Effect */}
            <Rocket className="absolute -right-6 -bottom-6 w-64 h-64 text-[#1e3a8a]/5 group-hover:text-white/10 transition-colors duration-500" />

            <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#1e3a8a] mb-8 shadow-sm group-hover:bg-white/10 group-hover:text-white transition-all duration-500">
                    <Rocket size={32} />
                </div>
                <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6 group-hover:text-white transition-colors duration-300">
                    {content[lang].missionTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-blue-50 transition-colors duration-300">
                    {content[lang].mission}
                </p>
            </div>
        </div>
      </div>

      {/* Values Section */}
      <div>
        <div className="text-center mb-16">
            <span className="text-[#1e3a8a] font-bold tracking-widest uppercase text-sm mb-2 block opacity-60">
                JUAN MEDICAL
            </span>
            <h2 className="text-4xl font-bold text-[#1e3a8a]">
              {content[lang].valuesTitle}
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {content[lang].values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-8 rounded-[2rem] bg-gray-50 hover:bg-[#1e3a8a] transition-all duration-500"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#1e3a8a] mb-6 shadow-sm group-hover:bg-white/10 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}