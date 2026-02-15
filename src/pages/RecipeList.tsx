import { useState } from 'react';
import { Link } from 'react-router';
import { Clock, Users, ChefHat, Search } from 'lucide-react';
import { ImageWithFallback } from '../helper/ImageWithdFallback'
import {recipes, categories} from '../data/recipes'

export function RecipeList() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'Semua' || recipe.category === selectedCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#F97316] to-orange-500 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <ChefHat className="w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-bold">Resep Masakan</h1>
          </div>
          <p className="text-orange-100 text-lg max-w-2xl">
            Temukan berbagai resep masakan lezat untuk keluarga atau usaha Anda
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari resep..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F97316] focus:border-transparent outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-3 min-w-max pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#F97316] text-white shadow-lg'
                    : 'bg-white text-[#1F2937] hover:bg-orange-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-6">
          Menampilkan {filteredRecipes.length} resep
        </p>

        {/* Recipe Grid */}
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl">
            <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Tidak ada resep ditemukan</h3>
            <p className="text-gray-500">Coba kata kunci atau kategori lain</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredRecipes.map(recipe => (
              <Link
                key={recipe.id}
                to={`/recipes/${recipe.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group border border-gray-100"
              >
                {/* Recipe Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <ImageWithFallback
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      recipe.difficulty === 'Mudah' 
                        ? 'bg-[#22C55E] text-white'
                        : recipe.difficulty === 'Sedang'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}>
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>

                {/* Recipe Info */}
                <div className="p-5">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-[#F97316] uppercase tracking-wide">
                      {recipe.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2937] mb-2 group-hover:text-[#F97316] transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {recipe.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.cookingTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings} porsi</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}