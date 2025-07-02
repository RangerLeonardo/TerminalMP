import React from 'react';
import { CreditCard, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <CreditCard className="h-8 w-8 text-[#009EE3]" />
              <span className="text-xl font-bold">MercadoPago Terminals</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas en terminales de cobro Point. Ayudamos a miles de comercios 
              a crecer con tecnología de vanguardia y el mejor servicio del mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#009EE3] transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#009EE3] transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#009EE3] transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#009EE3] transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Productos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#009EE3] transition-colors duration-200">
                  Point Smart
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#009EE3] transition-colors duration-200">
                  Point Pro
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#009EE3] transition-colors duration-200">
                  Point Mini
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#009EE3] transition-colors duration-200">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#009EE3] transition-colors duration-200">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#009EE3] transition-colors duration-200">
                  Manuales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#009EE3] transition-colors duration-200">
                  Videos Tutoriales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#009EE3] transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MercadoPago Terminals. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#009EE3] text-sm transition-colors duration-200">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-[#009EE3] text-sm transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-[#009EE3] text-sm transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;