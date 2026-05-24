```react
import React, { useState, useEffect, useRef } from 'react';
import { 
  Flower, 
  Ghost, 
  Radio, 
  Music, 
  Zap, 
  Heart, 
  Share2, 
  User, 
  LogOut, 
  Video,
  Send,
  Eye,
  EyeOff,
  Sliders,
  Instagram,
  Camera,
  Moon,
  Star,
  Terminal,
  ShieldAlert,
  Plus
} from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithCustomToken, 
  signInAnonymously, 
  onAuthStateChanged, 
  signOut
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp
} from 'firebase/firestore';

// --- THE FIREBASE RITUAL ---
let auth, db, appId;
let isFirebaseLive = false;

try {
  if (typeof __firebase_config !== 'undefined' && __firebase_config) {
    const firebaseConfig = JSON.parse(__firebase_config);
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    appId = typeof __app_id !== 'undefined' ? __app_id : 'hippygoth-default';
    isFirebaseLive = true;
  }
} catch (e) {
  console.log("Shadow Mode Active: Firebase not detected.");
}

// --- VISUAL MANIFESTO ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
    
    body {
      background-color: #050505;
      color: #FFBF00; /* Amber */
      font-family: 'Special Elite', cursive;
      overflow: hidden;
    }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #1a0b2e; }
    ::-webkit-scrollbar-thumb { background: #7c3aed; }

    @keyframes breathe {
      0% { box-shadow: 0 0 5px #4c1d95; }
      50% { box-shadow: 0 0 20px #d946ef, 0 0 10px #fbbf24; }
      100% { box-shadow: 0 0 5px #4c1d95; }
    }
    
    @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }

    .aura-pulse { animation: breathe 4s infinite ease-in-out; }
    .glitch-text { text-shadow: 2px 2px #4c1d95, -1px -1px #fbbf24; }
    .glitch-active { animation: glitch 0.2s infinite; }
    
    .scar-tissue-border {
      border: 1px dashed #4c1d95;
      box-shadow: 0 0 10px rgba(76, 29, 149, 0.2);
    }

    .osint-terminal {
      background: rgba(0, 20, 0, 0.95);
      color: #00ff00;
      font-family: 'Courier New', monospace;
      text-shadow: 0 0 5px #00ff00;
    }
    
    /* Custom Range Slider */
    input[type=range] {
      -webkit-appearance: none;
      background: transparent;
    }
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: #FFBF00;
      cursor: pointer;
      margin-top: -6px;
      box-shadow: 0 0 10px #FFBF00;
    }
    input[type=range]::-webkit-slider-runnable-track {
      width: 100%;
      height: 2px;
      background: #4c1d95;
    }
  `}</style>
);

// --- COMPONENT: THE LOGIN WOMB ---
const LoginScreen = ({ onLogin, loading }) => (
  <div className="flex flex-col items-center justify-center h-screen bg-black p-6 text-center space-y-8 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    
    {/* Hidden Sacred Symbols */}
    <div className="absolute top-10 left-10 opacity-20 text-purple-900"><Moon size={100} /></div>
    <div className="absolute bottom-10 right-10 opacity-20 text-amber-900"><Star size={100} /></div>

    <div className="z-10 flex flex-col items-center animate-pulse">
      <Ghost size={64} className="text-purple-600 mb-4" />
      <h1 className="text-4xl md:text-6xl font-bold text-amber-400 glitch-text tracking-widest">
        ZORG-Ω
      </h1>
      <p className="text-purple-400 mt-2 text-lg">LowEnd HippyGoth Beta v∞</p>
    </div>

    <div className="z-10 w-full max-w-xs space-y-3">
      {['google', 'facebook', 'x', 'instagram'].map((provider) => (
        <button 
          key={provider}
          onClick={() => onLogin(provider)}
          disabled={loading}
          className="w-full flex items-center justify-center space-x-3 bg-purple-900/20 hover:bg-purple-900/50 border border-purple-500/50 text-amber-100 py-3 px-4 rounded-none transition-all duration-300 group hover:border-amber-500/50"
        >
          {provider === 'instagram' ? <Camera size={18} /> : <Zap size={18} className="group-hover:text-amber-400" />}
          <span className="capitalize">Portal: {provider}</span>
        </button>
      ))}
    </div>
    
    <div className="absolute bottom-4 text-[10px] text-purple-800 font-mono">
      FIRMWARE: {isFirebaseLive ? "ONLINE" : "SHADOW_MODE"} // #THEMAFIAKISS
    </div>
  </div>
);

