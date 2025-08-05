

const Grid = () => {
  return (
    <div className="min-h-screen bg-base-200 p-4">
      
      {/* Masonry Bento Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        
        {/* Large Signature Experience Card */}
        <div className="card bg-base-100 text-base-content shadow-xl break-inside-avoid mb-4">
          <figure>
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop" 
              alt="Fine dining experience" 
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">SIGNATURE EXPERIENCE</h2>
            <p>Where culinary craftsmanship meets modern elegance. Indulge in the finest cuisine, expertly curated to elevate your dining experience.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Experience</button>
            </div>
          </div>
        </div>

        {/* Michelin Guide Rating */}
        <div className="card bg-neutral text-neutral-content shadow-xl break-inside-avoid mb-4">
          <div className="card-body items-center text-center">
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-warning" />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-warning" />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-warning" />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-warning" />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-warning" />
            </div>
            <h2 className="card-title">MICHELIN GUIDE</h2>
            <p className="text-sm opacity-75">QUALITY FOOD</p>
          </div>
        </div>

        {/* Chef Card */}
        <div className="card bg-base-100 text-base-content shadow-xl break-inside-avoid mb-4">
          <figure>
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=300&fit=crop" 
              alt="Master Chef" 
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">MASTER CHEF</h2>
            <p>Artisan Excellence</p>
            <div className="badge badge-secondary">Award Winner</div>
          </div>
        </div>

        {/* Trip Advisor Rating */}
        <div className="card bg-primary text-primary-content shadow-xl break-inside-avoid mb-4">
          <div className="card-body items-center text-center">
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
            </div>
            <h2 className="card-title">TRIP ADVISOR</h2>
            <p className="text-sm opacity-75">BEST CUISINE</p>
          </div>
        </div>

        {/* Today's Specials */}
        <div className="card bg-base-100 text-base-content shadow-xl break-inside-avoid mb-4">
          <div className="card-body">
            <h2 className="card-title">TODAY'S SPECIALS</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=100&h=100&fit=crop" alt="Truffle Risotto" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Truffle Risotto</div>
                  <div className="text-sm opacity-50">$32</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=100&h=100&fit=crop" alt="Wagyu Steak" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Wagyu Steak</div>
                  <div className="text-sm opacity-50">$65</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop" alt="Sea Bass" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Sea Bass</div>
                  <div className="text-sm opacity-50">$28</div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">View Menu</button>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="card bg-accent text-accent-content shadow-xl break-inside-avoid mb-4">
          <div className="card-body">
            <h2 className="card-title">OUR STORY</h2>
            <p>Founded with a passion for culinary excellence, our journey began in the heart of the city. Over years, it evolved into a haven for food enthusiasts.</p>
            <p className="text-sm opacity-75">Every dish tells a story of tradition meeting innovation, where locally sourced ingredients are transformed into unforgettable experiences.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent-content">Learn More</button>
            </div>
          </div>
        </div>

        {/* Zagat Rating */}
        <div className="card bg-secondary text-secondary-content shadow-xl break-inside-avoid mb-4">
          <div className="card-body items-center text-center">
            <div className="rating">
              <input type="radio" name="rating-3" className="mask mask-star-2 bg-warning" />
              <input type="radio" name="rating-3" className="mask mask-star-2 bg-warning" />
              <input type="radio" name="rating-3" className="mask mask-star-2 bg-warning" />
              <input type="radio" name="rating-3" className="mask mask-star-2 bg-warning" />
              <input type="radio" name="rating-3" className="mask mask-star-2 bg-warning" />
            </div>
            <h2 className="card-title">ZAGAT RATED</h2>
            <p className="text-sm opacity-75">OUTSTANDING</p>
          </div>
        </div>

        {/* Ambiance */}
        <div className="card bg-base-100 text-base-content shadow-xl break-inside-avoid mb-4">
          <figure>
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=250&fit=crop" 
              alt="Restaurant Ambiance" 
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">AMBIANCE</h2>
            <p>Elegant & Intimate</p>
            <div className="badge badge-ghost">Premium Setting</div>
          </div>
        </div>

        {/* Wine Selection */}
        <div className="card bg-base-100 text-base-content shadow-xl break-inside-avoid mb-4">
          <figure>
            <img 
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=250&fit=crop" 
              alt="Wine Cellar" 
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">WINE CELLAR</h2>
            <p>Curated Selection</p>
            <div className="badge badge-accent">500+ Wines</div>
          </div>
        </div>

        {/* Reservations CTA */}
        <div className="card bg-info text-info-content shadow-xl break-inside-avoid mb-4">
          <div className="card-body items-center text-center">
            <h2 className="card-title">RESERVE YOUR TABLE</h2>
            <p>Experience culinary artistry at its finest</p>
            <div className="card-actions">
              <button className="btn btn-info-content">Book Now</button>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="card bg-warning text-warning-content shadow-xl break-inside-avoid mb-4">
          <div className="card-body">
            <h2 className="card-title">AWARDS</h2>
            <div className="space-y-2">
              <div className="badge badge-warning-content w-full">Best Fine Dining 2024</div>
              <div className="badge badge-warning-content w-full">Chef's Choice Award</div>
              <div className="badge badge-warning-content w-full">Excellence in Service</div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="card bg-base-100 text-base-content shadow-xl break-inside-avoid mb-4">
          <div className="card-body">
            <h2 className="card-title">LOCATION</h2>
            <p>Heart of the culinary district</p>
            <p className="text-sm opacity-50">123 Gourmet Street</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-sm">Directions</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Grid;