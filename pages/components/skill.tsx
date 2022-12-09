import React from 'react'

const assetPrefix = '/my-port'

export default function Skill() {
  return (
    <>
      <div className='py-40 px-52'>
        <div className='container mx-auto flex flex-col'>
          <div className='flex items-center justify-center text-start text-2xl font-extrabold uppercase text-slate-700'>
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
          <div className='mt-10 grid grid-flow-col grid-rows-2 gap-10'>
            <div className='flex max-w-[180px] flex-col items-center justify-center rounded-[10px] bg-white py-12 shadow'>
              <img className='h-12 w-12 rounded-full' src={`${assetPrefix}/ts.png`} />
              <p className='ml-2 mt-6'>TypeScript</p>
            </div>
            <div className='flex max-w-[180px] flex-col items-center justify-center rounded-[10px] bg-white py-12 shadow'>
              <img className='h-12 w-12 rounded-full' src={`${assetPrefix}/tw1.png`} />
              <p className='ml-2 mt-6'>Tailwindcss</p>
            </div>
            <div className='flex max-w-[180px] flex-col items-center justify-center rounded-[10px] bg-white py-12 shadow'>
              <img className='h-12 w-12 rounded-full' src={`${assetPrefix}/react.png`} />
              <p className='ml-2 mt-6'>ReactJs</p>
            </div>
            <div className='flex max-w-[180px] flex-col items-center justify-center rounded-[10px] bg-white py-12 shadow'>
              <img className='h-12 w-12 rounded-full' src={`${assetPrefix}/react.png`} />
              <p className='ml-2 mt-6'>React Native</p>
            </div>
            <div className='flex max-w-[180px] flex-col items-center justify-center rounded-[10px] bg-white py-12 shadow'>
              <img className='h-12 w-12 rounded-full' src={`${assetPrefix}//next.jpeg`} />
              <p className='ml-2 mt-6'>NextJs</p>
            </div>
            <div className='flex max-w-[180px] flex-col items-center justify-center rounded-[10px] bg-white py-12 shadow'>
              <img className='h-12 w-12 rounded-full' src={`${assetPrefix}/nestjs.png`} />
              <p className='ml-2 mt-6'>NestJs</p>
            </div>
            <div className='flex max-w-[180px] flex-col items-center justify-center rounded-[10px] bg-white py-12 shadow'>
              <img className='h-12 w-12 rounded-full' src={`${assetPrefix}/net.png`} />
              <p className='ml-2 mt-6'>.Net</p>
            </div>
            <div className='flex max-w-[180px] flex-col items-center justify-center rounded-[10px] bg-white py-12 shadow'>
              <img className='h-12 w-12 rounded-full' src={`${assetPrefix}/typeorm.png`} />
              <p className='ml-2 mt-6'>TypeOrm</p>
            </div>
            <div className='flex max-w-[180px] flex-col items-center justify-center rounded-[10px] bg-white py-12 shadow'>
              <img className='h-12 w-12 rounded-full' src={`${assetPrefix}/ps.png`} />
              <p className='ml-2 mt-6'>Postgresql</p>
            </div>
            <div className='flex max-w-[180px] flex-col items-center justify-center rounded-[10px] bg-white py-12 shadow'>
              <img className='h-12 w-12 rounded-full' src={`${assetPrefix}/li.png`} />
              <p className='ml-2 mt-6'>Linux</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
