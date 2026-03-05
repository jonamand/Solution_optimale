import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Gestion & Finances", href: "/services#gestion-finances" },
    { name: "Agri-business", href: "/services#agri-business" },
    { name: "Protection Humanitaire", href: "/services#protection" },
    { name: "Solutions Numeriques", href: "/services#solutions-numeriques" },
    { name: "Logistique", href: "/services#logistique" },
    { name: "Mobilite", href: "/services#mobilite" },
  ],
  entreprise: [
    { name: "A propos", href: "/a-propos" },
    { name: "Nos produits", href: "/produits" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-copper-800 text-copper-100" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-copper-300">
                <span className="text-lg font-bold text-copper-800">SO</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">Solutions</span>
                <span className="text-lg font-bold text-copper-300"> Optimales</span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-copper-200">
              Entreprise multidisciplinaire en RDC, votre partenaire de confiance pour des solutions innovantes et durables.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-copper-300">
              Nos Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-copper-200 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-copper-300">
              Entreprise
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-copper-200 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-copper-300">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper-300" />
                <span className="text-sm text-copper-200">
                  Kinshasa, Republique Democratique du Congo
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-copper-300" />
                <span className="text-sm text-copper-200">+243 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-copper-300" />
                <span className="text-sm text-copper-200">contact@sopt.cd</span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-copper-700 text-copper-200 transition-colors hover:bg-copper-600 hover:text-white"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-copper-700 text-copper-200 transition-colors hover:bg-copper-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-copper-700 pt-8">
          <p className="text-center text-sm text-copper-300">
            &copy; {new Date().getFullYear()} Solutions Optimales Sarl. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}
