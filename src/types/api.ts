export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
}

export interface AuthRequest {
  username: string;
  password: string;
  persistent: boolean;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface User {
  id?: string;
  name: string;
  birthDate?: string | null;
  gender?: string | null;
  about?: string | null;
  residenceLocation?: string | null;
  birthLocation?: string | null;
  imageUrl?: string | null;
  identities: Identity[];
}

export interface Identity {
  type: string;
  value: string;
  verified: boolean;
}

export interface TopicsResponse {
  items: Topic[];
  hasMore: boolean;
}

export interface Topic {
  id?: string;
  name: {
    en: string;
    pt: string;
  };
  description?: {
    en: string;
    pt?: string;
  };
  slug?: string;
}

export interface TopicUpdateRequest {
  name?: {
    en: string;
    pt: string;
  };
  description?: {
    en: string;
    pt?: string;
  };
}

export interface Message {
  id: string;
  content: string;
  isAI: boolean;
  timestamp: Date;
  conversationId?: string;
  role?: 'user' | 'agent';
}

export interface Conversation {
  id: string;
  topicId: string;
  createdAt: string;
  updatedAt: string;
  messages?: Message[];
}

export interface CreateConversationRequest {
  topicId: string;
}

export interface SendMessageRequest {
  content: string;
}

export interface SendMessageResponse {
  message: Message;
  outMessage: Message;
}

export interface ConversationsResponse {
  items: Conversation[];
  hasMore: boolean;
}

export interface MessagesResponse {
  items: Message[];
  hasMore: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: any;
}

export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
  success?: boolean;
}
