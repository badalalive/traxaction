import React from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      target: 'Individual developers and early-stage testing.',
      price: '$0',
      period: '/mo',
      features: [
        'First 5 Payments Included (Hard monthly cap)',
        '0% Traxaction Platform Markup',
        '15+ Major Chains Supported (ETH, SOL, BASE)',
        'Manual Transaction Dashboard',
        'Standard "Traxaction" Branding',
        'Community Discord Support'
      ],
      highlight: false,
      cta: 'Start Free'
    },
    {
      name: 'Founder',
      target: 'Scaling Web3 SaaS & High-Velocity Teams.',
      price: '$29',
      period: '/mo',
      features: [
        'Up to 100 Payments / Month',
        '0% Traxaction Platform Markup',
        'Instant Webhooks & API Access',
        'White-Label Checkout UI',
        'Advanced Reconciliation',
        'Priority Engineering Support'
      ],
      highlight: true,
      cta: 'Get Started'
    },
    {
      name: 'Growth',
      target: 'Established platforms and agencies.',
      price: '$89',
      period: '/mo',
      features: [
        'Unlimited Monthly Payments',
        'Custom Domain (pay.yourbrand.com)',
        'Smart Multi-Gateway Failover',
        'High-Volume API Rate Limits',
        'Full Accounting Exports (CSV/JSON)',
        '24/7 Dedicated Telegram Concierge'
      ],
      highlight: false,
      cta: 'Scale Now'
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-black tracking-tighter uppercase mb-4">Scalable Pricing</h2>
          <p className="text-on-surface-variant font-label">Transparent plans for teams of all sizes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-surface-container p-12 border ${plan.highlight ? 'border-2 border-primary relative transform md:-translate-y-4' : 'border-white/5'
                } space-y-8 flex flex-col justify-between`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 font-label text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <div className={`font-label text-xs uppercase tracking-widest mb-1 ${plan.highlight ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {plan.name}
                  </div>
                  <p className="text-[10px] text-on-surface-variant opacity-60 mb-4 font-label uppercase tracking-widest leading-tight">
                    {plan.target}
                  </p>
                  <div className="text-4xl font-black tracking-tighter">
                    {plan.price}
                    {plan.period && <span className="text-xl text-on-surface-variant font-normal">{plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-4 font-label text-sm text-on-surface-variant">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={plan.highlight && i === 0 ? 'text-primary' : ''}>
                      - {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 font-label text-sm font-bold uppercase tracking-widest transition-all duration-150 ${plan.highlight
                  ? 'bg-primary text-on-primary'
                  : 'border border-outline-variant text-white hover:bg-white/5'
                  }`}
              >
                {plan.cta}
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
