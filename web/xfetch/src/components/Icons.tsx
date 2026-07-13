import React, { type SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { size?: number };

const s = (props: Props, size = 20) => ({ width: props.size ?? size, height: props.size ?? size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, ...props });

export function IconChip(props: Props) {
  return <svg {...s(props, 22)}><rect x="4" y="4" width="16" height="16" rx="2" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /><line x1="9" y1="9" x2="15" y2="15" /><line x1="9" y1="15" x2="15" y2="9" /></svg>;
}

export function IconGlobe(props: Props) {
  return <svg {...s(props)}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
}

export function IconLayout(props: Props) {
  return <svg {...s(props)}><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>;
}

export function IconGear(props: Props) {
  return <svg {...s(props)}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>;
}

export function IconPalette(props: Props) {
  return <svg {...s(props)}><circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="1.5" fill="currentColor" /><circle cx="17.5" cy="15.5" r="1.5" fill="currentColor" /><circle cx="13.5" cy="19.5" r="1.5" fill="currentColor" /><circle cx="8.5" cy="16.5" r="1.5" fill="currentColor" /><circle cx="8.5" cy="10.5" r="1.5" fill="currentColor" /><path d="M12 2a10 10 0 0 0-9.5 12.3 2 2 0 0 0 1.93 1.7H6a2 2 0 0 1 2 2 2 2 0 0 0 2 2h2a2 2 0 0 1 2 2 2 2 0 0 0 1.73 2.02A10 10 0 0 0 22 12 10 10 0 0 0 12 2z" /></svg>;
}

export function IconPuzzle(props: Props) {
  return <svg {...s(props)}><path d="M19.5 9.5a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z" /><path d="M9.5 4.5a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z" /><path d="M14.5 14.5a2.5 2.5 0 0 0-2.5-2.5 2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5z" /><path d="M4.5 14.5a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z" /><line x1="7" y1="7" x2="9.5" y2="9.5" /><line x1="9.5" y1="14.5" x2="12" y2="12" /><line x1="14.5" y1="9.5" x2="17" y2="7" /></svg>;
}

export function IconPlay(props: Props) {
  return <svg {...s(props)}><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" /></svg>;
}

export function IconText(props: Props) {
  return <svg {...s(props)}><polyline points="4 7 4 4 20 4 20 7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" /></svg>;
}

export function IconMonitor(props: Props) {
  return <svg {...s(props)}><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>;
}

export function IconTerminal(props: Props) {
  return <svg {...s(props)}><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>;
}

export function IconHash(props: Props) {
  return <svg {...s(props)}><line x1="4" y1="9" x2="20" y2="9" /><line x1="4" y1="15" x2="20" y2="15" /><line x1="10" y1="3" x2="8" y2="21" /><line x1="16" y1="3" x2="14" y2="21" /></svg>;
}

export function IconClock(props: Props) {
  return <svg {...s(props)}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}

export function IconBox(props: Props) {
  return <svg {...s(props)}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>;
}

export function IconWindow(props: Props) {
  return <svg {...s(props)}><rect x="2" y="3" width="20" height="18" rx="2" /><line x1="6" y1="7" x2="6.01" y2="7" /><line x1="10" y1="7" x2="10.01" y2="7" /></svg>;
}

export function IconCpu(props: Props) {
  return <svg {...s(props, 22)}><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="8" y="8" width="8" height="8" rx="1" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>;
}

export function IconGpu(props: Props) {
  return <svg {...s(props)}><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="6" y1="10" x2="6" y2="14" /><line x1="10" y1="10" x2="10" y2="14" /><line x1="14" y1="10" x2="14" y2="14" /><line x1="18" y1="10" x2="18" y2="14" /></svg>;
}

export function IconMemory(props: Props) {
  return <svg {...s(props)}><rect x="4" y="6" width="16" height="12" rx="1" /><line x1="8" y1="6" x2="8" y2="18" /><line x1="12" y1="6" x2="12" y2="18" /><line x1="16" y1="6" x2="16" y2="18" /></svg>;
}

export function IconDisk(props: Props) {
  return <svg {...s(props)}><ellipse cx="12" cy="12" rx="10" ry="4" /><path d="M2 12v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-8" /><path d="M2 12v-2a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2" /></svg>;
}

export function IconBattery(props: Props) {
  return <svg {...s(props)}><rect x="1" y="6" width="18" height="12" rx="2" /><line x1="23" y1="10" x2="23" y2="14" /><line x1="7" y1="10" x2="7" y2="14" /><line x1="11" y1="10" x2="11" y2="14" /><line x1="15" y1="10" x2="15" y2="14" /></svg>;
}

export function IconUser(props: Props) {
  return <svg {...s(props)}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
}

export function IconCalendar(props: Props) {
  return <svg {...s(props)}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}

export function IconNetwork(props: Props) {
  return <svg {...s(props)}><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" /></svg>;
}

export function IconFolder(props: Props) {
  return <svg {...s(props)}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>;
}

export function IconTag(props: Props) {
  return <svg {...s(props)}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>;
}

export function IconAppWindow(props: Props) {
  return <svg {...s(props)}><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>;
}

export function IconXLogo(props: Props) {
  return <svg {...s(props, 80)} viewBox="0 0 200 200">
    <defs>
      <linearGradient id="xgrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#dea584" />
        <stop offset="100%" stopColor="#ffa500" />
      </linearGradient>
    </defs>
    <line x1="30" y1="30" x2="170" y2="170" stroke="url(#xgrad2)" strokeWidth={24} strokeLinecap="round" />
    <line x1="170" y1="30" x2="30" y2="170" stroke="url(#xgrad2)" strokeWidth={24} strokeLinecap="round" />
  </svg>;
}

export function IconGithub(props: Props) {
  return <svg {...s(props, 18)} viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></svg>;
}

const iconMap: Record<string, (props: Props) => React.ReactElement> = {
  chip: IconChip, globe: IconGlobe, layout: IconLayout, gear: IconGear,
  palette: IconPalette, puzzle: IconPuzzle, play: IconPlay, text: IconText,
  monitor: IconMonitor, terminal: IconTerminal, hash: IconHash, clock: IconClock,
  box: IconBox, window: IconWindow, cpu: IconCpu, gpu: IconGpu,
  memory: IconMemory, disk: IconDisk, battery: IconBattery, user: IconUser,
  calendar: IconCalendar, network: IconNetwork, folder: IconFolder, tag: IconTag,
  appwindow: IconAppWindow, xlogo: IconXLogo,
};

export function renderIcon(name: string, size = 20, className?: string): React.ReactElement | null {
  const Comp = iconMap[name];
  if (!Comp) return null;
  return <Comp size={size} className={className} />;
}

export function getIconForModule(module: string): string {
  const m: Record<string, string> = {
    os: "monitor", kernel: "hash", hostname: "tag", uptime: "clock",
    packages: "box", shell: "terminal", terminal: "monitor", wm: "window",
    cpu: "cpu", gpu: "gpu", memory: "memory", swap: "memory",
    disk: "disk", battery: "battery", user: "user", datetime: "calendar",
    local_ip: "network", palette: "palette",
  };
  return m[module] ?? "chip";
}

export function getIconForFeature(title: string): string {
  const m: Record<string, string> = {
    "System information": "chip", "Cross-platform": "globe",
    "Multiple layouts": "layout", "JSONC config": "gear",
    "Color palette": "palette", "Plugin system": "puzzle",
    "Logo animation": "play", "NERD Font icons": "text",
    "ASCII & image logos": "terminal",
  };
  return m[title] ?? "chip";
}
