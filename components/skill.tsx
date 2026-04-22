import React from 'react'
import SkillBox from './skillBox'
import SkillIcon from './icon/skillIcon'

interface Skill {
  name: string
}

interface SkillCategory {
  category: string
  items: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'React Native' },
      { name: 'Tailwind CSS' },
      { name: 'Material UI' },
      { name: 'Ant Design' },
      { name: 'TanStack Query' },
      { name: 'Valtio' },
      { name: 'Recharts' },
      { name: 'Lexical' },
      { name: 'Formik' },
      { name: 'Yup' },
      { name: 'Axios' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'NestJS' },
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'TypeORM' },
      { name: 'REST APIs' },
    ],
  },
  {
    category: 'Infra & Development',
    items: [
      { name: 'Docker' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitLab' },
      { name: 'Linux' },
      { name: 'VS Code' },
      { name: 'Postman' },
      { name: 'Antigravity' },
    ],
  },
  {
    category: 'Collaboration',
    items: [
      { name: 'Jira' },
      { name: 'Figma' },
      { name: 'Miro' },
      { name: 'Discord' },
    ],
  },
]

export default function Skill() {
  return (
    <div className='bg-slate-900/50 py-20 xl:px-[15rem]'>
      <div className='container mx-auto flex flex-col px-4'>
        <div className='flex items-center justify-center text-start text-2xl font-extrabold uppercase text-slate-100 mb-16'>
          <p>Skills</p>
          <SkillIcon />
        </div>
        
        <div className='space-y-16'>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className='space-y-6'>
              <h3 className='text-xl font-bold text-emerald-400 border-l-4 border-emerald-500 pl-4'>
                {cat.category}
              </h3>
              <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
                {cat.items.map((skill, sIdx) => (
                  <SkillBox key={sIdx} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
