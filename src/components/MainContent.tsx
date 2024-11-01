import React from 'react';
import { Clock, Play } from 'lucide-react';

export default function MainContent() {
  const playlists = [
    {
      title: "Today's Top Hits",
      description: "Jung Kook is on top of the Hottest 50!",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "RapCaviar",
      description: "New music from Drake, Travis Scott and more",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "All Out 2010s",
      description: "The biggest songs of the 2010s",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Rock Classics",
      description: "Rock legends & epic songs",
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900 to-black overflow-auto">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-white mb-8">Good afternoon</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {playlists.map((playlist, index) => (
            <div key={index} className="bg-gray-800/50 group rounded-md flex items-center overflow-hidden hover:bg-gray-800 transition cursor-pointer">
              <img src={playlist.image} alt={playlist.title} className="w-20 h-20 object-cover" />
              <div className="p-4 flex-1">
                <h3 className="text-white font-semibold">{playlist.title}</h3>
              </div>
              <button className="opacity-0 group-hover:opacity-100 mr-4 bg-green-500 rounded-full p-3 shadow-lg transition transform translate-y-1 group-hover:translate-y-0">
                <Play className="w-5 h-5 text-black" fill="black" />
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Recently Played</h2>
        <div className="bg-gray-900/60 rounded-lg">
          <table className="w-full text-gray-300 text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Album</th>
                <th className="px-4 py-3 text-left">Date Added</th>
                <th className="px-4 py-3 text-left"><Clock className="w-4 h-4" /></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-gray-800/50 group">
                  <td className="px-4 py-3">{item}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <img src={`https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`} alt="" className="w-10 h-10 rounded mr-3" />
                      <div>
                        <div className="text-white">Song Name</div>
                        <div className="text-gray-400">Artist Name</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">Album Name</td>
                  <td className="px-4 py-3">2 days ago</td>
                  <td className="px-4 py-3">3:45</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}