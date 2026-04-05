import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const networks = [
    { name: 'Ethereum', sub: 'Mainnet', icon: 'token', status: 'primary', checked: true },
    { name: 'Polygon', sub: 'PoS Chain', icon: 'layers', status: 'neutral', checked: false },
    { name: 'Base', sub: 'Layer 2', icon: 'bolt', status: 'neutral', checked: false },
    { name: 'Solana', sub: 'High Performance', icon: 'sunny', status: 'neutral', checked: false },
  ];

  return (
    <section className="px-8 py-20 flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto pt-32">
      <div className="flex-1 space-y-8 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high border border-outline-variant/20"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">V1 Private Beta</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase"
        >
          Stop Sending <span className="text-primary">Wallet Addresses...</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
          className="text-on-surface-variant text-lg max-w-xl font-light leading-relaxed"
        >
          Stop checking explorers like they're a morning newspaper. Orchestrate your crypto billing with professional links, instant webhooks, and 0% transaction fees.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 1, 0.3, 1] }}
          className="flex gap-4"
        >
          <button className="emerald-gradient text-on-primary px-10 py-4 font-label text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all duration-150">
            Get Started
          </button>
          <button className="border border-outline-variant text-white px-10 py-4 font-label text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors duration-150">
            Documentation
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 1, 0.3, 1] }}
        className="w-full max-w-md bg-surface-container shadow-2xl glow-emerald p-8 border border-white/5 relative"
      >
        <div className="absolute top-0 right-0 p-4 font-label text-[10px] text-neutral-600">ID: CF-9921</div>

        <div className="mb-8">
          <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">Amount Due</div>
          <div className="text-4xl font-black tracking-tighter text-white">29.00 <span className="text-primary-dim">USDC</span></div>
        </div>

        <div className="space-y-4">
          <div className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant">Select Network</div>
          <div className="space-y-2">
            {networks.map((network) => (
              <div
                key={network.name}
                className={`flex items-center justify-between p-4 bg-surface-container-lowest transition-colors cursor-pointer group hover:bg-surface-container-high ${network.checked ? 'border-l-2 border-primary' : 'border-l-2 border-transparent'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-surface-container-high flex items-center justify-center">
                    <span className={`material-symbols-outlined text-xl ${network.checked ? 'text-primary' : 'text-on-surface-variant'}`}>{network.icon}</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm">{network.name}</div>
                    <div className="font-label text-[10px] text-on-surface-variant">{network.sub}</div>
                  </div>
                </div>
                <span className={`material-symbols-outlined text-xl ${network.checked ? 'text-primary' : 'text-on-surface-variant opacity-30'}`}>
                  {network.checked ? 'radio_button_checked' : 'radio_button_unchecked'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full mt-8 bg-primary text-on-primary py-4 font-label text-sm font-black uppercase tracking-widest"
        >
          Pay Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
