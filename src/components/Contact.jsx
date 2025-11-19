import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', company:'', topic:'General', message:''})
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending…')
    try{
      const res = await fetch(`${API_BASE}/api/contact`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)})
      if(res.ok){
        setStatus('Thanks! We will be in touch.')
        setForm({name:'', email:'', company:'', topic:'General', message:''})
      } else {
        setStatus('Something went wrong')
      }
    } catch(err){
      setStatus('Network error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800">Talk to our team</h2>
            <p className="text-slate-600 mt-2">We usually respond within 1 business day.</p>
            <div className="mt-6 rounded-2xl p-6 bg-gradient-to-br from-rose-50 via-sky-50 to-lime-50 border border-slate-200">
              <p className="text-slate-700">Prefer email? hello@pastelpay.app</p>
            </div>
          </div>
          <form onSubmit={submit} className="rounded-2xl p-6 border border-slate-200 bg-white shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Ada Lovelace" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="ada@company.com" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Company</label>
                <input value={form.company} onChange={e=>setForm({...form, company:e.target.value})} className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Company" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Topic</label>
                <select value={form.topic} onChange={e=>setForm({...form, topic:e.target.value})} className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-200">
                  <option>General</option>
                  <option>Pricing</option>
                  <option>Sales</option>
                  <option>Support</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Message</label>
                <textarea required rows={5} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Tell us what you need…" />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button type="submit" className="px-5 py-3 rounded-xl bg-slate-900 text-white shadow">Send message</button>
              <span className="text-sm text-slate-600">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
