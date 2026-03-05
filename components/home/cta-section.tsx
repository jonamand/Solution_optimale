"use client"

import { MessageCircle, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "243818532615"

export function CTASection() {
  return (
    <section className="bg-navy-800 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            Pret a lancer votre projet ?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy-200">
            Visa, bourses, traduction, passeport, legalisation ou business plan ? Contactez-nous sur WhatsApp pour un accompagnement immediat et personnalise.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-whatsapp text-white hover:bg-whatsapp-dark font-semibold text-base px-8">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour Solutions Optimales ! Je souhaite des informations sur vos services.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Ecrire sur WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-navy-400 text-navy-100 hover:bg-navy-700 hover:text-white">
              <a href="tel:+243818532615">
                <Phone className="mr-2 h-4 w-4" />
                +243 81 85 32 615
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-navy-300">
            Reponse garantie sous 24h | Service disponible du lundi au samedi
          </p>
        </div>
      </div>
    </section>
  )
}
