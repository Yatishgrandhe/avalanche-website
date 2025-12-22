'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
    text: string | string[]
    speed?: number
    delay?: number
    loop?: boolean
    cursor?: boolean
    className?: string
}

export default function Typewriter({
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

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const texts = Array.isArray(text) ? text : [text]
        const currentText = texts[textIndex % texts.length]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentIndex < currentText.length) {
                    setDisplayText((prev) => prev + currentText[currentIndex])
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
                    setTextIndex((prev) => prev + 1)
                }
            }
        }, isDeleting ? speed / 2 : speed)

        return () => clearTimeout(timeout)
    }, [currentIndex, isDeleting, text, speed, delay, loop, textIndex, mounted])

    if (!mounted) {
        return <span className={className}>{Array.isArray(text) ? text[0] : text}</span>
    }

    return (
        <span className={className}>
            {displayText}
            {cursor && <span className="animate-pulse">|</span>}
        </span>
    )
}
