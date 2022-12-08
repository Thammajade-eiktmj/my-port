import React from 'react'

const assetPrefix = '/my-port'

export default function Nav() {
  return (
    <>
      <nav className='mx-auto'>
        <div className='fixed flex  h-16 w-full items-center justify-around rounded-full border-b-4 border-slate-600'>
          <div className='flex flex-1 items-center justify-center'>
            <a
              href='#'
              className='block rounded-md px-3 py-2 font-medium text-slate-50 hover:text-green-400'
            >
              Home
            </a>

            <a
              href='#'
              className='block rounded-md px-3 py-2 font-medium text-slate-50 hover:text-green-400'
            >
              About
            </a>

            <a
              href='#'
              className='font-extramedium block rounded-md px-3 py-2 text-slate-50 hover:text-green-400'
            >
              Skill
            </a>
          </div>
          <div className='flex flex-shrink-0 cursor-pointer items-center'>
            <img className='block h-8 w-auto' src='/E.png' alt='my-name' />
            {/* <img className='block h-8 w-auto' src={`${assetPrefix}/E.png`} alt='my-name' /> */}
          </div>
          <div className='flex flex-1 items-center justify-center'>
            <a
              href='#'
              className='block rounded-md px-3 py-2 font-medium text-slate-50 hover:text-green-400'
            >
              Experience
            </a>
            <a
              href='#'
              className='block rounded-md px-3 py-2 font-medium text-slate-50 hover:text-green-400'
            >
              Certificate
            </a>
            <a
              href='#'
              className='block rounded-md px-3 py-2 font-medium text-slate-50 hover:text-green-400'
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
