'use client';

import React from 'react';
import Header from '../containers/Header';
import Sidebar from '../containers/Sidebar';
import Footer from '../containers/Footer';
import { SidebarProvider } from '../context/SidebarContext';

const YouTubeLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
          <Sidebar />
          {children}
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default YouTubeLayout;
