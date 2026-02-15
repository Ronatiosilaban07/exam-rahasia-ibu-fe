import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Clock, Users, ChefHat, Search } from "lucide-react";
import { ImageWithFallback } from "../helper/ImageWithdFallback";
import { getRecipes } from "../config/action";

export function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (search = "") => {
    try {
      setLoading(true);

      const resp = await getRecipes(search);

      if (resp.success) {
        setRecipes(resp.data);
      }
    } catch (error) {
      console.log("err", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("");
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchRecipes(searchQuery);
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#FFF7ED]">

      {/* Header */}
      <div className="bg-gradient-to-r from-[#F97316] to-orange-500 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <ChefHat className="w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Resep Masakan
            </h1>
          </div>

          <p className="text-orange-100 text-lg max-w-2xl">
            Temukan berbagai resep masakan lezat
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-xl">

            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

            <input
              type="text"
              placeholder="Cari resep..."
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              className="w-full pl-12 pr-4 py-3 bg-white border rounded-xl"
            />

          </div>
        </div>

        {/* Count */}
        <p className="text-gray-600 mb-6">
          Menampilkan {recipes.length} resep
        </p>

        {/* Loading */}
        {loading && (
          <div className="text-center py-10">
            Loading...
          </div>
        )}

        {/* Empty */}
        {!loading && recipes.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl">
            Tidak ada resep
          </div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {recipes.map((recipe: any) => (

            <Link
              key={recipe._id}
              to={`/recipes/${recipe._id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >

              <div className="h-48">

                <ImageWithFallback
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="p-4">

                <h3 className="font-bold text-lg mb-2">
                  {recipe.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {recipe.description}
                </p>

                <div className="flex gap-4 text-sm text-gray-500">

                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>30 menit</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>2 porsi</span>
                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </div>
  );
}
