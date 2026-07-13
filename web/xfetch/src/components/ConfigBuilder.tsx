"use client";

import { useState } from "react";
import { renderIcon, getIconForModule } from "./Icons";

const allModules = [
  { value: "os", label: "os" },
  { value: "kernel", label: "kernel" },
  { value: "hostname", label: "hostname" },
  { value: "uptime", label: "uptime" },
  { value: "packages", label: "packages" },
  { value: "shell", label: "shell" },
  { value: "terminal", label: "terminal" },
  { value: "wm", label: "wm" },
  { value: "cpu", label: "cpu" },
  { value: "gpu", label: "gpu" },
  { value: "memory", label: "memory" },
  { value: "disk", label: "disk" },
  { value: "battery", label: "battery" },
  { value: "local_ip", label: "local_ip" },
  { value: "palette", label: "palette" },
];

const layouts = [
  { value: "null", label: "Default (classic)" },
  { value: "pacman", label: "Pac-Man" },
  { value: "box", label: "Box" },
  { value: "section", label: "Section" },
  { value: "tree", label: "Tree" },
  { value: "side-block", label: "Side Block" },
  { value: "line", label: "Line" },
  { value: "dots", label: "Dots" },
  { value: "bottom_line", label: "Bottom Line" },
];

const defaults = new Set(["os", "kernel", "uptime", "packages", "shell", "wm", "cpu", "gpu", "memory", "disk", "palette"]);

export default function ConfigBuilder() {
  const [selected, setSelected] = useState<Set<string>>(defaults);
  const [layout, setLayout] = useState("null");

  const toggle = (value: string) => {
    const next = new Set(selected);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setSelected(next);
  };

  const modules = allModules.filter((m) => selected.has(m.value)).map((m) => JSON.stringify(m.value));

  const json = [
    "{",
    layout !== "null" ? `  "layout": ${JSON.stringify(layout)},` : "",
    '  "modules": [',
    modules.length ? `    ${modules.join(",\n    ")}` : "",
    "  ],",
    '  "show_colors": true',
    "}",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <section id="config" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <span className="mb-2 block font-mono text-xs uppercase tracking-wide text-[#dea584]">
          Customize
        </span>
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold">Configuration builder</h2>
        <p className="mb-12 mt-4 max-w-lg text-[#8b91a8]">
          Toggle modules and pick a layout to generate a config.jsonc.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm text-[#8b91a8]">Modules</p>
            <div className="flex flex-col gap-1">
              {allModules.map((m) => (
                <label
                  key={m.value}
                  className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-[#181b24]"
                >
                  <input
                    type="checkbox"
                    checked={selected.has(m.value)}
                    onChange={() => toggle(m.value)}
                    className="h-4 w-4 cursor-pointer appearance-none rounded border-2 border-[#22263a] bg-[#181b24] checked:border-[#dea584] checked:bg-[#dea584] checked:after:ml-0.5 checked:after:text-xs checked:after:content-['✓']"
                  />
                  <span className="text-[#dea584] inline-flex items-center">
                    {renderIcon(getIconForModule(m.value), 16)}
                  </span>
                  <span className="font-mono text-[#78dce8]">{m.label}</span>
                </label>
              ))}
            </div>

            <p className="mb-2 mt-6 text-sm text-[#8b91a8]">Layout</p>
            <select
              value={layout}
              onChange={(e) => setLayout(e.target.value)}
              className="w-full cursor-pointer rounded-md border border-[#22263a] bg-[#181b24] px-3 py-2.5 font-mono text-sm text-[#e1e4ed] transition-colors hover:bg-[#22263a]"
            >
              {layouts.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="mb-3 text-sm text-[#8b91a8]">Generated config.jsonc</p>
            <pre className="h-full min-h-[280px] overflow-x-auto rounded-xl border border-[#1e2130] bg-[#0a0c10] p-5 font-mono text-sm leading-relaxed">
              <code>{json}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
