import React from 'react'

const assetPrefix = '/my-port'

export default function Nav() {
  return (
    <>
      <nav className='mx-auto'>
        <div className='relative flex h-16 w-full items-center justify-around'>
          <div className='flex flex-1 items-center justify-center'>
            <a
              href='#'
              className='block rounded-md px-3 py-2 font-light text-[#C89B6F] hover:text-white'
            >
              Home
            </a>

            <a
              href='#'
              className='block rounded-md px-3 py-2 font-light text-[#C89B6F] hover:text-white'
            >
              Experience
            </a>

            <a
              href='#'
              className='block rounded-md px-3 py-2 font-extralight text-[#C89B6F] hover:text-white'
            >
              Tech stack
            </a>
          </div>
          <div className='flex flex-shrink-0 cursor-pointer items-center'>
            {/* <img className='block h-8 w-auto' src='/E.png' alt='my-name' /> */}
            <img className='block h-8 w-auto' src={`${assetPrefix}/E.png`} alt='my-name' />
          </div>
          <div className='flex flex-1 items-center justify-center'>
            <a
              href='#'
              className='block rounded-md px-3 py-2 font-light text-[#C89B6F] hover:text-white'
            >
              Resume
            </a>
            <a
              href='#'
              className='block rounded-md px-3 py-2 font-light text-[#C89B6F] hover:text-white'
            >
              Certificate
            </a>
            <a
              href='#'
              className='block rounded-md px-3 py-2 font-light text-[#C89B6F] hover:text-white'
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
