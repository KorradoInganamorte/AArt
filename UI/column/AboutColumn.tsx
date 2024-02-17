type Props = {
    title: string
    info: string
}

const AboutColumn = ({ title, info }: Props) => {
  return (
    <div className="flex items-end justify-between mb-[1rem]">
        <p className="text-lg text-gray-item-card">{title}:</p>
        <p className="text-xl text-white whitespace-nowrap">{info}</p>
    </div>
  )
}

export default AboutColumn