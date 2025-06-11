
import './Marquee.css';

interface MarqueeProps {
  speed?: 'slow' | 'medium' | 'fast';
  isPaused?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  speed = 'medium',
  isPaused = false 
}) => {
  const carniceriaMessages = [
    "🥩 ¡Bienvenidos a Carnicería Los Primos!",
    "🐮 Carne fresca todos los días",
    "🔪 Cortes especiales disponibles",
    "💯 La mejor calidad en carnes",
    "🏆 Más de 20 años de experiencia"
  ];

  const getSpeedClass = (speedType: 'slow' | 'medium' | 'fast'): string => {
    switch (speedType) {
      case 'slow': return 'marquee-slow';
      case 'fast': return 'marquee-fast';
      default: return 'marquee-medium';
    }
  };

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <div 
          className={`marquee-track ${getSpeedClass(speed)}`}
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="marquee-items">
              {carniceriaMessages.map((message, index) => (
                <span key={index} className="marquee-item">
                  {message}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;