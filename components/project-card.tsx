"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link?: string
}

export function ProjectCard({ title, description, tags, imageUrl, link = "#" }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden bg-zinc-900 border-zinc-800 transition-all duration-300 hover:border-zinc-700 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className={`h-full w-full object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}
        >
          <Button variant="outline" className="border-white/20 bg-black/50 text-white hover:bg-black/70">
            View Details <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-zinc-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400 border border-transparent group-hover:border-zinc-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={link}>
          <Button variant="ghost" className="px-0 text-zinc-400 hover:text-white">
            View Project <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

