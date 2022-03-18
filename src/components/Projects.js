import { CodeIcon } from '@heroicons/react/solid';
import React from 'react';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id='projects' className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 md:px-3 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <CodeIcon className='mx-auto inline-block w-10 mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
            My Projects
          </h1>
          <p className='md:w-1/2 mx-auto leading-relaxed text-base'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div class='p-0 md:p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
          {projects.map((project) => (
            <div className='rounded-2xl overflow-hidden shadow-lg bg-gray-800 p-0'>
              <img
                className='w-full h-48'
                src={project.image}
                alt={project.title}
              />
              <div className='px-6 py-6 text-left'>
                <div className='font-normal tracking-wider text-lg text-green-400 mb-2'>
                  <a
                    href={project.link}
                    className='hover:text-green-500'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {project.title}
                  </a>
                </div>
                <div className='font-medium text-white text-xl mb-2'>
                  <a
                    href={project.link}
                    className='hover:text-gray-400'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {project.subtitle}
                  </a>
                </div>
                <p className='leading-relaxed'>{project.description}</p>
              </div>
              <div class='px-6 pt-4 pb-2 flex justify-center text-white space-x-4 mb-3'>
                <a
                  href={project.github}
                  className='hover:text-green-500'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg
                    className='w-10 h-10'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 23 23'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a
                  href={project.link}
                  className='hover:text-green-500'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-9 w-9'
                    fill='none'
                    viewBox='0 0 23 23'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                    />
                  </svg>
                </a>
              </div>
            </div>

            // <a
            //   href={project.link}
            //   key={project.id}
            //   className='sm:w-1/2 lg:w-1/3 w-100 p-3 md:p-2'
            //   target='_blank'
            //   rel='noreferrer'
            // >
            //   <div className='flex relative lg:p-0'>
            //     <img
            //       alt='gallery'
            //       className='absolute inset-0 w-full h-full object-cover object-center'
            //       src={project.image}
            //     />
            //     <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>
            //       <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
            //         {project.subtitle}
            //       </h2>
            //       <h1 className='title-font text-lg font-medium text-white mb-3'>
            //         {project.title}
            //       </h1>
            //       <p className='leading-relaxed'>{project.description}</p>
            //     </div>
            //   </div>
            // </a>
          ))}
        </div>
      </div>
    </section>
  );
}
