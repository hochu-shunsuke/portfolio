"use client"

import { useState, useEffect } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeSnippetProps {
  title: string
  language: string
  code: string
}

export function CodeSnippet({ title, language, code }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // クライアントサイドでのみ実行されるように確認
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden group">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex space-x-1">
            <div className="h-3 w-3 rounded-full bg-zinc-700"></div>
            <div className="h-3 w-3 rounded-full bg-zinc-700"></div>
            <div className="h-3 w-3 rounded-full bg-zinc-700"></div>
          </div>
          <span className="text-sm font-medium text-zinc-400">{title}</span>
        </div>
        {isClient && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-zinc-500 hover:text-white hover:bg-zinc-800"
            onClick={handleCopy}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span className="sr-only">Copy code</span>
          </Button>
        )}
      </div>
      <div className="relative">
        <pre className="p-4 font-mono text-sm text-zinc-300 whitespace-pre-wrap break-all select-text">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}
