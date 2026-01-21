export const CodeExamples = {
    "App.jsx": `import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}`,

    "Hero.jsx": `import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-20 pb-32 px-4 overflow-auto">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium">Next-Gen AI Development</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
          Build faster with <span className="text-blue-500">Intelligence</span>
        </h1>
        
        <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Streamline your workflow with CodeFlow. The ultimate platform for 
          modern developers who want to ship faster and better.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-all">
            Get Started Free
          </button>
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition-all">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
}`,

    "Navbar.jsx": `import React, { useState, useEffect } from "react";
import { Github, Menu, X, Code2 } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={\`fixed top-0 w-full z-50 transition-all duration-300 \${
      isScrolled ? "h-16 border-b border-white/10 backdrop-blur-md bg-black/50" : "h-20 bg-transparent"
    }\`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-2xl tracking-tight">CodeFlow</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all">
            Start Building
          </button>
        </div>

        <button className="md:hidden p-2 text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );`
}

export const floatingCards = {
  "App.jsx":{
    bgColor:"bg-blue-500/10",
    iconColor:"text-blue-400",
    textColor:"text-blue-400",
    contentColor:"text-blue-100/80",
    icon:"AI",
    title:"Smart Completion",
    content:"AI-powered code suggestions in real-time"
  },

   "Hero.jsx":{
    bgColor:"bg-rose-500/10",
    iconColor:"text-rose-400",
    textColor:"text-rose-400",
    contentColor:"text-rose-100/80",
    icon:"Zap",
    title:"Instant Preview",
    content:"See changes instantly with hot module replacement"
  },

   "Navbar.jsx":{
    bgColor:"bg-indigo-500/10",
    iconColor:"text-amber-400",
    textColor:"text-amber-400",
    contentColor:"text-amber-100/80",
    icon:"Sparkles",
    title:"Responsive Layout",
    content:"Optimized for all screen sizes and devices"
  }
}