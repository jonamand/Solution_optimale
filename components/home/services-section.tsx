import Link from "next/link"
import { ArrowRight, BarChart3, Sprout, Shield, Monitor, Truck, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: BarChart3,
    title: "Gestion & Finances",
    description: "Business plan, audit financier, conseil strategique et accompagnement des entrepreneurs pour une croissance durable.",
    href: "/services#gestion-finances",
  },
  {
    icon: Sprout,
    title: "Agri-business",
    description: "Projets d'elevage, pisciculture et agriculture durable. Solutions innovantes pour le secteur agro-alimentaire en RDC.",
    href: "/services#agri-business",
  },
  {
    icon: Shield,
    title: "Protection Humanitaire",
    description: "Consultance ONG, assistance aux communautes vulnerables et formations specialisees pour un impact social positif.",
    href: "/services#protection",
  },
  {
    icon: Monitor,
    title: "Solutions Numeriques",
    description: "Developpement d'applications, cybersecurite et materiel informatique Danaisha. Transformation digitale sur mesure.",
    href: "/services#solutions-numeriques",
  },
  {
    icon: Truck,
    title: "Logistique",
    description: "Solutions logistiques completes pour entreprises et communautes. Chaine d'approvisionnement optimisee.",
    href: "/services#logistique",
  },
  {
    icon: Globe,
    title: "Services de Mobilite",
    description: "E-passeport, e-visa, mise en relation internationale et organisation d'evenements professionnels.",
    href: "/services#mobilite",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-background py-20 lg:py-28" id="services">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nos Expertises
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Six secteurs strategiques au service de votre reussite
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Une approche multidisciplinaire unique en RDC pour repondre a tous vos besoins professionnels.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <Card className="h-full border-border bg-card transition-all duration-300 hover:border-accent hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary">
                    En savoir plus
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
