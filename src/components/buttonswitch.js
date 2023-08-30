import React from 'react';

const SwitchButton = ({ isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full w-12 h-6 transition duration-300 z-10 ${
        isActive ? 'bg-green-500' : 'bg-gray-300'
      }`}
    >
      <span
        className={`block w-6 h-6 rounded-full transform transition-transform ${
          isActive ? 'translate-x-6' : 'translate-x-0'
        } bg-white top-0 left-0 z-20`}
      ></span>
    </button>
  );
};


export default SwitchButton;