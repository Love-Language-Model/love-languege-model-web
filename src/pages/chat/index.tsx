import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { topicsService } from '@/services';
import { EmptyState, ChatState, Message, Topic } from './components';

const Chat = () => {
  const [message, setMessage] = useState<string>('');
  const [publicMode, setPublicMode] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const { data: topics = [], isLoading: loading } = useQuery({
    queryKey: ['topics'],
    queryFn: async () => {
      const response = await topicsService.getAll();
      if (response.data) {
        return response.data.items;
      }
      throw new Error(response.error || 'Failed to load topics');
    },
  });

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: message,
        isAI: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
    }
  };

  const handleTopicClick = (topic: Topic) => {
    const topicMessage: Message = {
      id: Date.now().toString(),
      content: `I want to talk about: ${topic.name.en}`,
      isAI: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, topicMessage]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24">
      <div className="flex-1 flex justify-center py-4 px-4">
        <div className="w-full max-w-4xl flex flex-col max-h-[calc(100dvh-150px)]">
          {messages.length === 0 ? (
            <EmptyState
              message={message}
              setMessage={setMessage}
              publicMode={publicMode}
              setPublicMode={setPublicMode}
              onSendMessage={handleSendMessage}
              topics={topics}
              onTopicClick={handleTopicClick}
              loading={loading}
            />
          ) : (
            <ChatState
              messages={messages}
              message={message}
              setMessage={setMessage}
              publicMode={publicMode}
              setPublicMode={setPublicMode}
              onSendMessage={handleSendMessage}
              topics={topics}
              onTopicClick={handleTopicClick}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
