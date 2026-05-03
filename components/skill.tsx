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
    category: 'Frontend Core',
    items: [
      { name: 'React 19' },
      { name: 'Next.js' },
      { name: 'Vite' },
      { name: 'React Native' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
    ],
  },
  {
    category: 'Styling & UI',
    items: [
      { name: 'Tailwind CSS v4' },
      { name: 'Material UI (MUI)' },
      { name: 'Ant Design' },
      { name: 'Bootstrap' },
    ],
  },
  {
    category: 'State & Data',
    items: [
      { name: 'Valtio' },
      { name: 'MobX' },
      { name: 'Redux' },
      { name: 'TanStack Query' },
      { name: 'Axios' },
    ],
  },
  {
    category: 'Libraries & Tools',
    items: [
      { name: 'Lexical Editor' },
      { name: 'Recharts' },
      { name: 'Formik' },
      { name: 'Yup' },
      { name: 'GIS Map' },
    ],
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'Node.js' },
      { name: 'NestJS' },
      { name: 'Express.js' },
      { name: 'Oracle' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'TypeORM' },
      { name: 'GraphQL' },
      { name: 'REST APIs' },
    ],
  },
  {
    category: 'AI & Modern Workflow',
    items: [
      { name: 'Antigravity' },
      { name: 'Codex' },
      { name: 'Cursor' },
      { name: 'Docker' },
      { name: 'Linux (Ubuntu VM)' },
      { name: 'Git (GitHub, GitLab)' },
      { name: 'Postman' },
    ],
  },
  {
    category: 'Collaboration',
    items: [
      { name: 'Jira' },
      { name: 'Figma' },
      { name: 'Miro' },
      { name: 'Bitwarden' },
    ],
  },
]

export default function Skill() {
  return (
    <div className='bg-transparent py-20 xl:px-[15rem]'>
      <div className='container mx-auto flex flex-col px-4'>
        <div className='flex items-center justify-center text-start text-2xl font-black uppercase text-slate-900 mb-16'>
          <p>Skills</p>
          <SkillIcon />
        </div>
        
        <div className='space-y-16'>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className='space-y-6'>
              <h3 className='text-xl font-bold text-teal-600 border-l-4 border-teal-500 pl-4'>
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
