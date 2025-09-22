import api from './api';
import { 
  Conversation, 
  CreateConversationRequest, 
  Message, 
  SendMessageRequest,
  SendMessageResponse,
  ConversationsResponse,
  MessagesResponse 
} from '../types/api';

export const conversationsService = {
  async getConversations(): Promise<ConversationsResponse> {
    const response = await api.get<ConversationsResponse>('/conversations');
    return response.data;
  },

  async createConversation(data: CreateConversationRequest): Promise<Conversation> {
    console.log('Creating conversation with payload:', data);
    const response = await api.post<Conversation>('/conversations', data);
    return response.data;
  },

  async getConversation(id: string): Promise<Conversation> {
    const response = await api.get<Conversation>(`/conversations/${id}`);
    return response.data;
  },

  async getMessages(conversationId: string): Promise<MessagesResponse> {
    console.log('Fetching messages for conversation:', conversationId);
    const response = await api.get<MessagesResponse>(`/conversations/${conversationId}/messages`);
    console.log('Messages response:', response.data);
    return response.data;
  },

  async sendMessage(conversationId: string, data: SendMessageRequest): Promise<SendMessageResponse> {
    console.log('Sending message to conversation:', conversationId, data);
    const response = await api.post<SendMessageResponse>(`/conversations/${conversationId}/messages`, data);
    console.log('Message sent successfully:', response.data);
    return response.data;
  },
};
