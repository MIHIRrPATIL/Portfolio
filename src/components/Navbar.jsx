import { Button } from 'bootstrap';
import React from 'react';

function Navbar() {
  return (
    <div className='flex items-center justify-around      p-4'>
      <div className='text-center'>
        <p className='self-center'>name</p>
      </div>
      <div className='p-6'>
        <ul className='flex'>
          <li className='p-2'>Home</li>
          <li className='p-2'>About</li>
          <li className='p-2'>Services</li>
          <li className='p-2'>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
