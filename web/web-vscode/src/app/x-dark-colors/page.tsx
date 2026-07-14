"use client";

import Link from "next/link";
import { motion } from "motion/react";
import VSCodePreview from "@/components/VSCodePreview";
import DotGrid from "@/components/DotGrid";
import GlowBackground from "@/components/GlowBackground";
import GlassCard from "@/components/GlassCard";
import Footer from "@/components/Footer";
import { MapPin, Palette, Eye, BracketsSquare, GlobeHemisphereWest, Compass, ArrowSquareOut, Star } from "@phosphor-icons/react";

const citySamples = [
  { name: "Milan", accent: "#FF2C6D", slug: "X%20Mil%C3%A1n" },
  { name: "Kyoto", accent: "#007acc", slug: "X%20Kyoto" },
  { name: "Dubai", accent: "#cfb53b", slug: "X%20Dubai" },
  { name: "Osaka", accent: "#ff00cc", slug: "X%20Osaka" },
  { name: "New York", accent: "#f7b500", slug: "X%20New%20York" },
  { name: "Rio", accent: "#00cc44", slug: "X%20Rio" },
];

const features = [
  { icon: MapPin, title: "32 City Themes", desc: "28 world cities + 4 core themes. Each captures the essence of its namesake.", color: "#4aa5f0" },
  { icon: Compass, title: "Dual-Palette Design", desc: "Every theme carries a distinctive two-color palette that defines syntax, UI, and bracket guides.", color: "#8cc265" },
  { icon: Eye, title: "Optimized for XGlass", desc: "Designed to look stunning with XGlass window transparency and blur effects.", color: "#5ad4e6" },
  { icon: BracketsSquare, title: "6-Level Bracket Guides", desc: "Distinct per-level palette colors for bracket pair matching across all 32 themes.", color: "#fd9353" },
  { icon: GlobeHemisphereWest, title: "Global Inspiration", desc: "From Milan to San Francisco, each theme is a color interpretation of a city's identity.", color: "#948ae3" },
];

export default function XDarkColorsPage() {
  return (
    <main className="relative">
      <section className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
        <DotGrid />
        <GlowBackground color1="#4aa5f0" color2="#8cc265" />
        <div className="w-full px-4 md:px-8 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <VSCodePreview
              theme="oslo"
              vscodeDevUrl="https://vscode.dev/theme/xscriptor.x-dark-colors/X%20Mil%C3%A1n"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/60 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4aa5f0]" />
              v1.2.0 · 32 themes
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-4">
              <span className="text-gradient-x">X Dark</span>
              <br />
              <span className="text-white/90">Colors</span>
            </h1>
            <p className="text-base md:text-lg text-white/50 leading-relaxed mb-8">
              32 city-inspired dark themes for VS Code. From Milan to San Francisco, each captures a city through balanced color palettes.
            </p>
            <div className="flex items-center justify-center gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://vscode.dev/theme/xscriptor.x-dark-colors/X%20Mil%C3%A1n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  <ArrowSquareOut weight="bold" size={16} />
                  Try on vscode.dev
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Xscriptor Themes →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 border-t border-white/[0.06]">
        <DotGrid />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Try a City <span className="text-gradient-x">Live</span>
            </h2>
            <p className="text-white/50 max-w-[65ch] mx-auto">
              Each city theme opens the real VS Code for the Web with its palette pre-applied.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {citySamples.map((city, i) => (
              <motion.a
                key={city.name}
                href={`https://vscode.dev/theme/xscriptor.x-dark-colors/${city.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="glass-card rounded-xl p-4 group cursor-pointer block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">X {city.name}</span>
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: city.accent }} />
                </div>
                <div
                  className="h-20 rounded-lg flex items-center justify-center overflow-hidden relative"
                  style={{ backgroundColor: "#0d1117" }}
                >
                  <div className="flex gap-2">
                    {[city.accent, "#ffffff", "#888"].map((c, j) => (
                      <span key={j} className="w-8 h-8 rounded-lg" style={{ backgroundColor: c, opacity: 0.7 }} />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] text-white/80 flex items-center gap-1">
                      <ArrowSquareOut weight="bold" size={11} />
                      Open live
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <GlowBackground color1="#4aa5f0" color2="#8cc265" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassCard className="p-6 h-full" hover3d>
                    <div
                      className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-4"
                      style={{ color: feature.color }}
                    >
                      <Icon size={20} weight="bold" />
                    </div>
                    <h3 className="text-base font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{feature.desc}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/60 mb-6">
              <Star weight="fill" size={14} className="text-[#fce566]" />
              32 cities, zero setup — try them now
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Find Your <span className="text-gradient-x">City</span>
            </h2>
            <p className="text-white/50 max-w-[65ch] mx-auto mb-8">
              32 dark themes, each inspired by a city. Open any of them in real VS Code for the Web.
            </p>
            <div className="flex items-center justify-center gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://vscode.dev/theme/xscriptor.x-dark-colors/X%20Mil%C3%A1n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  <ArrowSquareOut weight="bold" size={16} />
                  Open VS Code with X Milan
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/xglass"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Explore XGlass →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
