import React from 'react'
import Intro from './components/intro'
import Nav from './components/nav'

export default function Home() {
  return (
    <>
      <div className='relative h-screen w-screen'>
        <span className='circle absolute -z-10'></span>
        <div className='space-x-20 mx-20 my-4 space-y-10'>
          <div className='z-20'>
            <Nav />
          </div>
          <div className='z-10'>
            <Intro />
          </div>
        </div>
      </div>
    </>
  )
}
