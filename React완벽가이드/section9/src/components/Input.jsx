import React, { forwardRef } from 'react';

const Input = forwardRef(
  ({ label, textarea, date, onChange, ...props }, ref) => {
    const classes =
      'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

    let inputField;
    if (textarea) {
      inputField = <textarea ref={ref} className={classes} {...props} />;
    } else if (date) {
      inputField = (
        <input
          className="px-4 py-2 text-base font-normal border-b-2 border-stone-300 bg-stone-200 text-stone-600 hover:cursor-pointer"
          ref={ref}
          type="date"
          name="due_date"
          {...props}
          required
          onChange={onChange}
        />
      );
    } else {
      inputField = <input ref={ref} className={classes} {...props} />;
    }
    return (
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercasetext-stone-500">
          {label}
        </label>
        {inputField}
      </p>
    );
  }
);

export default Input;
