import React from 'react';
import { Check, CreditCard, Smartphone, Wifi, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Products: React.FC = () => {
  // Show only first 3 products on home page
  const featuredProducts = products.slice(0, 3);

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Nuestras Terminales Point
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra la terminal perfecta para tu negocio. Todas nuestras terminales 
            incluyen garantía y soporte técnico especializado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                product.popular ? 'ring-2 ring-[#009EE3] relative' : ''
              }`}
            >
              {product.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-sm font-semibold text-white ${
                  product.popular ? 'bg-[#009EE3]' : 'bg-[#0066CC]'
                }`}>
                  {product.badge}
                </div>
              )}
              
              <div className="p-6">
                <div className="mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#333333] mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-[#009EE3]">${product.price.toLocaleString()}</span>
                    <span className="text-gray-500">MXN</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                    product.popular
                      ? 'bg-[#009EE3] text-white hover:bg-[#0066CC]'
                      : 'bg-gray-100 text-[#333333] hover:bg-gray-200'
                  }`}>
                    Solicitar Información
                  </button>
                  <Link 
                    to={`/productos/${product.id}`}
                    className="w-full py-3 px-4 border border-[#009EE3] text-[#009EE3] rounded-lg font-semibold hover:bg-[#009EE3] hover:text-white transition-all duration-200 block text-center"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ver todos los productos button */}
        <div className="mt-12 text-center">
          <Link
            to="/productos"
            className="inline-flex items-center space-x-2 bg-[#009EE3] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0066CC] transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <span>Ver Todos los Productos</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <CreditCard className="h-12 w-12 text-[#009EE3] mx-auto mb-4" />
                <h4 className="font-semibold text-[#333333] mb-2">Todos los Medios de Pago</h4>
                <p className="text-gray-600 text-sm">Tarjetas, efectivo, transferencias y más</p>
              </div>
              <div className="text-center">
                <Smartphone className="h-12 w-12 text-[#009EE3] mx-auto mb-4" />
                <h4 className="font-semibold text-[#333333] mb-2">App Móvil Gratuita</h4>
                <p className="text-gray-600 text-sm">Gestiona tu negocio desde cualquier lugar</p>
              </div>
              <div className="text-center">
                <Wifi className="h-12 w-12 text-[#009EE3] mx-auto mb-4" />
                <h4 className="font-semibold text-[#333333] mb-2">Conectividad Total</h4>
                <p className="text-gray-600 text-sm">WiFi, 4G y Bluetooth integrados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;