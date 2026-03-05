import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact | Solutions Optimales Sarl",
  description: "Contactez Solutions Optimales Sarl pour un devis gratuit. Notre equipe est disponible pour repondre a toutes vos questions.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Kinshasa, Republique", "Democratique du Congo"],
  },
  {
    icon: Phone,
    title: "Telephone",
    details: ["+243 XXX XXX XXX"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@sopt.cd", "info@sopt.cd"],
  },
  {
    icon: Clock,
    title: "Horaires",
    details: ["Lun - Ven : 8h00 - 17h00", "Sam : 8h00 - 12h00"],
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-copper-800 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl text-balance">
                Contactez-nous
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-copper-200">
                Nous sommes a votre ecoute. Parlez-nous de votre projet et recevez un devis personnalise gratuit.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Info column */}
              <div className="lg:col-span-1">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Nos coordonnees
                </h2>
                <p className="mt-3 text-muted-foreground">
                  N'hesitez pas a nous contacter par le moyen qui vous convient le mieux.
                </p>
                <div className="mt-8 flex flex-col gap-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">{info.title}</h3>
                        {info.details.map((detail) => (
                          <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-8 overflow-hidden rounded-xl border border-border">
                  <div className="flex h-48 items-center justify-center bg-secondary">
                    <div className="text-center">
                      <MapPin className="mx-auto h-8 w-8 text-primary" />
                      <p className="mt-2 text-sm font-medium text-foreground">Kinshasa, RDC</p>
                      <p className="text-xs text-muted-foreground">Showroom & Bureaux</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form column */}
              <div className="lg:col-span-2">
                <Card className="border-border bg-card">
                  <CardContent className="p-6 lg:p-8">
                    <h2 className="font-serif text-2xl font-bold text-card-foreground">
                      Envoyez-nous un message
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Remplissez le formulaire ci-dessous et nous vous repondrons dans les 24 heures.
                    </p>
                    <div className="mt-6">
                      <ContactForm />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
