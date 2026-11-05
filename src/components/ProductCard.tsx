import React from 'react';
import { Product } from '../types';
import { Eye, Plus, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
}) => {
  return (
    <article className="group flex flex-col bg-white border border-stone-200/90 rounded-xl overflow-hidden hover:shadow-md hover:border-stone-300 transition-all duration-300">
      
      {/* Product Image Stage (takes 65-70% height) */}
      <div className="relative aspect-[4/3] sm:aspect-[1/1] bg-stone-100 overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Single subtle text tag if badge present */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-sm text-stone-100 text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded">
            {product.badge}
          </div>
        )}

        {/* Hover Quick Actions */}
        <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-white/95 backdrop-blur-sm hover:bg-white text-stone-900 text-xs font-medium rounded-lg shadow-sm transition-colors"
            aria-label={`Ver detalles de ${product.name}`}
          >
            <Eye className="w-3.5 h-3.5 text-stone-700" />
            <span>Vista Rápida</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="inline-flex items-center justify-center p-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg shadow-sm transition-colors"
            title="Añadir a la bolsa"
            aria-label={`Añadir ${product.name} a la bolsa`}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Unboxed category and material metadata */}
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-stone-400 font-medium mb-1.5">
            <span>{product.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="truncate max-w-[130px]">{product.material.split(' ')[0]}</span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif text-lg font-medium text-stone-900 hover:text-stone-700 cursor-pointer transition-colors line-clamp-1 mb-1"
          >
            {product.name}
          </h3>

          {/* Subtitle / brief specification */}
          <p className="text-xs text-stone-500 line-clamp-1 mb-3">
            {product.subtitle}
          </p>
        </div>

        {/* Price & Rating Row with Tabular Numbers */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-mono tabular-nums text-base font-semibold text-stone-900">
              ${product.price.toLocaleString('es-AR')}
            </span>
            {product.originalPrice && (
              <span className="font-mono tabular-nums text-xs text-stone-400 line-through">
                ${product.originalPrice.toLocaleString('es-AR')}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-xs text-stone-500">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
            <span className="font-mono tabular-nums text-stone-700 font-medium">{product.rating.toFixed(1)}</span>
            <span className="text-[11px] text-stone-400">({product.reviewsCount})</span>
          </div>
        </div>

      </div>

    </article>
  );
};
