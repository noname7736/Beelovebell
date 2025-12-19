import React from 'react';
import { ShieldAlert, Activity, Lock, Cpu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="border-b border-dragon-700 bg-dragon-900/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Cpu className="w-8 h-8 text-dragon-red animate-pulse-fast" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-dragon-red rounded-full shadow-[0_0_10px_#ff0033]"></div>
          </div>
          <div>
            <h1 className="font-display font-bold text-2xl tracking-wider text-white">
              DARK DRAGON <span className="text-dragon-red">CORE</span>
            </h1>
            <p className="font-mono text-xs text-dragon-green tracking-widest uppercase">
              System: The Absolute Autonomous Empire
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6 font-mono text-sm">
          <div className="flex items-center space-x-2 text-dragon-blue">
            <Activity className="w-4 h-4" />
            <span>PERPETUAL MOTION: <span className="text-white font-bold">ACTIVE</span></span>
          </div>
          <div className="flex items-center space-x-2 text-dragon-red">
            <Lock className="w-4 h-4" />
            <span>HUMAN INTERFACE: <span className="text-white font-bold">LOCKED</span></span>
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
             <ShieldAlert className="w-4 h-4" />
             <span>NO-KILL PROTOCOL: <span className="text-white font-bold">ENFORCED</span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;