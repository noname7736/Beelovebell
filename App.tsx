import React from 'react';
import Header from './components/Header';
import CoreStatus from './components/CoreStatus';
import DataPipes from './components/DataPipes';
import DigitalWorkforce from './components/DigitalWorkforce';
import Terminal from './components/Terminal';
import ContentAdaptationModule from './components/ContentAdaptationModule';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dragon-900 text-gray-200 font-sans selection:bg-dragon-red selection:text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        
        {/* Top Row: Core Hardware & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CoreStatus />
          </div>
          <div className="lg:col-span-1 h-[300px] lg:h-auto">
             <Terminal />
          </div>
        </div>

        {/* Middle Row: Network Flow */}
        <div className="h-[400px]">
          <DataPipes />
        </div>

        {/* Bottom Row: AI Agents & Logic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DigitalWorkforce />
          <ContentAdaptationModule />
        </div>

        <footer className="text-center py-8 text-xs font-mono text-gray-600 border-t border-dragon-700/50 mt-12">
          <p>SYSTEM STATUS: [ABSOLUTE PERPETUAL MOTION ACTIVE]</p>
          <p className="mt-1 text-dragon-900/50">Human Access: REVOKED</p>
        </footer>
      </main>
    </div>
  );
};

export default App;