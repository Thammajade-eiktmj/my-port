import React from 'react'

const assetPrefix = '/my-port'

export default function Nav() {
  return (
    <nav className='fixed top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md px-6 py-4'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        <a href='#' className='flex items-center group'>
          <div className='bg-gradient-to-r from-sky-400 to-emerald-600 p-0.5 rounded-lg transition-transform group-hover:scale-110'>
            <div className='bg-slate-900 rounded-[6px] p-1'>
               <img src={`${assetPrefix}/E.png`} className='h-8 w-8' alt='Logo' />
            </div>
          </div>
        </a>
        
        <div className='hidden md:block'>
          <ul className='flex items-center space-x-10 text-sm font-bold uppercase tracking-widest'>
            <li>
              <a href='#' className='text-slate-400 hover:text-emerald-400 transition-colors'>Home</a>
            </li>
            <li>
              <a href='#skills' className='text-slate-400 hover:text-emerald-400 transition-colors'>Skills</a>
            </li>
            <li>
              <a href='#experience' className='text-slate-400 hover:text-emerald-400 transition-colors'>Experience</a>
            </li>
            <li>
              <a href='#education' className='text-slate-400 hover:text-emerald-400 transition-colors'>Education</a>
            </li>
            <li>
              <a href='#projects' className='text-slate-400 hover:text-emerald-400 transition-colors'>Projects</a>
            </li>
          </ul>
        </div>

        <button
          type='button'
          className='inline-flex md:hidden h-10 w-10 items-center justify-center rounded-xl p-2 text-slate-400 hover:bg-slate-800 transition-colors'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}
