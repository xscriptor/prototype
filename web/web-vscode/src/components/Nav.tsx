"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const links = [
  { href: "/", label: "Xscriptor Themes" },
  { href: "/xglass", label: "XGlass" },
  { href: "/x-dark-colors", label: "X Dark Colors" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50">
      <div className="glass rounded-2xl px-4 h-12 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#fc618d] to-[#fce566] flex items-center justify-center text-[9px] font-bold text-black group-hover:scale-105 transition-transform">
            X
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 text-xs rounded-lg transition-colors"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill-v2"
                    className="absolute inset-0 bg-white/[0.08] rounded-lg border border-white/[0.08]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? "text-white" : "text-white/50 hover:text-white/80"}`}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
