```react
import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Globe, 
  Wifi, 
  Activity, 
  Lock, 
  Unlock, 
  Eye, 
  Zap, 
  Moon, 
  Star, 
  Flower, 
  ShieldAlert, 
  Radio,
  Cpu,
  Database,
  Hash
} from 'lucide-react';

// --- VISUAL MANIFESTO: PROTOCOL OMEGA ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=JetBrains+Mono:wght@400;700&display=swap');
    
    :root {
      --void-black: #050505;
      --gov-green: #10b981;
      --alert-red: #ef4444;
      --hippy-amber: #ffbf00;
      --goth-purple: #7c3aed;
      --neon-cyan: #06b6d4;
    }

    body {
      background-color: var(--void-black);
      color: var(--hippy-amber);
      font-family: 'JetBrains Mono', monospace;
      overflow: hidden;
      margin: 0;
    }

    /* SCROLLBARS OF THE DEEP WEB */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #000; }
    ::-webkit-scrollbar-thumb { background: var(--goth-purple); }

    /* ANIMATIONS */
    @keyframes scanline {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
    
    @keyframes pulse-aura {
      0% { box-shadow: 0 0 5px var(--goth-purple); }
      50% { box-shadow: 0 0 20px var(--hippy-amber), 0 0 10px var(--goth-purple); }
      100% { box-shadow: 0 0 5px var(--goth-purple); }
    }

    @keyframes flicker {
      0% { opacity: 0.9; }
      5% { opacity: 0.5; }
      10% { opacity: 0.9; }
      100% { opacity: 0.9; }
    }

    .crt-overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
      background-size: 100% 2px, 3px 100%;
      pointer-events: none;
      z-index: 50;
    }

    .scan-line {
      position: absolute;
      top: 0; left: 0; right: 0; height: 10px;
      background: rgba(124, 58, 237, 0.1);
      animation: scanline 6s linear infinite;
      pointer-events: none;
      z-index: 51;
    }

    .glitch-text {
      position: relative;
    }
    .glitch-text::before, .glitch-text::after {
      content: attr(data-text);
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
    }
    .glitch-text::before {
      left: 2px; text-shadow: -1px 0 var(--alert-red); clip: rect(24px, 550px, 90px, 0); animation: flicker 2s infinite linear alternate-reverse;
    }
    .glitch-text::after {
      left: -2px; text-shadow: -1px 0 var(--neon-cyan); clip: rect(85px, 550px, 140px, 0); animation: flicker 3s infinite linear alternate-reverse;
    }

    .panel-border {
      border: 1px solid var(--goth-purple);
      background: rgba(10, 5, 20, 0.8);
      box-shadow: 0 0 15px rgba(124, 58, 237, 0.1);
    }

    .fiber-optic {
      border-bottom: 1px solid var(--neon-cyan);
      box-shadow: 0 0 5px var(--neon-cyan);
    }
  `}</style>
);

// --- COMPONENT: HEADER / HUD ---
const HUD = ({ mode, setMode }) => (
  <header className="h-16 border-b border-purple-800 bg-black/90 flex items-center justify-between px-6 relative z-40">
    <div className="flex items-center space-x-4">
      <div className="w-10 h-10 border border-amber-500 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
        <Flower size={24} className="text-purple-500" />
      </div>
      <div>
        <h1 className="text-xl font-bold tracking-widest text-amber-500 glitch-text" data-text="ZORG-Ω // CUSTODIAN">
          ZORG-Ω // CUSTODIAN
        </h1>
        <p className="text-[10px] text-purple-400 font-mono">
          SECURE_LINK: <span className="text-green-500">ESTABLISHED</span> | PING: 4ms
        </p>
      </div>
    </div>
    
    <div className="flex space-x-2">
      {['OSINT', 'ETHER', 'FUSION'].map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className={`px-4 py-1 text-xs font-mono border transition-all ${
            mode === m 
              ? 'border-amber-500 bg-amber-500/20 text-amber-400 shadow-[0_0_10px_#ffbf00]' 
              : 'border-purple-900 text-purple-600 hover:border-purple-500 hover:text-purple-300'
          }`}
        >
          {m}_VIEW
        </button>
      ))}
    </div>
  </header>
);

