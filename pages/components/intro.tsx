import React from 'react'

const assetPrefix = '/my-port'

export default function Intro() {
  return (
    <>
      <div className='h-screen w-screen bg-slate-800 text-slate-200'>
        <div className='py-4 px-8'>
          <div className='container mx-auto flex flex-col'>
            <div
              className='relative bg-cover bg-center bg-no-repeat'
              style={{
                backgroundImage: `url("/bg.png")`,
              }}
            >
              <img className='relative w-full' src='/16x9.png' alt='' />
              <div className='absolute top-[50%] left-[50%] flex w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center '>
                <img src={`${assetPrefix}/kin.png`} className='h-[8rem] w-[8rem] rounded-full' />
                <h3 className='mt-6 text-4xl font-extrabold text-slate-50'>Eik</h3>
                <p className='mt-6 text-center font-medium text-green-400'>Web Developer</p>
                <svg
                  className='mt-6 h-6 w-6 cursor-pointer text-slate-50'
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
                <div className='mt-6 items-center justify-center space-y-3'>
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
                  <div className='flex space-x-1 hover:text-green-400'>
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
                    <a
                      href='http://www.linkedin.com/in/thammajade'
                      target='_blank'
                      className='text-start text-slate-100 hover:text-green-400'
                    >
                      Linkedin
                    </a>
                  </div>
                  <div className='flex space-x-2 hover:text-green-400'>
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
                        d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      ></path>
                    </svg>
                    <a
                      href='https://github.com/Thammajade-eiktmj'
                      target='_blank'
                      className='text-start text-slate-100 hover:text-green-400'
                    >
                      Github
                    </a>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    window.open('eik.pdf')
                  }}
                  type='button'
                  className='mr-2 mb-2 mt-8 rounded-full bg-slate-700 px-5 py-3 text-center text-sm font-medium text-slate-50 hover:bg-green-400 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-green-400'
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
