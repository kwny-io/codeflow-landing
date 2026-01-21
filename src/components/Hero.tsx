import { useEffect, useState } from "react";
import {ArrowRight, Play, ChevronDown, Zap, Sparkles, Search, Terminal} from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CodeExamples, floatingCards } from "../date/CodeExmple";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
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
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 ">
        {/* 背景光效 - 随鼠标移动 */}
        <div className="absolute inset-0 opacity-30 " style={{
            background:`radial-gradient(600px circle at ${MousePosition.x}px ${MousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`
        }}
        />

        {/* 背景装饰圆球 */}
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* 主内容容器 - 居中与相对定位 */}
        <div className="max-w-7xl  mx-auto text-center relative w-full">
            {/* 布局容器 - Grid 网格布局：左侧文字，右侧演示 */}
            <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative overflow-hidden">
            {/* 左侧内容区 - Flex 纵向布局 */}
            <div >
                {/* 标签容器 - Flex 居中与背景色 */}
                <div className="inline-flex items-center  space-x-2 px-3 sm: px-4 py-2 bg-blue-500/10 border boder-blue-500/20 rounded-full mb-4 sm:mb-6  animate-in slide-in-from-bottom duration-700 ">
                    <Sparkles className="w-full h-full text-purple-400"/> 
                    <span className="text-xs sm:text-sm text-purple-400 ">Introducin CodeFlow AI</span>
                </div>
                <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                    <span className="bg-gradient-to-b from-pink-400 via-purple-500 to-red-600 bg-clip-text text-transparent block mb-1 sm:mb-2">Code Faster</span>
                    <span className="bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent block mb-1 sm:mb-2">Builde Better</span>
                    <span className="bg-gradient-to-t from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent block mb-1 sm:mb-2">With CodeFlow AI</span>
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto  lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
                    Accelerate your development workflow with CodeFlow AI, 
                    the ultimate coding assistant that understands your needs. 
                </p>
                {/* 按钮组容器 - Flex 响应式布局 */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
                    <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4  bg-gradient-to-b from-blue-600  to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 ">
                        <span>Start Coding Free</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                    </button>

                    <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4  bg-white/5 backdrop-blur-sm border border-white/10 from-blue-600  to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duratio-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                        {/* 播放图标背景圆 - 悬停变色 */}
                        <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
                            <Play className="w-4 h-4 sm:w-5 sm:h-5 full-white"/>
                        </div>
                        <span>Watch Demo</span>
                    </button>
                </div>
            </div>
        {/* 右侧定位区 - 相对定位 (Relative) 与 Flex 居中 */}
        <div className="relative order-2 w-full flex justify-center">  {/* position layer*/}
            {/* IDE 外框容器 - 玻璃拟态 (Backdrop Blur) 与边框阴影 */}
            <div className="relative w-full max-w-[520px] bg-white/5 backdrop-blur-xl  rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10 overflow-visible">
                {/* IDE 主窗口 */}
                <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden w-full h-[240px] sm:h-[320px] lg:h-[420px] border border-white/5 flex flex-col">
                    {/* IDE 顶部标题栏 - Flex 两端对齐 */}
                    <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10 shrink-0">
                        {/* 标题栏左侧容器 - Flex 布局 */}
                        <div className="flex items-center  space-x-1 sm:space-x-2 ">
                            {/* 窗口控制按钮容器 (红黄绿圆点) */}
                            <div className="flex items-center  space-x-1 sm:space-x-2 ">
                            {/* 红色关闭按钮 */}
                            <div className="w-2 h-2 sm:h-3 sm:w-3 rounded-full bg-red-500"/>
                            {/* 黄色最小化按钮 */}
                            <div className="w-2 h-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500"/>
                            {/* 绿色最大化按钮 */}
                            <div className="w-2 h-2 sm:h-3 sm:w-3 rounded-full bg-green-500"/>
                        </div>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm sm:text-base font-medium">CodeFlow AI </span>
                       </div>
                       
                        <ChevronDown  className="w-3 h-3 sm:w-4 sm:h-4  text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"/>
                    </div>

                        {/* IDE 内容区域 - 相对定位与 Padding */}
                        <div className="p-3 sm:p-4 relative flex-1 flex flex-col min-h-0"> 
                        {/* 标签页容器 - Flex 布局与横向滚动 */}
                        <div className="flex space-x-1 sm:space-x-2  mb-3 sm:mb-4 overflow-x-auto shrink-0">
                            <button
                            onClick={() =>setActiveTap("App.jsx")}
                            className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm  rounded-t-lg border ${ activeTap === "App.jsx" 
                                ?"bg-blue-500/30 text-indigo-800 border-blue-400/50"
                                : "bg-white/5 text-blue-700-border border-blue-400  hover:bg-white/10"}  transition-all duration-200 whitespace-nowrap cursor-pointer`}>
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
                        {/* 编辑器容器 - Flex 自适应填充 (Grow) */}
                        <div className="relative grow flex flex-col min-h-0">
                        <SyntaxHighlighter 
                        language="jsx" 
                        style={nightOwl} 
                        customStyle={{
                            margin:0, 
                            padding: "20px",
                            fontSize:"13px",
                            lineHeight:"1.5",
                            backgroundColor: "#1a1a1a",
                            border: "none",
                            textAlign:"left",
                            height: "100%",
                            overflow: "auto",
                            scrollbarWidth: "thin", // 针对 Firefox
                        }}
                        codeTagProps={{
                            style: {
                                display: "block",
                                width: "max-content",
                                minWidth: "100%"
                            }
                        }}
                        > 
                            {CodeExamples[activeTap as keyof typeof CodeExamples]}
                        </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
                {/* 悬浮卡片 - 绝对定位 (Absolute) 与动态背景色 */}
                <div className={`hidden lg:block absolute -bottom-6 -right-6 w-80 ${floatingCards[activeTap as keyof typeof floatingCards].bgColor} backdrop-blur-2xl rounded-2xl p-6 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 transition-all duration-500`} >
                    {/* 卡片头部：Flex 布局 */}
                    <div className="flex items-center space-x-3 mb-3">
                        {/* 图标背景容器 - 动态颜色与圆角 */}
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
                    {/* 悬浮卡片内容描述 */}
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
