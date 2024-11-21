import { Rocket, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              Stellarix
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
              <a href="#missions" className="text-gray-300 hover:text-purple-400 transition-colors">Missions</a>
              <a href="#technology" className="text-gray-300 hover:text-purple-400 transition-colors">Technology</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors">
                Launch with Us
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Home</a>
            <a href="#missions" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Missions</a>
            <a href="#technology" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Technology</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-purple-400">Contact</a>
            <button className="w-full text-left bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-md">
              Launch with Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}