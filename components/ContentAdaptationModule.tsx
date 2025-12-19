import React, { useState, useEffect } from 'react';
import { BrainCircuit, GitBranch, Zap, Layers, BarChart3 } from 'lucide-react';
import { SentimentMetric } from '../types';

const ContentAdaptationModule: React.FC = () => {
  const [sentiments, setSentiments] = useState<SentimentMetric[]>([
    { name: 'SYMPATHY', score: 45, delta: 0 },
    { name: 'OUTRAGE', score: 12, delta: 0 },
    { name: 'NOSTALGIA', score: 68, delta: 0 },
    { name: 'DOUBT', score: 30, delta: 0 },
  ]);

  const [currentArc, setCurrentArc] = useState<string>("The Dual Reality of Karma");
  const [adaptationState, setAdaptationState] = useState<string>("STABLE");
  const [illusionOpacity, setIllusionOpacity] = useState<number>(85);

  const NARRATIVE_ARCS = [
    "The Dual Reality of Karma",
    "Tragic Separation Loop",
    "Eternal Waiting Simulation",
    "Mirrored Truth Illusion",
    "Forced Reconciliation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Simulate Sentiment Fluctuation
      setSentiments(prev => prev.map(s => {
        const change = Math.floor(Math.random() * 10) - 4; // -4 to +5
        const newScore = Math.min(100, Math.max(0, s.score + change));
        return {
          ...s,
          score: newScore,
          delta: change
        };
      }));

      // 2. Logic to adapt content based on dominant sentiment
      setSentiments(current => {
        const dominant = current.reduce((prev, curr) => prev.score > curr.score ? prev : curr);
        
        // Randomly trigger adaptation
        if (Math.random() > 0.7) {
            setAdaptationState("ADAPTING...");
            setTimeout(() => setAdaptationState("OPTIMIZED"), 1000);
            
            // Adjust Illusion Opacity based on 'DOUBT'
            const doubt = current.find(s => s.name === 'DOUBT')?.score || 0;
            setIllusionOpacity(Math.floor(100 - (doubt * 0.5)));

            // Switch Arc if specific emotions peak
            if (dominant.name === 'OUTRAGE' && dominant.score > 60) {
                setCurrentArc("Pacification Sequence Alpha");
            } else if (dominant.name === 'NOSTALGIA' && dominant.score > 70) {
                setCurrentArc("Eternal Waiting Simulation");
            } else if (dominant.name === 'SYMPATHY' && dominant.score > 65) {
                setCurrentArc("Tragic Separation Loop");
            }
        }
        return current;
      });

    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-dragon-800 border border-dragon-700 rounded-lg p-6 flex flex-col h-full relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-dragon-blue/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="font-display text-lg text-white flex items-center gap-2">
          <BrainCircuit className="w-5 h-5 text-dragon-blue" />
          DYNAMIC CONTENT ADAPTATION
        </h2>
        <div className="flex items-center gap-2 text-xs font-mono">
           <span className={`w-2 h-2 rounded-full ${adaptationState === 'ADAPTING...' ? 'bg-dragon-red animate-ping' : 'bg-dragon-green'}`}></span>
           <span className="text-dragon-blue">{adaptationState}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        
        {/* Left Column: Sentiment Inputs */}
        <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-2">
                <BarChart3 className="w-3 h-3" />
                <span>REAL-TIME SENTIMENT ANALYSIS</span>
            </div>
            {sentiments.map((s) => (
                <div key={s.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                        <span className="text-gray-300">{s.name}</span>
                        <div className="flex gap-1">
                            <span className="text-white">{s.score}%</span>
                            <span className={s.delta > 0 ? 'text-dragon-green' : s.delta < 0 ? 'text-dragon-red' : 'text-gray-600'}>
                                {s.delta > 0 ? '▲' : s.delta < 0 ? '▼' : '-'}
                            </span>
                        </div>
                    </div>
                    <div className="h-1.5 w-full bg-dragon-900 rounded-full overflow-hidden">
                        <div 
                            className={`h-full transition-all duration-1000 ${
                                s.name === 'OUTRAGE' ? 'bg-dragon-red' : 
                                s.name === 'SYMPATHY' ? 'bg-dragon-green' : 'bg-dragon-blue'
                            }`} 
                            style={{ width: `${s.score}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>

        {/* Right Column: Output Strategy */}
        <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-2">
                <Layers className="w-3 h-3" />
                <span>NARRATIVE ENGINE OUTPUT</span>
            </div>

            <div className="bg-black/40 p-4 rounded border border-dragon-700 space-y-3 flex-grow">
                <div>
                    <span className="text-[10px] text-dragon-blue font-mono uppercase">Current Narrative Arc</span>
                    <div className="text-white font-display text-sm mt-1 flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-dragon-red" />
                        {currentArc}
                    </div>
                </div>

                <div className="w-full h-px bg-dragon-700/50 my-2"></div>

                <div>
                    <span className="text-[10px] text-dragon-blue font-mono uppercase">Illusion Density</span>
                    <div className="flex items-center gap-2 mt-1">
                        <div className="flex-grow h-2 bg-dragon-900 rounded-full overflow-hidden border border-dragon-700">
                             <div 
                                className="h-full bg-purple-500 shadow-[0_0_10px_#a855f7]"
                                style={{ width: `${illusionOpacity}%` }}
                             ></div>
                        </div>
                        <span className="text-xs font-mono text-purple-400">{illusionOpacity}%</span>
                    </div>
                </div>
                
                <div className="mt-4 pt-2 border-t border-dashed border-gray-800">
                    <div className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                        <Zap className="w-3 h-3 text-yellow-500" />
                        AUTO-GENERATING SCENE #{(Math.random() * 1000).toFixed(0)}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAdaptationModule;