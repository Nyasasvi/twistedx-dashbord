import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, CodeIcon, CalendarIcon, ChartBarIcon, UsersIcon } from '@heroicons/react/outline';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-6 text-lg font-bold">TwistedX IT Dashboard</div>
      <nav className="mt-4 flex-1">
        <NavLink to="/" className="block py-2 px-4 hover:bg-gray-700 flex items-center">
          <HomeIcon className="h-5 w-5 mr-2" />
          IT Tools
        </NavLink>
        <NavLink to="/development" className="block py-2 px-4 hover:bg-gray-700 flex items-center">
          <CodeIcon className="h-5 w-5 mr-2" />
          Development
        </NavLink>
        <NavLink to="/schedules" className="block py-2 px-4 hover:bg-gray-700 flex items-center">
          <CalendarIcon className="h-5 w-5 mr-2" />
          Schedules
        </NavLink>
        <NavLink to="/trading-partners" className="block py-2 px-4 hover:bg-gray-700 flex items-center">
          <UsersIcon className="h-5 w-5 mr-2" />
          Trading Partners
        </NavLink>
        <NavLink to="/analytics" className="block py-2 px-4 hover:bg-gray-700 flex items-center">
          <ChartBarIcon className="h-5 w-5 mr-2" />
          Analytics
        </NavLink>
        <NavLink to="/documentation" className="block py-2 px-4 hover:bg-gray-700 flex items-center">
          <ChartBarIcon className="h-5 w-5 mr-2" />
          Documentation
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar; 