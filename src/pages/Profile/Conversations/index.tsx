import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { Heart, Globe2, LineChart, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import Loading from '@/components/ui/loading';
import { conversationsService, topicsService } from '@/services';
import { Conversation, Topic } from '@/types/api';

interface ConversationCardProps {
  conversation: Conversation;
  topic?: Topic;
  onViewConversation: (conversationId: string) => void;
}

const ConversationCard = ({ conversation, topic, onViewConversation }: ConversationCardProps) => {
  const getTopicIcon = (topicName: string) => {
    const name = topicName.toLowerCase();
    if (name.includes('love') || name.includes('self')) {
      return <Heart className="w-10 h-10 text-[#E91E63] bg-[#FCE4EC] p-2 rounded-full" />;
    }
    if (name.includes('cultural') || name.includes('world')) {
      return <Globe2 className="w-10 h-10 text-[#2196F3] bg-[#E3F2FD] p-2 rounded-full" />;
    }
    if (name.includes('business') || name.includes('growth')) {
      return <LineChart className="w-10 h-10 text-[#9C27B0] bg-[#F3E5F5] p-2 rounded-full" />;
    }
    return <MessageCircle className="w-10 h-10 text-[#4050B5] bg-[#E8EAF6] p-2 rounded-full" />;
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'dd/MM/yyyy');
    } catch {
      return dateString;
    }
  };

  const getTopicName = () => {
    if (!topic) return 'Unknown Topic';
    return topic.name.en || topic.name.pt || 'Unknown Topic';
  };

  const getLastMessage = () => {
    if (conversation.messages && conversation.messages.length > 0) {
      const lastMessage = conversation.messages[conversation.messages.length - 1];
      return lastMessage.content.length > 100
        ? `${lastMessage.content.substring(0, 100)}...`
        : lastMessage.content;
    }
    return 'No messages yet';
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-shrink-0">
          {getTopicIcon(getTopicName())}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 font-medium">Conversation on {getTopicName()}</h3>
          <p className="text-gray-600 text-sm mt-1">{getLastMessage()}</p>
          <div className="flex items-center gap-2 mt-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-500">
              {conversation.messages?.length || 0} messages
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-center gap-2 mt-4 sm:mt-0">
          <Button
            variant="outline"
            className="flex-shrink-0 text-[#4050B5] border-[#4050B5] rounded-full px-6 hover:bg-[#4050B5] hover:text-white w-full sm:w-auto"
            onClick={() => onViewConversation(conversation.id)}
          >
            <span className="mr-2">View</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
          <span className="text-sm text-gray-500">{formatDate(conversation.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

const Conversations = () => {
  const navigate = useNavigate();

  const { data: conversationsResponse, isLoading: conversationsLoading, error: conversationsError } = useQuery({
    queryKey: ['conversations'],
    queryFn: conversationsService.getConversations,
  });

  const handleViewConversation = (conversationId: string) => {
    navigate(`/chat/${conversationId}`);
  };

  const groupConversationsByMonth = (conversations: Conversation[]) => {
    const grouped: { [key: string]: Conversation[] } = {};

    conversations.forEach(conversation => {
      try {
        const date = new Date(conversation.createdAt);
        const monthKey = format(date, 'MMMM yyyy');

        if (!grouped[monthKey]) {
          grouped[monthKey] = [];
        }
        grouped[monthKey].push(conversation);
      } catch {
        const fallbackKey = 'Recent';
        if (!grouped[fallbackKey]) {
          grouped[fallbackKey] = [];
        }
        grouped[fallbackKey].push(conversation);
      }
    });

    return grouped;
  };

  if (conversationsLoading) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">MY CONVERSATIONS</h1>
          <p className="text-gray-600 mt-2">
            Reconnect with the wisdom and ideas you shared with Beloved AI.
          </p>
        </div>
        <div className="flex items-center justify-center py-16">
          <Loading
            variant="dots"
            size="lg"
            className="text-[#4050B5]"
            text="Loading conversations..."
          />
        </div>
      </div>
    );
  }

  if (conversationsError) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">MY CONVERSATIONS</h1>
          <p className="text-gray-600 mt-2">
            Reconnect with the wisdom and ideas you shared with Beloved AI.
          </p>
        </div>
        <div className="text-center py-8">
          <p className="text-gray-500">Failed to load conversations. Please try again later.</p>
        </div>
      </div>
    );
  }

  const conversations = conversationsResponse?.items || [];
  const groupedConversations = groupConversationsByMonth(conversations);

  if (conversations.length === 0) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">MY CONVERSATIONS</h1>
          <p className="text-gray-600 mt-2">
            Reconnect with the wisdom and ideas you shared with Beloved AI.
          </p>
        </div>
        <div className="text-center py-8">
          <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No conversations yet</h3>
          <p className="text-gray-500 mb-4">Start your first conversation to see it here.</p>
          <Button
            onClick={() => navigate('/chat')}
            className="bg-[#4050B5] hover:bg-[#303F9F] text-white"
          >
            Start Chatting
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">MY CONVERSATIONS</h1>
        <p className="text-gray-600 mt-2">
          Reconnect with the wisdom and ideas you shared with Beloved AI.
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedConversations).map(([month, monthConversations]) => (
          <div key={month} className="space-y-4">
            <h2 className="text-gray-900 font-medium">{month}</h2>
            <div className="space-y-4">
              {monthConversations.map((conversation) => (
                <ConversationCard
                  key={conversation.id}
                  conversation={conversation}
                  onViewConversation={handleViewConversation}
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
