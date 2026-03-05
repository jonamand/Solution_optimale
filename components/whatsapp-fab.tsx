"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "243818532615"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour Solutions Optimales ! Je souhaite avoir plus d'informations sur vos services."
)

export function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-pulse fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
