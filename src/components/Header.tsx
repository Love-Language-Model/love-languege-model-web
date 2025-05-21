import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  showLoginButton?: boolean;
  whiteBackground?: boolean;
}

const Header = ({ showLoginButton = true, whiteBackground = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`p-4 flex items-center justify-between ${whiteBackground ? 'bg-white' : ''}`}>
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
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="36" height="21" viewBox="0 0 36 21">
            <path fill={whiteBackground ? '#000000' : '#EAEAEA'} d="M16.697283 1.75L16.697283 19.25L3.5152173 19.25C2.54304 19.25 1.7576087 18.467968 1.7576087 17.5L1.7576087 3.5C1.7576087 2.5320313 2.54304 1.75 3.5152173 1.75L16.697283 1.75ZM18.454891 1.75L31.636957 1.75C32.609135 1.75 33.394566 2.5320313 33.394566 3.5L33.394566 17.5C33.394566 18.467968 32.609135 19.25 31.636957 19.25L18.454891 19.25L18.454891 1.75ZM35.152172 3.5C35.152172 1.5695312 33.575817 0 31.636957 0L3.5152173 0C1.5763553 0 0 1.5695312 0 3.5L0 17.5C0 19.43047 1.5763553 21 3.5152173 21L31.636957 21C33.575817 21 35.152172 19.43047 35.152172 17.5L35.152172 3.5ZM9.6064301 5.8023438C9.4691172 5.46875 9.1450577 5.25 8.788043 5.25C8.4310293 5.25 8.1069698 5.46875 7.9696569 5.8023438L4.4544396 14.552343C4.2731862 15.000781 4.492887 15.509375 4.9432745 15.689844C5.3936615 15.870313 5.9044666 15.651563 6.0857201 15.203125L6.5690627 14.005468L11.001532 14.005468L11.484875 15.203125C11.666128 15.651563 12.176932 15.870313 12.62732 15.689844C13.077707 15.509375 13.297408 15.000781 13.116155 14.552343L9.6009378 5.8023438L9.6064301 5.8023438ZM8.788043 8.4820309L10.303981 12.25L7.2775984 12.25L8.788043 8.4820309ZM27.242935 6.125C27.242935 5.6437502 26.847473 5.25 26.36413 5.25C25.880789 5.25 25.485327 5.6437502 25.485327 6.125L25.485327 7L21.970108 7C21.486767 7 21.091305 7.3937502 21.091305 7.875C21.091305 8.3562498 21.486767 8.75 21.970108 8.75L26.36413 8.75L28.627052 8.75L28.616066 8.7828121C28.16568 10.01875 27.440666 11.128906 26.517921 12.03125L26.473982 11.9875L25.23267 10.751562C24.892134 10.4125 24.331896 10.4125 23.991358 10.751562C23.650822 11.090625 23.650822 11.648438 23.991358 11.9875L25.139297 13.130468C24.86467 13.305469 24.584551 13.469531 24.287954 13.611719L23.337748 14.082031C22.903839 14.300781 22.728077 14.825781 22.942286 15.257812C23.156494 15.689844 23.68927 15.864843 24.123178 15.651563L25.073387 15.18125C25.573206 14.929688 26.051056 14.645312 26.501444 14.322657C26.825502 14.563281 27.166039 14.792969 27.512068 15.000781L28.550156 15.61875C28.967588 15.864843 29.505856 15.733594 29.753019 15.317968C30.000183 14.902344 29.868362 14.366406 29.450932 14.120313L28.412844 13.502344C28.226097 13.392969 28.044844 13.278125 27.869083 13.152344C28.918156 12.091406 29.742035 10.80625 30.263824 9.3789062L30.494511 8.7445316L30.758152 8.7445316C31.241495 8.7445316 31.636957 8.3507814 31.636957 7.8695312C31.636957 7.3882813 31.241495 6.9945312 30.758152 6.9945312L29.879349 6.9945312L27.242935 6.9945312L27.242935 6.1195312L27.242935 6.125Z"/>
          </svg>
        </div>
        {showLoginButton && (
          <Link to="/login">
            <Button variant="outline" className={`${whiteBackground ? 'border-black text-black hover:text-black hover:bg-black/5 hover:border-black/80' : 'bg-transparent border-white text-white hover:text-white hover:bg-white/5 hover:border-white/80'} transition-colors`}>
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
        <div className={`fixed inset-0 ${whiteBackground ? 'bg-white/95' : 'bg-black/95'} backdrop-blur-sm md:hidden`}>
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
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="36" height="21" viewBox="0 0 36 21">
                <path fill={whiteBackground ? '#000000' : '#EAEAEA'} d="M16.697283 1.75L16.697283 19.25L3.5152173 19.25C2.54304 19.25 1.7576087 18.467968 1.7576087 17.5L1.7576087 3.5C1.7576087 2.5320313 2.54304 1.75 3.5152173 1.75L16.697283 1.75ZM18.454891 1.75L31.636957 1.75C32.609135 1.75 33.394566 2.5320313 33.394566 3.5L33.394566 17.5C33.394566 18.467968 32.609135 19.25 31.636957 19.25L18.454891 19.25L18.454891 1.75ZM35.152172 3.5C35.152172 1.5695312 33.575817 0 31.636957 0L3.5152173 0C1.5763553 0 0 1.5695312 0 3.5L0 17.5C0 19.43047 1.5763553 21 3.5152173 21L31.636957 21C33.575817 21 35.152172 19.43047 35.152172 17.5L35.152172 3.5ZM9.6064301 5.8023438C9.4691172 5.46875 9.1450577 5.25 8.788043 5.25C8.4310293 5.25 8.1069698 5.46875 7.9696569 5.8023438L4.4544396 14.552343C4.2731862 15.000781 4.492887 15.509375 4.9432745 15.689844C5.3936615 15.870313 5.9044666 15.651563 6.0857201 15.203125L6.5690627 14.005468L11.001532 14.005468L11.484875 15.203125C11.666128 15.651563 12.176932 15.870313 12.62732 15.689844C13.077707 15.509375 13.297408 15.000781 13.116155 14.552343L9.6009378 5.8023438L9.6064301 5.8023438ZM8.788043 8.4820309L10.303981 12.25L7.2775984 12.25L8.788043 8.4820309ZM27.242935 6.125C27.242935 5.6437502 26.847473 5.25 26.36413 5.25C25.880789 5.25 25.485327 5.6437502 25.485327 6.125L25.485327 7L21.970108 7C21.486767 7 21.091305 7.3937502 21.091305 7.875C21.091305 8.3562498 21.486767 8.75 21.970108 8.75L26.36413 8.75L28.627052 8.75L28.616066 8.7828121C28.16568 10.01875 27.440666 11.128906 26.517921 12.03125L26.473982 11.9875L25.23267 10.751562C24.892134 10.4125 24.331896 10.4125 23.991358 10.751562C23.650822 11.090625 23.650822 11.648438 23.991358 11.9875L25.139297 13.130468C24.86467 13.305469 24.584551 13.469531 24.287954 13.611719L23.337748 14.082031C22.903839 14.300781 22.728077 14.825781 22.942286 15.257812C23.156494 15.689844 23.68927 15.864843 24.123178 15.651563L25.073387 15.18125C25.573206 14.929688 26.051056 14.645312 26.501444 14.322657C26.825502 14.563281 27.166039 14.792969 27.512068 15.000781L28.550156 15.61875C28.967588 15.864843 29.505856 15.733594 29.753019 15.317968C30.000183 14.902344 29.868362 14.366406 29.450932 14.120313L28.412844 13.502344C28.226097 13.392969 28.044844 13.278125 27.869083 13.152344C28.918156 12.091406 29.742035 10.80625 30.263824 9.3789062L30.494511 8.7445316L30.758152 8.7445316C31.241495 8.7445316 31.636957 8.3507814 31.636957 7.8695312C31.636957 7.3882813 31.241495 6.9945312 30.758152 6.9945312L29.879349 6.9945312L27.242935 6.9945312L27.242935 6.1195312L27.242935 6.125Z"/>
              </svg>
            </div>
            {showLoginButton && (
              <Link to="/login">
                <Button variant="outline" className={`${whiteBackground ? 'border-black text-black hover:text-black hover:bg-black/5 hover:border-black/80' : 'bg-transparent border-white text-white hover:text-white hover:bg-white/5 hover:border-white/80'} transition-colors w-48`}>
                  login
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 