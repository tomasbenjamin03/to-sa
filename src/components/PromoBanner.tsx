import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck } from 'lucide-react';

export const PromoBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside aria-label="Aviso promocional" className="bg-[#1C1917] text-[#FAF8F5] text-xs py-2 px-4 border-b border-[#292524] transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 text-center font-medium tracking-wide flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
          <span>
            TOYSA Joyas & Tech · Envíos a toda la Argentina (Gratis desde $35.000)
          </span>
          <span className="hidden sm:inline text-stone-400">·</span>
          <a
            href="https://www.instagram.com/toysa_23?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-stone-300 hover:text-white underline underline-offset-2 transition-colors"
          >
            <span>Instagram: @toysa_23</span>
          </a>
          <span className="hidden sm:inline text-stone-400">·</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-stone-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            Acero Quirúrgico & Baño Dorado
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-stone-400 hover:text-white p-1 transition-colors shrink-0"
          aria-label="Cerrar anuncio"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
