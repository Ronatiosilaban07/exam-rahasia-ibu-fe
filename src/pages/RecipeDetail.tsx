import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, Clock, Users, ChefHat, Lightbulb, Play } from 'lucide-react';
import { ImageWithFallback } from '../helper/ImageWithdFallback'
import {recipes} from '../data/recipes'

export function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Resep tidak ditemukan</h2>
          <p className="text-gray-600 mb-6">Resep yang Anda cari tidak tersedia</p>
          <Link
            to="/recipes"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Resep
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      {/* Header Image */}
      <div className="relative h-64 md:h-96 bg-gray-900">
        <ImageWithFallback
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/recipes')}
          className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white rounded-lg transition-colors text-[#1F2937] font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Kembali</span>
        </button>

        {/* Recipe Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 bg-[#F97316] rounded-full text-sm font-semibold mb-3">
              {recipe.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{recipe.title}</h1>
            <p className="text-lg text-gray-200">{recipe.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Recipe Info Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FFF7ED] rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#F97316]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Waktu Memasak</p>
                <p className="font-bold text-[#1F2937]">{recipe.cookingTime}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FFF7ED] rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-[#F97316]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Porsi</p>
                <p className="font-bold text-[#1F2937]">{recipe.servings} porsi</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FFF7ED] rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-[#F97316]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tingkat Kesulitan</p>
                <p className="font-bold text-[#1F2937]">{recipe.difficulty}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Ingredients and Tips */}
          <div className="lg:col-span-1 space-y-6">
            {/* Ingredients */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Bahan-Bahan</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            {recipe.tips.length > 0 && (
              <div className="bg-green-50 border-2 border-[#22C55E] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-6 h-6 text-[#22C55E]" />
                  <h2 className="text-xl font-bold text-[#1F2937]">Tips</h2>
                </div>
                <ul className="space-y-3">
                  {recipe.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#22C55E] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column - Steps and Video */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Tutorial */}
            {recipe.videoUrl && (
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Play className="w-6 h-6 text-[#F97316]" />
                  <h2 className="text-2xl font-bold text-[#1F2937]">Video Tutorial</h2>
                </div>
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    src={recipe.videoUrl}
                    title={`Video tutorial ${recipe.title}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Cooking Steps */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Cara Memasak</h2>
              <div className="space-y-6">
                {recipe.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#F97316] text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Message */}
            <div className="bg-green-50 border-2 border-[#22C55E] rounded-xl p-6">
              <p className="text-center text-gray-700">
                <span className="font-bold text-[#22C55E]">Selamat memasak!</span> Jangan lupa bagikan hasil masakan Anda dengan sesama anggota PKK 👩‍🍳
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}