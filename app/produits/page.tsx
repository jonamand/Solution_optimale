import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Monitor, Laptop, Headphones, Shield, Zap, Wrench, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Produits Danaisha DRC | Solutions Optimales Sarl",
  description: "Decouvrez la gamme Danaisha DRC : ordinateurs desktop et laptop personnalises, concus pour les professionnels et etudiants en RDC.",
}

const products = [
  {
    icon: Monitor,
    name: "Danaisha Pro Desktop",
    category: "Desktop",
    description: "Station de travail puissante pour les professionnels. Ideale pour la bureautique, la comptabilite et la gestion.",
    specs: ["Processeur Intel Core i5/i7", "8 a 16 Go RAM DDR4", "SSD 256 Go + HDD 1 To", "Ecran 21.5\" Full HD inclus"],
    price: "A partir de 650 $",
    popular: true,
  },
  {
    icon: Monitor,
    name: "Danaisha Business Desktop",
    category: "Desktop",
    description: "Configuration optimisee pour les PME et les grandes entreprises. Robuste, fiable et economique.",
    specs: ["Processeur Intel Core i3/i5", "4 a 8 Go RAM DDR4", "SSD 128 Go + HDD 500 Go", "Ecran 19.5\" HD inclus"],
    price: "A partir de 450 $",
    popular: false,
  },
  {
    icon: Laptop,
    name: "Danaisha Laptop Pro",
    category: "Laptop",
    description: "Ordinateur portable haute performance pour les professionnels mobiles et les entrepreneurs.",
    specs: ["Processeur Intel Core i5", "8 Go RAM DDR4", "SSD 256 Go", "Ecran 15.6\" Full HD IPS"],
    price: "A partir de 550 $",
    popular: true,
  },
  {
    icon: Laptop,
    name: "Danaisha Laptop Student",
    category: "Laptop",
    description: "Solution portable abordable pour les etudiants et les usages quotidiens.",
    specs: ["Processeur Intel Celeron/i3", "4 Go RAM DDR4", "SSD 128 Go", "Ecran 14\" HD"],
    price: "A partir de 300 $",
    popular: false,
  },
  {
    icon: Headphones,
    name: "Pack Accessoires Pro",
    category: "Accessoires",
    description: "Ensemble complet d'accessoires pour accompagner votre ordinateur Danaisha.",
    specs: ["Clavier & souris sans fil", "Sac de transport renforce", "Onduleur de protection", "Cable reseau & adaptateurs"],
    price: "A partir de 80 $",
    popular: false,
  },
  {
    icon: Wrench,
    name: "Contrat Maintenance",
    category: "Service",
    description: "Service de maintenance et support technique dedie pour votre parc informatique Danaisha.",
    specs: ["Support technique prioritaire", "Maintenance sur site", "Remplacement de pieces garanti", "Mises a jour logicielles"],
    price: "A partir de 30 $/mois",
    popular: false,
  },
]

const advantages = [
  {
    icon: Shield,
    title: "Garantie locale",
    description: "Tous nos produits sont couverts par une garantie de 12 mois avec service apres-vente a Kinshasa.",
  },
  {
    icon: Zap,
    title: "Performances adaptees",
    description: "Configurations optimisees pour les conditions de travail en RDC : stabilite electrique et temperature.",
  },
  {
    icon: Wrench,
    title: "Support technique",
    description: "Une equipe de techniciens disponibles pour l'installation, la configuration et le depannage.",
  },
]

export default function ProduitsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-copper-800 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="bg-copper-300 text-copper-800 hover:bg-copper-200">
                Marque Congolaise
              </Badge>
              <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl text-balance">
                Danaisha DRC
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-copper-200">
                La technologie congolaise a votre portee. Des ordinateurs personnalises, assembles avec fierte pour le marche local.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {advantages.map((adv) => (
                <div key={adv.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <adv.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{adv.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product catalog */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Notre Catalogue
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Des configurations pour chaque besoin et chaque budget.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Card key={product.name} className="relative border-border bg-card">
                  {product.popular && (
                    <div className="absolute -top-3 right-4">
                      <Badge className="bg-primary text-primary-foreground">Populaire</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                        <product.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <Badge variant="outline" className="text-xs">{product.category}</Badge>
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-card-foreground">{product.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                    <ul className="mt-4 flex flex-col gap-1.5">
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="h-1 w-1 rounded-full bg-primary" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <Button size="sm" asChild>
                        <Link href="/contact">Commander</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-copper-800 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl text-balance">
              Besoin d'une configuration personnalisee ?
            </h2>
            <p className="mt-4 text-lg text-copper-200">
              Nous assemblons egalement des configurations sur mesure selon vos specifications. Contactez-nous pour un devis.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-copper-300 text-copper-800 hover:bg-copper-200">
                <Link href="/contact">
                  Demander un devis
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
