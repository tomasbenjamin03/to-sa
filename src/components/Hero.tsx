import React from 'react';
import { ArrowRight, Sparkles, Gem, Smartphone } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onStudioClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onStudioClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-stone-500 mb-4">
              <span>TOYSA Boutique</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>@toysa_23</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Joyería & Accesorios</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-stone-900 leading-[1.1] tracking-tight mb-6 text-balance">
              Donde la alta joyería viste tu tecnología cotidiana.
            </h1>

            {/* Prose description */}
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed mb-8 max-w-xl">
              Collares y aros en acero quirúrgico con baño dorado, anillos apilables y perlas naturales combinados con fundas MagSafe de eco-cuero y colgantes de muñeca artesanales.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-all shadow-sm group whitespace-nowrap"
              >
                <span>Ver Catálogo en Pesos</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onStudioClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-stone-800 bg-white border border-stone-300 rounded-lg hover:border-stone-900 hover:bg-stone-50 transition-all whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Armar Dúo: Joya + Celular</span>
              </button>
            </div>

            {/* Micro value props - clean unboxed row */}
            <div className="mt-10 pt-6 border-t border-stone-200/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <Gem className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Baño Dorado & Acero</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-stone-700 shrink-0" />
                <span>Fundas MagSafe</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
                <span className="font-mono tabular-nums text-stone-900 font-semibold">Envíos</span>
                <span>A todo el país</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-stone-100 aspect-[16/10] sm:aspect-[16/11]">
              <img
                src="/src/assets/images/hero_jewelry_tech_1793883345697.jpg"
                alt="Campaña editorial de joyas con baño dorado y accesorios de celular TOYSA"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Subtle glass focal caption card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-stone-900/85 backdrop-blur-md text-white p-4 rounded-xl border border-white/10 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif tracking-wider uppercase text-[11px] text-[#D4AF37]">Look Insignia</span>
                  <span className="font-mono tabular-nums text-stone-300">Dúo 01</span>
                </div>
                <p className="font-medium text-white mb-2 leading-snug">
                  Collar Aureum & Funda Rose MagSafe con Perlas
                </p>
                <button
                  onClick={onStudioClick}
                  className="text-stone-300 hover:text-white inline-flex items-center gap-1 font-medium underline underline-offset-2 transition-colors"
                >
                  Personalizar este look
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
