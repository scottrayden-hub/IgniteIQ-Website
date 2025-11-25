import React from 'react';
import { motion } from 'framer-motion';
import { Link2, LineChart, Cpu, ShieldCheck } from 'lucide-react';
import { Capability } from '../types';

const capabilities: Capability[] = [
  {
    title: 'UNIFY',
    description: 'Seamlessly integrate critical operational data. Establish a single, clean source of truth, eliminating fragmentation.',
    icon: 'unify'
  },
  {
    title: 'PREDICT',
    description: 'Anticipate demand, optimize resource allocation, and mitigate issues before they impact your business. Proactive intelligence.',
    icon: 'predict'
  },
  {
    title: 'OPTIMIZE',
    description: 'Deploy self-optimizing dispatch, dynamic scheduling, and autonomous workflows. Systems that adapt in real-time.',
    icon: 'optimize'
  },
  {
    title: 'OWN',
    description: 'Secure a proprietary advantage. An owned, adaptive infrastructure that scales with your unique enterprise.',
    icon: 'own'
  }
];

const getIcon = (type: string) => {
    switch(type) {
        case 'unify': return <Link2 className="w-8 h-8 text-white" />;
        case 'predict': return <LineChart className="w-8 h-8 text-white" />;
        case 'optimize': return <Cpu className="w-8 h-8 text-white" />;
        case 'own': return <ShieldCheck className="w-8 h-8 text-white" />;
        default: return <Link2 className="w-8 h-8 text-white" />;
    }
}

const SectionCapabilities: React.FC = () => {
  return (
    <section id="platform" className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            UNLOCK UNPRECEDENTED <br />
            EFFICIENCY, AGILITY, AND GROWTH.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg transition-transform">
                {getIcon(cap.icon)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{cap.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCapabilities;