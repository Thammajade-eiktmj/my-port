const assetPrefix = '/my-port'

interface ExperienceBoxProp {
  imgSrc: string
  title: string
  position: string
  period: string
  description: string
}

const ExperienceBox = (props: ExperienceBoxProp) => {
  const { imgSrc, title, position, period, description } = props
  return (
    <div className='mt-10 w-full rounded-[10px] bg-white py-6 px-8 pt-8 shadow'>
      <div className='mt-4 ml-4 flex flex-col items-center justify-center'>
        <img className='h-10 w-10' src={`${assetPrefix}${imgSrc}`}></img>
        <p className='ml-2 mt-4 font-semibold'>{title}</p>
        <p className='ml-2 mt-1'>
          {position}, {period}
        </p>
      </div>
      <p className='m-6 text-center'>{description}</p>
    </div>
  )
}

export default ExperienceBox
