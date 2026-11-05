import React from 'react';
import { Gem, ShieldCheck, Sparkles, Feather, Clock, Award } from 'lucide-react';

export const Craftsmanship: React.FC = () => {
  return (
    <section id="nuestro-atelier" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-medium mb-3">
            <span>Manifiesto de Atelier</span>
            <span aria-hidden="true">·</span>
            <span>Alta Orfebrería & Diseño Tecnológico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 font-normal leading-tight tracking-tight mb-4 text-balance">
            Unimos la precisión de la orfebrería con la arquitectura de tus dispositivos.
          </h2>
          <p className="text-base text-stone-600 leading-relaxed font-normal">
            Cada pieza se concibe en nuestro taller con una premisa simple: los objetos que sostienes cientos de veces al día merecen los mismos metales nobles, acabados cálidos y cuidado artesanal que tu joya más preciada.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Pillar 1 */}
          <div className="flex flex-col border-t border-stone-300 pt-6">
            <span className="font-mono text-xs text-[#D4AF37] font-semibold mb-3">01. ACABADOS DORADOS</span>
            <h3 className="font-serif text-xl text-stone-900 font-medium mb-2">
              Acero con Baño Dorado
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Base de acero quirúrgico 316L con triple baño dorado resistente al agua y al sudor. No se mancha, no se oscurece y es 100% hipoalergénico.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col border-t border-stone-300 pt-6">
            <span className="font-mono text-xs text-[#D4AF37] font-semibold mb-3">02. TECNOLOGÍA MAGSAFE</span>
            <h3 className="font-serif text-xl text-stone-900 font-medium mb-2">
              Imanes N52 de Neodimio
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Matrices magnéticas de grado industrial calibradas para acoplarse con firmeza a cargadores inalámbricos, soportes de mesa y billeteras sin interferir en la batería.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col border-t border-stone-300 pt-6">
            <span className="font-mono text-xs text-[#D4AF37] font-semibold mb-3">03. PERLAS SELECCIONADAS</span>
            <h3 className="font-serif text-xl text-stone-900 font-medium mb-2">
              Perlas de Agua Dulce
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Nuestras correas y colgantes se enhebran a mano con perlas barrocas naturales de brillo iridiscente, montadas sobre cable de acero multi-filamento anti-corte.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="flex flex-col border-t border-stone-300 pt-6">
            <span className="font-mono text-xs text-[#D4AF37] font-semibold mb-3">04. COMPROMISO REAL</span>
            <h3 className="font-serif text-xl text-stone-900 font-medium mb-2">
              Garantía & Envíos
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Enviamos a todas las provincias de Argentina con número de seguimiento online. Garantía contra desperfectos de fabricación y atención personalizada por WhatsApp.
            </p>
          </div>

        </div>

        {/* Adjacency Trust Strip */}
        <div className="mt-14 p-6 bg-white rounded-2xl border border-stone-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base font-medium text-stone-900">
                Calidad Garantizada TOYSA (@toysa_23)
              </h4>
              <p className="text-xs text-stone-500">
                Selección de insumos durables, ensamble artesanal y despacho seguro a todo el país.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-stone-600 font-mono shrink-0">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-stone-400" />
              Despacho en 24h
            </span>
            <span className="flex items-center gap-1.5">
              <Feather className="w-4 h-4 text-stone-400" />
              Eco-Cuero & Acero
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
