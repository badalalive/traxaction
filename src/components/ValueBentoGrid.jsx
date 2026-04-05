import React from 'react';

const ValueBentoGrid = () => {
  return (
    <section id="features" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Fail-Proof Checkouts */}
        <div className="md:col-span-2 bg-surface-container-low p-10 border border-white/5 flex flex-col justify-between min-h-[400px]">
          <div className="space-y-6">
            <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>account_tree</span>
            <h4 className="text-4xl font-black uppercase tracking-tighter">Fail-Proof Checkouts</h4>
            <p className="text-on-surface-variant max-w-md font-label">
              Never lose a sale to a gateway outage. If one provider goes down or lags, our orchestration layer instantly routes your transaction through a backup. Your checkout stays online 100% of the time.
            </p>
          </div>
          <div className="mt-8 flex gap-2">
            {['99.9% Uptime', 'Auto-Scaling'].map((tag) => (
              <span key={tag} className="font-label text-[10px] uppercase border border-outline-variant px-2 py-1 text-on-surface-variant">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Zero Fee */}
        <div className="bg-primary p-10 flex flex-col justify-between min-h-[400px]">
          <div className="space-y-6">
            <span className="material-symbols-outlined text-on-primary text-5xl">payments</span>
            <h4 className="text-4xl font-black uppercase tracking-tighter text-on-primary leading-tight">Scale Without "Success Tax"</h4>
          </div>
          <p className="text-on-primary-container font-medium">
            Stop giving away 0.5%–1% of your hard-earned revenue. We charge a flat, predictable monthly fee so you can process $10k or $1M without paying an extra cent in platform fees.
          </p>
        </div>

        {/* Non-Custodial */}
        <div className="md:col-span-3 bg-surface-container-high p-10 border border-white/5 flex flex-col md:flex-row gap-12 items-center overflow-hidden group">
          <div className="flex-1 space-y-6 sm:z-10 bg-surface-container-high md:bg-transparent">
            <span className="material-symbols-outlined text-tertiary text-5xl">security</span>
            <h4 className="text-4xl font-black uppercase tracking-tighter">Your Keys, Your Crypto</h4>
            <p className="text-on-surface-variant font-label">
              We provide the interface, but you keep the control. Funds flow directly from your customer to your wallet. We never touch your private keys or hold your assets, ensuring 100% non-custodial security.
            </p>
          </div>
          <div className="flex-1 w-full h-64 bg-surface-container-lowest border border-outline-variant/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
              alt="Blockchain security visualization"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValueBentoGrid;
