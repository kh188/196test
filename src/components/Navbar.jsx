import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full px-4 sm:px-12 md:px-[110px] py-4 glass-panel border-b border-pink-100/40 shadow-sm backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2 group">
                    <span className="text-2xl animate-float">🌸</span>
                    <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 via-rose-500 to-violet-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                        Khusha.dev
                    </h2>
                    <span className="hidden sm:inline-block bg-pink-100 text-pink-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        ACTIVE ✨
                    </span>
                </NavLink>

                {/* Nav Links */}
                <ul className="flex items-center gap-1 md:gap-3 bg-white/50 p-1 rounded-full border border-pink-100/30">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                                isActive 
                                    ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-sm shadow-pink-200" 
                                    : "text-zinc-600 hover:text-pink-500 hover:bg-pink-50/50"
                            }`
                        }
                    >
                        <li>Home</li>
                    </NavLink>
                    <NavLink 
                        to="/about"
                        className={({ isActive }) => 
                            `px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                                isActive 
                                    ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-sm shadow-pink-200" 
                                    : "text-zinc-600 hover:text-pink-500 hover:bg-pink-50/50"
                            }`
                        }
                    >
                        <li>About</li>
                    </NavLink>
                    <NavLink 
                        to="/projects"
                        className={({ isActive }) => 
                            `px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                                isActive 
                                    ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-sm shadow-pink-200" 
                                    : "text-zinc-600 hover:text-pink-500 hover:bg-pink-50/50"
                            }`
                        }
                    >
                        <li>Projects</li>
                    </NavLink>
                    <NavLink 
                        to="/contacts"
                        className={({ isActive }) => 
                            `px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                                isActive 
                                    ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-sm shadow-pink-200" 
                                    : "text-zinc-600 hover:text-pink-500 hover:bg-pink-50/50"
                            }`
                        }
                    >
                        <li>Contact</li>
                    </NavLink>
                    <NavLink 
                        to="/settings"
                        className={({ isActive }) => 
                            `px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                                isActive 
                                    ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-sm shadow-pink-200" 
                                    : "text-zinc-600 hover:text-pink-500 hover:bg-pink-50/50"
                            }`
                        }
                    >
                        <li>Settings</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;