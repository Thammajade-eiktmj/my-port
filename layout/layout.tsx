import React from 'react'
import Footer from './footer'
import Nav from './nav'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className='flex flex-col text-slate-200 bg-slate-950 min-h-screen'>
        {/* <Nav /> */}
        <main className='grow'>{children}</main>
        <Footer />
      </div>
    </>
  )
}
