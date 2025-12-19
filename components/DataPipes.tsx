import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Globe, Radio } from 'lucide-react';

const DataPipes: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Initial data
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: i,
      input: Math.floor(Math.random() * 4000) + 3000,
      output: Math.floor(Math.random() * 3000) + 2000,
    }));
    setData(initialData);

    const interval = setInterval(() => {
      setData(prev => {
        const nextTime = prev[prev.length - 1].time + 1;
        const newData = {
          time: nextTime,
          input: Math.floor(Math.random() * 4000) + 3000,
          output: Math.floor(Math.random() * 3000) + 2000,
        };
        return [...prev.slice(1), newData];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-dragon-800 border border-dragon-700 rounded-lg p-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-display text-lg text-dragon-green flex items-center gap-2">
          <Globe className="w-5 h-5" />
          DIGITAL CIRCULATORY SYSTEM
        </h2>
        <div className="flex gap-4 text-xs font-mono">
           <span className="flex items-center gap-1 text-dragon-blue"><span className="w-2 h-2 bg-dragon-blue rounded-full"></span> INPUT (TB/s)</span>
           <span className="flex items-center gap-1 text-dragon-red"><span className="w-2 h-2 bg-dragon-red rounded-full"></span> OUTPUT (TB/s)</span>
        </div>
      </div>

      <div className="flex-grow min-h-[250px] relative">
         <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorInput" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00ccff" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00ccff" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorOutput" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff0033" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ff0033" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="time" hide />
              <YAxis hide domain={[0, 8000]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }}
                itemStyle={{ fontFamily: 'monospace' }}
              />
              <Area type="monotone" dataKey="input" stroke="#00ccff" fillOpacity={1} fill="url(#colorInput)" isAnimationActive={false} />
              <Area type="monotone" dataKey="output" stroke="#ff0033" fillOpacity={1} fill="url(#colorOutput)" isAnimationActive={false} />
            </AreaChart>
         </ResponsiveContainer>
         
         {/* Overlay Stats */}
         <div className="absolute top-2 left-2 pointer-events-none">
            <div className="text-xs font-mono text-gray-500 mb-1">ACTIVE SOURCES</div>
            <div className="text-white font-display text-sm">CCTV, OpenCV, Social (100+), Satellite</div>
         </div>
         <div className="absolute top-2 right-2 pointer-events-none text-right">
            <div className="text-xs font-mono text-gray-500 mb-1">BROADCAST TARGETS</div>
            <div className="text-white font-display text-sm flex items-center gap-2 justify-end">
                 36 TV CHANNELS <Radio className="w-3 h-3 text-dragon-red animate-pulse" />
            </div>
         </div>
      </div>
    </div>
  );
};

export default DataPipes;