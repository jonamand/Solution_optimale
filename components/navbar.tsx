"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  { name: "Visa Touristique", href: "#visa" },
  { name: "Bourses d'Etudes", href: "#bourses" },
  { name: "Traduction de Documents", href: "#traduction" },
  { name: "Passeport RDC", href: "#traduction" },
  { name: "Legalisation", href: "#traduction" },
  { name: "Business Plan", href: "#business-plan" },
]

const navLinks = [
  { name: "Accueil", href: "#" },
  { name: "Services", href: "#services", children: services },
  { name: "Visa", href: "#visa" },
  { name: "Bourses", href: "#bourses" },
  { name: "A propos", href: "#about" },
  { name: "Contact", href: "#contact" },
]

const WHATSAPP_NUMBER = "243818532615"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 lg:px-8" aria-label="Navigation principale">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">SO</span>
            </div>
            <div className="hidden sm:block">
              <span className={`text-lg font-bold ${scrolled ? "text-foreground" : "text-white"}`}>Solutions</span>
              <span className="text-lg font-bold text-gold-500"> Optimales</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <a
                    href={link.href}
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 ${
                      scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </a>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full w-64 rounded-lg border border-border bg-card p-2 shadow-lg">
                      {link.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary hover:text-primary"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 ${
                    scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button asChild size="sm" className="bg-gold-500 text-navy-900 hover:bg-gold-400 font-semibold">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-1.5 h-3.5 w-3.5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden rounded-md p-2 ${scrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Menu principal"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-card rounded-b-lg py-4 shadow-lg">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </a>
                    <div className="ml-4">
                      {link.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              )}
              <div className="mt-3 px-3">
                <Button asChild className="w-full bg-gold-500 text-navy-900 hover:bg-gold-400 font-semibold">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                    <Phone className="mr-1.5 h-4 w-4" />
                    Contactez-nous sur WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
