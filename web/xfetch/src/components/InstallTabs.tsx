"use client";

import { useState } from "react";

const tabs = [
  { id: "linux", label: "Linux / macOS" },
  { id: "windows", label: "Windows" },
  { id: "source", label: "Build from source" },
  { id: "arch", label: "Arch Linux" },
];

const content: Record<string, string> = {
  linux: `# One-liner (curl)
curl -fsSL https://raw.githubusercontent.com/xscriptor/xfetch/main/install.sh | bash

# Custom prefix
bash <(curl -fsSL ...) --prefix /usr/local

# From local clone
git clone https://github.com/xscriptor/xfetch.git
cd xfetch && bash install.sh --local`,

  windows: `# PowerShell one-liner
irm https://raw.githubusercontent.com/xscriptor/xfetch/main/install.ps1 | iex`,

  source: `# Clone & build manually
git clone https://github.com/xscriptor/xfetch.git
cd xfetch
cargo build --release

# Binary → target/release/xfetch
cp target/release/xfetch ~/.local/bin/

# Config files
mkdir -p ~/.config/xfetch
cp configs/config.jsonc ~/.config/xfetch/config.jsonc`,

  arch: `# Using the PKGBUILD in the repo
git clone https://github.com/xscriptor/xfetch.git
cd xfetch
makepkg -si

# Installed to /usr/bin/xfetch
pacman -R xfetch-git   # to uninstall`,
};

export default function InstallTabs() {
  const [active, setActive] = useState("linux");

  return (
    <section id="install" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <span className="mb-2 block font-mono text-xs uppercase tracking-wide text-[#dea584]">
          ⬇ Get started
        </span>
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold">Installation</h2>
        <p className="mb-8 mt-4 max-w-lg text-[#8b91a8]">
          Choose your platform. The quick installer handles everything — including Rust setup if needed.
        </p>

        <div className="flex gap-0.5">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`rounded-t-lg border border-[#1e2130] border-b-0 px-4 py-2.5 font-mono text-xs transition-all ${
                active === t.id
                  ? "bg-[#22263a] text-[#e1e4ed]"
                  : "bg-[#181b24] text-[#8b91a8] hover:bg-[#22263a]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <pre className="overflow-x-auto rounded-b-xl rounded-tr-xl border border-[#1e2130] bg-[#0a0c10] p-5 font-mono text-sm leading-relaxed">
          <code>
            {content[active].split("\n").map((line, i) => {
              if (line.trim().startsWith("#"))
                return (
                  <span key={i} className="block text-[#5a5f7a]">
                    {line}
                  </span>
                );
              return <span key={i} className="block">{line}</span>;
            })}
          </code>
        </pre>

        <div className="mt-12 text-center">
          <p className="mb-3 text-sm text-[#8b91a8]">After install, just run:</p>
          <pre className="mx-auto inline-block rounded-xl border border-[#1e2130] bg-[#0a0c10] px-6 py-3 font-mono text-sm leading-relaxed text-left">
            <span className="text-[#78dba9]">$</span> xfetch
            {"\n"}
            <span className="text-[#78dba9]">$</span> xfetch --version
            {"\n"}
            <span className="text-[#78dba9]">$</span> xfetch --config ~/.config/xfetch/my-config.jsonc
            {"\n"}
            <span className="text-[#78dba9]">$</span> xfetch --gen-config
          </pre>
        </div>
      </div>
    </section>
  );
}
