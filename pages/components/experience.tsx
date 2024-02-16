import React from 'react'
import ExperienceIcon from './icon/experienceIcon'

const assetPrefix = '/my-port'

export default function Experience() {
  return (
    <>
      <div className='xl:py-40 xl:px-[15rem]'>
        <div className='container mx-auto flex flex-col'>
          <div className='flex items-center justify-center text-start text-2xl font-extrabold uppercase text-slate-700'>
            <p>Experience</p>
            <ExperienceIcon />
          </div>
          <div className='grid gap-10 xl:grid-cols-2'>
            <div className='mt-10 w-full rounded-[10px] bg-white py-6 px-8 pt-8 shadow'>
              <div className='mt-4 ml-4 flex flex-col items-center justify-center'>
                <img className='h-10 w-10' src={`${assetPrefix}/exp/ob.png`}></img>
                <p className='ml-2 mt-4 font-semibold'>Internship at Ookbee U</p>
                <p className='ml-2 mt-1'>Fullstack Developer, June-December</p>
              </div>
              <p className='m-6 text-center'>
                {' '}
                Career Project, Respectively. When a user locates a position that interests them,
                they can search and filter the available positions. Despite the fact that the admin
                page has JWT token authentication and a reset password method that sends an otp to
                your email when you forget it. The landing page of the website shows the working
                environment and has a page with filters for the different kinds of jobs that the
                organization is looking for.{' '}
              </p>
            </div>
            <div className='mt-10 w-full rounded-[10px] bg-white py-6 px-8 pt-8 shadow'>
              <div className='mt-4 ml-4 flex flex-col items-center justify-center'>
                <img className='h-10 w-10' src={`${assetPrefix}/exp/vango.png`}></img>
                <p className='ml-2 mt-4 font-semibold'>Capstone Project</p>
                <p className='ml-2 mt-1'>Fullstack Developer</p>
              </div>
              <p className='m-6 text-center'>
                {' '}
                Reservation Van, Can allow drivers and passengers to see the schedule time, identify
                passengers who have registered their cars on their maps, and view the route path,
                which can estimate time and distance from the driver's location. As a result, we
                have an admin cms admin who can control the vehicle, schedule, and route.{' '}
              </p>
            </div>
            <div className='w-full rounded-[10px] bg-white py-6 px-8 pt-8 shadow'>
              <div className='mt-4 ml-4 flex flex-col items-center justify-center'>
                <img className='h-10 w-10' src={`${assetPrefix}/exp/plant1.png`}></img>
                <p className='ml-2 mt-4 font-semibold'>University Project</p>
              </div>
              <p className='m-6 text-center'>
                {' '}
                Reforestation, The main idea is to emphasize the value of forests. We created a
                platform that is based on the SDGs and uses Flutter to code. Users can publish
                activities related to the forest to invite others to participate in those
                activities. The system also contains login and profile systems so users can change
                their own information.{' '}
              </p>
            </div>
            <div className='w-full rounded-[10px] bg-white py-6 px-8 pt-8 shadow'>
              <div className='mt-4 ml-4 flex flex-col items-center justify-center'>
                <img className='h-10 w-10' src={`${assetPrefix}/exp/programming.png`}></img>
                <p className='ml-2 mt-4 font-semibold'>Workshop</p>
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
