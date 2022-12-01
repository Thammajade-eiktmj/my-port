import React from 'react'

export default function Nav() {
  return (
    <>
      <nav className=''>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex flex-shrink-0 items-center'>
                <img className='block h-8 w-auto' src='/E.png' alt='my-name' />
              </div>
              <div className='hidden sm:ml-6 sm:block'>
                <div className='flex space-x-4'>
                  <a
                    href='#'
                    className='rounded-md px-3 py-2 text-sm font-medium text-[#C89B6F] hover:bg-gray-700 hover:text-white'
                  >
                    Experience
                  </a>

                  <a
                    href='#'
                    className='rounded-md px-3 py-2 text-sm font-medium text-[#C89B6F] hover:bg-gray-700 hover:text-white'
                  >
                    Profile
                  </a>

                  <a
                    href='#'
                    className='rounded-md px-3 py-2 text-sm font-medium text-[#C89B6F] hover:bg-gray-700 hover:text-white'
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
