import React from 'react'
import { Search, Bell, Plus, Settings } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400/80 to-emerald-400/60 shadow-[0_0_40px_rgba(45,212,191,0.35)] ring-1 ring-white/40" />
          <div className="">
            <div className="text-white/90 font-semibold leading-none">Nimbus</div>
            <div className="text-xs text-white/50">Glass Dashboard</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-6">
          <div className="relative group flex-1">
            <div className="absolute inset-0 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors"></div>
            <div className="relative flex items-center gap-3 px-4 py-2 rounded-2xl border border-white/10">
              <Search className="w-4 h-4 text-white/60" />
              <input placeholder="Search" className="bg-transparent placeholder-white/40 text-white/90 outline-none w-full" />
              <kbd className="hidden md:inline text-xs text-white/40">/</kbd>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="relative group px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 transition-all">
            <Plus className="w-4 h-4" />
            <span className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(45,212,191,0.25)] opacity-0 group-hover:opacity-100 transition"></span>
          </button>
          <button className="relative group px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 transition-all">
            <Bell className="w-4 h-4" />
            <span className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(45,212,191,0.25)] opacity-0 group-hover:opacity-100 transition"></span>
          </button>
          <button className="relative group px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 transition-all">
            <Settings className="w-4 h-4" />
            <span className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(45,212,191,0.25)] opacity-0 group-hover:opacity-100 transition"></span>
          </button>
        </div>
      </div>
    </header>
  )
}
