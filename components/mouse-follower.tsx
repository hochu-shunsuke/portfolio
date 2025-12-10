"use client"

import { useEffect, useRef, useState } from "react"

export function MouseFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  // 現在のマウス位置とカーソル位置をRefで管理（再レンダリング防止）
  const mousePos = useRef({ x: 0, y: 0 })
  const cursorPos = useRef({ x: 0, y: 0 })

  // モバイルデバイス検出
  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      const isSmallScreen = window.innerWidth < 768 // md breakpoint
      setIsMobile(isMobileDevice || isSmallScreen)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  // カーソル位置の追跡とアニメーション
  useEffect(() => {
    if (isMobile) return

    const moveCursor = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    let rafId: number

    const animate = () => {
      // Lerp (Linear Interpolation) で滑らかに追従
      const dx = mousePos.current.x - cursorPos.current.x
      const dy = mousePos.current.y - cursorPos.current.y
      
      // 最適化: 動きが非常に小さい場合はDOM更新をスキップ
      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
        rafId = requestAnimationFrame(animate)
        return
      }

      cursorPos.current.x += dx * 0.3
      cursorPos.current.y += dy * 0.3

      if (cursorRef.current) {
        // translate3d でGPUアクセラレーションを有効化
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - 4}px, ${cursorPos.current.y - 4}px, 0)`
        cursorRef.current.style.opacity = isVisible ? "0.7" : "0"
      }
      
      rafId = requestAnimationFrame(animate)
    }
    
    animate()

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(rafId)
    }
  }, [isMobile, isVisible])

  if (isMobile) return null

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 rounded-full mix-blend-difference bg-white w-2 h-2 top-0 left-0 will-change-transform"
    />
  )
}

