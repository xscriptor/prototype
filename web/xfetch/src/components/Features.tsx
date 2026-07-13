import { renderIcon, getIconForFeature } from "./Icons";

const features = [
  { title: "System information", desc: "OS, kernel, CPU, GPU, memory, disk, battery, uptime, packages, shell, terminal, WM/DE and more." },
  { title: "Cross-platform", desc: "Works on Linux, Windows, and macOS. Same tool, same config — everywhere." },
  { title: "Multiple layouts", desc: "Classic side-by-side, Pac-Man, tree, section, side-block, box, lines, dots, and bottom-line." },
  { title: "JSONC config", desc: "Full customization via config.jsonc — modules, icons, colors, logos, and layouts." },
  { title: "Color palette", desc: "Built-in ANSI color palette display with square, circle, triangle, and line styles." },
  { title: "Plugin system", desc: "Extend with external plugins via JSON over stdin/stdout. Animate logos, fetch GitHub stats, and more." },
  { title: "Logo animation", desc: "Animate ASCII logos with sweep, wave, rainbow, sparkle, breathing, and frame-by-frame styles." },
  { title: "NERD Font icons", desc: "Customizable Nerd Font icons per module. Use emojis, text, or any Unicode glyph." },
  { title: "ASCII & image logos", desc: "Display text logos with ANSI colors or image files (png, jpg, svg) via viuer." },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <span className="mb-2 block font-mono text-xs uppercase tracking-wide text-[#dea584]">
          Capabilities
        </span>
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold">Everything you need</h2>
        <p className="mb-12 mt-4 max-w-lg text-[#8b91a8]">
          From OS detection to animated ASCII art — xfetch packs a punch in a single binary.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-[#1e2130] bg-[#181b24] p-7 transition-all hover:-translate-y-0.5 hover:border-[#dea584]"
            >
              <div className="mb-3 text-[#dea584]">
                {renderIcon(getIconForFeature(f.title), 24)}
              </div>
              <h3 className="mb-2 text-sm font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-[#8b91a8]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
