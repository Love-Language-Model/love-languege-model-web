import { ChatHeader } from './ChatHeader';
import { MessageInput } from './MessageInput';
import { TopicsList } from './TopicsList';

import { useTranslations } from '@/hooks/use-translations';
import { Topic } from '@/types/chat';

interface EmptyStateProps {
  message: string;
  setMessage: (message: string) => void;
  publicMode: boolean;
  setPublicMode: (mode: boolean) => void;
  onSendMessage: () => void;
  topics: Topic[];
  onTopicClick: (topic: Topic) => void;
  loading: boolean;
}

export const EmptyState = ({
  message,
  setMessage,
  publicMode,
  setPublicMode,
  onSendMessage,
  topics,
  onTopicClick,
  loading
}: EmptyStateProps) => {
  const { t } = useTranslations();

  return (
    <>
      <ChatHeader />
      <div className="flex-shrink-0 p-6">
        <MessageInput
          message={message}
          setMessage={setMessage}
          publicMode={publicMode}
          setPublicMode={setPublicMode}
          onSendMessage={onSendMessage}
          placeholder={t('chat.startTyping')}
        />
      </div>
      <TopicsList
        topics={topics}
        onTopicClick={onTopicClick}
        variant="prominent"
        loading={loading}
      />
    </>
  );
};
