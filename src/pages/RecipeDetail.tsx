import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";

import {
  ArrowLeft,
} from "lucide-react";

import { ImageWithFallback } from "../helper/ImageWithdFallback";

import { getDetailRecipes } from "../config/action";

export function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchDetail = async () => {
    try {
      const resp = await getDetailRecipes(id!);

      setRecipe(resp);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Tidak ditemukan
      </div>
    );
  }

  // convert youtube watch → embed
  const getEmbedUrl = (url: string) => {
    if (!url) return "";

    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }

    return url;
  };

  console.log('recipe', recipe);
  
  return (
    <div className="min-h-screen bg-[#FFF7ED]">

      {/* IMAGE HEADER */}
      <div className="relative h-64 md:h-96">

        <ImageWithFallback
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />

        <button
          onClick={() => navigate("/recipes")}
          className="absolute top-4 left-4 bg-white px-4 py-2 rounded"
        >
          <ArrowLeft />
        </button>

        <div className="absolute bottom-0 text-white p-6">

          <h1 className="text-4xl font-bold">
            {recipe.title}
          </h1>

          <p>
            {recipe.description}
          </p>

        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-6">

        {/* INGREDIENTS */}
        <div className="bg-white p-6 rounded-xl">

          <h2 className="text-2xl font-bold mb-4">
            Bahan
          </h2>

          {recipe.ingredients?.map(
            (item: string, index: number) => (
              <p key={index}>{item}</p>
            )
          )}

        </div>

        {/* STEPS + VIDEO */}
        <div className="lg:col-span-2 space-y-6">

          {/* VIDEO */}
          {recipe.videoUrl && (
            <div className="bg-white p-6 rounded-xl">

              <h2 className="text-2xl font-bold mb-4">
                Video Tutorial
              </h2>

              <iframe
                src={getEmbedUrl(recipe.videoUrl)}
                className="w-full h-96"
                allowFullScreen
              />

            </div>
          )}

          {/* STEPS */}
          <div className="bg-white p-6 rounded-xl">

            <h2 className="text-2xl font-bold mb-4">
              Cara Memasak
            </h2>

            {recipe.steps?.map(
              (step: string, index: number) => (
                <div key={index} className="mb-3">

                  <b>{index + 1}.</b> {step}

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
