import React from 'react'
import Education from './components/education'
import Experience from './components/experience'
import Intro from './components/intro'
import Skill from './components/skill'
import Projects from './components/projects'

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <Skill />
      <Experience />
      <Education />
    </>
  )
}
