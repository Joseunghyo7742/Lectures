import React from 'react';
import Button from './Button';

const Sidebar = ({ onStartAddProject, projects }) => {
  return (
    <aside className="w-1/3 px-8 py-16 rounded-r-xl bg-stone-900 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 ">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((prj) => (
          <li key={prj.id}>
            <button className="w-full px-2 py-1 text-left rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {prj.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
