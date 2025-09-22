import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router';

import LoadingScreen from '@/components/LoadingScreen';
import { usersService } from '@/services';
import { User } from '@/types/user';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string, persistent?: boolean) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  updateProfile: (userData: Partial<User>) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadUser = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      setIsLoading(false);
      setIsAuthenticated(false);
      return;
    }

    try {
      const response = await usersService.getCurrent();
      if (response.data) {
        setUser(response.data);
        setIsAuthenticated(true);
      } else {
        setError(response.error || 'Failed to load user data');
        setIsAuthenticated(false);
        localStorage.removeItem('token');
      }
    } catch (err) {
      setError('Failed to load user data');
      setIsAuthenticated(false);
      localStorage.removeItem('token');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const login = async (email: string, password: string, persistent = false): Promise<boolean> => {
    setError(null);

    try {
      const response = await usersService.authenticate({
        username: email,
        password,
        persistent,
      });

      if (response.data) {
        setUser(response.data.user);
        setIsAuthenticated(true);
        return true;
      } else {
        setError(response.error || 'Login failed');
        return false;
      }
    } catch (err) {
      setError('Login failed');
      return false;
    }
  };

  const logout = () => {
    usersService.logout();
    setUser(null);
    setIsAuthenticated(false);
    setError(null);
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await usersService.create({
        name,
        email,
        password,
      });

      if (response.data) {
        return true;
      } else {
        setError(response.error || 'Registration failed');
        return false;
      }
    } catch (err) {
      setError('Registration failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (userData: Partial<User>): Promise<boolean> => {
    setError(null);

    try {
      const response = await usersService.updateCurrent(userData);
      if (response.data) {
        setUser(response.data);
        return true;
      } else {
        setError(response.error || 'Profile update failed');
        return false;
      }
    } catch (err) {
      setError('Profile update failed');
      return false;
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    register,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? <LoadingScreen /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
