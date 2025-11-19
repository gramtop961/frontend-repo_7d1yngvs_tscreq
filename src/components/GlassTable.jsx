import React from 'react'

const rows = Array.from({ length: 7 }).map((_, i) => ({
  id: `INV-${1023 + i}`,
  customer: ['Nova Labs', 'Minty Co', 'Halo Systems', 'Polar Inc', 'Lumen Ltd', 'Arcade IO', 'Quartz AI'][i],
  amount: ['$1,240', '$980', '$4,120', '$760', '$2,090', '$1,870', '$3,420'][i],
  status: ['Paid', 'Pending', 'Paid', 'Refunded', 'Paid', 'Pending', 'Paid'][i],
  date: ['Nov 12', 'Nov 12', 'Nov 11', 'Nov 11', 'Nov 10', 'Nov 10', 'Nov 09'][i],
}))

const StatusPill = ({ status }) => {
  const map = {
    Paid: 'text-emerald-300 bg-emerald-400/10 border-emerald-300/30',
    Pending: 'text-amber-200 bg-amber-400/10 border-amber-300/30',
    Refunded: 'text-teal-200 bg-teal-400/10 border-teal-300/30',
  }
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border ${map[status]}`}>{status}</span>
  )
}

export default function GlassTable() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.35)]">
      <div className="px-4 py-3 text-white/70 text-sm border-b border-white/10">Recent Activity</div>
      <div className="divide-y divide-white/10">
        {rows.map((r, idx) => (
          <div key={idx} className="px-4 py-3 grid grid-cols-4 items-center text-sm text-white/80 hover:bg-white/5 transition-colors">
            <div className="font-medium text-white/90">{r.id}</div>
            <div>{r.customer}</div>
            <div className="text-right">{r.amount}</div>
            <div className="flex items-center justify-end gap-2"><StatusPill status={r.status} /><span className="text-white/40">{r.date}</span></div>
          </div>
        ))}
      </div>
    </div>
  )
}
