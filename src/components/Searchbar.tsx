import React from 'react';

const Searchbar = () => {
  return (
    <div className='flex items-center'>
      <div className='flex items-center w-full max-w-2xl mx-auto bg-gray-800 rounded-full shadow-md overflow-hidden'>
        <input
          type='text'
          className='w-full px-4 py-2 text-gray-300 leading-tight bg-gray-800 border-none focus:outline-none'
          placeholder='Search'
        />
        <div className='p-2'>
          <button className='bg-gray-700 text-gray-300 rounded-full p-2 focus:outline-none w-10 h-10 flex items-center justify-center'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z'
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className='ml-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='512'
          height='512'
          x='0'
          y='0'
          viewBox='0 0 512 512'
          xmlSpace='preserve'
          style={{ height: 30, width: 30 }}
        >
          <g>
            <path
              d='M430.1 234.9c-4.7 42.5-25 81.7-57 110.6-28.3 25.5-63.7 40.9-101.1 44.4V480h31.4c8.8 0 16 7.2 16 16s-7.2 16-16 16h-94.9c-8.8 0-16-7.2-16-16s7.2-16 16-16H240v-90.1c-37.4-3.4-72.8-18.9-101.1-44.4-32-28.9-52.3-68.1-57-110.6-1-8.8 5.3-16.7 14.1-17.7s16.7 5.3 17.7 14.1c8.1 72.6 69.3 127.3 142.3 127.3s134.2-54.7 142.3-127.3c1-8.8 8.9-15.1 17.7-14.1s15.1 8.9 14.1 17.7zm-281.8-19.5V107.7C148.3 48.3 196.6 0 256 0s107.7 48.3 107.7 107.7v107.7c0 59.4-48.3 107.7-107.7 107.7s-107.7-48.3-107.7-107.7zm32 0c0 41.7 33.9 75.7 75.7 75.7s75.7-33.9 75.7-75.7V107.7C331.7 66 297.8 32 256 32s-75.7 33.9-75.7 75.7z'
              fill='#fff'
              opacity='1'
              data-original='#000000'
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Searchbar;
