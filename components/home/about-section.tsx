import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const values = [
  "Excellence et professionnalisme dans chaque intervention",
  "Ancrage local en RDC et vision internationale",
  "Accompagnement personnalise et suivi continu",
  "Equipe d'experts multidisciplinaire",
  "Tarifs competitifs et transparents",
]

export function AboutSection() {
  return (
    <section className="bg-background py-20 lg:py-28" id="about">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/about-team.jpg"
              alt="L'equipe Solutions Optimales en reunion"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/80 to-transparent p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-serif text-2xl font-bold text-gold-400">2022</p>
                  <p className="text-xs text-navy-100">Creation</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-gold-400">50+</p>
                  <p className="text-xs text-navy-100">Clients</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-gold-400">6</p>
                  <p className="text-xs text-navy-100">Services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-gold-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-gold-600">
              A propos de SOPt. Sarl
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Une expertise multidisciplinaire au coeur de la RDC
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Creee en 2022 a Kinshasa, Solutions Optimales Sarl est nee de la volonte d{"'"}offrir aux citoyens et entreprises congolaises des services administratifs et professionnels de qualite internationale. Notre equipe d{"'"}experts vous accompagne dans vos demarches de visa, bourses, traduction, legalisation et business plan.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <span className="text-sm text-foreground">{value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl bg-navy-600 p-5">
              <p className="text-sm font-medium text-navy-100">
                <span className="text-gold-400 font-semibold">Show Room :</span>{" "}
                C. Kalamu, 45/10 Avenue Kanda Kanda, Couloir Madiakoko, Kinshasa
              </p>
              <p className="mt-1 text-sm text-navy-200">
                Tel. : +243 81 85 32 615 | +243 994 18 90 30
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
