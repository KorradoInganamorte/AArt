type Props = {
    title: string
    of: string
    mb?: string
}

const InfoColumn = ({ title, of, mb }: Props) => {
  return (
      <p className={`text-4xl text-white mb-[${mb}rem]`}>{title} <span className="text-xl">из {of}</span></p>
  )
}

export default InfoColumn