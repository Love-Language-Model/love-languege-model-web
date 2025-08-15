import { createBrowserRouter } from 'react-router-dom';

import Chat from '@/pages/chat';
import Index from '@/pages/home';
import Login from '@/pages/login';
import SignUp from '@/pages/sign-up';
import Profile from '@/pages/profile';
import LoveTokens from '@/pages/profile/love-tokens';
import Conversations from '@/pages/profile/conversations';
import Info from '@/pages/profile/info';

import AppLayout from '@/layouts/app';
import ProtectedRoute from '@/components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'chat',
        element: <Chat />,
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
        children: [
          {
            path: '',
            element: <Info />,
          },
          {
            path: 'tokens',
            element: <LoveTokens />,
          },
          {
            path: 'conversations',
            element: <Conversations />,
          },
        ],
      },
    ],
  },
]);
