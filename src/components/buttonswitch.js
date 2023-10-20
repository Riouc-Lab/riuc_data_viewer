import React from 'react';
import PropTypes from 'prop-types';

const SwitchButton = ({ isActive, onClick }) => {
  const getStatus = () => {
    return isActive ? 'On' : 'Off';
  };

  const buttonClasses = `rounded-full w-8 h-6 transition-colors duration-300 focus:outline-none block ${
    isActive ? 'bg-green-400' : 'bg-gray-200'
  }`;

  return (
    <div className="flex items-center">
      <button
        className={buttonClasses}
        onClick={onClick}
        aria-label={`Turn ${getStatus()} the switch`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-power"
          viewBox="0 0 15 20"
        >
          <path d="M7.5 1v7h1V1h-1z" />
          <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
        </svg>
      </button>
      <span className="ml-2">{getStatus()}</span>
    </div>
  );
};

SwitchButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SwitchButton;
