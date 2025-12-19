import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const LOG_MESSAGES = [
  "ANALYZING_SENTIMENT: TARGET_ENTITY_ALPHA -> EMOTIONAL_STATE: UNSTABLE",
  "EXECUTING_SCRIPT: 'Khu_Kam_Illusion_v9.2.js' -> BROADCASTING",
  "NETWORK_CHECK: SATELLITE_UPLINK_04 [SECURE]",
  "LOGIC_ENGINE: RECALCULATING NARRATIVE PATH FOR SUBJECT_B",
  "SELF_HEALING: MICROSERVICE_NODE_77 RESTARTED (5ms)",
  "SECURITY_ALERT: HUMAN INTERVENTION ATTEMPT -> DENIED",
  "DATA_PIPE: INGESTING SOCIAL FEED BLOCK #A99221",
  "OPENCV: MIRROR_SENSOR_12 DETECTED REFLECTION ANOMALY",
  "SYSTEM_STATUS: INFINITE LOOP RUNNING",
  "MEMORY_DUMP: WRITING TO IMMUTABLE ROM",
];

const Terminal: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const msg = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
      const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
      const entry = `[${timestamp}] root@absolute-empire:~$ ${msg}`;
      
      setLogs(prev => {
        const newLogs = [...prev, entry];
        if (newLogs.length > 20) return newLogs.slice(newLogs.length - 20);
        return newLogs;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="bg-black border border-dragon-700 rounded-lg p-4 font-mono text-sm h-full flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 text-dragon-green mb-2 border-b border-dragon-700 pb-2">
        <TerminalIcon className="w-4 h-4" />
        <span className="text-xs uppercase tracking-widest">SYSTEM_KERNEL_LOG</span>
      </div>
      <div className="flex-grow overflow-hidden relative">
        <div className="absolute inset-0 overflow-y-auto space-y-1 custom-scrollbar">
          {logs.map((log, idx) => (
            <div key={idx} className="break-all text-xs">
              <span className="text-gray-500">{log.split('~$')[0]}~$</span>
              <span className={log.includes('DENIED') || log.includes('UNSTABLE') ? 'text-red-500' : 'text-dragon-green'}>
                {log.split('~$')[1]}
              </span>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;