import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { router } from '@/routes';
import { AuthProvider } from '@/contexts/auth';

import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster as Sonner } from '@/components/ui/sonner';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider future={{ v7_startTransition: true }} router={router} />
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
