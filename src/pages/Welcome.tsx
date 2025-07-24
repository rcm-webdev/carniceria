const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">Zaisop</span>
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Services</a>
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Pages</a>
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Blog</a>
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Contact</a>
            </div>
            
            {/* Buy Template Button */}
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Buy Template
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="text-red-600 font-medium text-sm">BUTCHER & MEAT SHOP</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Unrivaled <span className="text-red-600">Cutting</span><br />
                Quality From Zaisop<br />
                Butcher <span className="text-red-600">Meat Shop</span>
              </h1>
              
              <p className="text-gray-600 text-lg max-w-lg">
                Welcome to Zaisop where passion meets precision in every cut as your local 
                Butcher Meat Shop takes pride in delivering curated selection finest meats
              </p>
              
              <div className="flex gap-4">
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Get Started →
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  View Products →
                </button>
              </div>
            </div>
            
            {/* Right Content - Butcher Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 bg-white text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  Safety First
                </div>
                
                {/* Butcher illustration placeholder */}
                <div className="flex justify-center items-center h-96">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-6xl">👨‍🍳</span>
                    </div>
                    <div className="space-y-2">
                      <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                        Hygienic Touch
                      </div>
                      <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm ml-2">
                        Fresh Quality Meat
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Friday Special */}
            <div className="bg-teal-600 text-white rounded-2xl p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">FRIDAY SPECIAL</h3>
                <h2 className="text-2xl font-bold mb-4">Fresh Meat</h2>
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🥩</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded text-sm font-bold">
                  50% OFF
                </div>
              </div>
            </div>
            
            {/* Daily Special */}
            <div className="bg-red-600 text-white rounded-2xl p-6">
              <h3 className="text-sm font-medium mb-2">DAILY SPECIAL</h3>
              <h2 className="text-xl font-bold mb-4">Minched Meat</h2>
              <div className="w-full h-24 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-3xl">🍖</span>
              </div>
              <button className="bg-white text-red-600 px-4 py-2 rounded-lg text-sm font-medium">
                Order Now
              </button>
            </div>
            
            {/* Veal Rump Special */}
            <div className="bg-red-700 text-white rounded-2xl p-6">
              <h3 className="text-sm font-medium mb-2">SPECIAL</h3>
              <h2 className="text-xl font-bold mb-4">Veal Rump</h2>
              <div className="w-full h-24 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-3xl">🥩</span>
              </div>
              <button className="bg-white text-red-700 px-4 py-2 rounded-lg text-sm font-medium">
                Order Now
              </button>
            </div>
            
            {/* Limited Time Offer */}
            <div className="bg-teal-700 text-white rounded-2xl p-6">
              <h3 className="text-sm font-medium mb-2">FOR LIMITED TIME ONLY</h3>
              <h2 className="text-2xl font-bold mb-4">35% Offer</h2>
              <div className="w-full h-16 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🍗</span>
              </div>
              <button className="bg-white text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-medium mb-2">WHAT WE DO</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zaisop Produced The<br />
              Best Selected Meats
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Product List */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🥩</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Veal Entrecote</h3>
                    <p className="text-gray-600">Premium cut veal with exceptional marbling</p>
                  </div>
                  <button className="ml-auto text-red-600 hover:text-red-700">
                    →
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🍖</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Pork Tenderloin</h3>
                    <p className="text-gray-600">Tender and juicy pork cuts</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🥩</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Beef Ribs</h3>
                    <p className="text-gray-600">Slow-cooked perfect beef ribs</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🐟</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Fillet Fish</h3>
                    <p className="text-gray-600">Fresh catch of the day</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Featured Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">🔪</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Premium Cuts</h3>
                  <p className="text-gray-300">Expert butchery with traditional techniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Butcher Shop Today</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Experience the finest quality meats and traditional butchery craftsmanship. 
            We're committed to providing you with the best cuts for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1234567890" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              📞 Call Now: (123) 456-7890
            </a>
            <a 
              href="/slideshow" 
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors"
            >
              🎥 View Our Gallery
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Welcome 