import { renderIcon, getIconForModule } from "./Icons";

const modules = [
  { name: "os", desc: "Operating system name, version & architecture" },
  { name: "kernel", desc: "Kernel version" },
  { name: "hostname", desc: "Machine hostname" },
  { name: "uptime", desc: "System uptime" },
  { name: "packages", desc: "Package count (pacman, dpkg, scoop, brew, etc.)" },
  { name: "shell", desc: "Current shell (bash, zsh, powershell)" },
  { name: "terminal", desc: "Terminal emulator" },
  { name: "wm", desc: "Window Manager / Desktop Environment" },
  { name: "cpu", desc: "CPU model, cores & frequency" },
  { name: "gpu", desc: "GPU model(s) — integrated & discrete" },
  { name: "memory", desc: "RAM used / total with percentage" },
  { name: "swap", desc: "Swap usage" },
  { name: "disk", desc: "Disk usage" },
  { name: "battery", desc: "Battery level & status (charging/discharging)" },
  { name: "user", desc: "Current username" },
  { name: "datetime", desc: "Current date & time" },
  { name: "local_ip", desc: "Local IP address" },
  { name: "palette", desc: "ANSI color palette (squares, circles, triangles, lines)" },
];

export default function ModulesTable() {
  return (
    <section className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <span className="mb-2 block font-mono text-xs uppercase tracking-wide text-[#dea584]">
          Reference
        </span>
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold">Available modules</h2>
        <p className="mb-12 mt-4 max-w-lg text-[#8b91a8]">
          Every piece of information xfetch can display. Mix, match, and reorder them in your config.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="text-left text-xs font-medium uppercase tracking-wider text-[#8b91a8]">
                <th className="px-4 py-2">Icon</th>
                <th className="px-4 py-2">Module</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((m) => (
                <tr key={m.name}>
                  <td className="px-4 py-2.5 text-[#dea584]">
                    {renderIcon(getIconForModule(m.name), 20)}
                  </td>
                  <td className="rounded-l-lg bg-[#181b24] px-4 py-2.5 font-mono text-[#78dce8]">{m.name}</td>
                  <td className="rounded-r-lg bg-[#181b24] px-4 py-2.5 text-[#8b91a8]">{m.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
