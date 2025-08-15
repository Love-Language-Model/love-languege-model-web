import { Heart } from 'lucide-react';

import { Message } from '@/types/chat';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  return (
    <div
      className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`flex max-w-[80%] ${message.isAI ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-shrink-0 ${message.isAI ? 'mr-3' : 'ml-3'}`}>
          {message.isAI ? (
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
          className={`px-4 py-2 rounded-lg ${message.isAI
            ? 'bg-gray-100 text-gray-900'
            : 'bg-yellow-100 text-gray-900'
            }`}
        >
          <p className="text-sm leading-relaxed">{message.content}</p>
        </div>
      </div>
    </div>
  );
};
