import { MessagesList } from './MessagesList';
import { MessageInput } from './MessageInput';
import { TopicsList } from './TopicsList';
import { Message, Topic } from './types';

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
  loading
}: ChatStateProps) => {
  return (
    <>
      <MessagesList messages={messages} />
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
        />
      </div>
    </>
  );
};
