import React from 'react';

export default function About() {
  return (
    <section id='about'>
      <div className='container px-4 flex py-12 md:p-6 lg:px-24 lg:py-10 xl:px-28 xl:py-20 lg:flex-row flex-col items-center md:mt-20'>
        <div className='lg:flex-grow md:w-full lg:pr-24 flex flex-col md:items-center md:text-center lg:items-start lg:text-left mb-16 md:mb-8 items-start text-left'>
          <h1 className='title-font font-extrabold tracking-tight md:text-6xl text-4xl xl:text-6xl mb-4 text-white'>
            <span className='block md:mb-1 lg:mb-0'>Jon Gill</span>
            <span className='block text-green-400'>Front End Developer</span>
          </h1>
          <p className='mb-8 text-xl font-semibold md:px-10 lg:px-0'>
            Former Senior Retail Buyer. Relocated to Ireland from Sheffield, UK.
            Passionate about tech and the increasing role it plays in our lives.
          </p>
          <div className='flex justify-center'>
            <a
              href='#contact'
              className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
            >
              Contact Me
            </a>
            <a
              href='#projects'
              className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'
            >
              My Projects
            </a>
          </div>
        </div>
        <div className='lg:max-w-lg md:w-full px-4 md:px-20 md:py-20 lg:p-0'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src='./coding.svg'
          />
        </div>
      </div>
    </section>
  );
}
