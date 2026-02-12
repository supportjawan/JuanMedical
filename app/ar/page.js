import Hero from "@/components/Home/Hero";
import AboutPreview from "@/components/Home/About";
import ServicesPreview from "@/components/Home/Services";
import WhyUsPreview from "@/components/Home/WhyUs";
import CTA from "@/components/Home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyUsPreview />
      <CTA />
    </>
  );
}