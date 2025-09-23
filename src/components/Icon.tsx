import React from 'react';

import AtomSimple from '@/assets/icons/AtomSimple.svg';
import Dove from '@/assets/icons/Dove.svg';
import EarthAmericas from '@/assets/icons/EarthAmericas.svg';
import Flag from '@/assets/icons/Flag.svg';
import HandshakeAngle from '@/assets/icons/HandshakeAngle.svg';
import HandsPraying from '@/assets/icons/HandsPraying.svg';
import HeartHalf from '@/assets/icons/HeartHalf.svg';
import HomeHeart from '@/assets/icons/HomeHeart.svg';
import IndustryWindows from '@/assets/icons/IndustryWindows.svg';
import MicrochipAi from '@/assets/icons/MicrochipAi.svg';
import MoneyBillSimpleWave from '@/assets/icons/MoneyBillSimpleWave.svg';
import MoneyBillSimpleWave1 from '@/assets/icons/MoneyBillSimpleWave1.svg';
import PersonWalkingWithCane from '@/assets/icons/PersonWalkingWithCane.svg';
import ShieldHeart from '@/assets/icons/ShieldHeart.svg';
import TreeDeciduous from '@/assets/icons/TreeDeciduous.svg';

interface IconProps {
  name?: string;
  className?: string;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
}

const iconMap: Record<string, string> = {
  'tree-deciduous': TreeDeciduous,
  'shield-heart': ShieldHeart,
  'person-walking-with-cane': PersonWalkingWithCane,
  'atom-simple': AtomSimple,
  'flag': Flag,
  'microchip-ai': MicrochipAi,
  'hands-praying': HandsPraying,
  'handshake-angle': HandshakeAngle,
  'industry-windows': IndustryWindows,
  'money-bill-simple-wave-1': MoneyBillSimpleWave1,
  'money-bill-simple-wave': MoneyBillSimpleWave,
  'heart-half': HeartHalf,
  'general': EarthAmericas,
  'home-heart': HomeHeart,
  'dove': Dove,
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
