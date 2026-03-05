import { ArrowRight, Plane, GraduationCap, FileText, BookOpen, Stamp, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Plane,
    title: "Visa Touristique",
    description: "Facilitation de visa pour les Emirats Arabes Unis, la Chine, l'Espace Schengen, la Turquie, le Canada et les USA.",
    href: "#visa",
  },
  {
    icon: GraduationCap,
    title: "Bourses d'Etudes",
    description: "Accompagnement complet pour obtenir des bourses d'etudes en Chine, Japon, Turquie et Canada.",
    href: "#bourses",
  },
  {
    icon: FileText,
    title: "Traduction de Documents",
    description: "Traduction certifiee anglais-francais de vos bulletins, diplomes, actes de naissance et autres documents officiels.",
    href: "#traduction",
  },
  {
    icon: BookOpen,
    title: "Passeport RDC",
    description: "Facilitation et accompagnement pour l'obtention de votre passeport congolais dans les meilleurs delais.",
    href: "#traduction",
  },
  {
    icon: Stamp,
    title: "Legalisation",
    description: "Legalisation de tous vos documents officiels aupres des autorites competentes.",
    href: "#traduction",
  },
  {
    icon: Briefcase,
    title: "Business Plan",
    description: "Elaboration professionnelle de statuts d'entreprise et plans d'affaires pour vos projets.",
    href: "#business-plan",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-background py-20 lg:py-28" id="services">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-gold-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-gold-600">
            Nos Services
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Des solutions completes pour toutes vos demarches
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Solutions Optimales vous accompagne dans vos projets de visa, bourses, traduction, legalisation et business plan.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a key={service.title} href={service.href} className="group">
              <Card className="h-full border-border bg-card transition-all duration-300 hover:border-gold-400 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-600">
                    <service.icon className="h-6 w-6 text-gold-400" />
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
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
