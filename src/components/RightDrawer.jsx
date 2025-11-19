import React from 'react'
import { Bell, X } from 'lucide-react'

export default function RightDrawer() {
  const [open, setOpen] = React.useState(true)
  return (
    <div className={`fixed top-[72px] right-4 w-80 transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-[calc(100%+1rem)]'}`}>
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden">
        <div className="px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2 text-white/80"><Bell className="w-4 h-4 text-teal-300" /> Notifications</div>
          <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white"><X className="w-4 h-4" /></button>
        </div>
        <div className="p-4 space-y-3">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-medium text-white/90">Payment processed</div>
                  <div className="text-white/60">Invoice INV-{1020 + i} completed</div>
                </div>
                <span className="text-xs text-white/40">2m</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
