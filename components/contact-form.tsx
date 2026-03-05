"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MessageCircle, Phone, MapPin, Mail, Clock } from "lucide-react"

const WHATSAPP_NUMBER = "243818532615"

const serviceOptions = [
  "Visa Touristique",
  "Bourse d'Etudes",
  "Traduction de Documents",
  "Facilitation Passeport RDC",
  "Legalisation de Documents",
  "Business Plan / Statuts",
  "Autre",
]

const contactInfo = [
  {
    icon: Phone,
    label: "Telephone",
    value: "+243 81 85 32 615",
    sub: "+243 994 18 90 30",
  },
  {
    icon: Mail,
    label: "Email",
    value: "direction@solutionsoptimales.info",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "C. Kalamu, 45/10 Avenue Kanda Kanda",
    sub: "Couloir Madiakoko, Kinshasa, RDC",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lundi - Samedi : 8h00 - 18h00",
  },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    message: "",
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const text = `Bonjour Solutions Optimales !

Nom : ${formData.firstName} ${formData.lastName}
Telephone : ${formData.phone}
Service : ${formData.service}

Message : ${formData.message}`

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="bg-secondary py-20 lg:py-28" id="contact">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-gold-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-gold-600">
            Contact
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Contactez-nous maintenant
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Remplissez le formulaire ci-dessous et vous serez redirige vers WhatsApp pour un echange direct avec notre equipe.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl bg-navy-800 p-6 lg:p-8">
              <h3 className="text-lg font-bold text-white">Nos coordonnees</h3>
              <div className="mt-6 flex flex-col gap-5">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-700">
                      <info.icon className="h-5 w-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-navy-300">{info.label}</p>
                      <p className="mt-0.5 text-sm text-navy-100">{info.value}</p>
                      {info.sub && <p className="text-sm text-navy-200">{info.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-whatsapp/20 bg-whatsapp/5 p-6">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-whatsapp" />
                <h3 className="text-base font-bold text-foreground">WhatsApp Direct</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Pour une reponse encore plus rapide, contactez-nous directement sur WhatsApp.
              </p>
              <Button asChild className="mt-4 w-full bg-whatsapp text-white hover:bg-whatsapp-dark font-semibold">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Ouvrir WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl bg-card border border-border p-6 lg:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="firstName">Prenom *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Votre prenom"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Votre nom"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Telephone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+243 XXX XXX XXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="service">Service concerne *</Label>
                <Select
                  name="service"
                  required
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Selectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Decrivez votre besoin..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button type="submit" size="lg" className="mt-2 bg-whatsapp text-white hover:bg-whatsapp-dark font-semibold">
                <MessageCircle className="mr-2 h-5 w-5" />
                Envoyer via WhatsApp
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                En cliquant sur Envoyer, vous serez redirige vers WhatsApp avec votre message pre-rempli.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
