import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Star, Shield, Truck, Headphones, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-[#333333] mb-4">Producto no encontrado</h1>
          <Link to="/productos" className="text-[#009EE3] hover:text-[#0066CC]">
            Volver a productos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const images = [product.image, product.image, product.image]; // In real app, multiple images

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-[#009EE3] transition-colors duration-200">
            Inicio
          </Link>
          <span>/</span>
          <Link to="/productos" className="hover:text-[#009EE3] transition-colors duration-200">
            Productos
          </Link>
          <span>/</span>
          <span className="text-[#333333] font-medium">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex space-x-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index ? 'border-[#009EE3]' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                {product.badge && (
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                    product.popular ? 'bg-[#009EE3]' : product.badge === 'Nuevo' ? 'bg-green-500' : 'bg-[#0066CC]'
                  }`}>
                    {product.badge}
                  </span>
                )}
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                {product.popular && (
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-600">Más Popular</span>
                  </div>
                )}
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.inStock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'En Stock' : 'Agotado'}
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-4xl font-bold text-[#009EE3]">
                  ${product.price.toLocaleString()}
                </span>
                <span className="text-gray-500">MXN</span>
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    Ahorra ${(product.originalPrice - product.price).toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#333333] mb-4">
                Características Principales
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#333333] mb-4">
                Especificaciones Técnicas
              </h3>
              <div className="space-y-3">
                {product.specifications.screen && (
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-600">Pantalla:</span>
                    <span className="text-[#333333]">{product.specifications.screen}</span>
                  </div>
                )}
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-600">Conectividad:</span>
                  <span className="text-[#333333]">{product.specifications.connectivity.join(', ')}</span>
                </div>
                {product.specifications.battery && (
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-600">Batería:</span>
                    <span className="text-[#333333]">{product.specifications.battery}</span>
                  </div>
                )}
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-600">Dimensiones:</span>
                  <span className="text-[#333333]">{product.specifications.dimensions}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium text-gray-600">Peso:</span>
                  <span className="text-[#333333]">{product.specifications.weight}</span>
                </div>
              </div>
            </div>

            {/* Purchase Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-4">
                <button 
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                    product.inStock
                      ? 'bg-[#009EE3] text-white hover:bg-[#0066CC] transform hover:scale-105 shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>{product.inStock ? 'Solicitar Información' : 'No Disponible'}</span>
                </button>
                
                <div className="flex space-x-3">
                  <button className="flex-1 py-3 px-4 border border-[#009EE3] text-[#009EE3] rounded-lg font-semibold hover:bg-[#009EE3] hover:text-white transition-all duration-200 flex items-center justify-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>Favoritos</span>
                  </button>
                  <button className="flex-1 py-3 px-4 border border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2">
                    <Share2 className="h-5 w-5" />
                    <span>Compartir</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-md">
                <Shield className="h-8 w-8 text-[#009EE3] mx-auto mb-2" />
                <p className="text-sm font-medium text-[#333333]">Garantía 2 años</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-md">
                <Truck className="h-8 w-8 text-[#009EE3] mx-auto mb-2" />
                <p className="text-sm font-medium text-[#333333]">Envío gratis</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-md">
                <Headphones className="h-8 w-8 text-[#009EE3] mx-auto mb-2" />
                <p className="text-sm font-medium text-[#333333]">Soporte 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;