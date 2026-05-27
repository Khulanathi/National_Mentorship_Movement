/**
 * PhotoStrip — horizontal scrolling row of photos with hover zoom.
 */
export function PhotoStrip({ images = [], className = '' }) {
  return (
    <div
      className={`flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory ${className}`}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {images.map((img, i) => (
        <div
          key={i}
          className="snap-start flex-shrink-0 w-64 h-44 rounded-2xl overflow-hidden group relative shadow-md"
        >
          <img
            src={img.src}
            alt={img.caption || `NMM moment ${i + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {img.caption && (
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white text-xs font-medium">{img.caption}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/**
 * MasonryGallery — multi-column staggered gallery of photos.
 */
export function MasonryGallery({ images = [], columns = 3, className = '' }) {
  const cols = Array.from({ length: columns }, () => [])
  images.forEach((img, i) => cols[i % columns].push({ ...img, idx: i }))
  const aspectMap = ['aspect-video', 'aspect-square', 'aspect-[4/5]', 'aspect-[3/4]', 'aspect-video', 'aspect-[5/4]']

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 ${className}`}>
      {cols.map((col, ci) => (
        <div key={ci} className="flex flex-col gap-3">
          {col.map(({ src, caption, idx }) => (
            <div
              key={idx}
              className={`overflow-hidden rounded-2xl group relative shadow-md ${aspectMap[idx % aspectMap.length]}`}
            >
              <img
                src={src}
                alt={caption || `NMM ${idx + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {caption && (
                <span className="absolute bottom-3 left-3 right-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium leading-snug">
                  {caption}
                </span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

/**
 * FullBleedImage — full-width section with image background + overlay + children.
 */
export function FullBleedImage({ src, overlayClass = 'bg-black/55', minHeight = 'min-h-[320px]', children, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${minHeight} flex items-center ${className}`}>
      <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}
