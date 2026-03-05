"use client"

import Image from "next/image"
import { Plane, CheckCircle2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const WHATSAPP_NUMBER = "243818532615"

const visaCountries = [
  {
    name: "Emirats Arabes Unis",
    flag: "https://flagcdn.com/w80/ae.png",
    code: "AE",
    details: "Dubai, Abu Dhabi",
  },
  {
    name: "Chine",
    flag: "https://flagcdn.com/w80/cn.png",
    code: "CN",
    details: "Pekin, Shanghai",
  },
  {
    name: "Espace Schengen",
    flag: "https://flagcdn.com/w80/eu.png",
    code: "EU",
    details: "26 pays europeens",
  },
  {
    name: "Turquie",
    flag: "https://flagcdn.com/w80/tr.png",
    code: "TR",
    details: "Istanbul, Ankara",
  },
  {
    name: "Canada",
    flag: "https://flagcdn.com/w80/ca.png",
    code: "CA",
    details: "Toronto, Montreal",
  },
  {
    name: "USA",
    flag: "https://flagcdn.com/w80/us.png",
    code: "US",
    details: "New York, Los Angeles",
  },
]

const visaFeatures = [
  "Accompagnement personnalise de A a Z",
  "Preparation complete du dossier",
  "Suivi en temps reel de votre demande",
  "Taux de reussite eleve",
  "Tarifs competitifs et transparents",
  "Conseils d'experts en immigration",
]

export function VisaSection() {
  return (
    <section className="bg-navy-800 py-20 lg:py-28" id="visa">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/20">
                <Plane className="h-5 w-5 text-gold-400" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold-400">
                Visa Touristique
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl text-balance">
              Obtenez votre visa pour 6 destinations dans le monde
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-200">
              Nous facilitons l{"'"}obtention de visas touristiques pour les destinations les plus demandees. Notre equipe d{"'"}experts vous accompagne dans toutes les etapes de votre demande.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {visaFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <span className="text-sm text-navy-100">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button size="lg" asChild className="bg-gold-500 text-navy-900 hover:bg-gold-400 font-semibold">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je souhaite des informations sur l'obtention d'un visa touristique.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Demander un visa maintenant
                </a>
              </Button>
            </div>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {visaCountries.map((country) => (
              <Card key={country.code} className="border-navy-600 bg-navy-700/50 backdrop-blur-sm hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="flex flex-col items-center p-5 text-center">
                  <div className="relative h-12 w-16 overflow-hidden rounded-md shadow-md">
                    <Image
                      src={country.flag}
                      alt={`Drapeau ${country.name}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white">{country.name}</h3>
                  <p className="mt-0.5 text-xs text-navy-300">{country.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
