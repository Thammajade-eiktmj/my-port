import React from 'react'
import Certificate from './components/certificate'
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
      <Certificate />
    </>
  )
}
