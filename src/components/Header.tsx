import { useState } from 'react';

import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  showLoginButton?: boolean;
  whiteBackground?: boolean;
  children?: React.ReactNode;
  isAuthenticated?: boolean;
}

const getRandomInitials = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)] + letters[Math.floor(Math.random() * letters.length)];
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

const Header = ({ showLoginButton = true, whiteBackground = false, children, isAuthenticated = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [initials] = useState(getRandomInitials());
  const [bgColor] = useState(getRandomColor());

  return (
    <>
      <header className={`fixed top-0 left-0 w-full p-4 z-50 min-h-[75px] flex justify-center items-center ${whiteBackground ? 'bg-white/80 backdrop-blur-sm' : 'bg-black/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Logo whiteBackground={whiteBackground} />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors`}>
              the movement
            </Link>
            <Link to="/donate" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors`}>
              donate
            </Link>
            <Link to="/share" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors`}>
              share
            </Link>
            {showLoginButton && !isAuthenticated && (
              <Link to="/login">
                <Button variant="outline" className={`${whiteBackground ? 'border-black text-black hover:text-black hover:bg-black/5 hover:border-black/80' : 'bg-transparent border-white text-white hover:text-white hover:bg-white/5 hover:border-white/80'} transition-colors rounded-[28px]`}>
                  login
                </Button>
              </Link>
            )}
            {isAuthenticated && (
              <Link
                to="/profile"
                className={`flex items-center justify-center w-[42px] h-[42px] rounded-full ${bgColor} text-white font-medium text-lg`}
              >
                {initials}
              </Link>
            )}
          </div>
          <button
            className={`md:hidden ${whiteBackground ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            <Link to="/about" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors text-xl`}>
              the movement
            </Link>
            <Link to="/donate" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors text-xl`}>
              donate
            </Link>
            <Link to="/share" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors text-xl`}>
              share
            </Link>
            {showLoginButton && !isAuthenticated && (
              <Link to="/login">
                <Button variant="outline" className={`${whiteBackground ? 'border-black text-black hover:text-black hover:bg-black/5 hover:border-black/80' : 'bg-transparent border-white text-white hover:text-white hover:bg-white/5 hover:border-white/80'} transition-colors w-48 rounded-[28px]`}>
                  login
                </Button>
              </Link>
            )}
            {isAuthenticated && (
              <Link
                to="/profile"
                className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors text-xl`}
              >
                profile
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;