"use client"

import { FileText, Stamp, BookOpen, CheckCircle2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const WHATSAPP_NUMBER = "243818532615"

const documentTypes = [
  "Bulletins scolaires",
  "Releves de Notes Academiques",
  "Diplomes",
  "Acte de Naissance",
  "Acte de Mariage",
  "Certificats divers",
]

const threeServices = [
  {
    icon: FileText,
    title: "Traduction de Documents",
    description: "Traduction certifiee de vos documents officiels en anglais-francais et francais-anglais. Service professionnel et rapide.",
    features: ["Traduction certifiee", "Anglais-Francais", "Francais-Anglais", "Delai rapide"],
  },
  {
    icon: BookOpen,
    title: "Facilitation Passeport RDC",
    description: "Accompagnement complet pour l'obtention de votre passeport congolais. Demarches simplifiees et suivi personnalise.",
    features: ["Demarches simplifiees", "Suivi personnalise", "Delais optimises", "Assistance complete"],
  },
  {
    icon: Stamp,
    title: "Legalisation de Documents",
    description: "Legalisation de tous vos documents officiels aupres des autorites competentes en RDC et a l'international.",
    features: ["Tous types de documents", "Autorites competentes", "National et international", "Service fiable"],
  },
]

export function TraductionSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28" id="traduction">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
            Documents et Legalisation
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Traduction, Passeport et Legalisation
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Un service complet pour tous vos besoins documentaires : traduction certifiee, facilitation de passeport et legalisation officielle.
          </p>
        </div>

        {/* Three service cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {threeServices.map((service) => (
            <Card key={service.title} className="border-border bg-card hover:border-gold-400 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-600">
                  <service.icon className="h-6 w-6 text-gold-400" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-card-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-500" />
                      <span className="text-sm text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Documents we translate */}
        <div className="mt-16 rounded-2xl bg-navy-800 p-8 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl text-balance">
                Documents que nous traduisons
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy-200">
                Nous offrons des services de traduction certifiee pour une large gamme de documents officiels.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {documentTypes.map((doc) => (
                  <div key={doc} className="flex items-center gap-2 rounded-lg bg-navy-700 px-3 py-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-400" />
                    <span className="text-sm text-navy-100">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
              <p className="text-base text-navy-200">
                Besoin de faire traduire, legaliser ou obtenir votre passeport ? Contactez-nous directement sur WhatsApp pour un devis gratuit.
              </p>
              <div className="mt-6">
                <Button size="lg" asChild className="bg-gold-500 text-navy-900 hover:bg-gold-400 font-semibold">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, j'ai besoin de services de traduction/legalisation de documents.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Demander un devis
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