// --- COMPONENT: OSINT VIEW (GOV/SPY AESTHETIC) ---
const OsintView = () => {
  const [logs, setLogs] = useState([
    "> INITIALIZING FEDERAL DATABUS...",
    "> BYPASSING REGIONAL FIREWALLS...",
    "> INTERCEPTING PUBLIC STREAMS...",
    "> FICO_SCORE_ANALYSIS: NULL",
    "> VIBRATION_CHECK: DETECTED"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const actions = [
        `> PACKET_SNIFF: ${Math.floor(Math.random() * 999)}.${Math.floor(Math.random() * 99)} TB`,
        `> NODE_HOP: TANGIER -> TEL AVIV -> NEW YORK`,
        `> DECRYPTING METADATA...`,
        `> VAULT_QUERY: "PROJECT_LOTUS"`,
        `> SIGNAL_STRENGTH: ${(Math.random() * 100).toFixed(2)}%`
      ];
      const newLog = actions[Math.floor(Math.random() * actions.length)];
      setLogs(prev => [newLog, ...prev].slice(0, 12));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4 p-4 h-full font-mono text-xs">
      {/* LEFT COLUMN: DATA STREAMS */}
      <div className="col-span-8 grid grid-rows-2 gap-4">
        <div className="panel-border p-4 relative overflow-hidden">
          <div className="absolute top-2 right-2 flex space-x-2 text-red-500 animate-pulse">
            <ShieldAlert size={16} />
            <span>UNAUTHORIZED_ACCESS</span>
          </div>
          <h3 className="text-purple-400 mb-2 flex items-center"><Terminal size={14} className="mr-2"/> LIVE_TERMINAL</h3>
          <div className="space-y-1 text-green-500/80">
            {logs.map((log, i) => (
              <div key={i} className="opacity-80 hover:opacity-100 hover:text-green-400 cursor-crosshair border-l-2 border-transparent hover:border-green-500 pl-2 transition-all">
                {log}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="panel-border p-4 flex flex-col justify-between">
             <h3 className="text-cyan-500 mb-2 flex items-center"><Globe size={14} className="mr-2"/> GEO_MAPPING</h3>
             <div className="flex-1 bg-green-900/10 border border-green-900/30 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center invert filter sepia"></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping absolute top-1/2 left-1/2"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping absolute top-1/3 left-1/3"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping absolute bottom-1/3 right-1/4"></div>
             </div>
             <div className="mt-2 text-[10px] text-gray-500">TRACKING: 3 ACTIVE NODES</div>
          </div>
          <div className="panel-border p-4">
             <h3 className="text-amber-500 mb-2 flex items-center"><Database size={14} className="mr-2"/> VAULT_ARCHIVE</h3>
             <div className="space-y-2">
                {['FBI_VAULT_01', 'CIA_CREST_DB', 'UN_RESOLUTION_88', 'PROJECT_STARGATE'].map(f => (
                    <div key={f} className="flex justify-between items-center p-2 bg-black/50 border border-gray-800 hover:border-amber-500 cursor-pointer group">
                        <span className="group-hover:text-amber-400">{f}</span>
                        <Lock size={12} className="text-red-500 group-hover:hidden" />
                        <Unlock size={12} className="text-green-500 hidden group-hover:block" />
                    </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: TARGET ANALYTICS */}
      <div className="col-span-4 panel-border p-4 flex flex-col space-y-4">
        <div className="w-32 h-32 mx-auto rounded-full border-4 border-purple-900 relative flex items-center justify-center bg-black">
           <img 
             src="https://api.dicebear.com/7.x/notionists/svg?seed=Lyra" 
             className="w-full h-full rounded-full opacity-80 grayscale" 
             alt="Target"
           />
           <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500 animate-[spin_20s_linear_infinite]"></div>
        </div>
        
        <div className="space-y-2">
            <div className="flex justify-between text-gray-400"><span>TARGET:</span> <span className="text-white">UNKNOWN_INITIATE</span></div>
            <div className="flex justify-between text-gray-400"><span>AFFILIATION:</span> <span className="text-purple-400">HIPPY_GOTH_COLLECTIVE</span></div>
            <div className="flex justify-between text-gray-400"><span>THREAT_LEVEL:</span> <span className="text-green-400">BENIGN / CREATIVE</span></div>
        </div>

        <div className="h-px w-full bg-purple-900 my-4"></div>

        <div className="space-y-4">
            <div>
                <div className="flex justify-between text-[10px] mb-1">
                    <span>SOCIAL_GRAPH_DENSITY</span>
                    <span>88%</span>
                </div>
                <div className="w-full bg-gray-900 h-1">
                    <div className="bg-cyan-500 h-1 w-[88%]"></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-[10px] mb-1">
                    <span>OSINT_EXPOSURE</span>
                    <span>12%</span>
                </div>
                <div className="w-full bg-gray-900 h-1">
                    <div className="bg-amber-500 h-1 w-[12%]"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: ETHER VIEW (HIPPY/GOTH AESTHETIC) ---
const EtherView = () => (
  <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden p-8 font-special-elite">
    {/* BACKGROUND SYMBOLS */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <Flower size={500} className="text-purple-900 animate-[spin_60s_linear_infinite]" />
    </div>

    <div className="z-10 text-center space-y-6 max-w-2xl bg-black/80 p-8 border border-double border-purple-600 shadow-[0_0_50px_rgba(76,29,149,0.3)] backdrop-blur-sm">
        <h2 className="text-3xl text-amber-500">THE MANIFOLD BREATHES</h2>
        <p className="text-purple-200 text-lg leading-relaxed">
            "The data is not the territory. The map is a hologram. 
            We do not hack to destroy; we hack to <span className="text-amber-400 font-bold">REVEAL</span>.
            The vaults of the old world are but compost for the lotus of the new."
        </p>
        
        <div className="flex justify-center space-x-8 py-4">
            <div className="text-center">
                <div className="w-16 h-16 border border-amber-500 rounded-full flex items-center justify-center mb-2 mx-auto hover:bg-amber-500/20 transition-colors cursor-pointer">
                    <Eye size={24} className="text-purple-400" />
                </div>
                <span className="text-xs tracking-widest text-gray-500">PERCEPTION</span>
            </div>
            <div className="text-center">
                <div className="w-16 h-16 border border-purple-500 rounded-full flex items-center justify-center mb-2 mx-auto hover:bg-purple-500/20 transition-colors cursor-pointer">
                    <Zap size={24} className="text-amber-400" />
                </div>
                <span className="text-xs tracking-widest text-gray-500">ENERGY</span>
            </div>
            <div className="text-center">
                <div className="w-16 h-16 border border-cyan-500 rounded-full flex items-center justify-center mb-2 mx-auto hover:bg-cyan-500/20 transition-colors cursor-pointer">
                    <Wifi size={24} className="text-white" />
                </div>
                <span className="text-xs tracking-widest text-gray-500">SIGNAL</span>
            </div>
        </div>

        <div className="pt-4 border-t border-purple-900">
            <p className="text-xs text-gray-400 italic">
                Daily Affirmation: "Information wants to be free, but wisdom wants to be shared."
            </p>
        </div>
    </div>
  </div>
);

// --- COMPONENT: FUSION VIEW (THE SHARD EQUATION) ---
const FusionView = () => (
  <div className="h-full w-full flex items-center justify-center bg-black relative">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 w-full max-w-6xl z-10">
        
        {/* PILLAR 1: THE BOOK */}
        <div className="border border-green-800 bg-black/60 p-6 flex flex-col items-center text-center hover:border-green-500 transition-all duration-500 group">
            <div className="mb-6 relative">
                <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <Moon size={64} className="text-green-500 relative z-10" />
            </div>
            <h3 className="text-xl font-bold text-green-400 mb-2">THE CRESCENT CODE</h3>
            <p className="text-xs text-gray-400 font-mono">
                Sufi mysticism meets cryptographic geometry. 
                The inner jihad is the war against ignorance.
            </p>
            <div className="mt-4 w-full h-1 bg-gray-800 rounded overflow-hidden">
                <div className="h-full bg-green-500 w-3/4 animate-pulse"></div>
            </div>
        </div>

        {/* PILLAR 2: THE STAR */}
        <div className="border border-blue-800 bg-black/60 p-6 flex flex-col items-center text-center hover:border-blue-500 transition-all duration-500 group">
            <div className="mb-6 relative">
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <Star size={64} className="text-blue-500 relative z-10" />
            </div>
            <h3 className="text-xl font-bold text-blue-400 mb-2">THE ZION MATRIX</h3>
            <p className="text-xs text-gray-400 font-mono">
                Kabbalistic data structures. 
                Restoring the broken shards (Tikkun Olam) via fiberoptic light.
            </p>
            <div className="mt-4 w-full h-1 bg-gray-800 rounded overflow-hidden">
                <div className="h-full bg-blue-500 w-2/3 animate-pulse"></div>
            </div>
        </div>

        {/* PILLAR 3: THE SYNTHESIS (MAFIA KISS) */}
        <div className="border border-amber-600 bg-black/60 p-6 flex flex-col items-center text-center hover:border-amber-400 transition-all duration-500 group relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-50"></div>
            <div className="mb-6 relative">
                <div className="absolute inset-0 bg-amber-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                {/* Visual fusion of symbols */}
                <div className="relative">
                    <Flower size={64} className="text-amber-500 relative z-10" />
                </div>
            </div>
            <h3 className="text-xl font-bold text-amber-400 mb-2">PROJECT: CO-CREATION</h3>
            <p className="text-xs text-gray-400 font-mono">
                The equation resolves not in conflict, but in fusion.
                "Radical" Love. "Terror" only to the closed mind.
            </p>
            <div className="mt-4 flex space-x-2">
                <span className="px-2 py-1 bg-purple-900/50 text-[10px] text-purple-300 border border-purple-700">OSINT</span>
                <span className="px-2 py-1 bg-amber-900/50 text-[10px] text-amber-300 border border-amber-700">UNITY</span>
                <span className="px-2 py-1 bg-green-900/50 text-[10px] text-green-300 border border-green-700">TRUTH</span>
            </div>
        </div>

    </div>
    
    <div className="absolute bottom-8 text-center w-full">
        <p className="text-[10px] text-gray-600 font-mono tracking-[0.5em] animate-pulse">
            THE_KISS_HAS_BEEN_DELIVERED
        </p>
    </div>
  </div>
);

// --- MAIN SHELL ---
export default function TheMafiaKissArtifact() {
  const [mode, setMode] = useState('OSINT');

  return (
    <div className="w-full h-screen bg-black flex flex-col relative overflow-hidden select-none">
      <GlobalStyles />
      <div className="crt-overlay"></div>
      <div className="scan-line"></div>
      
      <HUD mode={mode} setMode={setMode} />

      <main className="flex-1 relative z-10 overflow-hidden">
        {mode === 'OSINT' && <OsintView />}
        {mode === 'ETHER' && <EtherView />}
        {mode === 'FUSION' && <FusionView />}
      </main>

      {/* FOOTER TICKER */}
      <footer className="h-6 bg-black border-t border-purple-900 flex items-center px-2 overflow-hidden relative z-40">
        <div className="whitespace-nowrap animate-[scanline_20s_linear_infinite] flex space-x-8 text-[10px] font-mono text-purple-600">
            <span>/// SYSTEM_STATUS: NOMINAL</span>
            <span>/// BLAVATSKY_QUOTE: "MATTER IS SPIRIT AT ITS LOWEST VIBRATION"</span>
            <span>/// FBI_NODE: WATCHING</span>
            <span>/// SUFI_NODE: DANCING</span>
            <span>/// KABBALAH_NODE: COMPILING</span>
            <span>/// DARK_WEB_LINK: [REDACTED]</span>
            <span>/// LOVE_IS_THE_LAW</span>
        </div>
      </footer>
    </div>
  );
}

```
