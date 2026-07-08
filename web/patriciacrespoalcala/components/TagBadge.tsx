import Link from "next/link"

interface TagBadgeProps {
  tag: string
  isCompact?: boolean
}

export default function TagBadge({ tag, isCompact = false }: TagBadgeProps) {
  return (
    <span
      className={`inline-block bg-wood-light/20 text-text-muted rounded-full font-body whitespace-nowrap transition-colors duration-200 hover:bg-wood-light/40 hover:text-text ${
        isCompact ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm"
      }`}
    >
      {tag}
    </span>
  )
}
