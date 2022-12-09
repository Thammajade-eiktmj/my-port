import React from 'react'

const assetPrefix = '/my-port'

export default function Certificate() {
  return (
    <>
      <div className='py-40 px-[40rem]'>
        <div className='container mx-auto flex flex-col'>
          <div className='flex items-center justify-center text-start text-2xl font-extrabold uppercase text-slate-700'>
            <p>Certificate</p>
            <svg
              className='ml-2 h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'
              ></path>
            </svg>
          </div>
          <ol className='relative mt-10 border-l border-gray-700'>
            <li className='mb-10 ml-4'>
              <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-900 bg-gray-700'></div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-400'>
                January 2022
              </time>
              <h3 className='text-lg font-semibold text-gray-900'>Kaggle</h3>
              <p className='text-base font-normal text-gray-500'>Intro to Machine learning</p>
              <a className='cursor-pointer font-semibold underline'>View</a>
            </li>
            <li className='mb-10 ml-4'>
              <div className='borderborder-gray-900 absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-700'></div>
              <time className='mb-1 text-sm font-normal leading-none text-gray-400'>
                October 2021
              </time>
              <h3 className='text-lg font-semibold text-gray-900'>CITI Program course</h3>
              <p className='text-base font-normal text-gray-500'>
                Human Subjects Research (HSR) (Curriculum Group) BioMed-Social Sci for Bachelor and
                Master Students (HSR) (Course Learner Group){' '}
              </p>
              <a className='cursor-pointer font-semibold underline'>View</a>
            </li>
          </ol>
        </div>
      </div>{' '}
    </>
  )
}
