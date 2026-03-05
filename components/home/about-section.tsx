import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const values = [
  "Excellence et professionnalisme dans chaque intervention",
  "Ancrage local et vision internationale",
  "Innovation technologique au service du developpement",
  "Engagement social et humanitaire durable",
  "Accompagnement personnalise et suivi continu",
]

export function AboutSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              A propos de SOPt. Sarl
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Une expertise multidisciplinaire au coeur de la RDC
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Creee en 2022, Solutions Optimales Sarl est nee de la volonte d'offrir aux entreprises et aux communautes congolaises des services de qualite internationale. Notre equipe d'experts couvre six secteurs d'activite strategiques pour accompagner vos projets de A a Z.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild>
                <Link href="/a-propos">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual block */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="rounded-xl bg-copper-800 p-8">
                  <p className="font-serif text-4xl font-bold text-copper-300">6</p>
                  <p className="mt-1 text-sm text-copper-200">Secteurs d'activite</p>
                </div>
                <div className="rounded-xl bg-primary p-8">
                  <p className="font-serif text-4xl font-bold text-primary-foreground">24/7</p>
                  <p className="mt-1 text-sm text-primary-foreground/80">Support disponible</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <div className="rounded-xl bg-accent p-8">
                  <p className="font-serif text-4xl font-bold text-accent-foreground">50+</p>
                  <p className="mt-1 text-sm text-accent-foreground/80">Clients satisfaits</p>
                </div>
                <div className="rounded-xl bg-copper-700 p-8">
                  <p className="font-serif text-4xl font-bold text-copper-300">RDC</p>
                  <p className="mt-1 text-sm text-copper-200">Siege social Kinshasa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
