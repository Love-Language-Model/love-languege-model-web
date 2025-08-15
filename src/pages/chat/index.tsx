import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Send, Plus, Heart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { topicsService } from '@/services';
import { Icon } from '@/components/Icon';

interface Message {
  id: string;
  content: string;
  isAI: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [message, setMessage] = useState<string>('');
  const [publicMode, setPublicMode] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleTopicClick = (topic: any) => {
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
        <div className="w-full max-w-4xl bg-white flex flex-col max-h-[calc(100dvh-150px)]">

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Welcome to Love Language Model
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Start a conversation about love, relationships, and what matters to you.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isAI ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`flex max-w-[80%] ${msg.isAI ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`flex-shrink-0 ${msg.isAI ? 'mr-3' : 'ml-3'}`}>
                        {msg.isAI ? (
                          <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                            <Heart className="w-4 h-4 text-pink-500" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                            <span className="text-xs font-medium text-gray-600">U</span>
                          </div>
                        )}
                      </div>
                      <div
                        className={`px-4 py-2 rounded-lg ${
                          msg.isAI
                            ? 'bg-gray-100 text-gray-900'
                            : 'bg-yellow-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

                      {!loading && topics.length > 0 && (
              <div className="flex-shrink-0 p-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Want to talk about a specific topic?
              </h3>
              <div className="flex flex-wrap gap-2">
                {topics.map(topic => (
                  <Button
                    key={topic.id}
                    variant="outline"
                    size="sm"
                    className="bg-white hover:bg-gray-50 text-gray-700 rounded-full"
                    onClick={() => handleTopicClick(topic)}
                  >
                    <Icon name={topic.slug} size={16} className="mr-2" />
                    {topic.name.en}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="flex-shrink-0 p-6 bg-gray-50">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                <Plus className="h-4 w-4" />
              </Button>
              
              <div className="flex-1">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-white border-gray-300 focus:border-blue-500"
                />
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">Public</span>
                <Switch
                  checked={publicMode}
                  onCheckedChange={setPublicMode}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
