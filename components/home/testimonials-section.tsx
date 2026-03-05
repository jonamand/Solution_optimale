import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Solutions Optimales a transforme notre vision en un business plan solide. Leur expertise en gestion financiere est remarquable.",
    author: "Marie K.",
    role: "Directrice, PME Kinshasa",
  },
  {
    quote: "Grace a leur accompagnement en agri-business, notre projet de pisciculture a pris une envergure que nous n'imaginions pas.",
    author: "Jean-Paul M.",
    role: "Entrepreneur agricole",
  },
  {
    quote: "L'equipe Solutions Numeriques a developpe une application sur mesure qui a revolutionne notre gestion quotidienne.",
    author: "Sarah L.",
    role: "Responsable IT, ONG Internationale",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Temoignages
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Ce que nos clients disent de nous
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border-border bg-card">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent" />
                <p className="mt-4 text-sm leading-relaxed text-card-foreground">
                  {testimonial.quote}
                </p>
                <div className="mt-6 border-t border-border pt-4">
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
