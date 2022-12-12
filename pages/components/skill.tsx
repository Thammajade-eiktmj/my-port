import React from 'react'

const assetPrefix = '/my-port'

export default function Skill() {
  return (
    <>
      <div className='px-52 pt-40'>
        <div className='container mx-auto flex flex-col'>
          <div className='flex items-center justify-center text-start text-2xl font-extrabold uppercase'>
            <p>SKills</p>
            <svg
              className='ml-2 h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              ></path>
            </svg>
          </div>
          <div className='mt-10 grid grid-flow-col grid-rows-2 items-center justify-center gap-16'>
            <div className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[10px] bg-white p-6 shadow'>
              <img className='block h-14 w-14 rounded-full' src={`${assetPrefix}/skill/ts.png`} />
              <div className='mt-6'>TypeScript</div>
            </div>
            <div className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[10px] bg-white p-6 shadow'>
              <img className='h-14 w-14 rounded-full' src={`${assetPrefix}/skill/tw1.png`} />
              <p className='mt-6'>Tailwind</p>
            </div>
            <div className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[10px] bg-white p-6 shadow'>
              <img className='h-14 w-14 rounded-full' src={`${assetPrefix}/skill/react.png`} />
              <p className='mt-6'>React</p>
            </div>
            <div className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[10px] bg-white p-6 shadow'>
              <img className='h-14 w-14 rounded-full' src={`${assetPrefix}/skill/react.png`} />
              <p className='mt-6'>Native</p>
            </div>
            <div className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[10px] bg-white p-6 shadow'>
              <img className='h-14 w-14 rounded-full' src={`${assetPrefix}/skill//next.jpeg`} />
              <p className='mt-6'>Next</p>
            </div>
            <div className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[10px] bg-white p-6 shadow'>
              <img className='h-14 w-14 rounded-full' src={`${assetPrefix}/skill/nestjs.png`} />
              <p className='mt-6'>Nest</p>
            </div>
            <div className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[10px] bg-white p-6 shadow'>
              <img className='h-14 w-14 rounded-full' src={`${assetPrefix}/skill/net.png`} />
              <p className='mt-6'>.Net</p>
            </div>
            <div className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[10px] bg-white p-6 shadow'>
              <img className='h-14 w-14 rounded-full' src={`${assetPrefix}/skill/typeorm.png`} />
              <p className='mt-6'>TypeOrm</p>
            </div>
            <div className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[10px] bg-white p-6 shadow'>
              <img className='h-14 w-14 rounded-full' src={`${assetPrefix}/skill/ps.png`} />
              <p className='mt-6'>Postgresql</p>
            </div>
            <div className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[10px] bg-white p-6 shadow'>
              <img className='h-14 w-14 rounded-full' src={`${assetPrefix}/skill/docker.png`} />
              <p className='mt-6'>Docker</p>
            </div>
            <div className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[10px] bg-white p-6 shadow'>
              <img className='h-14 w-14 rounded-full' src={`${assetPrefix}/skill/li.png`} />
              <p className='mt-6'>Linux</p>
            </div>
            <div className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[10px] bg-white p-6 shadow'>
              <img className='h-14 w-14 rounded-full' src={`${assetPrefix}/skill/git.png`} />
              <p className='mt-6'>Git</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
