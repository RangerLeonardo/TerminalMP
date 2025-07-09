import React, { useState, useMemo } from 'react';
import { Search, ArrowLeft, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

type SortOption = 'name' | 'price-low' | 'price-high' | 'popular';

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = ['all', ...new Set(products.map(p => p.category))];
    return cats;
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'popular':
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return b.price - a.price; // Secondary sort by price
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, sortBy, selectedCategory]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortBy('popular');
  };

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
          <span className="text-[#333333] font-medium">Productos</span>
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-2">
              Todos los Productos
            </h1>
            <p className="text-gray-600">
              Encuentra la terminal perfecta para tu negocio entre nuestros {products.length} productos disponibles
            </p>
          </div>
          
          <Link
            to="/"
            className="mt-4 lg:mt-0 inline-flex items-center space-x-2 text-[#009EE3] hover:text-[#0066CC] transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Volver al inicio</span>
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009EE3] focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009EE3] focus:border-transparent transition-all duration-200"
              >
                <option value="all">Todas las categorías</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="lg:w-64">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009EE3] focus:border-transparent transition-all duration-200"
              >
                <option value="popular">Más populares</option>
                <option value="name">Nombre A-Z</option>
                <option value="price-low">Precio: menor a mayor</option>
                <option value="price-high">Precio: mayor a menor</option>
              </select>
            </div>
          </div>

          {/* Active filters summary */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600">
              Mostrando {filteredAndSortedProducts.length} de {products.length} productos
            </span>
            {searchTerm && (
              <span className="bg-[#009EE3] text-white px-3 py-1 rounded-full text-sm">
                Búsqueda: "{searchTerm}"
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="bg-[#009EE3] text-white px-3 py-1 rounded-full text-sm">
                Categoría: {selectedCategory}
              </span>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-600 mb-6">
              Intenta ajustar tus filtros de búsqueda para encontrar lo que buscas
            </p>
            <button
              onClick={handleClearFilters}
              className="bg-[#009EE3] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0066CC] transition-all duration-200"
            >
              Limpiar Filtros
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;