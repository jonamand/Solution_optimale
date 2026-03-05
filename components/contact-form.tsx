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
import { CheckCircle2 } from "lucide-react"

const serviceOptions = [
  "Gestion & Finances",
  "Agri-business",
  "Protection Humanitaire",
  "Solutions Numeriques",
  "Logistique",
  "Services de Mobilite",
  "Produits Danaisha",
  "Autre",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">Message envoye !</h3>
        <p className="mt-2 text-muted-foreground">
          Merci pour votre message. Notre equipe vous repondra dans les plus brefs delais.
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">Prenom *</Label>
          <Input id="firstName" name="firstName" required placeholder="Votre prenom" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Nom *</Label>
          <Input id="lastName" name="lastName" required placeholder="Votre nom" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" required placeholder="votre@email.com" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Telephone</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+243 XXX XXX XXX" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="company">Entreprise / Organisation</Label>
        <Input id="company" name="company" placeholder="Nom de votre entreprise" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="service">Service concerne</Label>
        <Select name="service">
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
          placeholder="Decrivez votre projet ou votre besoin..."
          rows={5}
        />
      </div>
      <Button type="submit" size="lg" className="mt-2">
        Envoyer le message
      </Button>
    </form>
  )
}
