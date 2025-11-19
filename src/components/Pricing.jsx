export default function Pricing(){
  const tiers = [
    {name:'Free', price:'$0', sub:'/mo', features:['1,000 API calls','Basic analytics','Email support'], cta:'Get started'},
    {name:'Pro', price:'$29', sub:'/mo', features:['100k API calls','Advanced analytics','Priority support'], cta:'Start 14-day trial', highlight:true},
    {name:'Business', price:'$99', sub:'/mo', features:['Unlimited API calls','SLA & SSO','Dedicated manager'], cta:'Contact sales'},
  ]
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 text-center">Simple pricing</h2>
        <p className="text-slate-600 text-center mt-2">Start free, upgrade when you scale</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl p-6 border shadow-sm ${t.highlight ? 'bg-gradient-to-br from-rose-50 via-sky-50 to-lime-50 border-slate-200' : 'bg-white border-slate-200'}`}>
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-slate-800">{t.name}</h3>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold text-slate-800">{t.price}</span>
                <span className="text-slate-500">{t.sub}</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="text-emerald-500">✓</span>{f}</li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#contact" className={`w-full inline-flex justify-center px-4 py-2 rounded-xl ${t.highlight ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-800'} shadow`}>{t.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
