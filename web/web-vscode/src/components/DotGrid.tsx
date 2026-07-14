export default function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute inset-0 dot-grid-sm opacity-40" />
    </div>
  );
}
