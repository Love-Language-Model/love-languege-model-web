import { MessageInput } from './MessageInput';
import { MessagesList } from './MessagesList';
import { TopicsList } from './TopicsList';

import { Message, Topic } from '@/types/chat';

interface ChatStateProps {
  messages: Message[];
  message: string;
  setMessage: (message: string) => void;
  publicMode: boolean;
  setPublicMode: (mode: boolean) => void;
  onSendMessage: () => void;
  topics: Topic[];
  onTopicClick: (topic: Topic) => void;
  loading: boolean;
  isSending?: boolean;
}

export const ChatState = ({
  messages,
  message,
  setMessage,
  publicMode,
  setPublicMode,
  onSendMessage,
  topics,
  onTopicClick,
  loading,
  isSending = false
}: ChatStateProps) => {
  return (
    <>
      <MessagesList messages={messages} isSending={isSending} />
      <TopicsList
        topics={topics}
        onTopicClick={onTopicClick}
        variant="compact"
        loading={loading}
      />
      <div className="flex-shrink-0">
        <MessageInput
          message={message}
          setMessage={setMessage}
          publicMode={publicMode}
          setPublicMode={setPublicMode}
          onSendMessage={onSendMessage}
          isSending={isSending}
        />
      </div>
    </>
  );
};
