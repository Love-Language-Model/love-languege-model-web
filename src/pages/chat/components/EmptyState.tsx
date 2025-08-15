import { ChatHeader } from './ChatHeader';
import { MessageInput } from './MessageInput';
import { TopicsList } from './TopicsList';
import { Topic } from './types';

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
          placeholder="There's no right or wrong, just love."
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
