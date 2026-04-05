import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TopNavBar = () => {
  const [active, setActive] = useState('Features');
  const items = ['Features', 'Compare', 'Pricing', 'API Docs'];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="text-xl font-black tracking-tighter text-primary italic">Traxaction</div>
      <div className="hidden md:flex items-center gap-8">
        {items.map((item) => {
          const isActive = active === item;
          return (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setActive(item)}
              className={`relative font-headline font-medium text-sm tracking-tight uppercase transition-colors duration-150 py-1 ${
                isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {item}
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          );
        })}
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="emerald-gradient text-on-primary px-6 py-2 font-label text-xs font-bold uppercase tracking-widest"
      >
        Launch App
      </motion.button>
    </nav>
  );
};

export default TopNavBar;
