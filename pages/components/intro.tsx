import React from 'react'

export default function Intro() {
  return (
    <>
      <div className='h-screen w-screen bg-slate-800'>
        <div className='flex flex-col'>
          <div className='flex h-screen flex-col items-center justify-center'>
            <img src='/laptop.png' className='h-[40px]' />
            <h3 className='mt-4 text-4xl font-extrabold text-slate-50 '>Eikkew</h3>
            <p className='mt-4 text-center font-medium text-green-400'>I'm Front-end Developer</p>
          </div>
        </div>
      </div>
    </>
  )
}
