import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './views/Dashboard';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Dashboard />
      </main>
    </div>
  );
}