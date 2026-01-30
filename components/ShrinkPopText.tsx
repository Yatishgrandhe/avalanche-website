'use client'

import { useState, useEffect, useRef } from 'react'
import { memo } from 'react'

interface ShrinkPopTextProps {
  words: string[]
  interval?: number
  className?: string
}

const ShrinkPopText = memo(function ShrinkPopText({
  words,
  interval = 2000,
  className = '',
}: ShrinkPopTextProps) {
  const [index, setIndex] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const FADE_MS = 400
  const POP_MS = 550
  const TRANSITION_MS = FADE_MS + POP_MS

  useEffect(() => {
    if (words.length <= 1) return
    const id = setInterval(() => {
      setTransitioning(true)
      timeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length)
        setTransitioning(false)
      }, TRANSITION_MS)
    }, interval)
    return () => {
      clearInterval(id)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [words.length, interval])

  if (words.length === 0) return null
  const currentWord = words[index]
  const nextWord = words[(index + 1) % words.length]

  const wordClass = `inline-block text-center w-full ${className}`

  return (
    <div className="h-24 md:h-32 lg:h-40 w-full relative flex items-center justify-center overflow-visible py-2">
      {transitioning ? (
        <>
          <span
            key={`pop-${nextWord}`}
            className={`absolute inset-0 flex items-center justify-center origin-center ${wordClass} animate-pop-in-delayed`}
          >
            {nextWord}
          </span>
          <span
            key={`fade-${currentWord}`}
            className={`absolute inset-0 flex items-center justify-center origin-center ${wordClass} animate-fade-out pointer-events-none`}
          >
            {currentWord}
          </span>
        </>
      ) : (
        <span className={`block ${wordClass}`}>
          {currentWord}
        </span>
      )}
    </div>
  )
})

export default ShrinkPopText
