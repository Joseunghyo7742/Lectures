import React from 'react';

const Input = ({ label, textarea, date, ...props }) => {
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

  let inputField;
  if (textarea) {
    inputField = <textarea className={classes} {...props} />;
  } else if (date) {
    let today = new Date();
    const formatted_today = today.toISOString().substring(0, 10);
    inputField = (
      <input
        className="px-4 py-2 text-base font-normal border-b-2 border-stone-300 bg-stone-200 text-stone-600"
        type="date"
        name="due_date"
        value={formatted_today}
        min={formatted_today}
        {...props}
        required
      />
    );
  } else {
    inputField = <input className={classes} {...props} />;
  }
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercasetext-stone-500">
        {label}
      </label>
      {inputField}
    </p>
  );
};

export default Input;
