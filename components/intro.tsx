import React from 'react'

const assetPrefix = '/my-port'

export default function Intro() {
  return (
    <div className='bg-transparent bg-mesh relative flex min-h-screen w-screen flex-col items-center justify-center py-20 text-slate-600 overflow-hidden'>
      {/* Decorative background blur */}
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] -z-10 animate-pulse'></div>
      <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] -z-10 animate-pulse delay-700'></div>

      <div className='container mx-auto max-w-5xl px-6 relative'>
        <div className='flex flex-col items-center text-center'>
          {/* Profile Image with Glow */}
          <div className='group relative'>
            <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 opacity-20 blur transition duration-1000 group-hover:opacity-40'></div>
            <img
              src={`${assetPrefix}/kin.png`}
              className='relative h-48 w-48 rounded-full border-4 border-white object-cover shadow-xl transition-transform duration-500 group-hover:scale-[1.02]'
              alt='Profile'
            />
          </div>

          {/* Text Content */}
          <div className='mt-10 space-y-4'>
            <h1 className='text-6xl font-black tracking-tight text-slate-900 md:text-7xl drop-shadow-sm'>
              Thammajade
            </h1>
            <div className='flex items-center justify-center space-x-3'>
              <div className='h-px w-8 bg-slate-200'></div>
              <h3 className='bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-2xl font-bold text-transparent md:text-3xl tracking-wide'>
                Fullstack Developer
              </h3>
              <div className='h-px w-8 bg-slate-200'></div>
            </div>
            <p className='mx-auto mt-6 max-w-2xl text-lg font-normal leading-relaxed text-slate-500 md:text-xl'>
              Full-stack Developer with <span className='text-teal-600 font-semibold'>4 years</span> of experience, specialized in building complex
              enterprise systems with <span className='text-indigo-600'>React 19</span> and <span className='text-indigo-600'>Next.js</span>. Passionate about AI-driven workflows and
              scalable state management.
            </p>
          </div>

          {/* Quick Info Grid - Glassmorphism Light */}
          <div className='mt-16 grid w-full max-w-3xl grid-cols-1 gap-4 text-start md:grid-cols-2'>
            {[
              { icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', text: 'Thammajade Lertwachara' },
              { icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222', text: 'BS in Computer Science, KMUTT' },
              { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', text: 'Thammajade-kewq@gmail.com' },
              { icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', text: '081-116-8836' }
            ].map((info, i) => (
              <div key={i} className='group flex items-center space-x-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-teal-500/30 hover:shadow-md'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-teal-600 transition-colors group-hover:bg-teal-500/10'>
                  <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d={info.icon} />
                  </svg>
                </div>
                <span className='font-medium text-slate-600 group-hover:text-slate-900'>{info.text}</span>
              </div>
            ))}
          </div>

          {/* Social and Action */}
          <div className='mt-12 flex flex-col items-center gap-8 md:flex-row'>
            <div className='flex items-center gap-10'>
              <a
                href='http://www.linkedin.com/in/thammajade'
                target='_blank'
                rel='noreferrer'
                className='text-slate-400 transition-all duration-300 hover:text-indigo-600 hover:scale-110'
              >
                <span className='text-sm font-bold uppercase tracking-[0.2em]'>LinkedIn</span>
              </a>
              <a
                href='https://github.com/Thammajade-eiktmj'
                target='_blank'
                rel='noreferrer'
                className='text-slate-400 transition-all duration-300 hover:text-teal-600 hover:scale-110'
              >
                <span className='text-sm font-bold uppercase tracking-[0.2em]'>GitHub</span>
              </a>
            </div>

            <button
              onClick={() => window.open(`${assetPrefix}/cv_thammajade_developer.pdf`)}
              className='group relative flex items-center justify-center overflow-hidden rounded-2xl px-12 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-teal-500/20'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-indigo-600 to-teal-600 transition-all duration-300 group-hover:scale-110'></div>
              <span className='relative flex items-center gap-2'>
                Download CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
