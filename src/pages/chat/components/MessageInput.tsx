import { Send, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

interface MessageInputProps {
  message: string;
  setMessage: (message: string) => void;
  publicMode: boolean;
  setPublicMode: (mode: boolean) => void;
  onSendMessage: () => void;
  placeholder?: string;
}

export const MessageInput = ({
  message,
  setMessage,
  publicMode,
  setPublicMode,
  onSendMessage,
  placeholder = 'Type your message...'
}: MessageInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg p-6">
      <textarea
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full min-h-[100px] bg-transparent border-none text-gray-900 resize-none focus:outline-none placeholder-gray-500 mb-4"
      />
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
          <Plus className="h-4 w-4 mr-2" />
          Attach
        </Button>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Public mode</span>
          <Switch
            checked={publicMode}
            onCheckedChange={setPublicMode}
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={onSendMessage}
            disabled={!message.trim()}
            className="text-gray-500 hover:text-gray-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