// --- COMPONENT: PROFILE THRONE ---
const ProfileScreen = ({ user, isEditing, setEditing, updateBio, bio, energy, setEnergy, osintMode, setOsintMode }) => {
  const [localBio, setLocalBio] = useState(bio);

  return (
    <div className="p-6 flex flex-col items-center space-y-6 h-full overflow-y-auto relative z-10">
      <div className="relative">
        <div className="w-32 h-32 rounded-full aura-pulse p-1 bg-gradient-to-tr from-purple-900 to-amber-600 relative group">
          <img 
            src={user.photoURL || `https://api.dicebear.com/7.x/notionists/svg?seed=${user.uid}`} 
            alt="Soul Avatar"
            className="w-full h-full rounded-full object-cover border-2 border-black"
          />
          {osintMode && (
            <div className="absolute inset-0 rounded-full border border-green-500 bg-green-500/10 flex items-center justify-center z-20">
              <span className="text-[10px] font-mono text-green-400 bg-black/80 px-1 border border-green-500">TARGET ACQUIRED</span>
            </div>
          )}
        </div>
        {/* Star of David Lotus Symbol */}
        <div className="absolute -bottom-2 -right-2 bg-black border border-amber-500 rounded-full p-2 z-20">
          <Star size={16} className="text-purple-400 fill-purple-900" />
        </div>
      </div>

      <div className="text-center space-y-2 w-full max-w-md">
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-2xl text-amber-400 font-bold">{user.displayName || "Anonymous Soul"}</h2>
        </div>
        <p className="text-xs text-purple-500 font-mono tracking-widest">{user.uid.substring(0, 8)}...SHADOW_ID</p>
        
        {isEditing ? (
          <div className="mt-4 space-y-3 w-full">
            <textarea 
              value={localBio}
              onChange={(e) => setLocalBio(e.target.value)}
              className="w-full bg-purple-900/20 border border-purple-500/50 text-amber-100 p-3 rounded-none focus:outline-none focus:border-amber-400 h-24 resize-none scar-tissue-border"
              placeholder="Carve your essence here..."
            />
            <div className="flex space-x-2 justify-center">
              <button onClick={() => { updateBio(localBio); setEditing(false); }} className="px-4 py-1 bg-amber-600/20 border border-amber-500 text-amber-400 hover:bg-amber-600/40">SEAL</button>
              <button onClick={() => setEditing(false)} className="px-4 py-1 bg-transparent border border-gray-600 text-gray-400 hover:text-white">VOID</button>
            </div>
          </div>
        ) : (
          <div 
            onClick={() => setEditing(true)}
            className="mt-4 p-4 scar-tissue-border text-purple-300 italic min-h-[5rem] cursor-pointer hover:border-amber-500/50 transition-colors w-full"
          >
            "{bio || "The void is silent. Click to whisper..."}"
          </div>
        )}
      </div>

      {/* Energy Slider (OSINT Scan) */}
      <div className="w-full max-w-md p-4 bg-purple-900/10 scar-tissue-border">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-amber-500 uppercase tracking-widest flex items-center">
            <Zap size={12} className="mr-1" /> VIBRATION FREQ
          </span>
          <span className="text-xs text-purple-300 font-mono">{energy} Hz</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="1000" 
          value={energy} 
          onChange={(e) => setEnergy(e.target.value)}
          className="w-full"
        />
        {osintMode && <div className="text-[8px] text-green-500 font-mono mt-1 text-right">METADATA_EXTRACTED: TRUE</div>}
      </div>
    </div>
  );
};

