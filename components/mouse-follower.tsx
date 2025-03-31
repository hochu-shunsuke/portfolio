"use client"

import { useEffect, useState } from "react"

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  // 初期化時にカーソル位置を取得
  useEffect(() => {
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
      // window.mouseXの参照は削除
    }, 100)

    return () => {
      window.removeEventListener("mousemove", initialPosition)
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timeout)
    }
  }, [])

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