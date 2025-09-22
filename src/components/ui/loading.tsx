import React from 'react';

import { cn } from '@/lib/utils';

interface LoadingProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse';
  className?: string;
  text?: string;
}

const Loading = ({ size = 'md', variant = 'spinner', className, text }: LoadingProps) => {
  const sizeClasses = {
    xs: 'h-2 w-2',
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const Spinner = () => (
    <div className={cn('animate-spin rounded-full border-2 border-current border-t-transparent', sizeClasses[size])} />
  );

  const Dots = () => (
    <div className="flex space-x-2">
      <div className={cn('bg-current rounded-full animate-bounce', sizeClasses[size])} />
      <div className={cn('bg-current rounded-full animate-bounce', sizeClasses[size])} style={{ animationDelay: '0.1s' }} />
      <div className={cn('bg-current rounded-full animate-bounce', sizeClasses[size])} style={{ animationDelay: '0.2s' }} />
    </div>
  );

  const Pulse = () => (
    <div className={cn('animate-pulse rounded-full bg-current', sizeClasses[size])} />
  );

  const variants = {
    spinner: Spinner,
    dots: Dots,
    pulse: Pulse
  };

  const VariantComponent = variants[variant];

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className="flex flex-col items-center space-y-2">
        <VariantComponent />
        {text && (
          <p className="text-sm text-muted-foreground">{text}</p>
        )}
      </div>
    </div>
  );
};

export default Loading;
