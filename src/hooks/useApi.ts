import { useState, useCallback } from 'react';
import { ApiResponse } from '../services';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T = any>() {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(async (apiCall: () => Promise<ApiResponse<T>>) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const response = await apiCall();
      
      if (response.error) {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.error,
        }));
        return response;
      }
      
      setState(prev => ({
        ...prev,
        loading: false,
        data: response.data || null,
      }));
      
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
      
      return { error: errorMessage };
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
}
