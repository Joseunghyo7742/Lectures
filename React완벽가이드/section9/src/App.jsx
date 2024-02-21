import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  return (
    <main className="flex h-screen gap-8 my-8">
      <Sidebar />
      <NoProjectSelected/>
    </main>
  );
}

export default App;
