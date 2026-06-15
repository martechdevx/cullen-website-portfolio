import { ReactNode, useRef, useState, MouseEvent as ReactMouseEvent } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('translate3d(0,0,0)')
  const [transition, setTransition] = useState(inactiveTransition)

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    const maxDist = Math.max(rect.width, rect.height) / 2 + padding
    if (dist < maxDist) {
      setTransform(`translate3d(${dx / strength}px,${dy / strength}px,0)`)
      setTransition(activeTransition)
    }
  }

  const handleMouseLeave = () => {
    setTransform('translate3d(0,0,0)')
    setTransition(inactiveTransition)
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform, transition, willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
