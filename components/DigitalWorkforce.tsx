import React from 'react';
import { AGENTS } from '../constants';
import { Bot, RefreshCw, CheckCircle } from 'lucide-react';

const DigitalWorkforce: React.FC = () => {
  return (
    <div className="bg-dragon-800 border border-dragon-700 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-display text-lg text-white flex items-center gap-2">
          <Bot className="w-5 h-5 text-purple-500" />
          DIGITAL WORKFORCE (AGENTS)
        </h2>
        <span className="text-xs font-mono px-2 py-1 bg-purple-500/20 text-purple-400 rounded border border-purple-500/50">
          HUMAN-FREE ZONE
        </span>
      </div>

      <div className="space-y-4">
        {AGENTS.map((agent) => (
          <div key={agent.id} className="bg-black/40 border-l-2 border-purple-500 p-3 rounded-r hover:bg-black/60 transition-colors">
            <div className="flex justify-between items-start">
               <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-purple-400 font-bold">{agent.role}</span>
                  <span className="text-gray-600 text-xs font-mono">| {agent.id}</span>
               </div>
               <div className="flex items-center gap-1 text-xs font-mono text-dragon-green">
                  <CheckCircle className="w-3 h-3" />
                  {agent.efficiency}% EFF
               </div>
            </div>
            
            <p className="text-sm font-mono text-gray-300 mt-1">{agent.task}</p>
            
            <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 font-mono border-t border-white/5 pt-2">
               <RefreshCw className="w-3 h-3 animate-spin" />
               <span className="truncate">{agent.lastAction}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 bg-dragon-900/50 p-3 rounded border border-dashed border-gray-700">
         <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span>SELF-REPAIR STATUS</span>
            <span className="text-dragon-green">READY</span>
         </div>
         <div className="w-full bg-gray-800 h-1 mt-2 rounded-full overflow-hidden">
             <div className="w-full h-full bg-dragon-green animate-pulse"></div>
         </div>
         <div className="text-[10px] text-gray-600 mt-1 uppercase">
            Auto-Scaling Containers (Docker/K8s) Active - 0ms Latency
         </div>
      </div>
    </div>
  );
};

export default DigitalWorkforce;