import React from 'react'

const assetPrefix = '/my-port'

export default function Intro() {
  return (
    <>
      <div className='h-screen w-screen bg-slate-800 text-slate-200'>
        <div className='py-4 px-8'>
          <div className='container mx-auto flex flex-col'>
            <div className='flex h-screen flex-col items-center justify-center'>
              <img src={`${assetPrefix}/kin.png`} className='h-[8rem] w-[8rem] rounded-full' />
              <h3 className='mt-4 text-4xl font-extrabold text-slate-50'>Eik</h3>
              <p className='mt-4 text-center font-medium text-green-400'>Junior Developer</p>
              <svg
                className='mt-4 h-6 w-6 cursor-pointer text-slate-50'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M19 9l-7 7-7-7'
                ></path>
              </svg>
              <div className='mt-4 items-center justify-center space-y-1'>
                <div className='flex space-x-1'>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    ></path>
                  </svg>
                  <p className='text-start text-slate-100'>Thammajade Lertwachara</p>
                </div>
                <div className='flex space-x-1'>
                  <svg
                    className='h-6 w-6'
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
                  <p className='text-start text-slate-100'>
                    Senior in Computer Science major at KMUTT
                  </p>
                </div>
                <div className='flex space-x-1'>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    ></path>
                  </svg>
                  <p className='text-start text-slate-100'>Thammajade-kewq@gmail.com</p>
                </div>
                <div className='flex space-x-1'>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                    ></path>
                  </svg>
                  <p className='text-start text-slate-100'>081-116-8836</p>
                </div>
                <div className='flex space-x-1'>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                    ></path>
                  </svg>
                  <p className='text-start text-slate-100'>www.linkedin.com/in/thammajade</p>
                </div>
              </div>
              <button
                type='button'
                className='mr-2 mb-2 mt-6 rounded-full bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-slate-50 hover:bg-green-400 hover:text-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-300'
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
