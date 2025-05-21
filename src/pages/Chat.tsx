import { useState } from 'react';

import { Send, Plus } from 'lucide-react';

import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

interface Topic {
  id: string;
  name: string;
  icon: string;
}

const topics: Topic[] = [
  { id: '1', name: 'World peace', icon: '🕊️' },
  { id: '2', name: 'Family', icon: '🏠' },
  { id: '3', name: 'Cultural love', icon: '🌍' },
  { id: '4', name: 'Business', icon: '📈' },
  { id: '5', name: 'Self-love', icon: '❤️' },
  { id: '6', name: 'Relationships', icon: '❤️' },
  { id: '7', name: 'Spirituality', icon: '🧘' },
  { id: '8', name: 'Communities', icon: '👥' },
  { id: '9', name: 'Nature', icon: '🌳' },
  { id: '10', name: 'Differences', icon: '🔄' },
  { id: '11', name: 'Money', icon: '💰' },
  { id: '12', name: 'Universal love', icon: '🌟' },
  { id: '13', name: 'Friendship', icon: '👫' },
  { id: '14', name: 'Love stories', icon: '📖' },
  { id: '15', name: 'Technology', icon: '💻' },
];

const Chat = () => {
  const [message, setMessage] = useState<string>('');
  const [publicMode, setPublicMode] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header whiteBackground isAuthenticated={isAuthenticated} />
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
              {topics.map(topic => (
                <Button
                  key={topic.id}
                  variant="outline"
                  className="bg-topic hover:bg-topic-hover text-black rounded-full"
                >
                  <span className="mr-2">{topic.icon}</span>
                  {topic.name}
                </Button>
              ))}
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
