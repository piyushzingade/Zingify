import { Search, User, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-full px-4 py-2.5  bg-transparent backdrop-blur-sm border-b border-zinc-800/50">
      {/* First section - Logo and Navigation */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <div className="w-6 h-6 bg-zinc-900 transform rotate-45 rounded-sm"></div>
          </div>
          <span className="text-white font-semibold text-lg tracking-wide">
            ZINGIFY
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <div className="text-white text-sm font-medium hover:text-zinc-300 transition-colors cursor-pointer">
            All
          </div>
          <div className="text-zinc-400 text-sm font-medium hover:text-white transition-colors cursor-pointer">
            Kids
          </div>
          <div className="text-zinc-400 text-sm font-medium hover:text-white transition-colors cursor-pointer">
            Mens
          </div>
        </div>
      </div>

      {/* Second section - Search and Actions */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="search"
            className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2 pr-10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent w-64"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 w-4 h-4" />
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4">
          <button className="text-zinc-400 hover:text-white transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
