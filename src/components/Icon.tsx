import React from 'react';

interface IconProps {
  name?: string;
  className?: string;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
}

const iconMap: Record<string, string> = {
  'tree-deciduous': '/src/assets/icons/TreeDeciduous.svg',
  'shield-heart': '/src/assets/icons/ShieldHeart.svg',
  'person-walking-with-cane': '/src/assets/icons/PersonWalkingWithCane.svg',
  'atom-simple': '/src/assets/icons/AtomSimple.svg',
  'flag': '/src/assets/icons/Flag.svg',
  'microchip-ai': '/src/assets/icons/MicrochipAi.svg',
  'hands-praying': '/src/assets/icons/HandsPraying.svg',
  'handshake-angle': '/src/assets/icons/HandshakeAngle.svg',
  'industry-windows': '/src/assets/icons/IndustryWindows.svg',
  'money-bill-simple-wave-1': '/src/assets/icons/MoneyBillSimpleWave1.svg',
  'money-bill-simple-wave': '/src/assets/icons/MoneyBillSimpleWave.svg',
  'heart-half': '/src/assets/icons/HeartHalf.svg',
  'general': '/src/assets/icons/EarthAmericas.svg',
  'home-heart': '/src/assets/icons/HomeHeart.svg',
  'dove': '/src/assets/icons/Dove.svg',
};

export const Icon: React.FC<IconProps> = ({ 
  name, 
  className = '', 
  size,
  width,
  height,
  color,
  ...props
}) => {
  const iconPath = iconMap[name];
  
  if (!iconPath) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const finalWidth = width || size || 24;
  const finalHeight = height || size || 24;

  return (
    <img
      src={iconPath}
      alt={`${name} icon`}
      className={className}
      width={finalWidth}
      height={finalHeight}
      style={{ 
        filter: color ? `brightness(0) saturate(100%) invert(1) sepia(1) saturate(10000%) hue-rotate(${color})` : undefined 
      }}
      {...props}
    />
  );
};

export default Icon;
