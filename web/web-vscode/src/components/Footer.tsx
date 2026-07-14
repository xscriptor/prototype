import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Products</span>
            <div className="mt-4 flex flex-col gap-2">
              <Link href="/" className="text-sm text-white/50 hover:text-white/80 transition-colors">Xscriptor Themes</Link>
              <Link href="/xglass" className="text-sm text-white/50 hover:text-white/80 transition-colors">XGlass</Link>
              <Link href="/x-dark-colors" className="text-sm text-white/50 hover:text-white/80 transition-colors">X Dark Colors</Link>
            </div>
          </div>
          <div>
            <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Resources</span>
            <div className="mt-4 flex flex-col gap-2">
              <a href="https://github.com/xscriptor/vscode" className="text-sm text-white/50 hover:text-white/80 transition-colors">GitHub</a>
              <a href="https://dev.xscriptor.com" className="text-sm text-white/50 hover:text-white/80 transition-colors">Documentation</a>
            </div>
          </div>
          <div>
            <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Community</span>
            <div className="mt-4 flex flex-col gap-2">
              <a href="https://github.com/xscriptor/vscode/issues" className="text-sm text-white/50 hover:text-white/80 transition-colors">Issues</a>
            </div>
          </div>
          <div>
            <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Legal</span>
            <div className="mt-4 flex flex-col gap-2">
              <Link href="#" className="text-sm text-white/50 hover:text-white/80 transition-colors">Privacy</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white/80 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-sm text-white/30">2026 Xscriptor. MIT License.</span>
          <div className="flex items-center gap-3">
            <a href="https://github.com/xscriptor" className="text-white/30 hover:text-white/60 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
