"use client"

import { useEffect, useState, useRef } from "react"

function parseValue(raw: string): { num: number; prefix: string; suffix: string } {
  const match = raw.match(/^([+\-]?)(\d+)(.*)$/)
  if (!match) return { num: 0, prefix: "", suffix: raw }
  return { num: parseInt(match[2]), prefix: match[1], suffix: match[3] }
}

export default function AnimatedMetric({ value, label }: { value: string; label: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  const { num, prefix, suffix } = parseValue(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted.current) {
            counted.current = true
            const duration = 1200
            const steps = 40
            const increment = num / steps
            let current = 0
            const timer = setInterval(() => {
              current += increment
              if (current >= num) {
                setDisplay(num)
                clearInterval(timer)
              } else {
                setDisplay(Math.round(current))
              }
            }, duration / steps)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [num])

  return (
    <div ref={ref} className="text-center space-y-2">
      <p className="font-display text-3xl md:text-4xl text-neutral-900 tabular-nums">
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="text-sm text-neutral-500 leading-snug">{label}</p>
    </div>
  )
}
