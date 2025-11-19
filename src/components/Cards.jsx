import React from 'react'
import Sparkline from './Sparkline'

export default function Cards() {
  const items = [
    { title: 'Active Users', value: '12,410', delta: '+3.8%', tone: 'positive', data: [7,8,9,12,11,13,15,16,17,18,17,19] },
    { title: 'Conversion', value: '4.2%', delta: '+0.4%', tone: 'positive', data: [3.1,3.2,3.5,3.4,3.6,3.7,3.9,4.0,4.1,4.2,4.1,4.2] },
    { title: 'Churn', value: '1.6%', delta: '-0.2%', tone: 'calm', data: [2.1,2.0,1.9,1.8,1.7,1.8,1.7,1.6,1.7,1.6,1.6,1.6] },
    { title: 'Support Load', value: '37', delta: '-12%', tone: 'calm', data: [56,49,42,47,43,41,39,38,37,36,37,37] },
  ]

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      {items.map((it, i) => (
        <div key={i} className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.45)] transition-all">
          <div className="text-sm text-white/70">{it.title}</div>
          <div className="mt-1 flex items-end justify-between">
            <div className="text-2xl font-semibold text-white">{it.value}</div>
            <div className={`text-xs px-2 py-0.5 rounded-full border ${it.tone === 'positive' ? 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10' : 'text-teal-200 border-teal-300/30 bg-teal-400/10'}`}>{it.delta}</div>
          </div>
          <div className="mt-3">
            <Sparkline data={it.data} />
          </div>
          <div className="absolute inset-0 rounded-2xl shadow-[0_0_0_rgba(45,212,191,0.0)] group-hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] transition-shadow" />
        </div>
      ))}
    </div>
  )
}
