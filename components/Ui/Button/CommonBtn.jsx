import React from 'react';

const CommonBtn = ({ name, customClasses }) => {
  return (
    <button
      className={` ${customClasses} relative inline-flex items-center cursor-pointer justify-start overflow-hidden font-medium transition-all group`}
    >
      <span className='w-56 h-48 rounded rotate-[-40deg] bg-text-orange absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full group-hover:mb-32 group-hover:translate-x-0'></span>
      <span className='relative w-full text-left  transition-colors duration-300 ease-in-out '>
        {name}
      </span>
    </button>
  );
};

export default CommonBtn;
