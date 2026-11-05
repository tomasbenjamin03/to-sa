import React, { useState } from 'react';
import { CartItem, CustomerDetails, PlacedOrder } from '../types';
import { X, CheckCircle2, ShieldCheck, CreditCard, Truck, Smartphone, ArrowRight, Package } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onOrderPlaced: (order: PlacedOrder) => void;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  onOrderPlaced,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [completedOrder, setCompletedOrder] = useState<PlacedOrder | null>(null);

  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bizum' | 'cod' | 'applepay'>('card');
  const [formError, setFormError] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 35000 ? 0 : 3500;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !address.trim() || !city.trim() || !postalCode.trim()) {
      setFormError('Por favor completa todos los campos de entrega obligatorios.');
      return;
    }

    const orderNum = Math.floor(100000 + Math.random() * 900000);
    const newOrder: PlacedOrder = {
      orderId: `TOYSA-${orderNum}`,
      date: new Date().toLocaleDateString('es-AR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      items: [...cart],
      subtotal,
      shipping,
      discount: 0,
      total,
      customer: {
        fullName,
        email,
        phone,
        address,
        city,
        postalCode,
        notes,
        paymentMethod,
      },
    };

    setCompletedOrder(newOrder);
    onOrderPlaced(newOrder);
    onClearCart();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#FAF8F5] border-b border-stone-200 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-stone-500 font-medium block">
              TOYSA Checkout Seguro
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-normal text-stone-900">
              {step === 'form' ? 'Finalizar Pedido' : '¡Pedido Confirmado!'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-800 rounded-lg transition-colors"
            aria-label="Cerrar checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            
            {/* Quick summary strip */}
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 flex items-center justify-between text-xs">
              <span className="text-stone-600">
                {cart.length} {cart.length === 1 ? 'producto' : 'productos'} en tu pedido
              </span>
              <span className="font-mono tabular-nums font-semibold text-stone-900 text-sm">
                Total a pagar: ${total.toLocaleString('es-AR')}
              </span>
            </div>

            {/* Customer & Shipping Details */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#D4AF37]" />
                1. Datos de Entrega y Envío (Argentina)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div>
                  <label className="block text-stone-700 mb-1">Nombre y Apellido *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Valentina Morales"
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-900 focus:outline-none focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 mb-1">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="valentina@email.com"
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-900 focus:outline-none focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 mb-1">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+54 9 11 1234-5678"
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-900 focus:outline-none focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 mb-1">Dirección (Calle, Número, Piso/Depto) *</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Av. Santa Fe 1234, Piso 4 B"
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-900 focus:outline-none focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 mb-1">Ciudad / Localidad y Provincia *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Palermo, CABA / Córdoba Capital..."
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-900 focus:outline-none focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 mb-1">Código Postal *</label>
                  <input
                    type="text"
                    required
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="C1425 / 5000"
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-900 focus:outline-none focus:border-stone-900"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="block text-xs text-stone-700 mb-1">Instrucciones para la entrega o dedicatoria de regalo (opcional)</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej. Tocar timbre 'Morales' / Incluir tarjeta: 'Feliz cumple Juli, te quiero mucho'"
                  className="w-full text-xs bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#D4AF37]" />
                2. Método de Pago Seguro
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    paymentMethod === 'card'
                      ? 'border-stone-900 bg-stone-900 text-white font-medium'
                      : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400'
                  }`}
                >
                  <CreditCard className="w-4 h-4 mx-auto mb-1 opacity-80" />
                  <span>Tarjetas Débito / Crédito</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('applepay')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    paymentMethod === 'applepay'
                      ? 'border-stone-900 bg-stone-900 text-white font-medium'
                      : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400'
                  }`}
                >
                  <span className="font-bold text-xs block mb-1 text-sky-400">MP</span>
                  <span>Mercado Pago</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('bizum')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    paymentMethod === 'bizum'
                      ? 'border-stone-900 bg-stone-900 text-white font-medium'
                      : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400'
                  }`}
                >
                  <span className="font-bold text-xs block mb-1">CBU</span>
                  <span>Transferencia / Alias</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-stone-900 bg-stone-900 text-white font-medium'
                      : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400'
                  }`}
                >
                  <Truck className="w-4 h-4 mx-auto mb-1 opacity-80" />
                  <span>Contraentrega (CABA/GBA)</span>
                </button>
              </div>

              {paymentMethod === 'bizum' && (
                <p className="mt-2.5 text-[11px] text-stone-600 bg-stone-100 p-2.5 rounded-lg border border-stone-200">
                  ℹ Te enviaremos el Alias CBU al confirmar para abonar con 10% de descuento adicional por transferencia inmediata.
                </p>
              )}

              {paymentMethod === 'cod' && (
                <p className="mt-2.5 text-[11px] text-stone-600 bg-amber-50/80 p-2.5 rounded-lg border border-amber-200/80">
                  ℹ Pago en efectivo al cadete al momento de recibir en mano (válido para CABA y Gran Buenos Aires).
                </p>
              )}
            </div>

            {formError && (
              <p className="text-xs text-red-600 font-medium">{formError}</p>
            )}

            {/* Confirmation CTA */}
            <div className="pt-4 border-t border-stone-200">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs uppercase tracking-widest font-semibold transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Confirmar y Realizar Pedido · ${total.toLocaleString('es-AR')}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-500" />
                <span>Transacción encriptada · Despacho por Correo Argentino / Andreani</span>
              </div>
            </div>

          </form>
        ) : (
          /* Post-Order Receipt State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block mb-1">
                Confirmación de Compra
              </span>
              <h3 className="font-serif text-3xl font-normal text-stone-900 mb-2">
                ¡Gracias por tu compra, {completedOrder?.customer.fullName}!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                Hemos enviado la confirmación detallada a <strong className="text-stone-900">{completedOrder?.customer.email}</strong> y nos contactaremos a la brevedad por WhatsApp para coordinar el despacho.
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 text-left text-xs max-w-md mx-auto space-y-3">
              <div className="flex justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500">Número de Pedido:</span>
                <span className="font-mono font-bold text-stone-900">{completedOrder?.orderId}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500">Fecha de Orden:</span>
                <span className="text-stone-900">{completedOrder?.date}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500">Dirección de Entrega:</span>
                <span className="text-stone-900 text-right">{completedOrder?.customer.address}, {completedOrder?.customer.city}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500">Método de Pago:</span>
                <span className="text-stone-900 capitalize font-medium">{completedOrder?.customer.paymentMethod}</span>
              </div>
              <div className="flex justify-between pt-1 font-semibold text-stone-900 text-sm">
                <span>Total Abonado:</span>
                <span className="font-mono tabular-nums">${completedOrder?.total.toLocaleString('es-AR')}</span>
              </div>
            </div>

            {/* Post-order CTA */}
            <div className="pt-2">
              <button
                onClick={onClose}
                className="py-3 px-8 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs uppercase tracking-widest font-medium transition-all"
              >
                Volver a la Tienda
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
