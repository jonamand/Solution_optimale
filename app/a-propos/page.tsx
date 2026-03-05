import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Target, Eye, Heart, Lightbulb, Users, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "A propos | Solutions Optimales Sarl",
  description: "Decouvrez l'histoire, la mission et les valeurs de Solutions Optimales Sarl, entreprise multidisciplinaire creee en 2022 en Republique Democratique du Congo.",
}

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque service que nous fournissons, en respectant les standards internationaux.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous integrons les technologies et methodes les plus recentes pour offrir des solutions avant-gardistes.",
  },
  {
    icon: Heart,
    title: "Engagement Social",
    description: "Notre action humanitaire et communautaire est au coeur de notre identite d'entreprise.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Nous croyons en la force du travail d'equipe et des partenariats strategiques pour un impact maximum.",
  },
]

const timeline = [
  { year: "2022", event: "Creation de Solutions Optimales Sarl a Kinshasa" },
  { year: "2022", event: "Lancement des activites en Gestion & Finances" },
  { year: "2023", event: "Expansion vers l'Agri-business et la Protection Humanitaire" },
  { year: "2023", event: "Ouverture du departement Solutions Numeriques" },
  { year: "2024", event: "Lancement de la marque Danaisha DRC" },
  { year: "2025", event: "Deploiement des services Logistique et Mobilite" },
]

const team = [
  {
    name: "Directeur General",
    role: "Direction strategique et vision d'entreprise",
    initials: "DG",
  },
  {
    name: "Directeur Financier",
    role: "Gestion financiere et audit",
    initials: "DF",
  },
  {
    name: "Directeur Technique",
    role: "Solutions numeriques et innovation",
    initials: "DT",
  },
  {
    name: "Directeur Operations",
    role: "Logistique et operations terrain",
    initials: "DO",
  },
]

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-copper-800 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl text-balance">
                A propos de Solutions Optimales
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-copper-200">
                Une entreprise multidisciplinaire au service du developpement de la RDC depuis 2022.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Notre Mission</h2>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Offrir aux entreprises, aux organisations et aux communautes de la Republique Democratique du Congo des solutions professionnelles, innovantes et adaptees dans six secteurs strategiques. Nous croyons que le developpement durable passe par l'excellence operationnelle, la transformation digitale et l'engagement social.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Notre Vision</h2>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Devenir le partenaire de reference en RDC pour les solutions multisectorielles, en combinant expertise locale et standards internationaux. Nous aspirons a contribuer activement a la transformation economique et sociale du pays a travers des services de qualite et un accompagnement de proximite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Nos Valeurs
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Les principes qui guident chacune de nos actions.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="border-border bg-card text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-card-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Notre Parcours
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Les etapes cles de notre croissance.
              </p>
            </div>
            <div className="mt-12 mx-auto max-w-2xl">
              <div className="relative border-l-2 border-accent pl-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative mb-8 last:mb-0">
                    <div className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                      <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-primary">{item.year}</span>
                    <p className="mt-1 text-base text-foreground">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Notre Equipe Dirigeante
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Des experts dedies a votre reussite.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <Card key={member.name} className="border-border bg-card text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-copper-800">
                      <span className="text-lg font-bold text-copper-300">{member.initials}</span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-card-foreground">{member.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-copper-800 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <Award className="mx-auto h-12 w-12 text-copper-300" />
            <h2 className="mt-6 font-serif text-3xl font-bold text-white sm:text-4xl text-balance">
              Rejoignez-nous dans cette aventure
            </h2>
            <p className="mt-4 text-lg text-copper-200">
              Que vous soyez une entreprise, une ONG ou un entrepreneur, nous avons les solutions adaptees a vos besoins.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild className="bg-copper-300 text-copper-800 hover:bg-copper-200">
                <Link href="/contact">Prendre contact</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
