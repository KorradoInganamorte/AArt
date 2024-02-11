type Props = {
    title: string
    info: string
}

const AboutColumn = ({ title, info }: Props) => {
  return (
    <div className="flex items-end justify-between mb-[1rem]">
        <p className="text-base laptop:text-lg text-gray-item-card">{title}:</p>
        <p className="text-lg laptop:text-xl text-white whitespace-nowrap">{info}</p>
    </div>
  )
}

export default AboutColumn