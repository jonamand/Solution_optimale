import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { VisaSection } from "@/components/home/visa-section"
import { BoursesSection } from "@/components/home/bourses-section"
import { TraductionSection } from "@/components/home/traduction-section"
import { BusinessPlanSection } from "@/components/home/business-plan-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { AboutSection } from "@/components/home/about-section"
import { CTASection } from "@/components/home/cta-section"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppFAB } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <VisaSection />
        <BoursesSection />
        <TraductionSection />
        <BusinessPlanSection />
        <TestimonialsSection />
        <AboutSection />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
