import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "243818532615"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour Solutions Optimales ! Je souhaite avoir plus d'informations sur vos services."
)

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-navy-900/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-medium text-gold-300 ring-1 ring-gold-500/30">
              Depuis 2022 en Republique Democratique du Congo
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Votre partenaire pour des{" "}
              <span className="text-gold-400">solutions optimales</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-200">
              Visa, bourses d{"'"}etudes, traduction, legalisation, passeport et business plan. Solutions Optimales Sarl vous accompagne dans toutes vos demarches administratives et professionnelles en RDC.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-gold-500 text-navy-900 hover:bg-gold-400 font-semibold">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contactez-nous sur WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-navy-300 text-white hover:bg-navy-700 hover:text-white">
                <Link href="#services">
                  Decouvrir nos services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats block */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "6", label: "Pays pour visa" },
              { value: "4", label: "Bourses disponibles" },
              { value: "50+", label: "Clients satisfaits" },
              { value: "100%", label: "Engagement" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-navy-500/30 bg-navy-800/50 p-6 text-center backdrop-blur-sm"
              >
                <p className="font-serif text-3xl font-bold text-gold-400 lg:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-navy-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
