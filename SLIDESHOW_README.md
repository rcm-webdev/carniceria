# 🖼️ Advanced React Slideshow Component

A feature-rich, responsive slideshow component built with React and TypeScript that includes auto-play, manual controls, fullscreen mode, and extensive customization options.

## ✨ Features

### 🎮 Interactive Controls
- **Auto-play** with customizable timing intervals
- **Manual navigation** with arrow buttons and keyboard shortcuts
- **Play/Pause toggle** with visual feedback
- **Speed adjustment** via slider control (1-10 seconds)
- **Fullscreen mode** using the Fullscreen API

### 🖼️ Visual Features
- **Smooth fade transitions** between slides
- **Progress bar animation** showing slide timing
- **Responsive design** for mobile and desktop
- **Thumbnail navigation** (optional)
- **Dot indicators** for quick slide access
- **Slide counter** showing current position

### ♿ Accessibility
- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **Focus indicators** for interactive elements
- **High contrast mode** support
- **Reduced motion** support for users with motion sensitivity

## 🚀 Usage

### Basic Implementation

```tsx
import Slideshow from './components/Slideshow';

const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg'
];

function App() {
  return (
    <Slideshow images={images} />
  );
}
```

### Advanced Configuration

```tsx
<Slideshow 
  images={images}
  defaultInterval={4000}    // 4 seconds per slide
  showProgressBar={true}    // Show timing progress bar
  showThumbnails={true}     // Show thumbnail navigation
  autoPlay={false}          // Start paused
/>
```

## 📋 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `string[]` | **Required** | Array of image URLs or paths |
| `defaultInterval` | `number` | `3000` | Auto-play interval in milliseconds |
| `showProgressBar` | `boolean` | `true` | Show progress bar during auto-play |
| `showThumbnails` | `boolean` | `false` | Show thumbnail navigation |
| `autoPlay` | `boolean` | `true` | Start slideshow automatically |

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` / `→` | Navigate to previous/next slide |
| `Spacebar` | Toggle play/pause |
| `F` | Toggle fullscreen mode |
| `Escape` | Exit fullscreen mode |

## 🖱️ Mouse Controls

- **Arrow buttons**: Navigate between slides
- **Play/Pause button**: Control auto-play
- **Speed slider**: Adjust timing interval
- **Fullscreen button**: Enter/exit fullscreen mode
- **Dot indicators**: Jump to specific slides
- **Thumbnails**: Jump to specific slides (when enabled)

## 📁 Adding Your Own Images

### Method 1: Public Folder (Recommended)
1. Create `public/images/` directory
2. Add your image files
3. Reference them: `['/images/image1.jpg', '/images/image2.png']`

### Method 2: Import from Assets
```tsx
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';

const images = [image1, image2];
```

### Method 3: External URLs
```tsx
const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg'
];
```

## 🎨 Styling

The component uses CSS classes that can be customized:

- `.slideshow-container` - Main container
- `.slide-image` - Individual slide images
- `.controls` - Control panel
- `.nav-button` - Navigation arrows
- `.progress-bar` - Progress indicator

### Custom CSS Example
```css
.slideshow-container {
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
}

.controls {
  background: linear-gradient(45deg, #your-color1, #your-color2);
}
```

## 📱 Responsive Design

The slideshow automatically adapts to different screen sizes:

- **Desktop**: Full controls and features
- **Tablet**: Optimized button sizes and spacing
- **Mobile**: Stacked controls and simplified layout

## 🔧 Technical Details

### Dependencies
- React 18+
- TypeScript (optional but recommended)
- Modern browser with Fullscreen API support

### Browser Support
- Chrome 71+
- Firefox 64+
- Safari 12+
- Edge 79+

### Performance
- Optimized for smooth animations
- Efficient memory usage
- Lazy loading support for images
- Fallback placeholder images

## 🐛 Error Handling

The component includes robust error handling:
- **Missing images**: Shows placeholder with error message
- **Network errors**: Automatic fallback to placeholder images
- **Fullscreen errors**: Graceful degradation if API unavailable

## 🌟 Example Use Cases

1. **Product galleries** - Showcase products with detailed views
2. **Portfolio displays** - Present artwork or photography
3. **Property tours** - Real estate image galleries
4. **Restaurant menus** - Display food items attractively
5. **Event photography** - Share event highlights
6. **Tutorial steps** - Visual step-by-step guides

## 🔄 Updates and Maintenance

To update images dynamically:

```tsx
const [currentImages, setCurrentImages] = useState(initialImages);

// Update images
const addNewImages = (newImages) => {
  setCurrentImages([...currentImages, ...newImages]);
};
```

## 📞 Support

For issues or questions:
1. Check the browser console for error messages
2. Verify image URLs are accessible
3. Ensure proper React version compatibility
4. Test keyboard and mouse interactions

---

**Built with ❤️ for La Ranchera Market**

*This slideshow component is designed to be production-ready with enterprise-level features and accessibility compliance.*