export interface SystemNode {
  id: string;
  name: string;
  status: 'OPTIMAL' | 'WARNING' | 'CRITICAL' | 'SELF_HEALING';
  load: number;
  uptime: string;
}

export interface DigitalAgent {
  id: string;
  role: 'NETWORK' | 'DATABASE' | 'SECURITY' | 'LOGIC';
  task: string;
  efficiency: number;
  lastAction: string;
}

export interface DataStream {
  source: string;
  type: 'INPUT' | 'OUTPUT';
  volume: number; // TB/s
  integrity: number; // Percentage
}

export interface LogEntry {
  id: number;
  timestamp: string;
  level: 'INFO' | 'WARN' | 'EXECUTE' | 'SYSTEM';
  message: string;
}

export interface SentimentMetric {
  name: string;
  score: number;
  delta: number;
}