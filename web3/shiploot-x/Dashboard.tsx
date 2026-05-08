import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ArrowUpRight, ShoppingCart, Users, Zap, Globe, ShieldCheck, Activity } from 'lucide-react';

// Cinematic Mock Data for SHIPLOOT X Analytics
const data = [
  { name: '00:00', sales: 4000, users: 2400 },
  { name: '04:00', sales: 3000, users: 1398 },
  { name: '08:00', sales: 2000, users: 9800 },
  { name: '12:00', sales: 2780, users: 3908 },
  { name: '16:00', sales: 1890, users: 4800 },
  { name: '20:00', sales: 2390, users: 3800 },
  { name: '24:00', sales: 3490, users: 4300 },
];

const StatCard = ({ title, value, icon: Icon, trend }: any) => (
  <div className="relative overflow-hidden group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-gray-400 mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
        <span className={`text-xs mt-2 inline-flex items-center font-semibold ${trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
          {trend} from yesterday
        </span>
      </div>
      <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform duration-500">
        <Icon size={24} />
      </div>
    </div>
    <div className="absolute -bottom-2 -right-2 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
      <Icon size={80} />
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 p-8 font-sans selection:bg-cyan-500/30">
      {/* Cinematic Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-8">
          <div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
              SHIPLOOT X CORE
            </h1>
            <p className="text-gray-400 mt-2 flex items-center gap-2 italic">
              <Activity size={16} className="text-cyan-400 animate-pulse" /> 
              Neural Network Online | Real-time Global Synchronization
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:bg-cyan-400 transition-colors duration-300 flex items-center gap-2">
              <Zap size={16} /> SYNC SYSTEM
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Revenue" value="$842,910" icon={ShoppingCart} trend="+12.5%" />
          <StatCard title="Global Users" value="2.4M" icon={Users} trend="+8.2%" />
          <StatCard title="Active Nodes" value="1,842" icon={Globe} trend="+2.4%" />
          <StatCard title="Security Level" value="L5" icon={ShieldCheck} trend="OPTIMAL" />
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Activity size={20} className="text-cyan-500" /> Performance Velocity
              </h2>
              <select className="bg-black border border-white/10 rounded-lg text-xs px-3 py-1 outline-none">
                <option>Real-time Feed</option>
                <option>24H Log</option>
              </select>
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                    itemStyle={{ color: '#06b6d4' }}
                  />
                  <Area type="monotone" dataKey="sales" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Sidebar - Recent Intelligence */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-md">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ArrowUpRight size={20} className="text-cyan-400" /> Neural Logs
            </h2>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4 items-start border-b border-white/5 pb-4 last:border-0">
                  <div className="w-2 h-2 mt-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
                  <div>
                    <p className="text-sm font-medium">Node Expansion v{i}.0</p>
                    <p className="text-xs text-gray-500 mt-1">Global node successfully synchronized in HK region.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
