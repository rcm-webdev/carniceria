import { useState, useEffect, useCallback } from 'react';
import { Maximize, Minimize, Play, Pause } from 'lucide-react';

const Announcement = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);

  
  const slides = [
    {
      id: 1,
      type: 'image',
      content: 'https://images.unsplash.com/photo-1615937662601-4724eceda00f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'La Ranchera',
      duration: 9000
    },
    {
      id: 2,
      type: 'text',
      content: 'Today\'s Menu',
      subtitle: 'Fajitas de Pollo \n Carne Asada \n Tacos de Res',
      
      duration: 9000
    },
    {
      id: 3,
      type: 'video',
      content: 'https://cdn.pixabay.com/video/2018/05/23/16406-271607438_large.mp4',
      title: 'Res',
      duration: 7000
    }, 
    {
      id: 4,
      type: 'video',
      content: 'https://cdn.pixabay.com/video/2017/11/08/12850-242215666_large.mp4',
      title: 'Pollo',
      duration: 7000
    }, 
  ];

  // Fullscreen functions
  const enterFullscreen = useCallback(() => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  }, []);

  const exitFullscreen = useCallback(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }, []);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slides[currentSlide].duration);

    return () => clearTimeout(timer);
  }, [currentSlide, isPlaying, slides]);

  // Hide controls after inactivity
  useEffect(() => {
    
    let timer: any;
    
    const resetTimer = () => {
      setShowControls(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShowControls(false), 3000);
    };

    const handleMouseMove = () => resetTimer();
    const handleKeyPress = () => resetTimer();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('keypress', handleKeyPress);

    resetTimer();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keypress', handleKeyPress);
      clearTimeout(timer);
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: any) => {
      switch (e.key) {
        case 'f':
        case 'F11':
          e.preventDefault();
          toggleFullscreen();
          break;
        case ' ':
          e.preventDefault();
          setIsPlaying(!isPlaying);
          break;
        case 'ArrowRight':
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          break;
        case 'ArrowLeft':
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
          break;
        case 'Escape':
          if (isFullscreen) exitFullscreen();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen, isPlaying, toggleFullscreen, exitFullscreen, slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className={`relative w-screen h-screen bg-black overflow-hidden ${
      isFullscreen && !showControls ? 'cursor-none' : 'cursor-auto'
    }`}>
      {/* Main Content */}
      <div className="w-full h-full flex items-center justify-center">
        {currentSlideData.type === 'image' ? (
          <div className="relative w-full h-full">
            <img
              src={currentSlideData.content}
              alt={currentSlideData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary opacity-70" />
            {currentSlideData.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <h1 className="text-4xl md:text-6xl font-bold text-base-100 mb-2">
                  {currentSlideData.title}
                </h1>
              </div>
            )}
          </div>
        ) : currentSlideData.type === 'video' ? (
          <div className="relative w-full h-full">
            <video
              src={currentSlideData.content}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary opacity-70" />
            {currentSlideData.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <h1 className="text-4xl md:text-6xl font-bold text-base-100 mb-2">
                  {currentSlideData.title}
                </h1>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center p-8 max-w-4xl">

            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-neutral">
              {currentSlideData.content}
            </h1>
            {currentSlideData.subtitle && (
              <div className="text-2xl md:text-3xl leading-relaxed whitespace-pre-line opacity-90 text-base-100">
                {currentSlideData.subtitle}
              </div>
            )}
           
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-neutral transition-all duration-1000 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Controls */}
      <div className={`absolute top-4 right-4 flex gap-2 transition-opacity duration-300 ${
        showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-lg backdrop-blur-sm transition-colors"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        <button
          onClick={toggleFullscreen}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-lg backdrop-blur-sm transition-colors"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </button>
      </div>

      {/* Slide Indicators */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 transition-opacity duration-300 ${
        showControls ? 'opacity-100' : 'opacity-0'
      }`}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Instructions */}
      {showControls && !isFullscreen && (
        <div className="absolute top-4 left-4 text-white/80 text-sm bg-black/30 backdrop-blur-sm rounded-lg p-3">
          <div>Press F or F11 for fullscreen</div>
          <div>Space to pause/play</div>
          <div>Arrow keys to navigate</div>
        </div>
      )}
    </div>
  );
};

export default Announcement;