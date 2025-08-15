export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
}

export interface Identity {
  type: string;
  value: string;
  verified: boolean;
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

export interface AuthRequest {
  username: string;
  password: string;
  persistent: boolean;
}

export interface AuthResponse {
  token: string;
  user: User;
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
