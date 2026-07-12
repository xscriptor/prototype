"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { BackgroundPaths } from "./components/BackgroundPaths";
import {
  TerminalWindow,
  MoonStars,
  Sun,
  CopySimple,
  Check,
  ArrowRight,
  GithubLogo,
  Sparkle,
  PuzzlePiece,
  SelectionForeground,
  HashStraight,
  Rocket,
} from "@phosphor-icons/react";

const PALETTES = [
  { name: "X", bg: "#050505", fg: "#f7f1ff", colors: ["#0a0a0a","#fc618d","#7bd88f","#fce566","#fd9353","#948ae3","#5ad4e6","#f7f1ff","#0f0f0f","#fc618d","#7bd88f","#fce566","#fd9353","#948ae3","#5ad4e6","#f7f1ff"], desc: "Dark theme with neon pink and cyan accents." },
  { name: "Madrid", bg: "#fafafa", fg: "#1a1a1a", colors: ["#fafafa","#990026","#007a28","#8a6408","#007a9e","#4d2699","#007a9e","#1a1a1a","#4d4d4d","#990026","#007a28","#8a6408","#007a9e","#4d2699","#007a9e","#1a1a1a"], desc: "Light theme with deep crimson and teal accents." },
  { name: "Lahabana", bg: "#19191a", fg: "#f7f1ff", colors: ["#19191a","#fc618d","#7bd88f","#e5ff9d","#fd9353","#948ae3","#5ad4e6","#f7f1ff","#19191a","#fc618d","#7bd88f","#e5ff9d","#fd9353","#948ae3","#5ad4e6","#f7f1ff"], desc: "Dark theme with lime-green highlight accents." },
  { name: "Miami", bg: "#000000", fg: "#f7f1ff", colors: ["#000000","#FF4C8B","#7FFFD4","#FFD84C","#00FFA8","#D36CFF","#47CFFF","#f7f1ff","#69676c","#FF4C8B","#7FFFD4","#FFD84C","#00FFA8","#D36CFF","#47CFFF","#f7f1ff"], desc: "True black background with neon synthwave accents." },
  { name: "Paris", bg: "#1a0a30", fg: "#f7f1ff", colors: ["#1a0a30","#fc618d","#7bd88f","#fce566","#a3f3ff","#c4bdff","#a3f3ff","#1a0a30","#c4bdff","#fc618d","#7bd88f","#fce566","#a3f3ff","#c4bdff","#a3f3ff","#f7f1ff"], desc: "Deep purple base paired with pastel accent tones." },
  { name: "Tokio", bg: "#1c1c1d", fg: "#f7f1ff", colors: ["#1c1c1d","#fc618d","#7bd88f","#fce566","#fd9353","#948ae3","#5ad4e6","#f7f1ff","#1c1c1d","#fc618d","#7bd88f","#fce566","#fd9353","#948ae3","#5ad4e6","#f7f1ff"], desc: "The flagship palette. Same colors as X with a right-prompt layout." },
  { name: "Oslo", bg: "#3f4451", fg: "#abb2bf", colors: ["#3f4451","#e05561","#8cc265","#d18f52","#4aa5f0","#c162de","#42b3c2","#e6e6e6","#4f5666","#ff616e","#a5e075","#f0a45d","#4dc4ff","#de73ff","#4cd1e0","#ffffff"], desc: "Slate grey base with muted developer-friendly tones." },
  { name: "Helsinki", bg: "#f8fafe", fg: "#544d40", colors: ["#f8fafe","#1faa9e","#733d9a","#2e70ad","#b55a0f","#3e9d21","#bd4c3d","#544d40","#b0a999","#009e91","#5a1f8a","#0f5ba2","#b23b00","#218c00","#b32e1f","#000000"], desc: "Light paper-like background with warm earthy tones." },
  { name: "Berlin", bg: "#000000", fg: "#cccccc", colors: ["#000000","#999999","#bbbbbb","#dddddd","#888888","#aaaaaa","#cccccc","#ffffff","#333333","#bbbbbb","#dddddd","#ffffff","#aaaaaa","#cccccc","#eeeeee","#ffffff"], desc: "Pure monochrome grayscale from black to white." },
  { name: "London", bg: "#ffffff", fg: "#333333", colors: ["#ffffff","#333333","#444444","#555555","#666666","#777777","#888888","#333333","#333333","#444444","#555555","#666666","#777777","#888888","#999999","#aaaaaa"], desc: "Inverted grayscale — light background with dark text." },
  { name: "Praha", bg: "#1a1a1a", fg: "#ffffff", colors: ["#1A1A1A","#FF5555","#B8E6A0","#FFE4A3","#BD93F9","#FF9AA2","#8BE9FD","#FFFFFF","#6272A4","#FF6E6E","#B8E6A0","#FFE4A3","#D6ACFF","#FF9AA2","#A4FFFF","#FFFFFF"], desc: "Dracula-inspired palette with purple and cyan highlights." },
  { name: "Bogota", bg: "#200b0a", fg: "#f7f1ff", colors: ["#200b0a","#fc618d","#7bd88f","#ffed89","#47e6ff","#ff9999","#47e6ff","#f7f1ff","#525053","#fc618d","#7bd88f","#ffed89","#47e6ff","#ff9999","#47e6ff","#f7f1ff"], desc: "Deep maroon base with neon cyan and pink accents." },
];

