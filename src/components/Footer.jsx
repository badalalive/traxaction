import React from 'react';

const Footer = () => {
  const links = ['Docs', 'X', 'GitHub', 'Blog'];

  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-black border-t border-white/5">
      <div className="text-sm font-bold text-neutral-200 uppercase tracking-tighter">Traxaction - Built for Builders</div>

      <div className="flex gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant">
        © 2026 Traxaction Protocol.
      </div>
    </footer>
  );
};

export default Footer;
