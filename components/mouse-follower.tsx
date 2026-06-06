"use client"

import { useEffect, useRef, useState } from "react"

export function MouseFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const isVisibleRef = useRef(false)
  const mousePos = useRef({ x: 0, y: 0 })
  const cursorPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      setIsMobile(isMobileDevice || window.innerWidth < 768)
    }
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const setVisible = (v: boolean) => {
      isVisibleRef.current = v
      if (cursorRef.current) cursorRef.current.style.opacity = v ? "0.7" : "0"
    }

    const moveCursor = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!isVisibleRef.current) setVisible(true)
    }

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseenter", () => setVisible(true))
    document.addEventListener("mouseleave", () => setVisible(false))

    let rafId: number
    const animate = () => {
      const dx = mousePos.current.x - cursorPos.current.x
      const dy = mousePos.current.y - cursorPos.current.y

      if (Math.abs(dx) >= 0.1 || Math.abs(dy) >= 0.1) {
        cursorPos.current.x += dx * 0.3
        cursorPos.current.y += dy * 0.3
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - 4}px, ${cursorPos.current.y - 4}px, 0)`
        }
      }
      rafId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      cancelAnimationFrame(rafId)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 rounded-full mix-blend-difference bg-white w-2 h-2 top-0 left-0 will-change-transform"
    />
  )
}

