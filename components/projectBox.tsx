import React from 'react'

const assetPrefix = '/my-port'

interface ProjectBoxProps {
  title: string
  description: string
  technologies: string[]
  highlights: string[]
}

const ProjectBox = ({ title, description, technologies, highlights }: ProjectBoxProps) => {
  // Get initials from title: "Polling & Voting" -> "PV"
  const initials = title
    .split(' ')
    .filter(word => !['&', '-'].includes(word))
    .map(word => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()

  return (
    <div className='group relative overflow-hidden rounded-2xl bg-slate-900/40 p-8 shadow-2xl transition-all hover:bg-slate-900/60 hover:shadow-emerald-500/10 border border-slate-800 hover:border-emerald-500/50'>
      <div className='flex flex-col md:flex-row gap-8'>
        {/* Acronym Placeholder */}
        <div className='w-full md:w-1/3 h-48 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center relative overflow-hidden group-hover:border-emerald-500/30 transition-all duration-500'>
          <div className='absolute inset-0 bg-gradient-to-br from-sky-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity'></div>
          <span className='text-5xl font-black bg-gradient-to-br from-slate-200 to-slate-500 bg-clip-text text-transparent group-hover:from-sky-400 group-hover:to-emerald-500 transition-all duration-500'>
            {initials}
          </span>
        </div>
        
        <div className='flex-1 flex flex-col gap-4'>
          <h3 className='text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors'>
            {title}
          </h3>
          <p className='text-slate-400 leading-relaxed font-light'>
            {description}
          </p>
          
          <div className='space-y-3'>
            <p className='text-sm font-semibold uppercase tracking-wider text-slate-500/80'>Key Highlights</p>
            <ul className='space-y-2'>
              {highlights.map((highlight, index) => (
                <li key={index} className='flex items-start gap-2 text-slate-300 text-sm'>
                  <span className='mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors' />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className='rounded-full bg-slate-800/50 border border-slate-700/50 px-3 py-1 text-xs font-medium text-slate-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectBox
