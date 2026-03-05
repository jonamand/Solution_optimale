import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-copper-800 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            Pret a donner un nouvel elan a votre projet ?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-copper-200">
            Contactez-nous des aujourd'hui pour discuter de vos besoins. Notre equipe d'experts est prete a vous accompagner vers le succes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-copper-300 text-copper-800 hover:bg-copper-200">
              <Link href="/contact">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-copper-400 text-copper-100 hover:bg-copper-700 hover:text-white">
              <Link href="/services">Explorer nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
