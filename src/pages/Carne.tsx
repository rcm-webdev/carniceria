const Carne = () => {
  return (
    <div className="min-h-screen bg-primary p-4 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
          <div className="relative w-full md:w-1/2">
            <img 
              className="w-full h-full rounded-3xl" 
              src="https://images.unsplash.com/photo-1615937662601-4724eceda00f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Carne" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary opacity-80 rounded-3xl z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-base-200 rounded-tl-3xl opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-neutral rounded-br-3xl opacity-60"></div>
          </div>
          
          <div className="w-full md:w-1/2 text-primary-content">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              <span className="block transform transition-transform hover:scale-[1.02]">La Ranchera</span>
              <span className="block transform transition-transform hover:scale-[1.02] font-light">Carniceria y Mas</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carne;