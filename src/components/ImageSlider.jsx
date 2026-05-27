import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * Reusable full-width auto-playing image slider with fade/slide transitions.
 *
 * Props:
 *  images      – array of { src, caption? }
 *  height      – Tailwind height class, e.g. 'h-[420px]'  (default 'h-[460px]')
 *  autoPlay    – boolean (default true)
 *  interval    – ms between slides (default 4000)
 *  overlay     – boolean: show dark overlay for text readability (default true)
 *  mode        – 'fade' | 'slide'  (default 'fade')
 *  showDots    – boolean (default true)
 *  showArrows  – boolean (default true)
 *  className   – extra wrapper classes
 */
export default function ImageSlider({
  images = [],
  height = 'h-[460px]',
  autoPlay = true,
  interval = 4000,
  overlay = true,
  mode = 'fade',
  showDots = true,
  showArrows = true,
  className = '',
  children,
}) {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const [transitioning, setTransitioning] = useState(false)
  const timerRef = useRef(null)

  const count = images.length
  if (count === 0) return null

  const goTo = useCallback(
    (idx) => {
      if (transitioning || idx === current) return
      setPrev(current)
      setCurrent(idx)
      setTransitioning(true)
      setTimeout(() => {
        setPrev(null)
        setTransitioning(false)
      }, 600)
    },
    [current, transitioning]
  )

  const next = useCallback(() => goTo((current + 1) % count), [current, count, goTo])
  const back = useCallback(() => goTo((current - 1 + count) % count), [current, count, goTo])

  useEffect(() => {
    if (!autoPlay) return
    timerRef.current = setInterval(next, interval)
    return () => clearInterval(timerRef.current)
  }, [autoPlay, interval, next])

  const resetTimer = () => {
    clearInterval(timerRef.current)
    if (autoPlay) timerRef.current = setInterval(next, interval)
  }

  const handleNext = () => { next(); resetTimer() }
  const handleBack = () => { back(); resetTimer() }
  const handleDot  = (i) => { goTo(i); resetTimer() }

  return (
    <div className={`relative overflow-hidden rounded-2xl ${height} ${className}`}>
      {/* Slides */}
      {images.map((img, i) => {
        let visibility = 'opacity-0 scale-105'
        if (i === current) visibility = 'opacity-100 scale-100'
        if (mode === 'slide') {
          if (i === current) visibility = 'translate-x-0 opacity-100'
          else if (i === prev) visibility = '-translate-x-full opacity-0'
          else visibility = 'translate-x-full opacity-0'
        }
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${visibility}`}
          >
            <img
              src={img.src}
              alt={img.caption || `NMM photo ${i + 1}`}
              className="w-full h-full object-cover"
            />
            {overlay && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            )}
            {img.caption && (
              <div className="absolute bottom-4 left-4 right-12">
                <span className="text-white/80 text-xs bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  {img.caption}
                </span>
              </div>
            )}
          </div>
        )
      })}

      {/* Overlay content (children) */}
      {children && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {children}
        </div>
      )}

      {/* Arrows */}
      {showArrows && count > 1 && (
        <>
          <button
            onClick={handleBack}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all backdrop-blur-sm"
            aria-label="Previous"
          >
            <i className="fa-solid fa-chevron-left text-sm" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all backdrop-blur-sm"
            aria-label="Next"
          >
            <i className="fa-solid fa-chevron-right text-sm" />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && count > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
