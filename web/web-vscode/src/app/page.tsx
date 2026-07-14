"use client";

import Link from "next/link";
import { motion } from "motion/react";
import VSCodePreview from "@/components/VSCodePreview";
import DotGrid from "@/components/DotGrid";
import GlowBackground from "@/components/GlowBackground";
import GlassCard from "@/components/GlassCard";
import { themes } from "@/lib/themes";
import { Code, Palette, PaintBrush, Eye, Sword, Bird, ArrowSquareOut, Star } from "@phosphor-icons/react";
import Footer from "@/components/Footer";

const features = [
  { icon: Palette, title: "12 Color Themes", desc: "9 dark, 3 light — each hand-crafted with unique palette psychology.", color: "#fc618d" },
  { icon: PaintBrush, title: "13 Icon Themes", desc: "44+ language icons, 294 folder associations — all palette-matched.", color: "#fce566" },
  { icon: Eye, title: "WCAG 2.1 AA Verified", desc: "Every theme passes automated contrast checks.", color: "#7bd88f" },
  { icon: Code, title: "Bracket Pair Guides", desc: "6 nesting levels with distinct palette colors.", color: "#fd9353" },
  { icon: Sword, title: "Compatible Everywhere", desc: "VS Code, VSCodium, Cursor, Windsurf, Positron.", color: "#948ae3" },
];

const vscodeDevLinks: Record<string, string> = {
  X: "https://vscode.dev/theme/xscriptor.xscriptor-themes/X",
  Miami: "https://vscode.dev/theme/xscriptor.xscriptor-themes/Miami",
  Tokio: "https://vscode.dev/theme/xscriptor.xscriptor-themes/Tokio",
  Oslo: "https://vscode.dev/theme/xscriptor.xscriptor-themes/Oslo",
  Praha: "https://vscode.dev/theme/xscriptor.xscriptor-themes/Praha",
  Berlin: "https://vscode.dev/theme/xscriptor.xscriptor-themes/Berlin",
  Madrid: "https://vscode.dev/theme/xscriptor.xscriptor-themes/Madrid",
  Paris: "https://vscode.dev/theme/xscriptor.xscriptor-themes/Paris",
  Bogota: "https://vscode.dev/theme/xscriptor.xscriptor-themes/Bogota",
  Helsinki: "https://vscode.dev/theme/xscriptor.xscriptor-themes/Helsinki",
  London: "https://vscode.dev/theme/xscriptor.xscriptor-themes/London",
  Lahabana: "https://vscode.dev/theme/xscriptor.xscriptor-themes/Lahabana",
};

export default function XscriptorThemesPage() {
  return (
    <main className="relative">
      <section className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
        <DotGrid />
        <GlowBackground color1="#fc618d" color2="#fce566" />
        <div className="w-full px-4 md:px-8 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <VSCodePreview
              theme="x"
              vscodeDevUrl="https://vscode.dev/theme/xscriptor.xscriptor-themes/X"
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#fc618d]" />
              v1.1.4 · 12 themes · MIT
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-4">
              <span className="text-gradient-x">Xscriptor</span>
              <br />
              <span className="text-white/90">Themes</span>
            </h1>
            <p className="text-base md:text-lg text-white/50 leading-relaxed mb-8">
              Hand-crafted color themes, palette-matched icon themes, and a custom product icon set for VS Code. WCAG 2.1 AA verified.
            </p>
            <div className="flex items-center justify-center gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://vscode.dev/theme/xscriptor.xscriptor-themes/X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  <ArrowSquareOut weight="bold" size={16} />
                  Try on vscode.dev
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=xscriptor.xscriptor-themes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  <Bird weight="bold" size={16} />
                  Marketplace
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Try Any Theme <span className="text-gradient-x">Live</span>
            </h2>
            <p className="text-white/50 max-w-[65ch] mx-auto">
              Each opens the real VS Code for the Web with the palette pre-applied.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Object.entries(themes).map(([id, theme], i) => (
              <motion.a
                key={id}
                href={vscodeDevLinks[theme.label] || `https://vscode.dev/theme/xscriptor.xscriptor-themes/${theme.label}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="glass-card rounded-xl p-4 group cursor-pointer block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">{theme.label}</span>
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.chrome.accent }} />
                </div>
                <div
                  className="h-20 rounded-lg flex items-center justify-center overflow-hidden relative"
                  style={{ backgroundColor: theme.chrome.bg }}
                >
                  <div className="w-full h-full flex items-center justify-center gap-3 px-3">
                    {theme.colors.map((c, j) => (
                      <span key={j} className="w-4 h-4 rounded-full" style={{ backgroundColor: c }} />
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
        <GlowBackground color1="#948ae3" color2="#5ad4e6" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Beyond <span className="text-gradient-x">Color</span>
            </h2>
            <p className="text-white/50 max-w-[65ch] mx-auto">
              Icon themes, product icons, bracket guides — every pixel follows the palette.
            </p>
          </motion.div>
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
              No install needed — works in your browser
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Experience It <span className="text-gradient-x">Right Now</span>
            </h2>
            <p className="text-white/50 max-w-[65ch] mx-auto mb-8">
              Open any theme directly in VS Code for the Web. Zero setup, full editor.
            </p>
            <div className="flex items-center justify-center gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://vscode.dev/theme/xscriptor.xscriptor-themes/X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  <ArrowSquareOut weight="bold" size={16} />
                  Open VS Code with X
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
