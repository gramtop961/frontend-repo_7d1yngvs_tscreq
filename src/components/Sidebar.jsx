import React from 'react'
import { Home, LineChart, BarChart3, User, Layers, Database, Settings, HelpCircle } from 'lucide-react'

const nav = [
  { icon: Home, label: 'Overview' },
  { icon: LineChart, label: 'Analytics' },
  { icon: BarChart3, label: 'Performance' },
  { icon: Layers, label: 'Workflows' },
  { icon: Database, label: 'Data' },
  { icon: User, label: 'Users' },
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 shrink-0 h-[calc(100vh-72px)] sticky top-[72px] px-4 py-6">
      <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 space-y-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.25)]">
        {nav.map((item, idx) => {
          const Icon = item.icon
          return (
            <button key={idx} className="group w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-white/80 hover:text-white/100 border border-transparent hover:border-white/10 hover:bg-white/10 transition-all relative">
              <span className="absolute inset-0 rounded-2xl shadow-[0_0_0px_rgba(45,212,191,0.0)] group-hover:shadow-[0_0_25px_rgba(45,212,191,0.25)] transition-shadow"></span>
              <Icon className="w-4 h-4 text-teal-300/80" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          )
        })}

        <div className="my-3 border-t border-white/10"></div>

        <button className="group w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-white/80 hover:text-white/100 border border-transparent hover:border-white/10 hover:bg-white/10 transition-all relative">
          <Settings className="w-4 h-4 text-teal-300/80" />
          <span className="text-sm font-medium">Settings</span>
        </button>
        <button className="group w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-white/80 hover:text-white/100 border border-transparent hover:border-white/10 hover:bg-white/10 transition-all relative">
          <HelpCircle className="w-4 h-4 text-teal-300/80" />
          <span className="text-sm font-medium">Help</span>
        </button>
      </div>

      <div className="mt-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-4 text-white/80 text-sm">
        <div className="font-semibold text-white">Status</div>
        <div className="mt-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.6)]"></span>
          <span className="text-white/70">All systems stable</span>
        </div>
      </div>
    </aside>
  )
}
