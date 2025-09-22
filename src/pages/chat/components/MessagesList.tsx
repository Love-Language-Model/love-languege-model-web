import { useRef, useEffect } from 'react';

import { MessageBubble } from './MessageBubble';
import Loading from '@/components/ui/loading';

import { Message } from '@/types/chat';

interface MessagesListProps {
  messages: Message[];
  isSending?: boolean;
}

export const MessagesList = ({ messages, isSending = false }: MessagesListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white rounded-lg">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      {isSending && (
        <div className="flex justify-start">
          <div className="flex max-w-[80%] flex-row">
            <div className="flex-shrink-0 mr-3">
              <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                <div className="w-4 h-4 text-pink-500">💖</div>
              </div>
            </div>
            <div className="px-4 py-2 rounded-lg bg-gray-100 text-gray-900">
              <Loading
                variant="dots"
                size="sm"
                className="text-gray-500"
              />
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};
