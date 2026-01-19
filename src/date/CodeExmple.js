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

    "Hero.jsx": `import React, { useState } from "react";
import { Sparkles } from "lucide-react";

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  
  return (
    <section className="pt-20 pb-32 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl font-bold tracking-tighter">
          Build faster with <span className="text-blue-500">AI</span>
        </h1>
        <p className="mt-6 text-xl text-slate-400">
          Streamline your workflow with CodeFlow.
        </p>
      </div>
    </section>
  );
}`,

    "Navbar.jsx": `import React from "react";
import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-white/10 backdrop-blur-md">
      <div className="flex items-center justify-between h-full px-6">
        <div className="font-bold text-xl">CodeFlow</div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-600 rounded-lg">
            Get Started
          </button>
        </div>
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
    content:"AI-powered code suggestions in real-time，This is a test-1"
  },

   "Hero.jsx":{
    bgColor:"bg-rose-500/10",
    iconColor:"text-rose-400",
    textColor:"text-rose-400",
    contentColor:"text-rose-100/80",
    icon:"Zap",
    title:"Display Code Examples-2",
    content:"AI-powered code suggestions in real-time,This is a test-2"
  },

   "Navbar.jsx":{
    bgColor:"bg-indigo-500/10",
    iconColor:"text-amber-400",
    textColor:"text-amber-400",
    contentColor:"text-amber-100/80",
    icon:"Sparkles",
    title:"Display Code Examples-3",
    content:"AI-powered code suggestions in real-time,This is a test-3"
  }
}