import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
    onOpenBrief: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBrief }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Subtle Radial Highlight */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_800px_at_50%_400px,#3b82f61a,transparent)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 mb-8 text-xs font-mono font-semibold tracking-wider text-blue-600 uppercase bg-blue-50/80 border border-blue-100 rounded-full">
            The Future of Home Services
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 mb-8 leading-[1.05]">
            ARCHITECTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">INTELLIGENCE.</span><br />
            OWN YOUR FUTURE.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
            IgniteIQ architects the proprietary data infrastructure that powers your evolution. 
            The intelligent foundation of your future Custom Operating System.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
                onClick={onOpenBrief}
                className="group relative px-8 py-4 bg-slate-900 text-white text-base font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 w-full h-full bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Book a Demo <ArrowRight size={18} />
              </span>
            </button>
            <a href="#vision" className="text-slate-600 hover:text-slate-900 font-medium px-6 py-4 transition-colors">
              Explore the Vision
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;