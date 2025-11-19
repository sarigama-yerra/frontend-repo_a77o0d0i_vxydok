import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AuthModal({ open, onClose }){
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({name:'', email:'', password:''})
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Processing…')
    try{
      const url = mode === 'login' ? `${API_BASE}/api/auth/login` : `${API_BASE}/api/auth/register`
      const payload = mode === 'login' ? {email: form.email, password: form.password} : form
      const res = await fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)})
      const data = await res.json()
      if(res.ok){
        setStatus('Success!')
        localStorage.setItem('token', data.token)
        onClose()
      } else {
        setStatus(data.detail || 'Something went wrong')
      }
    } catch(err){
      setStatus('Network error')
    }
  }

  if(!open) return null
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30">
      <div className="w-full max-w-md rounded-2xl p-6 bg-white border border-slate-200 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-800">{mode === 'login' ? 'Sign in' : 'Create account'}</h3>
          <button onClick={onClose} className="text-slate-500">✕</button>
        </div>
        <form onSubmit={submit} className="mt-4 space-y-3">
          {mode === 'register' && (
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200" placeholder="Ada Lovelace" />
            </div>
          )}
          <div>
            <label className="text-sm text-slate-600">Email</label>
            <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200" placeholder="ada@company.com" />
          </div>
          <div>
            <label className="text-sm text-slate-600">Password</label>
            <input required type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full px-4 py-2 rounded-xl bg-slate-900 text-white">{mode === 'login' ? 'Sign in' : 'Create account'}</button>
        </form>
        <p className="text-sm text-slate-600 mt-3">{status}</p>
        <div className="mt-4 text-sm text-slate-600">
          {mode === 'login' ? (
            <span>New here? <button className="underline" onClick={()=>setMode('register')}>Create an account</button></span>
          ) : (
            <span>Have an account? <button className="underline" onClick={()=>setMode('login')}>Sign in</button></span>
          )}
        </div>
      </div>
    </div>
  )
}
