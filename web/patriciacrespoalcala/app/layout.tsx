import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Patricia Crespo Alcalá",
    template: "%s | Patricia Crespo Alcalá",
  },
  description:
    "patricia crespo alcalá, poesía — De poéticas. Poesía, literatura y crítica literaria.",
  openGraph: {
    title: "Patricia Crespo Alcalá",
    description: "De poéticas — Poesía, literatura y crítica literaria.",
    url: "https://www.patriciacrespoalcala.com/",
    siteName: "Patricia Crespo Alcalá",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patricia Crespo Alcalá",
    description: "De poéticas — Poesía, literatura y crítica literaria.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
