import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="border-t-4 border-b-4 border-gray-900 rounded-full w-12 h-12 animate-spin"></div>
  </div>
  );
};

export default Loader;