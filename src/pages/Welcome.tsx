const Welcome = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-white tracking-wider">
                LA RANCHERA
              </div>
            </div>
            
            {/* Menu Button */}
            <button className="border border-gray-600 px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition-colors">
              MENU
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - La Ranchera Market */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-wider">
            <span className="block text-red-500">LA RANCHERA</span>
            <span className="block text-yellow-400 text-5xl md:text-6xl lg:text-7xl mt-4">MARKET</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Authentic Mexican Market & Restaurant
          </p>
          <div className="mt-12">
            <button className="border border-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-colors">
              EXPLORE
            </button>
          </div>
        </div>
      </section>

      {/* Meat Selection Hero Section */}
      <section className="min-h-screen relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1588347818431-5a57b5cd7b0a?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  PREMIUM
                  <span className="block text-red-500">MEAT</span>
                  <span className="block text-yellow-400">SELECTION</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Hand-selected cuts of the finest quality meats, seasoned with traditional Mexican spices and prepared with generations of expertise.
                </p>
                <button className="border border-red-500 text-red-500 px-8 py-3 text-sm tracking-wider hover:bg-red-500 hover:text-white transition-colors">
                  VIEW SELECTION →
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/70 p-6 backdrop-blur-sm border border-gray-700">
                  <div className="text-3xl mb-4">🥩</div>
                  <h3 className="text-xl font-bold mb-2">CARNE ASADA</h3>
                  <p className="text-gray-400 text-sm">Premium marinated beef</p>
                </div>
                <div className="bg-black/70 p-6 backdrop-blur-sm border border-gray-700 mt-8">
                  <div className="text-3xl mb-4">🌶️</div>
                  <h3 className="text-xl font-bold mb-2">CHORIZO</h3>
                  <p className="text-gray-400 text-sm">Spiced Mexican sausage</p>
                </div>
                <div className="bg-black/70 p-6 backdrop-blur-sm border border-gray-700">
                  <div className="text-3xl mb-4">🐷</div>
                  <h3 className="text-xl font-bold mb-2">CARNITAS</h3>
                  <p className="text-gray-400 text-sm">Slow-cooked pork</p>
                </div>
                <div className="bg-black/70 p-6 backdrop-blur-sm border border-gray-700 mt-8">
                  <div className="text-3xl mb-4">🐔</div>
                  <h3 className="text-xl font-bold mb-2">POLLO</h3>
                  <p className="text-gray-400 text-sm">Seasoned chicken</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="min-h-screen relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                AUTHENTIC
                <span className="block text-yellow-400">RESTAURANT</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                Experience the true flavors of Mexico in our traditional restaurant. From fresh tortillas made daily to slow-cooked specialties passed down through generations.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌮</div>
                  <h3 className="text-2xl font-bold mb-2">TACOS</h3>
                  <p className="text-gray-400">Fresh handmade tortillas</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍲</div>
                  <h3 className="text-2xl font-bold mb-2">POZOLE</h3>
                  <p className="text-gray-400">Traditional Mexican soup</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🫔</div>
                  <h3 className="text-2xl font-bold mb-2">TAMALES</h3>
                  <p className="text-gray-400">Homestyle comfort food</p>
                </div>
              </div>
              
              <button className="border border-yellow-400 text-yellow-400 px-8 py-3 text-sm tracking-wider hover:bg-yellow-400 hover:text-black transition-colors">
                RESERVATION →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-red-500">LATEST</span>
              <span className="block text-white">ANNOUNCEMENTS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay updated with our latest offerings, events, and special promotions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Announcement 1 */}
            <div className="bg-black/50 border border-gray-700 p-8 backdrop-blur-sm">
              <div className="text-red-500 text-sm tracking-wider mb-4">NEW ARRIVAL</div>
              <h3 className="text-2xl font-bold mb-4">Fresh Seafood Fridays</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Every Friday, we bring you the freshest catch from the Gulf. Premium shrimp, fish, and more.
              </p>
              <div className="text-sm text-gray-500">December 2024</div>
            </div>
            
            {/* Announcement 2 */}
            <div className="bg-black/50 border border-gray-700 p-8 backdrop-blur-sm">
              <div className="text-yellow-400 text-sm tracking-wider mb-4">SPECIAL EVENT</div>
              <h3 className="text-2xl font-bold mb-4">Holiday Catering</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Book your holiday parties with us. Traditional Mexican dishes for your special celebrations.
              </p>
              <div className="text-sm text-gray-500">December 2024</div>
            </div>
            
            {/* Announcement 3 */}
            <div className="bg-black/50 border border-gray-700 p-8 backdrop-blur-sm">
              <div className="text-green-500 text-sm tracking-wider mb-4">GRAND OPENING</div>
              <h3 className="text-2xl font-bold mb-4">Extended Hours</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We're now open until 10 PM to serve you better. More time to enjoy authentic Mexican cuisine.
              </p>
              <div className="text-sm text-gray-500">December 2024</div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button className="border border-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-colors">
              VIEW ALL ANNOUNCEMENTS →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">LA RANCHERA MARKET</h3>
              <p className="text-gray-400 leading-relaxed">
                Your authentic Mexican market and restaurant experience in the heart of the community.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">CONTACT</h4>
              <div className="space-y-2 text-gray-400">
                <p>📍 123 Market Street</p>
                <p>📞 (555) 123-4567</p>
                <p>🕒 Mon-Sun: 8AM-10PM</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">FOLLOW US</h4>
              <div className="flex space-x-4">
                <button className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  f
                </button>
                <button className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  ig
                </button>
                <button className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  tw
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2024 La Ranchera Market. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Welcome 