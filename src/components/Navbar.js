import { ArrowRightIcon } from '@heroicons/react/solid';
import { HiMenu, HiX } from 'react-icons/hi';
import React, { useState } from 'react';

export default function Navbar({ scrollTo }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className='md:flex justify-between items-center bg-gray-800 sticky top-0 z-10'>
      <div className='container flex justify-between items-center'>
        <li
          onClick={() => {
            scrollTo('#about');
          }}
          className='ml-3 text-3xl tracking-widest title-font font-medium text-white mt-4
           mb-4 md:mb-0 list-none'
        >
          JG
        </li>

        {showNav ? (
          <HiX
            onClick={() => setShowNav(!showNav)}
            className='md:hidden block w-12 h-12 p-2 cursor-pointer'
          />
        ) : (
          <HiMenu
            onClick={() => setShowNav(!showNav)}
            className='md:hidden block w-12 h-12 p-2 cursor-pointer'
          />
        )}

        <ul
          className={
            (showNav ? 'left-0' : '-left-full') +
            ' md:static text-3xl md:text-xl p-8 font-semibold fixed bottom-0 top-0 md:flex md:space-x-7 items-center md:bg-transparent bg-gray-900 bg-opacity-95 md:w-auto w-10/12 md:text-gray-500 text-white md:space-y-0 space-y-5 transition-left'
          }
        >
          <li
            className='mr-5 hover:text-white'
            onClick={() => {
              scrollTo('#projects');
              setShowNav(false);
            }}
          >
            Projects
          </li>
          <li
            className='mr-5 hover:text-white'
            onClick={() => {
              scrollTo('#skills');
              setShowNav(false);
            }}
          >
            Skills
          </li>
          <li
            className='mr-5 hover:text-white'
            onClick={() => {
              scrollTo('#testimonials');
              setShowNav(false);
            }}
          >
            Testimonials
          </li>
          <li
            href='https://github.com/jpg6453'
            className='mr-5 hover:text-white'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </li>
        </ul>
        <li
          className='inline-flex items-center hidden bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'
          onClick={() => {
            scrollTo('#contact');
          }}
        >
          Contact Me
          <ArrowRightIcon className='w-4 h-4 ml-1' />
        </li>
      </div>
    </header>
  );
}
