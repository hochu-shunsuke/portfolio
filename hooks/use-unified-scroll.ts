"use client"

import { useRef, useState, useEffect } from 'react'

interface UseUnifiedScrollProps {
  itemCount: number
  itemWidth?: number
  scrollAmount?: number
  enableDrag?: boolean
  onScroll?: () => void
}

export function useUnifiedScroll({ 
  itemCount, 
  itemWidth = 320, 
  scrollAmount = 300,
  enableDrag = false,
  onScroll 
}: UseUnifiedScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // マウスドラッグ用の状態
  const [isGrabbing, setIsGrabbing] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeftState] = useState(0)

  const checkArrows = () => {
    if (scrollRef.current) {
      const element = scrollRef.current
      const isAtStart = element.scrollLeft <= 5
      const isAtEnd = element.scrollLeft >= element.scrollWidth - element.clientWidth - 5
      
      setShowLeftArrow(!isAtStart)
      setShowRightArrow(!isAtEnd)

      // 現在のインデックスを計算
      const index = Math.round(element.scrollLeft / itemWidth)
      setCurrentIndex(Math.min(index, itemCount - 1))

      onScroll?.()
    }
  }

  useEffect(() => {
    checkArrows()
    window.addEventListener("resize", checkArrows)
    return () => window.removeEventListener("resize", checkArrows)
  }, [itemCount])

  // スクロールボタン用の関数
  const scrollLeftButton = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      setTimeout(checkArrows, 300)
    }
  }

  const scrollRightButton = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      setTimeout(checkArrows, 300)
    }
  }

  // マウスドラッグ用のイベントハンドラー
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!enableDrag || !scrollRef.current) return
    
    setIsGrabbing(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeftState(scrollRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!enableDrag || !isGrabbing || !scrollRef.current) return
    
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    if (!enableDrag) return
    setIsGrabbing(false)
  }

  const handleMouseLeave = () => {
    if (!enableDrag) return
    setIsGrabbing(false)
  }

  // ドラッグ用のプロパティ
  const dragProps = enableDrag ? {
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseLeave,
    style: { cursor: isGrabbing ? 'grabbing' : 'grab' }
  } : {}

  return {
    scrollRef,
    showLeftArrow,
    showRightArrow,
    currentIndex,
    scrollLeft: scrollLeftButton,
    scrollRight: scrollRightButton,
    checkArrows,
    isGrabbing,
    dragProps
  }
}
