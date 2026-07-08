"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/obras", label: "Obras" },
    { href: "/blog", label: "Blog" },
    { href: "/bio", label: "Bio" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-display text-xl text-primary font-bold tracking-tight">
            Patricia Crespo Alcalá
          </Link>
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-text-muted hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
