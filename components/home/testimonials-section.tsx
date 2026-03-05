import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Grace a Solutions Optimales, j'ai obtenu mon visa pour les Emirats Arabes Unis en un temps record. Service professionnel et equipe tres reactive !",
    author: "Marie K.",
    role: "Voyageuse, Kinshasa",
    rating: 5,
  },
  {
    quote: "Leur accompagnement pour ma bourse d'etudes en Chine a ete exceptionnel. Du dossier jusqu'au depart, ils m'ont guide a chaque etape.",
    author: "Jean-Paul M.",
    role: "Etudiant boursier en Chine",
    rating: 5,
  },
  {
    quote: "La traduction de mes documents a ete faite rapidement et avec une qualite irreprochable. Je recommande vivement leurs services.",
    author: "Sarah L.",
    role: "Professionnelle, Lubumbashi",
    rating: 5,
  },
  {
    quote: "Le business plan qu'ils ont elabore pour mon entreprise m'a permis d'obtenir un financement bancaire. Un travail remarquable !",
    author: "Patrick B.",
    role: "Entrepreneur, Kinshasa",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28" id="temoignages">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-gold-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-gold-600">
            Temoignages
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Ce que nos clients disent de nous
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Des centaines de clients satisfaits nous font confiance pour leurs demarches administratives et professionnelles.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <Quote className="mt-3 h-6 w-6 text-gold-400" />
                <p className="mt-2 text-sm leading-relaxed text-card-foreground">
                  {testimonial.quote}
                </p>
                <div className="mt-4 border-t border-border pt-3">
                  <p className="text-sm font-semibold text-card-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