const TERMINAL_GROUPS = [
  {
    label: "Cross-platform",
    items: [
      { name: "Alacritty", dir: "alacritty" },
      { name: "Contour", dir: "contour" },
      { name: "Hyper", dir: "hyper" },
      { name: "Kitty", dir: "kitty" },
      { name: "Rio", dir: "rio" },
      { name: "Tabby", dir: "tabby" },
      { name: "WezTerm", dir: "wezterm" },
    ],
  },
  {
    label: "Linux",
    items: [
      { name: "Black Box", dir: "blackbox" },
      { name: "Foot", dir: "foot" },
      { name: "GNOME Terminal", dir: "gnome-terminal" },
      { name: "Guake", dir: "guake" },
      { name: "Konsole", dir: "konsole" },
      { name: "Ptyxis", dir: "ptyxis" },
      { name: "Terminator", dir: "terminator" },
      { name: "Tilix", dir: "tilix" },
      { name: "Wave", dir: "wave" },
      { name: "XFCE Terminal", dir: "xfce" },
    ],
  },
  {
    label: "macOS",
    items: [
      { name: "Ghostty", dir: "ghostty" },
      { name: "iTerm2", dir: "iterm" },
      { name: "Terminal.app", dir: "terminal.app" },
      { name: "Warp", dir: "warp" },
    ],
  },
  {
    label: "Windows",
    items: [
      { name: "Mintty", dir: "mintty" },
      { name: "MobaXterm", dir: "mobaxterm" },
      { name: "PowerShell", dir: "powershell" },
      { name: "PuTTY", dir: "putty" },
    ],
  },
  {
    label: "Android",
    items: [
      { name: "Termux", dir: "termux" },
    ],
  },
];

const PROMPTS = [
  { name: "Starship", icon: Rocket, desc: "Minimal, blazing-fast prompt in 12 TOML theme files. Cross-platform Shell.", url: "https://starship.rs" },
  { name: "Oh My Posh", icon: PuzzlePiece, desc: "Feature-rich prompt engine with 12 JSON theme files. Native Windows support.", url: "https://ohmyposh.dev" },
  { name: "Spaceship", icon: Sparkle, desc: "Lightweight ZSH prompt with 12 theme variants. Minimal overhead.", url: "https://spaceship-prompt.sh" },
  { name: "Bash / Zsh PS1", icon: SelectionForeground, desc: "Pure POSIX-compatible PS1 prompts in 12 shell script theme files.", url: "#" },
];

