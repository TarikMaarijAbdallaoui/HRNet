import React, { useState, useRef } from "react";

/**
 * Opens a modal message when an employee is created
 * @param {object} props 
 * @returns HTML elements
 */
const Modal = ({ fn, open }) => {
  const ref = useRef();

  /**
   * Closes the modal
   * @param {*} event
   */
  const handleClose = (event) => {
    fn(false);
  };
  return (
    <>
      {open ? (
        <div className="modal">
          <div className="modal-content">
            <div ref={ref} onClick={handleClose}>
              X
            </div>
            <span>Employee Created!</span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
