import React, { useState } from 'react';
// import Logo from './../../assets/tailwind-css-logo.svg';
import { Link } from 'react-router-dom';

const Header = ({
  ...otherProps
}) => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <header className="font-bold">

      <div className='flex justify-between text-white px-16 mt-3 border-b'>
        <div className='text-sm'>Remaining Days To My Trip
          <div className='flex'>
            <div>
              <h6 className='text-center mx-1 text-base' style={{ color: 'rgb(255, 211, 77)' }}>10</h6>
              <p className='uppercase text-xs'>weeks</p>
            </div>
            <div className='text-center mx-1'>
              <h6 className='text-center mx-1 text-base' style={{ color: 'rgb(255, 211, 77)' }}>06</h6>
              <p className='uppercase text-xs'>days</p>
            </div>
            <div className='text-center mx-1'>
              <h6 className='text-center mx-1 text-base' style={{ color: 'rgb(255, 211, 77)' }}>45</h6>
              <p className='uppercase text-xs'>hours</p>
            </div>
            <div className='text-center mx-1'>
              <h6 className='text-center mx-1 text-base' style={{ color: 'rgb(255, 211, 77)' }}>25</h6>
              <p className='uppercase text-xs'>minutes</p>
            </div>
            <div className='text-center mx-1'>
              <h6 className='text-center mx-1 text-base' style={{ color: 'rgb(255, 211, 77)' }}>06</h6>
              <p className='uppercase text-xs'>seconds</p>
            </div>
          </div>
        </div>
        <div className='sm:grid md:flex md:mt-7 mb-9 text-sm'>
          My Trip |
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
          EN  (S)
        </div>
      </div>

    </header>

  );
};

export default Header;


