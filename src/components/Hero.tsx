import { useEffect, useState } from "react";
import {Backpack, ChevronDown, Zap, Sparkles} from "lucide-react"
import SyntaxHighlighter from "react-syntax-highlighter";
import { CodeExamples, floatingCards } from "../date/CodeExmple";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function Hero() {
    const [MousePosition, setMousePosition] = useState({x:0,y:0});
    const [activeTap,setActiveTap] =useState("App.jsx");
    useEffect(() =>{
        function handleMouseMove(e: MouseEvent){
            setMousePosition({x:e.clientX,y:e.clientY})
        }
        window.addEventListener("mousemove",handleMouseMove)
        return () =>
            window.removeEventListener("mousemove",handleMouseMove);
    },[])
    const currentFloatingCard = floatingCards[activeTap as keyof typeof floatingCards];
    return (
    <section className="relative m-h-screen flex items-center justify-center pt-16 sm:pt-20 px:4 sm:px-6 lg:px-8 ">
        <div className="absolute inset-0 opacity-30 " style={{
            background:`radial-gradient(600px circle at ${MousePosition.x}px ${MousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`
        }}
        />

        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl  mx-auto text-center relative w-full">
            <div className="max-w-2xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
            <div>
                <div className="inline-flex items-center  space-x-2 px-3 sm: px-4 py-2 bg-blue-500/10 border boder-blue-500/20 rounded-full mb-4 sm:mb-6  animate-in slide-in-from-bottom duration-700 ">
                    <Sparkles className="w-full h-full text-purple-400"/> 
                    <span className="text-xs sm:text-sm text-purple-400 ">Introducin CodeFlow AI</span>
                </div>
                <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Code Faster</span>
                    <span>Builde Better</span>
                    <span>With CodeFlow AI</span>
                </h1>
            </div>
        <div className="relative order-2 w-full">  {/* position layer*/}
            <div className="relative bg-white/5 backdrop-blur-xl  rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[200px] sm:w-[350px] lg:h-[450px] border border-white/5">
                    {/* IDE HEADER */}
                    <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                        <div className="flex items-center  space-x-1 sm:space-x-2 ">
                            <div className="flex items-center  space-x-1 sm:space-x-2 ">
                            <div className="w-2 h-2 sm:h-3 sm:w-3 rounded-full bg-red-500"/>
                            <div className="w-2 h-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500"/>
                            <div className="w-2 h-2 sm:h-3 sm:w-3 rounded-full bg-green-500"/>
                        </div>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm sm:text-base font-medium">CodeFlow AI </span>
                       </div>
                       
                        <ChevronDown  className="w-3 h-3 sm:w-4 sm:h-4  text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"/>
                    </div>

                        <div className="p-3 sm:p-4 relative  h-full "> 
                        {/* file tabs */}
                        <div className="flex space-x-1 sm:space-x-2  mb-3 sm:mb-4 overflow-x-auto">
                            <button
                            onClick={() =>setActiveTap("App.jsx")}
                            className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm  rounded-t-lg border ${ activeTap === "App.jsx" 
                                ?"bg-blue-500/30 text-indigo-800 border-blue-400/50"
                                : "bg-white/5 text-bl- border border-blue-400  hover:bg-white/10"}  transition-all duration-200 whitespace-nowrap cursor-pointer`}>
                                    APP.jsx
                            </button>
                            <button 
                            onClick={() =>setActiveTap("Hero.jsx")}
                            className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm  rounded-t-lg border ${ activeTap === "Hero.jsx" 
                                ?"bg-blue-500/30 text-indigo-800 border-blue-400/50"
                                : "bg-white/5 text-blue-500 border border-blue-400  hover:bg-white/10"} transition-all duration-200 whitespace-nowrap cursor-pointer`}>
                                    Hero.jsx
                            </button>
                            <button 
                            onClick={() =>setActiveTap("Navbar.jsx")}
                            className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm  rounded-t-lg border ${ activeTap === "Navbar.jsx" 
                                ?"bg-blue-500/30 text-indigo-800 border-blue-400/50"
                                : "bg-white/5 text-blue-500 border border-blue-400  hover:bg-white/10"} transition-all duration-200 whitespace-nowrap cursor-pointer`}>
                                    Navbar.jsx
                            </button>
                        </div>
                        {/* code editor display */}
                        <div className="relative  overflow-hidden grow ">
                        <SyntaxHighlighter 
                        language="javascript" 
                        style={nightOwl} 
                        customStyle={{
                            margin:0, 
                            borderRadius:"8px", 
                            fontSize:"11px",
                            lineHeight:"1.4",
                            height:"100%",
                            border:"1px solid #3c3c3c",
                            textAlign:"left",
                        }}
                        > 
                            {CodeExamples[activeTap as keyof typeof CodeExamples]}
                        </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
                {/* Floading Card*/}
                <div className={`hidden lg:block absolute -bottom-6 -right-6 w-80 ${floatingCards[activeTap as keyof typeof floatingCards].bgColor} backdrop-blur-2xl rounded-2xl p-6 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 transition-all duration-500`} >
                    <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-8 h-8 ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold bg-white/10 rounded-lg`}>
                            {currentFloatingCard.icon === "Zap" ? (
                                <Zap className="w-4 h-4 fill-current" />
                            ) : currentFloatingCard.icon === "Sparkles" ? (
                                <Sparkles className="w-4 h-4 fill-current" />
                            ) : (
                                currentFloatingCard.icon
                            )}
                        </div>
                        <span className={`text-base font-bold ${currentFloatingCard.textColor}`}>
                            {currentFloatingCard.title}
                        </span>
                    </div>
                    <div className={`text-sm leading-relaxed ${currentFloatingCard.contentColor}`}>
                        {currentFloatingCard.content}
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </section>
    )
}
