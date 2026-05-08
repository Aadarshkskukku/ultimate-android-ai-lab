import React from 'react';
import { Activity, Zap, Shield, Globe, Cpu } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'System Power', value: '98%', icon: <Zap className="text-yellow-400" /> },
    { label: 'AI Processing', value: '1.2ms', icon: <Cpu className="text-purple-400" /> },
    { label: 'Global Nodes', value: '42', icon: <Globe className="text-blue-400" /> },
    { label: 'Security Level', value: 'Ultra', icon: <Shield className="text-green-400" /> }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 font-sans selection:bg-purple-500">
      {/* Cinematic Background Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.15),transparent)] pointer-events-none" />

      <header className="relative z-10 flex justify-between items-center mb-16">
        <div>
          <h1 className="text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            SHIPLOOT X <span className="text-purple-500">CORE</span>
          </h1>
          <p className="text-gray-500 mt-2 uppercase tracking-[0.3em] text-xs">Generation-3 AI Autonomous Hub</p>
        </div>
        <div className="flex items-center gap-4 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-md">
          <div className="h-3 w-3 bg-green-500 rounded-full animate-ping" />
          <span className="text-xs font-mono">SYSTEM: ONLINE</span>
        </div>
      </header>

      {/* Main Intelligent Grid */}
      <main className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="group relative bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-500 backdrop-blur-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-black/40 rounded-lg group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <Activity className="text-gray-700 w-4 h-4" />
            </div>
            <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
            <p className="text-3xl font-bold mt-1 tracking-tight">{stat.value}</p>
            <div className="absolute bottom-0 left-0 h-1 bg-purple-500 w-0 group-hover:w-full transition-all duration-700 rounded-b-2xl" />
          </div>
        ))}
      </main>

      {/* Experimental Visualization Area */}
      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-br from-purple-900/20 to-black border border-white/10 p-8 rounded-3xl backdrop-blur-xl h-80 flex flex-col justify-end">
          <h2 className="text-2xl font-bold mb-2">Neural Network Uplink</h2>
          <p className="text-gray-400 text-sm max-w-md">
            The World #1 AI processing engine is currently analyzing global market trends for Shiploot X assets.
          </p>
          <div className="mt-6 h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-[75%] animate-pulse" />
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl flex flex-col items-center justify-center text-center group">
          <div className="w-24 h-24 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin mb-6" />
          <h3 className="text-xl font-bold">Awaiting Input</h3>
          <p className="text-gray-500 text-sm mt-2">Connect Masterbrain AI to start automation</p>
          <button className="mt-6 px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-purple-500 hover:text-white transition-colors">
            INITIALIZE
          </button>
        </div>
      </section>

      <footer className="relative z-10 mt-20 text-center text-gray-600 text-[10px] tracking-widest uppercase">
        © 2026 Masterbrain Technologies | Revolutionary Edition
      </footer>
    </div>
  );
};

export default Dashboard;
