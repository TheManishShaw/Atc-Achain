import React from 'react';
const tmp = [
  {
    name: 'Category',
    link: '/',
  },
  {
    name: 'Sub-Category',
    link: '/products',
  },
];
const BreadCrumbs = ({ data }) => {
  return (
    <>
      <div className='flex'>
        <ul className='inline-flex items-center space-x-1 mb-3 md:space-x-3'>
          <li className='inline-flex items-center'>
            <a
              href='/'
              className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            >
              <svg
                className='w-4 h-4 mr-2'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
              </svg>
              Home
            </a>
          </li>
          {tmp.map((item, i) => (
            <li key={i}>
              <div className='flex items-center'>
                <svg
                  width={16}
                  height={20}
                  viewBox='0 0 16 20'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  className='h-5 w-4 text-gray-300'
                >
                  <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                </svg>
                <a
                  href='#'
                  className='ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white'
                >
                  {item.name}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BreadCrumbs;
