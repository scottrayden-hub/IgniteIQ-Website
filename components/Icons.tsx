import React from 'react';
import { motion } from 'framer-motion';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Top Left Dot */}
    <circle cx="20" cy="20" r="10" fill="currentColor" />
    
    {/* Top Right Hook */}
    <path 
      d="M 50 20 H 70 A 10 10 0 0 1 80 30 V 38" 
      stroke="currentColor" 
      strokeWidth="20" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />

    {/* Bottom Left Hook */}
    <path 
      d="M 20 62 V 70 A 10 10 0 0 0 30 80 H 50" 
      stroke="currentColor" 
      strokeWidth="20" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />

    {/* Bottom Right Dot */}
    <circle cx="80" cy="80" r="10" fill="currentColor" />
  </svg>
);

export const NetworkGraphic: React.FC = () => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full opacity-30 text-slate-400">
        <motion.path
            d="M50 150 C 100 50, 200 50, 250 150 S 350 250, 400 150"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
            d="M0 250 C 100 150, 200 250, 300 150 S 350 50, 450 150"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        {[50, 150, 250, 350].map((cx, i) => (
             <motion.circle 
                key={i} 
                cx={cx} 
                cy={150} 
                r="3" 
                fill="currentColor"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
             />
        ))}
    </svg>
  );
};