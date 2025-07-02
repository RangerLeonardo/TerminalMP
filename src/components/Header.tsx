import React, { useState } from 'react';
import { Menu, X, CreditCard } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <CreditCard className="h-8 w-8 text-[#009EE3]" />
            <span className="text-xl font-bold text-[#333333]">MercadoPago Terminals</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-[#333333] hover:text-[#009EE3] transition-colors duration-200 font-medium">
              Inicio
            </a>
            <a href="#productos" className="text-[#333333] hover:text-[#009EE3] transition-colors duration-200 font-medium">
              Productos
            </a>
            <a href="#beneficios" className="text-[#333333] hover:text-[#009EE3] transition-colors duration-200 font-medium">
              Beneficios
            </a>
            <a href="#contacto" className="text-[#333333] hover:text-[#009EE3] transition-colors duration-200 font-medium">
              Contacto
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#333333]" />
            ) : (
              <Menu className="h-6 w-6 text-[#333333]" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#inicio" className="block px-3 py-2 text-[#333333] hover:text-[#009EE3] transition-colors duration-200">
              Inicio
            </a>
            <a href="#productos" className="block px-3 py-2 text-[#333333] hover:text-[#009EE3] transition-colors duration-200">
              Productos
            </a>
            <a href="#beneficios" className="block px-3 py-2 text-[#333333] hover:text-[#009EE3] transition-colors duration-200">
              Beneficios
            </a>
            <a href="#contacto" className="block px-3 py-2 text-[#333333] hover:text-[#009EE3] transition-colors duration-200">
              Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;