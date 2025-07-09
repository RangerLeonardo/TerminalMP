import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Check, ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
            {product.badge && (
                <div className={`absolute -top-3 left-4 px-4 py-1 rounded-full text-sm font-semibold text-white z-10 ${product.popular ? 'bg-[#009EE3]' : product.badge === 'Nuevo' ? 'bg-green-500' : 'bg-[#0066CC]'
                    }`}>
                    {product.badge}
                </div>
            )}

            {!product.inStock && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Agotado
                </div>
            )}

            <div className="p-6">
                <div className="mb-6 relative">
                    <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-48 object-cover rounded-lg ${!product.inStock ? 'opacity-60' : ''}`}
                        loading="lazy"
                    />
                    {product.popular && (
                        <div className="absolute top-2 left-2 bg-yellow-400 p-1 rounded-full">
                            <Star className="h-4 w-4 text-yellow-800 fill-current" />
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-[#333333]">{product.name}</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {product.category}
                        </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                    </p>

                    <div className="flex items-center space-x-2 mb-4">
                        {product.originalPrice && (
                            <span className="text-lg text-gray-400 line-through">
                                ${product.originalPrice.toLocaleString()}
                            </span>
                        )}
                        <span className="text-2xl font-bold text-[#009EE3]">
                            ${product.price.toLocaleString()}
                        </span>
                        <span className="text-gray-500 text-sm">MXN</span>
                        {product.originalPrice && (
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                            </span>
                        )}
                    </div>
                </div>

                <div className="mb-6">
                    <h4 className="font-semibold text-[#333333] mb-2 text-sm">Características principales:</h4>
                    <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2">
                                <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-xs">{feature}</span>
                            </li>
                        ))}
                        {product.features.length > 3 && (
                            <li className="text-[#009EE3] text-xs font-medium">
                                +{product.features.length - 3} características más
                            </li>
                        )}
                    </ul>
                </div>

                <div className="space-y-3">
                    <button
                        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${product.inStock
                                ? 'bg-[#009EE3] text-white hover:bg-[#0066CC] transform hover:scale-105'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        disabled={!product.inStock}
                    >
                        <ShoppingCart className="h-5 w-5" />
                        <span>{product.inStock ? 'Solicitar Información' : 'No Disponible'}</span>
                    </button>

                    <Link
                        to={`/productos/${product.id}`}
                        className="w-full py-3 px-4 border border-[#009EE3] text-[#009EE3] rounded-lg font-semibold hover:bg-[#009EE3] hover:text-white transition-all duration-200 block text-center"
                    >
                        Ver Detalles Completos
                    </Link>
                </div>
            </div>
        </div>
    );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;