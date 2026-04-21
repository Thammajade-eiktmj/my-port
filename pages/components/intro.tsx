import React from 'react'

const assetPrefix = '/my-port'

export default function Intro() {
  return (
    <div className='min-h-screen w-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center py-20'>
      <div className='container mx-auto px-6 max-w-5xl'>
        <div className='flex flex-col items-center text-center'>
          {/* Profile Image with Glow */}
          <div className='relative group'>
            <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 to-emerald-600 opacity-20 blur transition duration-1000 group-hover:opacity-50'></div>
            <img
              src={`${assetPrefix}/kin.png`}
              className='relative h-48 w-48 rounded-full border-4 border-slate-800 object-cover shadow-2xl'
              alt='Profile'
            />
          </div>

          {/* Text Content */}
          <div className='mt-10 space-y-4'>
            <h1 className='text-6xl md:text-7xl font-extrabold tracking-tight text-slate-50'>
              Thammajade
            </h1>
            <h3 className='text-2xl md:text-3xl bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text font-bold text-transparent'>
              Fullstack Developer
            </h3>
            <p className='mt-6 text-lg md:text-xl font-light leading-relaxed text-slate-400 max-w-2xl mx-auto'>
              Motivated developer eager to gain experience, contribute to challenging projects,
              and deliver high-quality work in a team environment.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-start max-w-2xl w-full'>
            <div className='flex items-center space-x-4 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50'>
              <svg className='h-6 w-6 text-emerald-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
              </svg>
              <span className='font-medium text-slate-300'>Thammajade Lertwachara</span>
            </div>
            <div className='flex items-center space-x-4 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50'>
              <svg className='h-6 w-6 text-emerald-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path d='M12 14l9-5-9-5-9 5 9 5z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222' />
              </svg>
              <span className='font-medium text-slate-300'>BS in Computer Science, KMUTT</span>
            </div>
            <div className='flex items-center space-x-4 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50'>
              <svg className='h-6 w-6 text-emerald-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
              </svg>
              <span className='font-medium text-slate-300'>Thammajade-kewq@gmail.com</span>
            </div>
            <div className='flex items-center space-x-4 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50'>
              <svg className='h-6 w-6 text-emerald-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
              </svg>
              <span className='font-medium text-slate-300'>081-116-8836</span>
            </div>
          </div>

          {/* Social and Action */}
          <div className='mt-12 flex flex-col md:flex-row items-center gap-8'>
            <div className='flex items-center gap-8'>
              <a
                href='http://www.linkedin.com/in/thammajade'
                target='_blank'
                rel='noreferrer'
                className='text-slate-400 hover:text-emerald-400 transition-colors duration-300'
              >
                <span className='text-sm font-bold uppercase tracking-widest'>LinkedIn</span>
              </a>
              <a
                href='https://github.com/Thammajade-eiktmj'
                target='_blank'
                rel='noreferrer'
                className='text-slate-400 hover:text-emerald-400 transition-colors duration-300'
              >
                <span className='text-sm font-bold uppercase tracking-widest'>GitHub</span>
              </a>
            </div>

            <button
              onClick={() => window.open(`${assetPrefix}/eik.pdf`)}
              className='relative group flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 rounded-2xl overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-sky-500 to-emerald-600 transition-all duration-300 group-hover:scale-110'></div>
              <span className='relative'>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
