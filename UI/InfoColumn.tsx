type Props = {
    title: string
}

const InfoColumn = ({ title }: Props) => {
  return (
      <p className="text-xl text-white mb-[1.72rem]">{title}</p>
  )
}

export default InfoColumn