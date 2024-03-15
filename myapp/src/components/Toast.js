import React, { useState } from 'react';

const Toast = ({ message }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-md shadow-lg">
          <div className="flex items-center justify-between">
            <span>{message}</span>
            <button onClick={handleClose}>&times;</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
