import React from 'react';
import Loading from '@/components/ui/loading';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50">
      <div className="text-center space-y-6">
        <h2 className="text-white text-xl font-semibold">Welcome to the movement</h2>
        <Loading
          variant="dots"
          size="lg"
          className="text-white/60"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
