import { useNavigate, useLocation } from 'react-router-dom';

export const useRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return {
    navigate,
    location,
    goTo: {
      home: () => navigate('/'),
      login: () => navigate('/login'),
      signup: () => navigate('/signup'),
      chat: () => navigate('/chat'),
      profile: () => navigate('/profile'),
      profileTokens: () => navigate('/profile/tokens'),
      profileConversations: () => navigate('/profile/conversations'),
    },
    isActive: (path: string) => location.pathname === path,
    isProfileActive: () => location.pathname.startsWith('/profile'),
  };
};
