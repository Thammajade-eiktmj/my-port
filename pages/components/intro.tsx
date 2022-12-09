import React from 'react'

export default function Intro() {
  return (
    <>
      <div className='h-screen w-screen bg-slate-800'>
        <div className='flex flex-col'>
          <div className='flex h-screen flex-col items-center justify-center'>
            <img src='/kin.png' className='h-[8rem] w-[8rem] rounded-full' />
            <h3 className='mt-4 text-4xl font-extrabold text-slate-50 '>Eik</h3>
            <p className='mt-4 text-center font-medium text-green-400'>Junior Developer</p>
            <svg
              className='mt-4 h-6 w-6 text-slate-50 cursor-pointer'
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
          </div>
        </div>
      </div>
    </>
  )
}
