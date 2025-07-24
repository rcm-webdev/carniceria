import React from 'react';
import Slideshow from './Slideshow';

// Example of how to use the Slideshow component with your own images
const SlideshowExample = () => {
  // Option 1: Using imported images from src/assets/images/
  // Uncomment and modify these imports when you add your own images:
  
  // import image1 from '../assets/images/image1.jpg';
  // import image2 from '../assets/images/image2.jpg';
  // import image3 from '../assets/images/image3.jpg';
  // 
  // const localImages = [image1, image2, image3];

  // Option 2: Using images from the public folder
  const publicImages = [
    '/images/slide1.jpg',
    '/images/slide2.jpg', 
    '/images/slide3.jpg',
    '/images/slide4.jpg'
  ];

  // Option 3: Using external URLs (like Unsplash)
  const externalImages = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Slideshow Examples</h2>
      
      {/* Basic Slideshow */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Basic Slideshow</h3>
        <Slideshow images={externalImages} />
      </div>

      {/* Slideshow with Custom Settings */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Custom Settings</h3>
        <Slideshow 
          images={externalImages}
          defaultInterval={5000}  // 5 seconds
          showProgressBar={true}
          showThumbnails={true}
          autoPlay={false}  // Start paused
        />
      </div>

      {/* Fast Slideshow */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Fast Slideshow (1.5s intervals)</h3>
        <Slideshow 
          images={externalImages}
          defaultInterval={1500}
          showProgressBar={true}
          showThumbnails={false}
          autoPlay={true}
        />
      </div>

      {/* Instructions for adding your own images */}
      <div className="bg-gray-100 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-bold mb-4">How to Add Your Own Images</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Method 1: Public Folder (Recommended)</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Create a folder called `images` in your `public` directory</li>
              <li>Add your image files (jpg, png, webp, etc.) to `public/images/`</li>
              <li>Reference them like: `['/images/your-image.jpg', '/images/another-image.png']`</li>
            </ol>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Method 2: Import from Assets</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Add images to `src/assets/images/`</li>
              <li>Import them: `import myImage from '../assets/images/myimage.jpg'`</li>
              <li>Use in array: `[myImage, anotherImage]`</li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Method 3: External URLs</h4>
            <p className="text-sm">Use direct URLs to images hosted online (like the examples above)</p>
          </div>
        </div>

        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
          <p className="text-sm">
            <strong>Tip:</strong> For best performance, optimize your images to be around 800-1200px wide 
            and use modern formats like WebP when possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideshowExample;