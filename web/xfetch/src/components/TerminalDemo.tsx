"use client";

import { useEffect, useRef, useState } from "react";
import { renderIcon, getIconForModule } from "./Icons";

interface Line {
  type: "empty" | "prompt" | "dim" | "info" | "palette" | "sep";
  label?: string;
  icon?: string;
  key?: string;
  value?: string;
}

const lines: Line[] = [
  { type: "prompt", label: "$ xfetch" },
  { type: "empty" },
  { type: "dim", label: "Hardware" },
  { type: "info", key: "cpu", value: "AMD Ryzen 9 7950X (16) @ 4.50 GHz" },
  { type: "info", key: "gpu", value: "NVIDIA GeForce RTX 4090" },
  { type: "info", key: "memory", value: "8.25 GiB / 31.20 GiB (26%)" },
  { type: "info", key: "disk", value: "256.4 GiB / 1.0 TiB (25%)" },
  { type: "info", key: "battery", value: "85% [Charging]" },
  { type: "sep" },
  { type: "dim", label: "Software" },
  { type: "info", key: "os", value: "Arch Linux x86_64" },
  { type: "info", key: "kernel", value: "6.6.1-arch1-1" },
  { type: "info", key: "packages", value: "1456 (pacman)" },
  { type: "info", key: "shell", value: "zsh" },
  { type: "info", key: "wm", value: "Hyprland" },
  { type: "sep" },
  { type: "dim", label: "Session" },
  { type: "info", key: "user", value: "x0z" },
  { type: "info", key: "uptime", value: "2 hours, 15 mins" },
  { type: "info", key: "datetime", value: "2026-07-13 14:23:00" },
  { type: "empty" },
  { type: "palette" },
  { type: "empty" },
  { type: "prompt", label: "$" },
];

const colorMap: Record<string, string> = {
  cpu: "text-[#78dce8]", gpu: "text-[#78dce8]", memory: "text-[#78dce8]",
  disk: "text-[#78dce8]", battery: "text-[#78dce8]",
  os: "text-[#ffcb6b]", kernel: "text-[#ffcb6b]", packages: "text-[#ffcb6b]",
  shell: "text-[#ffcb6b]", wm: "text-[#ffcb6b]",
  user: "text-[#ff6b9d]", uptime: "text-[#ff6b9d]", datetime: "text-[#ff6b9d]",
};

const paletteColors = ["#f07178","#f78c6c","#ffcb6b","#78dba9","#78dce8","#82aaff","#b388ff","#dea584"];

export default function TerminalDemo() {
  const [visible, setVisible] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setVisible((prev) => (prev < lines.length ? prev + 1 : prev));
    }, 40);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const restart = () => {
    setVisible(0);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setVisible((prev) => (prev < lines.length ? prev + 1 : prev));
    }, 40);
  };

  return (
    <section id="terminal" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <span className="mb-2 block font-mono text-xs uppercase tracking-wide text-[#dea584]">
          Live demo
        </span>
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold">See it in action</h2>
        <p className="mb-12 mt-4 max-w-lg text-[#8b91a8]">
          Watch xfetch display your system information in real time. This is a simulated terminal session.
        </p>
        <div
          className="overflow-hidden rounded-xl border border-[#1e2130] bg-[#0a0c10]"
          onClick={restart}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter") restart(); }}
        >
          <div className="flex items-center gap-2 border-b border-[#1e2130] bg-[#13161d] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-auto text-xs text-[#8b91a8]">xfetch — bash</span>
          </div>
          <pre className="terminal-scrollbar overflow-x-auto p-5 pb-6 font-mono text-sm leading-relaxed">
            {lines.slice(0, visible).map((line, i) => {
              if (line.type === "empty") return <div key={i} />;
              if (line.type === "sep") return <div key={i} className="text-[#555]">─</div>;
              if (line.type === "prompt")
                return (
                  <div key={i}>
                    <span className="text-[#78dba9]">$</span> {line.label}
                    <span className="animate-blink text-[#78dba9]">█</span>
                  </div>
                );
              if (line.type === "dim")
                return (
                  <div key={i} className="text-[#555]">
                    {line.label}
                  </div>
                );
              if (line.type === "info")
                return (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className={colorMap[line.key!] + " inline-flex items-center shrink-0"}>
                      {renderIcon(getIconForModule(line.key!), 14)}
                    </span>
                    <span className={colorMap[line.key!]}>{line.key}</span>
                    <span> {line.value}</span>
                  </div>
                );
              if (line.type === "palette")
                return (
                  <div key={i} className="text-[#555] flex items-center gap-1">
                    <span>│</span>
                    {paletteColors.map((c) => (
                      <span key={c} style={{ color: c }}>███</span>
                    ))}
                  </div>
                );
              return null;
            })}
            {visible >= lines.length && <span className="animate-blink text-[#78dba9]">█</span>}
          </pre>
        </div>
        <p className="mt-3 text-center text-xs text-[#555]">Click to replay</p>
      </div>
    </section>
  );
}
