import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className='flex items-center justify-around bg-slate-900 p-4 shadow sm:flex-col md:flex-col md:p-6'>
        <div className='text-sm text-slate-400 sm:text-center'>© 2022 . All Rights Reserved.</div>
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
      </footer>
    </>
  )
}
