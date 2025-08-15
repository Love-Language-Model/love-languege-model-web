export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  cellphone?: string;
  password?: string;
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
