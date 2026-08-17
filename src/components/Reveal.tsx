import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** 延迟多少毫秒再开始动画，用于制造逐个出现的节奏感 */
  delay?: number
  className?: string
}

/**
 * 滚动进入视口时，让包裹的内容「淡入 + 上浮」。
 * 原理：IntersectionObserver 盯住这个 div，一旦有 15% 露出屏幕就加状态触发 CSS 过渡。
 */
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    // 老浏览器不支持 IntersectionObserver 时直接显示，避免内容永远看不见
    if (!element || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect() // 动画只播一次，播完就不再监听
        }
      },
      { threshold: 0.15 }, // 元素露出 15% 时触发
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
