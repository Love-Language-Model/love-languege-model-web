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

export interface TopicsResponse {
  items: Topic[];
  hasMore: boolean;
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
