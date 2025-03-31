import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  readTime: string
}

export function BlogPost({ title, excerpt, date, readTime }: BlogPostProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <Link href="#" className="block" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:border-zinc-700 h-full flex flex-col">
        <div className="space-y-1 mb-4">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span>{date}</span>
            <span>{readTime}</span>
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="text-sm text-zinc-400 flex-grow mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-zinc-500">
          <span className={`transition-all duration-300 ${isHovered ? "text-white" : ""}`}>Read article</span>
          <ArrowRight
            className={`ml-1 h-4 w-4 transition-all duration-300 ${isHovered ? "transform translate-x-1 text-white" : ""}`}
          />
        </div>
      </div>
    </Link>
  )
}
