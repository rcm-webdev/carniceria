import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Slideshow.css';

interface SlideshowProps {
  images: string[];
  defaultInterval?: number;
  showProgressBar?: boolean;
  showThumbnails?: boolean;
  autoPlay?: boolean;
}

const Slideshow: React.FC<SlideshowProps> = ({
  images,
  defaultInterval = 3000,
  showProgressBar = true,
  showThumbnails = false,
  autoPlay = true
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [interval, setInterval] = useState(defaultInterval);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  
  const slideshowRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  // Progress bar animation
  const startProgress = useCallback(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    
    const progressInterval = 50; // Update every 50ms
    const steps = interval / progressInterval;
    let currentStep = 0;

    progressRef.current = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      
      if (currentStep >= steps) {
        if (progressRef.current) clearInterval(progressRef.current);
      }
    }, progressInterval);
  }, [interval]);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && images.length > 1) {
      startProgress();
      intervalRef.current = setInterval(() => {
        setFadeClass('fade-out');
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % images.length);
          setFadeClass('fade-in');
        }, 150);
      }, interval);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isPlaying, interval, images.length, startProgress]);

  // Reset progress when slide changes manually
  useEffect(() => {
    if (isPlaying) {
      startProgress();
    }
  }, [currentSlide, startProgress, isPlaying]);

  // Fullscreen functionality
  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await slideshowRef.current?.requestFullscreen();
        setIsFullscreen(true);
      } catch (error) {
        console.error('Error entering fullscreen:', error);
      }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } catch (error) {
        console.error('Error exiting fullscreen:', error);
      }
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Navigation functions
  const goToSlide = (index: number) => {
    if (isPlaying) {
      setIsPlaying(false);
      setTimeout(() => setIsPlaying(true), 100);
    }
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentSlide(index);
      setFadeClass('fade-in');
    }, 150);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'ArrowRight':
          nextSlide();
          break;
        case ' ':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        case 'Escape':
          if (isFullscreen) toggleFullscreen();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isFullscreen, isPlaying]);

  if (images.length === 0) {
    return (
      <div className="slideshow-container">
        <div className="no-images">
          <p>No images to display</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={slideshowRef}
      className={`slideshow-container ${isFullscreen ? 'fullscreen' : ''}`}
    >
      {/* Main slide display */}
      <div className="slide-wrapper">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className={`slide-image ${fadeClass}`}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/800x600/ff6b6b/ffffff?text=Image+${currentSlide + 1}`;
          }}
        />
        
        {/* Progress bar */}
        {showProgressBar && isPlaying && (
          <div className="progress-container">
            <div 
              className="progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Navigation arrows */}
        <button 
          className="nav-button prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button 
          className="nav-button next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Slide counter */}
        <div className="slide-counter">
          {currentSlide + 1} / {images.length}
        </div>
      </div>

      {/* Controls */}
      <div className="controls">
        <div className="control-group">
          <button
            className={`control-button ${isPlaying ? 'playing' : 'paused'}`}
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>

          <div className="timer-control">
            <label htmlFor="timer-input">Speed (seconds):</label>
            <input
              id="timer-input"
              type="range"
              min="1"
              max="10"
              step="0.5"
              value={interval / 1000}
              onChange={(e) => setInterval(parseFloat(e.target.value) * 1000)}
              className="timer-slider"
            />
            <span className="timer-value">{interval / 1000}s</span>
          </div>

          <button
            className="control-button fullscreen-button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? '🗗' : '⛶'}
          </button>
        </div>

        {/* Thumbnails */}
        {showThumbnails && (
          <div className="thumbnails">
            {images.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/80x60/ff6b6b/ffffff?text=${index + 1}`;
                  }}
                />
              </button>
            ))}
          </div>
        )}

        {/* Dot indicators */}
        <div className="dot-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Help text for keyboard shortcuts */}
      <div className="help-text">
        <small>
          Use arrow keys to navigate, spacebar to play/pause, F for fullscreen
        </small>
      </div>
    </div>
  );
};

export default Slideshow;