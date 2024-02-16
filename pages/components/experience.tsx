import React from 'react'
import ExperienceIcon from './icon/experienceIcon'
import ExperienceBox from './experienceBox'

interface Experience {
  id: string
  imgSrc: string
  title: string
  position: string
  period: string
  description: string
}

const experiences: Experience[] = [
  {
    id: '5',
    imgSrc: 'lag-hyperlink.png',
    title: 'Fulltime at Lab Hyperlink',
    position: 'Fullstack Developer',
    period: 'current',
    description: 'In addition experiences in Node.js, Express.js, React.js and further more',
  },
  {
    id: '5',
    imgSrc: '/exp/devcula_logo.jpeg',
    title: 'Fulltime at Devcula',
    position: 'Frontend Developer',
    period: '2023-2024',
    description:
      'In my one-year tenure as a frontend developer, I&apos;ve excelled in crafting web and mobile applications, notably contributing to a crypto trading platform with an integrated bot and a blockchain-based voting website and otthers. Proficient in React, React Native, Next.js, MUI, Tailwind, and AntD, I&apos;ve tackled bug fixes, implemented features, and optimized code for scalability. My role extended to project structuring, using Jira for agile management. My commitment to delivering high-quality products and adapting to evolving technologies positions me as a valuable asset to any forward-looking team. Ready to bring my skills and experience to contribute effectively to new challenges.',
  },
  {
    id: '6',
    imgSrc: '/exp/ob.png',
    title: 'Internship at Ookbee U',
    position: 'Fullstack Developer',
    period: 'June-December-2022',
    description:
      'Career Project, Respectively. When a user locates a position that interests them, they can search and filter the available positions. Despite the fact that the admin page has JWT token authentication and a reset password method that sends an otp to your email when you forget it. The landing page of the website shows the working environment and has a page with filters for the different kinds of jobs that theorganization is looking for.',
  },
  {
    id: '7',
    imgSrc: '/exp/vango.png',
    title: 'Capstone Project',
    position: 'Fullstack Developer',
    period: '',
    description:
      'Reservation Van, Can allow drivers and passengers to see the schedule time, identify passengers who have registered their cars on their maps, and view the route path, which can estimate time and distance from the driver&apos;s location. As a result, we have an admin cms admin who can control the vehicle, schedule, and route.',
  },
  {
    id: '8',
    imgSrc: '/exp/plant1.png',
    title: 'University Project',
    position: 'Fullstack Developer',
    period: '',
    description:
      'Aligned with SDGs, used Flutter to develop a user-engaging app for forest- related activities. Integrated login/profile systems for user customization. Ready to contribute diverse skills and project experience in a professional setting.',
  },
  {
    id: '9',
    imgSrc: '/exp/plant1.png',
    title: 'Practice Projects',
    position: 'HTML, CSS, Javascript',
    period: '',
    description:
      'Developed an image posting site for random posts, created a search engine filtering images by queries, and implemented a location-based weather forecasting system.',
  },
]

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
            {experiences.map((experience) => (
              <ExperienceBox
                key={experience.id}
                imgSrc={experience.imgSrc}
                title={experience.title}
                position={experience.position}
                period={experience.period}
                description={experience.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
