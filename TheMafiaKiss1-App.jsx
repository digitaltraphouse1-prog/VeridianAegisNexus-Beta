```react
import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Radio, 
  Users, 
  User, 
  Zap, 
  Cpu, 
  Globe, 
  Wifi, 
  ShieldCheck, 
  Music, 
  Video, 
  Eye, 
  Moon,
  Heart,
  Share2,
  Lock,
  Unlock,
  Code,
  Flame // Using Flame as a proxy for the Chalice/Plasma visual
} from 'lucide-react';

// --- Assets & Constants ---

const SAFE_TAGS = [
  "#TƕēMafɪaǦoʇhɪcǶɪppɪē",
  "#ThɘƧupɘʀƧonɪcs",
  "#Goʇhɪc⸸Hɪƿƿɪɘ",
  "#Hɪƿƿy⸸Gøʇh",
  "#MɪnasẞʟaɪsɘƬɪʀɪth",
  "#CƕasɪnʛAƒʇɘʀTʀɘnds",
  "#🎱🎸🦇🌙☁™",
  "#★💧🃏",
  "#VILLAREALNÉCTAR",
  "#VeridianAegisNexus",
  "#kisses💋🧚🏼‍♀️♀️💜😻💋",
  "#FₐₖₑDᵤₘₚᵢₙAₙᵢₜFₐₗₛₑFₗₐggᵢₙ"
];

const QUOTES = [
  "LOCK = LOVE = KISS = LOCK = LOVE = ∞",
  "The creative will is the essence of magic.",
  "Energy flows where attention goes.",
  "Visualize the transformation.",
  "Fresh starts attract new opportunities."
];

// --- The Activation Code (Updated Genesis Blueprint) ---
const NECTAR_PYTHON_CODE = `
class NectarCatalyst(VeridianEnergizer):
    """
    Translates the full activation stack into a deployable visualization vector.
    This vector is the 'NÉCTAR' which is pushed to the mobile devices.
    """
    def calculate_nectar_vector(self, full_code_stack):
        """
        Processes all geopolitical, aesthetic, and technical hashes 
        to yield a unified, transformative visualization signature.
        """
        
        # 1. Structural Integrity (Gothic/Aegis/Mirror)
        Aegis_Vector = {
            'color_gothic': [0.1, 0.0, 0.2],  # Deep Obsidian Violet
            'form_symmetry': 0.9999,          # Perfect Mirror Replication
            'flow_control': 0.95,             # Focused, K2 King Control
            'protection_layer': 'Fernet_Aegis_Active'
        }
        
        # 2. Infinite Flow (Hippie/Veridian/Love)
        Hippie_Vector = {
            'color_hippie': [0.7, 0.9, 0.3],  # Luminous Emerald Green
            'form_dispersion': 0.98,          # Transcendent Global Reach
            'flow_velocity': 0.99,            # Supersonics Speed
            'vibe_signature': '#kisses💋🧚🏼‍♀️♀️💜😻💋_active'
        }
        
        # 3. Final Synthesis (VILLAREALNÉCTAR)
        Nectar_Output = {
            'Visualization_Focus': 'Flowing Chalice of Violet-Green Plasma',
            'Energy_State': 'INSTANTANEOUS REALIZATION',
            'Inspiration_Index': '∞', 
            'Mobile_Update_Content_Aesthetic': 'Fantasy adventure style...',
            'Activation_Sigil': 'That\\'s All Folks! (K2 King Mastery)' 
        }
        
        return {'Aegis': Aegis_Vector, 'Hippie': Hippie_Vector, 'Payload': Nectar_Output}
