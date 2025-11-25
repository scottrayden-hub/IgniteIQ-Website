import React from 'react';
import { Logo } from './Icons';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <Logo className="w-8 h-8 text-white" />
              <span className="text-lg font-bold text-white tracking-tight">
                Ignite<span className="text-sky-500">IQ</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 text-center md:text-left max-w-xs">
              Architecting the intelligence of the future for the home services enterprise.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <a href="#platform" className="hover:text-white transition-colors">Platform</a>
            <a href="#manifesto" className="hover:text-white transition-colors">Manifesto</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
             <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
             <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} IgniteIQ. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;