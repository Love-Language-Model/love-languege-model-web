import React from 'react';

import Loading from '@/components/ui/loading';
import { useTranslations } from '@/hooks/use-translations';

const LoadingScreen = () => {
  const { t } = useTranslations();
  
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center space-y-6">
        <h2 className="text-white text-xl font-semibold">{t('home.title')}</h2>
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
