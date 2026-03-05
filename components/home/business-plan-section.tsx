"use client"

import { Briefcase, CheckCircle2, MessageCircle, TrendingUp, FileCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "243818532615"

const planSteps = [
  {
    icon: Users,
    step: "01",
    title: "Consultation initiale",
    description: "Nous analysons votre idee de projet, votre marche cible et vos objectifs commerciaux.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Elaboration du plan",
    description: "Nos experts redigent un business plan complet avec etude de marche, projections financieres et strategie.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Livraison et suivi",
    description: "Vous recevez votre document professionnel avec un accompagnement pour la mise en oeuvre.",
  },
]

const includes = [
  "Resume executif",
  "Etude de marche",
  "Strategie marketing",
  "Plan operationnel",
  "Projections financieres",
  "Statuts d'entreprise",
  "Analyse SWOT",
  "Plan de financement",
]

export function BusinessPlanSection() {
  return (
    <section className="bg-background py-20 lg:py-28" id="business-plan">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/20">
                <Briefcase className="h-5 w-5 text-gold-600" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">
                Business Plan
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Statuts et Plan d{"'"}Affaires professionnels
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Transformez votre idee en un projet concret avec un business plan solide et des statuts d{"'"}entreprise conformes a la legislation congolaise. Nos consultants financiers vous accompagnent a chaque etape.
            </p>

            {/* Steps */}
            <div className="mt-10 flex flex-col gap-6">
              {planSteps.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-600 text-sm font-bold text-gold-400">
                      {step.step}
                    </div>
                    {step.step !== "03" && (
                      <div className="mt-2 h-full w-0.5 bg-navy-200" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h4 className="text-base font-semibold text-foreground">{step.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button size="lg" asChild className="bg-gold-500 text-navy-900 hover:bg-gold-400 font-semibold">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je souhaite elaborer un business plan pour mon projet.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Commander votre Business Plan
                </a>
              </Button>
            </div>
          </div>

          {/* Right - What's included */}
          <div className="rounded-2xl bg-navy-800 p-8 lg:p-10 lg:sticky lg:top-24">
            <h3 className="text-xl font-bold text-white">Contenu de votre Business Plan</h3>
            <p className="mt-2 text-sm text-navy-200">
              Un document complet et professionnel pour convaincre vos partenaires et investisseurs.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-navy-700 px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-400" />
                  <span className="text-sm font-medium text-navy-100">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-gold-500/10 border border-gold-500/20 p-4">
              <p className="text-sm font-medium text-gold-400">Tarifs competitifs</p>
              <p className="mt-1 text-xs text-navy-200">
                Contactez-nous pour un devis personnalise selon la complexite de votre projet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
