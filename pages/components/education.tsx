import React from 'react'

const assetPrefix = '/my-port'

export default function Education() {
  return (
    <>
      <div className='px-[15rem] py-40'>
        <div className='flex items-center justify-around'>
          <div className='container mx-auto'>
            <div className='flex flex-col'>
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
              <div className='mt-10 items-center justify-center rounded-[10px] bg-white p-16 shadow'>
                <ol className='relative border-l border-gray-700'>
                  <li className='mb-10 ml-4'>
                    <div className='borderborder-gray-900 absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-700'></div>
                    <time className='mb-1 text-sm font-normal leading-none text-gray-400'>
                      May 2023
                    </time>
                    <h3 className='text-lg font-semibold text-gray-900'>Bachelor's Degree</h3>
                    <p className='text-base font-normal text-gray-500'>
                      King Mongkut's University of Technology Thonburi (KMUTT)
                    </p>
                    <p className='text-base font-normal text-gray-500'>
                      2019 - Present Bachelor of Science Faculty : School of Information Technology
                      (SIT)
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
          </div>
          <div className='container mx-auto flex flex-col'>
            <div className=''>
              <div className='flex items-center justify-center text-start text-2xl font-extrabold uppercase text-slate-700'>
                <p>CertiFicate</p>
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
            </div>
            <div className='ml-20 mt-10 items-center justify-center rounded-[10px] bg-white p-16 shadow'>
              <ol className='relative border-l border-gray-700'>
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
                    Human Subjects Research (HSR) (Curriculum Group) BioMed-Social Sci for Bachelor
                    and Master Students (HSR) (Course Learner Group){' '}
                  </p>
                  <a className='cursor-pointer font-semibold underline'>View</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
