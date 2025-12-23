'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { memo } from 'react'

interface TypewriterProps {
    text: string | string[]
    speed?: number
    delay?: number
    loop?: boolean
    cursor?: boolean
    className?: string
}

const Typewriter = memo(function Typewriter({
    text,
    speed = 100,
    delay = 1000,
    loop = true,
    cursor = true,
    className = '',
}: TypewriterProps) {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [textIndex, setTextIndex] = useState(0)
    const [mounted, setMounted] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    const texts = Array.isArray(text) ? text : [text]

    useEffect(() => {
        if (!mounted) return

        const currentText = texts[textIndex % texts.length]

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            if (!isDeleting) {
                if (currentIndex < currentText.length) {
                    setDisplayText((prev) => {
                        const nextChar = currentText[currentIndex]
                        return prev + nextChar
                    })
                    setCurrentIndex((prev) => prev + 1)
                } else if (loop) {
                    setTimeout(() => setIsDeleting(true), delay)
                }
            } else {
                if (currentIndex > 0) {
                    setDisplayText((prev) => prev.slice(0, -1))
                    setCurrentIndex((prev) => prev - 1)
                } else {
                    setIsDeleting(false)
                    setTextIndex((prev) => (prev + 1) % texts.length)
                }
            }
        }, isDeleting ? speed / 2 : speed)

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [currentIndex, isDeleting, textIndex, mounted, texts, speed, delay, loop])

    if (!mounted) {
        return <span className={className}>{texts[0]}</span>
    }

    return (
        <span className={className}>
            {displayText}
            {cursor && <span className="animate-pulse">|</span>}
        </span>
    )
})

export default Typewriter
