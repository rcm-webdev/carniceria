const Navbar = () => {
    return (
        <nav className=" fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wider">
                LA RANCHERA
              </div>
            </div>
            
            {/* Menu Button */}
            <button className="border border-gray-600 px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-wider hover:bg-white hover:text-black transition-colors">
              MENU
            </button>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;