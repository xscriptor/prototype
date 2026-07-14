"use client";

import Link from "next/link";
import { motion } from "motion/react";
import VSCodePreview from "@/components/VSCodePreview";
import DotGrid from "@/components/DotGrid";
import GlowBackground from "@/components/GlowBackground";
import GlassCard from "@/components/GlassCard";
import Footer from "@/components/Footer";
import { Eye, Keyboard, WindowsLogo, Sliders, Globe, Lock, Bird, ArrowSquareOut, Star } from "@phosphor-icons/react";

const features = [
  { icon: Sliders, title: "Adjustable Alpha", desc: "Transparency from 1 (fully see-through) to 255 (solid). Fine-tune with configurable step increments.", color: "#5ad4e6" },
  { icon: Keyboard, title: "Keyboard Shortcuts", desc: "Ctrl+Alt+Z to increase transparency, Ctrl+Alt+C to decrease, Ctrl+Alt+X for full opacity.", color: "#fc618d" },
  { icon: WindowsLogo, title: "Windows Native", desc: "Uses Win32 API via C# P/Invoke for per-window alpha layering.", color: "#4aa5f0" },
  { icon: Globe, title: "Linux X11 Support", desc: "Sets _NET_WM_WINDOW_OPACITY via xprop.", color: "#fd9353" },
  { icon: Lock, title: "Privacy First", desc: "No telemetry, no network calls, no auto-start.", color: "#7bd88f" },
];

const commands = [
  { cmd: "xglass.enable", label: "Enable Transparency Mode", alpha: 200 },
  { cmd: "xglass.increase", label: "+ transparency", shortcut: "Ctrl+Alt+Z", alpha: "−10" },
  { cmd: "xglass.decrease", label: "− transparency", shortcut: "Ctrl+Alt+C", alpha: "+10" },
  { cmd: "xglass.max", label: "Full transparency", alpha: 1 },
  { cmd: "xglass.min", label: "No transparency", shortcut: "Ctrl+Alt+X", alpha: 255 },
];

export default function XGlassPage() {
  return (
    <main className="relative">
      <section className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
        <DotGrid />
        <GlowBackground color1="#5ad4e6" color2="#948ae3" />
        <div className="w-full px-4 md:px-8 max-w-[1400px] mx-auto">
          <div className="relative">
            <div className="absolute -inset-[1px] backdrop-blur-[3px] rounded-xl z-10 pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <VSCodePreview
                theme="miami"
                vscodeDevUrl="https://vscode.dev/extension/xscriptor.xglass"
              />
            </motion.div>
          </div>
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#5ad4e6]" />
              v1.1.0 · MIT License
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-4">
              <span className="text-gradient-cyan">XGlass</span>
              <br />
              <span className="text-white/70">Make Glass of Your Editor</span>
            </h1>
            <p className="text-base md:text-lg text-white/50 leading-relaxed mb-8">
              On-demand window transparency for VS Code. Adjustable alpha, keyboard shortcuts, no telemetry.
              Works beautifully with Xscriptor themes.
            </p>
            <div className="flex items-center justify-center gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://vscode.dev/extension/xscriptor.xglass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  <ArrowSquareOut weight="bold" size={16} />
                  Install on vscode.dev
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=xscriptor.xglass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  <Eye weight="bold" size={16} />
                  Marketplace
                </a>
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
              Commands at <span className="text-gradient-cyan">Your Fingertips</span>
            </h2>
            <p className="text-white/50 max-w-[65ch] mx-auto">
              Five commands, three keyboard shortcuts — full control over your editor transparency.
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            {commands.map((cmd, i) => (
              <motion.div
                key={cmd.cmd}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="flex items-center justify-between py-3 px-4 border-b border-white/[0.06] last:border-0"
              >
                <div>
                  <div className="text-sm font-mono text-white/80">{cmd.cmd}</div>
                  <div className="text-xs text-white/40 mt-0.5">{cmd.label}</div>
                </div>
                <div className="flex items-center gap-3">
                  {cmd.shortcut && (
                    <span className="text-[11px] font-mono px-2 py-1 rounded glass text-white/50">{cmd.shortcut}</span>
                  )}
                  <span className="text-xs font-mono text-white/30">α={cmd.alpha}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <GlowBackground color1="#5ad4e6" color2="#948ae3" />
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
              Try it right now in your browser
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              See Through <span className="text-gradient-cyan">Your Code</span>
            </h2>
            <p className="text-white/50 max-w-[65ch] mx-auto mb-8">
              Pair XGlass with any Xscriptor theme for the ultimate transparent coding experience.
            </p>
            <div className="flex items-center justify-center gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://vscode.dev/extension/xscriptor.xglass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  <ArrowSquareOut weight="bold" size={16} />
                  Open VS Code with XGlass
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/x-dark-colors"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  X Dark Colors →
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
