import React from 'react'

const assetPrefix = '/my-port'

export default function Experience() {
  return (
    <>
      <div className='py-40 px-52'>
        <div className='container mx-auto flex flex-col'>
          <div className='flex items-center justify-center text-start text-2xl font-extrabold uppercase text-slate-700'>
            <p>Experience</p>
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
                d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
              ></path>
            </svg>
          </div>
          <div className='grid grid-cols-2 gap-10'>
            <div className='mt-10 w-full rounded-[10px] bg-white py-6 px-8 pt-8 shadow'>
              <div className='mt-4 ml-4 flex flex-col items-center justify-center'>
                <img className='h-10 w-10' src={`${assetPrefix}/ob.png`}></img>
                <p className='ml-2 mt-4 font-semibold'>Internship at Ookbee U: Career Project</p>
              </div>
              <p className='m-6 text-center'>
                {' '}
                Respectively. When a user locates a position that interests them, they can search
                and filter the available positions. Despite the fact that the admin page has JWT
                token authentication and a reset password method that sends an otp to your email
                when you forget it. The landing page of the website shows the working environment
                and has a page with filters for the different kinds of jobs that the organization is
                looking for.{' '}
              </p>
            </div>
            <div className='mt-10 w-full rounded-[10px] bg-white py-6 px-8 pt-8 shadow'>
              <div className='mt-4 ml-4 flex flex-col items-center justify-center'>
                <img className='h-10 w-10' src={`${assetPrefix}/vango.png`}></img>
                <p className='ml-2 mt-4 font-semibold'>Capstone Project: Reservation Van</p>
              </div>
              <p className='m-6 text-center'>
                {' '}
                Can allow drivers and passengers to see the schedule time, identify passengers who
                have registered their cars on their maps, and view the route path, which can
                estimate time and distance from the driver's location. As a result, we have an admin
                cms admin who can control the vehicle, schedule, and route.{' '}
              </p>
            </div>
            <div className='w-full rounded-[10px] bg-white py-6 px-8 pt-8 shadow'>
              <div className='mt-4 ml-4 flex flex-col items-center justify-center'>
                <img className='h-10 w-10' src={`${assetPrefix}/plant1.png`}></img>
                <p className='ml-2 mt-4 font-semibold'>University Project: Reforestation</p>
              </div>
              <p className='m-6 text-center'>
                {' '}
                The main idea is to emphasize the value of forests. We created a platform that is
                based on the SDGs and uses Flutter to code. Users can publish activities related to
                the forest to invite others to participate in those activities. The system also
                contains login and profile systems so users can change their own information.{' '}
              </p>
            </div>
            <div className='w-full rounded-[10px] bg-white py-6 px-8 pt-8 shadow'>
              <div className='mt-4 ml-4 flex flex-col items-center justify-center'>
                <img className='h-10 w-10' src={`${assetPrefix}/programming.png`}></img>
                <p className='ml-2 mt-4 font-semibold'>Workshop: Javascript</p>
              </div>
              <div className='m-6'>
                <p className='text-center'> Postpost(Posting site for random image in post.)</p>
                <p className='text-center'>
                  maphoto(Image search engine website. If search for dog, it’s will show only images
                  of dog)
                </p>
                <p className='text-center'>
                  Seasons(Wether and season forecast based on user location.){' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
