import Navbar from "../components/Navbar"
import Subgrid from "../components/Grid"

const Welcome = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
     <Navbar/>

      {/* Hero Section - La Ranchera Market */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1615937662601-4724eceda00f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 bg-black/60 py-4 rounded-2xl">
          <h1 className="font-stardom text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-wider">
            <span className="">LA RANCHERA</span> <br />
            <span className="">MARKET</span>
          </h1>
          <p className="text-accent-content text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed px-4">
            Authentic Mexican Market & Restaurant
          </p>
          <div className="mt-8 sm:mt-12">
            <button className="border border-white px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm tracking-wider hover:bg-white hover:text-black transition-colors">
              EXPLORE
            </button>
          </div>
        </div>
      </section>

      {/* Meat Selection Hero Section */}
      <section className="min-h-screen relative">
        <Subgrid/>
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
        
        <div className="relative z-10 h-full flex items-center py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
                AUTHENTIC
                <span className="block text-yellow-400">RESTAURANT</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
                Experience the true flavors of Mexico in our traditional restaurant. From fresh tortillas made daily to slow-cooked specialties passed down through generations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌮</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">TACOS</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Fresh handmade tortillas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🍲</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">POZOLE</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Traditional Mexican soup</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🫔</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">TAMALES</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Homestyle comfort food</p>
                </div>
              </div>
              
              <button className="border border-yellow-400 text-yellow-400 px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm tracking-wider hover:bg-yellow-400 hover:text-black transition-colors">
                RESERVATION →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              <span className="text-red-500">LATEST</span>
              <span className="block text-white">ANNOUNCEMENTS</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Stay updated with our latest offerings, events, and special promotions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Announcement 1 */}
            <div className="bg-black/50 border border-gray-700 p-6 sm:p-8 backdrop-blur-sm">
              <div className="text-red-500 text-xs sm:text-sm tracking-wider mb-3 sm:mb-4">NEW ARRIVAL</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Fresh Seafood Fridays</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Every Friday, we bring you the freshest catch from the Gulf. Premium shrimp, fish, and more.
              </p>
              <div className="text-xs sm:text-sm text-gray-500">December 2024</div>
            </div>
            
            {/* Announcement 2 */}
            <div className="bg-black/50 border border-gray-700 p-6 sm:p-8 backdrop-blur-sm">
              <div className="text-yellow-400 text-xs sm:text-sm tracking-wider mb-3 sm:mb-4">SPECIAL EVENT</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Holiday Catering</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Book your holiday parties with us. Traditional Mexican dishes for your special celebrations.
              </p>
              <div className="text-xs sm:text-sm text-gray-500">December 2024</div>
            </div>
            
            {/* Announcement 3 */}
            <div className="bg-black/50 border border-gray-700 p-6 sm:p-8 backdrop-blur-sm lg:col-span-1 md:col-span-2 lg:col-span-1">
              <div className="text-green-500 text-xs sm:text-sm tracking-wider mb-3 sm:mb-4">GRAND OPENING</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Extended Hours</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                We're now open until 10 PM to serve you better. More time to enjoy authentic Mexican cuisine.
              </p>
              <div className="text-xs sm:text-sm text-gray-500">December 2024</div>
            </div>
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <button className="border border-white px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm tracking-wider hover:bg-white hover:text-black transition-colors">
              VIEW ALL ANNOUNCEMENTS →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">LA RANCHERA MARKET</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Your authentic Mexican market and restaurant experience in the heart of the community.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">CONTACT</h4>
              <div className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <p>📍 123 Market Street</p>
                <p>📞 (555) 123-4567</p>
                <p>🕒 Mon-Sun: 8AM-10PM</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">FOLLOW US</h4>
              <div className="flex space-x-3 sm:space-x-4 justify-center md:justify-start">
                <button className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs sm:text-sm">
                  f
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs sm:text-sm">
                  ig
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs sm:text-sm">
                  tw
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
            © 2024 La Ranchera Market. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Welcome 