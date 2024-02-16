import React from 'react'

const assetPrefix = '/my-port'

export default function Nav() {
  return (
    <nav className='fixed z-40 w-full border-gray-200 bg-white px-2 py-3 dark:bg-gray-900'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <a href='' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img src={`${assetPrefix}/E.png`} className='mr-3 h-6 sm:h-9' />
        </a>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='h-5 w-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900'>
            <li>
              <a
                href='#'
                className='block rounded py-2 pl-3 pr-4 text-base font-semibold text-slate-500 hover:text-sky-400 md:border-0 md:p-0'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded py-2 pl-3 pr-4 text-base font-semibold text-gray-500 hover:text-sky-400 md:border-0 md:p-0'
              >
                Skill
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded py-2 pl-3 pr-4 text-base font-semibold text-gray-500 hover:text-sky-400 md:border-0 md:p-0'
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded py-2 pl-3 pr-4 text-base font-semibold text-gray-500 hover:text-sky-400 md:border-0 md:p-0'
              >
                Education
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded py-2 pl-3 pr-4 text-base font-semibold text-gray-500 hover:text-sky-400 md:border-0 md:p-0'
              >
                Certificate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
