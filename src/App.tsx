import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { NavBar } from './components/NavBar';

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App__header">
        <NavBar />
      </header>

      <main className="App__content">
        <Outlet />
      </main>
    </div>
  );
};
