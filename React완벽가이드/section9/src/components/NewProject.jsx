import React, { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import Input from './Input';

let today = new Date();
const formatted_today = today.toISOString().substring(0, 10);

const NewProject = ({ onSaveProject }) => {
  const pjid = nanoid(8);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [dueDate, setDueDate] = useState(formatted_today);

  const handleSaveButton = () => {
    onSaveProject((prev) => {
      const project = {
        id: pjid,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        dueDate: dueDate,
      };
      const newProjects = [...prev.projects, project];
      return { selectedProjectId: undefined, projects: newProjects };
    });
  };

  return (
    <div className="flex flex-col w-[35rem] gap-4 mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="px-4 py-2 text-xs font-bold bg-gray-100 rounded-md md:text-base text-stone-500 hover:bg-gray-200 hover:text-stone-800">
            Cancle
          </button>
        </li>
        <li>
          <button
            onClick={handleSaveButton}
            className="px-4 py-2 text-xs font-bold rounded-md md:text-base bg-stone-800 text-stone-100 hover:bg-black hover:text-stone-50"
          >
            Save
          </button>
        </li>
      </menu>
      <div className="flex flex-col gap-2">
        <Input
          ref={titleRef}
          label="Title"
          className="px-4 py-2 text-base font-normal border-b-2 border-stone-300 bg-stone-200 text-stone-600"
        />
        <Input ref={descriptionRef} label="Description" textarea />
        <Input
          date
          label="Due Date"
          value={dueDate}
          min={formatted_today}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default NewProject;
