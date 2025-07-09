import React from 'react';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import "../styles/hero.css";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-[#009EE3] to-[#0066CC] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Vende con las mejores 
              <span className="block text-[#E6F3FF]">terminales Point</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Impulsa tu negocio con las terminales de cobro más avanzadas del mercado. 
              Acepta todos los medios de pago y aumenta tus ventas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink to="/productos"
              className="bg-white text-[#009EE3] px-8 py-4 rounded-lg font-bold transition-all duration-200 transform flex items-center justify-center space-x-2 button_ver_productos"> 
                <span>Ver Productos</span>
                <ArrowRight className="h-5 w-5" />
              </NavLink>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-300">
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-[#E6F3FF]" />
                <p className="text-sm font-medium">100% Seguro</p>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 mx-auto mb-2 text-[#E6F3FF]" />
                <p className="text-sm font-medium">Instalación Rápida</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-[#E6F3FF]" />
                <p className="text-sm font-medium">Soporte 24/7</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg" 
                alt="Terminal Point" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />

            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-40 left-10 w-16 h-16 bg-white/10 rounded-full"></div>
        <div className="absolute top-40 left-1/4 w-24 h-24 bg-white/5 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;