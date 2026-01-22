import { Send, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useTranslations } from '@/hooks/use-translations';

interface MessageInputProps {
  message: string;
  setMessage: (message: string) => void;
  publicMode: boolean;
  setPublicMode: (mode: boolean) => void;
  onSendMessage: () => void;
  placeholder?: string;
  isSending?: boolean;
}

export const MessageInput = ({
  message,
  setMessage,
  publicMode,
  setPublicMode,
  onSendMessage,
  placeholder = 'Type your message...',
  isSending = false
}: MessageInputProps) => {
  const { t } = useTranslations();
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="bg-amber-50 border-amber-300 border rounded-lg p-6">
      <textarea
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full min-h-[100px] bg-transparent border-none text-gray-900 resize-none focus:outline-none placeholder-gray-500 mb-4"
      />
      <div className="flex items-center justify-between">
        <div/>
        {/*<Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">*/}
        {/*  <Plus className="h-4 w-4 mr-2" />*/}
        {/*  {t('common.attach')}*/}
        {/*</Button>*/}

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">{t('home.publicMode')}</span>
          <Switch
            checked={publicMode}
            onCheckedChange={setPublicMode}
          />
          <Button
            size="sm"
            onClick={onSendMessage}
            disabled={!message.trim() || isSending}
            className="text-white bg-black rounded-full hover:text-white hover:bg-black/70"
          >
            {t('chat.send')}
            {isSending ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500"></div>
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
