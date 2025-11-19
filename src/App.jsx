import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'
import AuthModal from './components/AuthModal'

function App() {
  const [authOpen, setAuthOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white text-slate-700">
      <Navbar onOpenAuth={() => setAuthOpen(true)} />
      <Hero />
      <Features />
      <Pricing />
      <Blog />
      <Contact />
      <footer className="py-10 text-center text-slate-500 bg-white">
        <p>© {new Date().getFullYear()} PastelPay — Modern fintech infrastructure.</p>
      </footer>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

export default App
