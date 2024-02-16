import React from 'react'
import Footer from './footer'
import Nav from './nav'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className='flex flex-col text-slate-800'>
        {/* <div>
          <Nav />
        </div> */}
        <main className='grow bg-slate-50'>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}