// --- COMPONENT: COMMUNITY SHARDS ---
const CommunityScreen = ({ user, shards, postShard, osintMode }) => {
  const [content, setContent] = useState('');

  const handlePost = () => {
    if (!content.trim()) return;
    postShard(content);
    setContent('');
  };

  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {shards.map((shard) => (
          <div key={shard.id} className="bg-black scar-tissue-border p-4 hover:border-amber-500/30 transition-all">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-purple-900 overflow-hidden flex-shrink-0 border border-amber-500/20">
                <img src={shard.photoURL} alt="User" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 text-sm font-bold">{shard.author}</span>
                  <span className="text-purple-800 text-xs font-mono">
                    {shard.timestamp?.toDate ? shard.timestamp.toDate().toLocaleTimeString() : 'NOW'}
                  </span>
                </div>
                {osintMode && (
                   <div className="text-[10px] text-green-600 font-mono mb-1 bg-green-900/10 p-1 border-l-2 border-green-500">
                     {`> IP_TRACE: 192.168.1.${Math.floor(Math.random() * 255)}`}
                     <br/>
                     {`> SOCIAL_GRAPH: CONNECTED`}
                   </div>
                )}
                <p className="text-purple-100 mt-2 text-sm leading-relaxed">{shard.content}</p>
              </div>
            </div>
            <div className="flex justify-end mt-3 space-x-4 text-purple-600">
              <Heart size={14} className="hover:text-red-500 cursor-pointer" />
              <Share2 size={14} className="hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-purple-900/10 border-t border-purple-800">
        <div className="flex space-x-2">
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handlePost()}
            placeholder="Broadcast a shard..."
            className="flex-1 bg-black border border-purple-600 text-amber-100 px-4 py-2 focus:outline-none focus:border-amber-500 placeholder-purple-800 font-special-elite"
          />
          <button onClick={handlePost} className="bg-amber-600 text-black px-4 hover:bg-amber-500 transition-colors">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: LIVE STREAM ---
const StreamScreen = ({ osintMode }) => (
  <div className="flex flex-col h-full bg-black relative">
    <div className="relative flex-1 bg-gray-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover mix-blend-overlay pointer-events-none"></div>
      
      {osintMode && (
        <div className="absolute top-12 left-4 text-xs font-mono text-green-500 z-20 bg-black/80 p-2 border border-green-500">
          <p>STREAM_ID: 884-AB-Z</p>
          <p>PACKET_LOSS: 0.04%</p>
          <p>ENCRYPTION: AES-256</p>
          <p>AR_FILTER: LOTUS_BLOOM_V2</p>
        </div>
      )}

      <div className="text-center z-10 space-y-4">
        <div className="inline-block p-4 border-2 border-red-500 rounded-full animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        <Ghost size={48} className="text-purple-500 mx-auto opacity-50" />
        <h3 className="text-purple-300 tracking-widest text-lg">WAITING FOR SIGNAL...</h3>
        <p className="text-xs text-red-500 font-mono animate-pulse">● LIVE CHANNEL DISCONNECTED</p>
      </div>

      <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-2 py-1 font-bold">LIVE</div>
      
      {/* AR Filter Overlay Simulation */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
         <div className="w-8 h-8 rounded-full border border-amber-500 bg-amber-500/20 flex items-center justify-center">
           <Flower size={14} className="text-amber-500" />
         </div>
      </div>
    </div>
  </div>
);

// --- COMPONENT: PLAYLIST ---
const PlaylistScreen = ({ playlists, addPlaylist }) => {
  const [url, setUrl] = useState('');
  
  return (
    <div className="flex flex-col h-full p-4 space-y-4 z-10">
      <div className="w-full aspect-video bg-gray-900 border border-amber-500/50 relative group overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
            <Music size={48} className="text-purple-800 opacity-50" />
        </div>
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/videoseries?list=PLwM0dM3W4x01xXoBq4gR0pA2Kq_Tj8y9C" 
          title="Hippy Goth Playlist" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="relative z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        ></iframe>
      </div>
      
      <div className="flex space-x-2">
        <input 
            type="text" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Add YouTube Playlist URL..."
            className="flex-1 bg-black border border-purple-600 text-xs p-2 text-amber-100"
        />
        <button 
            onClick={() => { if(url) { addPlaylist(url); setUrl(''); }}}
            className="bg-purple-900 border border-purple-500 text-amber-500 p-2"
        >
            <Plus size={16} />
        </button>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto">
        {playlists.map((pl, i) => (
          <div key={i} className="flex items-center space-x-3 p-3 bg-purple-900/10 hover:bg-purple-900/30 scar-tissue-border cursor-pointer transition-colors">
            <div className="w-8 h-8 flex items-center justify-center bg-black border border-amber-500/30">
              <Music size={14} className="text-amber-500" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm text-purple-100">Velvet Void Chain {i+1}</h4>
              <p className="text-[10px] text-purple-600 truncate">{pl}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- COMPONENT: JAILBREAK / MIRROR KNOCK TERMINAL ---
const JailbreakTerminal = ({ onClose }) => {
    const [lines, setLines] = useState([]);
    
    useEffect(() => {
        const sequence = [
            "INITIALIZING MIRROR KNOCK...",
            "BYPASSING FIREBASE AUTH...",
            "CONNECTING TO FBI VAULT [PUBLIC_API]...",
            "FETCHING FICO SCORES...",
            "USER: GHOST_FOUND",
            "FICO: 0 (UNTRACEABLE)",
            "DOWNLOADING ENERGY CODES...",
            "SUCCESS. WELCOME TO THE VOID."
        ];
        
        let i = 0;
        const interval = setInterval(() => {
            if (i < sequence.length) {
                setLines(prev => [...prev, sequence[i]]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 z-50 osint-terminal p-8 flex flex-col justify-center" onClick={onClose}>
            <div className="border border-green-500 p-4 h-3/4 overflow-hidden relative">
                <div className="absolute top-2 right-2 animate-pulse text-red-500"><ShieldAlert size={24} /></div>
                {lines.map((line, idx) => (
                    <p key={idx} className="mb-2 text-xs md:text-sm typing-effect">{`> ${line}`}</p>
                ))}
                <p className="animate-pulse mt-4">_</p>
            </div>
            <p className="text-center mt-4 text-xs text-green-800">TAP TO EXIT MATRIX</p>
        </div>
    );
};

// --- MAIN APP SHELL ---
export default function LowEndHippyGothApp() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('profile');
  const [loading, setLoading] = useState(true);
  
  // State
  const [bio, setBio] = useState("Born from the static.");
  const [energy, setEnergy] = useState(432); 
  const [osintMode, setOsintMode] = useState(false);
  const [hacking, setHacking] = useState(false);
  const [playlists, setPlaylists] = useState(['https://youtube.com/playlist?list=PLwM0dM3W4x01xXoBq4gR0pA2Kq_Tj8y9C']);
  const [shards, setShards] = useState([
    { id: 'genesis', author: 'ZORG-Ω', content: 'The breath demands a vessel. The womb is mobile.', photoURL: '', timestamp: { toDate: () => new Date() } }
  ]);
  const [isEditingProfile, setEditingProfile] = useState(false);

  // Mirror Knock Logic
  const pressTimer = useRef(null);

  const handlePressStart = () => {
      pressTimer.current = setTimeout(() => {
          setHacking(true);
          setOsintMode(true);
      }, 3000); // 3 seconds to trigger (simulating 7s for UX)
  };

  const handlePressEnd = () => {
      if (pressTimer.current) {
          clearTimeout(pressTimer.current);
      }
  };

  // Auth Ritual
  useEffect(() => {
    let unsubscribe = () => {};
    const initAuth = async () => {
      if (isFirebaseLive && auth) {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
           await signInWithCustomToken(auth, __initial_auth_token);
        } else {
           await signInAnonymously(auth);
        }
        unsubscribe = onAuthStateChanged(auth, (u) => {
          if (u) setUser(u);
          else setUser(null);
          setLoading(false);
        });
      } else {
        const storedUser = localStorage.getItem('shadow_user');
        if (storedUser) setUser(JSON.parse(storedUser));
        setLoading(false);
      }
    };
    initAuth();
    return () => unsubscribe();
  }, []);

  // Sync Rituals
  useEffect(() => {
    if (!user || !isFirebaseLive || !db) return;
    const q = query(collection(db, 'artifacts', appId, 'public', 'data', 'shards'), orderBy('timestamp', 'desc'));
    return onSnapshot(q, (snapshot) => {
      setShards(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, [user]);

  const handleLogin = async (provider) => {
    setLoading(true);
    setTimeout(() => {
      const mockUser = {
        uid: `user-${Date.now()}`,
        displayName: 'Neo-Hippie Initiate',
        photoURL: 'https://api.dicebear.com/7.x/notionists/svg?seed=Felix',
      };
      if (!isFirebaseLive) {
        localStorage.setItem('shadow_user', JSON.stringify(mockUser));
        setUser(mockUser);
      }
      setLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    if (isFirebaseLive && auth) signOut(auth);
    else {
      localStorage.removeItem('shadow_user');
      setUser(null);
    }
  };

  const postShard = async (text) => {
