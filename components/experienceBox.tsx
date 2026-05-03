import React from 'react'

interface ExperienceBoxProp {
  title: string
  companyDescription?: string
  position: string
  period: string
  highlights: string[]
  duration: string
  isLast?: boolean
}

const ExperienceBox = ({ 
  title, 
  companyDescription, 
  position, 
  period, 
  highlights, 
  duration, 
  isLast 
}: ExperienceBoxProp) => {
  // Get initials from title
  const initials = title
    .split(' ')
    .map(word => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()

  return (
    <div className='relative flex gap-8 pb-16 group'>
      {/* Timeline Line */}
      {!isLast && (
        <div className='absolute left-[2rem] top-20 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-emerald-500/30 via-slate-800 to-transparent' />
      )}

      {/* Timeline Node (Initials) */}
      <div className='relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl group-hover:border-emerald-500/50 transition-all duration-500 group-hover:scale-105'>
        <div className='absolute -inset-2 rounded-3xl bg-emerald-500/5 opacity-0 blur-xl group-hover:opacity-100 transition-opacity'></div>
        <span className='text-xl font-black bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-sky-500'>
          {initials}
        </span>
      </div>

      {/* Content Area */}
      <div className='flex flex-col flex-1'>
        <div className='flex flex-wrap items-baseline justify-between gap-4'>
          <div className='flex flex-col'>
            <h4 className='text-2xl font-black text-slate-50 tracking-tight group-hover:text-emerald-400 transition-colors duration-300'>
              {title}
            </h4>
            {companyDescription && (
              <p className='mt-1 text-xs font-medium text-slate-500 italic max-w-md'>
                {companyDescription}
              </p>
            )}
          </div>
          <span className='rounded-full bg-emerald-500/5 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-400 border border-emerald-500/10 backdrop-blur-sm'>
            {duration}
          </span>
        </div>
        
        <div className='mt-3 flex items-center gap-3'>
          <p className='text-lg font-bold text-sky-400/90 tracking-wide'>{position}</p>
          <span className='h-1 w-1 rounded-full bg-slate-700' />
          <p className='text-sm font-mono text-slate-500'>{period}</p>
        </div>
        
        <div className='mt-6 relative overflow-hidden rounded-3xl bg-slate-900/40 p-1 border border-slate-800/50 group-hover:border-slate-700/50 transition-all duration-500'>
          <div className='bg-slate-950/40 rounded-[1.4rem] p-6'>
            <ul className='space-y-4'>
              {highlights.map((item, idx) => (
                <li key={idx} className='flex gap-3 text-slate-400 leading-relaxed group/item'>
                  <div className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/40 group-hover/item:bg-emerald-400 transition-colors' />
                  <span className='text-[15px] font-light group-hover/item:text-slate-300 transition-colors italic'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceBox
