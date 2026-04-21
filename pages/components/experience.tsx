import React from 'react'

interface Experience {
  id: string
  company: string
  role: string
  period: string
  duration: string
  description: string
}

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Innovasive',
    role: 'Frontend Developer',
    period: 'Nov 2024 - May 2026',
    duration: '1 Yr 6 Mos',
    description: 'Developed and maintained high-scale digital transformation platforms and financial systems.',
  },
  {
    id: '2',
    company: 'Nextzy',
    role: 'Fullstack Developer',
    period: 'May 2024 - Aug 2024',
    duration: '4 Mos',
    description: 'Contributed to fullstack development projects using modern web technologies.',
  },
  {
    id: '3',
    company: 'Devcula',
    role: 'Frontend Developer',
    period: 'Jan 2023 - Jan 2024',
    duration: '1 Yr',
    description:
      'Excelled in crafting web and mobile applications, notably contributing to a crypto trading platform and a blockchain-based voting website.',
  },
  {
    id: '4',
    company: 'Ookbee U (Intern)',
    role: 'Fullstack Developer',
    period: 'Jun 2022 - Dec 2022',
    duration: '7 Mos',
    description:
      'Worked on career projects, implementing JWT authentication, reset password flows, and complex job search filters.',
  },
]

import ExperienceIcon from './icon/experienceIcon'
import ExperienceBox from './experienceBox'

export default function Experience() {
  return (
    <div id='experience' className='py-32 xl:px-[15rem] bg-slate-950'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col items-center justify-center mb-20'>
          <div className='flex items-center text-2xl font-extrabold uppercase text-slate-100 tracking-widest'>
            <p>Professional Experience</p>
            <ExperienceIcon />
          </div>
          <div className='mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20'>
             <span className='text-slate-400 text-sm font-medium'>Total Experience:</span>
             <span className='text-emerald-400 text-sm font-black'>3 Years 5 Months</span>
          </div>
        </div>

        <div className='max-w-4xl mx-auto'>
          {experiences.map((experience, index) => (
            <ExperienceBox
              key={experience.id}
              title={experience.company}
              position={experience.role}
              period={experience.period}
              duration={experience.duration}
              description={experience.description}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
