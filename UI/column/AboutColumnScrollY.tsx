type Props = {
    title: string
    info: string
}

const AboutColumnScrollY = ({ title, info }: Props) => {
  return (
    <div className="flex items-end mb-[.6rem]">
        <p className="text-xl text-gray-item-card mr-[2rem]">{title}:</p>
        <p className="text-xl text-white whitespace-nowrap">{info}</p>
    </div>
  )
}

export default AboutColumnScrollY