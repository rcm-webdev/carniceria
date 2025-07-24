const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">🐂</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-800">La Ranchera</span>
                <div className="text-sm text-green-600 font-medium">Market</div>
              </div>
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</a>
              <a href="/slideshow" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Gallery</a>
              <a href="/announcement" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Announcements</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</a>
            </div>
            
            {/* CTA Button */}
            <a 
              href="/slideshow"
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-lg"
            >
              View Gallery
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm border border-green-200">
                <span className="text-green-600 font-medium text-sm">NEW LATINO MARKET & RESTAURANT</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to <span className="text-green-600">La Ranchera</span><br />
                <span className="text-red-600">Market</span>
              </h1>
              
              <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
                Nuevo mercado latino/restaurant. Calidad en carnes sazonadas, verduras, abarrotes.
                <br /><br />
                <span className="font-medium text-gray-800">New latino market. Seasoning meats, produce, groceries. Top quality meats</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/slideshow"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-lg text-center"
                >
                  🎥 View Our Gallery →
                </a>
                <a 
                  href="#products"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-medium hover:bg-green-600 hover:text-white transition-colors text-center"
                >
                  🛒 Our Products →
                </a>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">5.1K</div>
                  <div className="text-sm text-gray-500">Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">5.2K</div>
                  <div className="text-sm text-gray-500">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">94%</div>
                  <div className="text-sm text-gray-500">Recommend</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Market Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                  Top Quality
                </div>
                
                {/* Market illustration */}
                <div className="flex justify-center items-center h-96">
                  <div className="text-center">
                    {/* La Ranchera Logo Recreation */}
                    <div className="relative w-48 h-48 mx-auto mb-6">
                      <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                        <div className="text-center">
                          <div className="text-6xl mb-2">🐂</div>
                          <div className="text-green-800 font-bold text-lg">La Ranchera</div>
                          <div className="text-green-700 font-medium text-sm">Market</div>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl">🥩</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                        🌮 Authentic Mexican Cuisine
                      </div>
                      <div className="block">
                        <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium mr-2">
                          🥩 Premium Meats
                        </div>
                        <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                          🥬 Fresh Produce
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Specialties</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From seasoned meats to fresh produce, we bring you the authentic taste of Mexico
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Carnes Sazonadas */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-6 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">ESPECIALIDAD</h3>
                <h2 className="text-2xl font-bold mb-4">Carnes Sazonadas</h2>
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🥩</span>
                </div>
                <p className="text-red-100 text-sm">Seasoned meats prepared with traditional recipes</p>
              </div>
            </div>
            
            {/* Fresh Produce */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-sm font-medium mb-2">FRESH DAILY</h3>
              <h2 className="text-xl font-bold mb-4">Verduras Frescas</h2>
              <div className="w-full h-24 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-3xl">🥬</span>
              </div>
              <p className="text-green-100 text-sm">Fresh vegetables and produce</p>
            </div>
            
            {/* Groceries */}
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-sm font-medium mb-2">ABARROTES</h3>
              <h2 className="text-xl font-bold mb-4">Groceries</h2>
              <div className="w-full h-24 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-3xl">🛒</span>
              </div>
              <p className="text-yellow-100 text-sm">Complete grocery selection</p>
            </div>
            
            {/* Restaurant */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-sm font-medium mb-2">RESTAURANT</h3>
              <h2 className="text-2xl font-bold mb-4">Comida Casera</h2>
              <div className="w-full h-16 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🍽️</span>
              </div>
              <p className="text-orange-100 text-sm">Authentic home-style cooking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-green-600 font-medium mb-2">WHY CHOOSE US</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quality You Can Trust
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Features List */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🥩</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Top Quality Meats</h3>
                    <p className="text-gray-600">Premium cuts and traditional seasoning</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌮</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Authentic Mexican</h3>
                    <p className="text-gray-600">Traditional recipes and flavors</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">94% Recommend</h3>
                    <p className="text-gray-600">Trusted by our community (25 Reviews)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Market & Restaurant</h3>
                    <p className="text-gray-600">Complete shopping and dining experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Featured Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl p-8 h-96 flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-4xl">🏪</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Visit Our Store</h3>
                  <p className="text-gray-300 mb-4">Experience authentic Mexican market culture</p>
                  <a 
                    href="/slideshow"
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    See Our Gallery
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Visit La Ranchera Market Today</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
            Experience authentic Mexican flavors and quality meats. Join our community of 5,000+ satisfied customers 
            who trust us for their daily groceries and special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1234567890" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              📞 Call Us Today
            </a>
            <a 
              href="/slideshow" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
            >
              🎥 View Our Announcements & Gallery
            </a>
          </div>
          
          {/* Social Media Links */}
          <div className="mt-8 pt-8 border-t border-green-500">
            <p className="text-green-200 mb-4">Follow us on social media</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-colors">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-colors">
                <span className="text-xl">🐦</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Welcome 