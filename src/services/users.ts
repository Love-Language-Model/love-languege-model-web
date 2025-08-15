import api from './api';
import { ApiResponse, User, AuthRequest, AuthResponse } from './types';

export const usersService = {
  async create(userData: Omit<User, 'id'>): Promise<ApiResponse<User>> {
    try {
      const response = await api.post<User>('/users', userData);
      return { data: response.data };
    } catch (error: unknown) {
      return { error: (error as any)?.response?.data?.message || 'Failed to create user' };
    }
  },

  async authenticate(authData: AuthRequest): Promise<ApiResponse<AuthResponse>> {
    try {
      const response = await api.post<AuthResponse>('/auth', authData);
      
      if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
      }
      
      return { data: response.data };
    } catch (error: unknown) {
      return { error: (error as any)?.response?.data?.message || 'Authentication failed' };
    }
  },

  async getCurrent(): Promise<ApiResponse<User>> {
    try {
      const response = await api.get<User>('/me');
      return { data: response.data };
    } catch (error: unknown) {
      return { error: (error as any)?.response?.data?.message || 'Failed to get user' };
    }
  },

  async updateCurrent(userData: Partial<User>): Promise<ApiResponse<User>> {
    try {
      const response = await api.put<User>('/me', userData);
      return { data: response.data };
    } catch (error: unknown) {
      return { error: (error as any)?.response?.data?.message || 'Failed to update user' };
    }
  },

  logout(): void {
    localStorage.removeItem('token');
  }
};
