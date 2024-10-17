'use client';

import React from 'react';
import Link from 'next/link';
import { useSidebar } from '../context/SidebarContext';

const Sidebar = () => {
  const { isExpanded } = useSidebar();

  const menuItems = [
    { icon: '🏠', text: 'Home', href: '#' },
    { icon: '🔥', text: 'Trending', href: '#' },
    { icon: '📺', text: 'Subscriptions', href: '#' },
    { icon: '📚', text: 'Library', href: '#' },
  ];

  return (
    <aside
      className={`bg-gray-100 p-4 transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
    >
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="flex items-center py-2">
                <span className="text-xl mr-4">{item.icon}</span>
                {isExpanded && <span>{item.text}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
