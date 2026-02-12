"use client";

import { usePathname } from "next/navigation";
import { MapPin, Mail, Phone, Send, User, Building2, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const content = {
    ar: {
      title: "تواصل معنا",
      intro: "فريقنا جاهز للرد على استفساراتكم وتلبية احتياجاتكم التمريضية باحترافية.",
      contactInfo: {
        addressTitle: "العنوان",
        address: "الرياض، حي المحمدية، طريق التخصصي",
        emailTitle: "البريد الإلكتروني",
        email: "juancksa@gmail.com",
        phoneTitle: "خدمة العملاء",
        phone: "0505220117",
      },
      form: {
        title: "أرسل طلبك",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الجوال",
        service: "نوع الخدمة المطلوبة",
        placeholder: "-- اختر الخدمة --",
        services: [
          "تعهيد خدمات التمريض",
          "تمريض متخصص (ICU, ER, etc)",
          "التدريب والتأهيل",
          "أخرى",
        ],
        message: "تفاصيل الرسالة",
        button: "إرسال الرسالة",
      },
    },
    en: {
      title: "Get in Touch",
      intro: "Our team is ready to answer your inquiries and meet your nursing needs professionally.",
      contactInfo: {
        addressTitle: "Address",
        address: "Riyadh, Al-Muhammadiya, Takhassusi Street",
        emailTitle: "Email",
        email: "juancksa@gmail.com",
        phoneTitle: "Customer Service",
        phone: "0505220117",
      },
      form: {
        title: "Send Your Request",
        name: "Full Name",
        email: "Email Address",
        phone: "Mobile Number",
        service: "Service Required",
        placeholder: "-- Select Service --",
        services: [
          "Nursing Outsourcing",
          "Specialized Nursing (ICU, ER, etc)",
          "Training & Qualification",
          "Other",
        ],
        message: "Message Details",
        button: "Send Message",
      },
    },
  };

  const lang = isArabic ? "ar" : "en";

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mb-8">
            {content[lang].title}
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            {content[lang].intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT COLUMN: Info Cards & Map */}
          <div className="space-y-8">
            
            {/* Info Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Address Card */}
              <div className="group bg-gray-50 rounded-[2rem] p-8 hover:bg-[#1e3a8a] transition-all duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-[#1e3a8a]">
                  <MapPin size={24} />
                </div>
                <h3 className="font-bold text-xl text-[#1e3a8a] mb-2 group-hover:text-white transition-colors duration-300">
                  {content[lang].contactInfo.addressTitle}
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                  {content[lang].contactInfo.address}
                </p>
              </div>

              {/* Email Card */}
              <div className="group bg-gray-50 rounded-[2rem] p-8 hover:bg-[#1e3a8a] transition-all duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-[#1e3a8a]">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-xl text-[#1e3a8a] mb-2 group-hover:text-white transition-colors duration-300">
                  {content[lang].contactInfo.emailTitle}
                </h3>
                <p className="text-gray-500 dir-ltr group-hover:text-blue-100 transition-colors duration-300">
                  {content[lang].contactInfo.email}
                </p>
              </div>
            </div>

            {/* Google Map - Clean Rounded Container */}
            <div className="bg-gray-50 rounded-[2.5rem] p-2 h-96 overflow-hidden relative">
              <iframe
                title="Juan Medical Location"
                src="https://maps.google.com/maps?q=Riyadh%20Al-Muhammadiya%20Takhassusi%20Street&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '2rem' }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="bg-blue-50/50 rounded-[2.5rem] p-10 md:p-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-10 flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                 <Send size={24} />
              </div>
              {content[lang].form.title}
            </h2>

            <form className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label className="text-sm font-bold text-[#1e3a8a] mb-3 block opacity-80 pl-2">
                  {content[lang].form.name}
                </label>
                <div className="relative">
                  <User className={`absolute top-4 text-gray-400 ${isArabic ? 'right-5' : 'left-5'}`} size={20} />
                  <input
                    type="text"
                    className={`w-full bg-white rounded-2xl py-4 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 transition-all duration-300 ${isArabic ? 'pr-14' : 'pl-14'}`}
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold text-[#1e3a8a] mb-3 block opacity-80 pl-2">
                    {content[lang].form.email}
                  </label>
                  <div className="relative">
                    <Mail className={`absolute top-4 text-gray-400 ${isArabic ? 'right-5' : 'left-5'}`} size={20} />
                    <input
                      type="email"
                      className={`w-full bg-white rounded-2xl py-4 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 transition-all duration-300 ${isArabic ? 'pr-14' : 'pl-14'}`}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-[#1e3a8a] mb-3 block opacity-80 pl-2">
                    {content[lang].form.phone}
                  </label>
                  <div className="relative">
                    <Phone className={`absolute top-4 text-gray-400 ${isArabic ? 'right-5' : 'left-5'}`} size={20} />
                    <input
                      type="tel"
                      className={`w-full bg-white rounded-2xl py-4 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 transition-all duration-300 ${isArabic ? 'pr-14' : 'pl-14'}`}
                    />
                  </div>
                </div>
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="text-sm font-bold text-[#1e3a8a] mb-3 block opacity-80 pl-2">
                  {content[lang].form.service}
                </label>
                <div className="relative">
                  <Building2 className={`absolute top-4 text-gray-400 ${isArabic ? 'right-5' : 'left-5'}`} size={20} />
                  <select 
                    defaultValue="" 
                    className={`w-full bg-white rounded-2xl py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 transition-all duration-300 appearance-none cursor-pointer ${isArabic ? 'pr-14' : 'pl-14'}`}
                  >
                    <option value="" disabled className="text-gray-300">
                      {content[lang].form.placeholder}
                    </option>
                    {content[lang].form.services.map((svc, i) => (
                      <option key={i} value={svc}>{svc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="text-sm font-bold text-[#1e3a8a] mb-3 block opacity-80 pl-2">
                  {content[lang].form.message}
                </label>
                <div className="relative">
                  <MessageSquare className={`absolute top-4 text-gray-400 ${isArabic ? 'right-5' : 'left-5'}`} size={20} />
                  <textarea
                    rows="4"
                    className={`w-full bg-white rounded-2xl py-4 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 transition-all duration-300 resize-none ${isArabic ? 'pr-14' : 'pl-14'}`}
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1e3a8a] text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-900 transition-all duration-300 shadow-none hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <span>{content[lang].form.button}</span>
                <Send size={20} className={isArabic ? 'rotate-180' : ''} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}