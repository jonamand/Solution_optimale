import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-copper-800">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-copper-300" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-copper-400" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-copper-700 px-4 py-1.5 text-sm font-medium text-copper-200">
              Depuis 2022 en Republique Democratique du Congo
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Votre partenaire pour des{" "}
              <span className="text-copper-300">solutions optimales</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-copper-200">
              Solutions Optimales Sarl accompagne les entreprises et les communautes en RDC a travers six secteurs strategiques : gestion financiere, agri-business, protection humanitaire, numerique, logistique et mobilite.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-copper-300 text-copper-800 hover:bg-copper-200">
                <Link href="/services">
                  Decouvrir nos services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-copper-400 text-copper-100 hover:bg-copper-700 hover:text-white">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>

          {/* Stats block */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "6", label: "Secteurs d'activite" },
              { value: "2022", label: "Annee de creation" },
              { value: "50+", label: "Projets realises" },
              { value: "100%", label: "Engagement client" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-copper-600 bg-copper-700/50 p-6 text-center backdrop-blur-sm"
              >
                <p className="font-serif text-3xl font-bold text-copper-300 lg:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-copper-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
