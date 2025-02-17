import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6">{children}</main>  {/* Ensure this renders children */}
      </div>
    </div>
  );
};

export default Dashboard;