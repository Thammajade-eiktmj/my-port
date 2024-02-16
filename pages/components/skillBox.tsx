const assetPrefix = '/my-port'

interface SkillBoxProp {
  imgSrc: string
  name: string
}

const SkillBox = (props: SkillBoxProp) => {
  const { imgSrc, name } = props
  return (
    <div className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[10px] bg-white p-6 shadow'>
      <img className='h-14 w-14 rounded-full' src={`${assetPrefix}${imgSrc}`} />
      <p className='mt-6'>{name}</p>
    </div>
  )
}

export default SkillBox
