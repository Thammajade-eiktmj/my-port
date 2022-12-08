import React from 'react'

export default function Intro() {
  return (
    <>
      <div className='py-4 px-8'>
        <div className='container mx-auto flex flex-col'>
          <div className='absolute top-[50%] left-[50%] flex w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center bg-slate-800 '>
            <img src='/laptop.png' className='h-[40px]' />
            <h3 className='mt-4 text-4xl font-extrabold text-slate-50 '>Eikkew</h3>
            <p className='mt-4 text-center font-medium text-green-400'>I'm Front-end Developer</p>
            <p className='mt-4 text-center font-medium text-slate-50'>
              Senior in Computer Science major at KMUTT
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
