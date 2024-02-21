import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';

function App() {
  return (
    <main className="flex h-screen gap-8 my-8">
      <Sidebar />
      <NewProject />
    </main>
  );
}

export default App;
