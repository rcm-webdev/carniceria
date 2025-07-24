import { useState, useEffect, useCallback, useRef } from 'react';
import { Maximize, Minimize, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

const Announcement = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(new Set());
  const [progress, setProgress] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-100');
  
  const preloadRef = useRef<{ [key: number]: HTMLImageElement | HTMLVideoElement }>({});
  const progressRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

  const slides = [
    {
      id: 1,
      type: 'image',
      content: 'https://images.unsplash.com/photo-1615937662601-4724eceda00f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'La Ranchera Market',
      subtitle: 'Authentic Mexican Cuisine',
      duration: 8000
    },
    {
      id: 2,
      type: 'text',
      content: 'Especiales del Día',
      subtitle: 'Fajitas de Pollo\nTacos de Cabeza\nTacos de Res\nQuesadillas Especiales',
      duration: 8000
    },
    {
      id: 3,
      type: 'video',
      content: 'https://cdn.pixabay.com/video/2018/05/23/16406-271607438_large.mp4',
      title: 'Fresh Ingredients',
      subtitle: 'Made daily with the finest ingredients',
      duration: 6000
    }, 
    {
      id: 4,
      type: 'video',
      content: 'https://cdn.pixabay.com/video/2017/11/08/12850-242215666_large.mp4',
      title: 'Authentic Flavors',
      subtitle: 'Traditional recipes passed down through generations',
      duration: 6000
    }, 
    {
      id: 5,
      type: 'image',
      content: 'https://images.unsplash.com/photo-1625643269470-5d3e7b69fa34?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Visit Us Today',
      subtitle: 'Experience authentic Mexican flavors',
      duration: 7000
    }
  ];

  // Preload function for images and videos
  const preloadSlide = useCallback((slideIndex: number) => {
    const slide = slides[slideIndex];
    if (!slide || loadedSlides.has(slideIndex) || slide.type === 'text') return;

    if (slide.type === 'image') {
      const img = new Image();
      img.onload = () => {
        setLoadedSlides(prev => new Set([...prev, slideIndex]));
        preloadRef.current[slideIndex] = img;
      };
      img.onerror = () => {
        console.warn(`Failed to load image for slide ${slideIndex}`);
        setLoadedSlides(prev => new Set([...prev, slideIndex])); // Mark as loaded even if failed
      };
      img.src = slide.content;
    } else if (slide.type === 'video') {
      const video = document.createElement('video');
      video.onloadeddata = () => {
        setLoadedSlides(prev => new Set([...prev, slideIndex]));
        preloadRef.current[slideIndex] = video;
      };
      video.onerror = () => {
        console.warn(`Failed to load video for slide ${slideIndex}`);
        setLoadedSlides(prev => new Set([...prev, slideIndex])); // Mark as loaded even if failed
      };
      video.preload = 'metadata';
      video.muted = true;
      video.src = slide.content;
    }
  }, [slides, loadedSlides]);

  // Progress bar animation
  const startProgress = useCallback(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    
    const progressInterval = 50;
    const steps = slides[currentSlide].duration / progressInterval;
    let currentStep = 0;

    progressRef.current = window.setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      
      if (currentStep >= steps) {
        if (progressRef.current) window.clearInterval(progressRef.current);
      }
    }, progressInterval);
  }, [slides, currentSlide]);

  // Enhanced slide change with smooth transitions
  const changeSlide = useCallback((newSlideIndex: number, skipTransition = false) => {
    if (newSlideIndex === currentSlide) return;
    
    if (!skipTransition) {
      setFadeClass('opacity-0');
    }
    
    setTimeout(() => {
      setCurrentSlide(newSlideIndex);
      setFadeClass('opacity-100');
      
      // Reset and start progress for new slide
      if (isPlaying) {
        startProgress();
      }
    }, skipTransition ? 0 : 300);

    // Preload next slides
    const nextSlide = (newSlideIndex + 1) % slides.length;
    const prevSlide = (newSlideIndex - 1 + slides.length) % slides.length;
    preloadSlide(nextSlide);
    preloadSlide(prevSlide);
  }, [currentSlide, slides, isPlaying, startProgress, preloadSlide]);

  // Navigation functions
  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % slides.length;
    changeSlide(next);
  }, [currentSlide, slides.length, changeSlide]);

  const prevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(prev);
  }, [currentSlide, slides.length, changeSlide]);

  // Fullscreen functions
  const enterFullscreen = useCallback(async () => {
    try {
      if (containerRef.current) {
        await containerRef.current.requestFullscreen();
      }
    } catch (error) {
      console.warn('Fullscreen not supported or failed:', error);
    }
  }, []);

  const exitFullscreen = useCallback(async () => {
    try {
      await document.exitFullscreen();
    } catch (error) {
      console.warn('Exit fullscreen failed:', error);
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Controls visibility management
  const showControlsTemporarily = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = window.setTimeout(() => {
      setShowControls(false);
    }, 4000);
  }, []);

  // Preload current and adjacent slides
  useEffect(() => {
    preloadSlide(currentSlide);
    const nextSlide = (currentSlide + 1) % slides.length;
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    preloadSlide(nextSlide);
    preloadSlide(prevSlide);
  }, [currentSlide, preloadSlide, slides.length]);

  // Initial preload
  useEffect(() => {
    for (let i = 0; i < Math.min(3, slides.length); i++) {
      setTimeout(() => preloadSlide(i), i * 100);
    }
  }, [preloadSlide, slides.length]);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      nextSlide();
    }, slides[currentSlide].duration);

    return () => clearTimeout(timer);
  }, [currentSlide, isPlaying, slides, nextSlide]);

  // Start progress when playing
  useEffect(() => {
    if (isPlaying) {
      startProgress();
    } else {
      if (progressRef.current) clearInterval(progressRef.current);
    }
  }, [isPlaying, currentSlide, startProgress]);

  // Mouse movement and touch handling
  useEffect(() => {
    const handleMouseMove = () => showControlsTemporarily();
    const handleTouchStart = () => showControlsTemporarily();
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchstart', handleTouchStart);
    
    // Show controls initially
    showControlsTemporarily();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchstart', handleTouchStart);
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [showControlsTemporarily]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      showControlsTemporarily();
      
      switch (e.key) {
        case 'f':
        case 'F11':
          e.preventDefault();
          toggleFullscreen();
          break;
        case ' ':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          if (isFullscreen) exitFullscreen();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen, toggleFullscreen, togglePlayPause, nextSlide, prevSlide, exitFullscreen, showControlsTemporarily]);

  const currentSlideData = slides[currentSlide];

  // Render slide content
  const renderSlideContent = () => {
    if (currentSlideData.type === 'image') {
      return (
        <div className="relative w-full h-full">
          <img
            src={currentSlideData.content}
            alt={currentSlideData.title || 'Slide image'}
            className={`w-full h-full object-cover transition-opacity duration-300 ${fadeClass}`}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      );
    } else if (currentSlideData.type === 'video') {
      return (
        <div className="relative w-full h-full">
          <video
            src={currentSlideData.content}
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-300 ${fadeClass}`}
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      );
    } else {
      return (
        <div className={`relative w-full h-full flex items-center justify-center bg-gradient-to-br from-red-900 via-red-700 to-orange-600 transition-opacity duration-300 ${fadeClass}`}>
          <div className="text-center p-8 max-w-4xl">
            <div className="mb-8">
              <svg 
                fill="#FFD700" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                className='w-16 h-16 mx-auto mb-6 drop-shadow-lg'
                viewBox="0 0 556.01 556.01" 
                xmlSpace="preserve"
              >
                <g>
                  <path d="M9.469,226.129c0.992,5.573,2.358,11.102,2.999,16.712c1.428,12.501,3.949,25.108,3.362,37.543 c-0.75,15.896-4.121,31.665-6.361,47.487c0.833-0.347,1.665-0.698,2.501-1.045c3.285,4.998,6.569,9.996,10.127,15.415 c-1.437,4.622-3.129,10.064-5.104,16.409c2.432-1.946,4.268-3.415,4.811-3.848c1.265,7.385,2.636,15.378,4.215,24.599 c2.57-2.117,3.37-2.778,3.949-3.26c0.673,3.578,1.351,7.168,2.028,10.759c0.445-0.024,0.889-0.049,1.334-0.073 c0.698-2.815,1.396-5.635,2.093-8.45c0.665,0.024,1.33,0.05,1.995,0.074c10.18,30.791,22.595,59.535,25.063,90.584 c0,0-1.787,5.594,2.191,8.127c3.978,2.53,44.847,2.893,48.462,0c3.615-2.893-8.604-17.14-17.683-21.049 c-2.848-11.803-6.185-22.097-8.054-34.063c-1.897-12.143-2.746-24.509-3.166-36.806c-0.424-12.379,4.063-23.301,10.897-33.758 c5.161-7.899,8.886-16.883,12.273-25.757c3.566-9.344,5.479-19.319,9.041-28.662c3.007-7.887,6.846-8.025,13.472-2.596 c6.756,5.541,13.337,12.146,21.196,15.271c9.649,3.84,20.518,4.688,30.906,6.577c6.075,1.106,12.26,2.57,18.356,2.407 c18.601-0.497,37.173-1.941,55.773-2.542c8.364-0.269,14.093,4.194,15.602,12.433c2.272,12.402,2.848,25.141,5.528,37.438 c2.677,12.272,2.203,24.99,8.417,36.903c6.691,12.828,9.295,27.394,4.762,41.951c-1.049,3.37-3.721,6.772-6.605,8.771 c0,0-3.383,16.961,0.478,20.82c3.859,3.855,24.112,2.411,35.202,1.448c0,0,27.968,5.786,39.058,2.412 c11.094-3.375,5.304-10.127,4.341-13.982c-0.967-3.855-8.494-4.794-8.494-4.794c-1.469-2.856-6.59-4.125-7.169-7.152 c-2.692-14.125-1.832-28.091,1.832-42.085c4.554-17.381,7.85-35.101,12.677-52.4c1.673-6.001,5.585-11.799,9.739-16.593 c7.747-8.939,21.399-10.972,27.242-22.452c0.085-0.167,0.412-0.225,0.636-0.302c11.29-3.986,16.124-13.081,19.295-23.771 c1.656-5.585,4.06-10.959,6.287-16.36c6.585-15.981,19.185-27.262,31.31-38.695c3.664-3.452,10.024-6.748,14.55-6.079 c13.929,2.057,27.564,5.569,41.302-0.518c0.637-0.281,1.444-0.767,1.991-0.591c9.837,3.174,18.339-0.192,26.487-5.3 c2.366-1.485,6.638-3.162,6.605-4.675c-0.147-6.752-0.204-14.056-2.791-20.082c-3.803-8.845-10.245-16.52-14.586-25.182 c-2.982-5.949-3.064-12.709-0.6-19.56c2.081,0.718,3.427,1.167,4.757,1.648c9.172,3.301,15.745-1.979,14.827-11.473 c-0.245-2.534,0.607-5.757,2.13-7.785c8.282-11.012,6.564-17.997-6.422-23.105c-2.546-1-5.61-1.167-8.385-0.975 c-5.198,0.359-10.354,1.261-14.586,1.812c-2.791-3.929-4.325-8.278-7.303-9.796c-4.99-2.538-8.075-5.112-6.517-10.2 c-8.637-3.207-16.695-6.202-25.561-9.494c2.011-1.057,3.043-1.595,4.076-2.138c-0.245-0.669-0.49-1.338-0.734-2.008 c-7.487,2.277-14.974,4.558-22.697,6.908c0.171,4.602-0.094,9.298-7.308,8.817c-1.15-0.078-2.611,1.212-3.574,2.211 c-4.182,4.333-8.404,6.609-14.517,3.043c-1.828-1.065-5.287-0.245-7.638,0.657c-7.144,2.742-13.293,7.165-22.064,6.096 c-6.116-0.743-12.705,2.844-19.144,4.186c-14.822,3.093-29.376,3.623-42.979-4.818c-1.963-1.22-4.524-1.995-6.83-2.052 c-9.649-0.229-19.318,0.171-28.964-0.2c-6.487-0.249-12.938-1.383-19.4-2.154c-3.239-0.388-6.454-1.012-9.702-1.253 c-7.74-0.571-15.888,0.327-23.113-1.86c-5.985-1.812-12.228-1.318-16.634,0.11c-10.016,3.248-19.56,2.468-28.69-0.286 c-29.192-8.809-59.185-13.072-89.254-16.797c-6.348-0.759-11.358-3.089-16.369-6.181c-3.75-2.318-7.177-5.235-11.383-2.126 c-4.851-1.249-10.392-2.974-14.521-1.273c-5.757,2.371-13.386-0.779-17.572,5.908c-0.171,0.269-1.347-0.008-2.032-0.151 c-7.928-1.648-14.305,2.656-19.854,6.769c-6.393,4.741-12.632,7.229-20.126,5.5c-3.321,4.133-2.644,11.122-9.861,11.42 c-0.604,0.024-1.428,1.367-1.677,2.232C7.764,115.366,6.572,122,4.132,128.144c-4.757,11.991-2.607,24.57-3.941,36.834 c-0.4,3.664-0.139,7.507,0.473,11.159C3.476,192.82,6.503,209.471,9.469,226.129z"/>
                </g>
              </svg>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              {currentSlideData.content}
            </h1>
            {currentSlideData.subtitle && (
              <div className="text-xl md:text-2xl lg:text-3xl leading-relaxed whitespace-pre-line text-yellow-100 drop-shadow-lg font-medium">
                {currentSlideData.subtitle}
              </div>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-screen h-screen bg-black overflow-hidden ${
        isFullscreen && !showControls ? 'cursor-none' : 'cursor-auto'
      }`}
    >
      {/* Main Content */}
      <div className="w-full h-full">
        {renderSlideContent()}
        
        {/* Content overlay for images and videos */}
        {(currentSlideData.type === 'image' || currentSlideData.type === 'video') && (
          <div className="absolute inset-0 flex items-end">
            <div className="w-full p-8 md:p-12 lg:p-16">
              {currentSlideData.title && (
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
                  {currentSlideData.title}
                </h1>
              )}
              {currentSlideData.subtitle && (
                <p className="text-xl md:text-2xl lg:text-3xl text-yellow-100 drop-shadow-lg font-medium leading-relaxed whitespace-pre-line">
                  {currentSlideData.subtitle}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-red-500 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation Arrows */}
      <div className={`absolute inset-0 flex items-center justify-between px-4 md:px-8 transition-opacity duration-300 ${
        showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <button
          onClick={prevSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
          title="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
          title="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Top Controls */}
      <div className={`absolute top-4 md:top-6 right-4 md:right-6 flex gap-2 md:gap-3 transition-opacity duration-300 ${
        showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <button
          onClick={togglePlayPause}
          className="bg-black/30 hover:bg-black/50 text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        <button
          onClick={toggleFullscreen}
          className="bg-black/30 hover:bg-black/50 text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </button>
      </div>

      {/* Slide Indicators */}
      <div className={`absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 transition-opacity duration-300 ${
        showControls ? 'opacity-100' : 'opacity-0'
      }`}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 relative ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            title={`Go to slide ${index + 1}`}
          >
            {/* Loading indicator for slides */}
            {!loadedSlides.has(index) && slides[index].type !== 'text' && (
              <div className="absolute inset-0 rounded-full border border-white/30 border-t-white animate-spin"></div>
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className={`absolute top-4 md:top-6 left-4 md:left-6 bg-black/30 backdrop-blur-sm text-white px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-base font-medium transition-opacity duration-300 ${
        showControls ? 'opacity-100' : 'opacity-0'
      }`}>
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Keyboard Instructions */}
      {showControls && !isFullscreen && (
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white/70 text-xs md:text-sm bg-black/20 backdrop-blur-sm rounded-lg p-2 md:p-3 max-w-xs">
          <div className="space-y-1">
            <div>F11 or F - Fullscreen</div>
            <div>Space - Play/Pause</div>
            <div>← → - Navigate</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Announcement;