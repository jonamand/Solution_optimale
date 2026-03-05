import Link from "next/link"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Visa Touristique", href: "#visa" },
    { name: "Bourses d'Etudes", href: "#bourses" },
    { name: "Traduction", href: "#traduction" },
    { name: "Passeport RDC", href: "#traduction" },
    { name: "Legalisation", href: "#traduction" },
    { name: "Business Plan", href: "#business-plan" },
  ],
  destinations: [
    { name: "Visa Emirats Arabes Unis", href: "#visa" },
    { name: "Visa Chine", href: "#visa" },
    { name: "Visa Schengen", href: "#visa" },
    { name: "Visa Turquie", href: "#visa" },
    { name: "Visa Canada", href: "#visa" },
    { name: "Visa USA", href: "#visa" },
  ],
  entreprise: [
    { name: "A propos", href: "#about" },
    { name: "Temoignages", href: "#temoignages" },
    { name: "Contact", href: "#contact" },
  ],
}

const WHATSAPP_NUMBER = "243818532615"

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500">
                <span className="text-lg font-bold text-navy-900">SO</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">Solutions</span>
                <span className="text-lg font-bold text-gold-400"> Optimales</span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              Votre partenaire de confiance en RDC pour les services de visa, bourses d{"'"}etudes, traduction, legalisation, passeport et business plan.
            </p>
            {/* Contact */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold-400" />
                <span className="text-sm text-navy-300">
                  C. Kalamu, 45/10 Av. Kanda Kanda, Kinshasa, RDC
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <span className="text-sm text-navy-300">+243 81 85 32 615 | +243 994 18 90 30</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <span className="text-sm text-navy-300">direction@solutionsoptimales.info</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Nos Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations Visa */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Destinations Visa
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Entreprise
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-navy-300 transition-colors hover:bg-navy-700 hover:text-white"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-navy-300 transition-colors hover:bg-navy-700 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-whatsapp text-white transition-colors hover:bg-whatsapp-dark"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-navy-800 pt-8">
          <p className="text-center text-sm text-navy-400">
            &copy; {new Date().getFullYear()} Solutions Optimales Sarl. Tous droits reserves. | Kinshasa, Republique Democratique du Congo
          </p>
        </div>
      </div>
    </footer>
  )
}
