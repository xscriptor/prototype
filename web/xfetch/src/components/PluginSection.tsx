export default function PluginSection() {
  return (
    <section id="plugins" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <span className="mb-2 block font-mono text-xs uppercase tracking-wide text-[#dea584]">
          Ecosystem
        </span>
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold">Plugin system</h2>
        <p className="mb-8 mt-4 max-w-lg text-[#8b91a8]">
          xfetch communicates with external plugins via JSON over stdin/stdout. Install, list, and remove
          plugins with simple CLI commands.
        </p>

        <pre className="mb-10 overflow-x-auto rounded-xl border border-[#1e2130] bg-[#0a0c10] p-5 font-mono text-sm leading-relaxed">
          <code>
            <span className="text-[#5a5f7a]"># Install from local path</span>{"\n"}
            xfetch plugin install ./plugins/animate-logo{"\n\n"}
            <span className="text-[#5a5f7a]"># Install from default remote repo</span>{"\n"}
            xfetch plugin install my-plugin{"\n\n"}
            <span className="text-[#5a5f7a]"># List installed</span>{"\n"}
            xfetch plugin list{"\n\n"}
            <span className="text-[#5a5f7a]"># Remove</span>{"\n"}
            xfetch plugin remove animate-logo
          </code>
        </pre>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#1e2130] bg-[#181b24] p-6">
            <h4 className="font-mono text-sm text-[#dea584]">animate-logo</h4>
            <p className="mt-2 text-xs text-[#8b91a8]">
              Animates ASCII logos with multiple color effects via JSON protocol.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["sweep", "wave", "rainbow", "sparkle", "breathing", "frame"].map((s) => (
                <span
                  key={s}
                  className="rounded bg-[#22263a] px-2 py-0.5 font-mono text-[10px] text-[#8b91a8]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[#1e2130] bg-[#181b24] p-6">
            <h4 className="font-mono text-sm text-[#dea584]">github-stats</h4>
            <p className="mt-2 text-xs text-[#8b91a8]">
              Fetches GitHub user stats via the public API.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["github", "api"].map((s) => (
                <span
                  key={s}
                  className="rounded bg-[#22263a] px-2 py-0.5 font-mono text-[10px] text-[#8b91a8]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[#1e2130] bg-[#181b24] p-6">
            <h4 className="font-mono text-sm text-[#dea584]">Custom plugins</h4>
            <p className="mt-2 text-xs text-[#8b91a8]">
              Any executable reading JSON from stdin and writing JSON to stdout works.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["JSON protocol", "any language"].map((s) => (
                <span
                  key={s}
                  className="rounded bg-[#22263a] px-2 py-0.5 font-mono text-[10px] text-[#8b91a8]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-[#8b91a8]">
          Plugin discovery: explicit path →{" "}
          <code className="text-[#dea584]">xfetch-plugin-&lt;name&gt;</code> in PATH →{" "}
          <code className="text-[#dea584]">~/.config/xfetch/plugins/</code> →{" "}
          <code className="text-[#dea584]">./plugins/&lt;name&gt;/target/release</code>
        </p>
      </div>
    </section>
  );
}
