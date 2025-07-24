const Welcome = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-800">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            {/* Logo Circle */}
            <div className="w-32 h-32 mx-auto mb-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">LR</span>
              </div>
            </div>
            
            {/* Business Name */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              La Ranchera Market
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              New Latino Market & Restaurant
            </p>
            
            <p className="text-lg text-green-200 max-w-2xl mx-auto">
              Quality seasoned meats, fresh produce, groceries & top quality meats
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Business Info Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            {/* About */}
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Supermarket</h3>
              <p className="text-gray-600 leading-relaxed">
                Full-service Latino market offering fresh produce, quality meats, and authentic groceries
              </p>
            </div>

            {/* Quality */}
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-red-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Top Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium seasoned meats and fresh ingredients sourced for authentic flavors
              </p>
            </div>

            {/* Community */}
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-yellow-500 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Highly recommended with 94% customer satisfaction and 25 reviews
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a 
              href="/announcement" 
              className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Our Specials
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-center py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-4">La Ranchera Market</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your trusted source for authentic Latino groceries, fresh produce, and premium quality meats
          </p>
        </div>
      </div>
    </div>
  )
}

export default Welcome 