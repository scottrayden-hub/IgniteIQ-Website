import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { generateStrategicBrief } from '../services/geminiService';

interface BriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BriefModal: React.FC<BriefModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'input' | 'generating' | 'result'>('input');
  const [formData, setFormData] = useState({ company: '', industry: '' });
  const [briefResult, setBriefResult] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.company || !formData.industry) return;

    setStep('generating');
    // Simulate a bit of "system processing" time plus the API call
    const result = await generateStrategicBrief(formData.company, formData.industry);
    setBriefResult(result);
    setStep('result');
  };

  const reset = () => {
    setStep('input');
    setFormData({ company: '', industry: '' });
    setBriefResult('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl pointer-events-auto overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-blue-600" />
                  <h3 className="font-semibold text-slate-900">AI Strategic Brief Generator</h3>
                </div>
                <button onClick={reset} className="text-slate-400 hover:text-slate-600">
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 overflow-y-auto">
                {step === 'input' && (
                  <form onSubmit={handleGenerate} className="space-y-6">
                    <div className="space-y-2">
                        <h4 className="text-2xl font-bold text-slate-900">Let's build your profile.</h4>
                        <p className="text-slate-600">Enter your details to generate a preview of how IgniteIQ architectures intelligence for your specific sector.</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                        placeholder="e.g. Apex Home Services"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Industry Sector</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                        placeholder="e.g. HVAC, Plumbing, Solar"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                    >
                      Generate Preview <ArrowRight size={18} />
                    </button>
                  </form>
                )}

                {step === 'generating' && (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                    <div className="relative">
                        <Loader2 size={48} className="animate-spin text-slate-200" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-medium text-slate-900">Architecting Intelligence...</h4>
                        <p className="text-slate-500 mt-2">Analyzing sector parameters and operational friction.</p>
                    </div>
                  </div>
                )}

                {step === 'result' && (
                  <div className="space-y-6">
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
                        <h4 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-4">Strategic Output // Preview</h4>
                        <div className="prose prose-slate prose-sm max-w-none text-slate-700 whitespace-pre-line">
                            {briefResult}
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button
                        onClick={() => window.location.href = 'mailto:contact@igniteiq.com'}
                        className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                        >
                        Book Full Consultation
                        </button>
                        <button
                        onClick={() => setStep('input')}
                        className="px-6 py-3 border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-colors"
                        >
                        New Brief
                        </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BriefModal;
