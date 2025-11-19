import React from 'react'
import Spline from '@splinetool/react-spline'
import Sparkline from './Sparkline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 lg:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="absolute -inset-24 bg-[radial-gradient(1200px_400px_at_20%_-10%,rgba(45,212,191,0.2),transparent),radial-gradient(800px_300px_at_90%_-20%,rgba(20,184,166,0.15),transparent)] pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-6 relative">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">Calm insights, clearly presented</h1>
            <p className="mt-2 text-white/60">A glass-morphic analytics surface with mint highlights, smooth micro-motion, and intentional spacing for clarity.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: 'Revenue', value: '$48.2k', data: [12,14,10,16,18,17,21,24,22,28,26,31] },
              { label: 'Users', value: '12,410', data: [8,7,9,11,13,12,15,16,15,18,21,22] },
              { label: 'NPS', value: '72', data: [60,62,63,64,66,65,68,69,70,71,72,72] },
            ].map((card, i) => (
              <div key={i} className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                <div className="text-xs text-white/60">{card.label}</div>
                <div className="text-xl font-semibold text-white mt-1">{card.value}</div>
                <div className="mt-2">
                  <Sparkline data={card.data} />
                </div>
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_0_rgba(45,212,191,0.0)] group-hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] transition-shadow" />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 text-sm text-white/70">
            <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.7)]" />
            Realtime sync healthy • Last updated seconds ago
          </div>
        </div>

        <div className="relative h-[280px] sm:h-[360px] lg:h-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
