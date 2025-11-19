export default function Features(){
  const items = [
    {title:'Global cards', desc:'Issue virtual cards instantly and accept over 135 currencies.', emoji:'💳'},
    {title:'Subscriptions', desc:'Usage-based billing, coupons, proration — all built-in.', emoji:'🔁'},
    {title:'Fraud shield', desc:'Advanced risk scoring and 3D Secure out of the box.', emoji:'🛡️'},
    {title:'Analytics', desc:'Real-time revenue, churn, and cohort insights.', emoji:'📊'},
  ]
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 text-center">Everything you need</h2>
        <p className="text-slate-600 text-center mt-2">Built for modern SaaS with a gentle pastel vibe</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl p-6 bg-gradient-to-br from-rose-50 via-sky-50 to-lime-50 border border-slate-200 shadow-sm">
              <div className="text-3xl mb-3">{it.emoji}</div>
              <h3 className="font-semibold text-slate-800">{it.title}</h3>
              <p className="text-slate-600 mt-1 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
