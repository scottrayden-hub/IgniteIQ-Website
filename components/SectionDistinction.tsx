import React from 'react';
import { motion } from 'framer-motion';
import { Box } from 'lucide-react';

const SectionDistinction: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#0f1d35] text-white relative overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
            STOP RENTING FEATURES. <br />
            <span className="text-slate-500">OWN YOUR INFRASTRUCTURE.</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
            Many offer point solutions – rented features that automate tasks. They provide a generic layer shared by your competitors. 
            IgniteIQ fundamentally redefines this. We don't just optimize; we replace the architecture.
          </p>
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            We build your <strong className="text-white font-semibold">Custom Operating System</strong>. This is your unique, underlying infrastructure. 
            A proprietary advantage that cannot be replicated.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* LEFT CARD: THEM */}
            <div className="p-10 border border-slate-700/50 rounded-2xl bg-white/5 flex flex-col items-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="w-24 h-24 mb-8 flex items-center justify-center bg-slate-800 rounded-xl border border-slate-700 shadow-inner">
                    <Box size={40} className="text-slate-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-400">Them: Rented Features</h3>
                <p className="text-slate-500 text-base">Generic SaaS. One size fits all. Shared capabilities.</p>
            </div>

            {/* RIGHT CARD: IGNITE IQ */}
            <div className="p-10 border border-blue-500/30 rounded-2xl bg-gradient-to-b from-blue-900/20 to-blue-900/5 flex flex-col items-center relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-blue-500/5 z-0" />
                
                {/* Custom Isometric Stack Visualization */}
                <div className="relative z-10 w-40 h-40 mb-2">
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                        <defs>
                            <linearGradient id="beamGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
                                <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Central Active Beam */}
                        <motion.rect
                            x="48" y="15" width="4" height="70" fill="url(#beamGrad)"
                            animate={{ opacity: [0.3, 0.8, 0.3], height: [70, 75, 70], y: [15, 12, 15] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                        {/* Bottom Platform (Data Foundation) */}
                        <motion.path
                            d="M 20 75 L 50 85 L 80 75 L 50 65 Z"
                            fill="rgba(30, 64, 175, 0.3)" stroke="#3b82f6" strokeWidth="1"
                            initial={{ opacity: 0.8, y: 0 }}
                            animate={{ y: [0, 3, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Middle Platform (Logic/Intelligence) */}
                        <motion.path
                            d="M 20 55 L 50 65 L 80 55 L 50 45 Z"
                            fill="rgba(59, 130, 246, 0.2)" stroke="#60a5fa" strokeWidth="1"
                            initial={{ opacity: 0.9, y: 0 }}
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />

                        {/* Top Platform (Interface/Control) */}
                        <motion.path
                            d="M 20 35 L 50 45 L 80 35 L 50 25 Z"
                            fill="rgba(147, 197, 253, 0.1)" stroke="#93c5fd" strokeWidth="1"
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />

                        {/* Connecting Core Wireframe */}
                        <motion.path
                            d="M 50 25 L 50 85"
                            stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3"
                            animate={{ strokeDashoffset: [0, -12] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Corner Connections */}
                        <motion.path
                            d="M 20 75 L 20 35 M 80 75 L 80 35"
                            stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3"
                        />

                        {/* Floating Particles */}
                        <motion.circle 
                            cx="50" cy="85" r="2" fill="#fff" 
                            animate={{ y: [-60], opacity: [0, 1, 0] }} 
                            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }} 
                        />
                         <motion.circle 
                            cx="50" cy="85" r="2" fill="#fff" 
                            animate={{ y: [-60], opacity: [0, 1, 0] }} 
                            transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeOut" }} 
                        />
                    </svg>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white z-10">IgniteIQ: Owned OS</h3>
                <p className="text-slate-300 text-base z-10">Proprietary Infrastructure. Unique to you. Infinite scale.</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SectionDistinction;