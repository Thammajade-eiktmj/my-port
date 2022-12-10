import React from 'react'
import Education from './components/education'
import Experience from './components/experience'
import Intro from './components/intro'
import Skill from './components/skill'

export default function Home() {
  return (
    <>
      <Intro />
      <Skill />
      <Experience />
      <Education />
    </>
  )
}