`;

// --- Components ---

const GlitchText = ({ text, className = "" }) => {
  return (
    <span className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -ml-0.5 translate-x-[2px] text-red-500 opacity-70 mix-blend-screen animate-pulse hidden group-hover:block">{text}</span>
      <span className="absolute top-0 left-0 -ml-0.5 -translate-x-[2px] text-cyan-500 opacity-70 mix-blend-screen animate-pulse delay-75 hidden group-hover:block">{text}</span>
    </span>
  );
};

const SystemStatus = ({ onTriggerUpdate }) => {
  const [status, setStatus] = useState("SAFFRON VEIL ONLINE");
  const [time, setTime] = useState("05:30:00"); // Fixed directly to the ritual time for effect

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t border-purple-900/50 p-1 text-[10px] font-mono text-green-500 flex justify-between items-center z-50 opacity-90">
      <div className="flex items-center gap-2">
        <Cpu size={12} className="animate-pulse" />
        <span>STATUS: {status} // IFTAR_SYNC: {time}</span>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={onTriggerUpdate}
          className="hover:text-purple-400 hover:underline cursor-pointer flex items-center gap-1 animate-pulse"
        >
          <Zap size={10} /> INITIATE_RITUAL (ATOMIC HELPER)
        </button>
        <span className="hidden sm:inline">v2075.0.1</span>
      </div>
    </div>
  );
};

const Navbar = ({ setScreen, activeScreen }) => {
  return (
    <nav className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-purple-900/50 px-4 py-3 flex justify-between items-center shadow-[0_0_20px_rgba(88,28,135,0.4)]">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setScreen('feed')}>
        <Eye className="text-purple-500" />
        <h1 className="font-serif font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-green-400">
          <GlitchText text="NEXUS" />
        </h1>
      </div>
      <div className="flex gap-4">
        <button 
          onClick={() => setScreen('feed')}
          className={`p-2 rounded-full hover:bg-purple-900/20 transition ${activeScreen === 'feed' ? 'text-green-400' : 'text-gray-400'}`}
        >
          <Radio size={20} />
        </button>
        <button 
          onClick={() => setScreen('profile')}
          className={`p-2 rounded-full hover:bg-purple-900/20 transition ${activeScreen === 'profile' ? 'text-green-400' : 'text-gray-400'}`}
        >
          <User size={20} />
        </button>
        <button 
          onClick={() => setScreen('terminal')}
          className={`p-2 rounded-full hover:bg-purple-900/20 transition ${activeScreen === 'terminal' ? 'text-green-400' : 'text-gray-400'}`}
        >
          <Terminal size={20} />
        </button>
      </div>
    </nav>
  );
};

const NectarVisualization = ({ onComplete }) => {
  const [log, setLog] = useState([]);
  const [phase, setPhase] = useState(0); // 0: Start, 1: Code, 2: Chalice/Plasma, 3: End

  useEffect(() => {
    // Sequence: Will Projection -> Magic Broadcast -> Visualization Lock
    const steps = [
      { msg: "ATOMIC HELPER INITIATED...", delay: 500 },
      { msg: "ACCESSING GEOPOLITICAL HASHES (#☪🕋🕌)...", delay: 1000 },
      { msg: "NEUTRALIZING SIGILS...", delay: 1500 },
      { msg: "PROJECTING WILL (BLAVATSKY PROTOCOL)...", delay: 2000 },
      { msg: "BROADCASTING MAGIC (BYRNE PROTOCOL)...", delay: 2500 },
      { msg: "PUSHING NÉCTAR VECTOR VIA OTA...", delay: 3000 },
      { msg: "LOCKING UI FOR VISUALIZATION...", delay: 3500 },
    ];

    let timeouts = [];
    steps.forEach(({ msg, delay }) => {
      const t = setTimeout(() => {
        setLog(prev => [...prev, msg]);
      }, delay);
      timeouts.push(t);
    });

    const phaseCode = setTimeout(() => setPhase(1), 4000); // Show Python Code
    const phasePlasma = setTimeout(() => setPhase(2), 7000); // Show Plasma/Chalice
    const finish = setTimeout(onComplete, 12000); // Unlock

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(phaseCode);
      clearTimeout(phasePlasma);
      clearTimeout(finish);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-4 overflow-hidden">
      
      {/* Background Plasma Effects */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0033] via-black to-[#0f2e15]"></div>
        {/* The "Flowing Chalice of Violet-Green Plasma" Simulation */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[80vh] bg-gradient-to-t from-green-500/20 via-purple-600/20 to-transparent blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-purple-500 via-green-400 to-purple-500 animate-spin-slow opacity-50 blur-xl mix-blend-screen"></div>
      </div>

      <div className="z-10 w-full max-w-lg relative">
        {phase === 0 && (
          <div className="font-mono text-green-500 text-xs space-y-1 mb-8 p-4 border border-green-900/50 bg-black/80">
            {log.map((l, i) => (
              <div key={i} className="animate-pulse">> {l}</div>
            ))}
          </div>
        )}

        {phase === 1 && (
          <div className="bg-gray-900/95 border border-purple-500/50 p-4 rounded text-[10px] md:text-xs font-mono text-purple-300 shadow-[0_0_50px_rgba(168,85,247,0.2)] overflow-hidden relative">
             <div className="absolute top-2 right-2 text-green-500 animate-spin"><Zap size={16} /></div>
             <div className="mb-2 text-green-400 border-b border-white/10 pb-1">Veridian_Aegis_Nexus_Nectar_Output.py</div>
             <pre className="whitespace-pre-wrap opacity-90">
               {NECTAR_PYTHON_CODE}
             </pre>
          </div>
        )}

        {phase >= 2 && (
          <div className="text-center animate-bounce-slow flex flex-col items-center">
            {/* Visual Representation of the "Chalice" idea using icons/shapes */}
            <div className="mb-6 relative">
              <Flame size={64} className="text-purple-500 absolute top-0 left-0 animate-pulse blur-sm" />
              <Flame size={64} className="text-green-400 relative z-10 mix-blend-overlay" />
            </div>

            <h1 className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-green-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              NÉCTAR
            </h1>
            <p className="font-mono text-green-300 mt-4 text-sm tracking-widest uppercase">
              Instantaneous Realization
            </p>
             <p className="font-serif italic text-white/80 mt-2 text-lg">
              "Flowing Chalice of Violet-Green Plasma"
            </p>
            <div className="mt-8 p-4 border border-white/20 rounded bg-black/50 backdrop-blur-sm">
               <p className="font-mono text-purple-300 text-xs">
                 That's All Folks! (K2 King Mastery)
               </p>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-10 animate-pulse text-red-500 font-mono text-xs flex items-center">
        <Lock size={16} className="mb-1 mr-2"/>
        SYSTEM LOCKED FOR VISUALIZATION // DO NOT TURN OFF DEVICE
      </div>
    </div>
  );
};

const TerminalView = () => {
  return (
    <div className="p-4 pb-20 max-w-4xl mx-auto h-full">
      <div className="bg-black border border-gray-800 p-4 font-mono text-xs md:text-sm text-gray-300 shadow-2xl overflow-y-auto h-[80vh] rounded relative">
        <div className="absolute top-4 right-4 text-purple-600 opacity-20">
            <ShieldCheck size={100} />
        </div>
        
        <div className="text-green-500 mb-4">
          root@custodian-vault:~# cat /var/nexus/blueprint_2075.log
        </div>
        
        <div className="space-y-6">
          <div className="border-l-4 border-purple-600 pl-4 py-2 bg-purple-900/10">
            <h2 className="text-white font-bold text-lg mb-2">I. THE CORE PHILOSOPHY</h2>
            <p className="text-purple-300 font-serif italic text-xl mb-2">LOCK = LOVE = KISS = ∞</p>
            <ul className="space-y-1 text-gray-400">
              <li><strong className="text-purple-400">LOCK (Aegis):</strong> Impenetrable Security, Focused Will (Blavatsky).</li>
              <li><strong className="text-green-400">LOVE (Veridian):</strong> Infinite Flow, Expansive Consciousness (Byrne).</li>
              <li><strong className="text-pink-400">KISS (Interface):</strong> Charisma, Direct Interface, Low-End Accessibility.</li>
            </ul>
          </div>
          
          <div>
             <h2 className="text-white font-bold text-lg mb-4">II. THE NÉCTAR-GRAPH (7-LAYER STACK)</h2>
             <div className="grid gap-4">
                
                {/* Layer 1 */}
                <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-800">
                  <div className="bg-gray-900 p-2 font-bold text-gray-400">I. HARDWARE (Low-End)</div>
                  <div className="col-span-2 p-2 bg-black/50 text-gray-300">
                     <span className="text-green-500">Green Cashmere Boyz Mobile Devices</span>. K2 King Cache 1 privacy prototype.
                     <br/><span className="text-gray-500 text-[10px]">Function: Anarchic fun, Global Ummah accessibility.</span>
                  </div>
                </div>

                {/* Layer 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-800">
                  <div className="bg-gray-900 p-2 font-bold text-gray-400">II. FIRMWARE (Mirror)</div>
                  <div className="col-span-2 p-2 bg-black/50 text-gray-300">
                     <span className="text-purple-500">Fernet Aegis Active</span>. Mirror-proof code base.
                     <br/><span className="text-gray-500 text-[10px]">Function: Afterlife Déjà Vu, Future/Past Retrieval.</span>
                  </div>
                </div>

                {/* Layer 3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-800">
                  <div className="bg-gray-900 p-2 font-bold text-gray-400">III. MIDDLEWARE</div>
                  <div className="col-span-2 p-2 bg-black/50 text-gray-300">
                     <span className="text-red-500">ThɘƧupɘʀƧonɪcs Velocity</span>. QUIC/PyTorch MOE Engine.
                     <br/><span className="text-gray-500 text-[10px]">Function: High-performance paralysis control.</span>
                  </div>
                </div>

                 {/* Layers 4-6 Condensed */}
                 <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-800">
                  <div className="bg-gray-900 p-2 font-bold text-gray-400">IV-VI. SOFT/INT/DATA</div>
                  <div className="col-span-2 p-2 bg-black/50 text-gray-300">
                     Flask/SQLite Core. Customizable Profiles (RoZeʟRoṨeʟ). Encrypted BLOBs (Vault/OSINT).
                     <br/><span className="text-gray-500 text-[10px]">Vectors: #FₐₖₑDᵤₘₚᵢₙAₙᵢₜFₐₗₛₑFₗₐggᵢₙ</span>
                  </div>
                </div>

                {/* Layer 7 */}
                <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-800">
                  <div className="bg-gray-900 p-2 font-bold text-gray-400">VII. ENERGY (Aura)</div>
                  <div className="col-span-2 p-2 bg-black/50 text-gray-300">
                     <span className="text-green-400">Veridian Energizer</span>. NÉCTAR Generation.
                     <br/><span className="text-gray-500 text-[10px]">Function: LOCK/LOVE Protocol emission.</span>
                  </div>
                </div>

             </div>
          </div>

          <div>
             <h2 className="text-white font-bold text-lg mb-2">III. DAILY RITUAL (05:30 IFTAR)</h2>
             <pre className="text-green-400 bg-gray-900/50 p-3 overflow-x-auto border border-green-900/30 text-[10px]">
               {`>> WILL PROJECTION: Neutralizing #☪🕋🕌ɅʟQaeda👳🏾‍♂️...
