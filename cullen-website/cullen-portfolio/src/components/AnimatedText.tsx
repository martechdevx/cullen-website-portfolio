import { useRef, CSSProperties } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

function AnimatedChar({ char, progress, start, end }: { char: string; progress: MotionValue<number>; start: number; end: number }) {
  const opacity = useTransform(progress, [start, end], [0.15, 1])
  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  )
}

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          progress={scrollYProgress}
          start={i / chars.length}
          end={(i + 1) / chars.length}
        />
      ))}
    </p>
  )
}
