import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: {
    default: "Consultoria.io - Multiplicamos los beneficios de tu tienda online",
    template: "%s | Consultoria.io",
  },
  description:
    "En 14 días multiplicamos los beneficios netos de tu tienda online - o no pagas",
  icons: { icon: "/favicon.svg" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
