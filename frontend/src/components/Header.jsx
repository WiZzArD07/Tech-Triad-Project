import React from 'react';
import PopOutMenu from './PopOutMenu';

const Header = () => {
  return (
    <header className="bg-white text-gray-800 p-4 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-2xl font-bold w-48">
          work<span className="text-blue-500">wise</span>
        </div>

        {/* Center - Navigation */}
        <nav className="flex-1 flex items-center justify-center">
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm hover:text-blue-500 px-2 py-1">Dashboard</a>
            <a href="/searchvendor" className="text-sm hover:text-blue-500 px-2 py-1">Search Vendor</a>
            <a href="/rfqmanagement" className="text-sm text-blue-500 font-medium px-2 py-1">RFQ Management</a>
            <a href="#" className="text-sm hover:text-blue-500 px-2 py-1">Technical Evaluation</a>
            <a href="#" className="text-sm hover:text-blue-500 px-2 py-1">Compare received quotes</a>
          </div>
        </nav>

        {/* Right - Notifications and Menu */}
        <div className="flex items-center w-48 justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>

          <div>
            <PopOutMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


