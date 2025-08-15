import { useRef, useEffect } from 'react';
import { Message } from '@/types/chat';
import { MessageBubble } from './MessageBubble';

interface MessagesListProps {
  messages: Message[];
}

export const MessagesList = ({ messages }: MessagesListProps) => {
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
      <div ref={messagesEndRef} />
    </div>
  );
};
