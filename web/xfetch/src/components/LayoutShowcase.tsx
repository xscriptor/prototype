import { renderIcon, getIconForModule } from "./Icons";

const layouts = [
  {
    title: "Default (Classic)",
    desc: "Logo on the left, info on the right. Clean and familiar.",
    preview: (
      <>
        <span className="text-[#78dce8]">{renderIcon(getIconForModule("cpu"), 12)} cpu</span> AMD Ryzen 9 7950X (16) @ 4.50 GHz{"\n"}
        <span className="text-[#78dce8]">{renderIcon(getIconForModule("memory"), 12)} memory</span> 8.25 GiB / 31.20 GiB (26%){"\n"}
        <span className="text-[#78dce8]">{renderIcon(getIconForModule("disk"), 12)} disk</span> 256.4 GiB / 1.0 TiB (25%){"\n"}
        <span className="text-[#ffcb6b]">{renderIcon(getIconForModule("os"), 12)} os</span> Arch Linux x86_64
      </>
    ),
  },
  {
    title: "Pac-Man",
    desc: "Boxed layout with Pac-Man header and footer. Fun and retro.",
    preview: (
      <>
        <span className="text-[#f07178]">
          ╭─ <span className="text-[#ffcb6b]">ᗧ</span>{" "}
          <span className="text-[#f07178]">●</span>{" "}
          <span className="text-[#ff6b9d]">●</span>{" "}
          <span className="text-[#78dce8]">●</span>{" "}
          <span className="text-[#ffcb6b]">●</span> ────────────────╮
        </span>
        {"\n"}
        {renderIcon(getIconForModule("os"), 12)} Arch Linux{"\n"}
        {renderIcon(getIconForModule("uptime"), 12)} 2 hours, 15 mins{"\n"}
        <span className="text-[#f07178]">
          ╰────────── <span className="text-[#e1e4ed]">GAME OVER</span> ──────────╯
        </span>
      </>
    ),
  },
  {
    title: "Section",
    desc: "Grouped modules with clear section headers.",
    preview: (
      <>
        <span className="text-[#555]">Hardware</span>{"\n"}
        <span className="text-[#555]">│</span> {renderIcon(getIconForModule("cpu"), 12)} cpu: AMD Ryzen 9{"\n"}
        <span className="text-[#555]">│</span> {renderIcon(getIconForModule("memory"), 12)} memory: 16 GiB{"\n"}
        <span className="text-[#555]">Software</span>{"\n"}
        <span className="text-[#555]">│</span> {renderIcon(getIconForModule("os"), 12)} os: Arch Linux
      </>
    ),
  },
  {
    title: "Side Block",
    desc: "Keys and values in separate side-by-side boxes.",
    preview: (
      <>
        <span className="text-[#78dce8]">╭──────────╮</span>{" "}
        <span className="text-[#78dce8]">╭──────────────────────╮</span>{"\n"}
        <span className="text-[#78dce8]">│</span> {renderIcon(getIconForModule("cpu"), 12)}{" "}
        <span className="text-[#78dce8]">│</span>{" "}
        <span className="text-[#78dce8]">│</span> AMD Ryzen 9{" "}
        <span className="text-[#78dce8]">│</span>{"\n"}
        <span className="text-[#78dce8]">╰──────────╯</span>{" "}
        <span className="text-[#78dce8]">╰──────────────────────╯</span>
      </>
    ),
  },
  {
    title: "Tree",
    desc: "Hierarchical tree with nested groups. Great for organizing.",
    preview: (
      <>
        <span className="text-[#b388ff]">{renderIcon(getIconForModule("monitor"), 12)} OS</span>{"\n"}
        <span className="text-[#555]">├──</span>{" "}
        <span className="text-[#78dce8]">os</span> Arch Linux{"\n"}
        <span className="text-[#555]">└──</span>{" "}
        <span className="text-[#78dce8]">kernel</span> 6.6.1-arch1{"\n"}
        <span className="text-[#b388ff]">{renderIcon(getIconForModule("monitor"), 12)} PC</span>{"\n"}
        <span className="text-[#555]">├──</span>{" "}
        <span className="text-[#78dce8]">cpu</span> AMD Ryzen 9{"\n"}
        <span className="text-[#555]">└──</span>{" "}
        <span className="text-[#78dce8]">memory</span> 16 GiB
      </>
    ),
  },
  {
    title: "Box",
    desc: "All info enclosed in a rounded box.",
    preview: (
      <>
        <span className="text-[#555]">╭─────────────────────────────╮</span>{"\n"}
        <span className="text-[#555]">│</span> {renderIcon(getIconForModule("cpu"), 12)} cpu: AMD Ryzen 9{" "}
        <span className="text-[#555]">│</span>{"\n"}
        <span className="text-[#555]">│</span> {renderIcon(getIconForModule("memory"), 12)} memory: 16 GiB{" "}
        <span className="text-[#555]">│</span>{"\n"}
        <span className="text-[#555]">╰─────────────────────────────╯</span>
      </>
    ),
  },
];

export default function LayoutShowcase() {
  return (
    <section id="layouts" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <span className="mb-2 block font-mono text-xs uppercase tracking-wide text-[#dea584]">
          Display
        </span>
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold">Layout showcase</h2>
        <p className="mb-12 mt-4 max-w-lg text-[#8b91a8]">
          xfetch ships with 9 built-in layouts. Each has a distinct visual style for different preferences.
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {layouts.map((l) => (
            <div
              key={l.title}
              className="overflow-hidden rounded-xl border border-[#1e2130] bg-[#181b24] transition-all hover:-translate-y-0.5 hover:border-[#dea584]"
            >
              <pre className="border-b border-[#1e2130] bg-[#0a0c10] p-5 font-mono text-xs leading-relaxed flex flex-col">
                {l.preview}
              </pre>
              <div className="p-5">
                <h4 className="text-sm font-semibold">{l.title}</h4>
                <p className="mt-1 text-xs text-[#8b91a8]">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
