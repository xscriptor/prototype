const phases = [
  { title: "Phase 0-3 · Foundation & modules", desc: "Core system, all info modules, 20+ example configs, install scripts, layouts, documentation.", done: true },
  { title: "Phase 4 · Package manager expansion", desc: "RPM, APK (Alpine), Nix, Homebrew, Chocolatey, multi-manager detection." },
  { title: "Phase 5 · Network & connectivity", desc: "Local/public IP (with privacy toggle), IPv6, network interface display." },
  { title: "Phase 6 · Enhanced modules", desc: "Music player (MPD), Spotify, weather, timezone, user info, display resolution, theme detection." },
  { title: "Phase 7 · Additional layouts", desc: "Compact, horizontal, bottom, minimal (text-only)." },
  { title: "Phase 8 · Performance", desc: "Parallel probing, caching, lazy loading, benchmarking, profiling." },
  { title: "Phase 9 · CI/CD & distribution", desc: "GitHub Actions, macOS/Windows binaries, Homebrew tap, AUR, changelog automation.", partial: true },
  { title: "Phase 10 · Community & ecosystem", desc: "Themes registry, plugin system, community contributions, theme preview tool.", partial: true },
  { title: "Phase 11 · Testing & QA", desc: "Unit/integration tests, clippy, rustfmt, platform-specific tests, coverage.", partial: true },
  { title: "Phase 12 · Advanced features", desc: "Custom scripting, conditional modules, theme variables, daemon mode, hot-reload, telemetry (opt-in)." },
  { title: "Phase 13 · Marketing", desc: "User manual, video tutorials, project website, blog posts, comparison guide, community channel.", partial: true },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <span className="mb-2 block font-mono text-xs uppercase tracking-wide text-[#dea584]">
          Future
        </span>
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold">Roadmap</h2>
        <p className="mb-12 mt-4 max-w-lg text-[#8b91a8]">
          What&apos;s planned for xfetch — from additional package managers to a daemon mode. Contributions welcome!
        </p>
        <div className="relative border-l-2 border-[#1e2130] pl-8">
          {phases.map((p, i) => (
            <div key={i} className="relative mb-7 last:mb-0">
              <div
                className={`absolute -left-[calc(1rem+5px)] top-1.5 h-3 w-3 rounded-full border-2 ${
                  p.done
                    ? "border-[#78dba9] bg-[#78dba9]"
                    : p.partial
                      ? "border-[#ffcb6b] bg-[#ffcb6b]"
                      : "border-[#22263a] bg-[#0f1117]"
                }`}
              />
              <h4 className="text-sm font-semibold">{p.title}</h4>
              <p className="mt-1 text-xs text-[#8b91a8]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
