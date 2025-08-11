"use client"

import { useRef, useState, useEffect } from 'react'

interface UseScrollSectionProps {
  itemCount: number
  itemWidth?: number
  onScroll?: () => void
}

export function useScrollSection({ itemCount, itemWidth = 320, onScroll }: UseScrollSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const checkArrows = () => {
    if (scrollRef.current) {
      const element = scrollRef.current
      const isAtStart = element.scrollLeft <= 5
      const isAtEnd = element.scrollLeft >= element.scrollWidth - element.clientWidth - 5
      
      setShowLeftArrow(!isAtStart)
      setShowRightArrow(!isAtEnd)

      // 現在のインデックスを計算（スクロールインジケーター用）
      const index = Math.round(element.scrollLeft / itemWidth)
      setCurrentIndex(Math.min(index, itemCount - 1))

      // 外部のonScrollコールバック
      onScroll?.()
    }
  }

  useEffect(() => {
    checkArrows()
    window.addEventListener("resize", checkArrows)
    return () => window.removeEventListener("resize", checkArrows)
  }, [itemCount]) // itemCountが変更された時に再チェック

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
      setTimeout(checkArrows, 300)
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
      setTimeout(checkArrows, 300)
    }
  }

  return {
    scrollRef,
    showLeftArrow,
    showRightArrow,
    currentIndex,
    scrollLeft,
    scrollRight,
    checkArrows
  }
}
