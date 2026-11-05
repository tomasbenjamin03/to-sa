import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Instagram } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectCategory: (categoryId: string) => void;
  onScrollToStudio: () => void;
  onScrollToAtelier: () => void;
  onScrollToInstagram: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onSelectCategory,
  onScrollToStudio,
  onScrollToAtelier,
  onScrollToInstagram,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="/" 
          className="text-2xl font-serif tracking-widest uppercase font-semibold text-stone-900 whitespace-nowrap shrink-0 hover:text-stone-700 transition-colors"
        >
          TOYSA <span className="text-xs font-sans tracking-widest font-normal text-stone-500 ml-1">JOYAS & TECH</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button 
            onClick={() => onSelectCategory('joyeria')}
            className="hover:text-stone-900 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-stone-900 after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
          >
            Colección Joyas
          </button>
          <button 
            onClick={() => onSelectCategory('celulares')}
            className="hover:text-stone-900 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-stone-900 after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
          >
            Fundas & MagSafe
          </button>
          <button 
            onClick={() => onSelectCategory('charms')}
            className="hover:text-stone-900 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-stone-900 after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
          >
            Charms & Correas
          </button>
          <button 
            onClick={onScrollToStudio}
            className="hover:text-stone-900 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-stone-900 after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
          >
            Styling Studio
          </button>
          <button 
            onClick={onScrollToInstagram}
            className="hover:text-stone-900 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-stone-900 after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Instagram className="w-3.5 h-3.5 text-stone-500" />
            <span>@toysa_23</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action area */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Direct link to Instagram */}
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100/60 rounded-lg transition-colors hidden sm:inline-flex"
            title="Visitar perfil de Instagram @toysa_23"
            aria-label="Instagram @toysa_23"
          >
            <Instagram className="w-5 h-5 text-stone-700" />
          </a>

          {/* Quick search toggle */}
          {showSearchInput ? (
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar joyas, fundas..."
                className="w-44 md:w-56 text-xs bg-white border border-stone-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-stone-900 transition-all text-stone-900"
                autoFocus
              />
              <button 
                onClick={() => { setShowSearchInput(false); onSearchChange(''); }}
                className="absolute right-2 text-stone-400 hover:text-stone-700"
                aria-label="Cerrar búsqueda"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowSearchInput(true)}
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100/60 rounded-lg transition-colors"
              aria-label="Buscar productos"
            >
              <Search className="w-5 h-5" />
            </button>
          )}

          {/* Primary Action: Shopping Bag */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-stone-900 bg-white border border-stone-300 rounded-lg hover:border-stone-900 hover:bg-stone-50 transition-all whitespace-nowrap shrink-0"
            aria-label={`Bolsa de compra (${cartCount} productos)`}
          >
            <ShoppingBag className="w-4 h-4 text-stone-800" />
            <span className="hidden sm:inline">Bolsa</span>
            <span className="font-mono tabular-nums text-xs bg-stone-900 text-white rounded-full px-1.5 py-0.2 min-w-5 text-center leading-tight">
              {cartCount}
            </span>
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 transition-colors"
            aria-label="Menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FAF8F5] px-6 py-5 flex flex-col gap-4 text-sm font-medium">
          <button 
            onClick={() => { onSelectCategory('all'); setMobileMenuOpen(false); }}
            className="text-left text-stone-800 hover:text-stone-900 py-1"
          >
            Toda la Colección
          </button>
          <button 
            onClick={() => { onSelectCategory('joyeria'); setMobileMenuOpen(false); }}
            className="text-left text-stone-800 hover:text-stone-900 py-1"
          >
            Colección Joyas de Oro & Plata
          </button>
          <button 
            onClick={() => { onSelectCategory('celulares'); setMobileMenuOpen(false); }}
            className="text-left text-stone-800 hover:text-stone-900 py-1"
          >
            Fundas MagSafe & Carteras
          </button>
          <button 
            onClick={() => { onSelectCategory('charms'); setMobileMenuOpen(false); }}
            className="text-left text-stone-800 hover:text-stone-900 py-1"
          >
            Charms & Correas de Perlas
          </button>
          <button 
            onClick={() => { onScrollToStudio(); setMobileMenuOpen(false); }}
            className="text-left text-stone-800 hover:text-stone-900 py-1"
          >
            Styling Studio (Dúo Joya + Tech)
          </button>
          <button 
            onClick={() => { onScrollToInstagram(); setMobileMenuOpen(false); }}
            className="text-left text-stone-800 hover:text-stone-900 py-1 flex items-center gap-2"
          >
            <Instagram className="w-4 h-4 text-stone-600" />
            <span>Instagram (@toysa_23)</span>
          </button>
        </div>
      )}
    </header>
  );
};
