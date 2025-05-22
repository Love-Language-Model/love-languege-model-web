import { User, Heart, MessageCircle } from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import ProfileInfo from '@/pages/ProfileInfo';
import { LoveTokens } from '@/pages/LoveTokens';
import Conversations from '@/pages/Conversations';

import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const location = useLocation();
  const isTokensActive = location.pathname.includes('/tokens');
  const isConversationsActive = location.pathname.includes('/conversations');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header whiteBackground={true} isAuthenticated={true} />
      <main className="flex-1 pt-20 md:pt-24">
        <div className="max-w-5xl mx-auto w-full">
          <div className="md:hidden w-full bg-white/80 backdrop-blur-sm sticky top-[75px] z-40 border-b border-gray-100">
            <nav className="grid grid-cols-3 w-full">
              <Link to="/profile" className="flex-1">
                <Button 
                  variant="ghost" 
                  className={`${!isTokensActive && !isConversationsActive ? 'bg-[#B6B6E5] text-[#4050B5]' : 'text-[#616161] hover:bg-gray-100/50'} w-full rounded-none h-14 flex items-center justify-center gap-2`}
                >
                  <User size={18} className="hidden sm:block" />
                  <span className="text-sm">My profile</span>
                </Button>
              </Link>
              <Link to="/profile/tokens" className="flex-1">
                <Button 
                  variant="ghost" 
                  className={`${isTokensActive ? 'bg-[#B6B6E5] text-[#4050B5]' : 'text-[#616161] hover:bg-gray-100/50'} w-full rounded-none h-14 flex items-center justify-center gap-2`}
                >
                  <Heart size={18} className="hidden sm:block" />
                  <span className="text-sm">My tokens</span>
                </Button>
              </Link>
              <Link to="/profile/conversations" className="flex-1">
                <Button 
                  variant="ghost" 
                  className={`${isConversationsActive ? 'bg-[#B6B6E5] text-[#4050B5]' : 'text-[#616161] hover:bg-gray-100/50'} w-full rounded-none h-14 flex items-center justify-center gap-2`}
                >
                  <MessageCircle size={18} className="hidden sm:block" />
                  <span className="text-sm">Conversations</span>
                </Button>
              </Link>
            </nav>
          </div>
          <div className="flex px-4">
            <aside className="w-64 pr-8 border-r border-gray-200 pt-2 hidden md:block sticky top-24 h-[calc(100vh-6rem)]">
              <nav className="flex flex-col gap-2">
                <Link to="/profile">
                  <button className={`${!isTokensActive && !isConversationsActive ? 'bg-[#B6B6E5] text-[#4050B5]' : 'text-[#616161]'} rounded-md px-4 py-2 text-left font-medium w-full flex items-center gap-2`}>
                    <User size={18} />
                    My profile
                  </button>
                </Link>
                <Link to="/profile/tokens">
                  <button className={`${isTokensActive ? 'bg-[#B6B6E5] text-[#4050B5]' : 'text-[#616161]'} rounded-md px-4 py-2 text-left w-full flex items-center gap-2`}>
                    <Heart size={18} />
                    My love tokens
                  </button>
                </Link>
                <Link to="/profile/conversations">
                  <button className={`${isConversationsActive ? 'bg-[#B6B6E5] text-[#4050B5]' : 'text-[#616161]'} rounded-md px-4 py-2 text-left w-full flex items-center gap-2`}>
                    <MessageCircle size={18} />
                    My conversations
                  </button>
                </Link>
              </nav>
            </aside>
            <div className="flex-1 md:pl-8 pb-12 pt-6">
              <Routes>
                <Route path="/" element={<ProfileInfo />} />
                <Route path="/tokens/*" element={<LoveTokens />} />
                <Route path="/conversations" element={<Conversations />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


export default Profile; 