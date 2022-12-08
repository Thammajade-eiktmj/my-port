import React from 'react'
import Intro from './components/intro'
import About from './components/about'
import Nav from './layout/nav'

export default function Home() {
  return (
    <>
      <div className='h-screen w-screen bg-slate-800'></div>

      <Nav />
      <div className='mx-12'>
        <Intro />
        <About />
      </div>
    </>
  )
}
