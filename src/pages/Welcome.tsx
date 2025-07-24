const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 to-red-800">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          {/* Business Logo/Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-4xl">🥩</span>
            </div>
          </div>
          
          {/* Business Name */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            La Ranchera Market
          </h1>
          
          {/* Tagline */}
          <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
            Authentic Mexican Meat Shop & Restaurant
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Contact Information */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Phone</h3>
                  <a href="tel:+1234567890" className="text-red-600 hover:text-red-700 text-lg">
                    (123) 456-7890
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700">Address</h3>
                  <p className="text-gray-600">
                    123 Market Street<br />
                    Nampa, ID 83686
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Hours</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Thursday</span>
                  <span className="text-gray-600">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Friday</span>
                  <span className="text-gray-600">8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="text-gray-600">7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="text-gray-600">7:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/slideshow" 
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-red-800 font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
              >
                🖼️ View Gallery
              </a>
              <a 
                href="/announcement" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
              >
                📢 Current Specials
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-red-900 text-center py-8">
        <p className="text-yellow-200">
          🥩 Fresh Quality Meats • 🌮 Traditional Flavors • 🏆 20+ Years Experience
        </p>
      </div>
    </div>
  )
}

export default Welcome 