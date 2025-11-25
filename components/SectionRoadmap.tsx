import React from 'react';
import { motion } from 'framer-motion';
import { RoadmapPhase } from '../types';

const phases: RoadmapPhase[] = [
  {
    id: '01',
    phase: 'PHASE 1',
    title: 'Unified Foundation',
    objective: 'The bedrock of true intelligence.',
    action: 'Construct a clean, structured data foundation. Ingest critical operational data to create a single source of truth.'
  },
  {
    id: '02',
    phase: 'PHASE 2',
    title: 'Intelligent Operations',
    objective: 'Activate data into proactive workflows.',
    action: 'Deploy LLM workflows and predictive analytics. Enable agentic processes that drive smarter business decisions.'
  },
  {
    id: '03',
    phase: 'PHASE 3',
    title: 'Adaptive Leadership',
    objective: 'Systems that lead, not just manage.',
    action: 'Implement dynamic scheduling and demand modeling. Your system evolves into an active, adaptive core.'
  },
  {
    id: '04',
    phase: 'PHASE 4',
    title: 'Custom OS',
    objective: 'Total proprietary advantage.',
    action: 'The culmination: a fully owned, unique underlying infrastructure built to adapt and scale indefinitely.'
  }
];

const SectionRoadmap: React.FC = () => {
  return (
    <section id="vision" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6">
            SYSTEMATIC EVOLUTION. <br />
            <span className="text-blue-600">FROM DATA TO AUTONOMY.</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our roadmap is a systematic progression towards a fully agentic, self-optimizing enterprise.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -ml-[1px]" />

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div 
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse md:text-left'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 w-14 h-14 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 shadow-sm -ml-[2px] md:-ml-[28px]">
                  <span className="text-blue-600 font-bold text-sm">{phase.id}</span>
                </div>

                {/* Spacer for Mobile Layout */}
                <div className="md:w-1/2 hidden md:block" />

                {/* Content */}
                <div className="pl-20 md:pl-0 md:w-1/2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                    {phase.phase}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{phase.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {phase.objective}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {phase.action}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionRoadmap;