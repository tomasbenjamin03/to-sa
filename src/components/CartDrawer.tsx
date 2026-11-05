import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ArrowRight, ShieldCheck, Gift, Truck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<number | null>(null);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discount = appliedPromo ? Math.round(subtotal * appliedPromo) : 0;
  const freeShippingThreshold = 35000;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingCost = isFreeShipping || subtotal === 0 ? 0 : 3500;
  const total = subtotal - discount + shippingCost;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'TOYSA10' || code === 'AURA10') {
      setAppliedPromo(0.1); // 10%
    } else if (code === 'BIENVENIDA') {
      setAppliedPromo(0.15); // 15%
    } else {
      setPromoError('Cupón inválido. Prueba con "TOYSA10" o "BIENVENIDA"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-950/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col border-l border-stone-200" aria-label="Bolsa de compra">
          
          {/* Drawer Header */}
          <div className="p-6 bg-white border-b border-stone-200 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-xl font-medium text-stone-900">
                Tu Bolsa de Compra
              </h2>
              <span className="text-xs text-stone-500 font-mono">
                {cart.reduce((total, i) => total + i.quantity, 0)} {cart.length === 1 ? 'artículo' : 'artículos'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Cerrar bolsa"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free shipping progress strip */}
          <div className="px-6 py-3 bg-[#F5F2EB] border-b border-stone-200/80 text-xs">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-emerald-800 font-medium">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>¡Tenés Envío Gratis a toda la Argentina!</span>
              </div>
            ) : (
              <div>
                <div className="flex justify-between text-stone-600 mb-1.5 font-medium">
                  <span>Envío Gratis desde $35.000</span>
                  <span className="font-mono tabular-nums">Faltan ${remainingForFreeShipping.toLocaleString('es-AR')}</span>
                </div>
                <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#D4AF37] h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-stone-500 py-12">
                <span className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-4">
                  🛍️
                </span>
                <p className="font-serif text-lg text-stone-800 mb-1">Tu bolsa está vacía</p>
                <p className="text-xs text-stone-500 max-w-xs mb-6">
                  Descubrí nuestros accesorios bañados en dorado y las fundas de tendencia para tu celular.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-stone-900 text-white rounded-lg text-xs font-medium uppercase tracking-wider hover:bg-stone-800 transition-colors"
                >
                  Explorar Catálogo
                </button>
              </div>
            ) : (
              cart.map((item, index) => (
                <div
                  key={`${item.product.id}-${index}`}
                  className="bg-white p-3.5 rounded-xl border border-stone-200/90 flex gap-3.5 shadow-xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 rounded-lg object-cover bg-stone-100 shrink-0"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-semibold text-stone-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-stone-400 hover:text-red-600 transition-colors p-0.5"
                          title="Eliminar producto"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Variant metadata */}
                      <div className="text-[11px] text-stone-500 space-y-0.5 mt-0.5">
                        {item.selectedModel && (
                          <p>Móvil: <span className="text-stone-700 font-medium">{item.selectedModel}</span></p>
                        )}
                        {item.selectedSize && (
                          <p>Talla: <span className="text-stone-700 font-medium">{item.selectedSize}</span></p>
                        )}
                        {item.selectedColor && (
                          <p>Acabado: <span className="text-stone-700 font-medium">{item.selectedColor}</span></p>
                        )}
                        {item.giftWrap && (
                          <p className="text-[#D4AF37] flex items-center gap-1">
                            <Gift className="w-3 h-3" />
                            Empaque de regalo incluido
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 mt-1 border-t border-stone-100">
                      {/* Quantity buttons */}
                      <div className="flex items-center border border-stone-200 rounded-md bg-stone-50 overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="px-2 py-0.5 text-stone-600 hover:bg-stone-200 text-xs"
                        >
                          -
                        </button>
                        <span className="font-mono tabular-nums text-xs px-2 font-medium text-stone-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="px-2 py-0.5 text-stone-600 hover:bg-stone-200 text-xs"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-mono tabular-nums text-xs font-semibold text-stone-900">
                        ${(item.product.price * item.quantity).toLocaleString('es-AR')}
                      </span>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout Action */}
          {cart.length > 0 && (
            <div className="p-6 bg-white border-t border-stone-200 space-y-4">
              
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Cupón (ej. TOYSA10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 text-xs uppercase bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-stone-900 focus:outline-none focus:border-stone-900"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg transition-colors whitespace-nowrap"
                >
                  Aplicar
                </button>
              </form>
              {promoError && (
                <p className="text-[11px] text-red-600">{promoError}</p>
              )}
              {appliedPromo && (
                <p className="text-[11px] text-emerald-700 font-medium">
                  ✓ Descuento del {(appliedPromo * 100).toFixed(0)}% aplicado correctamente
                </p>
              )}

              {/* Subtotals breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-100">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums text-stone-900">${subtotal.toLocaleString('es-AR')}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Descuento de cupón</span>
                    <span className="font-mono tabular-nums">-${discount.toLocaleString('es-AR')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Envío (Correo Argentino / Andreani)</span>
                  <span className="font-mono tabular-nums">
                    {shippingCost === 0 ? 'Gratis' : `$${shippingCost.toLocaleString('es-AR')}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-stone-900 pt-2 border-t border-stone-200">
                  <span>Total final</span>
                  <span className="font-mono tabular-nums font-serif text-lg">${total.toLocaleString('es-AR')}</span>
                </div>
              </div>

              {/* Primary Checkout Button */}
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full py-3.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs uppercase tracking-widest font-medium transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Iniciar Compra · ${total.toLocaleString('es-AR')}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-500" />
                <span>Mercado Pago · Transferencia bancaria · Envíos seguros</span>
              </div>

            </div>
          )}

        </aside>
      </div>
    </div>
  );
};
