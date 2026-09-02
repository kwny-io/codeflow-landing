import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/30 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 ">
            <div className="flex items-center space-x-1 group cursor-pointer   ">{/*lg变大是在这里加码 */}
                <div>
                    <img src={import.meta.env.BASE_URL + 'logo.png'}
                    alt="codeflow" 
                    className="h-6 w-6 sm:h-8 sm:w-8" 
                    />
                </div>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium ">
                        <span className="bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent font-extrabold tracking-tight ">Code</span>
                        <span className="bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent font-extrabold tracking-tight ">Flow</span>
                    </span>
            </div>
            {/* nav links */}
            <div className=" hidden md:flex items-center space-x-6 lg:space-x-8">
                <a 
                href="#features"
                className="text-gray-300 hover:text-white transition-colors duration-500 text-sm lg:text-base"
                >
                    Features
                </a>
                <a 
                href="#pricing"
                 className="text-gray-300 hover:text-white transition-colors duration-500 text-sm lg:text-base"
                 >
                    Pricing
                </a>
                <a 
                href="#testimonials"
                 className="text-gray-300 hover:text-white transition-colors duration-500 text-sm lg:text-base"
                 >
                    Testimonials
                </a>
            </div>
            <button className="md:hidden p-2 text-gray-300 hover:text-white cursor-pointer" 
            onClick={() => setMobileMenuIsOpen((prev)=>!prev)}
            >  
            {mobileMenuIsOpen ? ( <X className="w-5 h-5 sm:w-6 sm:h-6"/> )  
            : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6"/>
            )}
            </button>
        </div>
      </div>
        {mobileMenuIsOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-lg  border-t border-slate-800 animate-in slide-in-from-top duration-300">
                <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                     <a 
                        href="#features"
                        onClick={()=>setMobileMenuIsOpen(false)}
                        className="block text-gray-300 hover:text-white transition-colors duration-500 text-sm lg:text-base"
                    >
                        Features
                    </a>
                    <a 
                        href="#pricing"
                        onClick={()=>setMobileMenuIsOpen(false)}
                        className="block text-gray-300 hover:text-white transition-colors duration-500 text-sm lg:text-base"
                    >
                        Pricing
                    </a>
                    <a 
                        href="#testimonials"
                        onClick={()=>setMobileMenuIsOpen(false)}
                        className="block text-gray-300 hover:text-white transition-colors duration-500 text-sm lg:text-base"
                    >
                        Testimonials
                    </a>
                </div>
            </div>)}
    </nav>
  );
}
