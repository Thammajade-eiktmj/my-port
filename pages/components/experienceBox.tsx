import React from 'react'

interface ExperienceBoxProp {
  title: string
  position: string
  period: string
  description: string
  duration: string
  isLast?: boolean
}

const ExperienceBox = ({ title, position, period, description, duration, isLast }: ExperienceBoxProp) => {
  // Get initials from title
  const initials = title
    .split(' ')
    .map(word => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()

  return (
    <div className='relative flex gap-8 pb-12 group'>
      {/* Timeline Line */}
      {!isLast && (
        <div className='absolute left-[2rem] top-16 h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-emerald-500/50 to-transparent' />
      )}

      {/* Timeline Node (Initials) */}
      <div className='relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 shadow-xl group-hover:border-emerald-500 transition-all duration-300'>
        <div className='absolute -inset-1 rounded-2xl bg-emerald-500/10 opacity-0 blur group-hover:opacity-100 transition-opacity'></div>
        <span className='text-xl font-bold bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:from-sky-400 group-hover:to-emerald-500'>
          {initials}
        </span>
      </div>

      {/* Content */}
      <div className='flex flex-col pt-1'>
        <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
          <h4 className='text-2xl font-black text-slate-50 group-hover:text-emerald-400 transition-colors'>
            {title}
          </h4>
          <span className='rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20'>
            {duration}
          </span>
        </div>
        
        <p className='mt-1 text-lg font-bold text-sky-400/90'>{position}</p>
        <p className='mt-1 text-sm font-mono text-slate-500 tracking-wider'>{period}</p>
        
        <div className='mt-4 max-w-2xl rounded-2xl bg-slate-900/40 p-6 border border-slate-800/50 group-hover:border-slate-700 transition-all'>
          <p className='text-slate-400 leading-relaxed font-light'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ExperienceBox
