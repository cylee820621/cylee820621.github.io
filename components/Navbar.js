import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [section, setSection] = useState();

  return (
    <div className='flex bg-white shadow-md justify-end'>
      <div className='hidden sm:block sm:ml-6'>
        <div className='flex space-x-4 mr-24 py-4'>
          <a
            href='#home'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
          >
            Home
          </a>
          <a
            href='#about'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
          >
            About
          </a>
          <a
            href='#project'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
          >
            Projects
          </a>
          <a
            href='#skills'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
          >
            Skills
          </a>
          <a
            href='#tools'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
          >
            Tools
          </a>
          <a
            href='#contact'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
