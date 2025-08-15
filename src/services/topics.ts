import { apiService, ApiResponse, Topic, TopicUpdateRequest } from './api';

export class Topics {
  async getAll(): Promise<ApiResponse<Topic[]>> {
    return apiService.get<Topic[]>('/topics');
  }

  async create(topicData: Omit<Topic, 'id'>): Promise<ApiResponse<Topic>> {
    return apiService.post<Topic>('/topics', topicData);
  }

  async getById(id: string): Promise<ApiResponse<Topic>> {
    return apiService.get<Topic>(`/topics/${id}`);
  }

  async update(id: string, topicData: TopicUpdateRequest): Promise<ApiResponse<Topic>> {
    return apiService.put<Topic>(`/topics/${id}`, topicData);
  }
}

export const topics = new Topics();
