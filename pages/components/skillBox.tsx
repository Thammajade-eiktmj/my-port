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
    <div className='flex flex-col items-center justify-center rounded-xl bg-slate-900/40 p-5 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/60 transition-all group'>
      <div className='h-14 w-14 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-all shadow-inner'>
        <span className='text-lg font-bold uppercase tracking-tighter group-hover:scale-110 transition-transform'>
          {initials}
        </span>
      </div>
      <p className='mt-4 text-xs font-semibold text-slate-400 group-hover:text-emerald-400 transition-colors text-center tracking-tight'>
        {name}
      </p>
    </div>
  )
}

export default SkillBox
