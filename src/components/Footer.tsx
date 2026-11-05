import React, { useState } from 'react';
import { Mail, Check, Shield, MapPin, Phone, Clock } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-stone-800">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-4">
            <a href="/" className="text-2xl font-serif tracking-widest uppercase font-semibold text-white block mb-4">
              TOYSA <span className="text-xs font-sans tracking-widest text-[#D4AF37] ml-1">JOYAS & TECH</span>
            </a>
            <p className="text-xs text-stone-400 leading-relaxed mb-6 max-w-sm">
              Boutique especializada en joyería contemporánea en oro y plata, combinada con las fundas y accesorios de celular más exclusivos.
            </p>
            <div className="text-xs text-stone-400 space-y-2.5">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
              >
                <span className="text-[#D4AF37] font-semibold">Instagram:</span>
                <span>{BRAND_INFO.instagramHandle}</span>
              </a>
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
              >
                <span className="text-emerald-400 font-semibold">WhatsApp:</span>
                <span>Atención y Pedidos Personalizados</span>
              </a>
              <p className="flex items-center gap-2 text-stone-500">
                <Clock className="w-3.5 h-3.5" />
                <span>Horario: Lunes a Sábado 10:00h - 20:30h</span>
              </p>
            </div>
          </div>

          {/* Quick links: Colecciones */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Colecciones
            </h4>
            <ul className="text-xs text-stone-400 space-y-2.5">
              <li><a href="#catalogo" className="hover:text-white transition-colors">Collares Bañados en Oro</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Anillos Martillados</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Fundas de Piel MagSafe</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Charms de Perlas</a></li>
              <li><a href="#styling-studio" className="hover:text-white transition-colors">Dúos Joya + Tech</a></li>
            </ul>
          </div>

          {/* Quick links: Atención al Cliente */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Atelier & Ayuda
            </h4>
            <ul className="text-xs text-stone-400 space-y-2.5">
              <li><a href="#nuestro-atelier" className="hover:text-white transition-colors">Guía de Tallas & Modelos</a></li>
              <li><a href="#nuestro-atelier" className="hover:text-white transition-colors">Cuidados del Oro Vermeil</a></li>
              <li><span className="text-stone-400">Envíos Asegurados</span></li>
              <li><span className="text-stone-400">Garantía 2 Años TOYSA</span></li>
              <li><a href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Comunidad @toysa_23</a></li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-2">
              Novedades @toysa_23
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Suscríbete para recibir lanzamientos de nuevas colecciones, ofertas exclusivas y promociones de temporada.
            </p>

            {subscribed ? (
              <div className="p-3 bg-stone-800/80 rounded-xl border border-[#D4AF37]/40 text-xs text-[#FAF8F5] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Gracias por unirte a TOYSA. Te hemos enviado un 10% de bienvenida.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="flex-1 text-xs bg-stone-900 border border-stone-700 rounded-lg px-3.5 py-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-stone-100 hover:bg-white text-stone-900 text-xs font-medium uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap"
                >
                  Unirme
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} TOYSA (@toysa_23) · Joyería & Accesorios para Celulares. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-4 text-stone-400 font-mono text-[10px]">
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>APPLE PAY</span>
            <span>BIZUM</span>
            <span>CONTRAENTREGA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
