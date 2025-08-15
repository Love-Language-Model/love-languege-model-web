import { useRouter } from '@/hooks/useRouter';
import { Button } from '@/components/ui/button';

const NavigationExample = () => {
  const { goTo, isActive, isProfileActive } = useRouter();

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-semibold">Navigation Example</h2>
      
      <div className="flex flex-wrap gap-2">
        <Button 
          onClick={goTo.home}
          variant={isActive('/') ? 'default' : 'outline'}
        >
          Home
        </Button>
        
        <Button 
          onClick={goTo.login}
          variant={isActive('/login') ? 'default' : 'outline'}
        >
          Login
        </Button>
        
        <Button 
          onClick={goTo.signup}
          variant={isActive('/signup') ? 'default' : 'outline'}
        >
          Sign Up
        </Button>
        
        <Button 
          onClick={goTo.chat}
          variant={isActive('/chat') ? 'default' : 'outline'}
        >
          Chat
        </Button>
        
        <Button 
          onClick={goTo.profile}
          variant={isProfileActive() ? 'default' : 'outline'}
        >
          Profile
        </Button>
        
        <Button 
          onClick={goTo.profileTokens}
          variant={isActive('/profile/tokens') ? 'default' : 'outline'}
        >
          Profile Tokens
        </Button>
        
        <Button 
          onClick={goTo.profileConversations}
          variant={isActive('/profile/conversations') ? 'default' : 'outline'}
        >
          Profile Conversations
        </Button>
      </div>
      
      <div className="text-sm text-gray-600">
        <p>Current active route: {isActive('/') ? 'Home' : 
           isActive('/login') ? 'Login' : 
           isActive('/signup') ? 'Sign Up' : 
           isActive('/chat') ? 'Chat' : 
           isProfileActive() ? 'Profile' : 'Unknown'}</p>
      </div>
    </div>
  );
};

export default NavigationExample;
