import React from 'react'
import SkillBox from './skillBox'
import SkillIcon from './icon/skillIcon'

interface Skills {
  id: string
  imgSrc: string
  name: string
}

const skills: Skills[] = [
  {
    id: '0',
    imgSrc: '/skills/ts.png',
    name: 'TypeScript',
  },
  {
    id: '1',
    imgSrc: '/skills/tw1.png',
    name: 'Tailwind',
  },
  {
    id: '2',
    imgSrc: '/skills/react.png',
    name: 'React',
  },
  {
    id: '3',
    imgSrc: '/skills/next.png',
    name: 'Next',
  },
  {
    id: '4',
    imgSrc: '/skills/nest.png',
    name: 'Nest',
  },
  {
    id: '5',
    imgSrc: '/skills/net.png',
    name: 'DotNext',
  },
  {
    id: '6',
    imgSrc: '/skills/typeorm.png',
    name: 'TypeOrm',
  },
  {
    id: '7',
    imgSrc: '/skills/docker.png',
    name: 'Docker',
  },
  {
    id: '8',
    imgSrc: '/skills/li.png',
    name: 'Linux',
  },
  {
    id: '8',
    imgSrc: '/skills/git.png',
    name: 'Git',
  },
]

export default function Skill() {
  return (
    <>
      <div className='px-52 py-40'>
        <div className='container mx-auto flex flex-col'>
          <div className='flex items-center justify-center text-start text-2xl font-extrabold uppercase'>
            <p>SKills</p>
            <SkillIcon />
          </div>
          <div className='mt-10 grid items-center justify-center gap-16 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 '>
            {skills.map((skill) => (
              <SkillBox key={skill.id} imgSrc={skill.imgSrc} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
