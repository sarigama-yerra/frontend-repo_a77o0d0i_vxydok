import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-white/50 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-800">
            <span className="inline-flex h-8 w-8 rounded-xl bg-gradient-to-br from-rose-300 via-sky-300 to-lime-300 shadow-inner"></span>
            PastelPay
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button onClick={onOpenAuth} className="px-4 py-2 rounded-xl bg-white/70 hover:bg-white text-slate-800 shadow-sm border border-white/80">Sign in</button>
            <a href="#pricing" className="px-4 py-2 rounded-xl bg-slate-900 text-white shadow">
              Get started
            </a>
          </div>
          <button className="md:hidden p-2 rounded-lg hover:bg-white/60" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <a href="#features" className="py-2">Features</a>
            <a href="#pricing" className="py-2">Pricing</a>
            <a href="#blog" className="py-2">Blog</a>
            <a href="#contact" className="py-2">Contact</a>
            <button onClick={onOpenAuth} className="mt-2 px-4 py-2 rounded-xl bg-slate-900 text-white">Sign in</button>
          </div>
        )}
      </div>
    </header>
  )
}
