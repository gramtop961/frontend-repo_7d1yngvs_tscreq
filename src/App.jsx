import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import GlassTable from './components/GlassTable'
import RightDrawer from './components/RightDrawer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(45,212,191,0.12),transparent),radial-gradient(1200px_600px_at_110%_-10%,rgba(20,184,166,0.10),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_20%)]" />

      <Header />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <Sidebar />

          <div className="flex-1 py-6">
            <Hero />

            <div className="mt-6 space-y-6">
              <Cards />
              <GlassTable />
            </div>

            <Footer />
          </div>
        </div>
      </main>

      <RightDrawer />

      {/* Floating side elements for depth */}
      <div className="pointer-events-none fixed left-4 bottom-24 w-40 h-40 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="pointer-events-none fixed right-24 top-24 w-56 h-56 rounded-full bg-emerald-400/10 blur-3xl" />
    </div>
  )
}

export default App
