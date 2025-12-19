import { SystemNode, DigitalAgent } from './types';

export const CORE_NODES: SystemNode[] = [
  { id: 'IBM-Z16-01', name: 'CORE_LOGIC_PRIME (IBM z16)', status: 'OPTIMAL', load: 89, uptime: '99.99999%' },
  { id: 'HPE-FLEX-01', name: 'MEMORY_MATRIX (HPE Superdome)', status: 'OPTIMAL', load: 72, uptime: '99.99999%' },
  { id: 'VERTEX-AI-01', name: 'SENTIMENT_ENGINE (Vertex AI)', status: 'OPTIMAL', load: 94, uptime: '100.00000%' },
  { id: 'SILICON-ROOT', name: 'HARDWARE_TRUST_ROOT', status: 'OPTIMAL', load: 12, uptime: 'ALWAYS_ON' },
];

export const AGENTS: DigitalAgent[] = [
  { id: 'AGT-NET-01', role: 'NETWORK', task: 'Validating Satellite Handshake', efficiency: 99.8, lastAction: 'Rerouted packet stream via Node JS Microservice' },
  { id: 'AGT-DB-01', role: 'DATABASE', task: 'Sorting Karmic Algorithms', efficiency: 99.9, lastAction: 'Archived Survey Data Block 9921' },
  { id: 'AGT-SEC-01', role: 'SECURITY', task: 'Neutralizing External Interrupt', efficiency: 100.0, lastAction: 'Blocked unauthorized terminal access' },
  { id: 'AGT-LOG-01', role: 'LOGIC', task: 'Constructing Narrative Flow', efficiency: 98.5, lastAction: 'Synthesized dual-reality output' },
];