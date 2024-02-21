import React, { useRef } from 'react';
import Input from './Input';

const NewProject = () => {
  

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);

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
            type="submit"
            form="project"
            className="px-4 py-2 text-xs font-bold rounded-md md:text-base bg-stone-800 text-stone-100 hover:bg-black hover:text-stone-50"
            
          >
            Save
          </button>
        </li>
      </menu>
      <form id="project" className="flex flex-col gap-2">
        <Input
          label="Title"
          className="px-4 py-2 text-base font-normal border-b-2 border-stone-300 bg-stone-200 text-stone-600"
        />
        <Input label="Description" textarea />
        <Input label="Due Date" />

        
      </form>
    </div>
  );
};

export default NewProject;
