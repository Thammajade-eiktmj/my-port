import React from 'react'

interface SkillBoxProp {
  name: string
}

const SkillBox = ({ name }: SkillBoxProp) => {
  // Get initials: "TypeScript" -> "TS", "React" -> "RE"
  const initials = name.includes(' ') 
    ? name.split(' ').map(w => w[0]).join('').substring(0, 2)
    : name.substring(0, 2)

  return (
    <div className='group flex flex-col items-center justify-center rounded-2xl bg-white p-4 shadow-sm border border-slate-100 hover:border-teal-500/40 hover:shadow-md transition-all duration-300'>
      <div className='relative flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-400 transition-all duration-300 group-hover:border-teal-500/30 group-hover:text-teal-600 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.1)]'>
        <span className='text-sm font-black uppercase tracking-tight group-hover:scale-110 transition-transform'>
          {initials}
        </span>
      </div>
      <p className='mt-3 text-[11px] font-bold text-slate-500 group-hover:text-slate-900 transition-colors text-center uppercase tracking-wider'>
        {name}
      </p>
    </div>
  )
}

export default SkillBox
