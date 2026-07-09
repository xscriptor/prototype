"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "https://www.youtube.com/@jesusorozcomo", label: "YouTube" },
  { href: "/resultados", label: "Resultados" },
  { href: "/nosotros", label: "Nosotros" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <nav
        className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl rounded-2xl shadow-sm border border-white/20 ring-1 ring-neutral-900/5 px-5"
        aria-label="Navegación principal"
      >
        <div className="flex items-center justify-between h-12">
          <Link href="/" className="flex-shrink-0" aria-label="Ir al inicio">
            <Image
              src="/logo.svg"
              alt="Consultoria.io"
              width={100}
              height={13}
              className="h-4 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              const isExternal = link.href.startsWith("http")
              if (isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-600 hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                  >
                    {link.label}
                  </a>
                )
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    isActive
                      ? "text-brand-600"
                      : "text-neutral-600 hover:text-brand-600"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1 p-1.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className={`block w-5 h-0.5 bg-neutral-800 transition-all rounded ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-neutral-800 transition-all rounded ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-neutral-800 transition-all rounded ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Menú de navegación"
          className="md:hidden mt-2 bg-white/70 backdrop-blur-xl rounded-2xl shadow-sm border border-white/20 ring-1 ring-neutral-900/5 px-5 py-4 space-y-3 animate-fade-in"
        >
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http")
            if (isExternal) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              )
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
