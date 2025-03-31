"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface SkillBarProps {
  name: string
  percentage: number
}

export function SkillBar({ name, percentage }: SkillBarProps) {
  const [width, setWidth] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      setWidth(percentage)
    }
  }, [inView, percentage])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-zinc-500">{width}%</span>
      </div>
      <div className="h-2 bg-zinc-900 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-zinc-700 to-white transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

