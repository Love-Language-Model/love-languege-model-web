import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Logo from '@/components/Logo';
import LanguageButton from '@/components/LanguageButton';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  showLoginButton?: boolean;
  whiteBackground?: boolean;
  children?: React.ReactNode;
}

const Header = ({ showLoginButton = true, whiteBackground = false, children }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`p-4 ${whiteBackground ? 'bg-white' : ''}`}>
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        <Logo whiteBackground={whiteBackground} />
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors`}>
            the movement
          </Link>
          <Link to="/donate" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors`}>
            donate
          </Link>
          <Link to="/share" className={`${whiteBackground ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors`}>
            share
          </Link>
          <LanguageButton whiteBackground={whiteBackground} />
          {showLoginButton && (
            <Link to="/login">
              <Button variant="outline" className={`${whiteBackground ? 'border-black text-black hover:text-black hover:bg-black/5 hover:border-black/80' : 'bg-transparent border-white text-white hover:text-white hover:bg-white/5 hover:border-white/80'} transition-colors rounded-[28px]`}>
                login
              </Button>
            </Link>
          )}
        </div>
        <button 
          className={`md:hidden ${whiteBackground ? 'text-black' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
        {isMenuOpen && (
          <div className={`fixed inset-0 ${whiteBackground ? 'bg-white/95' : 'bg-black/95'} backdrop-blur-sm md:hidden z-50`}>
            <div className="h-full flex flex-col items-center justify-center space-y-8 p-4">
              <button 
                className={`absolute top-4 right-4 ${whiteBackground ? 'text-black' : 'text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Menu size={24} />
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
              <div className="py-4">
                <LanguageButton whiteBackground={whiteBackground} />
              </div>
              {showLoginButton && (
                <Link to="/login">
                  <Button variant="outline" className={`${whiteBackground ? 'border-black text-black hover:text-black hover:bg-black/5 hover:border-black/80' : 'bg-transparent border-white text-white hover:text-white hover:bg-white/5 hover:border-white/80'} transition-colors w-48 rounded-[28px]`}>
                    login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
      {children}
    </header>
  );
};

export default Header; 