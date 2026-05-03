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
    <div className='group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl border border-slate-100 hover:border-teal-500/20'>
      <div className='flex flex-col lg:flex-row gap-10'>
        {/* Visual Element */}
        <div className='w-full lg:w-1/3 h-64 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-all duration-500'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
          <span className='text-6xl font-black bg-gradient-to-br from-slate-400 to-slate-600 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-teal-600 transition-all duration-700'>
            {initials}
          </span>
        </div>
        
        <div className='flex-1 flex flex-col gap-6'>
          <div className='space-y-2'>
            <h3 className='text-3xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors'>
              {title}
            </h3>
            <p className='text-lg text-slate-600 leading-relaxed font-normal'>
              {description}
            </p>
          </div>
          
          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='h-px w-6 bg-teal-500/30'></div>
              <p className='text-xs font-black uppercase tracking-[0.2em] text-teal-600/80'>Key Contributions</p>
            </div>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3'>
              {highlights.map((highlight, index) => (
                <li key={index} className='flex items-start gap-3 text-slate-500 text-[14px] leading-snug group/item hover:text-slate-900 transition-colors'>
                  <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-200 group-hover:bg-teal-500 group-hover/item:bg-teal-600 transition-colors' />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className='mt-4 flex flex-wrap gap-2.5'>
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className='rounded-xl bg-slate-50 border border-slate-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:border-teal-500/20 group-hover:text-teal-600 transition-all duration-300'
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
