import React from 'react'
import ProjectBox from './projectBox'

const projects = [
  {
    title: 'Electronic Document Management Portal (Antigravity)',
    description: 'Built an enterprise EDMS with complex approval workflows, digital signatures, and QR verification.',
    highlights: [
      'Developed the core frontend using Vite React 19 and Tailwind v4.',
      'Implemented a custom Lexical text editor for professional document creation.',
      'Integrated AI document summarization for improved administrative efficiency.',
      'Designed interactive Recharts dashboards for real-time organizational insights.',
    ],
    technologies: ['Vite', 'React 19', 'Tailwind CSS v4', 'Lexical Editor', 'Recharts', 'AI Integration']
  },
  {
    title: 'Provident Fund Management Application (Antigravity)',
    description: 'A multi-step onboarding flow for fund membership and interactive risk assessment.',
    highlights: [
      'Built a multi-step onboarding flow for fund membership using Formik and Valtio.',
      'Developed an interactive risk assessment module that adapts UI themes based on results.',
      'Implemented complex form handling for member profiles, beneficiaries, and investment plans.',
      'Integrated PDPA consent and registration APIs via TanStack Query.',
      'Managed application routing with Wouter for a seamless user experience.'
    ],
    technologies: ['Vite', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Formik', 'Valtio', 'TanStack Query', 'Wouter']
  },
  {
    title: 'Enterprise Lab Management Application',
    description: 'An enterprise management system for inventory tracking and laboratory workflows.',
    highlights: [
      'Built core modules for inventory tracking, user management, and laboratory workflows.',
      'Implemented state management using MobX for complex application states.',
      'Integrated digital signature features for secure laboratory document approvals.',
      'Handled complex form data with Formik and managed API synchronization through TanStack Query.'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MobX', 'Formik', 'TanStack Query']
  },
  {
    title: 'Web Road Transportation System',
    description: 'A full-stack system for managing road transportation data and internal operations.',
    highlights: [
      'Handled the backend using NestJS and Oracle DB for robust data management.',
      'Created internal data management pages with React and Redux.',
      'Styled the interface using Bootstrap and used Axios to connect external services.'
    ],
    technologies: ['NestJS', 'Oracle DB', 'React', 'Redux', 'Bootstrap', 'Axios']
  },
  {
    title: 'FinTech Crypto & Blockchain Voting',
    description: 'A mobile crypto trading app and a secure blockchain-based voting website.',
    highlights: [
      'Developed a mobile crypto trading app with bot features using React Native.',
      'Built a secure blockchain voting website using Next.js and secure smart contracts.',
      'Designed clean, responsive screens using Tailwind CSS, MUI, and Ant Design.',
      'Handled complex data and forms with GraphQL, React Query, and React Hook Form.',
      'Set up automated tests with Playwright to ensure application reliability.'
    ],
    technologies: ['React Native', 'Next.js', 'Tailwind CSS', 'MUI', 'Ant Design', 'GraphQL', 'React Query', 'Playwright']
  }
]

export default function Projects() {
  return (
    <div className='bg-slate-900 py-20 xl:px-[15rem]'>
      <div className='container mx-auto flex flex-col'>
        <div className='flex items-center justify-center text-start text-2xl font-extrabold uppercase text-slate-100 mb-12'>
          <p>Projects</p>
          <svg
            className='ml-3 h-8 w-8 text-emerald-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
            ></path>
          </svg>
        </div>
        <div className='grid gap-8 lg:grid-cols-1 xl:grid-cols-1 px-4'>
          {projects.map((project, index) => (
            <ProjectBox
              key={index}
              title={project.title}
              description={project.description}
              highlights={project.highlights}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
