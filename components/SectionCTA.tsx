import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
    onOpenBrief: () => void;
}

const SectionCTA: React.FC<CTAProps> = ({ onOpenBrief }) => {
  return (
    <section id="contact" className="py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">
            ELEVATE YOUR ENTERPRISE.<br />
            <span className="text-slate-400">BEYOND THE GENERIC.</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            The future of home services demands more than rented features. It demands an owned, agentic intelligence. 
            IgniteIQ is building the Custom Operating Systems that redefine competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
                onClick={onOpenBrief}
                className="px-10 py-5 bg-white text-slate-900 text-lg font-bold rounded-full hover:bg-slate-100 transition-colors shadow-lg hover:shadow-white/20"
            >
                Request a Strategic Brief
            </button>
            <button className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium">
                Discover Our Vision <ArrowRight size={18} />
            </button>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionCTA;