function useTheme() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setIsDark(stored ? stored === "dark" : true);
  }, []);
  const toggle = useCallback(() => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
      return next;
    });
  }, []);
  return { isDark, toggle };
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);
  return (
    <button
      onClick={copy}
      className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono cursor-pointer transition-all duration-200 border"
      style={{ background: "var(--bg-card)", borderColor: "var(--border)", color: copied ? "var(--green)" : "var(--fg-muted)" }}
    >
      {copied ? <Check size={14} weight="bold" /> : <CopySimple size={14} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function GlassNavbar({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  const navRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = useCallback((e: React.MouseEvent) => {
    const rect = navRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 sm:pt-5 pointer-events-none">
      <nav
        ref={navRef}
        onMouseMove={handleMouse}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setMouse({ x: 50, y: 50 }); }}
        className="pointer-events-auto relative flex items-center justify-between gap-2 sm:gap-6 px-4 sm:px-6 h-11 sm:h-12 rounded-full border backdrop-blur-xl transition-all duration-500 ease-out max-w-[calc(100vw-32px)] sm:max-w-lg lg:max-w-xl w-full overflow-hidden"
        style={{
          background: "color-mix(in srgb, var(--bg) 70%, transparent)",
          borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
          boxShadow: isHovered
            ? `0 12px 48px var(--overlay), inset 0 1px 0 color-mix(in srgb, var(--fg) 12%, transparent), 0 0 30px color-mix(in srgb, var(--pink) 8%, transparent)`
            : `0 8px 32px var(--overlay), inset 0 1px 0 color-mix(in srgb, var(--fg) 8%, transparent)`,
          scale: isHovered ? "1.02" : "1",
        }}
      >
        {/* Specular highlight that follows mouse */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, color-mix(in srgb, var(--fg) 10%, transparent) 0%, transparent 60%)`,
          }}
        />

        {/* Edge refraction highlight */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.6 : 0,
            background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, color-mix(in srgb, var(--fg) 6%, transparent) 0%, transparent 50%)`,
            mask: "linear-gradient(to bottom, transparent 30%, black 70%)",
            WebkitMask: "linear-gradient(to bottom, transparent 30%, black 70%)",
          }}
        />

        <a href="#" className="relative z-10 flex items-center gap-2 no-underline shrink-0" style={{ color: "var(--fg)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
            <path d="M13.6547 3.56163L8.91789 0.749977C8.64251 0.586821 8.32832 0.500732 8.00824 0.500732C7.68816 0.500732 7.37396 0.586821 7.09859 0.749977L2.36178 3.56163C2.08017 3.7296 1.84714 3.96798 1.68561 4.25334C1.52408 4.53869 1.43963 4.86118 1.44055 5.18908V10.8124C1.43877 11.1395 1.52198 11.4614 1.68201 11.7467C1.84205 12.032 2.07344 12.2708 2.35351 12.4398L7.09032 15.2515C7.36569 15.4146 7.67989 15.5007 7.99997 15.5007C8.32005 15.5007 8.63424 15.4146 8.90962 15.2515L13.6464 12.4398C13.9265 12.2708 14.1579 12.032 14.3179 11.7467C14.478 11.4614 14.5612 11.1395 14.5594 10.8124V5.18908C14.562 4.86277 14.4801 4.54134 14.3215 4.25613C14.163 3.97091 13.9332 3.73164 13.6547 3.56163ZM9.98632 12.3423V12.7458C9.986 12.7706 9.97948 12.795 9.96735 12.8167C9.95522 12.8383 9.93786 12.8566 9.91685 12.8699L9.67704 13.0071C9.639 13.027 9.60757 13.0071 9.60757 12.9542V12.5573C9.43807 12.6405 9.24411 12.6593 9.06178 12.6102C9.04762 12.6007 9.03722 12.5866 9.03239 12.5703C9.02755 12.554 9.02859 12.5365 9.03532 12.5209L9.12132 12.1554C9.12866 12.1246 9.14542 12.0968 9.16928 12.076C9.17614 12.0693 9.18394 12.0638 9.19244 12.0594C9.19844 12.0568 9.20492 12.0555 9.21146 12.0555C9.218 12.0555 9.22447 12.0568 9.23048 12.0594C9.39772 12.1042 9.57586 12.0817 9.72665 11.9966C9.83381 11.9442 9.92481 11.8638 9.99003 11.764C10.0552 11.6641 10.0923 11.5485 10.0971 11.4293C10.0971 11.2242 9.98466 11.1382 9.71342 11.1366C9.36941 11.1366 9.05186 11.0704 9.04359 10.5626C9.04754 10.3458 9.09941 10.1325 9.19548 9.93807C9.29156 9.74363 9.42946 9.57286 9.5993 9.43798V9.02947C9.59918 9.00433 9.6055 8.97957 9.61767 8.95757C9.62982 8.93557 9.64742 8.91704 9.66877 8.90377L9.90032 8.75657C9.93835 8.73672 9.96978 8.75657 9.96978 8.81115V9.21967C10.1116 9.1551 10.2699 9.13603 10.423 9.16509C10.4389 9.17416 10.4508 9.18892 10.4563 9.20639C10.4618 9.22387 10.4605 9.24279 10.4527 9.25936L10.3717 9.62157C10.3648 9.64915 10.3505 9.67432 10.3303 9.69434C10.3236 9.70156 10.3158 9.7077 10.3072 9.71253C10.2959 9.71631 10.2837 9.71631 10.2724 9.71253C10.1232 9.6798 9.967 9.70523 9.83581 9.78365C9.74024 9.825 9.6584 9.89266 9.59984 9.97876C9.54127 10.0649 9.50839 10.1658 9.50503 10.2699C9.50503 10.4551 9.60261 10.5114 9.93009 10.518C10.3684 10.518 10.5569 10.7165 10.5619 11.1564C10.5578 11.384 10.5042 11.608 10.4048 11.8127C10.3054 12.0175 10.1626 12.1982 9.98632 12.3423ZM12.4672 11.6625C12.47 11.6795 12.4682 11.697 12.4617 11.7131C12.4553 11.7291 12.4446 11.7431 12.4308 11.7535L11.2334 12.4812C11.2278 12.4859 11.2208 12.4888 11.2135 12.4894C11.2062 12.4899 11.1989 12.4881 11.1926 12.4843C11.1864 12.4804 11.1815 12.4747 11.1787 12.4679C11.1759 12.4611 11.1754 12.4536 11.1771 12.4465V12.1372C11.1779 12.1206 11.1835 12.1046 11.1932 12.0911C11.2029 12.0775 11.2162 12.0671 11.2317 12.0611L12.411 11.3549C12.4165 11.3501 12.4235 11.3472 12.4308 11.3467C12.4381 11.3461 12.4455 11.3479 12.4517 11.3518C12.458 11.3556 12.4628 11.3614 12.4656 11.3682C12.4684 11.375 12.4689 11.3825 12.4672 11.3896V11.6625ZM13.2941 4.74749L8.81204 7.51614C8.25302 7.84692 7.84119 8.20913 7.84119 8.88227V14.403C7.84119 14.8066 8.00658 15.0646 8.25467 15.144C8.17284 15.1594 8.08984 15.1677 8.00658 15.1688C7.74336 15.1682 7.48514 15.0968 7.25902 14.9621L2.52221 12.1504C2.29224 12.0111 2.10222 11.8147 1.97064 11.5802C1.83907 11.3458 1.7704 11.0812 1.77133 10.8124V5.18908C1.77012 4.91994 1.83864 4.65508 1.97024 4.4203C2.10183 4.18552 2.292 3.98884 2.52221 3.84941L7.25902 1.03776C7.48434 0.904297 7.7414 0.833879 8.00328 0.833879C8.26516 0.833879 8.52222 0.904297 8.74754 1.03776L13.4843 3.84941C13.6772 3.96611 13.8422 4.12352 13.9679 4.31063C14.0936 4.49775 14.177 4.71006 14.2121 4.93272C14.0583 4.59863 13.7043 4.50601 13.2925 4.74749H13.2941Z" fill="#ffc400"/>
            <g transform="translate(0 0) scale(1 1)">
              <path d="M1 11 L2 11 L5 14 L4 14 Z" fill="#ffc400"/>
              <path d="M4 11 L5 11 L2 14 L1 14 Z" fill="#ffc400"/>
            </g>
          </svg>
          <span className="font-semibold tracking-tight text-xs sm:text-sm hidden sm:inline">Terminal Xscriptor</span>
        </a>

        <div className="relative z-10 flex items-center gap-1 sm:gap-3">
          {["Palettes", "Terminals", "Prompts", "Install"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs sm:text-sm font-medium no-underline px-2 sm:px-3 py-1.5 rounded-full transition-all duration-300"
              style={{ color: "var(--fg-muted)" }}
            >
              {item}
            </a>
          ))}
          <button
            onClick={toggle}
            className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-0"
            style={{ background: "color-mix(in srgb, var(--fg) 8%, transparent)", color: "var(--fg)" }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={14} /> : <MoonStars size={14} />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default function Page() {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <BackgroundPaths />
      <div style={{ color: "var(--fg)" }} className="min-h-full relative z-10">
      {/* Floating glassmorphism navbar */}
      <GlassNavbar isDark={isDark} toggle={toggle} />

      <main>

        {/* Hero */}
        <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="text-xs tracking-[0.15em] mb-6 italic" style={{ color: "var(--pink)" }}>
                  XSCRIPTOR / TERMINAL
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-5" style={{ color: "var(--fg)" }}>
                  Color schemes for<br />
                  <span style={{ color: "var(--pink)" }}>every terminal</span>
                  <span className="cursor-blink" />
                </h1>
                <p className="text-base sm:text-lg max-w-lg leading-relaxed mb-8" style={{ color: "var(--fg-muted)" }}>
                  12 distinct color palettes, pre-configured for 27 terminal emulators and 4 prompt engines. One consistent look across every machine you own.
                </p>
                <div className="flex items-center gap-6 flex-wrap mb-10">
                  <a
                    href="#install"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
                    style={{ background: "var(--pink)" }}
                  >
                    <TerminalWindow size={18} weight="bold" />
                    Install Now
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="https://github.com/xscriptor/terminal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200"
                    style={{ borderColor: "var(--border)", color: "var(--fg)" }}
                  >
                    <GithubLogo size={18} />
                    View on GitHub
                  </a>
                </div>
                <div className="grid grid-cols-4 gap-6 max-w-md">
                  {[
                    { num: "12", label: "Palettes" },
                    { num: "27", label: "Terminals" },
                    { num: "4", label: "Engines" },
                    { num: "48", label: "Files" },
                  ].map(s => (
                    <div key={s.label}>
                      <div className="font-mono text-2xl font-bold" style={{ color: "var(--cyan)" }}>{s.num}</div>
                      <div className="text-xs" style={{ color: "var(--fg-muted)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="terminal-window shadow-2xl" style={{ boxShadow: "0 24px 80px rgba(0,0,0,.6)" }}>
                  <div className="terminal-header">
                    <span className="terminal-dot" />
                    <span className="terminal-dot" />
                    <span className="terminal-dot" />
                    <span className="font-mono text-xs ml-2" style={{ color: "#666" }}>~/terminal — zsh</span>
                  </div>
                  <div className="terminal-body min-h-[280px] sm:min-h-[320px]">
                    <div style={{ color: "#5ad4e6" }}>$ <span style={{ color: "#f7f1ff" }}>ls themes/</span></div>
                    <div className="mt-2 space-y-0.5">
                      <div><span style={{ color: "#fc618d" }}>x.toml</span>        <span style={{ color: "#666" }}># Dark neon</span></div>
                      <div><span style={{ color: "#7bd88f" }}>tokio.toml</span>     <span style={{ color: "#666" }}># Flagship</span></div>
                      <div><span style={{ color: "#fce566" }}>miami.toml</span>     <span style={{ color: "#666" }}># Synthwave</span></div>
                      <div><span style={{ color: "#fd9353" }}>paris.toml</span>     <span style={{ color: "#666" }}># Pastel</span></div>
                      <div><span style={{ color: "#948ae3" }}>oslo.toml</span>      <span style={{ color: "#666" }}># Muted</span></div>
                      <div><span style={{ color: "#5ad4e6" }}>helsinki.toml</span>  <span style={{ color: "#666" }}># Paper</span></div>
                    </div>
                    <div className="mt-4" style={{ color: "#5ad4e6" }}>
                      $ <span style={{ color: "#7bd88f" }}>./install.sh</span>
                    </div>
                    <div className="mt-2" style={{ color: "#666" }}>
                      <span style={{ color: "#5ad4e6" }}>✓</span> Theme applied to kitty<br />
                      <span style={{ color: "#5ad4e6" }}>✓</span> Starship prompt configured<br />
                      <span className="cursor-blink" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Palettes */}
        <section id="palettes" className="py-20 sm:py-28 relative">
          <div className="max-w-7xl mx-auto px-6">
            <RevealSection>
              <div className="max-w-lg mb-14">
                <div className="text-xs tracking-[0.15em] mb-4 italic" style={{ color: "var(--cyan)" }}>PALETTES</div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">12 distinct color stories</h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  Every palette is defined once in <code className="font-mono text-xs px-1.5 py-0.5 rounded" style={{ background: "var(--bg-alt)" }}>colors.md</code> and automatically propagated to every terminal and prompt engine via a template builder.
                </p>
              </div>
            </RevealSection>

            {/* Featured: X */}
            <RevealSection className="mb-6">
              <div
                className="glass rounded-2xl p-6 sm:p-8 relative overflow-hidden"
              >
                <div className="grid sm:grid-cols-3 gap-6 items-center">
                  <div className="sm:col-span-1">
                    <div className="flex items-center gap-3 mb-3">
                      <HashStraight size={20} weight="bold" style={{ color: "var(--pink)" }} />
                      <span className="text-lg font-bold">X</span>
                      <span className="font-mono text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--pink)", color: "#fff" }}>flagship</span>
                    </div>
                    <p className="text-sm" style={{ color: "var(--fg-muted)" }}>The original signature palette. Dark background with balanced neon accents. The default palette that all others derive from.</p>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex gap-1.5 mb-2">
                      {["#050505","#fc618d","#7bd88f","#fce566","#fd9353","#948ae3","#5ad4e6","#f7f1ff"].map((c, i) => (
                        <div key={i} className="flex-1 h-10 sm:h-12 rounded-lg" style={{ background: c, border: "1px solid rgba(255,255,255,.08)" }} />
                      ))}
                    </div>
                    <div className="flex gap-1.5">
                      {["#0f0f0f","#fc618d","#7bd88f","#fce566","#fd9353","#948ae3","#5ad4e6","#f7f1ff"].map((c, i) => (
                        <div key={i} className="flex-1 h-10 sm:h-12 rounded-lg" style={{ background: c, border: "1px solid rgba(255,255,255,.08)" }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Palette Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PALETTES.filter(p => p.name !== "X").map((p, i) => (
                <RevealSection key={p.name}>
                  <div
                    className="glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold">{p.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded border" style={{ background: p.bg, borderColor: "var(--border)" }} />
                        <span className="w-4 h-4 rounded border" style={{ background: p.fg, borderColor: "var(--border)" }} />
                      </div>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {p.colors.slice(0, 8).map((c, j) => (
                        <div key={j} className="flex-1 h-5 rounded-sm" style={{ background: c, border: "1px solid rgba(255,255,255,.06)" }} />
                      ))}
                    </div>
                    <div className="flex gap-1 mb-3">
                      {p.colors.slice(8, 16).map((c, j) => (
                        <div key={j} className="flex-1 h-5 rounded-sm" style={{ background: c, border: "1px solid rgba(255,255,255,.06)" }} />
                      ))}
                    </div>
                    <p className="text-xs" style={{ color: "var(--fg-muted)" }}>{p.desc}</p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Terminals */}
        <section id="terminals" className="py-20 sm:py-28 relative">
          <div className="max-w-7xl mx-auto px-6">
            <RevealSection>
              <div className="max-w-lg mb-14">
                <div className="text-xs tracking-[0.15em] mb-4 italic" style={{ color: "var(--green)" }}>TERMINALS</div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">27 emulators, one theme</h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  Every palette ships as a ready-to-use config file for each terminal below. Click any emulator to browse its theme files on GitHub.
                </p>
              </div>
            </RevealSection>

            <div className="space-y-8">
              {TERMINAL_GROUPS.map(group => (
                <RevealSection key={group.label}>
                  <div className="mb-3">
                    <span className="text-xs tracking-[0.15em] italic" style={{ color: "var(--fg-muted)" }}>{group.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(t => (
                      <a
                        key={t.name}
                        href={`https://github.com/xscriptor/terminal/tree/main/emulators/${t.dir}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm border transition-all duration-200 hover:-translate-y-0.5 no-underline"
                        style={{ background: "var(--bg-card)", borderColor: "var(--border)", color: "var(--fg)" }}
                      >
                        <TerminalWindow size={15} style={{ color: "var(--cyan)" }} />
                        {t.name}
                      </a>
                    ))}
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Prompts */}
        <section id="prompts" className="py-20 sm:py-28 relative">
          <div className="max-w-7xl mx-auto px-6">
            <RevealSection>
              <div className="max-w-lg mb-14">
                <div className="text-xs tracking-[0.15em] mb-4 italic" style={{ color: "var(--purple)" }}>PROMPTS</div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Four prompt engines</h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  Fully themed prompts for every major engine, all generated from the same canonical color-to-element mapping.
                </p>
              </div>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {PROMPTS.map((p, i) => (
                <RevealSection key={p.name}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 block no-underline h-full"
                    style={{ color: "var(--fg)" }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--bg-alt)", color: "var(--pink)" }}>
                      <p.icon size={20} />
                    </div>
                    <div className="font-bold mb-2">{p.name}</div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--fg-muted)" }}>{p.desc}</p>
                  </a>
                </RevealSection>
              ))}
            </div>

            <RevealSection>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                <img src="https://i.imgur.com/GViyo51.gif" alt="Prompt themes preview" className="w-full block" loading="lazy" />
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Install */}
        <section id="install" className="py-20 sm:py-28 relative">
          <div className="max-w-7xl mx-auto px-6">
            <RevealSection>
              <div className="max-w-lg mx-auto text-center mb-10">
                <div className="text-xs tracking-[0.15em] mb-4 italic" style={{ color: "var(--orange)" }}>INSTALL</div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">One command to start</h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  The universal installer detects your terminal and applies your chosen theme automatically.
                </p>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="max-w-xl mx-auto">
                <div className="terminal-window" style={{ boxShadow: "0 24px 80px rgba(0,0,0,.5)" }}>
                  <div className="terminal-header">
                    <span className="terminal-dot" />
                    <span className="terminal-dot" />
                    <span className="terminal-dot" />
                    <span className="font-mono text-xs ml-2" style={{ color: "#666" }}>install</span>
                  </div>
                  <div className="terminal-body relative">
                    <CopyButton text="wget -qO- https://raw.githubusercontent.com/xscriptor/terminal/main/emulators/install.sh | bash" />
                    <div className="pr-16">
                      <div style={{ color: "#5ad4e6" }}>$ <span style={{ color: "#f7f1ff" }}>curl -fsSL</span></div>
                      <div style={{ color: "#666" }}>  https://xscriptor.sh/terminal | bash</div>
                      <div className="mt-3" style={{ color: "#666" }}>
                        <span style={{ color: "#5ad4e6" }}>✓</span> Detected: kitty<br />
                        <span style={{ color: "#5ad4e6" }}>✓</span> Installed 12 themes<br />
                        <span className="cursor-blink" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs mt-4 text-center" style={{ color: "var(--fg-muted)" }}>
                  Or use the{" "}
                  <a href="https://github.com/xscriptor/terminal/tree/main/emulators" className="underline" style={{ color: "var(--cyan)" }}>per-terminal install scripts</a>
                  {" "}for manual setup.
                </p>
              </div>
            </RevealSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-10" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs" style={{ color: "var(--fg-muted)" }}>
              <span className="font-bold" style={{ color: "var(--pink)" }}>Terminal Xscriptor</span>
              <span aria-hidden="true">·</span>
              Tokio palette
            </div>
            <div className="flex items-center gap-5">
              <a href="https://github.com/xscriptor/terminal" target="_blank" rel="noopener noreferrer" style={{ color: "var(--fg-muted)" }} className="hover:opacity-80 transition-opacity">
                <GithubLogo size={18} />
              </a>
              <a href="https://dev.xscriptor.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--fg-muted)" }} className="hover:opacity-80 transition-opacity text-xs no-underline">
                dev.xscriptor.com
              </a>
              <a href="https://xscriptor.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--fg-muted)" }} className="hover:opacity-80 transition-opacity text-xs no-underline">
                xscriptor.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
