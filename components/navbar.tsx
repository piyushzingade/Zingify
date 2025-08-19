"use client";
import { useEffect, useState } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useDeviceWidth } from "@/hooks/useDevice";
import { Button } from "./ui/button";


const navLinks = ["All", "Kids", "Mens", "Womens", "Footwear", "Electronics", "Accessories"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("All");
  const isMobile = useDeviceWidth();

  return (
    <>
      <nav className={`flex flex-col md:flex-row justify-between items-center w-full px-4 py-2.5 bg-transparent backdrop-blur-sm border-b border-zinc-800 ${menuOpen && isMobile ? 'hidden' : ''}`}>
        <div className="flex justify-between items-center w-full md:w-auto">
          {/* Logo + Desktop Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 md:w-6 md:h-6 bg-zinc-900 rotate-45 rounded-sm"></div>
              </div>
              <span className="text-white font-semibold text-md md:text-lg tracking-wide">
                ZINGIFY
              </span>
            </div>

            {/* Desktop Navigation - Next to Logo */}
            <div className="hidden md:flex items-start gap-6">
              {navLinks.slice(0, 3).map((link, idx) => (
                <div
                  key={idx}
                  onClick={() => setActive(link)}
                  className={`text-sm font-medium cursor-pointer transition-colors 
                    ${active === link ? "text-white" : "text-zinc-400"} 
                    hover:text-white`}
                >
                  {link}
                </div>
              ))}
            </div>
          </div>

          {/* Hamburger - Only show on mobile */}
          {isMobile && (
            <Button
              className="text-white"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          )}
        </div>

        <div className="hidden md:flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="search"
              className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2 pr-10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
          </div>

          <div className="flex items-center gap-4">
            <Button className="text-zinc-400 hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </Button>
            <Button className="text-zinc-400 hover:text-white transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      {menuOpen && isMobile && (
        <div className="fixed inset-0 z-[9999] bg-zinc-900/90 backdrop-blur-md h-screen w-full flex flex-col transition-all duration-300 ease-in-out overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <div className="w-5 h-5 bg-zinc-900 rotate-45 rounded-sm"></div>
              </div>
              <span className="text-white font-semibold text-lg tracking-wide">
                ZINGIFY
              </span>
            </div>
            <Button
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-zinc-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex-1 flex flex-col p-6">
            <div className="flex flex-col gap-1 mb-8">
              {navLinks.map((link, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActive(link);
                    setMenuOpen(false);
                  }}
                  className={`py-2 px-1.5 text-md font-medium cursor-pointer transition-colors border-b border-zinc-800/50 last:border-b-0
                    ${active === link ? "text-white bg-zinc-800/30" : "text-zinc-300"} 
                    hover:text-white hover:bg-zinc-800/50 rounded-lg`}
                >
                  {link}
                </div>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <Button className="w-full flex items-center justify-center gap-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg py-2 text-white hover:bg-zinc-700/50 transition-colors">
                <User className="w-5 h-5" />
                <span className="text-md font-medium">My Account</span>
              </Button>
              <Button className="w-full flex items-center justify-center gap-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg py-2 text-white hover:bg-zinc-700/50 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="text-md font-medium">Shopping Cart</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}