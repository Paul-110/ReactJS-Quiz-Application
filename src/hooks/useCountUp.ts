import { useState, useEffect } from 'react'

export const useCountUp = (end: number, duration: number = 1500) => {
  const [count, setCount] = useState(0)
  const frameRate = 1000 / 60
  const totalFrames = Math.round(duration / frameRate)

  useEffect(() => {
    let frame = 0
    const counter = setInterval(() => {
      frame++
      // Ease-out effect for a smoother animation
      const progress = 1 - (1 - frame / totalFrames) ** 3
      const currentCount = Math.round(end * progress)

      if (frame === totalFrames) {
        setCount(end)
        clearInterval(counter)
      } else {
        setCount(currentCount)
      }
    }, frameRate)

    return () => clearInterval(counter)
  }, [end, duration, totalFrames])

  return count
}