import React from 'react'

const assetPrefix = '/my-port'

export default function Intro() {
  return (
    <>
      <div className='h-auto w-screen bg-gradient-to-tr from-slate-800 via-slate-900 to-slate-900 text-slate-200'>
        <div className='lg:px-[15rem] xl:px-[15rem]'>
          <div className='xs:content-center xs:justify-items-center grid sm:grid-cols-1 md:h-screen md:grid-cols-1 md:content-center md:justify-items-center lg:grid-cols-2 xl:h-screen xl:grid-cols-2'>
            <div className='place-self-center'>
              <div className='box mt-10'>
                <div
                  className='inner'
                  style={{
                    backgroundImage: `url(${assetPrefix}/iphone/ip1.png)`,
                  }}
                >
                  <div className='island'></div>
                </div>
                <i className='btn'></i>
                <i className='btn btn2'></i>
                <i className='btn btn3'></i>
                <i className='rightbutton'></i>
              </div>
            </div>
            <div className='rounded-[10px] p-10'>
              <div className='flex flex-col items-center justify-center'>
                <img src={`${assetPrefix}/kin.png`} className='h-[8rem] w-[8rem] rounded-full' />
                <h3 className='mt-6 text-4xl font-extrabold text-slate-50'>Eik</h3>
                <span className='mt-6 bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text font-semibold text-transparent'>
                  Web Developer
                </span>
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
                  className='group relative z-10 mt-6 mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-sky-400 to-emerald-600 p-0.5 text-sm font-medium text-slate-50 shadow-2xl shadow-slate-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-800 group-hover:from-green-400 group-hover:to-blue-600'
                >
                  <span className='relative rounded-md bg-slate-900 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0'>
                    Download CV
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
