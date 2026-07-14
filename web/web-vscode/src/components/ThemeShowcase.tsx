"use client";

import { motion } from "motion/react";

const themes = [
  { name: "X", color: "#fc618d", bg: "#050505", desc: "Flagship dark theme" },
  { name: "Miami", color: "#FF4C8B", bg: "#000000", desc: "Neon vaporwave" },
  { name: "Berlin", color: "#888", bg: "#000000", desc: "True black minimal" },
  { name: "Oslo", color: "#4aa5f0", bg: "#2d2f36", desc: "Slate-based nordic" },
  { name: "Praha", color: "#BD93F9", bg: "#1a1a1a", desc: "Dracula-inspired" },
  { name: "Tokio", color: "#fc618d", bg: "#1c1c1d", desc: "X accents on gray" },
  { name: "Paris", color: "#c4bdff", bg: "#1a0a30", desc: "Deep purple night" },
  { name: "Bogota", color: "#ffed89", bg: "#200b0a", desc: "Warm maroon earth" },
  { name: "Madrid", color: "#990026", bg: "#fafafa", desc: "Clean light" },
  { name: "London", color: "#333", bg: "#ffffff", desc: "Minimal white" },
  { name: "Helsinki", color: "#1faa9e", bg: "#f8fafe", desc: "Pale blue light" },
  { name: "Lahabana", color: "#e5ff9d", bg: "#19191a", desc: "Lime accent dark" },
];

export function ThemeGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {themes.map((theme, i) => (
        <motion.div
          key={theme.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-xl p-4 cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">{theme.name}</span>
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.color }} />
          </div>
          <div
            className="h-20 rounded-lg flex items-center justify-center text-[10px] font-mono overflow-hidden relative"
            style={{ backgroundColor: theme.bg }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(135deg, ${theme.color}15, transparent)` }}
            />
            <span className="relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">{theme.color}</span>
          </div>
          <p className="text-xs text-white/40 mt-2">{theme.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

const cityThemes = [
  { name: "Milan", color: "#FF2C6D", bg: "#000000" },
  { name: "Kyoto", color: "#007acc", bg: "#0d1117" },
  { name: "Marrakech", color: "#cc3300", bg: "#1a0f0a" },
  { name: "Reykjavik", color: "#008080", bg: "#0f1a1a" },
  { name: "Rio", color: "#00cc44", bg: "#0a1a0f" },
  { name: "Istanbul", color: "#6600cc", bg: "#0f0a1a" },
  { name: "Nice", color: "#e6adac", bg: "#1a1418" },
  { name: "Munich", color: "#39ff14", bg: "#0d0d0d" },
  { name: "Osaka", color: "#ff00cc", bg: "#0a001a" },
  { name: "Dubai", color: "#cfb53b", bg: "#0d0d08" },
  { name: "New York", color: "#f7b500", bg: "#121212" },
  { name: "San Francisco", color: "#c0362c", bg: "#1a1412" },
];

export function CityThemeGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {cityThemes.map((theme, i) => (
        <motion.div
          key={theme.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-xl p-4 cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">X {theme.name}</span>
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.color }} />
          </div>
          <div
            className="h-20 rounded-lg flex items-center justify-center text-[10px] font-mono overflow-hidden relative"
            style={{ backgroundColor: theme.bg }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(135deg, ${theme.color}15, transparent)` }}
            />
            <span className="relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">{theme.color}</span>
          </div>
          <p className="text-xs text-white/40 mt-2">City theme</p>
        </motion.div>
      ))}
    </div>
  );
}
