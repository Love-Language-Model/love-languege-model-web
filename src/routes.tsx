import { createBrowserRouter } from 'react-router-dom';

import Chat from '@/pages/Chat';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import Profile from '@/pages/Profile';
import LoveTokens from '@/pages/Profile/LoveTokens';
import Conversations from '@/pages/Profile/Conversations';
import Info from '@/pages/Profile/Info';

import AppLayout from '@/layouts/app';

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
        element: <Profile />,
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
