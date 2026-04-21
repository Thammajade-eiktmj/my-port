import React from 'react'

const assetPrefix = '/my-port'

export default function Education() {
  return (
    <div className='py-20 xl:px-[15rem] bg-slate-950'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-12 xl:grid-cols-2'>
          {/* Education Section */}
          <div className='flex flex-col'>
            <div className='flex items-center justify-center text-2xl font-extrabold uppercase text-slate-100 mb-10'>
              <p>Education</p>
              <svg className='ml-3 h-6 w-6 text-emerald-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'></path>
              </svg>
            </div>
            <div className='rounded-2xl bg-slate-900/50 p-8 shadow-xl border border-slate-800'>
              <ol className='relative border-l border-emerald-500/30 ml-3'>
                <li className='mb-10 ml-6'>
                  <div className='absolute -left-[1.65rem] mt-1.5 h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]'></div>
                  <time className='mb-1 text-sm font-semibold text-emerald-400'>2019 - 2023</time>
                  <h3 className='text-xl font-bold text-slate-100 mt-1'>Bachelor of Science</h3>
                  <p className='text-slate-300 font-medium'>King Mongkut's University of Technology Thonburi</p>
                  <p className='text-slate-400 text-sm mt-2'>Department: Computer Science (English Program)</p>
                </li>
                <li className='mb-2 ml-6'>
                  <div className='absolute -left-[1.65rem] mt-1.5 h-4 w-4 rounded-full bg-slate-700'></div>
                  <time className='mb-1 text-sm font-semibold text-slate-500'>April 2019</time>
                  <h3 className='text-xl font-bold text-slate-100 mt-1'>High School</h3>
                  <p className='text-slate-300 font-medium'>Korn Pitack Suksa School</p>
                  <p className='text-slate-400 text-sm mt-2'>Major of Mathematics and Science</p>
                </li>
              </ol>
            </div>
          </div>

          {/* Certificate Section */}
          <div className='flex flex-col'>
            <div className='flex items-center justify-center text-2xl font-extrabold uppercase text-slate-100 mb-10'>
              <p>Certificates</p>
              <svg className='ml-3 h-6 w-6 text-emerald-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'></path>
              </svg>
            </div>
            <div className='rounded-2xl bg-slate-900/50 p-8 shadow-xl border border-slate-800'>
              <ol className='relative border-l border-emerald-500/30 ml-3'>
                <li className='mb-10 ml-6'>
                  <div className='absolute -left-[1.65rem] mt-1.5 h-4 w-4 rounded-full bg-emerald-500'></div>
                  <time className='mb-1 text-sm font-semibold text-emerald-400'>2023</time>
                  <h3 className='text-xl font-bold text-slate-100 mt-1'>NVIDIA DLI</h3>
                  <p className='text-slate-400 text-sm mt-1'>Foundation of Deep Learning</p>
                  <button onClick={() => window.open(`${assetPrefix}/cer3.png`)} className='mt-3 text-emerald-400 text-sm font-bold hover:underline py-1'>View Certificate</button>
                </li>
                <li className='mb-10 ml-6'>
                  <div className='absolute -left-[1.65rem] mt-1.5 h-4 w-4 rounded-full bg-slate-700'></div>
                  <time className='mb-1 text-sm font-semibold text-slate-500'>January 2022</time>
                  <h3 className='text-xl font-bold text-slate-100 mt-1'>Kaggle</h3>
                  <p className='text-slate-400 text-sm mt-1'>Introduction to Machine Learning</p>
                  <button onClick={() => window.open(`${assetPrefix}/cer2.png`)} className='mt-3 text-emerald-400 text-sm font-bold hover:underline py-1'>View Certificate</button>
                </li>
                <li className='mb-2 ml-6'>
                  <div className='absolute -left-[1.65rem] mt-1.5 h-4 w-4 rounded-full bg-slate-700'></div>
                  <time className='mb-1 text-sm font-semibold text-slate-500'>October 2021</time>
                  <h3 className='text-xl font-bold text-slate-100 mt-1'>CITI Program</h3>
                  <p className='text-slate-400 text-sm mt-1'>Human Subjects Research (HSR) Basic Course</p>
                  <button onClick={() => window.open(`${assetPrefix}/cer1.pdf`)} className='mt-3 text-emerald-400 text-sm font-bold hover:underline py-1'>View Certificate</button>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
