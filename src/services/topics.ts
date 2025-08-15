import api from './api';
import { ApiResponse, TopicUpdateRequest, TopicsResponse } from '@/types/api';
import { Topic } from '@/types/chat';

export const topicsService = {
  async getAll(): Promise<ApiResponse<TopicsResponse>> {
    try {
      const response = await api.get<TopicsResponse>('/topics');
      return { data: response.data };
    } catch (error: unknown) {
      return { error: (error as any)?.response?.data?.message || 'Failed to get topics' };
    }
  },

  async create(topicData: Omit<Topic, 'id'>): Promise<ApiResponse<Topic>> {
    try {
      const response = await api.post<Topic>('/topics', topicData);
      return { data: response.data };
    } catch (error: unknown) {
      return { error: (error as any)?.response?.data?.message || 'Failed to create topic' };
    }
  },

  async getById(id: string): Promise<ApiResponse<Topic>> {
    try {
      const response = await api.get<Topic>(`/topics/${id}`);
      return { data: response.data };
    } catch (error: unknown) {
      return { error: (error as any)?.response?.data?.message || 'Failed to get topic' };
    }
  },

  async update(id: string, topicData: TopicUpdateRequest): Promise<ApiResponse<Topic>> {
    try {
      const response = await api.put<Topic>(`/topics/${id}`, topicData);
      return { data: response.data };
    } catch (error: unknown) {
      return { error: (error as any)?.response?.data?.message || 'Failed to update topic' };
    }
  }
};
