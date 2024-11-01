import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

export default function Player() {
  return (
    <div className="h-24 bg-black border-t border-gray-800 fixed bottom-0 w-full px-4">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center w-1/4">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Album art"
            className="h-14 w-14 rounded-md mr-4"
          />
          <div>
            <h4 className="text-white text-sm">Summer Nights</h4>
            <p className="text-gray-400 text-xs">Artist Name</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-2/4">
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white">
              <Shuffle className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipBack className="w-5 h-5" />
            </button>
            <button className="bg-white rounded-full p-2 hover:scale-105 transition">
              <Play className="w-5 h-5 text-black" fill="black" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipForward className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Repeat className="w-5 h-5" />
            </button>
          </div>
          <div className="w-full max-w-md flex items-center space-x-2">
            <span className="text-xs text-gray-400">2:14</span>
            <div className="h-1 bg-gray-600 rounded-full w-full">
              <div className="h-1 bg-white rounded-full w-1/3"></div>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>

        <div className="flex items-center justify-end w-1/4 space-x-4">
          <Volume2 className="text-gray-400 w-5 h-5" />
          <div className="w-24 h-1 bg-gray-600 rounded-full">
            <div className="h-1 bg-white rounded-full w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}