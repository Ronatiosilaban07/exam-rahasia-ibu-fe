import { Link } from 'react-router';
import { ChefHat, BookOpen, Video, Users } from 'lucide-react';
import { ImageWithFallback } from '../helper/ImageWithdFallback'

export function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7ED] to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Simple Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/30 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-white">
                <ChefHat className="w-8 h-8" />
                <span className="font-bold text-xl">RahasiaBunda</span>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-[#F97316] text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Image and Content */}
        <div className="relative h-[500px] md:h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-[1]" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761772593493-23a630a333b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwd29tYW4lMjBjb29raW5nJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NzEwNTc4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Ibu memasak"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center z-[2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  RahasiaBunda
                </h1>
                <p className="text-xl md:text-2xl mb-2">
                  Platform Belajar Memasak untuk Ibu PKK
                </p>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  Ribuan resep masakan lengkap dengan tutorial video untuk memasak di rumah atau untuk dijual
                </p>
                <Link
                  to="/register"
                  className="inline-block px-8 py-4 bg-[#F97316] text-white rounded-lg hover:bg-orange-600 transition-colors text-lg font-semibold"
                >
                  Mulai Belajar Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1F2937]">
          Mengapa RahasiaBunda?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Platform khusus dirancang untuk mendukung ibu-ibu PKK dalam mengembangkan keterampilan memasak
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-[#FFF7ED] rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-[#F97316]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1F2937]">Resep Lengkap</h3>
            <p className="text-gray-600">
              Ratusan resep masakan dengan panduan langkah demi langkah yang mudah diikuti
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-[#FFF7ED] rounded-full flex items-center justify-center mb-6">
              <Video className="w-7 h-7 text-[#F97316]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1F2937]">Tutorial Video</h3>
            <p className="text-gray-600">
              Belajar lebih mudah dengan video tutorial memasak yang jelas dan detail
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-[#FFF7ED] rounded-full flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-[#F97316]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1F2937]">Komunitas PKK</h3>
            <p className="text-gray-600">
              Bergabung dengan komunitas ibu-ibu PKK yang saling berbagi pengalaman
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#F97316] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Mulai Belajar?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Daftar sekarang dan akses semua resep dan tutorial masakan kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="px-8 py-4 bg-white text-[#F97316] rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Daftar Gratis
            </Link>
            <Link
              to="/login"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              Sudah Punya Akun?
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="w-6 h-6" />
            <span className="font-bold text-lg">RahasiaBunda</span>
          </div>
          <p className="text-sm">
            Platform Belajar Memasak untuk Ibu-Ibu PKK
          </p>
          <p className="text-sm mt-2 text-gray-400">
            © 2026 RahasiaBunda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}