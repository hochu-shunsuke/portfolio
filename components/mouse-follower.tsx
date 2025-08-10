"use client"

import { useEffect, useState } from "react"

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

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

  // 初期化時にカーソル位置を取得
  useEffect(() => {
    // モバイルの場合はマウスフォロワーを無効化
    if (isMobile) return

    // 初期表示時に現在のマウス位置を取得するハンドラー
    const initialPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
      // 初期位置を取得したらこのイベントリスナーは削除
      window.removeEventListener("mousemove", initialPosition)
    }
    
    // 通常のマウス移動を追跡するハンドラー
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    // mouseenterハンドラー
    const handleMouseEnter = () => setIsVisible(true)
    
    // mouseleaveハンドラー
    const handleMouseLeave = () => setIsVisible(false)

    // イベントリスナーを追加
    window.addEventListener("mousemove", initialPosition, { once: true })
    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)

    // コンポーネントのマウント直後に表示状態を試行
    const timeout = setTimeout(() => {
      // マウスイベントがすでに発生していれば表示される
    }, 100)

    return () => {
      window.removeEventListener("mousemove", initialPosition)
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timeout)
    }
  }, [isMobile])

  // モバイルの場合は何も表示しない
  if (isMobile) {
    return null
  }

  return (
    <div
      className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: isVisible ? 0.7 : 0,
        width: "8px",
        height: "8px",
        backgroundColor: "white",
        left: "-4px",
        top: "-4px",
        // トランジションを位置とopacityの両方に適用
        transition: "opacity 200ms ease-out, transform 50ms linear"
      }}
    />
  )
}