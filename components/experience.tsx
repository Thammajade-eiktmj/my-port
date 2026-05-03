import React from 'react'

interface Experience {
  id: string
  company: string
  companyDescription: string
  role: string
  period: string
  duration: string
  highlights: string[]
}

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Innovasive',
    companyDescription: 'A leading digital transformation agency specializing in high-performance enterprise solutions.',
    role: 'Frontend Developer',
    period: 'Nov 2024 - Present',
    duration: '1 Yr 6 Mos',
    highlights: [
      'Built an enterprise Electronic Document Management Portal (EDMS) with complex approval workflows, digital signatures, and QR verification.',
      'Developed a Provident Fund Management Application with a multi-step onboarding flow and interactive risk assessment.',
      'Developed an Enterprise Lab Management Application for inventory tracking, user management, and laboratory workflows.',
      'Implemented state management using Valtio and MobX, and managed API synchronization via TanStack Query.'
    ],
  },
  {
    id: '2',
    company: 'Nextzy',
    companyDescription: 'A dynamic tech firm focusing on modern full-stack development and innovative products.',
    role: 'Full-stack Developer',
    period: 'May 2024 - Aug 2024',
    duration: '4 Mos',
    highlights: [
      'Built a full-stack Web Road Transportation System using NestJS and Oracle DB.',
      'Created internal data management pages with React, Redux, and Bootstrap.',
      'Used Axios to smoothly connect external services for real-time data synchronization.'
    ],
  },
  {
    id: '3',
    company: 'Devcula',
    companyDescription: 'A specialized software development house known for blockchain and fintech projects.',
    role: 'Frontend Developer',
    period: 'Jan 2023 - Jan 2024',
    duration: '1 Yr',
    highlights: [
      'Developed a mobile crypto trading app with bot features using React Native.',
      'Built a secure blockchain voting website using Next.js, Tailwind CSS, MUI, and Ant Design.',
      'Handled complex data and forms with GraphQL, React Query, and React Hook Form.',
      'Set up automated tests with Playwright to ensure high application reliability.'
    ],
  },
  {
    id: '4',
    company: 'Ookbee',
    companyDescription: 'One of SE Asia\'s largest digital content platforms and tech ecosystems.',
    role: 'Full-stack Developer (Intern)',
    period: 'Jun 2022 - Dec 2022',
    duration: '7 Mos',
    highlights: [
      'Built websites from front-end to back-end using React, Next.js, NestJS, and Node.js.',
      'Designed web interfaces using Tailwind CSS, Ant Design, and MUI.',
      'Managed databases like PostgreSQL and MongoDB and built standard REST APIs.',
      'Learned clean code practices, project structuring, and application performance optimization.'
    ],
  },
]

import ExperienceIcon from './icon/experienceIcon'
import ExperienceBox from './experienceBox'

export default function Experience() {
  return (
    <div id='experience' className='py-32 xl:px-[15rem] bg-transparent'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col items-center justify-center mb-20'>
          <div className='flex items-center text-2xl font-black uppercase text-slate-900 tracking-widest'>
            <p>Career Journey</p>
            <ExperienceIcon />
          </div>
          <div className='mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100'>
             <span className='text-slate-500 text-sm font-medium'>Total Experience:</span>
             <span className='text-teal-600 text-sm font-black'>4 Years</span>
          </div>
        </div>

        <div className='max-w-4xl mx-auto'>
          {experiences.map((experience, index) => (
            <ExperienceBox
              key={experience.id}
              title={experience.company}
              companyDescription={experience.companyDescription}
              position={experience.role}
              period={experience.period}
              duration={experience.duration}
              highlights={experience.highlights}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
