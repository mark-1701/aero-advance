import React from 'react';

function Benefit({ iconName, title, description }) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-200 sm:gap-10 sm:p-14">
      <span className="material-symbols-outlined flex justify-center text-5xl text-gray-700 sm:text-6xl">
        {iconName}
      </span>
      <h3 className="text-center">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
}

export default Benefit;
