import React from 'react'

function normalize(data, width, height, padding = 4) {
  if (!data || data.length === 0) return ''
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const step = (width - padding * 2) / (data.length - 1)
  return data
    .map((d, i) => {
      const x = padding + i * step
      const y = padding + (1 - (d - min) / range) * (height - padding * 2)
      return `${x},${y}`
    })
    .join(' ')
}

export default function Sparkline({ data = [], width = 140, height = 40, color = '#2dd4bf', fillOpacity = 0.08 }) {
  const points = normalize(data, width, height)
  const pathD = React.useMemo(() => {
    if (!points) return ''
    const pts = points.split(' ').map(p => p.split(',').map(Number))
    const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ')
    return d
  }, [points])

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={fillOpacity} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor={color} floodOpacity="0.5" />
        </filter>
      </defs>
      {pathD && (
        <>
          <path d={`${pathD} L ${width} ${height} L 0 ${height} Z`} fill="url(#sparkFill)" />
          <path d={pathD} stroke={color} strokeWidth="2" fill="none" filter="url(#glow)" />
        </>
      )}
    </svg>
  )
}
