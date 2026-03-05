"use client"

import Image from "next/image"
import { GraduationCap, CheckCircle2, MessageCircle, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const WHATSAPP_NUMBER = "243818532615"

const bourseCountries = [
  {
    name: "Chine",
    flag: "https://flagcdn.com/w80/cn.png",
    code: "CN",
    programs: "Bourses CSC, bourses universitaires",
    icon: "🎓",
  },
  {
    name: "Japon",
    flag: "https://flagcdn.com/w80/jp.png",
    code: "JP",
    programs: "Bourses MEXT, bourses JASSO",
    icon: "🎓",
  },
  {
    name: "Turquie",
    flag: "https://flagcdn.com/w80/tr.png",
    code: "TR",
    programs: "Bourses Turkiye Burslari",
    icon: "🎓",
  },
  {
    name: "Canada",
    flag: "https://flagcdn.com/w80/ca.png",
    code: "CA",
    programs: "Bourses Vanier, bourses provinciales",
    icon: "🎓",
  },
]

const advantages = [
  "Identification des bourses adaptees a votre profil",
  "Preparation du dossier de candidature",
  "Redaction de la lettre de motivation",
  "Coaching pour les entretiens",
  "Suivi jusqu'a l'obtention de la bourse",
  "Assistance pour les formalites de voyage",
]

export function BoursesSection() {
  return (
    <section className="bg-background py-20 lg:py-28" id="bourses">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Bourses d{"'"}etudes internationales
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Nous vous accompagnons pour decrocher une bourse d{"'"}etudes dans les meilleures universites du monde.
          </p>
        </div>

        {/* Countries */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bourseCountries.map((country) => (
            <Card key={country.code} className="border-border bg-card hover:border-gold-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="relative h-14 w-20 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={country.flag}
                    alt={`Drapeau ${country.name}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">{country.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{country.programs}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advantages + CTA */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="rounded-2xl bg-navy-600 p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-gold-400" />
              <h3 className="text-xl font-bold text-white">Notre accompagnement</h3>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {advantages.map((adv) => (
                <li key={adv} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <span className="text-sm text-navy-100">{adv}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl text-balance">
              Realisez votre reve d{"'"}etudier a l{"'"}etranger
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ne laissez pas passer les opportunites de bourses. Contactez-nous des maintenant pour une consultation gratuite et decouvrez les programmes qui correspondent a votre profil academique.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild className="bg-gold-500 text-navy-900 hover:bg-gold-400 font-semibold">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je suis interesse(e) par les bourses d'etudes internationales.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Postuler pour une bourse
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
