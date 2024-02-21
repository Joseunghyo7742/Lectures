import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(({ title, message }, ref) => {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialogRef}>
      <h2>{title}</h2>
      <p>{message}</p>
      <form method="dialog">
        <button>Confirm</button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
