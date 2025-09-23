import Logo from '@/components/Logo';
import Loading from '@/components/ui/loading';
import { useTranslations } from '@/hooks/use-translations';

const LoadingScreen = () => {
  const { t } = useTranslations();

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-6">
        <Logo className="mb-6" />
        <h2 className="text-white text-xl font-light">{t('common.loadingScreen')}</h2>
        <Loading
          variant="dots"
          size="md"
          className="text-white/60"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
