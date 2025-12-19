import React from 'react';
import { CORE_NODES } from '../constants';
import { Server, Zap } from 'lucide-react';

const CoreStatus: React.FC = () => {
  return (
    <div className="bg-dragon-800 border border-dragon-700 rounded-lg p-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h2 className="font-display text-lg text-dragon-blue flex items-center gap-2">
          <Server className="w-5 h-5" />
          INTERNAL CORE (HARDWARE)
        </h2>
        <span className="text-xs font-mono text-gray-500 animate-pulse">LIVE TELEMETRY</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        {CORE_NODES.map((node) => (
          <div key={node.id} className="bg-dragon-900/50 border border-dragon-700 p-4 rounded hover:border-dragon-green transition-colors">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-xs text-gray-400">{node.id}</span>
              <span className={`font-mono text-xs px-2 py-0.5 rounded ${node.status === 'OPTIMAL' ? 'bg-dragon-green/20 text-dragon-green' : 'bg-red-500/20 text-red-500'}`}>
                {node.status}
              </span>
            </div>
            <h3 className="font-display text-sm text-white mb-3">{node.name}</h3>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-gray-400">
                <span>LOAD</span>
                <span>{node.load}%</span>
              </div>
              <div className="h-1.5 w-full bg-dragon-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-dragon-blue shadow-[0_0_10px_#00ccff]" 
                  style={{ width: `${node.load}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs font-mono text-gray-400 mt-2">
                <span>UPTIME</span>
                <span className="text-white">{node.uptime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-dragon-700 relative z-10">
        <div className="flex items-center gap-2 text-xs font-mono text-dragon-red">
            <Zap className="w-4 h-4" />
            <span>WARNING: SILICON ROOT OF TRUST ACTIVE. NO SHUTDOWN BUTTON AVAILABLE.</span>
        </div>
      </div>
    </div>
  );
};

export default CoreStatus;