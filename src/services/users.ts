import { apiService, ApiResponse, User, AuthRequest, AuthResponse } from './api';

export const usersService = {
  async create(userData: Omit<User, 'id'>): Promise<ApiResponse<User>> {
    return apiService.post<User>('/users', userData);
  },

  async authenticate(authData: AuthRequest): Promise<ApiResponse<AuthResponse>> {
    const response = await apiService.post<AuthResponse>('/auth', authData);
    
    if (response.data?.token) {
      apiService.setToken(response.data.token);
    }
    
    return response;
  },

  async getCurrent(): Promise<ApiResponse<User>> {
    return apiService.get<User>('/me');
  },

  async updateCurrent(userData: Partial<User>): Promise<ApiResponse<User>> {
    return apiService.put<User>('/me', userData);
  },

  logout(): void {
    apiService.clearToken();
  }
};
