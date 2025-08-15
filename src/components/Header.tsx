import { Menu, X, User, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { LanguageToggle } from '@/components/LanguageToggle';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/auth';
import { useTranslations } from '@/hooks/use-translations';

interface HeaderProps {
  showLoginButton?: boolean;
  whiteBackground?: boolean;
  children?: React.ReactNode;
}

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const getRandomColor = () => {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-yellow-500',
    'bg-red-500',
    'bg-teal-500',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Header = ({ showLoginButton = true, whiteBackground = false, children }: HeaderProps) => {
  const { isAuthenticated, user, logout } = useAuth();
  const { t } = useTranslations();
  const [bgColor] = useState(getRandomColor());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userInitials = user ? getInitials(user.name) : '';

  return (
    <>
      <header className={`fixed top-0 left-0 w-full p-4 z-50 min-h-[75px] flex justify-center items-center ${whiteBackground ? 'bg-white/80 backdrop-blur-sm' : 'bg-black/80 backdrop-blur-sm'}`}>
        <div className="container w-full mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Logo whiteBackground={whiteBackground} />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors`}>
              {t('home.theMovement')}
            </Link>
            <Link to="/" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors`}>
              {t('home.donate')}
            </Link>
            <Link to="/" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors`}>
              {t('home.share')}
            </Link>
            <LanguageToggle />
            {showLoginButton && !isAuthenticated && (
              <Link to="/login">
                <Button variant="outline" className={`${whiteBackground ? 'border-black text-black hover:text-black hover:bg-black/5 hover:border-black/80' : 'bg-transparent border-white text-white hover:text-white hover:bg-white/5 hover:border-white/80'} transition-colors rounded-[28px]`}>
                  {t('auth.login')}
                </Button>
              </Link>
            )}
            {isAuthenticated && (
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`flex items-center justify-center w-[42px] h-[42px] rounded-full ${bgColor} text-white font-medium text-lg hover:opacity-80 transition-opacity`}
                  >
                    {userInitials}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/profile" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>{t('navigation.profile')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600 cursor-pointer focus:text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{t('auth.logout')}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          <button
            className={`md:hidden ${whiteBackground ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
        {children}
      </header>
      {isMenuOpen && (
        <div className={`fixed top-0 left-0 w-full h-screen ${whiteBackground ? 'bg-white/95' : 'bg-black/95'} backdrop-blur-sm md:hidden z-[60]`}>
          <div className="h-full flex flex-col items-center justify-center gap-8 p-4">
            <button
              className={`absolute top-4 right-4 ${whiteBackground ? 'text-black' : 'text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
            <Link to="/" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors text-xl`}>
              {t('home.theMovement')}
            </Link>
            <Link to="/" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors text-xl`}>
              {t('home.donate')}
            </Link>
            <Link to="/" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors text-xl`}>
              {t('home.share')}
            </Link>
            {showLoginButton && !isAuthenticated && (
              <Link to="/login" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors text-xl`}>
                {t('auth.login')}
              </Link>
            )}
            {isAuthenticated && (
              <Link
                to="/profile"
                className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors text-xl`}
              >
                {t('navigation.profile')}
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
