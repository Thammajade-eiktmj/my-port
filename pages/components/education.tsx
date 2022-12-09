import React from 'react'

const assetPrefix = '/my-port'

export default function Education() {
  return (
    <>
      <div className='py-40 px-[40rem]'>
        <div className='container mx-auto flex flex-col'>
          <div className='flex items-center justify-center text-start text-2xl font-extrabold uppercase text-slate-700'>
            <p>Education</p>
            <svg
              className='ml-2 h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              ></path>
            </svg>
          </div>
          <ol className='relative mt-10 border-l border-gray-700'>
            <li className='mb-10 ml-4'>
              <div className='borderborder-gray-900 absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-700'></div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-400'>May 2023</time>
              <h3 className='text-lg font-semibold text-gray-900'>Bachelor's Degree</h3>
              <p className='text-base font-normal text-gray-500'>
                King Mongkut's University of Technology Thonburi (KMUTT)
              </p>
              <p className='text-base font-normal text-gray-500'>
                2019 - Present Bachelor of Science Faculty : School of Information Technology (SIT)
              </p>
              <p className='mb-4 text-base font-normal text-gray-500'>
                Department : Computer Science (English Program) (CS){' '}
              </p>
            </li>
            <li className='mb-10 ml-4'>
              <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-900 bg-gray-700'></div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-400'>
                April 2019
              </time>
              <h3 className='text-lg font-semibold text-gray-900'>High School</h3>
              <p className='text-base font-normal text-gray-500'>Korn Pitack Suksa School</p>
              <p className='text-base font-normal text-gray-500'>
                Major of mathematics and science
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}
