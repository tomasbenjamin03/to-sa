import React, { useState } from 'react';
import { Product } from '../types';
import { Sparkles, Plus, Check, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

interface StyleStudioProps {
  jewelryProducts: Product[];
  techProducts: Product[];
  onAddBundleToCart: (jewelry: Product, tech: Product, phoneModel: string) => void;
}

export const StyleStudio: React.FC<StyleStudioProps> = ({
  jewelryProducts,
  techProducts,
  onAddBundleToCart,
}) => {
  const [selectedJewelry, setSelectedJewelry] = useState<Product>(
    jewelryProducts[0] || null
  );
  const [selectedTech, setSelectedTech] = useState<Product>(
    techProducts[0] || null
  );
  const [selectedModel, setSelectedModel] = useState<string>('iPhone 16 Pro');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const phoneModels = [
    'iPhone 16 Pro Max',
    'iPhone 16 Pro',
    'iPhone 16',
    'iPhone 15 Pro Max',
    'iPhone 15 Pro',
    'Samsung Galaxy S25 Ultra',
    'Samsung Galaxy S24 Ultra',
  ];

  if (!selectedJewelry || !selectedTech) return null;

  const originalTotal = selectedJewelry.price + selectedTech.price;
  const bundleDiscount = Math.round(originalTotal * 0.15); // 15% Dúo saving
  const finalBundlePrice = originalTotal - bundleDiscount;

  const handleAddBundle = () => {
    onAddBundleToCart(selectedJewelry, selectedTech, selectedModel);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <section id="styling-studio" className="py-16 lg:py-24 bg-[#F5F2EB] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-stone-500 font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Atelier Styling Studio</span>
            <span aria-hidden="true">·</span>
            <span>Diseña tu Combinación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-stone-900 mb-4 text-balance">
            Crea tu Dúo Exclusivo: Joya + Accesorio Móvil
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Coordina el tono de tus joyas con tu funda o correa tecnológica. Al llevar un conjunto Dúo recibes un 15% de descuento directo y nuestro empaque de regalo insignia.
          </p>
        </div>

        {/* Interactive Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step 1: Pick Jewelry */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-stone-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-900">
                  1. Selecciona tu Joya
                </span>
                <span className="text-xs text-stone-400">Baño Dorado / Acero</span>
              </div>

              <div className="space-y-3 mb-6">
                {jewelryProducts.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedJewelry(item)}
                    className={`flex items-center gap-3 p-2.5 rounded-xl border cursor-pointer transition-all ${
                      selectedJewelry.id === item.id
                        ? 'border-stone-900 bg-stone-50/80 shadow-xs'
                        : 'border-stone-200/60 hover:border-stone-300'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-lg object-cover bg-stone-100 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-stone-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-stone-500 truncate">
                        {item.material}
                      </p>
                      <span className="font-mono tabular-nums text-xs font-medium text-stone-800">
                        ${item.price.toLocaleString('es-AR')}
                      </span>
                    </div>
                    {selectedJewelry.id === item.id && (
                      <Check className="w-4 h-4 text-stone-900 shrink-0 mr-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-stone-50 rounded-xl text-[11px] text-stone-600 border border-stone-200/60">
              <span className="font-semibold text-stone-800">Seleccionado:</span> {selectedJewelry.name} (${selectedJewelry.price.toLocaleString('es-AR')})
            </div>
          </div>

          {/* Step 2: Pick Tech Accessory */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-stone-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-900">
                  2. Selecciona tu Accesorio Celular
                </span>
                <span className="text-xs text-stone-400">MagSafe & Charms</span>
              </div>

              <div className="space-y-3 mb-6">
                {techProducts.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedTech(item)}
                    className={`flex items-center gap-3 p-2.5 rounded-xl border cursor-pointer transition-all ${
                      selectedTech.id === item.id
                        ? 'border-stone-900 bg-stone-50/80 shadow-xs'
                        : 'border-stone-200/60 hover:border-stone-300'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-lg object-cover bg-stone-100 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-stone-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-stone-500 truncate">
                        {item.categoryLabel}
                      </p>
                      <span className="font-mono tabular-nums text-xs font-medium text-stone-800">
                        ${item.price.toLocaleString('es-AR')}
                      </span>
                    </div>
                    {selectedTech.id === item.id && (
                      <Check className="w-4 h-4 text-stone-900 shrink-0 mr-1" />
                    )}
                  </div>
                ))}
              </div>

              {/* Phone Model Select */}
              <div className="mb-2">
                <label className="block text-[11px] font-medium text-stone-700 uppercase tracking-wider mb-1">
                  Tu modelo de celular:
                </label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full text-xs bg-stone-50 border border-stone-300 rounded-lg px-2.5 py-2 text-stone-800 focus:outline-none focus:border-stone-900"
                >
                  {phoneModels.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="p-3 bg-stone-50 rounded-xl text-[11px] text-stone-600 border border-stone-200/60 mt-3">
              <span className="font-semibold text-stone-800">Seleccionado:</span> {selectedTech.name} (${selectedTech.price.toLocaleString('es-AR')})
            </div>
          </div>

          {/* Step 3: Coordinated Preview & Bundle Purchase */}
          <div className="lg:col-span-4 bg-stone-900 text-stone-100 p-6 sm:p-7 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-800">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  3. Vista del Dúo Armonizado
                </span>
                <span className="text-[10px] bg-stone-800 text-stone-300 font-mono px-2 py-0.5 rounded">
                  -15% DÚO
                </span>
              </div>

              {/* Dual image preview */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-stone-800/80 rounded-xl p-2 flex flex-col items-center">
                  <img
                    src={selectedJewelry.image}
                    alt={selectedJewelry.name}
                    referrerPolicy="no-referrer"
                    className="w-full aspect-square object-cover rounded-lg mb-2"
                  />
                  <p className="text-[11px] font-medium text-center text-stone-200 line-clamp-1">
                    {selectedJewelry.name}
                  </p>
                </div>

                <div className="bg-stone-800/80 rounded-xl p-2 flex flex-col items-center">
                  <img
                    src={selectedTech.image}
                    alt={selectedTech.name}
                    referrerPolicy="no-referrer"
                    className="w-full aspect-square object-cover rounded-lg mb-2"
                  />
                  <p className="text-[11px] font-medium text-center text-stone-200 line-clamp-1">
                    {selectedTech.name}
                  </p>
                </div>
              </div>

              <div className="text-xs text-stone-300 space-y-1.5 mb-5 bg-stone-800/50 p-3 rounded-xl border border-stone-700/60">
                <div className="flex justify-between">
                  <span>Precio individual combinado:</span>
                  <span className="font-mono tabular-nums line-through text-stone-400">${originalTotal.toLocaleString('es-AR')}</span>
                </div>
                <div className="flex justify-between text-[#D4AF37] font-medium">
                  <span>Descuento exclusivo Dúo (-15%):</span>
                  <span className="font-mono tabular-nums">-${bundleDiscount.toLocaleString('es-AR')}</span>
                </div>
                <div className="flex justify-between text-stone-200">
                  <span>Compatibilidad configurada:</span>
                  <span className="font-medium text-white">{selectedModel}</span>
                </div>
              </div>

              {/* Price summary */}
              <div className="pt-2 mb-6 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-stone-400 block">Total del Conjunto Dúo</span>
                  <span className="text-2xl font-serif font-bold text-white font-mono tabular-nums">
                    ${finalBundlePrice.toLocaleString('es-AR')}
                  </span>
                </div>
                <span className="text-xs text-stone-300">
                  Envío y estuche de regalo incluidos
                </span>
              </div>
            </div>

            {/* Action button */}
            <div>
              <button
                onClick={handleAddBundle}
                className={`w-full py-3.5 px-4 rounded-xl font-medium text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                  addedSuccess
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white hover:bg-stone-100 text-stone-900 shadow-md hover:scale-[1.01]'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>¡Dúo Añadido a la Bolsa!</span>
                  </>
                ) : (
                  <>
                    <span>Añadir Dúo a la Bolsa</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Garantía 2 años
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <HeartHandshake className="w-3.5 h-3.5 text-stone-400" />
                  Devolución gratuita
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
