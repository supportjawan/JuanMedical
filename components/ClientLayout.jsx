"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Cairo } from "next/font/google"; // خط عربي احترافي يشبه الموجود في الـ PDF
import Navbar from "./Navbar";
import Footer from "./Footer";

// إعداد خط كايرو للعربية (اختياري ولكنه أفضل للتصميم الطبي)
const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["400", "600", "700"],
});

export default function ClientLayout({ children, montserrat}) {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");
  const dir = isArabic ? "rtl" : "ltr";
  const lang = isArabic ? "ar" : "en";

  // تحديث خصائص html عند تغيير اللغة لضمان تحرك "Scrollbar" للجهة الصحيحة
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [dir, lang]);

  return (
    <body
  className={`
    ${montserrat.variable}
    ${cairo.variable}
    ${!isArabic ? montserrat.className : ""}
    antialiased
  `}
  dir={dir}
>
      {/* هذا الـ div يساعد في تنسيق الخطوط العربية والإنجليزية بشكل منفصل */}
      <div className={isArabic ? "font-cairo" : "font-sans"}>
        <Navbar />
        {children}
        <Footer/>
      </div>
    </body>
  );
}