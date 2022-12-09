import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className='rounded-lg bg-slate-800 p-4 shadow md:flex md:items-center md:justify-between md:p-6'>
        <span className='text-sm text-slate-400 sm:text-center'>© 2022 . All Rights Reserved.</span>
        <ul className='mt-3 flex flex-wrap items-center text-sm text-slate-400 sm:mt-0'>
          <li>
            <p className='mr-4 hover:underline md:mr-6 text-slate-400'>Email: Thammajade.kewq@gmail.com</p>
          </li>
          <li>
            <p className='mr-4 hover:underline md:mr-6 text-slate-400'>Tel: 081-116-8836</p>
          </li>
        </ul>
      </footer>
    </>
  )
}
