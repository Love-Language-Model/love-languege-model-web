import { useTranslations } from '@/hooks/use-translations';

interface ChatHeaderProps {
  title?: string;
}

export const ChatHeader = ({ title }: ChatHeaderProps) => {
  const { t } = useTranslations();

  const defaultTitle = t('home.welcomeMessage');
  return (
    <div className="flex-shrink-0 p-8 text-center">
      <h1 className="text-2xl font-semibold font-title text-gray-900 mb-2">
        {title || defaultTitle}
      </h1>
    </div>
  );
};
