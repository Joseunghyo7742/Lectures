import React from 'react';

const NewProject = () => {
  let today = new Date();
  const formatted_today = today.toISOString().substring(0, 10);
  return (
    <main className="flex flex-col w-2/3 gap-4 md:w-7/12">
      <div className="flex self-end gap-2">
        <button className="px-4 py-2 text-xs bg-gray-100 rounded-md md:text-base text-stone-600 hover:bg-gray-300 hover:text-stone-400">
          Cancle
        </button>
        <button className="px-4 py-2 text-xs rounded-md md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          Save
        </button>
      </div>
      <form className="flex flex-col gap-2">
        <label className="flex flex-col gap-1 mb-8 font-bold uppercase md:text-lg text-stone-700">
          Title
          <input
            className="px-4 py-2 text-base font-normal border-b-2 border-stone-300 bg-stone-200 text-stone-600"
            type="text"
            name="title"
            required
          />
        </label>
        <label className="flex flex-col gap-1 mb-8 font-bold uppercase md:text-lg text-stone-700">
          Description
          <textarea
            className="px-4 py-2 text-base font-normal border-b-2 border-stone-300 bg-stone-200 text-stone-600"
            type="text"
            name="description"
            required
          />
        </label>
        <label className="flex flex-col gap-1 mb-8 font-bold uppercase md:text-lg text-stone-700">
          Due Date
          <input
            className="px-4 py-2 text-base font-normal border-b-2 border-stone-300 bg-stone-200 text-stone-600"
            type="date"
            name="due_date"
            value={formatted_today}
            min={formatted_today}
            required
          />
        </label>
      </form>
    </main>
  );
};

export default NewProject;
