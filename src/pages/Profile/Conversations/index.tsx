import { Heart, Globe2, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ConversationProps {
  icon: React.ReactNode;
  title: string;
  message: string;
  date: string;
}

const ConversationCard = ({ icon, title, message, date }: ConversationProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 font-medium">Conversation on {title}</h3>
          <p className="text-gray-600 text-sm mt-1">{message}</p>
        </div>
        <div className="flex flex-col items-center sm:items-center gap-2 mt-4 sm:mt-0">
          <Button variant="outline" className="flex-shrink-0 text-[#4050B5] border-[#4050B5] rounded-full px-6 hover:bg-[#4050B5] hover:text-white w-full sm:w-auto">
            see more
          </Button>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      </div>
    </div>
  );
};

const Conversations = () => {
  const conversations = {
    'August 2024': [
      {
        icon: <Heart className="w-10 h-10 text-[#E91E63] bg-[#FCE4EC] p-2 rounded-full" />,
        title: 'Self-love',
        message: 'I believe love is a form of energy that moves the world',
        date: '01/09/2024'
      },
      {
        icon: <Globe2 className="w-10 h-10 text-[#2196F3] bg-[#E3F2FD] p-2 rounded-full" />,
        title: 'Cultural love',
        message: 'I believe love is a form of energy that moves the world',
        date: '01/09/2024'
      }
    ],
    'July 2024': [
      {
        icon: <LineChart className="w-10 h-10 text-[#9C27B0] bg-[#F3E5F5] p-2 rounded-full" />,
        title: 'Business',
        message: 'I believe love is a form of energy that moves the world',
        date: '01/09/2024'
      }
    ]
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">MY CONVERSATIONS</h1>
        <p className="text-gray-600 mt-2">
          Reconnect with the wisdom and ideas you shared with Beloved AI.
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(conversations).map(([month, monthConversations]) => (
          <div key={month} className="space-y-4">
            <h2 className="text-gray-900 font-medium">{month}</h2>
            <div className="space-y-4">
              {monthConversations.map((conversation, index) => (
                <ConversationCard
                  key={`${month}-${index}`}
                  icon={conversation.icon}
                  title={conversation.title}
                  message={conversation.message}
                  date={conversation.date}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conversations; 