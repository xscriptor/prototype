"use client";

import { useRef, useState } from "react";

export default function Hero() {
  const logoRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = logoRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    setRotate({ x: -dy * 25, y: dx * 25 });
  };

  const handleLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <header
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20 text-center"
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% -20%, rgba(222,165,132,0.08) 0%, transparent 60%)",
        }}
      />
      <div
        ref={logoRef}
        className="mb-6 transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `perspective(600px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        <svg viewBox="0 0 200 200" width={80} height={80} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="xgrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dea584" />
              <stop offset="100%" stopColor="#ffa500" />
            </linearGradient>
          </defs>
          <line x1="30" y1="30" x2="170" y2="170" stroke="url(#xgrad3)" strokeWidth={24} strokeLinecap="round" />
          <line x1="170" y1="30" x2="30" y2="170" stroke="url(#xgrad3)" strokeWidth={24} strokeLinecap="round" />
        </svg>
      </div>
      <h1 className="animate-fade-in-up font-mono text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-none tracking-tighter">
        <span className="bg-gradient-to-r from-[#dea584] to-[#ffa500] bg-clip-text text-transparent">
          xfetch
        </span>
      </h1>
      <p className="animate-fade-in-up-delay-1 mt-4 max-w-xl text-lg text-[#8b91a8]">
        A cross-platform system information fetching tool inspired by fastfetch and neofetch — written in Rust.
        Fast, customizable, beautiful.
      </p>
      <div className="animate-fade-in-up-delay-2 mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="#install"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#dea584] to-[#ffa500] px-7 py-3 text-sm font-semibold text-[#0f1117] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(222,165,132,0.3)]"
        >
          Install now
        </a>
        <a
          href="#terminal"
          className="inline-flex items-center gap-2 rounded-lg border border-[#22263a] bg-[#181b24] px-7 py-3 text-sm font-semibold text-[#e1e4ed] transition-all hover:-translate-y-0.5 hover:bg-[#22263a]"
        >
          See it live
        </a>
        <a
          href="https://github.com/xscriptor/xfetch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[#22263a] bg-[#181b24] px-7 py-3 text-sm font-semibold text-[#e1e4ed] transition-all hover:-translate-y-0.5 hover:bg-[#22263a]"
        >
          <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
          GitHub
        </a>
      </div>
    </header>
  );
}
