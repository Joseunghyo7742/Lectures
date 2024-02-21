import React from 'react';
import Button from './Button';

const Sidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 rounded-r-xl bg-stone-900 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 ">
        Your Projects
      </h2>
      <div>
        <Button>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default Sidebar;
