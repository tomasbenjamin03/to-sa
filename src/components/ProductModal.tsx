import React, { useState } from 'react';
import { Product } from '../types';
import { X, Check, Star, Shield, Gift, Truck, Smartphone, Gem } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (
    product: Product,
    quantity: number,
    selectedModel?: string,
    selectedSize?: string,
    selectedColor?: string,
    giftWrap?: boolean
  ) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedModel, setSelectedModel] = useState<string>(
    product.compatibility ? product.compatibility[0] : ''
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes ? product.sizes[0] : ''
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors ? product.colors[0].name : ''
  );
  const [giftWrap, setGiftWrap] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleBuy = () => {
    onAddToCart(product, quantity, selectedModel, selectedSize, selectedColor, giftWrap);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-stone-500 hover:text-stone-900 bg-white/80 hover:bg-white rounded-full transition-all border border-stone-200"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Gallery / Image */}
          <div className="bg-stone-100 p-6 sm:p-8 flex items-center justify-center relative min-h-[360px] md:min-h-[500px]">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="max-h-[440px] w-full object-cover rounded-xl shadow-md"
            />
            {product.badge && (
              <span className="absolute top-6 left-6 bg-stone-900 text-stone-100 text-xs uppercase tracking-wider font-medium px-2.5 py-1 rounded">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right Contiguous Purchase Module */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                <span className="uppercase tracking-widest font-medium text-stone-600">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  <span className="font-mono tabular-nums font-semibold text-stone-800">{product.rating}</span>
                  <span>({product.reviewsCount} opiniones)</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 font-normal leading-snug mb-1">
                {product.name}
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mb-4">
                {product.subtitle}
              </p>

              {/* Price & Guarantee */}
              <div className="flex items-baseline gap-3 mb-6 pb-4 border-b border-stone-200">
                <span className="font-mono tabular-nums text-2xl font-bold text-stone-900">
                  ${(product.price * quantity).toLocaleString('es-AR')}
                </span>
                {product.originalPrice && (
                  <span className="font-mono tabular-nums text-sm text-stone-400 line-through">
                    ${(product.originalPrice * quantity).toLocaleString('es-AR')}
                  </span>
                )}
                <span className="text-xs text-emerald-800 font-medium ml-auto flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Stock Inmediato
                </span>
              </div>

              {/* Variant Selectors: Phone Model */}
              {product.compatibility && product.compatibility.length > 0 && (
                <div className="mb-4">
                  <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-stone-500" />
                    Modelo de Celular Compatible:
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full text-xs font-medium bg-stone-50 border border-stone-300 rounded-lg px-3 py-2.5 text-stone-900 focus:outline-none focus:border-stone-900"
                  >
                    {product.compatibility.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Variant Selectors: Ring Size */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-4">
                  <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-1.5">
                    <Gem className="w-3.5 h-3.5 text-stone-500" />
                    Talla de Anillo:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`text-xs py-2 px-3 rounded-lg border text-left transition-all ${
                          selectedSize === size
                            ? 'border-stone-900 bg-stone-900 text-white font-medium'
                            : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color finishes */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-5">
                  <span className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-2">
                    Acabado / Metal: <span className="normal-case text-stone-500 font-normal">{selectedColor}</span>
                  </span>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-7 h-7 rounded-full border-2 transition-all p-0.5 ${
                          selectedColor === c.name ? 'border-stone-900 scale-110 shadow-sm' : 'border-transparent'
                        }`}
                        title={c.name}
                      >
                        <span 
                          className="block w-full h-full rounded-full border border-stone-300/60"
                          style={{ backgroundColor: c.hex }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Description & Features bullet */}
              <div className="text-xs text-stone-600 leading-relaxed mb-4">
                <p className="mb-2.5">{product.description}</p>
                <ul className="space-y-1.5 text-stone-600">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#D4AF37] font-bold">·</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gift wrap option */}
              <div className="mb-5 p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={giftWrap}
                    onChange={(e) => setGiftWrap(e.target.checked)}
                    className="w-4 h-4 rounded border-stone-300 text-stone-900 focus:ring-0"
                  />
                  <Gift className="w-4 h-4 text-[#D4AF37]" />
                  <span>Empaque de Regalo con Lazos de Seda y Tarjeta Caligrafiada</span>
                </label>
                <span className="text-[11px] font-mono text-stone-500 font-medium">+$0 (Gratis)</span>
              </div>
            </div>

            {/* Sticky Actions Container at Bottom */}
            <div className="pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3">
                {/* Quantity stepper */}
                <div className="flex items-center border border-stone-300 rounded-lg bg-stone-50 overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors"
                    aria-label="Disminuir cantidad"
                  >
                    -
                  </button>
                  <span className="font-mono tabular-nums text-xs font-semibold px-2 text-stone-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors"
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                </div>

                {/* Main Purchase CTA */}
                <button
                  onClick={handleBuy}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium text-xs uppercase tracking-widest text-white transition-all shadow-sm flex items-center justify-center gap-2 ${
                    addedAnimation ? 'bg-emerald-700' : 'bg-stone-900 hover:bg-stone-800'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>¡Añadido a la Bolsa!</span>
                    </>
                  ) : (
                    <span>Añadir a la Bolsa · ${(product.price * quantity).toLocaleString('es-AR')}</span>
                  )}
                </button>
              </div>

              {/* Guarantees row */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-stone-400" />
                  Entrega 24/48h asegurada
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-stone-400" />
                  Garantía 2 años oficial TOYSA
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
