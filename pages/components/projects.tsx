import React from 'react'
import ProjectBox from './projectBox'

const projects = [
  {
    title: 'Electronic Document Management System',
    description: 'A high-scale digital transformation platform for complex administrative workflows.',
    highlights: [
      'Engineered a multi-tiered approval system with digital signatures and automated document forwarding using Valtio.',
      'Developed a Lexical-based rich-text infrastructure with dynamic markers and secure QR Code verification.',
      'Integrated AI-powered tools for intelligent form-filling and automated content summarization.',
      'Architected interactive dashboards using Recharts and D3.js for real-time organizational data insights.',
      'Leveraged React 19 and Tailwind CSS v4 to deliver a high-performance experience.'
    ],
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Valtio', 'TanStack Query', 'Axios', 'Lexical Editor', 'D3.js', 'Recharts', 'Formik', 'Yup']
  },
  {
    title: 'Financial Management Platform',
    description: 'A large-scale financial system for a major national utility organization.',
    highlights: [
      'Built a seamless enrollment flow with integrated risk assessment and investment profiling.',
      'Implemented AI features for document management to automate and reduce administrative overhead.',
      'Developed a high-performance, responsive UI using React and Tailwind CSS v4 for thousands of users.',
      'Managed complex financial data states using Valtio to ensure real-time consistency and maintainability.'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS v4', 'Valtio', 'TanStack Query', 'Axios']
  },
  {
    title: 'Polling & Voting Application',
    description: 'Developed a versatile polling engine supporting multiple formats: single-choice, multiple-choice, and open-ended responses.',
    highlights: [
      'Integrated social engagement features, including real-time liking and commenting systems.',
      'Optimized data fetching and server-state synchronization using React Query.',
      'Designed a clean and intuitive user interface using Material UI.'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Material UI (MUI)', 'React Query']
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
