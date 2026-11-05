import React from 'react';
import { REVIEWS } from '../data/products';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-medium mb-2">
              <span>Experiencias Reales</span>
              <span aria-hidden="true">·</span>
              <span>Opiniones Verificadas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-normal">
              La voz de nuestras clientas
            </h2>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-stone-900 font-mono">4.9 / 5.0</span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-500">+480 pedidos entregados</span>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-stone-500">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Compra verificada
                  </span>
                </div>

                {/* Review comment */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Item */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-stone-900">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-stone-400">
                    {rev.location} · {rev.date}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-mono text-stone-500 block">Pieza</span>
                  <span className="text-[11px] font-medium text-stone-800 max-w-[130px] truncate block">
                    {rev.productName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
