import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';

const AppLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header whiteBackground isAuthenticated={isAuthenticated} />
      <Outlet />
    </div>
  );
};

export default AppLayout;
