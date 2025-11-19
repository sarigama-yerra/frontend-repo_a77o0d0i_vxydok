import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/70 text-slate-700 text-sm shadow border border-white/80 mb-4 pointer-events-none">Fintech, minimal, pastel</span>
          <h1 className="text-4xl sm:text-6xl font-semibold text-slate-800 leading-tight">
            Modern payments for growing startups
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-600">
            Accept cards, manage subscriptions, and scale globally with a secure platform your finance team will love.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-xl bg-slate-900 text-white shadow">Start free</a>
            <a href="#features" className="px-5 py-3 rounded-xl bg-white/70 hover:bg-white text-slate-800 shadow-sm border border-white/80">See features</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
