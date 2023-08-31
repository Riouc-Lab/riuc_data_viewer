import React from 'react';

const SwitchButton = ({ isActive, onClick }) => {
  const getStatus = () => {
    return isActive ? ' On' : ' Off';
  };

  return (
    <div className="">
      <button
        className={`${
          isActive ? 'bg-green-400' : 'bg-gray-200'
        } items-center h-6 rounded-full w-8 transition-colors duration-300 focus:outline-none block`}
        onClick={onClick}
        style={{ zIndex: 1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-power"
          viewBox="0 0 16 16"
        >
          <path d="M7.5 1v7h1V1h-1z" />
          <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
        </svg>
      </button>
      <span>{getStatus()}</span>
    </div>
  );
};

export default SwitchButton;
