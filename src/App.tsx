import React, { useState, useEffect, useMemo } from 'react';
import { Product, CartItem, PlacedOrder } from './types';
import { PRODUCTS, CATEGORIES } from './data/products';
import { PromoBanner } from './components/PromoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { StyleStudio } from './components/StyleStudio';
import { Craftsmanship } from './components/Craftsmanship';
import { InstagramFeed } from './components/InstagramFeed';
import { ReviewsSection } from './components/ReviewsSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { SlidersHorizontal, Sparkles, Check, Gem, Smartphone } from 'lucide-react';

export default function App() {
  // Persistent Cart in localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aura_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('aura_cart', JSON.stringify(cart));
    } catch {
      // Ignore storage errors
    }
  }, [cart]);

  // Modals & Drawers state
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Filters & Search
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add to Cart handler
  const handleAddToCart = (
    product: Product,
    quantity: number = 1,
    selectedModel?: string,
    selectedSize?: string,
    selectedColor?: string,
    giftWrap?: boolean
  ) => {
    setCart((prev) => {
      // Check if exact same variant already in cart
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedModel === selectedModel &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      } else {
        return [
          ...prev,
          {
            product,
            quantity,
            selectedModel: selectedModel || (product.compatibility ? product.compatibility[0] : undefined),
            selectedSize: selectedSize || (product.sizes ? product.sizes[0] : undefined),
            selectedColor: selectedColor || (product.colors ? product.colors[0].name : undefined),
            giftWrap,
          },
        ];
      }
    });

    showToast(`"${product.name}" añadido a tu bolsa`);
  };

  // Add Style Studio Bundle to Cart
  const handleAddBundleToCart = (
    jewelry: Product,
    tech: Product,
    phoneModel: string
  ) => {
    // 15% discount applied directly to bundle items
    const discountedJewelry = {
      ...jewelry,
      price: Math.round(jewelry.price * 0.85),
    };
    const discountedTech = {
      ...tech,
      price: Math.round(tech.price * 0.85),
    };

    setCart((prev) => [
      ...prev,
      {
        product: discountedJewelry,
        quantity: 1,
        selectedColor: jewelry.colors?.[0]?.name,
        giftWrap: true,
      },
      {
        product: discountedTech,
        quantity: 1,
        selectedModel: phoneModel,
        selectedColor: tech.colors?.[0]?.name,
        giftWrap: true,
      },
    ]);

    showToast(`¡Dúo "${jewelry.name} + ${tech.name}" añadido con 15% DTO!`);
    setCartDrawerOpen(true);
  };

  // Cart modifications
  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
    } else {
      setCart((prev) => {
        const next = [...prev];
        next[index].quantity = newQty;
        return next;
      });
    }
  };

  const handleRemoveItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesSub = item.subtitle.toLowerCase().includes(q);
        const matchesCat = item.categoryLabel.toLowerCase().includes(q);
        const matchesMat = item.material.toLowerCase().includes(q);
        if (!matchesName && !matchesSub && !matchesCat && !matchesMat) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default featured order
    });
  }, [selectedCategory, searchQuery, sortBy]);

  // Separate jewelry & tech for the Studio
  const jewelryList = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === 'joyeria');
  }, []);

  const techList = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === 'celulares' || p.category === 'charms');
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartUnits = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-stone-900 selection:text-white">
      
      {/* Top slim promo banner */}
      <PromoBanner />

      {/* Top Bar Contract Navbar */}
      <Navbar
        cartCount={totalCartUnits}
        onOpenCart={() => setCartDrawerOpen(true)}
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          scrollToSection('catalogo');
        }}
        onScrollToStudio={() => scrollToSection('styling-studio')}
        onScrollToAtelier={() => scrollToSection('nuestro-atelier')}
        onScrollToInstagram={() => scrollToSection('instagram-community')}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q.trim()) scrollToSection('catalogo');
        }}
      />

      <main className="flex-1">
        {/* Editorial Campaign Hero */}
        <Hero
          onExploreClick={() => scrollToSection('catalogo')}
          onStudioClick={() => scrollToSection('styling-studio')}
        />

        {/* Catalog Section with Category Filter Tabs */}
        <section id="catalogo" className="py-16 lg:py-20 max-w-7xl mx-auto px-6">
          
          {/* Header & Category Tabs (Interactive Segmented Controls - Allowed Buttons) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-medium mb-2">
                <span>Catálogo Completo</span>
                <span aria-hidden="true">·</span>
                <span>{filteredProducts.length} Diseños Disponibles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-normal">
                Colección Joyas & Accesorios Móvil
              </h2>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs text-stone-500 font-medium flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-stone-700" />
                Ordenar por:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs bg-white border border-stone-300 rounded-lg px-3 py-2 text-stone-800 focus:outline-none focus:border-stone-900 font-medium cursor-pointer"
              >
                <option value="featured">Destacados Atelier</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="rating">Mejor Valorados</option>
              </select>
            </div>
          </div>

          {/* Functional Category Filter Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-400'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Query indicator if active */}
          {searchQuery && (
            <div className="mb-6 flex items-center justify-between bg-stone-100 p-3 rounded-xl text-xs text-stone-700">
              <span>
                Resultados para la búsqueda: <strong className="text-stone-900">"{searchQuery}"</strong> ({filteredProducts.length})
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-stone-500 hover:text-stone-900 font-medium underline"
              >
                Limpiar búsqueda
              </button>
            </div>
          )}

          {/* Products Grid: 3 or 4 columns desktop */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-stone-200">
              <p className="font-serif text-2xl text-stone-800 mb-2">No se encontraron productos</p>
              <p className="text-xs text-stone-500 mb-6">
                Intenta ajustar tu búsqueda o selecciona otra categoría.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-medium uppercase tracking-wider"
              >
                Ver Todo el Catálogo
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                  onAddToCart={(p) => handleAddToCart(p, 1)}
                />
              ))}
            </div>
          )}

        </section>

        {/* Interactive Style Studio (Dúo Joya + Tech) */}
        <StyleStudio
          jewelryProducts={jewelryList}
          techProducts={techList}
          onAddBundleToCart={handleAddBundleToCart}
        />

        {/* Craftsmanship & Atelier Values */}
        <Craftsmanship />

        {/* Instagram Community Feed @toysa_23 */}
        <InstagramFeed />

        {/* Reviews & Social Proof */}
        <ReviewsSection />

      </main>

      {/* Boutique Footer */}
      <Footer />

      {/* Quick View / PDP Modal */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, qty, model, size, color, gift) => {
          handleAddToCart(p, qty, model, size, color, gift);
        }}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => setCheckoutModalOpen(true)}
      />

      {/* Realistic Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        cart={cart}
        onOrderPlaced={() => {}}
        onClearCart={handleClearCart}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-4 py-3 rounded-xl shadow-xl border border-stone-700 text-xs font-medium flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4 text-[#D4AF37]" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
