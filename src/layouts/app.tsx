import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header whiteBackground />
      <Outlet />
    </div>
  );
};

export default AppLayout;
