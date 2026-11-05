import React from 'react';
import { BRAND_INFO, INSTAGRAM_POSTS } from '../data/products';
import { Instagram, Heart, MessageCircle, ExternalLink, MessageSquareText } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram-community" className="py-16 bg-[#F5F2EB] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-stone-300/80">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-medium mb-2">
              <Instagram className="w-3.5 h-3.5 text-stone-700" />
              <span>Comunidad Oficial</span>
              <span aria-hidden="true">·</span>
              <span>{BRAND_INFO.instagramHandle}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-normal">
              Síguenos en Instagram
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
              Descubre los últimos lanzamientos de joyas, fundas y combinaciones exclusivas de nuestra tienda en Instagram.
            </p>
          </div>

          {/* Social CTAs */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-medium uppercase tracking-wider transition-all shadow-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>Seguir {BRAND_INFO.instagramHandle}</span>
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>

            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-300 hover:border-stone-900 text-stone-800 rounded-xl text-xs font-medium uppercase tracking-wider transition-all shadow-xs"
            >
              <MessageSquareText className="w-4 h-4 text-emerald-600" />
              <span>Pedidos por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 4-Column Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 block"
            >
              {/* Image with overlay on hover */}
              <div className="aspect-square relative overflow-hidden bg-stone-100">
                <img
                  src={post.image}
                  alt={post.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Instagram Hover Glass Overlay */}
                <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white text-xs font-medium font-mono">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-sm p-1.5 rounded-full text-white">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Caption */}
              <div className="p-4">
                <p className="text-xs text-stone-700 line-clamp-2 mb-2 leading-relaxed">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-[11px] text-stone-400 font-mono">
                  <span>{post.tag}</span>
                  <span className="text-stone-700 font-medium group-hover:text-stone-900 flex items-center gap-0.5">
                    Ver post <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Tag invitation footer */}
        <div className="mt-8 text-center text-xs text-stone-500">
          <span>¿Tienes una joya o accesorio de {BRAND_INFO.name}? Etiqueta </span>
          <strong className="text-stone-800">{BRAND_INFO.instagramHandle}</strong>
          <span> en tus historias y fotos para aparecer en nuestra galería.</span>
        </div>

      </div>
    </section>
  );
};
