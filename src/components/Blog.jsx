import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Blog(){
  const [posts, setPosts] = useState([])
  const [active, setActive] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`${API_BASE}/api/blog`).then(r=>r.json()).then(setPosts).catch(()=>{})
  }, [])

  const openPost = async (slug) => {
    setLoading(true)
    try{
      const data = await fetch(`${API_BASE}/api/blog/${slug}`).then(r=>r.json())
      setActive(data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 text-center">From the blog</h2>
        <p className="text-slate-600 text-center mt-2">Insights on building fintech and subscriptions</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {posts.map(p => (
              <article key={p.slug} className="rounded-2xl p-6 border border-slate-200 bg-white hover:shadow-md transition" onClick={()=>openPost(p.slug)}>
                {p.cover_image && <img src={p.cover_image} alt="" className="rounded-xl mb-3" />}
                <h3 className="font-semibold text-slate-800">{p.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{p.excerpt}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags?.map(t => <span key={t} className="px-2 py-1 rounded-lg bg-rose-50 text-rose-700 text-xs border border-rose-100">{t}</span>)}
                </div>
              </article>
            ))}
            {posts.length === 0 && (
              <div className="col-span-2 text-center text-slate-500">No posts yet.</div>
            )}
          </div>
          <div className="md:col-span-1">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-rose-50 via-sky-50 to-lime-50 border border-slate-200">
              <h4 className="font-semibold text-slate-800">Featured</h4>
              {active ? (
                <div className="mt-3">
                  <h5 className="font-medium text-slate-800">{active.title}</h5>
                  <p className="text-sm text-slate-600 mt-1 whitespace-pre-wrap">{loading ? 'Loading…' : active.content?.slice(0, 400) + '…'}</p>
                </div>
              ) : (
                <p className="text-sm text-slate-600 mt-3">Click a post to preview content here.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
