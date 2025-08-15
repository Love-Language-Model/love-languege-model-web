import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Send, Plus } from 'lucide-react';

import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { topicsService, Topic } from '@/services';

const Chat = () => {
  const [message, setMessage] = useState<string>('');
  const [publicMode, setPublicMode] = useState<boolean>(true);

  const { data: topicsData, isLoading: loading, error } = useQuery({
    queryKey: ['topics'],
    queryFn: async () => {
      const response = await topicsService.getAll();
      if (response.data) {
        return response.data.items;
      }
      throw new Error(response.error || 'Failed to load topics');
    },
  });

  const topics = topicsData || [];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <div>
      <main className="flex-1 flex flex-col items-center justify-center py-8 px-4 pb-24 pt-24">
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-semibold text-black">
              Hi human, what does love mean to you?
            </h1>
          </div>

          <div className="bg-black/5 backdrop-blur-sm rounded-lg p-6">
            <Textarea
              placeholder="There's no right or wrong, just love."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-24 bg-transparent border-none text-black resize-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder-black/50"
            />
            <div className="flex items-center justify-between mt-4">
              <Button variant="ghost" size="sm" className="text-black/70 hover:text-black">
                <Plus className="h-4 w-4 mr-2" />
                Attach
              </Button>
              <div className="flex items-center space-x-2">
                <span className="text-black/70 text-sm">Public mode</span>
                <Switch
                  checked={publicMode}
                  onCheckedChange={setPublicMode}
                />
                <Button variant="ghost" size="icon" onClick={handleSendMessage}>
                  <Send className="h-5 w-5 text-black" />
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-black/80 text-center">
              Want to talk about a specific topic? Choose here
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {loading ? (
                <div className="text-black/70">Loading topics...</div>
              ) : error ? (
                <div className="text-red-500">{error.message}</div>
              ) : (
                topics.map(topic => (
                  <Button
                    key={topic.id}
                    variant="outline"
                    className="bg-topic hover:bg-topic-hover text-black rounded-full"
                  >
                    {topic.name.en} / {topic.name.pt}
                  </Button>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
      <div className="text-center text-black/70 dark:text-white/70 text-sm py-6 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        "Always remember you are loved."
      </div>
    </div>
  );
};

export default Chat;
