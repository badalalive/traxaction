import React from 'react';

const ComparisonSection = () => {
  return (
    <section id="compare" className="py-32 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-20 text-center">
          Manual Payments are a <span className="text-error">Support Nightmare.</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {/* The Mess */}
          <div className="bg-black p-12 space-y-8 status-ribbon-error">
            <div className="font-label text-xs uppercase tracking-widest text-error-dim">The Mess</div>
            <h3 className="text-3xl font-bold italic tracking-tighter">Copy-Paste Hell</h3>
            <ul className="space-y-6">
              {[
                'Users sending the wrong asset or network.',
                "Manually scrolling through block explorers for hours.",
                'Lack of professional invoicing and record keeping.'
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-error">close</span>
                  <span className="text-on-surface-variant">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Solution */}
          <div className="bg-surface-container p-12 space-y-8 status-ribbon-emerald">
            <div className="font-label text-xs uppercase tracking-widest text-primary">The Solution</div>
            <h3 className="text-3xl font-bold italic tracking-tighter">Automated Flow</h3>
            <ul className="space-y-6">
              {[
                'One-click checkout across any major chain.',
                'Instant webhook notifications upon confirmation.',
                'Non-custodial logic. Funds go directly to you.'
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">check</span>
                  <span className="text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
