import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className='grid bg-slate-900 p-4 shadow sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
        <div className='text-sm text-slate-400 sm:text-center'>© 2022 . All Rights Reserved.</div>
        <div>
          <ul className='mt-3 flex flex-wrap items-center text-sm text-slate-400 sm:mt-0'>
            <li>
              <p className='mr-4 text-slate-400 hover:underline md:mr-6'>
                Email: Thammajade.kewq@gmail.com
              </p>
            </li>
            <li>
              <p className='mr-4 text-slate-400 hover:underline md:mr-6'>Tel: 081-116-8836</p>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
