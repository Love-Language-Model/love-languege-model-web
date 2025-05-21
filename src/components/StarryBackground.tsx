
import React, { useEffect, useState } from 'react';

interface StarryBackgroundProps {
  children: React.ReactNode;
}

const StarryBackground: React.FC<StarryBackgroundProps> = ({ children }) => {
  const [stars, setStars] = useState<{ id: number; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const starsCount = 100;
      const newStars = [];
      
      for (let i = 0; i < starsCount; i++) {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const animationDelay = Math.random() * 2;
        
        newStars.push({
          id: i,
          style: {
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${animationDelay}s`,
          }
        });
      }
      
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="starry-background w-full min-h-screen">
      {stars.map((star) => (
        <div key={star.id} className="star" style={star.style} />
      ))}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default StarryBackground;
