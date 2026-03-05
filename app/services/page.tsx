import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BarChart3, Sprout, Shield, Monitor, Truck, Globe, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Nos Services | Solutions Optimales Sarl",
  description: "Decouvrez les six secteurs d'activite de Solutions Optimales Sarl : Gestion & Finances, Agri-business, Protection Humanitaire, Solutions Numeriques, Logistique et Mobilite.",
}

const services = [
  {
    id: "gestion-finances",
    icon: BarChart3,
    title: "Gestion & Finances",
    subtitle: "Pilotez votre croissance avec confiance",
    description:
      "Notre equipe d'experts financiers accompagne les entrepreneurs et les entreprises dans la structuration et l'optimisation de leur gestion financiere. De l'elaboration de business plans a l'audit comptable, nous fournissons des solutions adaptees au contexte economique congolais.",
    features: [
      "Elaboration de business plans professionnels",
      "Audit financier et comptable",
      "Conseil strategique en gestion d'entreprise",
      "Accompagnement des entrepreneurs et startups",
      "Optimisation fiscale et budgetaire",
      "Formation en gestion financiere",
    ],
  },
  {
    id: "agri-business",
    icon: Sprout,
    title: "Agri-business",
    subtitle: "L'agriculture durable pour un avenir meilleur",
    description:
      "Nous developpons des projets agricoles innovants et durables en RDC, de l'elevage a la pisciculture en passant par l'agriculture de precision. Notre approche combine savoir-faire traditionnel et technologies modernes pour maximiser les rendements.",
    features: [
      "Projets d'elevage modernes et durables",
      "Pisciculture et aquaculture",
      "Agriculture durable et biologique",
      "Conseil en chaine de valeur agricole",
      "Formation des agriculteurs locaux",
      "Etudes de faisabilite agricole",
    ],
  },
  {
    id: "protection",
    icon: Shield,
    title: "Protection Humanitaire",
    subtitle: "Un impact social positif et durable",
    description:
      "Notre departement de protection humanitaire offre des services de consultance aux ONG et organisations internationales, tout en travaillant directement avec les communautes vulnerables pour renforcer leur resilience et leur autonomie.",
    features: [
      "Consultance pour ONG et organisations internationales",
      "Assistance aux communautes vulnerables",
      "Formations specialisees en protection",
      "Etudes et evaluations de terrain",
      "Programmes de renforcement communautaire",
      "Plaidoyer et sensibilisation",
    ],
  },
  {
    id: "solutions-numeriques",
    icon: Monitor,
    title: "Solutions Numeriques",
    subtitle: "La transformation digitale a votre portee",
    description:
      "De la conception d'applications au deploiement de solutions de cybersecurite, notre equipe technique maitrise les technologies les plus recentes. Nous proposons egalement la gamme d'ordinateurs personnalises Danaisha DRC pour les professionnels et etudiants.",
    features: [
      "Developpement d'applications web et mobiles",
      "Solutions de cybersecurite avancees",
      "Materiel informatique Danaisha DRC",
      "Infrastructure cloud et hebergement",
      "Formation et transfert de competences IT",
      "Maintenance et support technique",
    ],
  },
  {
    id: "logistique",
    icon: Truck,
    title: "Logistique",
    subtitle: "Des solutions logistiques sur mesure",
    description:
      "Nous offrons des solutions logistiques completes pour les entreprises et les communautes en RDC. Notre reseau et notre expertise permettent d'optimiser les chaines d'approvisionnement dans un contexte ou la logistique reste un defi majeur.",
    features: [
      "Gestion de la chaine d'approvisionnement",
      "Transport et distribution",
      "Entreposage et gestion de stocks",
      "Logistique humanitaire",
      "Solutions de dernier kilometre",
      "Conseil en optimisation logistique",
    ],
  },
  {
    id: "mobilite",
    icon: Globe,
    title: "Services de Mobilite",
    subtitle: "Connecter la RDC au monde",
    description:
      "Nos services de mobilite facilitent les demarches administratives internationales et la mise en relation professionnelle. De l'obtention de l'e-passeport a l'organisation d'evenements, nous simplifions vos projets de mobilite.",
    features: [
      "Assistance e-passeport et e-visa",
      "Mise en relation internationale",
      "Organisation d'evenements professionnels",
      "Facilitation de voyages d'affaires",
      "Conseil en immigration professionnelle",
      "Networking et partenariats internationaux",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-copper-800 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl text-balance">
                Nos Services
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-copper-200">
                Six secteurs d'activite strategiques pour repondre a tous vos besoins. Decouvrez comment Solutions Optimales peut vous accompagner.
              </p>
            </div>
          </div>
        </section>

        {/* Services detail */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col gap-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div className={`grid items-start gap-12 lg:grid-cols-2 ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                      <p className="mt-2 text-base font-medium text-primary">
                        {service.subtitle}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <div className="mt-8">
                        <Button asChild>
                          <Link href="/contact">
                            Demander un devis
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className={`rounded-xl border border-border bg-card p-6 lg:p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Ce que nous offrons
                      </h3>
                      <ul className="mt-4 flex flex-col gap-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                            <span className="text-sm text-card-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Besoin d'un service sur mesure ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Chaque projet est unique. Contactez-nous pour une consultation gratuite et un devis personnalise.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contactez-nous
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
