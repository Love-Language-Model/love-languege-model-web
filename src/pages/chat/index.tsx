import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { EmptyState, ChatState, Message, Topic } from './components';

import Loading from '@/components/ui/loading';
import { topicsService, conversationsService } from '@/services';
import { Conversation } from '@/types/chat';

const Chat = () => {
  const [message, setMessage] = useState<string>('');
  const [publicMode, setPublicMode] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);

  const queryClient = useQueryClient();
  const { conversationId } = useParams<{ conversationId: string }>();

  const { data: topics = [], isLoading: loading } = useQuery({
    queryKey: ['topics'],
    queryFn: async () => {
      const response = await topicsService.getAll();
      // console.log('response', response.data);
      return response.data.items
    },
  });

  // console.log('topics', topics);

  const { data: conversationData, isLoading: conversationLoading } = useQuery({
    queryKey: ['conversation', conversationId],
    queryFn: () => conversationsService.getConversation(conversationId!),
    enabled: !!conversationId,
  });

  const { data: messagesData, isLoading: messagesLoading, error: messagesError } = useQuery({
    queryKey: ['messages', conversationId],
    queryFn: () => conversationsService.getMessages(conversationId!),
    enabled: !!conversationId,
    retry: 2,
  });

  useEffect(() => {
    if (conversationData) {
      setCurrentConversation(conversationData);
    }
  }, [conversationData]);

  useEffect(() => {
    if (messagesData?.items) {
      // console.log('Loading messages for conversation:', conversationId, messagesData.items);
      setMessages(messagesData.items);
    }
  }, [messagesData, conversationId]);

  useEffect(() => {
    if (messagesError) {
      console.error('Error loading messages:', messagesError);
    }
  }, [messagesError]);

  const createConversationMutation = useMutation({
    mutationFn: conversationsService.createConversation,
    onSuccess: (conversation) => {
      setCurrentConversation(conversation);
      queryClient.invalidateQueries({ queryKey: ['conversations'] });
    },
  });

  const sendMessageMutation = useMutation({
    mutationFn: ({ conversationId, content }: { conversationId: string; content: string }) =>
      conversationsService.sendMessage(conversationId, { content }),
    onSuccess: (response, variables) => {
      // console.log('Message sent successfully:', response);

      const aiMessage: Message = {
        id: response.outMessage.id,
        content: response.outMessage.content,
        isAI: true,
        timestamp: new Date(),
        conversationId: response.outMessage.conversationId,
        role: response.outMessage.role,
      };

      setMessages(prev => [...prev, aiMessage]);

      queryClient.invalidateQueries({ queryKey: ['messages', variables.conversationId] });
      queryClient.invalidateQueries({ queryKey: ['conversations'] });
    },
    onError: (error, variables) => {
      console.error('Failed to send message:', error);
      setMessages(prev => prev.filter(msg => !(msg.content === variables.content && !msg.isAI && msg.id.startsWith('temp-'))));
      setMessage(variables.content);
    },
  });

  const handleSendMessage = async () => {
    if (message.trim()) {
      const messageContent = message;
      setMessage(''); // Limpa o campo imediatamente

      const userMessage: Message = {
        id: `temp-${Date.now()}`, // ID temporário
        content: messageContent,
        isAI: false,
        timestamp: new Date(),
        conversationId: currentConversation?.id || conversationId,
      };
      setMessages(prev => [...prev, userMessage]);

      const targetConversationId = currentConversation?.id || conversationId;
      if (targetConversationId) {
        // console.log('Sending message to conversation:', targetConversationId, messageContent);
        sendMessageMutation.mutate({
          conversationId: targetConversationId,
          content: messageContent,
        });
      } else {
        // console.log('No conversation found, creating new one automatically');
        const defaultTopicId = topics.length > 0 ? topics[0].id : '';
        createConversationMutation.mutate({ topicId: defaultTopicId || '' }, {
          onSuccess: (newConversation) => {
            // console.log('Conversation created automatically:', newConversation);
            setMessages(prev => prev.map(msg =>
              msg.id === userMessage.id
                ? { ...msg, conversationId: newConversation.id }
                : msg
            ));
            sendMessageMutation.mutate({
              conversationId: newConversation.id,
              content: messageContent,
            });
          },
          onError: (error) => {
            console.error('Failed to create conversation:', error);
            setMessages(prev => prev.filter(msg => msg.id !== userMessage.id));
            setMessage(messageContent);
          }
        });
      }
    }
  };

  const handleTopicClick = async (topic: Topic) => {
    const topicMessageContent = `I want to talk about: ${topic.name.en}`;

    if (!currentConversation && !conversationId) {
      const topicMessage: Message = {
        id: `temp-${Date.now()}`,
        content: topicMessageContent,
        isAI: false,
        timestamp: new Date(),
        conversationId: undefined,
      };
      setMessages(prev => [...prev, topicMessage]);

      createConversationMutation.mutate({ topicId: topic.id! }, {
        onSuccess: (newConversation) => {
          // console.log('Conversation created for topic:', newConversation);

          setMessages(prev => prev.map(msg =>
            msg.id === topicMessage.id
              ? { ...msg, conversationId: newConversation.id }
              : msg
          ));

          sendMessageMutation.mutate({
            conversationId: newConversation.id,
            content: topicMessageContent,
          });
        },
        onError: (error) => {
          console.error('Failed to create conversation for topic:', error);
          setMessages(prev => prev.filter(msg => msg.id !== topicMessage.id));
        }
      });
    } else {
      const targetConversationId = currentConversation?.id || conversationId;
      if (targetConversationId) {
        const topicMessage: Message = {
          id: `temp-${Date.now()}`,
          content: topicMessageContent,
          isAI: false,
          timestamp: new Date(),
          conversationId: targetConversationId,
        };
        setMessages(prev => [...prev, topicMessage]);

        // console.log('Sending topic message to existing conversation:', targetConversationId, topicMessageContent);
        sendMessageMutation.mutate({
          conversationId: targetConversationId,
          content: topicMessageContent,
        });
      }
    }
  };

  const isLoading = loading || conversationLoading || messagesLoading;
  const hasConversationId = !!conversationId;
  const shouldShowChatState = hasConversationId || messages.length > 0;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-[75px] md:pt-20">
      <div className="flex-1 flex justify-center mt-4">
        <div className="w-full container flex flex-col max-h-[calc(100dvh-150px)]">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <Loading
                variant="dots"
                size="sm"
                className="text-[#4050B5]"
                text={hasConversationId ? 'Loading conversation and messages...' : 'Loading topics...'}
              />
            </div>
          ) : messagesError ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <p className="text-red-500 mb-4">Failed to load conversation messages</p>
                <p className="text-gray-500 text-sm">Please try again later</p>
              </div>
            </div>
          ) : shouldShowChatState ? (
            <ChatState
              messages={messages}
              message={message}
              setMessage={setMessage}
              publicMode={publicMode}
              setPublicMode={setPublicMode}
              onSendMessage={handleSendMessage}
              topics={topics}
              onTopicClick={handleTopicClick}
              loading={loading}
              isSending={sendMessageMutation.isPending}
            />
          ) : (
            <EmptyState
              message={message}
              setMessage={setMessage}
              publicMode={publicMode}
              setPublicMode={setPublicMode}
              onSendMessage={handleSendMessage}
              topics={topics}
              onTopicClick={handleTopicClick}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
