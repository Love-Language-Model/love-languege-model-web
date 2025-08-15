import { createBrowserRouter } from 'react-router-dom';

import ProtectedRoute from '@/components/ProtectedRoute';
import AppLayout from '@/layouts/app';
import Chat from '@/pages/chat';
import Index from '@/pages/home';
import Login from '@/pages/login';
import Profile from '@/pages/profile';
import Conversations from '@/pages/profile/conversations';
import Info from '@/pages/profile/info';
import LoveTokens from '@/pages/profile/love-tokens';
import SignUp from '@/pages/sign-up';

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