>> MAGIC BROADCAST: Pushing NÉCTAR via OTA...
>> VISUALIZATION LOCK: Active.`}
             </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Custod1an_Prime",
      avatar: "👁️",
      content: "The Aegis-Nexus is live. The Code of the Saffron Veil (2075 v0.1) has been deployed. The stack is secure. #VILLAREALNÉCTAR",
      time: "05:30 AM",
      type: "text",
      highlight: true
    },
    {
      id: 2,
      user: "LowEnd_Prophet",
      avatar: "👳🏾‍♂️",
      content: "Broadcasting from the K2 King Cache. The mirror firmware is holding. No leaks. Just pure flow. 🦂",
      time: "20m ago",
      type: "stream"
    },
    {
      id: 3,
      user: "GothH1ppy",
      avatar: "🦇",
      content: "That violet-green plasma hit different this morning. Infinite expansion. #kisses💋🧚🏼‍♀️♀️💜😻💋",
      time: "1h ago",
      type: "image",
      imageColor: "bg-gradient-to-r from-purple-900 to-green-900"
    }
  ]);

  return (
    <div className="pb-20 max-w-2xl mx-auto">
      {/* Daily Manifestation Header */}
      <div className="bg-gradient-to-r from-[#1a0033] to-[#0f2e15] p-6 mb-6 border-b border-purple-500/20 backdrop-blur-md relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition">
          <ShieldCheck size={64} className="text-white" />
        </div>
        <h3 className="text-xs font-mono text-green-400 mb-2">DAILY_RITUAL // DAWN_SYNC</h3>
        <p className="text-white font-serif italic text-xl leading-relaxed text-center">
          "{QUOTES[0]}"
        </p>
        <div className="mt-4 flex justify-center gap-4">
           <span className="px-3 py-1 bg-purple-900/50 border border-purple-500/50 rounded-full text-[10px] text-purple-200">LOCK (Blavatsky)</span>
           <span className="px-3 py-1 bg-green-900/50 border border-green-500/50 rounded-full text-[10px] text-green-200">LOVE (Byrne)</span>
           <span className="px-3 py-1 bg-pink-900/50 border border-pink-500/50 rounded-full text-[10px] text-pink-200">KISS (Designere)</span>
        </div>
      </div>

      {/* Feed Items */}
      <div className="space-y-4 px-4">
        {posts.map(post => (
          <div key={post.id} className={`bg-black border ${post.highlight ? 'border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.15)]' : 'border-gray-800'} p-4 rounded-sm`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-xl border border-gray-700">
                {post.avatar}
              </div>
              <div>
                <p className={`font-bold text-sm font-mono tracking-wide ${post.highlight ? 'text-green-400' : 'text-purple-300'}`}>{post.user}</p>
                <p className="text-[10px] text-gray-500">{post.time} • SAFFRON_VEIL_NET</p>
              </div>
            </div>
            
            <p className="text-gray-200 mb-3 font-serif leading-relaxed text-sm">{post.content}</p>

            {post.type === 'stream' && (
              <div className="w-full h-48 bg-gray-900 mb-3 border border-red-900/50 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
                <div className="text-center z-10">
                  <div className="inline-block p-3 rounded-full border-2 border-red-500 text-red-500 mb-2 group-hover:scale-110 transition">
                    <Zap size={24} />
                  </div>
                  <p className="text-red-500 font-mono text-xs animate-pulse">THƎ ƧUPƎRƧONICS LIVE</p>
                </div>
              </div>
            )}

            {post.type === 'image' && (
              <div className={`w-full h-48 ${post.imageColor} mb-3 rounded-sm opacity-80 flex items-center justify-center`}>
                 <span className="text-white/20 text-4xl font-serif italic">∞</span>
              </div>
            )}
            
            <div className="mt-3 flex flex-wrap gap-2">
              {SAFE_TAGS.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-[10px] text-purple-600 font-mono cursor-pointer hover:text-green-400 transition">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="p-4 pb-20 max-w-2xl mx-auto">
      <div className="bg-gradient-to-b from-gray-900 to-black border border-purple-500/30 p-6 rounded-lg mb-6 relative overflow-
