import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/use-translations';
import { Topic } from '@/types/chat';

interface TopicsListProps {
  topics: Topic[];
  onTopicClick: (topic: Topic) => void;
  variant?: 'prominent' | 'compact';
  loading?: boolean;
}

export const TopicsList = ({ topics, onTopicClick, variant = 'compact', loading = false }: TopicsListProps) => {
  const { t, isEnglish } = useTranslations();

  if (loading || topics.length === 0) return null;

  if (variant === 'prominent') {
    return (
      <div className="flex-1 p-6">
        <h2 className="text-lg font-medium text-gray-900 text-center mb-6">
          {t('home.topicPrompt')}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {topics?.map(topic => (
            <Button
              key={topic.id}
              variant="outline"
              size="lg"
              className="bg-white hover:bg-gray-50 text-gray-700 rounded-full px-6 py-3"
              onClick={() => onTopicClick(topic)}
            >
              <Icon name={topic.slug} size={20} className="mr-3" />
              {topic.name[isEnglish ? 'en' : 'pt']}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 p-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">
        {t('home.topicPrompt')}
      </h3>
      <div className="flex flex-wrap gap-2">
        {topics?.map(topic => (
          <Button
            key={topic.id}
            variant="outline"
            size="sm"
            className="bg-white hover:bg-gray-50 text-gray-700 rounded-full"
            onClick={() => onTopicClick(topic)}
          >
            <Icon name={topic.slug} size={16} className="mr-2" />
            {topic.name[isEnglish ? 'en' : 'pt']}
          </Button>
        ))}
      </div>
    </div>
  );
};
