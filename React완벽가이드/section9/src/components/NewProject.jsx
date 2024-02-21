import React, { useRef, useState } from 'react';
import Input from './Input';
import Modal from './Modal';

let today = new Date();
const formatted_today = today.toISOString().substring(0, 10);

const NewProject = ({ onSaveProject, onCancle }) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);
  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const dueDate = dateRef.current.value;
    //validation
    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      dueDate.trim() === ''
    ) {
      modal.current.open();
      return; //return을 써주어야 다음 것들이 실행되지 않음.
    }
    //비어있는 값일 경우

    onSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: dueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="mt-4 mb-4 text-xl font-bold text-stone-500">
          Invalid Input
        </h2>
        <p className="mb-4 text-stone-700">
          Opps.. looks like you forgot to enter a value
        </p>
        <p className="mb-4 text-stone-700">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="flex flex-col w-[35rem] gap-4 mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancle}
              className="px-4 py-2 text-xs font-bold bg-gray-100 rounded-md md:text-base text-stone-500 hover:bg-gray-200 hover:text-stone-800"
            >
              Cancle
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-xs font-bold rounded-md md:text-base bg-stone-800 text-stone-100 hover:bg-black hover:text-stone-50"
            >
              Save
            </button>
          </li>
        </menu>
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            ref={titleRef}
            label="Title"
            className="px-4 py-2 text-base font-normal border-b-2 border-stone-300 bg-stone-200 text-stone-600"
          />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input
            ref={dateRef}
            type="date"
            label="Due Date"
            min={formatted_today}
          />
        </div>
      </div>
    </>
  );
};

export default NewProject;
