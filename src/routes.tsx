import { createBrowserRouter } from 'react-router-dom';

import Chat from '@/pages/Chat';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import Profile from '@/pages/Profile';

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
    path: '/chat',
    element: <Chat />,
  },
  {
    path: '/profile/*',
    element: <Profile />,
  },
]);
