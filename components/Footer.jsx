"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");
  const lang = isArabic ? "ar" : "en";

  const content = {
    ar: {
      about: "شركة جوان الطبي، الشركة الرائدة في خدمات التمريض ودعم المنشآت الصحية بالكوادر المؤهلة.",
      linksTitle: "روابط سريعة",
      contactTitle: "معلومات التواصل",
      copyright: "© 2024 شركة جوان الطبي. جميع الحقوق محفوظة.",
      links: [
        { name: "من نحن", href: "/ar/about" },
        { name: "خدماتنا", href: "/ar/services" },
        { name: "آلية العمل", href: "/ar/process" },
        { name: "تواصل معنا", href: "/ar/contact" },
      ],
      address: "الرياض، حي المحمدية، طريق التخصصي",
      email: "juancksa@gmail.com",
    },
    en: {
      about: "Juan Medical Company, the leading provider of nursing services and healthcare staffing support.",
      linksTitle: "Quick Links",
      contactTitle: "Contact Info",
      copyright: "© 2024 Juan Medical. All rights reserved.",
      links: [
        { name: "About Us", href: "/en/about" },
        { name: "Services", href: "/en/services" },
        { name: "Work Process", href: "/en/process" },
        { name: "Contact Us", href: "/en/contact" },
      ],
      address: "Riyadh, Al-Muhammadiya, Takhassusi Street",
      email: "juancksa@gmail.com",
    },
  };

  return (
    <footer className="bg-[#1e3a8a] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-32 h-32">
                <Image 
                  src="/Logo.png" 
                  alt="JUAN Medical Logo" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-blue-100 leading-7 mb-6">
              {content[lang].about}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2 inline-block">
              {content[lang].linksTitle}
            </h3>
            <ul className="space-y-4">
              {content[lang].links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-blue-100 hover:text-white hover:underline transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2 inline-block">
              {content[lang].contactTitle}
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-blue-300 mt-1 shrink-0" size={20} />
                <span className="text-blue-50">{content[lang].address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-blue-300 shrink-0" size={20} />
                <a href={`mailto:${content[lang].email}`} className="text-blue-50 hover:text-white transition">
                  {content[lang].email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-blue-300 shrink-0" size={20} />
                <span className="text-blue-50 dir-ltr">0505220117</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
          <p>{content[lang].copyright}</p>
        </div>
      </div>
    </footer>
  );
}