import React, { useState, useEffect, useRef } from 'react';
import SideBar from './SideBar';
import Home from './Home';
import Task from './Task/Task';
import Learning from './Learning';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Faculty from './Faculty';
import Profile from './Profile';
import TakeTest from './Task/TakeTest';

const Main: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const mainContentRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = (): void => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = (e: MouseEvent): void => {
    if (sidebarOpen && mainContentRef.current && mainContentRef.current.contains(e.target as Node)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeSidebar);
    return () => {
      document.removeEventListener('mousedown', closeSidebar);
    };
  }, [sidebarOpen]);

  return (
    <section className=''>
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isOpen={sidebarOpen} />
      <div ref={mainContentRef}>
        <Routes>
          <Route path={'/dashboard'} element={<Home/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/task'} element={<Task/>}/>
          <Route path={'/task/test'} element={<TakeTest/>}/>
          <Route path={'/learning'} element={<Learning/>}/>
          <Route path={'/faculty'} element={<Faculty/>}/>
        </Routes>
      </div>
    </section>
  );
}

export default Main;
