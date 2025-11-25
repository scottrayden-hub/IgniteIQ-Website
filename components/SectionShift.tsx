import React from 'react';
import { motion } from 'framer-motion';
import { Database } from 'lucide-react';

const SectionShift: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 md:py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              THE AGE OF INFORMATION IS OVER. <br />
              <span className="text-blue-600">THE AGE OF INTELLIGENCE HAS BEGUN.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              For decades, businesses have been defined by reactive dashboards and disconnected systems. 
              That era is disappearing. We are entering an age demanding predictive, agentic, and adaptive infrastructure. 
              The home services industry must move from static organizations to truly intelligent, self-optimizing entities.
            </p>
            <blockquote className="border-l-4 border-slate-900 pl-6 italic text-slate-800 text-xl font-medium">
              "From reactive leadership to businesses that inherently think."
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
          >
             {/* Background Tech Pattern */}
             <div className="absolute inset-0 z-0 opacity-[0.03]" 
                 style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="grid grid-cols-2 relative z-10 divide-x divide-slate-100 min-h-[350px]">
                
                {/* STATIC SIDE */}
                <div className="p-8 flex flex-col items-center justify-center bg-slate-50/50">
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-slate-200 border border-slate-300 flex items-center justify-center shadow-inner">
                        <Database size={28} className="text-slate-500" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-8">Static</span>
                    
                    {/* Visual: Disconnected Silos */}
                    <div className="flex flex-col gap-4 w-full max-w-[120px] opacity-40">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex gap-2 items-center">
                                <div className="w-2 h-2 bg-slate-400 rounded-sm" />
                                <div className="w-full h-1.5 bg-slate-300 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* AGENTIC SIDE */}
                <div className="p-8 flex flex-col items-center justify-center relative overflow-hidden bg-white">
                    {/* Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-blue-500/5 rounded-full blur-3xl" />

                    {/* New Futuristic Neural Core */}
                    <div className="relative w-24 h-24 mb-2 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                            <defs>
                                <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                            
                            {/* Outer Orbit */}
                            <motion.circle 
                                cx="50" cy="50" r="40" 
                                fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                                style={{ originX: "50px", originY: "50px" }}
                            />

                            {/* Active Orbit Ring */}
                            <motion.circle 
                                cx="50" cy="50" r="32" 
                                fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="30 70" strokeLinecap="round"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                                style={{ originX: "50px", originY: "50px" }}
                            />

                            {/* Core Pulse */}
                            <motion.circle 
                                cx="50" cy="50" r="12" 
                                fill="url(#coreGradient)"
                                animate={{ r: [12, 16, 12], opacity: [0.8, 0.4, 0.8] }}
                                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                            />
                            
                            {/* Solid Center */}
                            <circle cx="50" cy="50" r="6" fill="#1d4ed8" />

                            {/* Orbiting Particles */}
                            <motion.circle 
                                r="2" fill="#3b82f6"
                                animate={{ 
                                    cx: [50, 80, 50, 20, 50],
                                    cy: [20, 50, 80, 50, 20],
                                }}
                                transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                            />
                        </svg>
                    </div>

                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 mb-8 relative flex items-center gap-2 mt-4">
                        Agentic
                        <span className="relative flex h-2 w-2">
                          <motion.span 
                            animate={{ opacity: [1, 0.2, 1], scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
                          />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                    </span>

                    {/* Visual: Interconnected Mesh */}
                    <div className="relative w-full max-w-[140px] h-[80px] flex items-center justify-center">
                        <svg viewBox="0 0 140 60" className="w-full h-full overflow-visible">
                            {/* Connections */}
                            <motion.path 
                                d="M 10 30 C 40 30, 40 30, 70 30 C 100 30, 100 30, 130 30" 
                                stroke="#3b82f6" 
                                strokeWidth="1"
                                strokeOpacity="0.2" 
                                fill="none"
                            />
                            <motion.path 
                                d="M 10 30 C 40 10, 40 50, 70 30" 
                                stroke="#3b82f6" 
                                strokeWidth="0.5"
                                strokeOpacity="0.2" 
                                fill="none"
                            />
                             <motion.path 
                                d="M 70 30 C 100 10, 100 50, 130 30" 
                                stroke="#3b82f6" 
                                strokeWidth="0.5"
                                strokeOpacity="0.2" 
                                fill="none"
                            />

                            {/* Nodes */}
                            <circle cx="10" cy="30" r="2" fill="#cbd5e1" />
                            <circle cx="130" cy="30" r="2" fill="#cbd5e1" />
                            
                            {/* Central Connection Node */}
                            <circle cx="70" cy="30" r="4" fill="#60a5fa" fillOpacity="0.5" />

                            {/* Data Packets */}
                            <motion.circle 
                                r="1.5" fill="#3b82f6"
                                animate={{ 
                                    cx: [10, 70, 130],
                                    cy: [30, 30, 30],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SectionShift;