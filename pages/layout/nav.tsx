import React from 'react'

const assetPrefix = '/my-port'

export default function Nav() {
  return (
    <>
      <nav className='fixed w-full border-b-[1px] border-gray-500 bg-slate-800 px-2 py-2.5 sm:px-4'>
        <div className='container mx-auto flex flex-wrap items-center justify-around'>
          <img src={`${assetPrefix}/E.png`} className='mr-3 h-6 sm:h-9' />
          <ul className='mt-4 flex flex-col space-x-8 bg-slate-800 p-4 md:mt-0 md:flex-row md:text-sm md:font-medium'>
            <li>
              <a
                href='#'
                className='block rounded py-2 pl-3 pr-4 text-base font-semibold text-green-400 hover:text-green-400 md:border-0 md:p-0'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded py-2 pl-3 pr-4 text-base font-semibold text-slate-50 hover:text-green-400 md:border-0 md:p-0'
              >
                Skill
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded py-2 pl-3 pr-4 text-base font-semibold text-gray-50 hover:text-green-400 md:border-0 md:p-0'
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded py-2 pl-3 pr-4 text-base font-semibold text-gray-50 hover:text-green-400 md:border-0 md:p-0'
              >
                Education
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded py-2 pl-3 pr-4 text-base font-semibold text-gray-50 hover:text-green-400 md:border-0 md:p-0'
              >
                Certificate
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
