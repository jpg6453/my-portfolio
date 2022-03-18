import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';

export default function Navbar() {
  const scrollTo = (elementId) => {
    const anchor = document.querySelector(elementId);
    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };
  return (
    <header className='bg-gray-800 md:sticky top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a
          href='#about'
          className='ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0'
        >
          Jon Gill
        </a>

        <nav className='md:mr-auto md:ml-4 md:py-2 md:pl-4 md:border-l md:border-green-800	flex flex-wrap items-center text-base justify-center'>
          <a
            className='mr-5 hover:text-white'
            onClick={() => {
              scrollTo('#projects');
            }}
          >
            Projects
          </a>
          <a
            className='mr-5 hover:text-white'
            onClick={() => {
              scrollTo('#skills');
            }}
          >
            Skills
          </a>
          <a
            className='mr-5 hover:text-white'
            onClick={() => {
              scrollTo('#testimonials');
            }}
          >
            Testimonials
          </a>
          <a
            href='https://github.com/jpg6453'
            className='mr-5 hover:text-white'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </nav>
        <a
          className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'
          onClick={() => {
            scrollTo('#contact');
          }}
        >
          Contact Me
          <ArrowRightIcon className='w-4 h-4 ml-1' />
        </a>
      </div>
    </header>
  );
}
