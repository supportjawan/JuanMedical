import { Montserrat} from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout"; // استيراد الملف الجديد

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Juan Medical | شركة جوان الطبي",
  description: "الشركة الرائدة في خدمات التمريض - Leading Nursing Services",
};

export default function RootLayout({ children }) {
  return (
    /* suppressHydrationWarning:
       ضروري لأننا نغير الـ dir والـ lang في الكلاينت، 
       وهذا يمنع ظهور أخطاء التطابق (mismatch errors).
    */
    <html lang="en" suppressHydrationWarning>
      <ClientLayout montserrat={montserrat}>
        {children}
      </ClientLayout>
    </html>
  );
}