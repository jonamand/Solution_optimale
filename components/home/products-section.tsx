import Link from "next/link"
import { ArrowRight, Monitor, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Monitor,
    title: "Design congolais unique",
    description: "Ordinateurs assembles avec fierte, portant le drapeau de la RDC.",
  },
  {
    icon: Zap,
    title: "Performance optimale",
    description: "Configurations adaptees aux besoins des professionnels et etudiants.",
  },
  {
    icon: Shield,
    title: "Garantie & support",
    description: "Service apres-vente local avec support technique dedie.",
  },
]

export function ProductsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Product showcase */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl bg-copper-800 p-8 lg:p-12">
              <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-copper-600/20" />
              <div className="relative">
                <span className="inline-block rounded-full bg-copper-300 px-3 py-1 text-xs font-semibold text-copper-800">
                  Nouveau
                </span>
                <h3 className="mt-4 font-serif text-3xl font-bold text-white lg:text-4xl">
                  Danaisha DRC
                </h3>
                <p className="mt-2 text-copper-200">
                  Ordinateurs personnalises, fabriques pour la RDC
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {["Desktop", "Laptop", "Accessoires"].map((item) => (
                    <div key={item} className="rounded-lg bg-copper-700 p-4 text-center">
                      <p className="text-sm font-medium text-copper-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Produits Danaisha
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              La technologie congolaise a votre portee
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Decouvrez la gamme Danaisha DRC, des ordinateurs personnalises concus pour repondre aux besoins specifiques du marche congolais. Qualite, fiabilite et support local garanti.
            </p>
            <div className="mt-8 flex flex-col gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{feature.title}</h4>
                    <p className="mt-0.5 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="/produits">
                  Voir le catalogue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
