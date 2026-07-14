export default function GlowBackground({
  color1 = "#fc618d",
  color2 = "#fce566",
  className = "",
}: {
  color1?: string;
  color2?: string;
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 -z-20 overflow-hidden ${className}`}>
      <div
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.08] blur-[120px]"
        style={{ background: `radial-gradient(circle, ${color1}, transparent)` }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.06] blur-[100px]"
        style={{ background: `radial-gradient(circle, ${color2}, transparent)` }}
      />
      <div
        className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full opacity-[0.04] blur-[80px]"
        style={{ background: `radial-gradient(circle, ${color1}, transparent)` }}
      />
    </div>
  );
}
