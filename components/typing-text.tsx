'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface TypingTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function TypingText({ text, className = '', speed = 50, delay = 0 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const charIndexRef = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const delayTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    charIndexRef.current = 0
    setDisplayedText('')
    setIsComplete(false)

    const type = () => {
      if (charIndexRef.current < text.length) {
        setDisplayedText(text.slice(0, charIndexRef.current + 1))
        charIndexRef.current++
        timeoutRef.current = setTimeout(type, speed)
      } else {
        setIsComplete(true)
      }
    }

    delayTimeoutRef.current = setTimeout(type, delay)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current)
    }
  }, [text, speed, delay])

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <motion.span
          className="inline-block ml-1 w-1 h-full bg-current"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </span>
  )
}
