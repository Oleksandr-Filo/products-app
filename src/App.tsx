import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <p>Future header</p>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
