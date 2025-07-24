import React from 'react';
import Slideshow from '../components/Slideshow';

const SlideshowPage = () => {
  // Sample images - you can replace these with your own images
  const sampleImages = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop&crop=center'
  ];

  // Food-themed images more relevant to your business
  const businessImages = [
    'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&crop=center', // Meat cuts
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&crop=center', // Food preparation
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&crop=center', // Pizza
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&h=600&fit=crop&crop=center', // Burger
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&crop=center', // Pancakes
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&crop=center'  // Tacos
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🥩 La Ranchera Market Gallery
          </h1>
          <p className="text-xl text-yellow-200 max-w-2xl mx-auto mb-8">
            Explore our delicious offerings and authentic Mexican cuisine
          </p>
        </div>

        {/* Main Slideshow */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Featured Dishes & Specialties
          </h2>
          <Slideshow 
            images={businessImages}
            defaultInterval={4000}
            showProgressBar={true}
            showThumbnails={false}
            autoPlay={true}
          />
        </div>

        {/* Secondary Slideshow with Thumbnails */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            More Delicious Options
          </h2>
          <Slideshow 
            images={sampleImages}
            defaultInterval={3000}
            showProgressBar={true}
            showThumbnails={true}
            autoPlay={false}
          />
        </div>

        {/* Instructions */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">How to Use the Slideshow</h3>
          <div className="grid md:grid-cols-2 gap-6 text-white">
            <div>
              <h4 className="font-semibold mb-2">🖱️ Mouse Controls</h4>
              <ul className="space-y-1 text-sm">
                <li>• Click arrow buttons to navigate</li>
                <li>• Click play/pause button to control autoplay</li>
                <li>• Adjust speed slider to change timing</li>
                <li>• Click fullscreen button for immersive view</li>
                <li>• Click dots or thumbnails to jump to specific slides</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">⌨️ Keyboard Shortcuts</h4>
              <ul className="space-y-1 text-sm">
                <li>• ← → Arrow keys to navigate</li>
                <li>• Spacebar to play/pause</li>
                <li>• F key to toggle fullscreen</li>
                <li>• Escape to exit fullscreen</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">✨ Slideshow Features</h3>
          <div className="grid md:grid-cols-3 gap-4 text-white text-sm">
            <div>
              <h4 className="font-semibold mb-2">🎮 Interactive Controls</h4>
              <ul className="space-y-1">
                <li>• Auto-play with customizable timing</li>
                <li>• Manual navigation controls</li>
                <li>• Progress bar animation</li>
                <li>• Keyboard shortcuts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🖼️ Visual Features</h4>
              <ul className="space-y-1">
                <li>• Smooth fade transitions</li>
                <li>• Fullscreen mode support</li>
                <li>• Responsive design</li>
                <li>• Thumbnail navigation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">♿ Accessibility</h4>
              <ul className="space-y-1">
                <li>• ARIA labels for screen readers</li>
                <li>• Focus indicators</li>
                <li>• High contrast support</li>
                <li>• Reduced motion support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <a 
            href="/" 
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-red-800 font-bold py-3 px-6 rounded-lg text-lg transition-colors shadow-lg"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlideshowPage;