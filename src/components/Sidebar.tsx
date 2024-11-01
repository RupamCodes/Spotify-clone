import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-black h-full p-6">
      <div className="space-y-4">
        <div className="text-white text-2xl font-bold mb-8">Spotifake</div>
        
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
            <Home className="w-6 h-6" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
            <Search className="w-6 h-6" />
            <span>Search</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
            <Library className="w-6 h-6" />
            <span>Your Library</span>
          </a>
        </nav>

        <div className="pt-8 space-y-4">
          <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
            <div className="p-1 bg-gray-300 rounded-sm">
              <Plus className="w-4 h-4 text-black" />
            </div>
            <span>Create Playlist</span>
          </button>
          <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
            <div className="p-1 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-sm">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span>Liked Songs</span>
          </button>
        </div>

        <div className="pt-6 border-t border-gray-800">
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">My Playlist #1</li>
            <li className="hover:text-white cursor-pointer">Chill Vibes</li>
            <li className="hover:text-white cursor-pointer">Rock Classics</li>
            <li className="hover:text-white cursor-pointer">Road Trip Mix</li>
          </ul>
        </div>
      </div>
    </div>
  );
}